export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

import { notFound } from "next/navigation";
import PortfolioContent from "@/components/PortfolioContent";

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
      `${supabaseUrl}/rest/v1/resumes?slug=eq.${slug}&select=parsed_json`,
      {
        headers: {
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        cache: 'no-store', // 🟢 This forces Vercel to check the DB every single time
      }
    );

    if (!res.ok) {
      console.error(`❌ Supabase Fetch Error: ${res.status} ${res.statusText}`);
      const text = await res.text();
      console.error(`Response body: ${text}`);
      throw new Error(`Failed to fetch resume: ${res.status}`);
    }

    const resumes = await res.json();
    resume = Array.isArray(resumes) && resumes.length > 0 ? resumes[0] : null;

  } catch (error) {
    console.error("❌ Critical Error in Portfolio Page:", error);
    // Return null to trigger notFound() below, or handle differently
  }

  if (!resume) {
    return notFound();
  }

  const data = resume.parsed_json || {};
  const displayName = data.name || "Professional Candidate";
  const displayRole = data.role || "Software Engineer";
  const skills = data.skills || [];

  return (
    <PortfolioContent
      displayName={displayName}
      displayRole={displayRole}
      skills={skills}
    />
  );
}