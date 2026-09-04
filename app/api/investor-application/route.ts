
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      nic,
      phone,
      email,
      address,
      capital,
      period,
      rate,
    } = body;

    // Required field validation
    if (
      !name ||
      !nic ||
      !phone ||
      !email ||
      !address ||
      !capital ||
      !period ||
      !rate
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;

    // MongoDB database
    const db = client.db("DearoVC");

    // MongoDB collection
    const collection = db.collection("investor_application");

    // Investor application document
    const application = {
      name,
      nic,
      phone,
      email,
      address,
      capital: Number(capital),
      period,
      rate: Number(rate),
      createdAt: new Date(),
    };

    // Save application to MongoDB
    const result = await collection.insertOne(application);

    return NextResponse.json(
      {
        success: true,
        message: "Investor application submitted successfully.",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Investor application error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save investor application.",
      },
      { status: 500 }
    );
  }
}

