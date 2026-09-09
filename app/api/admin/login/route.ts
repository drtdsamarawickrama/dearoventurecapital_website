import { NextResponse } from "next/server";

import {
  ADMIN_COOKIE_NAME,
  createAdminToken,
} from "@/components/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const username = String(body.username || "").trim();
    const password = String(body.password || "");

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check environment variables
    if (!adminUsername || !adminPassword) {
      console.error(
        "ADMIN_USERNAME or ADMIN_PASSWORD is not configured."
      );

      return NextResponse.json(
        {
          success: false,
          message: "Admin login is not configured.",
        },
        { status: 500 }
      );
    }

    // Check username and password
    if (
      username !== adminUsername ||
      password !== adminPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password.",
        },
        { status: 401 }
      );
    }

    // Create admin session token
    const token = createAdminToken();

    // Create response
    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    // Store token in cookie
    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 8 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Login failed.",
      },
      { status: 500 }
    );
  }
}