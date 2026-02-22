"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

interface ContactFormProps {
    toEmail?: string;
    toName: string;
}

export default function ContactForm({ toEmail, toName }: ContactFormProps) {
    const targetEmail = toEmail || "contact@example.com";
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);

    const subject = encodeURIComponent(`New Message from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${email}`);
    const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

    const handleMailtoClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 5000);
    };

    return (
        <div className="space-y-4 w-full text-left relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors"
                />
                <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors"
                />
            </div>

            <textarea
                required
                placeholder="How can I help you?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors resize-none"
            />

            <a
                href={mailtoLink}
                onClick={handleMailtoClick}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-sm transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] active:scale-[0.98] ${clicked
                        ? "bg-emerald-600 shadow-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        : "bg-violet-600 hover:bg-violet-500 shadow-violet-500/20 border border-violet-500/30 hover:border-violet-400/50"
                    }`}
            >
                {clicked ? <Check size={18} /> : <Send size={18} />}
                {clicked ? "Opened email app!" : "Send Email"}
            </a>

            {clicked && (
                <p className="text-center text-emerald-500 mt-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                    Your email app has been opened successfully!
                </p>
            )}

            {!clicked && (
                <p className="text-center text-zinc-500 text-xs mt-2">
                    This will open your default email app.
                </p>
            )}
        </div>
    );
}
