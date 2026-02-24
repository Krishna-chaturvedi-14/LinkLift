import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, toEmail } = await req.json();

    if (!name || !email || !message || !toEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <contact@krishnachaturvedi.in>",
      to: [toEmail],
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message via your portfolio contact form.\n\nSender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
