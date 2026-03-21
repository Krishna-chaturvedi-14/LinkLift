import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost2() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-fuchsia-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Projects</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">Top Portfolio Projects for Web Developers That Get You Hired</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 21, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>6 min read</span>
                </div>

                <div className="prose prose-invert prose-fuchsia max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        If you are building a software developer portfolio, your projects decide how people judge your skills. Recruiters usually spend very little time on a profile, so your work needs to stand out quickly.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">1. Full Stack E-Commerce Website</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A full stack e-commerce website is one of the best projects you can include. It shows that you understand both frontend and backend development. Features like user login, product pages, cart, and checkout show real-world skills. When you explain this project, mention how you handled API development and database management, and what technologies you used like React and Node.js.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">2. Real-Time Chat Application</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Another strong project is a real-time chat application. This shows that you can handle live data and build scalable systems. It is especially useful if you want to highlight your backend developer skills. Even a simple version with messaging and notifications can make a strong impact if explained properly.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">3. Dashboard or Admin Panel</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A dashboard or admin panel is also a good addition. Many companies need internal tools, so this type of project is very practical. It shows your ability to design clean interfaces and handle data. This is where you can highlight your frontend developer skills and responsive web design.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">4. API-Focused Project</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        You should also include at least one API-focused project. As a Node.js developer or backend developer, this proves that you understand how systems work behind the scenes. Show how you created endpoints, handled authentication, and structured your data.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mt-8 mb-6 font-medium border-t border-white/10 pt-8">
                        The goal is not to add many projects but to add meaningful ones. A good developer portfolio website focuses on quality and clarity. If your projects clearly show your thinking and skills, your chances of getting hired increase a lot.
                    </p>
                </div>
            </div>
        </div>
    );
}
