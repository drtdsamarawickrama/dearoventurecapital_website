
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// =====================================================
// POST - Save investor application
// =====================================================
export async function POST(request: Request) {
  try {
    // Read request body
    const body = await request.json();

    // Get fields from request
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

    // Validate required fields
    if (
      !name ||
      !nic ||
      !phone ||
      !email ||
      !address ||
      capital === undefined ||
      capital === null ||
      period === undefined ||
      period === null ||
      rate === undefined ||
      rate === null
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

    // Select database
    const db = client.db("DearoVC");

    // Select collection
    const collection = db.collection("investor_application");

    // Prepare application data
    const application = {
      name: String(name),
      nic: String(nic),
      phone: String(phone),
      email: String(email),
      address: String(address),
      capital: Number(capital),
      period: period,
      rate: Number(rate),
      createdAt: new Date(),
    };

    // Check numeric values
    if (
      Number.isNaN(application.capital) ||
      Number.isNaN(application.rate)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Capital and rate must be valid numbers.",
        },
        { status: 400 }
      );
    }

    // Insert application into MongoDB
    const result = await collection.insertOne(application);

    // Return success response
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
      error: error instanceof Error ? error.message : String(error),
    },
    { status: 500 }
  );

  }
}

// =====================================================
// GET - Get investor applications
// =====================================================
export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;

    // Select database
    const db = client.db("DearoVC");

    // Select collection
    const collection = db.collection("investor_application");

    // Get all applications
    const applications = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    // Return applications
    return NextResponse.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error("Get investor applications error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch investor applications.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

