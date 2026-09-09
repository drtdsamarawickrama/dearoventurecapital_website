"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
  Building2,
  UserPlus,
} from "lucide-react";

import "./admin-dashboard.css";

export default function AdminDashboardClient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* =========================
          MOBILE OVERLAY
      ========================= */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      {/* =========================
          SIDEBAR
      ========================= */}
      <aside
        className={`admin-sidebar ${
          sidebarOpen ? "admin-sidebar-open" : ""
        }`}
      >
        {/* Logo */}
        {/* <div className="admin-sidebar-logo"> */}
          {/* <div className="admin-logo-box"> */}
            {/* <Building2 size={28} /> */}
          {/* </div> */}

          {/* <div> */}
            {/* <div className="admin-logo-title">DEARO</div> */}
            {/* <div className="admin-logo-subtitle"> */}
              {/* Venture Capital */}
            {/* </div> */}
            {/* </div> */}

          {/* <button
            type="button"
            className="admin-sidebar-close"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div> */}

        {/* Navigation */}
        <nav className="admin-navigation">
          <Link
            href="/admin/dashboard"
            className="admin-nav-item admin-nav-active"
            onClick={closeSidebar}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/investments"
            className="admin-nav-item"
            onClick={closeSidebar}
          >
            <TrendingUp size={20} />
            <span>Investments</span>
          </Link>

          <Link
            href="/admin/funding"
            className="admin-nav-item"
            onClick={closeSidebar}
          >
            <Wallet size={20} />
            <span>Funding</span>
          </Link>

          <Link
            href="/admin/applications"
            className="admin-nav-item"
            onClick={closeSidebar}
          >
            <FileText size={20} />
            <span>Applications</span>
          </Link>

          <Link
            href="/admin/reports"
            className="admin-nav-item"
            onClick={closeSidebar}
          >
            <BarChart3 size={20} />
            <span>Reports</span>
          </Link>

          <Link
            href="/admin/settings"
            className="admin-nav-item"
            onClick={closeSidebar}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        {/* Sidebar Bottom */}
        <div className="admin-sidebar-bottom">
          <div className="admin-user-box">
            <div className="admin-user-avatar">
              A
            </div>

            <div className="admin-user-info">
              <strong>Administrator</strong>
              <span>Admin Panel</span>
            </div>
          </div>

          <button
            type="button"
            className="admin-logout-button"
            onClick={handleLogout}
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <main className="admin-content">
        {/* Mobile Header */}
        <header className="admin-mobile-header">
          <button
            type="button"
            className="admin-mobile-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <div className="admin-mobile-title">
            <strong>DEARO</strong>
            <span>Admin</span>
          </div>
        </header>

        {/* Dashboard Container */}
        <div className="admin-container">

          {/* =========================
              PAGE HEADER
          ========================= */}
          <div className="admin-header">
            <div>
              <h1 className="admin-page-title">
                Dashboard
              </h1>

              <p className="admin-page-description">
                Dearo Venture Capital Administration
              </p>
            </div>

            <div className="admin-header-date">
              <span>Admin Portal</span>
            </div>
          </div>

          {/* =========================
              STAT CARDS
          ========================= */}
          <div className="admin-stats-grid">

            <div className="admin-stat-card">
              <div className="admin-stat-card-header">
                <div className="admin-stat-icon">
                  <Users size={22} />
                </div>

                <span className="admin-stat-label">
                  Customers
                </span>
              </div>

              <div className="admin-stat-value">
                0
              </div>

              <div className="admin-stat-title">
                Total Customers
              </div>

              <div className="admin-stat-description">
                Registered customer accounts
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-card-header">
                <div className="admin-stat-icon">
                  <TrendingUp size={22} />
                </div>

                <span className="admin-stat-label">
                  Investments
                </span>
              </div>

              <div className="admin-stat-value">
                0
              </div>

              <div className="admin-stat-title">
                Total Investments
              </div>

              <div className="admin-stat-description">
                Active investment records
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-card-header">
                <div className="admin-stat-icon">
                  <UserPlus size={22} />
                </div>

                <span className="admin-stat-label">
                  Applications
                </span>
              </div>

              <div className="admin-stat-value">
                0
              </div>

              <div className="admin-stat-title">
                New Applications
              </div>

              <div className="admin-stat-description">
                Pending customer applications
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-card-header">
                <div className="admin-stat-icon">
                  <Wallet size={22} />
                </div>

                <span className="admin-stat-label">
                  Funding
                </span>
              </div>

              <div className="admin-stat-value">
                0
              </div>

              <div className="admin-stat-title">
                Funding Requests
              </div>

              <div className="admin-stat-description">
                Current funding requests
              </div>
            </div>

          </div>

          {/* =========================
              QUICK ACTIONS
          ========================= */}
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">
                  Quick Actions
                </h2>

                <p className="admin-card-subtitle">
                  Manage your administration system
                </p>
              </div>
            </div>

            <div className="admin-quick-actions">

              <Link
                href="/admin/applications"
                className="admin-quick-action"
              >
                <div className="admin-quick-icon">
                  <FileText size={22} />
                </div>

                <div>
                  <strong>Applications</strong>
                  <span>
                    View customer and investor applications
                  </span>
                </div>
              </Link>

              <Link
                href="/admin/investments"
                className="admin-quick-action"
              >
                <div className="admin-quick-icon">
                  <TrendingUp size={22} />
                </div>

                <div>
                  <strong>Investments</strong>
                  <span>
                    Manage investment information
                  </span>
                </div>
              </Link>

              <Link
                href="/admin/funding"
                className="admin-quick-action"
              >
                <div className="admin-quick-icon">
                  <Wallet size={22} />
                </div>

                <div>
                  <strong>Funding</strong>
                  <span>
                    Manage funding requests
                  </span>
                </div>
              </Link>

              <Link
                href="/admin/reports"
                className="admin-quick-action"
              >
                <div className="admin-quick-icon">
                  <BarChart3 size={22} />
                </div>

                <div>
                  <strong>Reports</strong>
                  <span>
                    View administration reports
                  </span>
                </div>
              </Link>

            </div>
          </div>

          {/* =========================
              SYSTEM STATUS
          ========================= */}
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">
                  System Status
                </h2>

                <p className="admin-card-subtitle">
                  Current administration system status
                </p>
              </div>
            </div>

            <div className="admin-system-status">

              <div className="admin-status-item">
                <div className="admin-status-dot admin-status-online" />
                <div>
                  <strong>Admin Portal</strong>
                  <span>Online</span>
                </div>
              </div>

              <div className="admin-status-item">
                <div className="admin-status-dot admin-status-online" />
                <div>
                  <strong>Application System</strong>
                  <span>Available</span>
                </div>
              </div>

              <div className="admin-status-item">
                <div className="admin-status-dot admin-status-online" />
                <div>
                  <strong>Database</strong>
                  <span>Connected</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}