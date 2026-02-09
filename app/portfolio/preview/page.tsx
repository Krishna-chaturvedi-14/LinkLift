"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 🟢 Added for redirecting to public link
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Share2,
  Check,
  ArrowLeft,
  SlidersHorizontal,
  Rocket,
  Loader2,
  X,
  ArrowRight,
  Layout
} from "lucide-react";
import { TEMPLATES } from "@/lib/templates";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function PortfolioPreview() {
  const { user } = useUser();
  const router = useRouter(); // 🟢 Initialize router
  const [data, setData] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [resumeId, setResumeId] = useState<string | null>(null);
  const [userSlug, setUserSlug] = useState<string | null>(null); // 🟢 State to track the URL slug
  const [currentTemplateId, setCurrentTemplateId] = useState<string>("default");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [overrides, setOverrides] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return;
      // 🟢 Updated query to include 'slug' column
      const { data: resumes } = await supabase
        .from("resumes")
        .select("id, parsed_json, file_url, slug, template_id")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1);

      if (resumes && resumes.length > 0) {
        setData(resumes[0].parsed_json);
        setFileUrl(resumes[0].file_url);
        setResumeId(resumes[0].id);
        setUserSlug(resumes[0].slug); // 🟢 Store slug locally
        if (resumes[0].template_id) setCurrentTemplateId(resumes[0].template_id);
      }
      setLoading(false);
    };
    fetchData();
  }, [user?.id]);

  const gV = (key: string, original: any) => overrides[key] ?? original;
  const updateField = (key: string, value: any) => setOverrides((prev: any) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    if (!resumeId) return;
    setIsSaving(true);
    const updatedData = { ...data, ...overrides };
    const { error } = await supabase.from("resumes").update({ parsed_json: updatedData }).eq("id", resumeId);
    if (!error) { setData(updatedData); setOverrides({}); alert("Synced to Database!"); }
    setIsSaving(false);
  };

  const handleDeploy = async () => {
    if (!userSlug) {
      alert("No portfolio link found. Please try uploading your resume again.");
      return;
    }

    setIsDeploying(true);
    try {
      // 🟢 Replace hardcoded URL with Environment Variable
      const VERCEL_HOOK_URL = process.env.NEXT_PUBLIC_VERCEL_BUILD_HOOK;

      if (!VERCEL_HOOK_URL) {
        alert("Configuration Error: Missing Vercel Deploy Hook URL.\nPlease add NEXT_PUBLIC_VERCEL_BUILD_HOOK to your Vercel Environment Variables.");
        throw new Error("Missing NEXT_PUBLIC_VERCEL_BUILD_HOOK");
      }

      const response = await fetch(VERCEL_HOOK_URL, { method: "POST" });

      if (response.ok) {
        alert("Launch Successful! Taking you to your live site...");
        // 🟢 Redirect to the public dynamic route: linklift.vercel.app/[slug]
        router.push(`/${userSlug}`);
      } else {
        throw new Error("Deploy Hook returned " + response.status);
      }
    } catch (err) {
      alert("Deployment failed. Please verify your Vercel Build Hook URL is pasted in the code.");
    } finally {
      setIsDeploying(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="animate-spin text-indigo-500" size={48} /></div>;
  if (!data) return <div className="min-h-screen bg-black text-white flex items-center justify-center">No resume data found.</div>;

  // 🟢 DYNAMIC TEMPLATE RENDERING
  if (currentTemplateId === 'modern') {
    return (
      <div className="relative">
        <nav className="fixed top-4 right-4 z-[200] flex gap-2">
          <Link href="/portfolio/select-template" className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-full text-white text-xs font-bold hover:bg-black transition flex items-center gap-2 border border-white/20 shadow-2xl">
            <Layout size={14} /> Change Template
          </Link>
          <button onClick={handleDeploy} disabled={isDeploying} className="px-4 py-2 bg-indigo-600 rounded-full text-white text-xs font-bold hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg">
            {isDeploying ? <Loader2 size={12} className="animate-spin" /> : <Rocket size={12} />}
            Deploy Live
          </button>
        </nav>
        <TEMPLATES.modern.component data={data} />
      </div>
    );
  }

  // 🟢 3D TEMPLATE RENDERING
  if (currentTemplateId === '3d') {
    const ThreeDComponent = TEMPLATES["3d"].component;
    return (
      <div className="relative">
        <nav className="fixed top-4 right-4 z-[200] flex gap-2">
          <Link href="/portfolio/select-template" className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-full text-white text-xs font-bold hover:bg-black transition flex items-center gap-2 border border-white/20 shadow-2xl">
            <Layout size={14} /> Change Template
          </Link>
          <button onClick={handleDeploy} disabled={isDeploying} className="px-4 py-2 bg-indigo-600 rounded-full text-white text-xs font-bold hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg">
            {isDeploying ? <Loader2 size={12} className="animate-spin" /> : <Rocket size={12} />}
            Deploy Live
          </button>
        </nav>
        <ThreeDComponent data={data} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-indigo-500/30 overflow-x-hidden">

      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[#030303]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed top-0 w-full z-[200] bg-[#030303] border-b border-white/5 h-16 flex items-center justify-between px-6 shadow-2xl">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="p-2 hover:bg-white/5 rounded-full transition"><ArrowLeft size={18} /></Link>
          <div className="font-bold text-xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            {gV('name', data.name)}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/portfolio/select-template" className="text-zinc-400 hover:text-white transition flex items-center gap-2 text-sm font-medium">
            <Layout size={16} /> Templates
          </Link>
          <button onClick={handleDeploy} disabled={isDeploying} className="px-6 py-2 bg-indigo-600 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/20 hover:scale-105 transition flex items-center gap-2">
            {isDeploying ? <Loader2 size={14} className="animate-spin" /> : <Rocket size={14} />}
            {isDeploying ? "Deploying..." : "Deploy Live"}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-56 pb-32 space-y-64">

        {/* HERO: NAME-FIRST */}
        <section className="space-y-12 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-[0.3em] uppercase">
              AVAILABLE FOR NEW OPPORTUNITIES
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-10">
              <span className="bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase">
                {gV('name', data.name)}
              </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-8 space-y-6">
                <p className="text-3xl font-medium text-white italic">
                  I build digital value as an <span className="text-indigo-400">{gV('role', data.role)}</span>
                </p>
                <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">{gV('bio', data.bio)}</p>
              </div>

              <div className="md:col-span-4 flex flex-col md:items-end gap-6">
                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(fileUrl || "", "_blank")}
                    className="p-5 rounded-full bg-white text-black hover:scale-110 transition"
                  >
                    <Download size={24} />
                  </button>
                  <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="p-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"><Share2 size={24} /></button>
                </div>

                {/* 🟢 THE MAIN EMERALD DEPLOY BUTTON */}
                <button
                  onClick={handleDeploy}
                  disabled={isDeploying}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50 text-white"
                >
                  {isDeploying ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" /> Deploying...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 justify-center">
                      <Rocket size={18} /> Deploy Live
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 01 / EXPERIENCE */}
        <section className="space-y-24">
          <div className="flex flex-col gap-6">
            <span className="text-indigo-500 font-mono text-xs tracking-[0.5em] uppercase font-black">/ 01 EXPERIENCE</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Career Path</h2>
          </div>
          <div className="divide-y divide-white/5 border-t border-white/5">
            {gV('experience', data.experience)?.map((exp: any, i: number) => (
              <motion.div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 py-20 group relative">
                <div className="md:col-span-3 text-zinc-500 font-mono text-xs uppercase tracking-widest">{exp.duration || exp.period}</div>
                <div className="md:col-span-7 space-y-6">
                  <h3 className="text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors italic leading-none">{exp.company}</h3>
                  <p className="text-xl text-zinc-400 font-medium italic">{exp.role || exp.title}</p>
                  <p className="text-zinc-500 leading-relaxed text-lg max-w-2xl">{exp.description}</p>
                </div>
                <div className="md:col-span-2 hidden md:flex justify-end items-start pt-2"><span className="text-white/5 font-black text-6xl group-hover:text-indigo-500/10 transition-colors">0{i + 1}</span></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 02 / PROJECTS */}
        <section className="space-y-24">
          <div className="flex flex-col gap-6">
            <span className="text-purple-500 font-mono text-xs tracking-[0.5em] uppercase font-black">/ 02 SELECTED WORKS</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {gV('projects', data.projects)?.map((proj: any, i: number) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="relative group aspect-[4/5] overflow-hidden rounded-[48px] bg-white/[0.02] border border-white/5 p-12 flex flex-col justify-end gap-8 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 group-hover:via-indigo-500/10 transition-all duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-wrap gap-2">{(proj.technologies || proj.tech || []).map((t: string) => <span key={t} className="px-4 py-1.5 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">{t}</span>)}</div>
                  <h3 className="text-5xl font-bold text-white leading-tight">{proj.title || proj.name}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">{proj.description || proj.desc}</p>
                  <button className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest border-b border-white/20 pb-2 group-hover:border-indigo-400 transition-all">View Project <ArrowRight size={14} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 04 / TERMINAL */}
        <section className="space-y-24 pb-48">
          <div className="flex flex-col gap-6"><span className="text-emerald-500 font-mono text-xs tracking-[0.5em] uppercase font-black">/ 04 SYSTEM_CORE</span><h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Terminal</h2></div>
          <div className="w-full max-w-4xl mx-auto rounded-3xl bg-black border border-white/10 shadow-2xl overflow-hidden font-mono text-sm">
            <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between text-zinc-500 text-[10px] uppercase tracking-widest">
              <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/50" /><div className="w-3 h-3 rounded-full bg-amber-500/50" /><div className="w-3 h-3 rounded-full bg-emerald-500/50" /></div>
              guest@linklift: ~
            </div>
            <div className="p-8 space-y-4 min-h-[300px] text-emerald-500/80">
              <p className="text-zinc-500">Last login: {new Date().toLocaleDateString()} on ttys001</p>
              <div className="space-y-2 pt-4">
                <p className="text-white flex gap-3"><span className="text-emerald-500">➜</span><span>ls expertise/</span></p>
                <p className="flex flex-wrap gap-x-6 gap-y-1 text-zinc-400">{(data.skills || []).slice(0, 8).map((s: string) => <span key={s}>{s.toLowerCase()}.sh</span>)}</p>
              </div>
              <div className="space-y-2 pt-4">
                <p className="text-white flex gap-3"><span className="text-emerald-500">➜</span><span>cat bio.txt</span></p>
                <p className="text-emerald-400/70 leading-relaxed italic">"{gV('bio', data.bio)}"</p>
              </div>
              <div className="pt-4 flex gap-3"><span className="text-emerald-500 animate-pulse">➜</span><span className="w-2 h-5 bg-emerald-500 animate-pulse" /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-24 text-center text-zinc-600 font-mono text-xs tracking-widest uppercase italic">
        Designed for Impact — © 2026 {gV('name', data.name)}
      </footer>

      {/* CONTENT EDITOR SIDEBAR */}
      <button onClick={() => setCustomizeOpen(true)} className="fixed bottom-12 left-12 flex items-center gap-3 rounded-full border border-indigo-500/30 bg-black/90 backdrop-blur-3xl px-10 py-5 text-sm font-bold text-white z-50 hover:scale-105 transition shadow-2xl">
        <SlidersHorizontal size={20} className="text-indigo-400" /> Content Editor
      </button>

      <AnimatePresence>
        {customizeOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCustomizeOpen(false)} className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60]" />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#0a0a0f] border-l border-white/10 z-[70] p-12 overflow-y-auto flex flex-col shadow-2xl">
              <div className="flex justify-between items-center mb-12 text-white"><div><h3 className="text-2xl font-bold">Portfolio CMS</h3><p className="text-xs text-zinc-500">Manual edits overwrite AI data.</p></div><button onClick={() => setCustomizeOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition"><X size={28} /></button></div>
              <div className="space-y-12 flex-1">
                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Hero & Identity</h4>
                  <input value={gV('name', data.name)} onChange={(e) => updateField('name', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none" placeholder="Name" />
                  <input value={gV('role', data.role)} onChange={(e) => updateField('role', e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none" placeholder="Role" />
                  <textarea value={gV('bio', data.bio)} onChange={(e) => updateField('bio', e.target.value)} rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none" placeholder="Bio" />
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Experience</h4>
                  {gV('experience', data.experience)?.map((exp: any, i: number) => (
                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                      <input value={exp.company} onChange={(e) => { const n = [...gV('experience', data.experience)]; n[i].company = e.target.value; updateField('experience', n); }} className="w-full bg-transparent border-b border-white/10 text-white font-bold" />
                      <textarea value={exp.description} onChange={(e) => { const n = [...gV('experience', data.experience)]; n[i].description = e.target.value; updateField('experience', n); }} rows={3} className="w-full bg-transparent text-sm text-zinc-400" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="sticky bottom-0 bg-[#0a0a0f] pt-8 mt-12 pb-4">
                <button onClick={handleSave} disabled={isSaving || Object.keys(overrides).length === 0} className="w-full flex items-center justify-center gap-3 py-5 bg-indigo-600 rounded-[24px] font-bold text-white shadow-xl shadow-indigo-500/20 disabled:opacity-40 hover:bg-indigo-500 transition">
                  {isSaving ? <Loader2 className="animate-spin" size={24} /> : <Check size={24} />}
                  Save All Changes
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}