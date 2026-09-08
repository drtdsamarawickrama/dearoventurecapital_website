"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  X,
  Building2,
} from "lucide-react";

interface AdminSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  // {
  //   label: "Dashboard",
  //   href: "/admin/dashboard",
  //   icon: LayoutDashboard,
  // },
  {
    label: "Investments",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  // {
  //   label: "Funding",
  //   href: "/admin/dashboard?type=funding",
  //   icon: Wallet,
  // },
  // {
  //   label: "Applications",
  //   href: "/admin/dashboard",
  //   icon: FileText,
  // },
  // {
  //   label: "Reports",
  //   href: "/admin/dashboard",
  //   icon: BarChart3,
  // },
];

export default function AdminSidebar({
  mobileOpen,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          bg-[#071a3d] text-white shadow-2xl
          transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
          <Link
            href="/admin/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
              <Building2 className="h-6 w-6 text-[#071a3d]" />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                DEARO
              </h1>

              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
                Venture Capital
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-4 py-6">
          <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Main Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.href === "/admin/dashboard" &&
              pathname === "/admin/dashboard";

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`
                  group flex items-center gap-3 rounded-xl px-4 py-3
                  text-sm font-medium transition
                  ${
                    active
                      ? "bg-white text-[#071a3d] shadow-lg"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon
                  className={`h-5 w-5 ${
                    active
                      ? "text-[#071a3d]"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />

                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="my-6 border-t border-white/10" />

          <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            System
          </p>

          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Settings className="h-5 w-5 text-slate-400" />
            Settings
          </Link>
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-4">
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}