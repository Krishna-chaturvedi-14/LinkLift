"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, UploadCloud, Zap, Code, Shield, Sparkles, BarChart, Rocket, Monitor } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="relative min-h-screen bg-[#0B1220] text-white overflow-hidden font-sans selection:bg-[#2563EB]/30">

      {/* Background Gradient & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#0F172A]" />

        {/* Animated Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
          }}
        />

        {/* Radial Blue Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[#0B1220] rounded-[7px] flex items-center justify-center">
              <span className="font-bold text-white text-sm">S</span>
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">stackd</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-in" className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/sign-up" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white text-sm font-medium hover:from-[#3B82F6] hover:to-[#2563EB] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E293B]/50 border border-slate-700/50 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-sm font-medium text-slate-200">10,000+ resumes analyzed</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 max-w-4xl mx-auto leading-tight mb-6"
          >
            Turn Your Resume Into a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#2563EB]">Deployable Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Get AI-powered insights, instant ATS scoring, and launch a professional portfolio website in seconds. Built for ambitious professionals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/upload" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-[#2563EB] text-white font-semibold hover:bg-[#3B82F6] transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]">
              <UploadCloud className="w-5 h-5 text-white/90 group-hover:text-white" />
              Upload Resume
            </Link>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800/50 text-white font-semibold hover:bg-slate-800 border border-slate-700/50 transition-all backdrop-blur-sm">
              See Demo
            </button>
          </motion.div>
        </section>

        {/* Centerpiece Visualization */}
        <section className="relative mt-32 w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center perspective-[2000px]">
          {/* Energy Sphere */}
          <EnergySphere />

          {/* Glassmorphic Dashboard */}
          <DashboardMockup />
        </section>

        {/* Features Section */}
        <section id="features" className="mt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-[#06B6D4]" />}
              title="AI Resume Analysis"
              description="Deep resume breakdown with actionable insights and tailored recommendations."
              delay={0}
            />
            <FeatureCard
              icon={<BarChart className="w-6 h-6 text-[#2563EB]" />}
              title="ATS Optimization"
              description="Improve keyword matching, fix formatting flaws, and increase interview chances."
              delay={0.1}
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6 text-[#06B6D4]" />}
              title="Instant Portfolio"
              description="Turn your optimized resume into a live personal website instantly, ready to share."
              delay={0.2}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

// Subcomponents

function EnergySphere() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-none w-full h-full max-w-[600px] max-h-[600px]">

      {/* Outer Glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#06B6D4]/20 blur-[60px]"
      />

      {/* Inner Core */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[200px] h-[200px] rounded-full bg-[#2563EB]/40 blur-[40px]"
      />

      {/* Crisp Center */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-[150px] h-[150px] rounded-full bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] opacity-90 blur-[10px] mix-blend-screen overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </motion.div>

      {/* Floating Code Particles */}
      <CodeParticles />
    </div>
  );
}

function CodeParticles() {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 z-0">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const radius = 250;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 text-xs font-mono text-[#06B6D4]/50 whitespace-nowrap blur-[0.5px]"
            initial={{ x: x + 100 * Math.random(), y: y + 100 * Math.random(), opacity: 0, scale: 0.5 }}
            animate={{
              x: [x + 50 * Math.random(), x * 0.2, 0],
              y: [y + 50 * Math.random(), y * 0.2, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            {['{ data }', '() =>', 'await res', '<tag>', '0101', 'func()'][Math.floor(Math.random() * 6)]}
          </motion.div>
        );
      })}
    </div>
  );
}

function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 100, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: mousePosition.y * -10, rotateY: mousePosition.x * 10 }}
      transition={{
        opacity: { duration: 1 },
        y: { duration: 1, ease: "easeOut" },
        rotateX: { type: "spring", stiffness: 100, damping: 30 },
        rotateY: { type: "spring", stiffness: 100, damping: 30 }
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative z-20 w-full max-w-4xl mx-auto rounded-2xl bg-[#0F172A]/60 backdrop-blur-2xl border border-slate-700/50 shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
    >
      {/* Top reflection / glare */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent" />

      {/* Left Panel: Resume Preview */}
      <div className="w-full md:w-1/3 border-r border-slate-700/50 p-6 flex flex-col gap-4 bg-[#0B1220]/40">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
        </div>

        <div className="w-24 h-4 rounded bg-slate-700/50 mb-4" />

        {/* Skeleton Resume */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-700/50 shrink-0" />
            <div className="space-y-2 w-full">
              <div className="w-3/4 h-3 rounded bg-slate-600/50" />
              <div className="w-1/2 h-2 rounded bg-slate-700/50" />
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <div className="w-full h-2 rounded bg-slate-700/50" />
            <div className="w-5/6 h-2 rounded bg-slate-700/50" />
            <div className="w-4/6 h-2 rounded bg-slate-700/50" />
          </div>
          <div className="pt-2">
            <div className="w-1/3 h-3 rounded bg-slate-600/50 mb-2" />
            <div className="space-y-2">
              <div className="w-full h-2 rounded bg-[#2563EB]/40 flex gap-2 overflow-hidden"><div className="w-1/2 bg-[#2563EB]/80 h-full" /></div>
              <div className="w-full h-2 rounded bg-[#06B6D4]/40 flex gap-2 overflow-hidden"><div className="w-3/4 bg-[#06B6D4]/80 h-full" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: AI Insights & Portfolio */}
      <div className="w-full md:w-2/3 p-6 flex flex-col bg-[#0F172A]/40 divide-y divide-slate-700/50">

        {/* AI Insights */}
        <div className="pb-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-4">
            <Sparkles className="w-4 h-4 text-[#06B6D4]" />
            AI Insights
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-[#0B1220]/50 border border-slate-700/50">
              <div className="text-xs text-slate-400 mb-1">ATS Score</div>
              <div className="text-3xl font-bold text-white flex items-end gap-1">
                87<span className="text-sm font-medium text-slate-500 mb-1">/100</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
                <div className="w-[87%] h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1220]/50 border border-slate-700/50 flex flex-col justify-center">
              <div className="text-xs text-slate-400 mb-1">Recruiter Readability</div>
              <div className="text-xl font-semibold text-[#06B6D4]">Excellent</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
              <p className="text-xs text-slate-300 leading-relaxed">Keyword match improved by adding <span className="text-[#06B6D4]">React Native</span> and <span className="text-[#06B6D4]">Node.js</span>.</p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-[#1E293B]">
              <div className="w-4 h-4 mt-0.5 rounded-full border border-slate-500 shrink-0" />
              <p className="text-xs text-slate-400 leading-relaxed">Quantify your achievements in experience #2.</p>
            </div>
          </div>
        </div>

        {/* Portfolio Preview Tab */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <Monitor className="w-4 h-4 text-[#2563EB]" />
              Portfolio Preview
            </h3>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#2563EB]/20 text-[#2563EB]">Ready</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0B1220]/80 border border-slate-700/50 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-medium text-slate-300">stackd.site/johndoe</div>
              <div className="text-[10px] text-slate-500">Theme: Cyber Dark</div>
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#2563EB] text-xs font-semibold text-white hover:bg-[#3B82F6] transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Deploy
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group p-8 rounded-2xl bg-[#0F172A]/40 border border-slate-800 hover:border-slate-700 hover:bg-[#0F172A]/80 transition-all text-left relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-slate-800 flex items-center justify-center mb-6 relative">
          {/* Subtle glow behind icon */}
          <div className="absolute inset-0 bg-[#2563EB]/20 blur-xl rounded-full" />
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}