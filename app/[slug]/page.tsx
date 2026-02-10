export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templates";

export default async function PublicPortfolio({ params }: { params: Promise<{ slug: string }> }) {
  // 🟢 STEP 1: FORCE FETCH FROM SUPABASE REST API TO BYPASS VERCEL CACHE
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("❌ Missing Supabase Environment Variables");
    return <div className="min-h-screen flex items-center justify-center text-white">Error: Server Configuration Missing</div>;
  }

  const { slug } = await params;
  console.log(`🔍 Fetching resume for slug: ${slug}`);

  let resume = null;

  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/resumes?slug=eq.${slug}&select=parsed_json,template_id`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error(`❌ Supabase Fetch Error: ${res.status} ${res.statusText}`);
      throw new Error(`Failed to fetch resume: ${res.status}`);
    }

    const resumes = await res.json();
    resume = Array.isArray(resumes) && resumes.length > 0 ? resumes[0] : null;

  } catch (error) {
    console.error("❌ Critical Error in Portfolio Page:", error);
  }

  if (!resume) {
    return notFound();
  }

  const data = resume.parsed_json || {};
  const templateId = resume.template_id || 'default';

  // 🟢 DYNAMIC TEMPLATE SELECTION
  const template = TEMPLATES[templateId] || TEMPLATES.default;
  const TemplateComponent = template.component;

  return (
    <div className="relative w-full">
      <TemplateComponent data={data} />

      {/* 🟢 Public Branding Footer */}
      <footer className="w-full py-10 bg-black/20 backdrop-blur-sm border-t border-white/5 flex flex-col items-center justify-center gap-2">
        <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-medium">
          Powered by
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-[10px] font-black italic">SD</span>
          </div>
          <span className="text-white text-xs font-bold tracking-tight">stackd</span>
        </div>
      </footer>
    </div>
  );
}