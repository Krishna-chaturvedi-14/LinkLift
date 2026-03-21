import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost3() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-fuchsia-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Career Path</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">Full Stack Developer vs Web Developer: What Should You Choose</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 21, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>4 min read</span>
                </div>

                <div className="prose prose-invert prose-fuchsia max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        Many people get confused between a web developer and a full stack developer. The difference is simple, but important for your career and your portfolio.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">What is a Web Developer?</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A web developer is a broad term. It can include frontend developers, backend developers, or even full stack developers. A frontend developer mainly works on what users see, using tools like React and JavaScript. They focus on design, layout, and responsive web design. A backend developer works on the server side, handling databases, APIs, and logic using tools like Node.js.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">What is a Full Stack Developer?</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A full stack developer does both frontend and backend work. This makes them more flexible and valuable, especially for startups or freelance work. If you are planning to offer web development services or work as a freelance web developer, full stack skills give you an advantage because you can handle complete projects on your own.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">The Basic Difference</h2>
                    <ul className="text-[16px] leading-relaxed text-slate-400 mb-6 list-disc pl-6 space-y-2">
                        <li><strong>Frontend developer:</strong> works on UI, design, and user experience</li>
                        <li><strong>Backend developer:</strong> handles server, database, and API development</li>
                        <li><strong>Full stack developer:</strong> manages both frontend and backend</li>
                    </ul>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        If your goal is to get hired quickly or work independently, becoming a full stack developer is usually the better choice. In India, demand for full stack developer India and software developer India roles is growing fast, especially in startups.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6 font-medium">
                        The key is to choose a direction and build your portfolio around it. A clear and focused software developer portfolio always performs better than a random one.
                    </p>
                </div>
            </div>
        </div>
    );
}
