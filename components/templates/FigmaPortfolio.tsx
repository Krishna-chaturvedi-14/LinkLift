"use client";

import { useEffect, useState } from "react";
import { ResumeData } from "@/lib/types";
import { Briefcase, FolderGit2, Mail, ExternalLink, Github, Linkedin, MessageSquare, Code, ArrowRight } from "lucide-react";

export default function FigmaPortfolio({ data }: { data: ResumeData }) {
    return (
        <div className="min-h-screen bg-[#110720] text-white font-sans selection:bg-purple-500/30">
            <Header name={data.name} />
            <Banner data={data} />
            <ExperienceSection experience={data.experience} />
            <AboutSection bio={data.bio} skills={data.skills} />
            <ProjectsSection projects={data.projects} />
            <Footer data={data} />
        </div>
    );
}

// --- Components ---

function Header({ name }: { name: string }) {
    // Use first initial as logo
    const initial = name ? name.charAt(0).toUpperCase() : "P";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-md border-b border-white/10">
            <nav className="px-6 py-4">
                <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-shadow">
                            {initial}
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">{name.split(" ")[0]}</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0 text-sm font-medium">
                        <li><a href="#home" className="text-slate-300 hover:text-purple-400 transition-colors">Home</a></li>
                        <li><a href="#experience" className="text-slate-300 hover:text-purple-400 transition-colors">Experience</a></li>
                        <li><a href="#about" className="text-slate-300 hover:text-purple-400 transition-colors">About</a></li>
                        <li><a href="#projects" className="text-slate-300 hover:text-purple-400 transition-colors">Projects</a></li>
                    </ul>
                    <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-sm font-medium flex items-center gap-2">
                        Let's Talk <ArrowRight size={14} />
                    </a>
                </div>
            </nav>
        </header>
    );
}

function Banner({ data }: { data: ResumeData }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Fallback if data.skills is empty
    const texts = data.skills && data.skills.length > 0
        ? data.skills.slice(0, 4)
        : [data.role || "Professional", "Innovator", "Creator"];

    useEffect(() => {
        const currentText = texts[currentTextIndex] || "Professional";

        if (!isDeleting) {
            if (displayedText.length < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(50);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setTypingSpeed(100);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-28 px-6 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="space-y-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Available for opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-[1.1] tracking-tight">
                        Hello! I Am <br />
                        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            {data.name}
                        </span>
                    </h1>

                    <p className="text-3xl md:text-5xl text-white font-semibold mt-4 h-16">
                        I'm a {displayedText}
                        <span className="animate-pulse text-purple-400 ml-1">|</span>
                    </p>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mt-6">
                        {data.bio || `A passionate ${data.role || 'professional'} focused on building innovative solutions and creating meaningful digital experiences.`}
                    </p>

                    <div className="flex items-center gap-4 mt-10 p-4 border border-white/5 bg-white/[0.02] rounded-2xl w-fit backdrop-blur-sm">
                        <div className="flex -space-x-2 mr-2">
                            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center border-2 border-[#110720]"><Code size={14} /></div>
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-[#110720]"><MessageSquare size={14} /></div>
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-medium">Currently working as</p>
                            <p className="text-purple-400">{data.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceSection({ experience }: { experience: ResumeData['experience'] }) {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                    Work Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experience.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/40 hover:shadow-[0_10px_40px_rgba(168,85,247,0.1)] transition-all flex flex-col sm:flex-row items-start gap-6 group"
                        >
                            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#110720] border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                <Briefcase size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-medium mb-4">
                                    <span className="text-indigo-400">{exp.company}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                                    <span className="text-slate-400">{exp.duration}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection({ bio, skills }: { bio?: string; skills?: string[] }) {
    return (
        <section id="about" className="py-24 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            About Me
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed mb-8">
                            {bio || "I am a dedicated professional with a track record of delivering high-quality results. I thrive in cross-functional environments and enjoy tackling complex problems with elegant solutions."}
                        </p>
                        <div className="space-y-4">
                            <strong className="text-white block">Core Competencies</strong>
                            <div className="flex flex-wrap gap-2">
                                {skills?.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end border-t lg:border-t-0 border-white/5 pt-10 lg:pt-0">
                        <div className="w-full max-w-md aspect-square rounded-[2rem] bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#110720]/40 backdrop-blur-xl z-0" />
                            <div className="relative z-10 w-full h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center flex-col gap-4 text-slate-400 group-hover:border-purple-400/50 transition-colors">
                                <Code size={48} className="opacity-50" />
                                <span className="font-mono text-sm">[ Profile Visualization ]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectsSection({ projects }: { projects: ResumeData['projects'] }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                    Featured Projects
                </h2>

                <div className="space-y-24">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 1;

                        return (
                            <div key={index} className="relative group">
                                {/* Massive background glow connecting the sections */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-900/10 blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "lg:grid-flow-dense" : ""}`}>

                                    <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                                        <p className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-3">Project {index + 1}</p>
                                        <h3 className="text-3xl font-bold text-white mb-6">
                                            {project.title}
                                        </h3>

                                        <div className="relative z-10 mb-6">
                                            <div className={`bg-[#170E2B] backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/5 shadow-2xl ${isEven ? "lg:ml-[-15%]" : "lg:w-[calc(100%+15%)]"}`}>
                                                <p className="text-slate-300 text-base leading-relaxed mb-6">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies?.map((tech, i) => (
                                                        <span key={i} className="text-xs font-mono text-indigo-300 bg-indigo-900/30 px-2.5 py-1 rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors font-medium">
                                                <ExternalLink size={18} /> View Live Project
                                            </a>
                                        )}
                                    </div>

                                    <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                        <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1A0F33] to-[#0A0514] border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center p-8 group-hover:border-purple-500/30 transition-colors">
                                            <div className="w-full h-full border border-dashed border-white/10 rounded-xl flex items-center justify-center flex-col gap-4 text-slate-500 bg-[#110720]/50 backdrop-blur-sm">
                                                <FolderGit2 size={48} className="opacity-40" />
                                                <span className="font-mono text-sm max-w-[200px] text-center truncate">{project.title}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Footer({ data }: { data: ResumeData }) {
    return (
        <footer id="contact" className="py-24 px-6 border-t border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-purple-600/10 blur-[80px]" />

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Get in Touch
                </h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                    I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                </p>

                <a href={`mailto:${data.email}`} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] mx-auto mb-16">
                    <Mail size={20} />
                    Say Hello
                </a>

                <div className="flex items-center justify-center gap-6 mb-16">
                    {data.github && (
                        <a href={data.github.startsWith('http') ? data.github : `https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1">
                            <Github size={20} />
                        </a>
                    )}
                    {data.linkedin && (
                        <a href={data.linkedin.startsWith('http') ? data.linkedin : `https://linkedin.com/in/${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1">
                            <Linkedin size={20} />
                        </a>
                    )}
                    <a href={`mailto:${data.email}`} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all hover:-translate-y-1">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} {data.name}. Built with Stackd.
                </div>
            </div>
        </footer>
    );
}
