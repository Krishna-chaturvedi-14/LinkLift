import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost5() {
    return (
        <div className="min-h-screen bg-[#05050A] text-white font-sans py-20 px-10">
            <div className="max-w-[800px] mx-auto">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 mb-10 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
                <span className="text-fuchsia-500 font-bold tracking-widest text-[13px] uppercase mb-4 block">Freelancing</span>
                <h1 className="text-[48px] font-bold leading-[1.1] mb-6 tracking-tight">Why Every Freelancer Needs a Portfolio Website</h1>
                <div className="flex items-center gap-4 text-slate-400 text-[14px] mb-12 pb-8 border-b border-white/10">
                    <span>March 21, 2026</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>4 min read</span>
                </div>

                <div className="prose prose-invert prose-fuchsia max-w-none">
                    <p className="text-[18px] leading-relaxed text-slate-300 mb-6">
                        If you are doing any kind of freelance work, not having a portfolio website is a big mistake. No matter how skilled you are, people won’t trust you unless they can see your work.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Most clients don’t rely only on messages or resumes. They search online before hiring. If you don’t have a proper online presence, you lose opportunities before you even know they existed.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Your Digital Identity</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A portfolio website acts as your digital identity. It shows what you have done, how you work, and what kind of results you can deliver. Instead of explaining everything again and again to different clients, you can simply share your site and let your work speak for you.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Building Trust Quickly</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        A good portfolio builds trust quickly. When someone lands on your website and sees real projects, clear explanations, and a clean design, it creates confidence. It also makes you look more professional compared to someone who only has a social media page or a basic resume.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        It also helps you stand out in a crowded market. There are many freelancers offering similar services, but very few present their work properly. A simple, well-structured website can make a strong difference.
                    </p>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">Elements of Effectiveness</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        To make your portfolio effective, focus on a few key things:
                    </p>
                    <ul className="text-[16px] leading-relaxed text-slate-400 mb-6 list-disc pl-6 space-y-2">
                        <li>Show real work and explain what you did</li>
                        <li>Keep the design clean and easy to understand</li>
                        <li>Make sure your site works well on mobile</li>
                        <li>Add a clear way for clients to contact you</li>
                        <li>Mention the services you offer in a simple way</li>
                    </ul>
                    <h2 className="text-[24px] font-semibold mt-10 mb-4 text-white">The SEO Benefit</h2>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6">
                        Another big advantage is visibility. When your website is optimized properly, it can appear in search results when people are looking for services. This means clients can find you without you actively reaching out.
                    </p>
                    <p className="text-[16px] leading-relaxed text-slate-400 mb-6 font-medium">
                        In the long run, a portfolio website saves time, builds trust, and brings better opportunities. It is not just a showcase, it is a tool that helps you grow.
                    </p>
                </div>
            </div>
        </div>
    );
}
