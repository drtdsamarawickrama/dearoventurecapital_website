import { NextResponse } from "next/server";
import pool from "@/lib/db";

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

    const sql = `
      INSERT INTO investor_applications (
        name,
        nic,
        phone,
        email,
        address,
        capital,
        period,
        rate
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      nic,
      phone,
      email,
      address,
      Number(capital),
      period,
      Number(rate),
    ];

    await pool.execute(sql, values);

    return NextResponse.json(
      {
        success: true,
        message: "Investor application submitted successfully.",
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