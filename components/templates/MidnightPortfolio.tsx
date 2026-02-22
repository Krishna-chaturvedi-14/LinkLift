"use client";

import { motion, Variants } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ChevronDown,
    Terminal,
    Code2,
    Database,
    Layout,
    Cpu,
    Briefcase
} from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function MidnightPortfolio({ data }: { data: any }) {
    // Animation variants
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const orbitVariants: Variants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#05050A] text-white selection:bg-purple-500/30 overflow-hidden font-sans">

            {/* Global Ambient Glows */}
            <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tighter shrink-0 flex items-center justify-center w-10 h-10 bg-white text-black rounded-lg">
                        {data.name ? data.name.charAt(0) : "S"}
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-zinc-400">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-40 pb-32">

                {/* 1. HERO SECTION */}
                <section id="about" className="min-h-[70vh] flex flex-col items-center justify-center text-center relative mb-40">
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* Avatar with Glow */}
                        <motion.div variants={fadeIn} className="relative mb-8">
                            <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-[40px] mix-blend-screen" />
                            <div className="w-32 h-32 rounded-full border border-white/10 overflow-hidden relative z-10 bg-[#0C0C14] flex items-center justify-center">
                                {/* Placeholder for avatar - matching the design's memoji feel */}
                                <div className="text-5xl">👨‍💻</div>
                            </div>
                            <div className="absolute -top-4 -right-20 animate-pulse text-sm text-zinc-400 italic">
                                Hello! I am <span className="text-purple-400 font-bold not-italic">{data.name?.split(' ')[0] || "There"}</span>
                            </div>
                        </motion.div>

                        {/* Headlines */}
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                                {data.role || "Software Engineer"}
                            </span>.
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl font-light">
                            {data.bio || "Building digital products that create an equilibrium between user needs and business goals."}
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex gap-4">
                            <a href="#contact" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                                Let's Connect
                            </a>
                            <a href="#projects" className="px-8 py-3 bg-white/5 border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-colors">
                                View Work
                            </a>
                        </motion.div>
                    </motion.div>

                    <div className="absolute bottom-10 animate-bounce text-zinc-600">
                        <ChevronDown size={24} />
                    </div>
                </section>

                {/* 2. EXPERIENCE SECTION */}
                <section id="experience" className="mb-40">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12"
                    >
                        Work Experience
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.experience?.map((exp: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-gradient-to-br from-[#1A102A] to-[#0A0514] border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-500" />

                                <div className="relative z-10 flex gap-6">
                                    <div className="w-16 h-16 shrink-0 bg-purple-900/40 rounded-2xl flex items-center justify-center border border-purple-400/20 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                        <Briefcase className="text-purple-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                        <div className="text-purple-400 font-medium mb-3">{exp.company}</div>
                                        <div className="text-xs text-zinc-500 font-mono mb-4 bg-black/40 inline-block px-3 py-1 rounded-full border border-white/5">
                                            {exp.duration}
                                        </div>
                                        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. SKILLS ORBIT SECTION */}
                <section className="py-32 mb-40 relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="text-center mb-16 relative z-10">
                        <p className="text-lg text-zinc-400">
                            I'm currently looking to join a <span className="text-purple-400 font-bold">cross-functional</span> team <br />
                            that values improving people's lives through accessible design & code.
                        </p>
                    </div>

                    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                        {/* Center Logo/Core */}
                        <div className="absolute z-20 w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl font-black text-black shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                            {data.name ? data.name.charAt(0) : "S"}
                        </div>
                        <div className="absolute z-10 inset-0 bg-purple-500/20 rounded-full blur-[60px]" />

                        {/* Orbit Ring 1 */}
                        <motion.div variants={orbitVariants} animate="animate" className="absolute w-[300px] h-[300px] border border-white/10 rounded-full border-dashed" />
                        <motion.div variants={orbitVariants} animate="animate" style={{ animationDirection: 'reverse' }} className="absolute w-[400px] h-[400px] border border-purple-500/20 rounded-[100%] rotate-45">
                            {/* Skill Nodes scattered on orbit */}
                            {data.skills?.slice(0, 6).map((skill: string, i: number) => {
                                // Distribute points around the ellipse
                                const angle = (i / 6) * Math.PI * 2;
                                const x = Math.cos(angle) * 200;
                                const y = Math.sin(angle) * 200;
                                return (
                                    <div key={i} className="absolute w-8 h-8 -ml-4 -mt-4 bg-[#111] border border-white/10 rounded-full flex items-center justify-center text-[10px] text-zinc-400 font-bold shadow-lg"
                                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: `rotate(-45deg)` }} // keep text upright
                                    >
                                        •
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>

                    {/* Skill Tags List (Backup/Clearer view) */}
                    <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-2xl relative z-20">
                        {data.skills?.map((skill: string, i: number) => (
                            <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-purple-500/50 hover:text-purple-300 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* 4. PROJECTS SECTION */}
                <section id="projects" className="mb-40">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-16 text-center"
                    >
                        Featured Work
                    </motion.h2>

                    <div className="space-y-32">
                        {data.projects?.map((proj: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                            >
                                {/* Text Content */}
                                <div className="flex-1 space-y-6 relative z-10 w-full">
                                    <h4 className="text-purple-400 font-bold tracking-widest text-xs uppercase">Featured Project</h4>
                                    <h3 className="text-3xl font-bold">{proj.title}</h3>
                                    <div className="p-6 bg-[#0C0C14] border border-white/5 rounded-2xl shadow-xl hover:border-purple-500/30 transition-colors">
                                        <p className="text-zinc-400 leading-relaxed text-sm">
                                            {proj.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.technologies?.map((tech: string, j: number) => (
                                            <span key={j} className="text-xs font-mono text-zinc-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-4 flex gap-4">
                                        <a href={proj.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href={proj.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                                            <Github size={18} /> Source
                                        </a>
                                    </div>
                                </div>

                                {/* Image/Visual Content */}
                                <div className="flex-1 w-full relative group">
                                    <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/40 transition-colors duration-700" />
                                    <div className="relative aspect-video bg-gradient-to-br from-[#111] to-[#05050A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-500">
                                        {/* Fallback image if UI doesn't have one */}
                                        <div className="flex flex-col items-center gap-4 opacity-50 text-zinc-600 group-hover:text-purple-400 transition-colors duration-500">
                                            <Layout size={48} />
                                            <span className="font-mono text-xs tracking-widest uppercase">{proj.title} Interface</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 5. FOOTER / CONTACT */}
                <section id="contact" className="py-20 border-t border-white/5 flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-zinc-400 max-w-md mb-10">
                        I'm currently looking to join a cross-functional team. If you have a project in mind or just want to say hi, my inbox is open.
                    </p>

                    <div className="w-full max-w-md bg-[#0C0C14] border border-white/5 p-8 rounded-3xl shadow-2xl mb-12">
                        <ContactForm toName={data.name || "Software Engineer"} toEmail={data.email} />
                    </div>

                    <div className="flex gap-6 mb-8 text-zinc-500">
                        {data.github && (
                            <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {data.linkedin && (
                            <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {data.email && (
                            <a href={`mailto:${data.email}`} className="hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        )}
                    </div>
                    <p className="text-zinc-600 text-xs font-mono">
                        © {new Date().getFullYear()} {data.name}. Designed with Midnight.
                    </p>
                </section>

            </main>
        </div>
    );
}
