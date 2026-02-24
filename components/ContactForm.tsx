"use client";

import { useState } from "react";
import { Send, Loader2, Check, AlertTriangle } from "lucide-react";

interface ContactFormProps {
    toEmail?: string;
    toName: string;
    theme?: "dark" | "light";
}

export default function ContactForm({ toEmail, toName, theme = "dark" }: ContactFormProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    toEmail, // Destination email
                }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const data = await res.json();
                console.error("API Error:", data.error);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (err) {
            console.error("Contact Form Catch Error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const inputClasses = theme === "dark"
        ? "w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors"
        : "w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-slate-800 text-sm outline-none focus:border-rose-500/50 focus:bg-white transition-colors placeholder:text-slate-400";

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full text-left relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                />
                <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                />
            </div>

            <textarea
                required
                placeholder="How can I help you?"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClasses} resize-none`}
            />

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-sm transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] active:scale-[0.98] ${status === "success"
                    ? "bg-emerald-600 shadow-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    : "bg-violet-600 hover:bg-violet-500 shadow-violet-500/20 border border-violet-500/30 hover:border-violet-400/50"
                    } disabled:opacity-50`}
            >
                {status === "loading" && <Loader2 className="animate-spin" size={18} />}
                {status === "success" && <Check size={18} />}
                {status === "idle" && <Send size={18} />}
                {status === "error" && <AlertTriangle size={18} />}

                {status === "loading" ? "Sending..." : status === "success" ? "Sent Successfully!" : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-center text-emerald-500 mt-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                    Your message was sent successfully!
                </p>
            )}

            {status === "error" && (
                <p className="text-center text-red-500 mt-2 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
                    Failed to send message. Please try again.
                </p>
            )}
        </form>
    );
}
