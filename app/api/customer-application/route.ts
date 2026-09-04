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

    const sql = `
      INSERT INTO customer_applications (
        name,
        nic,
        phone,
        email,
        address,
        business_name,
        registration_number,
        employee_count,
        business_field,
        capital,
        existing_business_roi,
        monthly_turnover,
        monthly_expenses,
        return_checks,
        return_check_amount
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      nic,
      phone,
      email,
      address,
      businessName,
      registrationNumber || null,
      employeeCount ? Number(employeeCount) : null,
      businessField || null,
      capital ? Number(capital) : null,
      existingBusinessROI
        ? Number(existingBusinessROI)
        : null,
      monthlyTurnover
        ? Number(monthlyTurnover)
        : null,
      monthlyExpenses
        ? Number(monthlyExpenses)
        : null,
      returnChecks
        ? Number(returnChecks)
        : null,
      returnCheckAmount
        ? Number(returnCheckAmount)
        : null,
    ];

    await pool.execute(sql, values);

    return NextResponse.json(
      {
        success: true,
        message: "Customer application submitted successfully.",
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