import type { Metadata } from "next";
import { DM_Serif_Display, Figtree } from "next/font/google";
import "./globals.css";

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
  title: "MedSynIQ — Medical Intelligence for AI Assistants",
  description:
    "27 specialized agents, 142 skills, 30 commands. The complete medical intelligence system for Claude Code, built by a physician.",
  openGraph: {
    title: "MedSynIQ",
    description:
      "Medical intelligence for AI assistants. Built by a physician.",
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
        {children}
      </body>
    </html>
  );
}
