"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutDashboard, MessageSquare, Briefcase, PieChart, ChevronDown, Bell, Search, ArrowUpRight, ArrowDownRight, RefreshCcw, Users, Copy, Code, Sparkles, Share2, Globe, User, AlertTriangle } from "lucide-react";
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
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <span className="font-bold text-white text-md">S</span>
          </div>
          <span className="font-semibold text-lg tracking-wide hidden md:block">Stackd</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-slate-300">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div>
          <Link href="/sign-up" className="relative group px-8 py-3 rounded-[24px] bg-gradient-to-r from-violet-600/20 to-indigo-900/20 border border-violet-500/40 text-white text-[14px] font-medium transition-all shadow-[0_0_30px_rgba(124,58,237,0.2)] hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] inline-flex items-center justify-center overflow-hidden">
            <span className="relative z-10 drop-shadow-md">Sign up</span>
            <div className="absolute inset-0 bg-violet-600 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent opacity-80" />
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
          <Link href="/upload" className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-600/20 backdrop-blur-md border border-violet-500/30 text-white font-semibold text-[15px] transition-all duration-500 hover:-translate-y-1 hover:bg-violet-600/40 hover:border-violet-400/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] shadow-[0_0_20px_rgba(139,92,246,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">
            <span className="relative z-10 drop-shadow-sm tracking-wide">Start free Trial</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/0 via-white/10 to-violet-600/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out transform -translate-x-full z-0" />
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />
          </Link>
        </motion.div>

        {/* Cinematic Dashboard Composition */}
        <section className="relative mt-20 w-full flex justify-center perspective-[2500px] h-[580px]">

          {/* Intense Dribbble Neon Arc Glow extending upwards without clipping */}
          <EnergyGlow offsetTop="100px" />

          {/* Floating UI Dashboard Panel */}
          <DashboardMockup topOffset="100px" />

        </section>

        {/* --- ADDED MISSING SECTIONS FOR NAVBAR LINKS to WORK --- */}

        {/* Features Section */}
        <div id="features" className="w-full max-w-[1200px] mx-auto py-32 px-10 border-t border-white/5 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto">Everything you need to automate your resume targeting and manage your portfolio deployments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-[24px] bg-[#0C0C0F] border border-white/5 hover:border-violet-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center mb-6">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-3">Feature Area {i}</h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">Automated insights and matching capabilities that ensure your profile ranks in the top percentile of applicants automatically.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full max-w-[1200px] mx-auto py-32 px-10 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto">Start for free, upgrade when you need more power.</p>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-[350px] p-8 rounded-[24px] bg-[#0C0C0F] border border-white/5">
              <h3 className="text-[20px] font-semibold text-white mb-2">Free Tier</h3>
              <div className="text-[48px] font-bold text-white mb-6">$0<span className="text-[16px] text-slate-500 font-normal">/mo</span></div>
              <button className="w-full py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors mb-8 font-medium">Get Started</button>
              <ul className="space-y-4 text-slate-400 text-[14px]">
                <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-500" /> 1 Portfolio Link</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-500" /> Basic Analytics</li>
              </ul>
            </div>
            <div className="w-[350px] p-8 rounded-[24px] bg-gradient-to-b from-[#18181B] to-[#0C0C0F] border border-violet-500/30 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-500" />
              <h3 className="text-[20px] font-semibold text-white mb-2">Pro Builder</h3>
              <div className="text-[48px] font-bold text-white mb-6">$15<span className="text-[16px] text-slate-500 font-normal">/mo</span></div>
              <button className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white transition-colors mb-8 font-medium shadow-[0_0_20px_rgba(124,58,237,0.3)]">Upgrade to Pro</button>
              <ul className="space-y-4 text-slate-400 text-[14px]">
                <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-500" /> Unlimited Portfolio Links</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-500" /> Advanced AI Analytics</li>
                <li className="flex gap-3 items-center"><CheckCircle2 size={16} className="text-violet-500" /> Custom Domains</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div id="blog" className="w-full max-w-[1200px] mx-auto py-32 px-10 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-slate-400 max-w-[600px] mx-auto">Read our latest thoughts on career growth and tech stacks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-[300px] rounded-[24px] bg-[#0C0C0F] border border-white/5 p-8 flex flex-col justify-end">
              <span className="text-violet-400 text-[12px] font-bold uppercase tracking-wider mb-2">Career Format</span>
              <h3 className="text-[24px] font-semibold text-white mb-2">How to optimize your resume for AI parsers in 2026.</h3>
              <span className="text-slate-500 text-[14px]">March 12 • 5 min read</span>
            </div>
            <div className="h-[300px] rounded-[24px] bg-[#0C0C0F] border border-white/5 p-8 flex flex-col justify-end">
              <span className="text-fuchsia-400 text-[12px] font-bold uppercase tracking-wider mb-2">Engineering</span>
              <h3 className="text-[24px] font-semibold text-white mb-2">The ultimate guide to building a deployable portfolio.</h3>
              <span className="text-slate-500 text-[14px]">March 08 • 8 min read</span>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="w-full pb-32 pt-20 border-t border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-violet-900/10 blur-[100px] rounded-full w-[600px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-[48px] font-bold text-white mb-6 relative z-10 text-center">Ready to level up?</h2>
          <p className="text-slate-400 mb-10 relative z-10 text-center max-w-[500px]">Join thousands of developers building their perfect tech identity.</p>
          <div className="flex gap-4 relative z-10">
            <button className="px-8 py-3 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors">Contact Sales</button>
            <button className="px-8 py-3 rounded-full bg-[#18181B] border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">Support Docs</button>
          </div>
        </div>

      </main>
    </div>
  );
}

// -----------------------------------------------------

function EnergyGlow({ offsetTop }: { offsetTop: string }) {
  return (
    <div className={`absolute top-[${offsetTop}] w-[1600px] flex items-start justify-center pointer-events-none z-0`} style={{ top: offsetTop }}>

      {/* 1. Deep Core Ambient Glow (The large purple atmospheric spread) */}
      <div className="absolute top-[-250px] w-[1400px] h-[500px] bg-[#7C3AED]/40 rounded-[100%] blur-[160px]" />
      <div className="absolute top-[-150px] w-[900px] h-[300px] bg-[#A78BFA]/20 rounded-[100%] blur-[100px]" />

      {/* 2. Dotted Tech Pattern Arc fanning outwards (placing it behind the solid core) */}
      <div className="absolute top-[-400px] w-[1200px] h-[450px]" style={{ perspective: '1000px' }}>
        <div
          className="w-full h-full opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(#A78BFA 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at bottom center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 65%)',
            transform: 'rotateX(40deg)', // Adds depth to the dot matrix
            transformOrigin: 'bottom center'
          }}
        />
      </div>

      {/* 3. The Solid, Intense Inner Semi-Circle Halo (This is the critical missing piece) */}
      <motion.div
        animate={{ opacity: [0.95, 1, 0.95], scale: [0.99, 1.01, 0.99] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 flex justify-center w-full"
      >
        {/* Outer Halo of the solid ring */}
        <div className="absolute bottom-0 w-[550px] h-[275px] bg-[#8B5CF6]/80 rounded-t-full blur-[30px] mix-blend-screen" />

        {/* The Solid Bright White/Purple Ring Shape itself */}
        <div className="absolute bottom-0 w-[450px] h-[225px] rounded-t-full border-[35px] border-white drop-shadow-[0_0_40px_rgba(255,255,255,0.8)] border-b-0 shadow-[0_0_80px_rgba(139,92,246,1),inset_0_0_50px_rgba(139,92,246,0.8)]" />

        {/* Intense white blowout at the very base to merge it with the horizon line */}
        <div className="absolute bottom-[-20px] w-[700px] h-[100px] bg-white rounded-[100%] blur-[40px] mix-blend-screen opacity-100" />
      </motion.div>

      {/* 4. Concentric Outer Nodes & Rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center pointer-events-none mix-blend-screen">
        {/* Middle Ring */}
        <div className="absolute bottom-0 border border-[#8B5CF6]/40 border-b-0 rounded-t-full w-[850px] h-[425px]">
          {/* Left Node */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#060B18] border border-[#A78BFA] top-[100px] left-[110px] shadow-[0_0_12px_rgba(167,139,250,1)]" />
          {/* Right Node */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#060B18] border border-[#A78BFA] top-[100px] right-[110px] shadow-[0_0_12px_rgba(167,139,250,1)]" />
        </div>

        {/* Outer Ring */}
        <div className="absolute bottom-0 border border-[#8B5CF6]/20 border-b-0 rounded-t-full w-[1150px] h-[575px]">
          {/* Left Node */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#060B18] border border-[#A78BFA]/80 top-[180px] left-[130px] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
          {/* Right Node */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#060B18] border border-[#A78BFA]/80 top-[180px] right-[130px] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
        </div>
      </div>

      {/* 5. Horizontal Neon Horizon Streak */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <div className="absolute bottom-0 w-[1400px] h-[6px] bg-[#7C3AED]/60 blur-[10px]" />
        <div className="absolute bottom-0 w-[900px] h-[3px] bg-[#A78BFA] blur-[4px] opacity-90" />
        <div className="absolute bottom-0 w-[500px] h-[2px] bg-white blur-[1px] opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
      </div>

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
      className={`absolute z-20 w-[1060px] h-[650px] rounded-[16px] overflow-hidden flex flex-col pointer-events-auto border border-white/5`}
      style={{
        top: topOffset,
        background: '#09090B', // Very dark background like the image
        boxShadow: "0 50px 100px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.05)"
      }}
    >
      {/* Top Navigation */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-[#09090B]">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#18181B] flex items-center justify-center border border-white/10">
              <span className="font-bold text-white text-[14px]">S</span>
            </div>
            <span className="font-semibold text-white tracking-tight text-[15px]">stackd</span>
          </div>
          <div className="flex items-center gap-6 text-[14px] font-medium text-slate-400">
            <span className="hover:text-white cursor-pointer flex items-center gap-2"><span className="text-slate-500">+</span> Analyze New</span>
            <span className="text-white font-semibold cursor-pointer">Dashboard</span>
            <span className="hover:text-white cursor-pointer">Portfolio</span>
          </div>
        </div>
        <div>
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-medium border border-white/10">K</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-hidden bg-[#09090B] flex flex-col">

        {/* Header Section */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-[42px] font-bold text-white leading-tight mb-2 tracking-tight">Resume<br />Intelligence</h1>
            <p className="text-[15px] text-slate-400">Krishna Chaturvedi <span className="text-slate-600 mx-1">•</span> <span className="text-violet-500">Machine Learning Intern</span></p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#18181B] border border-white/5 rounded-full pl-4 pr-1 py-1">
                <span className="text-[13px] text-slate-500 mr-4 font-mono">stackd.krishnachaturvedi.in/krishna-chaturvedi-6222</span>
                <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white cursor-pointer">
                  <Share2 size={12} />
                </div>
              </div>
              <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-[#18181B] text-[13px] font-medium text-white cursor-pointer hover:bg-white/5 transition-colors">
                <span className="text-slate-400">+</span> Update Resume
              </div>
            </div>
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-violet-600 text-[13px] font-medium text-white cursor-pointer hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              <Globe size={14} /> Manage Portfolio
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex-1 rounded-[24px] border border-white/5 bg-[#0C0C0F] p-8 flex gap-10">

          {/* Left Column (Score and Insights) */}
          <div className="flex-1 flex flex-col pt-2">

            <div className="flex gap-8 mb-12">
              {/* Score Ring */}
              <div className="relative w-[140px] h-[140px] flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#1E1E24" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#scoreGradient)" strokeWidth="8" strokeDasharray="283" strokeDashoffset="42" className="drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-[40px] font-bold text-white leading-none tracking-tighter">85</span>
                  <span className="text-[10px] text-slate-500 font-semibold tracking-widest mt-1">SCORE</span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-[22px] font-semibold text-white mb-3">Market Compatibility</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed max-w-[400px]">
                  Your profile is optimized for <strong className="text-white font-medium">Machine Learning Intern</strong>. Refining the areas identified below can significantly increase your callback rate.
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-[#18181B] border border-white/5 flex items-center justify-center text-violet-500">
                  <User size={16} />
                </div>
                <h3 className="text-[20px] font-semibold text-white">Expert AI Insights</h3>
              </div>

              <div className="pl-4 border-l-2 border-[#1E1E24] py-1 ml-4">
                <div className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mb-2">EDUCATION</div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2 text-amber-500/90 text-[14px]">
                    <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                    <span className="italic">"Lack of relevant certifications"</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="w-px bg-white/5" />

          {/* Right Column (Technical Arsenal) */}
          <div className="w-[320px] pt-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={14} className="text-violet-500" />
              <h3 className="text-[12px] font-semibold text-slate-400 tracking-widest uppercase">Technical Arsenal</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Python", "C", "HTML", "CSS", "MySQL", "Git", "Vercel", "Agile",
                "Scrum", "Regression", "Classification", "Clustering Algorithms",
                "Pandas", "Numpy", "Matplotlib", "Seaborn", "Cursor", "Claude Code", "Copilot"
              ].map((skill, index) => (
                <div key={index} className="px-4 py-1.5 rounded-full bg-[#18181B] border border-white/5 text-[12px] text-slate-400 hover:text-white cursor-default transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </motion.div>
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
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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