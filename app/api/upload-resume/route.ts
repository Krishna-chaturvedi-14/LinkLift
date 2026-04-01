import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

// We use the service role key to bypass RLS since we verify auth with Clerk
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;
        const isImage = formData.get("isImage") === "true";
        
        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const filePath = `${userId}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;

        // 1. Upload to Supabase Storage
        const { error: storageError } = await supabase.storage
            .from("resumes")
            .upload(filePath, file, {
                cacheControl: "3600",
                upsert: false,
            });

        if (storageError) {
            console.error("Storage upload error:", storageError);
            return NextResponse.json({ error: storageError.message }, { status: 500 });
        }

        const { data: urlData } = supabase.storage
            .from("resumes")
            .getPublicUrl(filePath);

        const fileUrl = urlData.publicUrl;

        // If it's just an image for the portfolio, return early without DB insert
        if (isImage) {
            return NextResponse.json({
                success: true,
                fileUrl
            });
        }

        // Create a temporary slug
        const tempSlug = `user-${Math.floor(100000 + Math.random() * 900000)}`;

        // 2. Insert into DB
        const { data: insertedResume, error: dbError } = await supabase
            .from("resumes")
            .insert({
                user_id: userId,
                file_path: filePath,
                file_url: fileUrl,
                parsed_json: null,
                slug: tempSlug,
            })
            .select("id")
            .single();

        if (dbError) {
            console.error("Database insert error:", dbError);
            return NextResponse.json({ error: dbError.message }, { status: 500 });
        }

        return NextResponse.json({ 
            success: true, 
            resumeId: insertedResume.id,
            fileUrl,
            tempSlug
        });

    } catch (error: any) {
        console.error("Upload route error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
