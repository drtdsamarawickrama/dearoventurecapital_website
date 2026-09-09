"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Users,
  TrendingUp,
  FileText,
  LogOut,
  Search,
  Eye,
  X,
  RefreshCw,
  User,
  Building2,
  CreditCard,
  CalendarDays,
  Save,
  CheckCircle2,
  Clock3,
  XCircle,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Hash,
  Menu,
  ChevronDown,
} from "lucide-react";

/* =====================================================
   TYPES
===================================================== */

type ApplicationStatus =
  | "Pending"
  | "Under Review"
  | "Approved"
  | "Rejected";

type Application = {
  _id: string;
  name?: string;
  nic?: string;
  phone?: string;
  email?: string;
  address?: string;
  businessName?: string;
  registrationNumber?: string;
  employeeCount?: number;
  businessField?: string;
  capital?: number;
  existingBusinessROI?: number;
  monthlyTurnover?: number;
  monthlyExpenses?: number;
  returnChecks?: number;
  returnCheckAmount?: number;
  period?: string | number;
  rate?: number;
  investmentAmount?: number;
  investmentType?: string;
  createdAt?: string;
  updatedAt?: string;
  adminNote?: string;
  status?: ApplicationStatus;
  [key: string]: unknown;
};

type Tab = "overview" | "customers" | "investors";
type ApplicationType = "customer" | "investor";

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function AdminDashboardClient() {
  const router = useRouter();

  const [customers, setCustomers] = useState<Application[]>([]);
  const [investors, setInvestors] = useState<Application[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [selectedType, setSelectedType] = useState<ApplicationType | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saveMessage, setSaveMessage] = useState("");
  const [adminNote, setAdminNote] = useState("");
  const [recordStatus, setRecordStatus] = useState<ApplicationStatus>("Pending");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/admin/applications", {
        method: "GET",
        cache: "no-store",
      });
      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to load applications.");
      }
      setCustomers(data.customers || []);
      setInvestors(data.investors || []);
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error
          ? error.message
          : "Unable to load applications."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  function formatCurrency(value?: unknown) {
    if (value === undefined || value === null || value === "") return "-";
    const numberValue = Number(value);
    if (Number.isNaN(numberValue)) return String(value);
    return `Rs. ${numberValue.toLocaleString("en-LK")}`;
  }

  function formatDate(value?: unknown) {
    if (!value) return "-";
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function formatDateTime(value?: unknown) {
    if (!value) return "-";
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function openDetails(application: Application, type: ApplicationType) {
    setSelectedApplication(application);
    setSelectedType(type);
    setAdminNote(
      typeof application.adminNote === "string" ? application.adminNote : ""
    );
    setRecordStatus(application.status || "Pending");
    setSaveMessage("");
    setError("");
  }

  function closeDetails() {
    setSelectedApplication(null);
    setSelectedType(null);
    setAdminNote("");
    setRecordStatus("Pending");
    setSaveMessage("");
  }

  async function saveRecord() {
    if (!selectedApplication || !selectedType) return;
    try {
      setSaving(true);
      setSaveMessage("");
      setError("");
      const response = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedApplication._id,
          type: selectedType,
          adminNote,
          status: recordStatus,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to save record.");
      }
      const updated = data.application;
      if (updated) {
        setSelectedApplication(updated);
        if (selectedType === "customer") {
          setCustomers((previous) =>
            previous.map((item) => (item._id === updated._id ? updated : item))
          );
        }
        if (selectedType === "investor") {
          setInvestors((previous) =>
            previous.map((item) => (item._id === updated._id ? updated : item))
          );
        }
      }
      setSaveMessage("Record saved successfully.");
    } catch (error) {
      console.error(error);
      setError(
        error instanceof Error ? error.message : "Failed to save record."
      );
    } finally {
      setSaving(false);
    }
  }

  const searchText = search.toLowerCase().trim();

  const filteredCustomers = customers.filter((customer) => {
    const text = `
      ${customer.name || ""}
      ${customer.nic || ""}
      ${customer.email || ""}
      ${customer.phone || ""}
      ${customer.businessName || ""}
      ${customer.businessField || ""}
      ${customer.address || ""}
      ${customer.status || ""}
      ${customer.adminNote || ""}
    `.toLowerCase();
    return text.includes(searchText);
  });

  const filteredInvestors = investors.filter((investor) => {
    const text = `
      ${investor.name || ""}
      ${investor.nic || ""}
      ${investor.email || ""}
      ${investor.phone || ""}
      ${investor.address || ""}
      ${investor.period || ""}
      ${investor.rate || ""}
      ${investor.status || ""}
      ${investor.adminNote || ""}
    `.toLowerCase();
    return text.includes(searchText);
  });

  return (
    <main className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <div className="brand-mark">
            <TrendingUp size={22} />
          </div>
          <div className="header-title-group">
            <p className="dashboard-label">DEARO VENTURE CAPITAL</p>
            <h1>Admin Dashboard</h1>
            <p className="dashboard-subtitle">Manage customer and investor applications.</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="refresh-button"
            onClick={loadApplications}
            disabled={loading}
          >
            <RefreshCw size={17} className={loading ? "spin" : ""} />
            <span className="btn-label">Refresh</span>
          </button>
          <button className="logout-button" onClick={handleLogout}>
            <LogOut size={17} />
            <span className="btn-label">Logout</span>
          </button>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => {
              setActiveTab("overview");
              setMobileMenuOpen(false);
            }}
          >
            <FileText size={18} /> Overview
          </button>
          <button
            className={activeTab === "customers" ? "active" : ""}
            onClick={() => {
              setActiveTab("customers");
              setMobileMenuOpen(false);
            }}
          >
            <Users size={18} /> Customers
            <span className="tab-count">{customers.length}</span>
          </button>
          <button
            className={activeTab === "investors" ? "active" : ""}
            onClick={() => {
              setActiveTab("investors");
              setMobileMenuOpen(false);
            }}
          >
            <TrendingUp size={18} /> Investors
            <span className="tab-count">{investors.length}</span>
          </button>
        </div>
      )}

      <div className="dashboard-tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          <FileText size={18} />
          <span className="tab-label">Overview</span>
        </button>
        <button
          className={activeTab === "customers" ? "active" : ""}
          onClick={() => setActiveTab("customers")}
        >
          <Users size={18} />
          <span className="tab-label">Customers</span>
          <span className="tab-count">{customers.length}</span>
        </button>
        <button
          className={activeTab === "investors" ? "active" : ""}
          onClick={() => setActiveTab("investors")}
        >
          <TrendingUp size={18} />
          <span className="tab-label">Investors</span>
          <span className="tab-count">{investors.length}</span>
        </button>
      </div>

      {error && (
        <div className="dashboard-error">
          <XCircle size={18} />
          {error}
        </div>
      )}

      {loading ? (
        <div className="dashboard-loading">
          <RefreshCw size={25} className="spin" />
          Loading applications...
        </div>
      ) : (
        <>
          {activeTab === "overview" && (
            <section>
              <div className="stats-grid">
                <StatCard
                  icon={<Users size={22} />}
                  title="Customer Applications"
                  value={customers.length}
                />
                <StatCard
                  icon={<TrendingUp size={22} />}
                  title="Investor Applications"
                  value={investors.length}
                />
                <StatCard
                  icon={<FileText size={22} />}
                  title="Total Applications"
                  value={customers.length + investors.length}
                />
              </div>

              <div className="section-card">
                <div className="section-heading">
                  <div>
                    <h2>Recent Customer Applications</h2>
                    <p>Latest customer funding applications</p>
                  </div>
                  <button
                    className="view-all-button"
                    onClick={() => setActiveTab("customers")}
                  >
                    View All →
                  </button>
                </div>
                <ApplicationTable
                  applications={customers.slice(0, 5)}
                  type="customer"
                  onView={openDetails}
                  formatCurrency={formatCurrency}
                  formatDate={formatDate}
                />
              </div>

              <div className="section-card second-card">
                <div className="section-heading">
                  <div>
                    <h2>Recent Investor Applications</h2>
                    <p>Latest investor applications</p>
                  </div>
                  <button
                    className="view-all-button"
                    onClick={() => setActiveTab("investors")}
                  >
                    View All →
                  </button>
                </div>
                <ApplicationTable
                  applications={investors.slice(0, 5)}
                  type="investor"
                  onView={openDetails}
                  formatCurrency={formatCurrency}
                  formatDate={formatDate}
                />
              </div>
            </section>
          )}

          {activeTab === "customers" && (
            <section className="section-card">
              <div className="section-heading">
                <div>
                  <h2>Customer Applications</h2>
                  <p>All customer funding applications</p>
                </div>
                <SearchBox value={search} onChange={setSearch} />
              </div>
              <ApplicationTable
                applications={filteredCustomers}
                type="customer"
                onView={openDetails}
                formatCurrency={formatCurrency}
                formatDate={formatDate}
              />
            </section>
          )}

          {activeTab === "investors" && (
            <section className="section-card">
              <div className="section-heading">
                <div>
                  <h2>Investor Applications</h2>
                  <p>All investor applications</p>
                </div>
                <SearchBox value={search} onChange={setSearch} />
              </div>
              <ApplicationTable
                applications={filteredInvestors}
                type="investor"
                onView={openDetails}
                formatCurrency={formatCurrency}
                formatDate={formatDate}
              />
            </section>
          )}
        </>
      )}

      {selectedApplication && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div
            className="details-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-area">
                <div className="modal-icon">
                  {selectedType === "customer" ? (
                    <Users size={21} />
                  ) : (
                    <TrendingUp size={21} />
                  )}
                </div>
                <div>
                  <p>
                    {selectedType === "customer"
                      ? "CUSTOMER APPLICATION"
                      : "INVESTOR APPLICATION"}
                  </p>
                  <h2>{selectedApplication.name || "Application"}</h2>
                </div>
              </div>
              <button
                className="close-button"
                onClick={closeDetails}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {selectedType === "customer" ? (
              <CustomerDetails
                application={selectedApplication}
                formatCurrency={formatCurrency}
                formatDateTime={formatDateTime}
              />
            ) : (
              <InvestorDetails
                application={selectedApplication}
                formatCurrency={formatCurrency}
                formatDateTime={formatDateTime}
              />
            )}

            <div className="admin-record-section">
              <div className="admin-record-header">
                <div className="record-heading-icon">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3>Admin Record</h3>
                  <p>Add internal notes and update application status.</p>
                </div>
              </div>

              <div className="admin-fields">
                <div className="admin-field">
                  <label>Application Status</label>
                  <div className="status-select-wrapper">
                    <StatusBadge status={recordStatus} />
                    <select
                      value={recordStatus}
                      onChange={(event) =>
                        setRecordStatus(
                          event.target.value as ApplicationStatus
                        )
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>

                <div className="admin-field">
                  <label>Admin Note</label>
                  <textarea
                    value={adminNote}
                    onChange={(event) => setAdminNote(event.target.value)}
                    placeholder="Write an internal note about this application..."
                    rows={5}
                  />
                  <div className="note-help">
                    <MessageSquare size={13} />
                    This note is for internal administration only.
                  </div>
                </div>
              </div>

              <div className="save-area">
                {saveMessage && (
                  <div className="save-success">
                    <CheckCircle2 size={17} />
                    {saveMessage}
                  </div>
                )}
                <button
                  className="save-button"
                  onClick={saveRecord}
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <RefreshCw size={17} className="spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={17} />
                      Save Record
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .admin-dashboard {
          min-height: 100vh;
          padding: clamp(12px, 3vw, 32px);
          background: linear-gradient(180deg, #f8fafc 0%, #eef3f9 100%);
          color: #0f172a;
        }

        /* =================================================
           HEADER
        ================================================= */

        .dashboard-header {
          max-width: 1450px;
          margin: 0 auto clamp(16px, 3vw, 25px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 2vw, 25px);
          flex-wrap: wrap;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.5vw, 15px);
          flex: 1;
          min-width: 200px;
        }

        .header-title-group {
          flex: 1;
          min-width: 150px;
        }

        .brand-mark {
          width: clamp(42px, 5vw, 52px);
          height: clamp(42px, 5vw, 52px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #071a3d;
          color: white;
          box-shadow: 0 8px 20px rgba(7, 26, 61, 0.18);
        }

        .dashboard-label {
          margin: 0 0 clamp(2px, 0.3vw, 5px);
          color: #2563eb;
          font-size: clamp(9px, 1vw, 11px);
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .dashboard-header h1 {
          margin: 0;
          color: #071a3d;
          font-size: clamp(22px, 3.5vw, 31px);
          font-weight: 850;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .dashboard-subtitle {
          margin: clamp(2px, 0.3vw, 5px) 0 0;
          color: #64748b;
          font-size: clamp(11px, 1.2vw, 13px);
        }

        /* =================================================
           HEADER ACTIONS
        ================================================= */

        .header-actions {
          display: flex;
          gap: clamp(6px, 1vw, 10px);
          align-items: center;
        }

        .refresh-button,
        .logout-button {
          height: clamp(38px, 4.5vw, 43px);
          padding: 0 clamp(10px, 1.5vw, 16px);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          font-size: clamp(11px, 1.2vw, 13px);
          font-weight: 750;
          transition: 0.2s;
          white-space: nowrap;
        }

        .btn-label {
          display: inline;
        }

        .refresh-button {
          border: 1px solid #d9e1eb;
          background: white;
          color: #334155;
        }

        .refresh-button:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .refresh-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .logout-button {
          border: 0;
          background: #071a3d;
          color: white;
        }

        .logout-button:hover {
          background: #102b5c;
          transform: translateY(-1px);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: 1px solid #d9e1eb;
          border-radius: 9px;
          padding: 6px 10px;
          cursor: pointer;
          color: #334155;
          background: white;
          align-items: center;
          justify-content: center;
          height: clamp(38px, 4.5vw, 43px);
        }

        .mobile-menu-toggle:hover {
          background: #f8fafc;
        }

        /* =================================================
           MOBILE MENU
        ================================================= */

        .mobile-menu {
          max-width: 1450px;
          margin: 0 auto clamp(12px, 2vw, 20px);
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 8px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
        }

        .mobile-menu button {
          border: 0;
          background: transparent;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 750;
          font-size: 14px;
          transition: 0.2s;
          width: 100%;
        }

        .mobile-menu button:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .mobile-menu button.active {
          background: #071a3d;
          color: white;
          box-shadow: 0 3px 8px rgba(7, 26, 61, 0.15);
        }

        .mobile-menu .tab-count {
          margin-left: auto;
          min-width: 22px;
          height: 22px;
          padding: 0 6px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e9eff8;
          color: #071a3d;
          font-size: 11px;
          font-weight: 800;
        }

        .mobile-menu button.active .tab-count {
          background: rgba(255, 255, 255, 0.18);
          color: white;
        }

        /* =================================================
           TABS
        ================================================= */

        .dashboard-tabs {
          max-width: 1450px;
          margin: 0 auto clamp(16px, 2.5vw, 24px);
          width: fit-content;
          display: flex;
          padding: 5px;
          gap: 4px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          box-shadow: 0 3px 12px rgba(15, 23, 42, 0.04);
          flex-wrap: wrap;
        }

        .dashboard-tabs button {
          border: 0;
          background: transparent;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: clamp(4px, 0.8vw, 8px);
          padding: clamp(8px, 1.2vw, 11px) clamp(12px, 1.8vw, 18px);
          border-radius: 8px;
          cursor: pointer;
          font-weight: 750;
          font-size: clamp(11px, 1.2vw, 13px);
          transition: 0.2s;
          white-space: nowrap;
        }

        .dashboard-tabs button:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .dashboard-tabs button.active {
          background: #071a3d;
          color: white;
          box-shadow: 0 3px 8px rgba(7, 26, 61, 0.15);
        }

        .tab-count {
          min-width: 22px;
          height: 22px;
          padding: 0 6px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #e9eff8;
          color: #071a3d;
          font-size: 11px;
          font-weight: 800;
        }

        .dashboard-tabs button.active .tab-count {
          background: rgba(255, 255, 255, 0.18);
          color: white;
        }

        /* =================================================
           STATS
        ================================================= */

        .stats-grid {
          max-width: 1450px;
          margin: 0 auto clamp(16px, 2.5vw, 25px);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
          gap: clamp(12px, 1.5vw, 18px);
        }

        .stat-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: clamp(12px, 1.5vw, 15px);
          padding: clamp(16px, 2vw, 22px);
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          box-shadow: 0 7px 24px rgba(7, 26, 61, 0.055);
        }

        .stat-card::after {
          content: "";
          position: absolute;
          right: -25px;
          top: -25px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #f1f5ff;
          pointer-events: none;
        }

        .stat-icon {
          position: relative;
          z-index: 1;
          width: clamp(40px, 5vw, 48px);
          height: clamp(40px, 5vw, 48px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #eef4ff;
          color: #2563eb;
        }

        .stat-card p {
          margin: 0 0 clamp(2px, 0.3vw, 3px);
          color: #64748b;
          font-size: clamp(10px, 1.1vw, 12px);
          font-weight: 600;
        }

        .stat-card strong {
          color: #071a3d;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 850;
        }

        /* =================================================
           SECTION CARD
        ================================================= */

        .section-card {
          max-width: 1450px;
          margin: 0 auto;
          padding: clamp(16px, 2.5vw, 25px);
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          box-shadow: 0 7px 24px rgba(7, 26, 61, 0.055);
        }

        .second-card {
          margin-top: clamp(16px, 2vw, 24px);
        }

        .section-heading {
          margin-bottom: clamp(14px, 2vw, 20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 2vw, 20px);
          flex-wrap: wrap;
        }

        .section-heading h2 {
          margin: 0;
          color: #071a3d;
          font-size: clamp(16px, 2.2vw, 20px);
          font-weight: 800;
        }

        .section-heading p {
          margin: clamp(2px, 0.3vw, 5px) 0 0;
          color: #64748b;
          font-size: clamp(10px, 1.1vw, 12px);
        }

        .view-all-button {
          border: 0;
          background: transparent;
          color: #2563eb;
          cursor: pointer;
          font-size: clamp(11px, 1.2vw, 13px);
          font-weight: 750;
          padding: 6px 12px;
          border-radius: 6px;
          transition: 0.2s;
          white-space: nowrap;
        }

        .view-all-button:hover {
          background: #eff6ff;
          color: #1d4ed8;
        }

        /* =================================================
           SEARCH
        ================================================= */

        .search-box {
          min-width: clamp(180px, 20vw, 310px);
          max-width: 100%;
          height: clamp(38px, 4.5vw, 42px);
          padding: 0 clamp(10px, 1vw, 12px);
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #dbe2ea;
          border-radius: 9px;
          background: white;
          color: #64748b;
          flex: 1;
          max-width: 100%;
        }

        .search-box:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }

        .search-box input {
          width: 100%;
          border: 0;
          outline: 0;
          color: #0f172a;
          background: transparent;
          font-size: clamp(12px, 1.2vw, 13px);
          min-width: 0;
        }

        /* =================================================
           TABLE
        ================================================= */

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #e2e8f0;
          border-radius: 11px;
          -webkit-overflow-scrolling: touch;
        }

        .applications-table {
          width: 100%;
          min-width: 1050px;
          border-collapse: collapse;
        }

        .applications-table th {
          padding: clamp(10px, 1.2vw, 13px) clamp(8px, 1vw, 14px);
          background: #f8fafc;
          color: #475569;
          text-align: left;
          font-size: clamp(9px, 0.9vw, 10px);
          font-weight: 850;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .applications-table td {
          padding: clamp(10px, 1.2vw, 14px) clamp(8px, 1vw, 14px);
          border-top: 1px solid #edf2f7;
          color: #334155;
          font-size: clamp(11px, 1.1vw, 12px);
          white-space: nowrap;
        }

        .applications-table tbody tr:hover td {
          background: #fafcff;
        }

        /* =================================================
           NAME CELL
        ================================================= */

        .name-cell {
          display: flex;
          align-items: center;
          gap: clamp(6px, 0.8vw, 10px);
          min-width: 120px;
        }

        .name-avatar {
          width: clamp(28px, 3.5vw, 35px);
          height: clamp(28px, 3.5vw, 35px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #eef4ff;
          color: #2563eb;
        }

        .name-main {
          color: #071a3d;
          font-weight: 750;
          font-size: clamp(11px, 1.1vw, 12px);
        }

        .name-sub {
          margin-top: 2px;
          color: #94a3b8;
          font-size: clamp(8px, 0.8vw, 10px);
        }

        .amount-cell {
          color: #071a3d !important;
          font-weight: 800;
        }

        /* =================================================
           STATUS BADGE
        ================================================= */

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: clamp(4px, 0.5vw, 6px) clamp(6px, 0.8vw, 10px);
          border-radius: 7px;
          font-size: clamp(9px, 0.9vw, 10px);
          font-weight: 800;
          white-space: nowrap;
        }

        .status-pending {
          background: #fff7ed;
          color: #c2410c;
          border: 1px solid #fed7aa;
        }

        .status-review {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .status-approved {
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
        }

        .status-rejected {
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }

        /* =================================================
           PERIOD / RATE
        ================================================= */

        .period-badge,
        .rate-badge {
          display: inline-flex;
          padding: clamp(3px, 0.4vw, 5px) clamp(6px, 0.7vw, 9px);
          border-radius: 6px;
          font-size: clamp(10px, 1vw, 11px);
          font-weight: 700;
        }

        .period-badge {
          background: #f1f5f9;
          color: #475569;
        }

        .rate-badge {
          background: #ecfdf5;
          color: #047857;
        }

        /* =================================================
           VIEW BUTTON
        ================================================= */

        .view-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          border: 0;
          background: #eef4ff;
          color: #2563eb;
          padding: clamp(6px, 0.7vw, 8px) clamp(8px, 1vw, 12px);
          border-radius: 7px;
          cursor: pointer;
          font-size: clamp(10px, 1vw, 11px);
          font-weight: 750;
          transition: 0.2s;
          white-space: nowrap;
        }

        .view-button:hover {
          background: #dfeaff;
          transform: translateY(-1px);
        }

        /* =================================================
           EMPTY STATE
        ================================================= */

        .empty-state {
          padding: clamp(30px, 5vw, 55px) 20px;
          text-align: center;
          color: #94a3b8;
          font-size: clamp(12px, 1.2vw, 13px);
        }

        /* =================================================
           ERROR
        ================================================= */

        .dashboard-error {
          max-width: 1450px;
          margin: 0 auto clamp(14px, 2vw, 20px);
          padding: clamp(10px, 1.2vw, 13px) clamp(12px, 1.5vw, 15px);
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #fecaca;
          border-radius: 9px;
          background: #fef2f2;
          color: #b91c1c;
          font-size: clamp(12px, 1.2vw, 13px);
          font-weight: 600;
        }

        /* =================================================
           LOADING
        ================================================= */

        .dashboard-loading {
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #64748b;
          font-size: clamp(13px, 1.3vw, 14px);
        }

        /* =================================================
           MODAL
        ================================================= */

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          padding: clamp(8px, 2vw, 20px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(7, 26, 61, 0.68);
          backdrop-filter: blur(5px);
        }

        .details-modal {
          width: 100%;
          max-width: 960px;
          max-height: 94vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
          scrollbar-width: thin;
          margin: clamp(4px, 1vw, 0);
        }

        /* =================================================
           MODAL HEADER
        ================================================= */

        .modal-header {
          position: sticky;
          top: 0;
          z-index: 5;
          padding: clamp(16px, 2vw, 23px) clamp(16px, 2.5vw, 25px);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
        }

        .modal-title-area {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1.3vw, 13px);
          min-width: 0;
        }

        .modal-icon {
          width: clamp(36px, 4.5vw, 47px);
          height: clamp(36px, 4.5vw, 47px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #eef4ff;
          color: #2563eb;
        }

        .modal-header p {
          margin: 0 0 clamp(2px, 0.3vw, 4px);
          color: #2563eb;
          font-size: clamp(8px, 0.8vw, 9px);
          font-weight: 850;
          letter-spacing: 0.1em;
        }

        .modal-header h2 {
          margin: 0;
          color: #071a3d;
          font-size: clamp(16px, 2.2vw, 22px);
          font-weight: 800;
          word-break: break-word;
        }

        .close-button {
          width: clamp(30px, 3.5vw, 35px);
          height: clamp(30px, 3.5vw, 35px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 8px;
          background: #f1f5f9;
          color: #475569;
          cursor: pointer;
          transition: 0.2s;
        }

        .close-button:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        /* =================================================
           DETAILS SECTION
        ================================================= */

        .details-section {
          padding: clamp(16px, 2vw, 24px) clamp(16px, 2.5vw, 25px);
          background: #ffffff;
        }

        .details-section + .details-section {
          border-top: 1px solid #e2e8f0;
        }

        .details-section-title {
          margin: 0 0 clamp(12px, 1.5vw, 16px);
          display: flex;
          align-items: center;
          gap: 8px;
          color: #071a3d;
          font-size: clamp(13px, 1.4vw, 14px);
          font-weight: 850;
        }

        .details-section-title svg {
          color: #2563eb;
        }

        /* =================================================
           DETAIL GRID
        ================================================= */

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(8px, 1vw, 12px);
        }

        /* =================================================
           DETAIL ITEM
        ================================================= */

        .detail-item {
          position: relative;
          min-height: clamp(60px, 7vw, 72px);
          padding: clamp(10px, 1.2vw, 14px) clamp(12px, 1.5vw, 16px);
          border: 1px solid #e2e8f0;
          border-radius: 11px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.035);
          transition: all 0.2s ease;
        }

        .detail-item:hover {
          border-color: #cbd5e1;
          background: #f8fafc;
          box-shadow: 0 5px 15px rgba(15, 23, 42, 0.06);
          transform: translateY(-1px);
        }

        .detail-item.full {
          grid-column: 1 / -1;
        }

        .detail-item span {
          display: block;
          margin-bottom: clamp(4px, 0.5vw, 7px);
          color: #64748b;
          font-size: clamp(8px, 0.8vw, 9px);
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .detail-item strong {
          display: block;
          color: #0f172a;
          font-size: clamp(12px, 1.2vw, 13px);
          line-height: 1.45;
          font-weight: 650;
          word-break: break-word;
        }

        .detail-highlight {
          color: #071a3d !important;
          font-size: clamp(14px, 1.6vw, 16px) !important;
          font-weight: 850 !important;
        }

        .detail-green {
          color: #047857 !important;
          font-size: clamp(12px, 1.3vw, 14px) !important;
          font-weight: 850 !important;
        }

        .application-id {
          font-family: monospace;
          font-size: clamp(10px, 1vw, 11px) !important;
          color: #475569 !important;
          word-break: break-all !important;
        }

        /* =================================================
           ADMIN RECORD
        ================================================= */

        .admin-record-section {
          padding: clamp(16px, 2vw, 26px) clamp(16px, 2.5vw, 25px);
          border-top: 1px solid #dbe3ed;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }

        .admin-record-header {
          display: flex;
          align-items: flex-start;
          gap: clamp(10px, 1.2vw, 12px);
          padding: clamp(12px, 1.5vw, 16px) clamp(14px, 1.8vw, 18px);
          margin-bottom: clamp(14px, 1.8vw, 20px);
          border: 1px solid #dbe5f0;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
        }

        .record-heading-icon {
          width: clamp(32px, 4vw, 38px);
          height: clamp(32px, 4vw, 38px);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #eef4ff;
          color: #2563eb;
        }

        .admin-record-header h3 {
          margin: 0;
          color: #071a3d;
          font-size: clamp(14px, 1.5vw, 16px);
          font-weight: 850;
        }

        .admin-record-header p {
          margin: clamp(3px, 0.4vw, 5px) 0 0;
          color: #64748b;
          font-size: clamp(11px, 1.1vw, 12px);
          line-height: 1.5;
        }

        /* =================================================
           ADMIN FIELDS
        ================================================= */

        .admin-fields {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(12px, 1.5vw, 18px);
        }

        .admin-field {
          padding: clamp(12px, 1.5vw, 17px);
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.025);
        }

        .admin-field label {
          display: block;
          margin-bottom: clamp(6px, 0.8vw, 9px);
          color: #334155;
          font-size: clamp(10px, 1.1vw, 11px);
          font-weight: 800;
        }

        /* =================================================
           STATUS SELECT
        ================================================= */

        .status-select-wrapper {
          display: grid;
          grid-template-columns: auto minmax(140px, 1fr);
          align-items: center;
          gap: clamp(8px, 1vw, 12px);
        }

        .admin-field select,
        .admin-field textarea {
          width: 100%;
          border: 1px solid #d7e0ea;
          border-radius: 9px;
          outline: none;
          background: #f8fafc;
          color: #0f172a;
          font-family: inherit;
          font-size: clamp(12px, 1.2vw, 13px);
          transition: all 0.2s ease;
        }

        .admin-field select {
          height: clamp(40px, 4.5vw, 44px);
          padding: 0 clamp(10px, 1vw, 12px);
          cursor: pointer;
        }

        .admin-field textarea {
          min-height: clamp(100px, 12vw, 120px);
          padding: clamp(10px, 1vw, 12px) clamp(10px, 1.2vw, 13px);
          resize: vertical;
          line-height: 1.55;
        }

        .admin-field select:hover,
        .admin-field textarea:hover {
          border-color: #cbd5e1;
          background: #ffffff;
        }

        .admin-field select:focus,
        .admin-field textarea:focus {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
        }

        .note-help {
          margin-top: clamp(6px, 0.7vw, 8px);
          display: flex;
          align-items: center;
          gap: 4px;
          color: #94a3b8;
          font-size: clamp(9px, 0.9vw, 10px);
        }

        /* =================================================
           SAVE
        ================================================= */

        .save-area {
          margin-top: clamp(14px, 1.8vw, 20px);
          padding-top: clamp(14px, 1.8vw, 18px);
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(10px, 1.5vw, 15px);
          flex-wrap: wrap;
        }

        .save-success {
          min-height: clamp(36px, 4vw, 40px);
          padding: 0 clamp(10px, 1vw, 12px);
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          background: #f0fdf4;
          color: #15803d;
          font-size: clamp(11px, 1.1vw, 12px);
          font-weight: 700;
          flex: 1;
          min-width: 120px;
        }

        .save-button {
          min-width: clamp(120px, 15vw, 150px);
          height: clamp(40px, 4.5vw, 44px);
          padding: 0 clamp(14px, 1.8vw, 18px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border: 0;
          border-radius: 9px;
          background: #071a3d;
          color: white;
          cursor: pointer;
          font-size: clamp(11px, 1.2vw, 12px);
          font-weight: 800;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .save-button:hover:not(:disabled) {
          background: #102b5c;
          box-shadow: 0 6px 16px rgba(7, 26, 61, 0.18);
          transform: translateY(-1px);
        }

        .save-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* =================================================
           SPIN
        ================================================= */

        .spin {
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* =================================================
           RESPONSIVE BREAKPOINTS
        ================================================= */

        /* Tablet */
        @media (max-width: 900px) {
          .admin-dashboard {
            padding: clamp(10px, 2vw, 22px);
          }

          .dashboard-header {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .header-left {
            flex: 1 1 100%;
          }

          .header-actions {
            width: 100%;
            justify-content: flex-end;
          }

          .refresh-button,
          .logout-button {
            flex: 0 1 auto;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-menu {
            display: flex;
          }

          .dashboard-tabs {
            display: none;
          }

          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
          }

          .section-heading {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            width: 100%;
            min-width: unset;
            max-width: 100%;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .detail-item.full {
            grid-column: auto;
          }

          .details-modal {
            max-width: 100%;
            max-height: 98vh;
            border-radius: 14px;
          }

          .modal-overlay {
            padding: clamp(4px, 1vw, 12px);
            align-items: flex-start;
            padding-top: clamp(8px, 2vw, 20px);
          }

          .save-area {
            flex-direction: column;
            align-items: stretch;
          }

          .save-success {
            justify-content: center;
          }

          .save-button {
            width: 100%;
          }
        }

        /* Small Tablet */
        @media (max-width: 750px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stat-card:last-child {
            grid-column: 1 / -1;
          }

          .applications-table {
            min-width: 900px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .admin-dashboard {
            padding: clamp(8px, 2vw, 14px);
          }

          .header-left {
            flex-wrap: wrap;
          }

          .brand-mark {
            width: clamp(36px, 8vw, 42px);
            height: clamp(36px, 8vw, 42px);
          }

          .dashboard-header h1 {
            font-size: clamp(18px, 5vw, 22px);
          }

          .dashboard-subtitle {
            font-size: clamp(10px, 2.5vw, 12px);
          }

          .header-actions {
            flex-wrap: wrap;
            gap: clamp(4px, 1.5vw, 8px);
          }

          .refresh-button,
          .logout-button {
            height: clamp(34px, 9vw, 38px);
            padding: 0 clamp(8px, 2vw, 12px);
            font-size: clamp(10px, 2.5vw, 12px);
          }

          .btn-label {
            display: none;
          }

          .refresh-button .btn-label,
          .logout-button .btn-label {
            display: none;
          }

          .mobile-menu-toggle {
            height: clamp(34px, 9vw, 38px);
            padding: 4px 8px;
          }

          .mobile-menu button {
            padding: clamp(10px, 2.5vw, 14px) clamp(12px, 3vw, 16px);
            font-size: clamp(12px, 3vw, 14px);
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: clamp(8px, 2vw, 12px);
          }

          .stat-card:last-child {
            grid-column: auto;
          }

          .stat-card {
            padding: clamp(12px, 3vw, 16px);
          }

          .stat-icon {
            width: clamp(32px, 8vw, 38px);
            height: clamp(32px, 8vw, 38px);
          }

          .stat-card strong {
            font-size: clamp(18px, 5vw, 22px);
          }

          .section-card {
            padding: clamp(12px, 3vw, 17px);
            border-radius: 12px;
          }

          .section-heading h2 {
            font-size: clamp(15px, 4vw, 18px);
          }

          .section-heading p {
            font-size: clamp(10px, 2.5vw, 12px);
          }

          .view-all-button {
            font-size: clamp(11px, 2.8vw, 13px);
            align-self: flex-start;
          }

          .applications-table {
            min-width: 750px;
          }

          .applications-table th,
          .applications-table td {
            padding: clamp(6px, 1.5vw, 10px) clamp(4px, 1vw, 8px);
            font-size: clamp(9px, 2.2vw, 11px);
          }

          .name-cell {
            min-width: 80px;
          }

          .name-avatar {
            width: clamp(22px, 6vw, 28px);
            height: clamp(22px, 6vw, 28px);
          }

          .name-main {
            font-size: clamp(10px, 2.5vw, 12px);
          }

          .status-badge {
            font-size: clamp(8px, 2vw, 10px);
            padding: clamp(3px, 0.8vw, 5px) clamp(4px, 1vw, 8px);
          }

          .modal-header {
            padding: clamp(12px, 3vw, 17px);
          }

          .modal-title-area {
            gap: clamp(8px, 2vw, 10px);
          }

          .modal-icon {
            width: clamp(30px, 8vw, 36px);
            height: clamp(30px, 8vw, 36px);
          }

          .modal-header h2 {
            font-size: clamp(14px, 4vw, 18px);
          }

          .details-section {
            padding: clamp(12px, 3vw, 18px);
          }

          .detail-item {
            min-height: auto;
            padding: clamp(10px, 2.5vw, 13px);
          }

          .detail-item strong {
            font-size: clamp(11px, 2.8vw, 13px);
          }

          .detail-highlight {
            font-size: clamp(13px, 3.5vw, 15px) !important;
          }

          .admin-record-section {
            padding: clamp(12px, 3vw, 18px);
          }

          .admin-record-header {
            padding: clamp(10px, 2.5vw, 14px);
            flex-direction: column;
            align-items: stretch;
          }

          .admin-field {
            padding: clamp(10px, 2.5vw, 13px);
          }

          .status-select-wrapper {
            grid-template-columns: 1fr;
            align-items: stretch;
            gap: clamp(6px, 1.5vw, 10px);
          }

          .status-select-wrapper .status-badge {
            width: fit-content;
          }

          .admin-field select {
            height: clamp(36px, 9vw, 40px);
          }

          .admin-field textarea {
            min-height: clamp(80px, 20vw, 100px);
          }

          .save-success {
            font-size: clamp(10px, 2.5vw, 12px);
            min-height: clamp(32px, 8vw, 36px);
          }

          .save-button {
            height: clamp(36px, 9vw, 40px);
            font-size: clamp(10px, 2.5vw, 12px);
            min-width: unset;
          }

          .dashboard-error {
            font-size: clamp(11px, 2.8vw, 13px);
            padding: clamp(8px, 2vw, 12px);
          }

          .dashboard-loading {
            min-height: 250px;
            font-size: clamp(12px, 3vw, 14px);
          }

          /* Modal on mobile */
          .modal-overlay {
            padding: 4px;
            align-items: flex-end;
          }

          .details-modal {
            max-height: 98vh;
            margin-bottom: 0;
            border-radius: 16px 16px 0 0;
            max-width: 100%;
          }
        }

        /* Very small screens */
        @media (max-width: 400px) {
          .admin-dashboard {
            padding: 6px;
          }

          .header-left {
            gap: 6px;
          }

          .brand-mark {
            width: 32px;
            height: 32px;
          }

          .brand-mark svg {
            width: 16px;
            height: 16px;
          }

          .dashboard-header h1 {
            font-size: 16px;
          }

          .dashboard-label {
            font-size: 8px;
          }

          .refresh-button,
          .logout-button {
            padding: 0 6px;
            font-size: 9px;
            height: 30px;
          }

          .mobile-menu-toggle {
            height: 30px;
            padding: 2px 6px;
          }

          .mobile-menu-toggle svg {
            width: 18px;
            height: 18px;
          }

          .section-card {
            padding: 10px;
          }

          .applications-table {
            min-width: 600px;
          }

          .applications-table th,
          .applications-table td {
            padding: 4px 4px;
            font-size: 8px;
          }

          .name-cell {
            min-width: 60px;
            gap: 4px;
          }

          .name-avatar {
            width: 20px;
            height: 20px;
          }

          .name-avatar svg {
            width: 12px;
            height: 12px;
          }

          .name-main {
            font-size: 9px;
          }

          .name-sub {
            font-size: 7px;
          }

          .view-button {
            padding: 4px 6px;
            font-size: 8px;
          }

          .view-button svg {
            width: 10px;
            height: 10px;
          }

          .status-badge {
            font-size: 7px;
            padding: 2px 4px;
          }

          .period-badge,
          .rate-badge {
            font-size: 8px;
            padding: 2px 4px;
          }

          .details-modal {
            border-radius: 12px 12px 0 0;
          }

          .modal-header {
            padding: 10px 12px;
          }

          .modal-header h2 {
            font-size: 13px;
          }

          .modal-icon {
            width: 28px;
            height: 28px;
          }

          .modal-icon svg {
            width: 16px;
            height: 16px;
          }

          .details-section {
            padding: 10px;
          }

          .detail-item {
            padding: 8px 10px;
            min-height: auto;
          }

          .detail-item span {
            font-size: 7px;
          }

          .detail-item strong {
            font-size: 10px;
          }

          .admin-record-section {
            padding: 10px;
          }

          .admin-record-header {
            padding: 8px 10px;
          }

          .admin-record-header h3 {
            font-size: 12px;
          }

          .admin-record-header p {
            font-size: 10px;
          }

          .admin-field {
            padding: 8px 10px;
          }

          .admin-field label {
            font-size: 9px;
          }

          .admin-field select,
          .admin-field textarea {
            font-size: 11px;
          }

          .admin-field select {
            height: 32px;
          }

          .admin-field textarea {
            min-height: 70px;
          }

          .save-button {
            height: 32px;
            font-size: 10px;
          }

          .save-success {
            font-size: 10px;
            min-height: 28px;
          }
        }

        /* Fix for Safari and iOS */
        @supports (-webkit-touch-callout: none) {
          .modal-overlay {
            padding-bottom: env(safe-area-inset-bottom);
          }

          .details-modal {
            max-height: calc(100vh - 40px);
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .admin-dashboard {
            background: linear-gradient(180deg, #0f172a 0%, #1a2332 100%);
            color: #e2e8f0;
          }

          .dashboard-label {
            color: #60a5fa;
          }

          .dashboard-header h1 {
            color: #f1f5f9;
          }

          .dashboard-subtitle {
            color: #94a3b8;
          }

          .brand-mark {
            background: #1e293b;
          }

          .refresh-button {
            background: #1e293b;
            border-color: #334155;
            color: #cbd5e1;
          }

          .refresh-button:hover:not(:disabled) {
            background: #2d3a4f;
            border-color: #475569;
          }

          .logout-button {
            background: #1e293b;
            color: #f1f5f9;
          }

          .logout-button:hover {
            background: #2d3a4f;
          }

          .stat-card,
          .section-card {
            background: #1e293b;
            border-color: #334155;
          }

          .stat-card p {
            color: #94a3b8;
          }

          .stat-card strong {
            color: #f1f5f9;
          }

          .stat-icon {
            background: #2d3a4f;
            color: #60a5fa;
          }

          .dashboard-tabs {
            background: #1e293b;
            border-color: #334155;
          }

          .dashboard-tabs button {
            color: #94a3b8;
          }

          .dashboard-tabs button:hover {
            background: #2d3a4f;
            color: #f1f5f9;
          }

          .dashboard-tabs button.active {
            background: #3b82f6;
            color: white;
          }

          .tab-count {
            background: #2d3a4f;
            color: #f1f5f9;
          }

          .dashboard-tabs button.active .tab-count {
            background: rgba(255, 255, 255, 0.18);
            color: white;
          }

          .mobile-menu {
            background: #1e293b;
            border-color: #334155;
          }

          .mobile-menu button {
            color: #94a3b8;
          }

          .mobile-menu button:hover {
            background: #2d3a4f;
            color: #f1f5f9;
          }

          .mobile-menu button.active {
            background: #3b82f6;
            color: white;
          }

          .mobile-menu .tab-count {
            background: #2d3a4f;
            color: #f1f5f9;
          }

          .mobile-menu button.active .tab-count {
            background: rgba(255, 255, 255, 0.18);
            color: white;
          }

          .search-box {
            background: #1e293b;
            border-color: #334155;
            color: #94a3b8;
          }

          .search-box input {
            color: #f1f5f9;
          }

          .search-box:focus-within {
            border-color: #3b82f6;
          }

          .applications-table th {
            background: #162032;
            color: #94a3b8;
          }

          .applications-table td {
            border-top-color: #2d3a4f;
            color: #cbd5e1;
          }

          .applications-table tbody tr:hover td {
            background: #243040;
          }

          .amount-cell {
            color: #f1f5f9 !important;
          }

          .name-main {
            color: #f1f5f9;
          }

          .name-avatar {
            background: #2d3a4f;
            color: #60a5fa;
          }

          .name-sub {
            color: #64748b;
          }

          .view-button {
            background: #2d3a4f;
            color: #60a5fa;
          }

          .view-button:hover {
            background: #3d4a5f;
          }

          .empty-state {
            color: #64748b;
          }

          .dashboard-error {
            background: #2d1a1a;
            border-color: #7f1d1d;
            color: #fca5a5;
          }

          .dashboard-loading {
            color: #94a3b8;
          }

          .modal-overlay {
            background: rgba(15, 23, 42, 0.85);
          }

          .details-modal {
            background: #1e293b;
          }

          .modal-header {
            background: #1e293b;
            border-bottom-color: #334155;
          }

          .modal-header p {
            color: #60a5fa;
          }

          .modal-header h2 {
            color: #f1f5f9;
          }

          .modal-icon {
            background: #2d3a4f;
            color: #60a5fa;
          }

          .close-button {
            background: #2d3a4f;
            color: #94a3b8;
          }

          .close-button:hover {
            background: #3d4a5f;
            color: #f1f5f9;
          }

          .details-section {
            background: #1e293b;
          }

          .details-section + .details-section {
            border-top-color: #334155;
          }

          .details-section-title {
            color: #f1f5f9;
          }

          .details-section-title svg {
            color: #60a5fa;
          }

          .detail-item {
            background: #243040;
            border-color: #334155;
          }

          .detail-item:hover {
            border-color: #475569;
            background: #2d3a4f;
          }

          .detail-item span {
            color: #94a3b8;
          }

          .detail-item strong {
            color: #e2e8f0;
          }

          .detail-highlight {
            color: #f1f5f9 !important;
          }

          .detail-green {
            color: #34d399 !important;
          }

          .application-id {
            color: #94a3b8 !important;
          }

          .admin-record-section {
            background: linear-gradient(180deg, #162032 0%, #1e293b 100%);
            border-top-color: #334155;
          }

          .admin-record-header {
            background: #1e293b;
            border-color: #334155;
          }

          .admin-record-header h3 {
            color: #f1f5f9;
          }

          .admin-record-header p {
            color: #94a3b8;
          }

          .record-heading-icon {
            background: #2d3a4f;
            color: #60a5fa;
          }

          .admin-field {
            background: #1e293b;
            border-color: #334155;
          }

          .admin-field label {
            color: #cbd5e1;
          }

          .admin-field select,
          .admin-field textarea {
            background: #243040;
            border-color: #334155;
            color: #f1f5f9;
          }

          .admin-field select:hover,
          .admin-field textarea:hover {
            background: #2d3a4f;
            border-color: #475569;
          }

          .admin-field select:focus,
          .admin-field textarea:focus {
            border-color: #3b82f6;
            background: #2d3a4f;
          }

          .save-area {
            border-top-color: #334155;
          }

          .save-success {
            background: #1a2d2a;
            border-color: #065f46;
            color: #34d399;
          }

          .save-button {
            background: #3b82f6;
            color: white;
          }

          .save-button:hover:not(:disabled) {
            background: #2563eb;
          }

          .status-pending {
            background: #2d1a0a;
            color: #fb923c;
            border-color: #7c2d12;
          }

          .status-review {
            background: #0a1a3d;
            color: #60a5fa;
            border-color: #1e3a5f;
          }

          .status-approved {
            background: #0a2d1a;
            color: #34d399;
            border-color: #065f46;
          }

          .status-rejected {
            background: #2d0a0a;
            color: #f87171;
            border-color: #7f1d1d;
          }

          .period-badge {
            background: #2d3a4f;
            color: #94a3b8;
          }

          .rate-badge {
            background: #0a2d1a;
            color: #34d399;
          }

          .mobile-menu-toggle {
            background: #1e293b;
            border-color: #334155;
            color: #94a3b8;
          }

          .mobile-menu-toggle:hover {
            background: #2d3a4f;
          }
        }
      `}</style>
    </main>
  );
}

/* =====================================================
   STAT CARD
===================================================== */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
}) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

/* =====================================================
   SEARCH BOX
===================================================== */

function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="search-box">
      <Search size={18} />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

/* =====================================================
   APPLICATION TABLE
===================================================== */

function ApplicationTable({
  applications,
  type,
  onView,
  formatCurrency,
  formatDate,
}: {
  applications: Application[];
  type: ApplicationType;
  onView: (application: Application, type: ApplicationType) => void;
  formatCurrency: (value?: unknown) => string;
  formatDate: (value?: unknown) => string;
}) {
  if (applications.length === 0) {
    return <div className="empty-state">No applications found.</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>NIC</th>
            <th>Phone</th>
            <th>Email</th>
            {type === "customer" ? (
              <>
                <th>Business</th>
                <th>Capital</th>
              </>
            ) : (
              <>
                <th>Capital</th>
                <th>Period</th>
                <th>Rate</th>
              </>
            )}
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td>
                <div className="name-cell">
                  <div className="name-avatar">
                    {type === "customer" ? (
                      <User size={16} />
                    ) : (
                      <TrendingUp size={16} />
                    )}
                  </div>
                  <div>
                    <div className="name-main">{application.name || "-"}</div>
                    <div className="name-sub">
                      {type === "customer" ? "Customer" : "Investor"}
                    </div>
                  </div>
                </div>
              </td>
              <td>{application.nic || "-"}</td>
              <td>{application.phone || "-"}</td>
              <td>{application.email || "-"}</td>
              {type === "customer" ? (
                <>
                  <td>{application.businessName || "-"}</td>
                  <td className="amount-cell">
                    {formatCurrency(application.capital)}
                  </td>
                </>
              ) : (
                <>
                  <td className="amount-cell">
                    {formatCurrency(application.capital)}
                  </td>
                  <td>
                    <span className="period-badge">
                      {application.period ?? "-"}
                    </span>
                  </td>
                  <td>
                    <span className="rate-badge">
                      {application.rate !== undefined && application.rate !== null
                        ? `${application.rate}%`
                        : "-"}
                    </span>
                  </td>
                </>
              )}
              <td>
                <StatusBadge status={application.status || "Pending"} />
              </td>
              <td>{formatDate(application.createdAt)}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => onView(application, type)}
                >
                  <Eye size={14} />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* =====================================================
   STATUS BADGE
===================================================== */

function StatusBadge({ status }: { status: string }) {
  let className = "status-badge";
  let icon = <Clock3 size={12} />;

  if (status === "Approved") {
    className += " status-approved";
    icon = <CheckCircle2 size={12} />;
  } else if (status === "Rejected") {
    className += " status-rejected";
    icon = <XCircle size={12} />;
  } else if (status === "Under Review") {
    className += " status-review";
    icon = <Search size={12} />;
  } else {
    className += " status-pending";
  }

  return (
    <span className={className}>
      {icon}
      {status}
    </span>
  );
}

/* =====================================================
   CUSTOMER DETAILS
===================================================== */

function CustomerDetails({
  application,
  formatCurrency,
  formatDateTime,
}: {
  application: Application;
  formatCurrency: (value?: unknown) => string;
  formatDateTime: (value?: unknown) => string;
}) {
  return (
    <>
      <div className="details-section">
        <h3 className="details-section-title">
          <User size={17} />
          Personal Information
        </h3>
        <div className="details-grid">
          <Detail label="Full Name" value={application.name} />
          <Detail label="NIC" value={application.nic} icon={<Hash size={13} />} />
          <Detail label="Phone" value={application.phone} icon={<Phone size={13} />} />
          <Detail label="Email" value={application.email} icon={<Mail size={13} />} />
          <Detail label="Address" value={application.address} full icon={<MapPin size={13} />} />
        </div>
      </div>

      <div className="details-section">
        <h3 className="details-section-title">
          <Building2 size={17} />
          Business Information
        </h3>
        <div className="details-grid">
          <Detail label="Business Name" value={application.businessName} />
          <Detail label="Registration Number" value={application.registrationNumber} />
          <Detail label="Employee Count" value={application.employeeCount} />
          <Detail label="Business Field" value={application.businessField} />
        </div>
      </div>

      <div className="details-section">
        <h3 className="details-section-title">
          <CreditCard size={17} />
          Financial Information
        </h3>
        <div className="details-grid">
          <Detail label="Capital" value={formatCurrency(application.capital)} highlight />
          <Detail
            label="Existing Business ROI"
            value={
              application.existingBusinessROI !== undefined
                ? `${application.existingBusinessROI}%`
                : "-"
            }
            green
          />
          <Detail label="Monthly Turnover" value={formatCurrency(application.monthlyTurnover)} />
          <Detail label="Monthly Expenses" value={formatCurrency(application.monthlyExpenses)} />
          <Detail label="Return Checks" value={application.returnChecks} />
          <Detail label="Return Check Amount" value={formatCurrency(application.returnCheckAmount)} />
        </div>
      </div>

      <div className="details-section">
        <h3 className="details-section-title">
          <CalendarDays size={17} />
          Application Information
        </h3>
        <div className="details-grid">
          <Detail label="Application ID" value={application._id} full idStyle />
          <Detail label="Submitted At" value={formatDateTime(application.createdAt)} full />
          {application.updatedAt && (
            <Detail label="Last Updated" value={formatDateTime(application.updatedAt)} full />
          )}
        </div>
      </div>
    </>
  );
}

/* =====================================================
   INVESTOR DETAILS
===================================================== */

function InvestorDetails({
  application,
  formatCurrency,
  formatDateTime,
}: {
  application: Application;
  formatCurrency: (value?: unknown) => string;
  formatDateTime: (value?: unknown) => string;
}) {
  return (
    <>
      <div className="details-section">
        <h3 className="details-section-title">
          <User size={17} />
          Investor Information
        </h3>
        <div className="details-grid">
          <Detail label="Full Name" value={application.name} />
          <Detail label="NIC" value={application.nic} icon={<Hash size={13} />} />
          <Detail label="Phone" value={application.phone} icon={<Phone size={13} />} />
          <Detail label="Email" value={application.email} icon={<Mail size={13} />} />
          <Detail label="Address" value={application.address} full icon={<MapPin size={13} />} />
        </div>
      </div>

      <div className="details-section">
        <h3 className="details-section-title">
          <TrendingUp size={17} />
          Investment Information
        </h3>
        <div className="details-grid">
          <Detail label="Investment Capital" value={formatCurrency(application.capital)} highlight />
          <Detail label="Investment Period" value={application.period} />
          <Detail
            label="Interest Rate"
            value={
              application.rate !== undefined && application.rate !== null
                ? `${application.rate}%`
                : "-"
            }
            green
          />
          {application.investmentAmount !== undefined && (
            <Detail label="Investment Amount" value={formatCurrency(application.investmentAmount)} />
          )}
          {application.investmentType && (
            <Detail label="Investment Type" value={application.investmentType} />
          )}
        </div>
      </div>

      <div className="details-section">
        <h3 className="details-section-title">
          <CalendarDays size={17} />
          Application Information
        </h3>
        <div className="details-grid">
          <Detail label="Application ID" value={application._id} full idStyle />
          <Detail label="Submitted At" value={formatDateTime(application.createdAt)} full />
          {application.updatedAt && (
            <Detail label="Last Updated" value={formatDateTime(application.updatedAt)} full />
          )}
        </div>
      </div>
    </>
  );
}

/* =====================================================
   DETAIL ITEM
===================================================== */

function Detail({
  label,
  value,
  full = false,
  highlight = false,
  green = false,
  idStyle = false,
  icon,
}: {
  label: string;
  value?: unknown;
  full?: boolean;
  highlight?: boolean;
  green?: boolean;
  idStyle?: boolean;
  icon?: React.ReactNode;
}) {
  let className = "detail-item";
  if (full) className += " full";

  return (
    <div className={className}>
      <span>
        {icon}
        {label}
      </span>
      <strong
        className={`
          ${highlight ? "detail-highlight" : ""}
          ${green ? "detail-green" : ""}
          ${idStyle ? "application-id" : ""}
        `}
      >
        {value === undefined || value === null || value === "" ? "-" : String(value)}
      </strong>
    </div>
  );
}