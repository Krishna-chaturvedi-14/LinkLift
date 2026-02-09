"use client";
import React from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { ResumeData } from "../../../lib/types";

export default function Contact({ data }: { data: ResumeData }) {
    return (
        <section id="contact" className="py-20 bg-[#04081A] text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="bg-blue-500/10 p-4 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">Email</h3>
                                        <p className="text-white font-medium">{data.email || "hello@example.com"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="bg-purple-500/10 p-4 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                                        <MapPin className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">Location</h3>
                                        <p className="text-white font-medium">Remote / Global</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-8">
                                {[Github, Linkedin, Twitter].map((Icon, i) => (
                                    <a key={i} href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50">
                                        <Icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-25" />
                            <div className="relative bg-[#091121] p-8 rounded-3xl border border-white/10 shadow-2xl">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all resize-none"
                                            placeholder="How can I help you?"
                                        />
                                    </div>
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all transform active:scale-95 shadow-xl shadow-blue-500/20">
                                        Send Message
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
