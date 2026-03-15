import type { Metadata } from "next";
import { DM_Serif_Display, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CustomCursor } from "@/components/custom-cursor";
import { HashScroller } from "@/components/hash-scroller";

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MedSynIQ — Clinical Intelligence for AI Assistants",
  description:
    "27 specialized agents, 142 skills, 30 commands. The complete medical intelligence system for Claude Code, built by a physician.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MedSynIQ",
    description:
      "Clinical intelligence for AI assistants. Built by a physician.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${serif.variable} ${sans.variable} font-sans antialiased`}
      >
        <Navbar />
        <div className="pt-16">{children}</div>
        <ScrollToTop />
        <CustomCursor />
        <HashScroller />
      </body>
    </html>
  );
}
