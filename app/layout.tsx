import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://stackd.com"),
  title: "stackd - Your Tech Stack, Perfectly Stacked",
  description:
    "Smarter, Faster, with AI. Build your professional tech identity and generate a stunning portfolio in minutes.",
  keywords: ["tech stack", "portfolio", "developer", "resume", "AI portfolio"],
  openGraph: {
    title: "stackd - Your Tech Stack, Perfectly Stacked",
    description: "Build your professional tech identity and generate a stunning portfolio in minutes.",
    url: "https://stackd.com",
    siteName: "stackd",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "stackd - Your Tech Stack, Perfectly Stacked",
    description: "Build your professional tech identity and generate a stunning portfolio in minutes.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        {/* ... keep your head tags the same ... */}
        <body className="min-h-screen bg-[#05050A] font-sans text-white antialiased">
          {/* Background Glows stay here */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* ... keep your glow divs ... */}
          </div>

          {/* 🟢 CHANGE: Removed mx-auto max-w-7xl px-6 pt-6 wrapper */}
          <Navbar />

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
