"use client";

import React from "react";
import { ResumeData } from "@/lib/types";

export const AntoineContact = ({ data }: { data: ResumeData }) => {
    return (
        <section id="contact" className="antoine-theme dark py-48">
            <div className="container mx-auto px-6 text-center">
                <p className="font-mono text-sm uppercase mb-12 opacity-70 tracking-widest">
                    Available for freelance work
                </p>
                <a
                    href={`mailto:${data.email}`}
                    className="antoine-title block hover:italic transition-all duration-500 hover:scale-105"
                >
                    Let's Chat
                </a>
                <div className="mt-24 flex flex-col md:flex-row justify-between items-center border-t border-current pt-12 gap-8">
                    <p className="text-2xl font-serif">© 2025 {data.name}</p>
                    <div className="flex gap-12 font-mono uppercase text-sm">
                        <a href="#" className="antoine-link">LinkedIn</a>
                        <a href="#" className="antoine-link">Github</a>
                        <a href="#" className="antoine-link">Twitter</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
