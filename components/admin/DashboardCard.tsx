"use client";

import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  valueClassName?: string;
}

export default function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  iconClassName = "bg-blue-50 text-blue-600",
  valueClassName = "text-[#071a3d]",
}: DashboardCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-500">
            {title}
          </p>

          <p
            className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${valueClassName}`}
          >
            {value}
          </p>

          <p className="mt-2 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition group-hover:scale-110 ${iconClassName}`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}