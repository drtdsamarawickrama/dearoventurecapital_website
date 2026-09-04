
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  User,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Wallet,
  Calendar,
  Percent,
} from "lucide-react";

export default function InvestorApplicationPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    phone: "",
    email: "",
    address: "",
    capital: "",
    period: "",
    rate: "",
  });

  const [loading, setLoading] = useState(false);

  // Success dialog state
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================================
  // SUBMIT INVESTOR APPLICATION
  // ==========================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/investor-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit investor application."
        );
      }

      // Show custom success dialog
      setShowSuccess(true);

      // Clear form after successful submission
      setFormData({
        name: "",
        nic: "",
        phone: "",
        email: "",
        address: "",
        capital: "",
        period: "",
        rate: "",
      });
    } catch (error) {
      console.error(
        "Investor application submission error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // GO TO PORTAL
  // ==========================================

  const handleSuccessOk = () => {
    setShowSuccess(false);

    router.push("/portal");
  };

  return (
    <main className="application-page">

      {/* ==========================================
          BACK BUTTON
      ========================================== */}

      <button
        type="button"
        className="back-button"
        onClick={() => router.back()}
      >
        <ArrowLeft size={18} />
        Back
      </button>


      {/* ==========================================
          APPLICATION CONTAINER
      ========================================== */}

      <section className="application-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="header-section">

          <p className="application-label">
            DEARO VENTURE CAPITAL
          </p>

          <h1>
            Investor <span>Application</span>
          </h1>

          <p className="application-description">
            Please provide your details below to complete your
            investor application.
          </p>

        </div>


        {/* ==========================================
            FORM CARD
        ========================================== */}

        <div className="form-card">

          <div className="form-header">

            <h2>
              Personal & Investment Details
            </h2>

            <p>
              Enter your information accurately to continue
              with your investment application.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            {/* =====================================
                PERSONAL INFORMATION
            ====================================== */}

            <div className="section-title">
              Personal Information
            </div>


            <div className="form-grid">

              {/* Name */}

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <div className="input-wrapper">

                  <User size={18} />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* NIC */}

              <div className="form-group">

                <label htmlFor="nic">
                  NIC Number
                </label>

                <div className="input-wrapper">

                  <CreditCard size={18} />

                  <input
                    id="nic"
                    name="nic"
                    type="text"
                    placeholder="Enter your NIC number"
                    value={formData.nic}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Phone */}

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <div className="input-wrapper">

                  <Phone size={18} />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">

                  <Mail size={18} />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </div>


            {/* =====================================
                ADDRESS
            ====================================== */}

            <div className="form-group full-width">

              <label htmlFor="address">
                Address
              </label>

              <div className="textarea-wrapper">

                <MapPin size={18} />

                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your residential address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  required
                />

              </div>

            </div>


            {/* =====================================
                INVESTMENT INFORMATION
            ====================================== */}

            <div className="section-title investment-title">
              Investment Details
            </div>


            <div className="form-grid">

              {/* Capital */}

              <div className="form-group">

                <label htmlFor="capital">
                  Nature of Amount Investment
                </label>

                <div className="input-wrapper">

                  <Wallet size={18} />

                  <input
                    id="capital"
                    name="capital"
                    type="number"
                    min="0"
                    placeholder="Enter capital amount"
                    value={formData.capital}
                    onChange={handleChange}
                    required
                  />

                </div>

                <small>
                  Enter the amount you wish to invest.
                </small>

              </div>


              {/* Period */}

              <div className="form-group">

                <label htmlFor="period">
                  Investment Period
                </label>

                <div className="input-wrapper">

                  <Calendar size={18} />

                  <input
                    id="period"
                    name="period"
                    type="text"
                    placeholder="e.g. 12 months"
                    value={formData.period}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Rate */}

              <div className="form-group">

                <label htmlFor="rate">
                  Expected Rate
                </label>

                <div className="input-wrapper">

                  <Percent size={18} />

                  <input
                    id="rate"
                    name="rate"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g. 10"
                    value={formData.rate}
                    onChange={handleChange}
                    required
                  />

                  <span className="input-suffix">
                    %
                  </span>

                </div>

                <small>
                  Enter your expected investment rate.
                </small>

              </div>

            </div>


            {/* =====================================
                SUBMIT
            ====================================== */}

            <div className="submit-section">

              <p>
                Please review your information before submitting
                your application.
              </p>

              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Investor Application
                    <ArrowRight size={18} />
                  </>
                )}

              </button>

            </div>

          </form>

        </div>

      </section>


      {/* ==========================================
          SUCCESS DIALOG
      ========================================== */}

      {showSuccess && (
        <div className="success-overlay">

          <div
            className="success-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >

            {/* Success Image / Icon */}

            <div className="success-icon">

              <div className="success-check">
                ✓
              </div>

            </div>


            {/* Success Title */}

            <h2 id="success-title">
              Your Application Submitted Successfully
            </h2>


            {/* Success Message */}

            <p>
              Thank you for submitting your investor
              application. Our team member will contact
              you soon.
            </p>


            {/* OK Button */}

            <button
              type="button"
              className="success-ok-button"
              onClick={handleSuccessOk}
            >
              OK
            </button>

          </div>

        </div>
      )}


      {/* ==========================================
          STYLES
      ========================================== */}

      <style jsx>{`

        /* ==========================================
           MAIN PAGE
        ========================================== */

        .application-page {
          min-height: 100vh;
          width: 100%;
          background: #f7f9fc;
          color: #071a3d;
          padding: 80px 20px 60px;
          box-sizing: border-box;
        }


        /* ==========================================
           BACK BUTTON
        ========================================== */

        .back-button {
          position: absolute;
          top: 30px;
          left: 30px;

          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 10px 15px;

          background: transparent;
          border: none;

          color: #071a3d;

          font-size: 14px;
          font-weight: 600;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .back-button:hover {
          opacity: 0.65;
        }


        /* ==========================================
           CONTAINER
        ========================================== */

        .application-container {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }


        /* ==========================================
           HEADER
        ========================================== */

        .header-section {
          text-align: center;
          margin-bottom: 35px;
        }

        .application-label {
          margin: 0 0 12px;

          color: #718096;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 2.5px;
        }

        .header-section h1 {
          margin: 0;

          color: #071a3d;

          font-size: clamp(34px, 5vw, 48px);

          line-height: 1.2;

          font-weight: 700;
        }

        .header-section h1 span {
          color: #071a3d;
        }

        .application-description {
          max-width: 600px;

          margin: 16px auto 0;

          color: #6b7280;

          font-size: 15px;

          line-height: 1.7;
        }


        /* ==========================================
           FORM CARD
        ========================================== */

        .form-card {
          background: #ffffff;

          border: 1px solid #e4e8ef;

          border-radius: 18px;

          padding: 40px;

          box-shadow:
            0 15px 45px rgba(7, 26, 61, 0.08);
        }


        /* ==========================================
           FORM HEADER
        ========================================== */

        .form-header {
          margin-bottom: 30px;

          padding-bottom: 25px;

          border-bottom: 1px solid #edf0f5;
        }

        .form-header h2 {
          margin: 0 0 8px;

          font-size: 24px;

          color: #071a3d;
        }

        .form-header p {
          margin: 0;

          color: #6b7280;

          font-size: 14px;
        }


        /* ==========================================
           SECTION TITLE
        ========================================== */

        .section-title {
          margin-bottom: 20px;

          color: #071a3d;

          font-size: 17px;

          font-weight: 700;
        }

        .investment-title {
          margin-top: 35px;

          padding-top: 30px;

          border-top: 1px solid #edf0f5;
        }


        /* ==========================================
           FORM GRID
        ========================================== */

        .form-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 22px;
        }

        .form-group {
          display: flex;

          flex-direction: column;

          gap: 8px;
        }

        .full-width {
          margin-top: 22px;
        }

        .form-group label {
          color: #071a3d;

          font-size: 13px;

          font-weight: 600;
        }


        /* ==========================================
           INPUT
        ========================================== */

        .input-wrapper {
          height: 50px;

          display: flex;

          align-items: center;

          gap: 10px;

          padding: 0 14px;

          background: #ffffff;

          border: 1px solid #dfe4ec;

          border-radius: 8px;

          box-sizing: border-box;

          transition: 0.3s ease;
        }

        .input-wrapper:focus-within,
        .textarea-wrapper:focus-within {
          border-color: #071a3d;

          box-shadow:
            0 0 0 3px rgba(7, 26, 61, 0.06);
        }

        .input-wrapper svg,
        .textarea-wrapper svg {
          color: #8a94a6;

          flex-shrink: 0;
        }

        .input-wrapper input {
          width: 100%;

          height: 100%;

          border: none;

          outline: none;

          background: transparent;

          color: #071a3d;

          font-size: 14px;
        }

        .input-wrapper input::placeholder {
          color: #a0a8b5;
        }


        /* ==========================================
           TEXTAREA
        ========================================== */

        .textarea-wrapper {
          display: flex;

          align-items: flex-start;

          gap: 10px;

          padding: 14px;

          background: #ffffff;

          border: 1px solid #dfe4ec;

          border-radius: 8px;

          transition: 0.3s ease;
        }

        .textarea-wrapper textarea {
          width: 100%;

          border: none;

          outline: none;

          resize: vertical;

          background: transparent;

          color: #071a3d;

          font-family: inherit;

          font-size: 14px;

          line-height: 1.5;
        }

        .textarea-wrapper textarea::placeholder {
          color: #a0a8b5;
        }


        /* ==========================================
           SUFFIX
        ========================================== */

        .input-suffix {
          color: #071a3d;

          font-size: 14px;

          font-weight: 600;
        }


        /* ==========================================
           SMALL TEXT
        ========================================== */

        .form-group small {
          color: #8a94a6;

          font-size: 11px;
        }


        /* ==========================================
           SUBMIT
        ========================================== */

        .submit-section {
          margin-top: 35px;

          padding-top: 25px;

          border-top: 1px solid #edf0f5;

          text-align: right;
        }

        .submit-section p {
          margin: 0 0 18px;

          color: #8a94a6;

          font-size: 12px;
        }

        .submit-button {
          min-height: 52px;

          padding: 14px 24px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          color: #ffffff;

          background: #071a3d;

          border: 1px solid #071a3d;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .submit-button:hover:not(:disabled) {
          background: #102c60;

          transform: translateY(-2px);
        }

        .submit-button:disabled {
          opacity: 0.7;

          cursor: not-allowed;

          transform: none;
        }


        /* ==========================================
           SPINNER
        ========================================== */

        .spinner {
          width: 17px;
          height: 17px;

          border: 2px solid rgba(255, 255, 255, 0.35);

          border-top-color: #ffffff;

          border-radius: 50%;

          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }


        /* ==========================================
           SUCCESS OVERLAY
        ========================================== */

        .success-overlay {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background: rgba(7, 26, 61, 0.58);

          backdrop-filter: blur(3px);

          animation: fadeIn 0.25s ease;
        }


        /* ==========================================
           SUCCESS DIALOG
        ========================================== */

        .success-dialog {
          width: 100%;

          max-width: 430px;

          padding: 40px 30px;

          background: #ffffff;

          border-radius: 18px;

          text-align: center;

          box-shadow:
            0 25px 70px rgba(7, 26, 61, 0.25);

          animation: successPopup 0.3s ease;
        }


        /* ==========================================
           SUCCESS ICON
        ========================================== */

        .success-icon {
          width: 78px;

          height: 78px;

          margin: 0 auto 22px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #eaf8f0;

          border: 5px solid #d5f1e2;
        }

        .success-check {
          color: #16834b;

          font-size: 42px;

          font-weight: 700;

          line-height: 1;
        }


        /* ==========================================
           SUCCESS TITLE
        ========================================== */

        .success-dialog h2 {
          margin: 0 0 12px;

          color: #071a3d;

          font-size: 24px;

          line-height: 1.3;

          font-weight: 700;
        }


        /* ==========================================
           SUCCESS MESSAGE
        ========================================== */

        .success-dialog p {
          max-width: 350px;

          margin: 0 auto 28px;

          color: #6b7280;

          font-size: 14px;

          line-height: 1.7;
        }


        /* ==========================================
           SUCCESS OK BUTTON
        ========================================== */

        .success-ok-button {
          width: 100%;

          min-height: 50px;

          padding: 13px 20px;

          color: #ffffff;

          background: #071a3d;

          border: 1px solid #071a3d;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .success-ok-button:hover {
          background: #102c60;

          transform: translateY(-2px);
        }

        .success-ok-button:active {
          transform: translateY(0);
        }


        /* ==========================================
           SUCCESS ANIMATIONS
        ========================================== */

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes successPopup {
          from {
            opacity: 0;

            transform:
              scale(0.92)
              translateY(15px);
          }

          to {
            opacity: 1;

            transform:
              scale(1)
              translateY(0);
          }
        }


        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 768px) {

          .application-page {
            padding: 80px 20px 50px;
          }

          .back-button {
            top: 20px;

            left: 20px;
          }

          .form-card {
            padding: 30px 25px;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {

          .application-page {
            padding: 75px 15px 40px;
          }

          .back-button {
            top: 15px;

            left: 15px;
          }

          .header-section h1 {
            font-size: 34px;
          }

          .application-description {
            font-size: 14px;
          }

          .form-card {
            padding: 25px 18px;

            border-radius: 15px;
          }

          .form-header h2 {
            font-size: 21px;
          }

          .form-grid {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .full-width {
            margin-top: 20px;
          }

          .investment-title {
            margin-top: 30px;

            padding-top: 25px;
          }

          .submit-section {
            text-align: center;
          }

          .submit-button {
            width: 100%;
          }


          /* Mobile success dialog */

          .success-dialog {
            max-width: 360px;

            padding: 32px 22px;

            border-radius: 15px;
          }

          .success-icon {
            width: 68px;

            height: 68px;

            margin-bottom: 20px;
          }

          .success-check {
            font-size: 35px;
          }

          .success-dialog h2 {
            font-size: 21px;
          }

          .success-dialog p {
            font-size: 13px;

            margin-bottom: 24px;
          }

        }

      `}</style>

    </main>
  );
}

