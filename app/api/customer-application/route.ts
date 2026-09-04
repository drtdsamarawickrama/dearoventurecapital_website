
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
      businessName,
      registrationNumber,
      employeeCount,
      businessField,
      capital,
      existingBusinessROI,
      monthlyTurnover,
      monthlyExpenses,
      returnChecks,
      returnCheckAmount,
    } = body;

    // Required field validation
    if (
      !name ||
      !nic ||
      !phone ||
      !email ||
      !address ||
      !businessName ||
      !capital
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

    // Your MongoDB database
    const db = client.db("DearoVC");

    // Your collection
    const collection = db.collection("customer_application");

    // Customer application document
    const application = {
      name,
      nic,
      phone,
      email,
      address,

      businessName,
      registrationNumber: registrationNumber || null,
      employeeCount: employeeCount
        ? Number(employeeCount)
        : null,
      businessField: businessField || null,
      capital: capital ? Number(capital) : null,

      existingBusinessROI: existingBusinessROI
        ? Number(existingBusinessROI)
        : null,

      monthlyTurnover: monthlyTurnover
        ? Number(monthlyTurnover)
        : null,

      monthlyExpenses: monthlyExpenses
        ? Number(monthlyExpenses)
        : null,

      returnChecks: returnChecks
        ? Number(returnChecks)
        : null,

      returnCheckAmount: returnCheckAmount
        ? Number(returnCheckAmount)
        : null,

      createdAt: new Date(),
    };

    // Save application to MongoDB
    const result = await collection.insertOne(application);

    return NextResponse.json(
      {
        success: true,
        message: "Customer application submitted successfully.",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Customer application error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save customer application.",
      },
      { status: 500 }
    );
  }
}

