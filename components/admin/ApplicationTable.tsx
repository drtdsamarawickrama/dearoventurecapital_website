"use client";

import {
  Eye,
  Check,
  X,
  Clock,
  Trash2,
  User,
  Building2,
} from "lucide-react";

export type Application = {
  id: string;
  name: string;
  nic: string;
  email: string;
  phone?: string;
  type: "investor" | "funding";
  capital: number;
  status: "Pending" | "Approved" | "Rejected";
  submittedAt?: string;
  businessName?: string;
};

interface ApplicationTableProps {
  applications: Application[];
  onView: (application: Application) => void;
  onStatusChange: (
    application: Application,
    status: "Pending" | "Approved" | "Rejected"
  ) => void;
  onDelete: (application: Application) => void;
}

function StatusBadge({
  status,
}: {
  status: Application["status"];
}) {
  if (status === "Approved") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
        <Check className="h-3.5 w-3.5" />
        Approved
      </span>
    );
  }

  if (status === "Rejected") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
        <X className="h-3.5 w-3.5" />
        Rejected
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-semibold text-yellow-700">
      <Clock className="h-3.5 w-3.5" />
      Pending
    </span>
  );
}

function TypeBadge({
  type,
}: {
  type: Application["type"];
}) {
  if (type === "investor") {
    return (
      <span className="inline-flex rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        Investment
      </span>
    );
  }

  return (
    <span className="inline-flex rounded-lg bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700">
      Funding
    </span>
  );
}

function formatCapital(value: number) {
  return `LKR ${value.toLocaleString("en-LK")}`;
}

export default function ApplicationTable({
  applications,
  onView,
  onStatusChange,
  onDelete,
}: ApplicationTableProps) {
  if (applications.length === 0) {
    return (
      <div className="px-5 py-16 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
          <Building2 className="h-7 w-7 text-slate-400" />
        </div>

        <h3 className="mt-4 text-sm font-semibold text-slate-700">
          No applications found
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Applications will appear here when customers or investors
          submit their forms.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Applicant
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Type
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Capital
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {applications.map((application) => (
              <tr
                key={application.id}
                className="transition hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a3d] text-sm font-bold text-white">
                      {application.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-700">
                        {application.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        {application.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <TypeBadge type={application.type} />
                </td>

                <td className="px-6 py-5">
                  <span className="font-semibold text-slate-700">
                    {formatCapital(application.capital)}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <StatusBadge status={application.status} />
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onView(application)}
                      className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#071a3d]"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        onStatusChange(application, "Approved")
                      }
                      className="rounded-lg border border-green-100 p-2 text-green-600 transition hover:bg-green-50"
                      title="Approve"
                    >
                      <Check className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        onStatusChange(application, "Rejected")
                      }
                      className="rounded-lg border border-red-100 p-2 text-red-500 transition hover:bg-red-50"
                      title="Reject"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => onDelete(application)}
                      className="rounded-lg border border-red-100 p-2 text-red-500 transition hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-3 p-4 md:hidden">
        {applications.map((application) => (
          <div
            key={application.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a3d] text-sm font-bold text-white">
                  {application.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div className="min-w-0">
                  <p className="truncate font-semibold text-slate-700">
                    {application.name}
                  </p>

                  <p className="truncate text-xs text-slate-400">
                    {application.email}
                  </p>
                </div>
              </div>

              <StatusBadge status={application.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Type
                </p>

                <div className="mt-1">
                  <TypeBadge type={application.type} />
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400">
                  Capital
                </p>

                <p className="mt-1 text-sm font-bold text-[#071a3d]">
                  {formatCapital(application.capital)}
                </p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => onView(application)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <Eye className="h-4 w-4" />
                View
              </button>

              <button
                onClick={() =>
                  onStatusChange(application, "Approved")
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-50 px-3 py-2.5 text-xs font-semibold text-green-700 transition hover:bg-green-100"
              >
                <Check className="h-4 w-4" />
                Approve
              </button>

              <button
                onClick={() =>
                  onStatusChange(application, "Rejected")
                }
                className="flex items-center justify-center rounded-xl bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}