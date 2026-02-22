"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { Loader2, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePrintPage() {
    const { user, isLoaded } = useUser();
    const [resumeData, setResumeData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResume() {
            if (!user?.id) return;
            const { data } = await supabase
                .from("resumes")
                .select("parsed_json")
                .eq("user_id", user.id)
                .order("created_at", { ascending: false })
                .limit(1)
                .maybeSingle();

            if (data?.parsed_json) setResumeData(data.parsed_json);
            setLoading(false);
        }

        if (isLoaded) fetchResume();
    }, [user?.id, isLoaded]);

    if (!isLoaded || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Loader2 className="animate-spin text-gray-500 w-8 h-8" />
            </div>
        );
    }

    if (!resumeData) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <h1 className="text-xl font-bold mb-4 text-black">No Resume Found</h1>
                <Link href="/dashboard" className="text-blue-600 hover:underline">Return to Dashboard</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 print:py-0 print:bg-white text-black text-sm">
            {/* NO-PRINT CONTROLS */}
            <div className="max-w-[850px] mx-auto flex justify-between mb-6 px-4 print:hidden">
                <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 transition-colors font-medium border border-gray-200">
                    <ArrowLeft size={16} /> Back
                </Link>
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition-colors font-medium"
                >
                    <Printer size={16} /> Print or Save PDF
                </button>
            </div>

            {/* A4 PRINTABLE CANVAS */}
            <div className="max-w-[850px] mx-auto bg-white p-12 md:p-16 shadow-lg print:shadow-none print:m-0 print:p-0 print:max-w-none">

                {/* HEADER */}
                <header className="text-center mb-8 border-b-2 border-gray-900 pb-6 text-black">
                    <h1 className="text-4xl font-serif font-bold uppercase tracking-wide mb-2 text-black">{resumeData.name}</h1>
                    <h2 className="text-xl text-gray-700 font-medium mb-3">{resumeData.role}</h2>
                    <div className="flex justify-center gap-4 text-sm text-gray-600 font-mono">
                        {resumeData.email && <span>{resumeData.email}</span>}
                        {resumeData.linkedin && <span>• {resumeData.linkedin}</span>}
                        {resumeData.github && <span>• {resumeData.github}</span>}
                    </div>
                </header>

                {/* BIO */}
                {resumeData.bio && (
                    <section className="mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Professional Summary</h3>
                        <p className="leading-relaxed text-gray-800 text-justify">
                            {resumeData.bio}
                        </p>
                    </section>
                )}

                {/* EXPERIENCE */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                    <section className="mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-4">Experience</h3>
                        <div className="space-y-6">
                            {resumeData.experience.map((exp: any, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-gray-900">{exp.role}</h4>
                                        <span className="text-gray-600 text-xs font-mono">{exp.duration}</span>
                                    </div>
                                    <div className="text-gray-700 font-medium italic mb-2 text-sm">{exp.company}</div>
                                    <ul className="list-disc pl-5 text-gray-800 space-y-1">
                                        {/* Split description by sentences for bullet points, typical for ATS */}
                                        {exp.description.split(/(?<=[.!?])\s+/).filter(Boolean).map((pt: string, idx: number) => (
                                            <li key={idx} className="leading-relaxed text-justify">{pt}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* PROJECTS */}
                {resumeData.projects && resumeData.projects.length > 0 && (
                    <section className="mb-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-4">Projects</h3>
                        <div className="space-y-4">
                            {resumeData.projects.map((proj: any, i: number) => (
                                <div key={i}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-gray-900">{proj.title}</h4>
                                        {proj.link && <a href={proj.link} className="text-blue-600 text-xs font-mono">{proj.link}</a>}
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-justify mb-1">{proj.description}</p>
                                    {proj.technologies && proj.technologies.length > 0 && (
                                        <p className="text-gray-600 text-xs italic">
                                            Technologies: {proj.technologies.join(", ")}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* SKILLS */}
                {resumeData.skills && resumeData.skills.length > 0 && (
                    <section>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 border-b border-gray-300 pb-1 mb-3">Skills</h3>
                        <p className="text-gray-800 leading-relaxed font-mono text-sm">
                            {resumeData.skills.join(" • ")}
                        </p>
                    </section>
                )}

            </div>
        </div>
    );
}
