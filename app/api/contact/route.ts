import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message, toEmail, toName } = body;

        console.log("📬 Processing Contact Form Submission via Web3Forms...");
        console.log("Received Body:", { name, email, messageLength: message?.length, toEmail, toName });

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
        console.log("Web3Forms Response:", data);

        if (data.success) {
            return NextResponse.json({ success: true, message: "Message sent successfully!" });
        } else {
            console.error("❌ Web3Forms API Error:", data.message);
            return NextResponse.json({ success: false, error: `Web3Forms Error: ${data.message}` }, { status: 500 });
        }

    } catch (error: any) {
        console.error("❌ Contact Form Catch Block Error:", error);
        return NextResponse.json({ success: false, error: "An unexpected server error occurred." }, { status: 500 });
    }
}
