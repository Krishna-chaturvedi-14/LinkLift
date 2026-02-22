import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message, toEmail, toName } = await req.json();

        console.log("📬 Processing Contact Form Submission via Web3Forms...");

        const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

        if (!WEB3FORMS_ACCESS_KEY) {
            console.error("❌ Web3Forms Access Key is missing in environment variables.");
            return NextResponse.json(
                { success: false, error: "Server configuration error. Contact form is temporarily unavailable." },
                { status: 500 }
            );
        }

        // Web3Forms accepts a simple JSON POST
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `New Portfolio Message from ${name || "a Visitor"}`,
                from_name: name || "Portfolio Visitor",
                email: email, // This allows the user to click "reply" and it goes to the sender
                message: `You have received a new message via your portfolio contact form.\n\nSender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }),
        });

        const data = await res.json();

        if (data.success) {
            return NextResponse.json({ success: true, message: "Message sent successfully!" });
        } else {
            console.error("❌ Web3Forms API Error:", data.message);
            return NextResponse.json({ success: false, error: "Failed to send message via Web3Forms" }, { status: 500 });
        }

    } catch (error: any) {
        console.error("❌ Contact Form Error:", error.message);
        return NextResponse.json({ success: false, error: "An unexpected error occurred." }, { status: 500 });
    }
}
