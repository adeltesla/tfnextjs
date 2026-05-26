import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getMenus, saveMenus } from "@/lib/menus";

export async function GET() {
  const menus = await getMenus();
  if (!menus) {
    return NextResponse.json({ error: "Menus not found" }, { status: 404 });
  }
  return NextResponse.json(menus);
}

export async function PUT(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await saveMenus(body);
  return NextResponse.json({ success: true });
}
