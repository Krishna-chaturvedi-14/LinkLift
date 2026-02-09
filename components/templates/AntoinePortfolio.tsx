"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { ResumeData } from "../../lib/types";
import { AntoineHero } from "./SeraPortfolio/AntoineHero";
import { AntoineAbout } from "./SeraPortfolio/AntoineAbout";
import { AntoineWork } from "./SeraPortfolio/AntoineWork";
import { AntoineContact } from "./SeraPortfolio/AntoineContact";
import "./antoine-portfolio.css";

export default function AntoinePortfolio({ data }: { data: ResumeData }) {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <main className="antoine-theme min-h-screen">
            <AntoineHero data={data} />
            <AntoineAbout data={data} />
            <AntoineWork data={data} />
            <AntoineContact data={data} />
        </main>
    );
}
