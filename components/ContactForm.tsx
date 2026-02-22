"use client";

import { Send } from "lucide-react";

interface ContactFormProps {
    toEmail?: string;
    toName: string;
}

export default function ContactForm({ toEmail, toName }: ContactFormProps) {
    const targetEmail = toEmail || "contact@example.com";

    return (
        <form
            action={`mailto:${targetEmail}`}
            method="GET"
            encType="text/plain"
            className="space-y-4 w-full text-left"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="Name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors"
                />
                <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors"
                />
            </div>

            {/* Using body parameter directly for message so it goes to email body */}
            <textarea
                name="body"
                required
                placeholder="How can I help you?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm outline-none focus:border-violet-500/50 transition-colors resize-none"
            />

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-sm transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] bg-violet-600 hover:bg-violet-500 shadow-violet-500/20 border border-violet-500/30 hover:border-violet-400/50 active:scale-[0.98]"
            >
                <Send size={18} />
                Open Email Client
            </button>
            <p className="text-center text-zinc-500 text-xs mt-2">
                This will open your default email app.
            </p>
        </form>
    );
}
