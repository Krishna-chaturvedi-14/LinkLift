"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, LayoutDashboard, MessageSquare, Briefcase, Users, PieChart, ArrowLeftRight, ChevronDown, Bell, LogOut, Search, PlusCircle, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative min-h-screen bg-[#070A11] text-white overflow-hidden font-sans selection:bg-[#2563EB]/30">

      {/* Deep Background Noise */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <span className="font-bold text-white text-sm">S</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-slate-400">
          <a href="#" className="text-white">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div>
          <Link href="/sign-up" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB]/20 to-[#1E3A8A]/20 border border-[#2563EB]/30 text-white text-[13px] font-medium hover:bg-[#2563EB]/30 transition-all shadow-[0_0_20px_rgba(37,99,235,0.15)] shadow-inner flex items-center gap-2">
            Sign up
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center relative z-20">

          {/* Social Proof Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-[#070A11] bg-slate-800" />
              <div className="w-8 h-8 rounded-full border-2 border-[#070A11] bg-[#2563EB]" />
              <div className="w-8 h-8 rounded-full border-2 border-[#070A11] bg-slate-600" />
              <div className="w-8 h-8 rounded-full border-2 border-[#070A11] bg-[#06B6D4]" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">10K+ Profiles Built</span>
            </div>
          </motion.div>

          {/* Dribbble Style Headline - Mixing Sans and Serif/Italic */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6"
          >
            Turn Your <span className="font-serif italic text-slate-300 font-light pr-2">Resume</span> Into a <br className="hidden md:block" />
            <span className="font-serif italic text-slate-300 font-light pr-2">Deployable</span> Portfolio!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10"
          >
            Get AI-powered insights, instant ATS scoring, and launch a professional, high-converting portfolio website in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/upload" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <Sparkles className="w-4 h-4" />
              Start for free
            </Link>
          </motion.div>
        </section>

        {/* Centerpiece Visualization */}
        <section className="relative mt-20 w-full mx-auto h-[700px] flex items-center justify-center perspective-[2000px] pointer-events-none">

          {/* Background Arch Glow (Dribbble Inspired) */}
          <ArchGlow />

          {/* Glassmorphic Dashboard UI */}
          <NewDashboardMockup />

        </section>

      </main>
    </div>
  );
}

// ---- Subcomponents ----

function ArchGlow() {
  return (
    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] flex justify-center overflow-hidden z-0">

      {/* Semi-Circle Core Burst */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 w-[500px] h-[250px] bg-gradient-to-t from-[#2563EB] via-[#06B6D4] to-transparent rounded-t-[500px] blur-[60px]"
      />

      {/* Outer Halo */}
      <div className="absolute bottom-0 w-[900px] h-[450px] bg-[#1E3A8A]/30 rounded-t-[900px] blur-[100px] mix-blend-screen" />

      {/* Grid Pattern radiating out */}
      <div
        className="absolute bottom-0 w-[800px] h-[400px] opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at bottom center, transparent 30%, #2563EB 31%, transparent 32%, transparent 40%, #06B6D4 41%, transparent 42%, transparent 50%, #2563EB 51%, transparent 52%)',
          backgroundSize: '100% 100%'
        }}
      />

      {/* Starburst rays */}
      <div className="absolute bottom-0 w-[600px] h-[300px] flex items-end justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[1px] bg-gradient-to-t from-transparent via-[#06B6D4]/30 to-transparent origin-bottom"
            style={{ transform: `rotate(${-90 + (i * 15)}deg)` }}
          />
        ))}
      </div>

      {/* Particles */}
      <FloatingDots />

      {/* Horizon Line Blocking */}
      <div className="absolute -bottom-[200px] left-0 w-full h-[200px] bg-[#070A11] blur-[20px]" />
    </div>
  );
}

function FloatingDots() {
  const [mounted, setMounted] = useState(false);
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 800,
      y: Math.random() * -400,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2
    }));
    setDots(newDots);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 w-full h-full">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bottom-0 left-1/2 rounded-full bg-white mix-blend-screen"
          style={{ width: dot.size, height: dot.size, x: dot.x, opacity: dot.opacity }}
          animate={{
            y: [0, dot.y],
            opacity: [0, dot.opacity, 0]
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}


function NewDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="relative z-20 w-[1000px] h-[550px] rounded-[24px] bg-[#0B101E]/80 backdrop-blur-2xl border border-slate-700/40 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col pointer-events-auto"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 30px 100px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.1)" }}
    >

      {/* Top Header Bar of Dashboard */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-[#2563EB]/20 text-white">
            <Sparkles size={12} />
          </div>
          <span className="font-semibold text-[15px] tracking-wide">Stackd</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-64">
          <Search size={14} className="text-slate-400" />
          <input type="text" placeholder="Search..." className="bg-transparent text-xs text-white outline-none w-full placeholder:text-slate-500" disabled />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-slate-400">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5"><Bell size={14} /></div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5"><PlusCircle size={14} /></div>
          </div>
          <div className="flex items-center gap-2 pl-4 border-l border-white/10">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#06B6D4]" />
            <span className="text-[13px] font-medium hidden sm:block">Krishna</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <div className="w-56 border-r border-white/5 p-4 flex flex-col gap-1 bg-[#070A11]/30">
          <SidebarItem icon={<LayoutDashboard size={16} />} text="Dashboard" active />
          <SidebarItem icon={<MessageSquare size={16} />} text="AI Insights" />
          <SidebarItem icon={<Briefcase size={16} />} text="Portfolio" />
          <SidebarItem icon={<Users size={16} />} text="Recruiters" />
          <SidebarItem icon={<PieChart size={16} />} text="Analytics" />

          <div className="mt-auto">
            <SidebarItem icon={<LogOut size={16} />} text="Sign out" className="text-slate-500" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-transparent to-[#2563EB]/[0.02]">

          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Resume Overview</h2>
              <p className="text-xs text-slate-400">Your professional profile health and deployed status.</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-white cursor-pointer hover:bg-white/10 transition-colors">
              <span>This month</span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

          {/* Top Metric Cards (Dribbble Style) */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <MetricCard
              title="Global ATS Score"
              value="87/100"
              trend="+12%"
              trendUp={true}
              subtitle="vs. Last Scan"
              iconColor="text-[#2563EB]"
              iconBg="bg-[#2563EB]/10"
            />
            <MetricCard
              title="Keyword Match"
              value="92%"
              trend="+5%"
              trendUp={true}
              subtitle="Software Engineer"
              iconColor="text-[#06B6D4]"
              iconBg="bg-[#06B6D4]/10"
            />
            <MetricCard
              title="Portfolio Visits"
              value="1,240"
              trend="-2%"
              trendUp={false}
              subtitle="Last 30 days"
              iconColor="text-red-400"
              iconBg="bg-red-400/10"
            />
            <MetricCard
              title="Active Links"
              value="12"
              customRender={
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-2">
                  <span>Github: <strong className="text-white font-medium">100%</strong></span>
                  <span>LinkedIn: <strong className="text-white font-medium">100%</strong></span>
                </div>
              }
            />
          </div>

          {/* Lower Section Splits */}
          <div className="grid grid-cols-3 gap-6">

            {/* Left Graph/Summary Area */}
            <div className="col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-6 h-48 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium text-sm">Profile Visibility</h3>
                <div className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-slate-400">6 Month</div>
              </div>

              {/* Decorative Graph lines */}
              <svg className="absolute bottom-0 left-0 w-full h-[100px] opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,80 Q20,60 40,70 T80,40 T100,50 L100,100 Z" fill="url(#gradientMain)" />
                <path d="M0,100 L0,80 Q20,60 40,70 T80,40 T100,50" fill="none" stroke="#2563EB" strokeWidth="2" />
                <defs>
                  <linearGradient id="gradientMain" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Right List Area */}
            <div className="col-span-1 rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="font-medium text-sm mb-4">Urgent Actions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#06B6D4]/20 text-[#06B6D4] flex items-center justify-center text-[10px] font-bold">SEO</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white">Add Meta Title</span>
                      <span className="text-[10px] text-slate-500">Portfolio Setting</span>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold">PDF</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-white">Missing Dates</span>
                      <span className="text-[10px] text-slate-500">Experience #2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

// Micro Components for Dashboard UI

function SidebarItem({ icon, text, active = false, className = "" }: { icon: React.ReactNode, text: string, active?: boolean, className?: string }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-[13px] font-medium transition-all ${active ? "bg-[#2563EB]/10 text-[#2563EB]" : "text-slate-400 hover:text-white hover:bg-white/5"} ${className}`}>
      {icon}
      {text}
    </div>
  );
}

function MetricCard({ title, value, trend, trendUp, subtitle, customRender, iconColor, iconBg }: any) {
  return (
    <div className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {iconBg && <div className={`w-5 h-5 rounded-md flex items-center justify-center ${iconBg} ${iconColor}`}><CheckCircle2 size={10} /></div>}
          <span className="text-[11px] text-slate-400 font-medium">{title}</span>
        </div>
      </div>
      <div className="text-xl font-semibold mb-1 tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{value}</div>

      {customRender ? customRender : (
        <div className="flex items-center gap-2 text-[11px]">
          <span className={`flex items-center ${trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
            {trendUp ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
            {trend}
          </span>
          <span className="text-slate-500">{subtitle}</span>
        </div>
      )}
    </div>
  );
}