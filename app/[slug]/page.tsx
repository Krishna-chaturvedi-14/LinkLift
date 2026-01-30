export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import { motion } from "framer-motion"; // 🟢 Added this missing import

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function PublicPortfolio({ params }: { params: { slug: string } }) {
  // 1. Fetch data from Supabase including the raw name column as backup
  const { data: resume, error } = await supabase
    .from("resumes")
    .select("parsed_json, file_path")
    .eq("slug", params.slug)
    .single();

  if (!resume || error) {
    return notFound();
  }

  // 🟢 2. Bulletproof Name Logic
  // Looks in AI data first, then uses a professional fallback
  const data = resume.parsed_json || {};
  const displayName = data.name || "Professional Candidate";
  const displayRole = data.role || "Software Engineer";

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
            {displayName}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mt-8 font-medium max-w-2xl">
            I build digital value as a <span className="text-white border-b-2 border-purple-500">{displayRole}</span>
          </p>

          {/* Mapping through AI-extracted skills */}
          {data.skills && (
            <div className="mt-12 flex flex-wrap gap-3">
              {data.skills.map((skill: string) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}