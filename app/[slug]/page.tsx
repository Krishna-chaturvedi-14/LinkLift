// Add this to ensure the page always fetches fresh data from Supabase
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function PublicPortfolio({ params }: { params: { slug: string } }) {
  // 1. Fetch data from Supabase based on the URL slug
  const { data: resume, error } = await supabase
    .from("resumes")
    .select("parsed_json, name") // Fetching 'name' column as a backup
    .eq("slug", params.slug)
    .single();

  // If no resume is found at all, show 404
  if (!resume || error) {
    return notFound();
  }

  // 🟢 2. The Safe Data Extraction
  // This looks for the name in the AI JSON first, then the DB column, then a default
  const data = resume.parsed_json || {};
  const displayName = data.name || resume.name || "Professional Candidate";
  const displayRole = data.role || "Software Engineer";

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* 🟢 Now the name will print even if AI is still "thinking" */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            {displayName}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mt-6 font-medium">
            I build digital value as a <span className="text-purple-400">{displayRole}</span>
          </p>

          {/* Add your Skills and Experience sections here using data.skills, data.experience */}
        </motion.div>
      </div>
    </div>
  );
}
