"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, MessageSquare, Briefcase, PieChart, ChevronDown, Bell, Search, ArrowUpRight, ArrowDownRight, RefreshCcw, Users, Copy, Code, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060B18] text-white overflow-hidden font-sans selection:bg-[#2563EB]/30">

      {/* Intense dark background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B18] via-[#0B1220] to-[#060B18] pointer-events-none z-0" />

      {/* Subtle star-like particles scattered in background */}
      <BackgroundStars />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-8 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <span className="font-bold text-white text-md">S</span>
          </div>
          <span className="font-semibold text-lg tracking-wide hidden md:block">Stackd</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-slate-300">
          <a href="#" className="text-white">Home</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div>
          <Link href="/sign-up" className="relative group px-8 py-3 rounded-[24px] bg-gradient-to-r from-[#2563EB]/20 to-[#1E3A8A]/20 border border-[#2563EB]/40 text-white text-[14px] font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] inline-flex items-center justify-center overflow-hidden">
            <span className="relative z-10 drop-shadow-md">Sign up</span>
            <div className="absolute inset-0 bg-[#2563EB] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent opacity-80" />
          </Link>
        </div>
      </nav>

      <main className="relative z-10 w-full flex flex-col items-center pt-16">

        {/* Social Proof Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-9 h-9 rounded-full border-[3px] border-[#060B18] overflow-hidden bg-slate-800 shadow-md">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} alt="User" className="w-full h-full object-cover opacity-90" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1 mb-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-white/90 fill-current drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">10K+ Profiles Built</span>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-[52px] md:text-[68px] lg:text-[76px] font-semibold tracking-tight leading-[1.1] mb-6 max-w-[900px] text-white"
        >
          Turn Your <span className="font-serif italic font-light text-slate-300 px-1">Resume</span> Into a <br className="hidden md:block" />
          <span className="font-serif italic font-light text-slate-300 px-1">Deployable</span> Portfolio!
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[16px] md:text-[18px] text-slate-400 max-w-[650px] mx-auto leading-relaxed mb-10"
        >
          Automate resume targeting, manage keyword optimization, and deploy premium portfolios in one intuitive dashboard
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-30"
        >
          <Link href="/upload" className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-[#060B18] font-semibold text-[15px] transition-all duration-300 hover:-translate-y-1 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            Start free Trial
            <div className="absolute inset-0 rounded-full bg-white/30 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />
          </Link>
        </motion.div>

        {/* Cinematic Dashboard Composition */}
        <section className="relative mt-20 w-full flex justify-center perspective-[2500px] h-[580px] overflow-hidden">

          {/* Intense Dribbble Neon Arc Glow exactly at the dashboard top horizon */}
          <EnergyGlow offsetTop="100px" />

          {/* Floating UI Dashboard Panel clipping gracefully off screen */}
          <DashboardMockup topOffset="100px" />

          {/* Vignette Overlay for cinematic depth */}
          <div className="absolute top-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#060B18_100%)] z-40 relative" />

        </section>

      </main>
    </div>
  );
}

// -----------------------------------------------------

function EnergyGlow({ offsetTop }: { offsetTop: string }) {
  return (
    <div className={`absolute top-[${offsetTop}] w-[1600px] flex items-start justify-center pointer-events-none z-0`} style={{ top: offsetTop }}>

      {/* Massive deep blue radial background glow covering the screen laterally */}
      <div className="absolute top-[-250px] w-[1400px] h-[500px] bg-[#2563EB]/40 rounded-[100%] blur-[160px]" />

      {/* Secondary brighter cyan aura */}
      <div className="absolute top-[-150px] w-[900px] h-[300px] bg-[#06B6D4]/30 rounded-[100%] blur-[100px]" />

      {/* Intense Core Neon Arc blooming precisely from the dashboard border line */}
      <motion.div
        animate={{ opacity: [0.8, 1, 0.8], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-180px] w-[500px] h-[200px] bg-gradient-to-t from-white via-[#60A5FA] to-transparent rounded-t-[500px] blur-[50px] mix-blend-screen"
      />

      {/* Pure White Hotspot exactly at the center edge */}
      <div className="absolute top-[-60px] w-[250px] h-[70px] bg-white rounded-t-full blur-[25px] mix-blend-screen opacity-90" />

      {/* Horizontal Neon Light Streak traversing the entire width of the glow */}
      <div className="absolute top-[-5px] w-[1200px] h-[4px] bg-[#60A5FA] blur-[6px] opacity-80" />
      <div className="absolute top-[-3px] w-[700px] h-[2px] bg-white blur-[2px] opacity-100" />

      {/* Dotted Tech Pattern Arc fanning outwards */}
      <div className="absolute top-[-400px] w-[1200px] h-[450px]" style={{ perspective: '1000px' }}>
        <div
          className="w-full h-full opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#60A5FA 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at bottom center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 65%)',
            transform: 'rotateX(40deg)', // Adds depth to the dot matrix
            transformOrigin: 'bottom center'
          }}
        />
      </div>

      {/* Thin digital rings echoing the curve */}
      <div className="absolute top-[-350px] w-[800px] h-[360px] rounded-t-full border border-[#60A5FA]/40 border-dashed opacity-40 mix-blend-screen" />
      <div className="absolute top-[-450px] w-[1100px] h-[460px] rounded-t-full border border-[#2563EB]/20 opacity-30 mix-blend-screen" />

    </div>
  );
}

// -----------------------------------------------------

function DashboardMockup({ topOffset }: { topOffset: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 2 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      className={`absolute z-20 w-[1060px] h-[650px] rounded-[28px] overflow-hidden flex flex-col pointer-events-auto`}
      style={{
        top: topOffset,
        // Match the deep dark glassy material of Dribbble
        background: 'linear-gradient(171deg, rgba(8,12,25,0.95), rgba(4,7,17,0.98))',
        backdropFilter: 'blur(30px)',
        // Complex box shadows for depth and the top highlight neon reflection
        boxShadow: "0 -2px 6px rgba(96,165,250,0.3), 0 50px 100px rgba(0,0,0,0.9), inset 0 2px 2px rgba(255,255,255,0.08), inset 0 0 40px rgba(37,99,235,0.05)"
      }}
    >
      <div className="flex h-full w-full">
        {/* LEFT SIDEBAR */}
        <div className="w-[230px] border-r border-[#2563EB]/10 flex flex-col pt-7 pb-6 bg-[#040711]/60">

          {/* App Logo */}
          <div className="flex items-center gap-3 px-7 mb-10 text-white">
            <div className="w-8 h-8 rounded-full bg-[#1E3A8A] border border-[#2563EB]/40 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <span className="font-bold text-white text-[14px]">S</span>
            </div>
            <span className="font-semibold text-white tracking-wide text-[16px]">Stackd</span>
          </div>

          {/* Sub Navigation */}
          <div className="flex flex-col gap-1.5 px-4 mb-8">
            <SidebarItem icon={<LayoutDashboard size={15} />} text="Dashboard" active />
            <SidebarItem icon={<MessageSquare size={15} />} text="Messages" badge={2} />
            <SidebarItem icon={<Briefcase size={15} />} text="Portfolio" />
            <SidebarItem icon={<Users size={15} />} text="Connections" />
            <SidebarItem icon={<PieChart size={15} />} text="Analytics" />
            <SidebarItem icon={<ArrowUpRight size={15} />} text="Transactions" />
          </div>

        </div>

        {/* MAIN PANEL */}
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-gradient-to-br from-transparent to-[#2563EB]/[0.02]">

          {/* Header Row */}
          <div className="flex items-center justify-between px-10 py-6 border-b border-white/[0.03]">

            {/* Search */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#060B18] border border-white/5 w-[280px]">
              <Search size={14} className="text-slate-500" />
              <input type="text" placeholder="Search..." className="bg-transparent text-[13px] text-white outline-none w-full placeholder:text-slate-600" disabled />
            </div>

            {/* Right Avatar & Toolbar */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer"><Bell size={16} /></div>
                <div className="w-9 h-9 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer"><RefreshCcw size={15} /></div>
              </div>

              <div className="flex items-center gap-3 bg-[#060B18] border border-white/5 rounded-full pr-4 pl-1 py-1">
                <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-8 h-8 rounded-full border border-white/10" />
                <span className="text-[13px] font-medium text-white">Josika</span>
              </div>
            </div>
          </div>

          {/* Dashboard Stage */}
          <div className="flex-1 p-10 overflow-y-auto w-full">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-white tracking-tight">Dashboard</h2>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 text-[12px] font-medium text-white cursor-pointer hover:bg-[#2563EB]/10 transition-colors">
                <span>This month</span>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
            </div>

            {/* 4-Col Metrics Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <MetricCard
                iconColor="text-[#60A5FA]"
                icon={<PieChart size={14} className="text-inherit" />}
                title="ATS Score"
                value="87/100"
                trend="15%" trendUp={true} subtitle="Scan Match"
              />
              <MetricCard
                iconColor="text-[#2563EB]"
                icon={<Code size={14} className="text-inherit" />}
                title="Keywords"
                value="92%"
                trend="2%" trendUp={false} subtitle="Missing Terms"
              />
              <MetricCard
                iconColor="text-emerald-400"
                icon={<Copy size={14} className="text-inherit" />}
                title="Views"
                value="1,240"
                trend="24%" trendUp={true} subtitle="Traffic Surge"
              />
              <div className="col-span-1 flex flex-col p-6 rounded-[20px] bg-[#060B18] border border-[#1E3A8A]/30 flex-1 relative overflow-hidden group">
                <div className="flex items-center gap-2.5 mb-2 relative z-10 text-[#60A5FA]">
                  <Briefcase size={14} />
                  <span className="text-[12px] text-slate-400 font-medium">Deployed Rank</span>
                </div>
                <div className="text-[28px] font-medium text-white mb-2 relative z-10 tracking-tight">Top 5%</div>
                <div className="flex items-center gap-5 pt-3 relative z-10 border-t border-white/5 mt-auto">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Links</span>
                    <strong className="text-white text-[12px]">2 Active</strong>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Leads</span>
                    <strong className="text-white text-[12px]">14 Found</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Split */}
            <div className="grid grid-cols-3 gap-6">

              {/* Graph Summary */}
              <div className="col-span-2 rounded-[20px] border border-[#1E3A8A]/20 bg-[#060B18] p-7 relative overflow-hidden h-[240px]">
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <h3 className="font-semibold text-[15px] text-white">Revenue Summary</h3>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#2563EB]/10 bg-white/5 text-[11px] font-medium text-slate-400">
                    6 Month <ChevronDown size={12} className="opacity-70" />
                  </div>
                </div>

                <div className="absolute bottom-6 left-7 text-[10px] font-mono text-slate-600">100K</div>
                <div className="absolute bottom-[40%] left-7 text-[10px] font-mono text-slate-600 border-b border-dashed border-white/5 w-[85%]" />

                <svg className="absolute bottom-0 left-0 w-full h-[140px] opacity-90" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,70 Q20,50 40,65 T80,40 T100,20 L100,100 Z" fill="url(#gradientChart)" />
                  <path d="M0,70 Q20,50 40,65 T80,40 T100,20" fill="none" stroke="#2563EB" strokeWidth="2.5" />
                  <defs>
                    <linearGradient id="gradientChart" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Right Lists */}
              <div className="col-span-1 rounded-[20px] border border-[#1E3A8A]/20 bg-[#060B18] p-7 pb-4">
                <h3 className="font-semibold text-[15px] text-white mb-6">New Messages</h3>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[12px] font-medium text-slate-400 bg-white/5 px-3 py-1.5 rounded-full">Tenant</div>
                  <div className="flex items-center gap-2 text-[12px] text-white font-medium">New Request <div className="w-5 h-5 rounded-full bg-[#2563EB] text-[10px] flex items-center justify-center font-bold">2</div></div>
                </div>
                <div className="h-px w-full bg-[#2563EB]/10 my-4" />
                <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/100?img=33" className="w-9 h-9 rounded-full border border-white/10" />
                  <div>
                    <div className="text-[13px] text-white font-medium">Alex Morgan</div>
                    <div className="text-[11px] text-[#60A5FA]">Contact Request</div>
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

// -----------------------------------------------------

function MetricCard({ title, value, trend, trendUp, subtitle, icon, iconColor }: any) {
  return (
    <div className="col-span-1 flex flex-col p-6 rounded-[20px] bg-[#060B18] border border-[#1E3A8A]/30 relative overflow-hidden group transition-all duration-300 hover:border-[#2563EB]/50">

      {/* Dynamic Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-transparent group-hover:from-[#2563EB]/10 transition-colors duration-500" />

      <div className="flex items-center gap-2.5 mb-2 relative z-10">
        <div className={`p-1.5 rounded-lg bg-white/5 ${iconColor}`}>
          {icon}
        </div>
        <span className="text-[12px] text-slate-400 font-medium">{title}</span>
      </div>

      <div className="text-[28px] font-medium text-white mb-3 tracking-tight relative z-10">{value}</div>

      <div className="flex items-center gap-2 text-[11px] relative z-10">
        <span className={`px-2 py-0.5 rounded-full flex items-center gap-0.5 font-bold ${trendUp ? 'bg-[#2563EB]/10 text-[#60A5FA]' : 'bg-red-500/10 text-red-500'}`}>
          {trendUp ? <ArrowUpRight size={10} strokeWidth={3} /> : <ArrowDownRight size={10} strokeWidth={3} />}
          {trend}
        </span>
        <span className="text-slate-500 text-[10px] font-medium">{subtitle}</span>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active = false, badge = 0 }: { icon: React.ReactNode, text: string, active?: boolean, badge?: number }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-[12px] cursor-pointer text-[13px] font-medium transition-all duration-300 ${active ? "text-[#60A5FA] bg-[#2563EB]/10 border border-[#2563EB]/10" : "text-slate-500 hover:text-white hover:bg-white/5 border border-transparent"}`}>
      <div className="flex items-center gap-3">
        <span className={active ? "text-[#60A5FA]" : ""}>{icon}</span>
        {text}
      </div>
      {badge > 0 && <span className="bg-[#2563EB] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md">{badge}</span>}
    </div>
  );
}

// -----------------------------------------------------

function BackgroundStars() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      animDuration: Math.random() * 4 + 2,
      animDelay: Math.random() * 2
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">

      {/* Global Grain Filter for Cinematic feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      {/* Floating Animated Stars */}
      <div className="absolute inset-0 w-full h-[600px] overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white mix-blend-screen"
            style={{ width: star.size, height: star.size, left: `${star.x}%`, top: `${star.y}%`, opacity: star.opacity }}
            animate={{ opacity: [star.opacity, star.opacity * 2.5, star.opacity] }}
            transition={{ duration: star.animDuration, repeat: Infinity, delay: star.animDelay, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}