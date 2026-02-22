"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlobBackground from "@/components/BlobBackground";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative min-h-screen bg-[#05050a] text-white overflow-hidden font-sans selection:bg-white/20">

      {/* 3D Background */}
      <BlobBackground />

      {/* Local Navbar to avoid conflicts with global layout on landing page */}
      <div className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-black text-sm">s</div>
          <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">stackd</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">About</a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Trading</a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Contact</a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors duration-200">FAQ</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="/sign-in" className="hidden sm:block text-sm font-medium text-white/80 hover:text-white transition-colors">Login</a>
          <a href="/sign-up" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">Sign Up</a>
        </div>
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative mt-[-5vh]">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6 mt-10 md:mt-0 z-30"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-[86px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 leading-[1.05] drop-shadow-2xl mix-blend-screen"
            >
              Elevate Your <br className="hidden md:block" /> Trading Experience
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-md"
            >
              Unlock your trading potential in a fully regulated environment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="/dashboard" className="group relative px-8 py-4 bg-white hover:bg-white/90 text-black rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Sign Up & Trade</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-shimmer pointer-events-none" />
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Glassmorphic Cards */}
          <motion.div
            className="absolute left-0 md:left-[5%] lg:left-[8%] top-[70%] md:top-[45%] z-20 w-[240px] md:w-[260px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <StatCard
              variant="text"
              label="Trading Pairs"
              title={"Unparalleled\nMarket Access"}
            />
          </motion.div>

          <motion.div
            className="absolute right-0 md:right-[5%] lg:right-[8%] top-[85%] md:top-[65%] z-20 w-[240px] md:w-[260px]"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <StatCard
              variant="number"
              label="Trading Pairs"
              value="96%"
              highlightColor="bg-white"
            />
          </motion.div>

        </div>
      </main>

    </div>
  );
}

// Liquid Glass Helper Component
function StatCard({
  variant = "text",
  label,
  title,
  value,
  highlightColor = "bg-white",
}: {
  variant?: "text" | "number";
  label: string;
  title?: string;
  value?: string;
  highlightColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`p-5 rounded-[24px] bg-[#ffffff]/[0.03] border border-white/5 backdrop-blur-3xl text-left relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.6)]`}
      style={{
        boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)", // For Safari
      }}
    >
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="text-[12px] text-white/70 font-medium tracking-wide">{label}</div>
        <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center text-black transition-transform duration-300 group-hover:scale-110">
          <ArrowUpRight size={12} strokeWidth={2.5} />
        </div>
      </div>

      {variant === "text" && (
        <div className="flex flex-col relative z-10 mt-1">
          <div className="text-[15px] text-white font-semibold leading-snug mb-2 whitespace-pre-line">{title}</div>
        </div>
      )}

      {variant === "number" && (
        <div className="flex flex-col relative z-10 mt-1">
          <div className="text-[40px] font-bold text-white tracking-tighter leading-none mb-3 drop-shadow-sm">{value}</div>
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: value }}
              transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
              className={`h-full ${highlightColor} rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}