import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/components/lib/admin-auth";
import clientPromise from "@/lib/mongodb";

function toNumber(value: unknown) {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value === "string") {
    return (
      Number(value.replace(/[^\d.-]/g, "")) || 0
    );
  }

  return 0;
}

function getStatus(value: unknown) {
  if (
    value === "Pending" ||
    value === "Approved" ||
    value === "Rejected"
  ) {
    return value;
  }

  return "Pending";
}

export async function GET() {
  try {
    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    const client = await clientPromise;

    const db = client.db("DearoVC");

    const investorCollection = db.collection(
      "investor_application"
    );

    const fundingCollection = db.collection(
      "customer_application"
    );

    const [investors, funding] =
      await Promise.all([
        investorCollection
          .find({})
          .sort({ createdAt: -1, _id: -1 })
          .toArray(),

        fundingCollection
          .find({})
          .sort({ createdAt: -1, _id: -1 })
          .toArray(),
      ]);

    const investorApplications =
      investors.map((doc: any) => ({
        id: doc._id.toString(),

        name: String(
          doc.name || "Unknown Applicant"
        ),

        nic: String(
          doc.nic || doc.NIC || "-"
        ),

        email: String(
          doc.email || "-"
        ),

        phone: String(
          doc.phone || "-"
        ),

        type: "investor",

        capital: toNumber(doc.capital),

        status: getStatus(doc.status),

        submittedAt: (
          doc.submittedAt ||
          doc.createdAt ||
          doc._id.getTimestamp()
        ).toISOString(),

        businessName: "",
      }));

    const fundingApplications =
      funding.map((doc: any) => ({
        id: doc._id.toString(),

        name: String(
          doc.name || "Unknown Applicant"
        ),

        nic: String(
          doc.NIC || doc.nic || "-"
        ),

        email: String(
          doc.email || "-"
        ),

        phone: String(
          doc.phone || "-"
        ),

        type: "funding",

        capital: toNumber(doc.capital),

        status: getStatus(doc.status),

        submittedAt: (
          doc.submittedAt ||
          doc.createdAt ||
          doc._id.getTimestamp()
        ).toISOString(),

        businessName: String(
          doc.businessName || ""
        ),
      }));

    const applications = [
      ...investorApplications,
      ...fundingApplications,
    ].sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() -
        new Date(a.submittedAt).getTime()
    );

    return NextResponse.json({
      success: true,
      applications,
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
      { status: 500 }
    );
  }
}