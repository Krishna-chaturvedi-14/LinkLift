import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost1() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-fuchsia-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Career Advice</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">How to Build a Full Stack Developer Portfolio That Gets You Hired</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 21, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>5 min read</span>
                </div>

                <div className="prose prose-invert prose-fuchsia max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        If you are a full stack developer or web developer, your portfolio matters more than your resume. Recruiters and clients don’t just read skills, they want to see real work. A good developer portfolio website should clearly show what you can build and how you solve problems.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Clear Positioning</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        The first thing you need is clear positioning. Instead of writing something generic like “software developer,” be specific about what you do. A title like “Full Stack Developer | MERN Stack Developer | Web Developer India” helps both people and search engines understand your profile. It also helps you appear in searches like full stack developer India or web developer India.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">The Power of Projects</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Your projects are the most important part of your portfolio. A strong full stack developer portfolio should include real applications like an e-commerce website, a dashboard, or a chat application. For each project, explain what problem you solved, how you built it, and what technologies you used. Mention things like React, Node.js, JavaScript, API development, and database management naturally while describing your work.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Design & Performance</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Your website itself should reflect your skills. Keep the design clean, simple, and responsive. Make sure it loads fast and works well on mobile. A slow or confusing website creates a bad impression, no matter how good your projects are.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">SEO and Call to Action</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Basic SEO also matters. Use clear headings like “Full Stack Developer Portfolio” and include keywords like MERN stack developer or freelance web developer in a natural way. Add a proper meta title and description so your site can appear in search results.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Finally, add a clear call to action. Don’t just show your work and leave. Tell people what to do next. A simple line like “Hire Web Developer India” or “Contact for Web Development Services” can make a big difference. A strong portfolio should not just look good, it should help you get opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
}
