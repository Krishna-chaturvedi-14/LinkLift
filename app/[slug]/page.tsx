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
  const { data: resume } = await supabase
    .from("resumes")
    .select("parsed_json")
    .eq("slug", params.slug) // You'll need a 'slug' column in your DB
    .single();

  if (!resume) {
    return notFound(); // Show 404 if user doesn't exist
  }

  const data = resume.parsed_json;

  return (
    <div className="min-h-screen bg-black text-white p-20">
      <h1 className="text-6xl font-bold">{data.name}</h1>
      <p className="text-xl text-zinc-400 mt-4">{data.role}</p>
      {/* Re-use your beautiful UI components here */}
    </div>
  );
}