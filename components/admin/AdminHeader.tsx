"use client";

import {
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h2 className="text-lg font-bold text-[#071a3d] sm:text-xl">
            Dashboard
          </h2>

          <p className="hidden text-xs text-slate-400 sm:block">
            Dearo Venture Capital Administration
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search icon */}
        <button className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100">
          <Search className="h-5 w-5" />
        </button>

        {/* Notification */}
        <button className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100">
          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071a3d] text-sm font-bold text-white">
            A
          </div>

          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-700">
              Admin
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-slate-400 lg:block" />
        </div>
      </div>
    </header>
  );
}