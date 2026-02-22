"use client";

import { motion } from "framer-motion";
import {
    Github,
    Linkedin,
    Mail,
    ArrowRight,
    ExternalLink,
    Code2,
    Database,
    Layout
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function MinimalistPortfolio({ data }: { data: any }) {
    return (
        <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200 font-sans overflow-hidden">

            {/* Split Hero Background */}
            <div className="absolute top-0 right-0 w-1/3 min-h-[90vh] bg-zinc-950 hidden lg:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 py-6">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <div className="text-xl font-black tracking-widest uppercase">
                        {data.name?.split(' ')[0] || "PORTFOLIO"}
                    </div>
                    <div className="flex gap-10 text-sm font-bold tracking-widest uppercase text-zinc-500">
                        <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
                        <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
                        <a href="#portfolio" className="hover:text-zinc-900 transition-colors">Portfolio</a>
                        <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="pt-32">

                {/* 1. HERO SECTION */}
                <section className="relative max-w-7xl mx-auto px-8 min-h-[75vh] flex items-center mb-32">
                    <div className="w-full lg:w-2/3 pr-12 z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p className="text-xl font-medium text-zinc-500 mb-6 uppercase tracking-[0.2em]">Hi, I am</p>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-zinc-900">
                                {data.name || "Software Developer"}
                            </h1>
                            <p className="text-2xl text-zinc-500 font-medium mb-12">
                                {data.role || "Frontend Developer / UI Designer"}
                            </p>

                            <div className="flex gap-6">
                                {data.github && (
                                    <a href={data.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600 hover:text-zinc-900">
                                        <Github size={20} />
                                    </a>
                                )}
                                {data.linkedin && (
                                    <a href={data.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600 hover:text-zinc-900">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {data.email && (
                                    <a href={`mailto:${data.email}`} className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-600 hover:text-zinc-900">
                                        <Mail size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side portrait placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:flex w-1/3 absolute right-8 bottom-0 justify-center z-20"
                    >
                        {/* A large icon or placeholder for the minimal theme if no image available */}
                        <div className="w-64 h-80 bg-zinc-800 rounded-t-full flex items-center justify-center text-zinc-600 shadow-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                            <span className="text-8xl relative z-10">👤</span>
                        </div>
                    </motion.div>
                </section>

                {/* 1.5 DECORATIVE BAR */}
                <div className="w-full bg-zinc-950 text-zinc-400 py-12 px-8 mb-32 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
                        <div className="max-w-3xl">
                            <h3 className="text-white text-xl font-bold tracking-widest uppercase mb-4">Summary</h3>
                            <p className="text-sm leading-relaxed opacity-80 font-medium">
                                {data.bio || "Passionate about creating digital experiences that leave a lasting impact. I specialize in building robust, scalable applications with a focus on clean code and intuitive design."}
                            </p>
                        </div>
                    </div>
                    {/* High contrast brutalist element */}
                    <div className="absolute -right-20 -top-20 text-[200px] font-black opacity-5 text-white pointer-events-none select-none">
                        DEV
                    </div>
                </div>

                {/* 2. ABOUT & SKILLS */}
                <section id="skills" className="max-w-4xl mx-auto px-8 mb-40 text-center">

                    {/* Section Header */}
                    <div className="inline-block border-4 border-zinc-900 px-12 py-4 mb-20">
                        <h2 className="text-3xl font-black tracking-[0.3em] uppercase">Skills</h2>
                    </div>

                    <p className="text-lg text-zinc-500 mb-20 max-w-2xl mx-auto leading-relaxed">
                        I am constantly learning and adapting to new technologies. Here is a snapshot of my current technical arsenal.
                    </p>

                    {/* Minimalist Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
                        {data.skills?.map((skill: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col items-center gap-6 group cursor-default"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-zinc-50 border-2 border-zinc-100 flex items-center justify-center shadow-sm group-hover:border-zinc-300 group-hover:shadow-md transition-all group-hover:-translate-y-2">
                                    <Code2 className="text-zinc-300 group-hover:text-zinc-600 transition-colors" size={32} />
                                </div>
                                <span className="font-bold tracking-widest uppercase text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors">
                                    {skill}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. PORTFOLIO GRID */}
                <section id="portfolio" className="w-full bg-zinc-50 py-32 mb-40 border-y border-zinc-200">
                    <div className="max-w-7xl mx-auto px-8 text-center">
                        {/* Section Header */}
                        <div className="inline-block border-4 border-zinc-900 px-12 py-4 mb-24 bg-white">
                            <h2 className="text-3xl font-black tracking-[0.3em] uppercase">Portfolio</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data.projects?.map((proj: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="group relative aspect-[4/3] bg-white border border-zinc-200 overflow-hidden"
                                >
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-zinc-950/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 px-8 text-center p-8">
                                        <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">{proj.title}</h3>
                                        <p className="text-zinc-400 text-sm mb-8 max-w-sm leading-relaxed">{proj.description}</p>
                                        <a href={proj.link || "#"} target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                                            View Project
                                        </a>
                                    </div>

                                    {/* Placeholder graphic */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-200 bg-zinc-100 group-hover:scale-105 transition-transform duration-700">
                                        <Layout size={80} strokeWidth={1} />
                                        <span className="mt-8 font-black uppercase tracking-[0.5em] text-zinc-300">{proj.title}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. CONTACT */}
                <section id="contact" className="max-w-4xl mx-auto px-8 pb-40 text-center">
                    {/* Section Header */}
                    <div className="inline-block border-4 border-zinc-900 px-12 py-4 mb-16">
                        <h2 className="text-3xl font-black tracking-[0.3em] uppercase">Contact</h2>
                    </div>

                    <p className="text-lg text-zinc-500 mb-20 leading-relaxed font-medium">
                        Nulla id volutpat mauris. Integer fringilla dui nec lacus porttitor tristique. <br /> Pellentesque habitant morbi tristique.
                    </p>

                    <div className="max-w-xl mx-auto text-left">
                        {/* Custom wrapper to override the ContactForm styles for the Minimalist theme */}
                        <div className="[&_input]:bg-transparent [&_input]:border-0 [&_input]:border-b-2 [&_input]:border-zinc-300 [&_input]:rounded-none [&_input]:px-0 [&_input]:text-zinc-900 [&_input]:focus:border-zinc-950 [&_textarea]:bg-transparent [&_textarea]:border-0 [&_textarea]:border-b-2 [&_textarea]:border-zinc-300 [&_textarea]:rounded-none [&_textarea]:px-0 [&_textarea]:text-zinc-900 [&_textarea]:focus:border-zinc-950 [&_button]:bg-zinc-950 [&_button]:text-white [&_button]:rounded-none [&_button]:uppercase [&_button]:tracking-widest [&_button]:shadow-none [&_button]:hover:bg-zinc-800">
                            <ContactForm toName={data.name || "Developer"} toEmail={data.email} />
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="w-full bg-zinc-950 py-12 text-center">
                    <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
                        © {new Date().getFullYear()} {data.name}. All Rights Reserved.
                    </p>
                </footer>

            </main>
        </div>
    );
}
