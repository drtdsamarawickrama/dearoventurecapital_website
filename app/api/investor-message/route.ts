import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, role, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, Email, and Message are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("dearo_investors");
    const collection = db.collection("messages");

    await collection.insertOne({
      name,
      role: role || "",
      email,
      phone: phone || "",
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}