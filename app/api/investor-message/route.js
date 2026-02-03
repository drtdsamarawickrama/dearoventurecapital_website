import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, role, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    await db.query(
      `INSERT INTO investor_messages (name, role, email, phone, message) VALUES (?, ?, ?, ?, ?)`,
      [name, role || "", email, phone || "", message]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}