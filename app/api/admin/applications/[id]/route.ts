import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import clientPromise from "@/lib/mongodb";
import { isAdminAuthenticated } from "@/components/lib/admin-auth";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  request: Request,
  { params }: Params
) {
  try {
    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        { message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;

    const body = await request.json();

    const type = body.type;

    if (
      !["investor", "funding"].includes(type)
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid application type.",
        },
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          message: "Invalid application ID.",
        },
        { status: 400 }
      );
    }

    const status = String(
      body.status || ""
    );

    if (
      ![
        "Pending",
        "Approved",
        "Rejected",
      ].includes(status)
    ) {
      return NextResponse.json(
        {
          message: "Invalid status.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("DearoVC");

    const collection =
      type === "investor"
        ? db.collection(
            "investor_application"
          )
        : db.collection(
            "customer_application"
          );

    const result =
      await collection.updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            status,
            updatedAt: new Date(),
          },
        }
      );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        {
          message:
            "Application not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Application ${status.toLowerCase()}.`,
    });
  } catch (error) {
    console.error(
      "Admin application PATCH error:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Failed to update application.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        { message: "Unauthorized." },
        { status: 401 }
      );
    }

    const { id } = await params;

    const body = await request.json();

    const type = body.type;

    if (
      !["investor", "funding"].includes(type)
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid application type.",
        },
        { status: 400 }
      );
    }

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          message: "Invalid application ID.",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;

    const db = client.db("DearoVC");

    const collection =
      type === "investor"
        ? db.collection(
            "investor_application"
          )
        : db.collection(
            "customer_application"
          );

    const result =
      await collection.deleteOne({
        _id: new ObjectId(id),
      });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        {
          message:
            "Application not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Application deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Admin application DELETE error:",
      error
    );

    return NextResponse.json(
      {
        message:
          "Failed to delete application.",
      },
      { status: 500 }
    );
  }
}