import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      password,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Basic password validation
    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Connect to MongoDB
    const client = await clientPromise;

    const db = client.db();

    const usersCollection = db.collection("users");

    // Check whether user already exists
    const existingUser = await usersCollection.findOne({
      email: normalizedEmail,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "An account with this email already exists.",
        },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      passwordHash,
      role: "customer",
      status: "active",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save user
    const result = await usersCollection.insertOne(newUser);

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        userId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while creating the account.",
      },
      { status: 500 }
    );
  }
}