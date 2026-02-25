
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader2, Check, ArrowLeft, Layout, ArrowRight } from "lucide-react";
import { TEMPLATES, Template, DEFAULT_TEMPLATE_ID } from "@/lib/templates";

import { supabase } from "@/lib/supabase";

export default function SelectTemplatePage() {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [currentTemplateId, setCurrentTemplateId] = useState<string>(DEFAULT_TEMPLATE_ID);
    const [resumeId, setResumeId] = useState<string | null>(null);
    const [saving, setSaving] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserPreferences = async () => {
            if (!user?.id) return;

            try {
                const res = await fetch("/api/user-resume");
                if (!res.ok) throw new Error("Failed to fetch");
                const { data } = await res.json();

                if (data) {
                    setResumeId(data.id);
                    if (data.template_id) {
                        setCurrentTemplateId(data.template_id);
                    }
                }
            } catch (err) {
                console.error("Error fetching preferences:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserPreferences();
    }, [user]);

    const handleSelectTemplate = async (templateId: string) => {
        if (!resumeId) return;
        setSaving(templateId);

        try {
            const res = await fetch("/api/user-resume", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: resumeId, template_id: templateId })
            });

            if (!res.ok) throw new Error("Failed to save");

            setCurrentTemplateId(templateId);
            // 🟢 Redirect to preview after selection
            router.push("/portfolio/preview");
        } catch (error) {
            console.error(error);
            alert("Failed to save preference");
        } finally {
            setSaving(null);
        }
    };

    if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="animate-spin text-indigo-500" size={48} /></div>;

    return (
        <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30">
            <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 h-16 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push("/portfolio/preview")} className="p-2 hover:bg-white/5 rounded-full transition text-zinc-400 hover:text-white">
                        <ArrowLeft size={20} />
                    </button>
                    <div className="font-bold text-lg flex items-center gap-2">
                        <Layout size={20} className="text-indigo-400" />
                        Template Gallery
                    </div>
                </div>
                <button
                    onClick={() => router.push("/portfolio/preview")}
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                    Back to Preview <ArrowRight size={14} />
                </button>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                        Choose Your Look
                    </h1>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        Select a design that matches your personal brand. You can switch templates at any time without losing your data.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.values(TEMPLATES).map((template: Template) => {
                        const isSelected = currentTemplateId === template.id;
                        const isSavingThis = saving === template.id;

                        return (
                            <div
                                key={template.id}
                                onClick={() => handleSelectTemplate(template.id)}
                                className={`
                                group relative rounded-3xl border-2 cursor-pointer transition-all duration-300 overflow-hidden
                                ${isSelected
                                        ? "border-indigo-500 bg-indigo-500/5 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
                                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                                    }
                            `}
                            >
                                {/* Live Iframe Preview */}
                                <div className="aspect-video w-full bg-zinc-900 flex items-center justify-center relative overflow-hidden group/preview">
                                    <div className="absolute top-0 left-0 w-[400%] h-[800%] origin-top-left scale-[0.25] pointer-events-none">
                                        <iframe
                                            src={`/template-preview/${template.id}`}
                                            className="w-full h-full border-none transition-transform duration-[12000ms] ease-linear group-hover/preview:-translate-y-[30%]"
                                        />
                                    </div>

                                    {/* Overlay blocker so users don't accidentally interact with anything passing through */}
                                    <div className="absolute inset-0 bg-transparent z-10"></div>

                                    {isSelected && (
                                        <div className="absolute inset-0 z-20 flex items-center justify-center bg-indigo-500/20 backdrop-blur-[2px]">
                                            <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl scale-110">
                                                <Check size={14} /> Active
                                            </div>
                                        </div>
                                    )}

                                    {/* Preview Button on Hover */}
                                    <div className="absolute inset-0 z-20 flex items-center justify-center translate-y-4 opacity-0 group-hover/preview:translate-y-0 group-hover/preview:opacity-100 transition-all duration-300 pointer-events-none">
                                        {!isSelected && (
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs font-bold shadow-2xl uppercase tracking-widest">
                                                Select Template
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                                {template.name}
                                            </h3>
                                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                                                {template.id === 'default' ? 'Minimalist / Terminal' : 'React / Clean'}
                                            </p>
                                        </div>
                                        {isSavingThis && <Loader2 className="animate-spin text-white" size={20} />}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
