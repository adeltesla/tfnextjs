import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { listPages } from "@/lib/content";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const pages = await listPages();
  return NextResponse.json(pages);
}
