"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Calculator, Stethoscope, Briefcase, Microscope, HardHat, Database, BookOpen, LineChart, Cpu } from "lucide-react";

const categories = [
    {
        title: "Accounting",
        desc: "Browse Accounting Resume Samples",
        icon: <Calculator className="w-5 h-5 text-[#3B82F6]" />,
        bg: "bg-[#161F33]",
        href: "/#",
    },
    {
        title: "Healthcare",
        desc: "Browse Healthcare Resume Samples",
        icon: <Stethoscope className="w-5 h-5 text-[#06B6D4]" />,
        bg: "bg-[#0D242B]",
        href: "/#",
    },
    {
        title: "Career Break",
        desc: "Browse Career Break Resume Samples",
        icon: <Briefcase className="w-5 h-5 text-[#818CF8]" />,
        bg: "bg-[#1B1936]",
        href: "/#",
    },
    {
        title: "Research",
        desc: "Browse Research Resume Samples",
        icon: <Microscope className="w-5 h-5 text-[#F43F5E]" />,
        bg: "bg-[#2E1521]",
        href: "/#",
    },
    {
        title: "Engineering",
        desc: "Browse Engineering Resume Samples",
        icon: <HardHat className="w-5 h-5 text-[#10B981]" />,
        bg: "bg-[#0F281E]",
        href: "/#",
    },
    {
        title: "Data Science",
        desc: "Browse Data Science Resume Samples",
        icon: <Database className="w-5 h-5 text-[#D946EF]" />,
        bg: "bg-[#2C1533]",
        href: "/#",
    },
    {
        title: "Teaching",
        desc: "Browse Teaching Resume Samples",
        icon: <BookOpen className="w-5 h-5 text-[#F59E0B]" />,
        bg: "bg-[#2C2311]",
        href: "/#",
    },
    {
        title: "Sales",
        desc: "Browse Sales Resume Samples",
        icon: <LineChart className="w-5 h-5 text-[#F97316]" />,
        bg: "bg-[#2C1E11]",
        href: "/#",
    },
    {
        title: "Technology",
        desc: "Browse Technology Resume Samples",
        icon: <Cpu className="w-5 h-5 text-[#14B8A6]" />,
        bg: "bg-[#0D2825]",
        href: "/#",
    },
];

export function SampleResumesMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="flex items-center gap-1 text-[14px] font-medium text-slate-300 hover:text-white transition-colors py-2">
                Sample Resumes
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown size={14} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[1000px] z-[100]"
                    >
                        <div className="bg-[#0F0F12] border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-8 overflow-hidden relative">

                            {/* Left Side: Categories Grid */}
                            <div className="flex-1">
                                <h3 className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-5 pl-2">
                                    BROWSE SAMPLES BY CATEGORY
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
                                    {categories.map((cat, idx) => (
                                        <Link
                                            key={idx}
                                            href={cat.href}
                                            className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                                        >
                                            <div
                                                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.bg}`}
                                            >
                                                {cat.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[14px] font-medium text-white group-hover:text-violet-400 transition-colors">
                                                    {cat.title}
                                                </h4>
                                                <p className="text-[12px] text-slate-400 mt-0.5 leading-snug">
                                                    {cat.desc}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Preview Card */}
                            <div className="w-[300px] shrink-0">
                                <div className="h-full rounded-2xl bg-[#7C3AED] p-6 flex flex-col relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 shadow-lg">
                                    {/* Decorative faint glow */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />

                                    <h3 className="text-[18px] font-semibold text-white mb-4 relative z-10">
                                        All Samples
                                    </h3>

                                    {/* Wireframe Resume Stack Illustration */}
                                    <div className="flex-1 relative min-h-[140px] mb-4 z-10">
                                        {/* Back Resume */}
                                        <div className="absolute top-0 right-2 w-4/5 h-full bg-white/40 rounded-lg shadow-sm transform rotate-6 border border-white/20" />
                                        {/* Middle Resume */}
                                        <div className="absolute top-2 right-6 w-4/5 h-full bg-white/60 rounded-lg shadow-sm transform rotate-3 border border-white/30" />
                                        {/* Front Resume */}
                                        <div className="absolute top-4 right-10 w-4/5 h-full bg-white rounded-lg shadow-sm p-3 border border-white/40 flex flex-col gap-2">
                                            <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
                                            <div className="w-3/4 h-1.5 bg-slate-100 rounded-full" />
                                            <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                                            <div className="flex gap-2 mt-2">
                                                <div className="w-1/3 h-6 bg-blue-100 rounded" />
                                                <div className="w-1/3 h-6 bg-rose-100 rounded" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-white font-medium text-[15px] group-hover:gap-3 transition-all relative z-10">
                                        Browse All Samples <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
