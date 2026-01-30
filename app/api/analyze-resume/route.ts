import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// @ts-ignore
import pdf from "pdf-parse";

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { fileUrl, resumeId } = await req.json();

    // 1. Download & Parse
    const response = await fetch(fileUrl);
    const buffer = Buffer.from(await response.arrayBuffer());
    const pdfData = await pdf(buffer);
    const resumeText = pdfData.text.slice(0, 4000);

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    ];

    let parsedData: any = null;
    
    // 🟢 2. UPDATED Model Loop: Using gemini-1.5-flash for stability
    const modelsToTry = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-flash-latest"];
    
    for (const modelName of modelsToTry) {
      try {
        console.log(`🤖 Analyzing with ${modelName}...`);
        const model = genAI.getGenerativeModel({ model: modelName, safetySettings });

        const prompt = `
You are an expert recruiter. Extract structured data from the resume and also evaluate it against industry standards.

TASK:
1. Extract the candidate's name, email, target/current role, skills, and experience.
2. Estimate an ATS-style numeric "score" (0–100) for how strong this resume is for their role.
3. Identify exactly three (3) specific areas of improvement and provide actionable advice for each.

Return STRICTLY valid JSON (no markdown, no backticks) with this exact shape:
{
  "name": "string",
  "role": "string",
  "email": "string",
  "skills": ["string"],
  "score": number,
  "experience": [
    { "role": "string", "company": "string", "duration": "string", "description": "string" }
  ],
  "suggestions": [
    { "area": "string", "issue": "string", "advice": "string" },
    { "area": "string", "issue": "string", "advice": "string" },
    { "area": "string", "issue": "string", "advice": "string" }
  ]
}

Resume text:
${resumeText}
        `;

        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json|```/g, "").trim();
        parsedData = JSON.parse(text);
        
        if (parsedData) break; 

      } catch (e: any) {
        console.warn(`⚠️ ${modelName} failed:`, e.message);
      }
    }

    if (!parsedData) throw new Error("AI Processing Failed. All models returned errors.");

    // Ensure suggestions array is present and at most 3 items
    if (!Array.isArray(parsedData.suggestions)) {
      parsedData.suggestions = [];
    } else if (parsedData.suggestions.length > 3) {
      parsedData.suggestions = parsedData.suggestions.slice(0, 3);
    }

    // 3. THE FORCE FIX: Calculate Score Manually if AI fails
    let calculatedScore = Number(parsedData.score ?? parsedData.ats_score);

    if (isNaN(calculatedScore) || calculatedScore === 0) {
      const skillCount = Array.isArray(parsedData.skills) ? parsedData.skills.length : 0;
      calculatedScore = 70 + (skillCount * 2); 
      if (calculatedScore > 95) calculatedScore = 95;
    }

    const finalScore = Math.round(calculatedScore);

    // 4. SAVE IN ALL FORMATS 
    parsedData.ats_score = finalScore;   
    parsedData.atsScore = finalScore;    
    parsedData.score = finalScore;       
    parsedData.Score = finalScore;       

    console.log("✅ FINAL SCORE SAVED TO DB:", finalScore);

    // 5. Update DB
    await supabase.from("resumes").update({ parsed_json: parsedData }).eq("id", resumeId);
    return NextResponse.json({ success: true, data: parsedData }); // 🟢 Match the frontend 'data' property

  } catch (error: any) {
    console.error("Critical Failure:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}