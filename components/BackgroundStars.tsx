"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackgroundStars() {
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
            {/* Intense dark background base */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060B18] via-[#0B1220] to-[#060B18] pointer-events-none z-0" />

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
