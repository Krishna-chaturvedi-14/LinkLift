export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default async function PublicPortfolio({ params }: { params: { slug: string } }) {
  // 🟢 FORCE FETCH FROM SUPABASE REST API TO BYPASS CACHE
  // This bypasses the standard Supabase client and hits the DB directly
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/resumes?slug=eq.${params.slug}&select=parsed_json`,
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      cache: 'no-store', // 🟢 CRITICAL: Never cache this request
    }
  );

  const resumes = await res.json();
  const resume = resumes[0];

  if (!resume) {
    return notFound();
  }

  const data = resume.parsed_json || {};
  const displayName = data.name || "Professional Candidate";
  const displayRole = data.role || "Software Engineer";
  const email = data.email || "";
  const skills = data.skills || [];
  const experience = data.experience || [];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-24 selection:bg-indigo-500/30">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Section */}
          <header className="space-y-6">
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
              {displayName}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-white/10">
              <p className="text-xl md:text-2xl text-zinc-400 font-medium italic">
                {displayRole}
              </p>
              {email && <p className="text-zinc-500 font-mono text-sm">{email}</p>}
            </div>
          </header>

          {/* Technical Arsenal Section */}
          <section className="mt-32">
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-8 font-bold">Technical Arsenal</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill: string, i: number) => (
                <span key={i} className="text-lg md:text-2xl font-light text-zinc-300 hover:text-white transition-colors cursor-default">
                  {skill}{i !== skills.length - 1 && <span className="text-indigo-500 ml-4">/</span>}
                </span>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          {experience.length > 0 && (
            <section className="mt-32 space-y-16">
              <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Selected Experience</h2>
              <div className="space-y-20">
                {experience.map((exp: any, i: number) => (
                  <div key={i} className="group relative grid md:grid-cols-3 gap-4 border-b border-white/5 pb-12">
                    <span className="text-zinc-500 font-mono text-sm uppercase">{exp.duration}</span>
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-3xl font-bold">{exp.role}</h3>
                      <p className="text-indigo-400 text-lg">{exp.company}</p>
                      <p className="text-zinc-400 leading-relaxed max-w-xl">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
}