import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { phone, password } = await request.json();

    // Validation
    if (!phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number and password are required.",
        },
        { status: 400 }
      );
    }

    const cleanPhone = phone.trim();

    // Phone validation
    if (!/^[0-9]{10}$/.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid 10-digit phone number.",
        },
        { status: 400 }
      );
    }

    // Connect MongoDB
    const client = await clientPromise;
    const db = client.db("dearo");

    const users = db.collection("users");

    // Find user
    const user = await users.findOne({
      phone: cleanPhone,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number or password.",
        },
        { status: 401 }
      );
    }

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number or password.",
        },
        { status: 401 }
      );
    }

    // Create JWT
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        phone: user.phone,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    // Create response
    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id.toString(),
        name: user.name,
        phone: user.phone,
        email: user.email,
      },
    });

    // Store token securely in cookie
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}