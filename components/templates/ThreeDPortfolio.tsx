
"use client";

import { ResumeData } from "@/lib/types";
import { Loader2 } from "lucide-react";

export default function ThreeDPortfolio({ data }: { data: ResumeData }) {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                3D Interactive Experience
            </h1>
            <p className="text-zinc-500 max-w-md text-center">
                This immersive template is currently being initialized. Please check back shortly or switch to "Modern Clean" for now.
            </p>
        </div>
    );
}
