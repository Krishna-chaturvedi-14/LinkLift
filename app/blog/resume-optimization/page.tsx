import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost1() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-violet-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Career Format</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">How to optimize your resume for AI parsers in 2026.</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 12, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>5 min read</span>
                </div>

                <div className="prose prose-invert prose-violet max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        With Applicant Tracking Systems (ATS) becoming more sophisticated, parsing logic has evolved from basic keyword matching to semantic understanding. Here is what you need to know to ensure your resume reaches a human.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">1. Contextual Keywords Over Stuffing</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Gone are the days when you could copy-paste the job description in white text at the bottom of your resume. Modern AI parsers evaluate the <em>context</em> in which a keyword is used. Instead of just listing "Python", describe a project where you used it: "Architected a scalable data pipeline using Python and Pandas."
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">2. Standardized Formatting is King</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Avoid complex multi-column layouts, embedded images, and obscure fonts. Stick to standard, single-column formats. Ensure your section headers are recognizable (e.g., "Experience", "Education", "Skills") so the parser knows exactly what it's looking at.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">3. Impact Metrics</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        AI parsers increasingly flag resumes that include quantifiable impact. Always try to frame your achievements with numbers. "Improved API response time" is good, but "Reduced API latency by 45% through aggressive caching" is significantly better.
                    </p>
                </div>
            </div>
        </div>
    );
}
