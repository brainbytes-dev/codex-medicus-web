import { NextResponse } from "next/server";

// Public endpoint — the plugin checks this on session start
export async function GET() {
  return NextResponse.json({
    currentVersion: process.env.NEXT_PUBLIC_CURRENT_VERSION || "1.0.0",
    releaseDate: "2026-03-15",
    changelog: "Initial release — 27 agents, 142 skills, 30 commands",
    updateUrl: "https://codex-medicus.brainbytes.dev/portal",
  });
}
