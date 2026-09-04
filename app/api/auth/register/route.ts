import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      email,
      password,
      confirmPassword,
      agree,
    } = body;

    // Required fields
    if (
      !fullName ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Terms validation
    if (!agree) {
      return NextResponse.json(
        {
          success: false,
          message: "Please agree to the Terms and Conditions.",
        },
        { status: 400 }
      );
    }

    // Name validation
    if (fullName.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name must contain at least 3 characters.",
        },
        { status: 400 }
      );
    }

    // Phone validation
    const cleanPhone = phone.replace(/\s/g, "");

    if (!/^0\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid Sri Lankan phone number.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const cleanEmail = email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Password validation
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    // Confirm password
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match.",
        },
        { status: 400 }
      );
    }

    // Connect MongoDB
    const client = await clientPromise;

    const db = client.db("dearo");

    const users = db.collection("users");

    // Check existing phone/email
    const existingUser = await users.findOne({
      $or: [
        { phone: cleanPhone },
        { email: cleanEmail },
      ],
    });

    if (existingUser) {
      if (existingUser.phone === cleanPhone) {
        return NextResponse.json(
          {
            success: false,
            message: "This phone number is already registered.",
          },
          { status: 409 }
        );
      }

      if (existingUser.email === cleanEmail) {
        return NextResponse.json(
          {
            success: false,
            message: "This email address is already registered.",
          },
          { status: 409 }
        );
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name: fullName.trim(),
      phone: cleanPhone,
      email: cleanEmail,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await users.insertOne(newUser);

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: result.insertedId.toString(),
          name: newUser.name,
          phone: newUser.phone,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}