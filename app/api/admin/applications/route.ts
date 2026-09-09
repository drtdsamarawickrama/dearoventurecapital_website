import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { dbPromise } from "@/lib/mongodb";

import {
  isAdminAuthenticated,
} from "@/components/lib/admin-auth";

export const dynamic = "force-dynamic";

/* =====================================================
   GET APPLICATIONS
===================================================== */

export async function GET() {
  try {
    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const db = await dbPromise;

    /* ================= CUSTOMER APPLICATIONS ================= */

    const customers =
      await db
        .collection("customer_application")
        .find({})
        .sort({
          createdAt: -1,
        })
        .toArray();

    /* ================= INVESTOR APPLICATIONS ================= */

    const investors =
      await db
        .collection("investor_application")
        .find({})
        .sort({
          createdAt: -1,
        })
        .toArray();

    return NextResponse.json({
      success: true,

      customers: customers.map(
        (item) => ({
          ...item,
          _id: item._id.toString(),
        })
      ),

      investors: investors.map(
        (item) => ({
          ...item,
          _id: item._id.toString(),
        })
      ),
    });
  } catch (error) {
    console.error(
      "Admin applications GET error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to load applications.",
      },
      {
        status: 500,
      }
    );
  }
}


/* =====================================================
   PATCH APPLICATION
   SAVE ADMIN NOTE + STATUS
===================================================== */

export async function PATCH(
  request: Request
) {
  try {
    /* ================= AUTHENTICATION ================= */

    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    /* ================= REQUEST BODY ================= */

    const body =
      await request.json();

    const {
      id,
      type,
      adminNote,
      status,
    } = body;

    /* ================= ID VALIDATION ================= */

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Application ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* ================= TYPE VALIDATION ================= */

    if (
      type !== "customer" &&
      type !== "investor"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid application type.",
        },
        {
          status: 400,
        }
      );
    }

    /* ================= OBJECT ID VALIDATION ================= */

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid application ID.",
        },
        {
          status: 400,
        }
      );
    }

    /* ================= STATUS VALIDATION ================= */

    const allowedStatuses = [
      "Pending",
      "Under Review",
      "Approved",
      "Rejected",
    ];

    if (
      status !== undefined &&
      !allowedStatuses.includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid application status.",
        },
        {
          status: 400,
        }
      );
    }

    /* ================= DATABASE ================= */

    const db = await dbPromise;

    const collectionName =
      type === "customer"
        ? "customer_application"
        : "investor_application";

    const collection =
      db.collection(collectionName);

    /* ================= UPDATE DATA ================= */

    const updateData: {
      adminNote?: string;
      status?: string;
      updatedAt?: Date;
    } = {
      updatedAt: new Date(),
    };

    if (
      adminNote !== undefined
    ) {
      updateData.adminNote =
        String(adminNote).trim();
    }

    if (
      status !== undefined
    ) {
      updateData.status = status;
    }

    /* ================= UPDATE ================= */

    const result =
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: updateData,
        }
      );

    /* ================= NOT FOUND ================= */

    if (
      result.matchedCount === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Application not found.",
        },
        {
          status: 404,
        }
      );
    }

    /* ================= GET UPDATED RECORD ================= */

    const updatedApplication =
      await collection.findOne({
        _id: new ObjectId(id),
      });

    /* ================= RESPONSE ================= */

    return NextResponse.json({
      success: true,

      message:
        "Record saved successfully.",

      application:
        updatedApplication
          ? {
              ...updatedApplication,
              _id:
                updatedApplication._id.toString(),
            }
          : null,
    });
  } catch (error) {
    console.error(
      "Admin applications PATCH error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to save application record.",
      },
      {
        status: 500,
      }
    );
  }
}