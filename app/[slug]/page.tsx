export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default async function PublicPortfolio({ params }: { params: Promise<{ slug: string }> }) {
  // 🟢 STEP 1: FORCE FETCH FROM SUPABASE REST API TO BYPASS VERCEL CACHE
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const { slug } = await params;

  console.log(`🔍 Fetching resume for slug: ${slug}`);

  const res = await fetch(
    `${supabaseUrl}/rest/v1/resumes?slug=eq.${slug}&select=parsed_json`,
    {
      headers: {
        apikey: supabaseAnonKey!,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      cache: 'no-store', // 🟢 This forces Vercel to check the DB every single time
    }
  );

  const resumes = await res.json();
  const resume = resumes && resumes.length > 0 ? resumes[0] : null;

  if (!resume) {
    return notFound();
  }

  const data = resume.parsed_json || {};
  const displayName = data.name || "Professional Candidate";
  const displayRole = data.role || "Software Engineer";
  const skills = data.skills || [];

  return (
    <div className="min-h-screen bg-black text-white p-10 md:p-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter">
          {displayName}
        </h1>
        <p className="text-xl text-zinc-400 mt-8">
          I build digital value as a <span className="text-white underline decoration-indigo-500">{displayRole}</span>
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill: string) => (
            <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}