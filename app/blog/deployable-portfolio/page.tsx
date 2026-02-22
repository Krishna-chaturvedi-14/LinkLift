import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost2() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-fuchsia-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Engineering</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">The ultimate guide to building a deployable portfolio.</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 08, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>8 min read</span>
                </div>

                <div className="prose prose-invert prose-fuchsia max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        Your resume gets you the interview, but your portfolio gets you the job. A modern, deployable portfolio is the ultimate proof of your engineering capabilities. Here's a breakdown of why it matters and how to structure it.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">The "Show, Don't Tell" Philosophy</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A resume lists your skills, but a portfolio demonstrates them in action. By hosting a live portfolio, you are proving that you understand deployment, web architecture, and user experience. It serves as tangible evidence of your technical competence.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Essential Sections of a High-Converting Portfolio</h2>
                    <ul className="text-[16px] leading-relaxed text-slate-400 mb-6 list-disc pl-6 space-y-2">
                        <li><strong>The Hero:</strong> A clear, concise statement of who you are and what you do.</li>
                        <li><strong>Featured Projects:</strong> Highlight 2-3 of your best projects. Include case studies, not just links to code. Discuss the problem, your solution, and the impact.</li>
                        <li><strong>Technical Arsenal:</strong> A clean visualization of the technologies you are proficient in.</li>
                        <li><strong>Contact / Call to Action:</strong> Make it effortlessly easy for a recruiter or hiring manager to reach out or download your formal resume.</li>
                    </ul>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Performance Matters</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        If you are building a custom portfolio, ensure it is fast. A slow, bloated portfolio reflects poorly on your engineering standards. Optimize your images, utilize server-side rendering where appropriate, and aim for perfect Lighthouse scores.
                    </p>
                </div>
            </div>
        </div>
    );
}
