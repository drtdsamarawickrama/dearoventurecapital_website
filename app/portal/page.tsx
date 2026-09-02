
"use client";

import Link from "next/link";
import { ArrowRight, LockKeyhole, UserPlus, ShieldCheck } from "lucide-react";

export default function PortalPage() {
  return (
    <main className="portal-page">
      {/* Background */}
      <div className="portal-background">
        <div className="portal-shape portal-shape-1"></div>
        <div className="portal-shape portal-shape-2"></div>
      </div>

      <div className="container position-relative">
        <div className="row min-vh-100 align-items-center justify-content-center py-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div className="portal-card">

              {/* Logo / Brand */}
              <div className="text-center mb-4">
                <div className="portal-logo">
                  D
                </div>

                <h1 className="portal-brand">
                  DEARO
                </h1>

                <p className="portal-subtitle">
                  Venture Capital
                </p>
              </div>

              {/* Heading */}
              <div className="text-center mb-4">
                <h2 className="portal-title">
                  Client Portal
                </h2>

                <p className="portal-description">
                  Welcome to the Dearo client portal. Login to your account
                  or create a new account to continue.
                </p>
              </div>

              {/* Login */}
              <Link href="/portal/login" className="portal-button primary-button">
                <span className="button-icon">
                  <LockKeyhole size={20} />
                </span>

                <span>
                  <strong>Login</strong>
                  <small>Access your Dearo account</small>
                </span>

                <ArrowRight className="button-arrow" size={20} />
              </Link>

              {/* Sign Up */}
              <Link href="/portal/register" className="portal-button secondary-button">
                <span className="button-icon">
                  <UserPlus size={20} />
                </span>

                <span>
                  <strong>Sign Up</strong>
                  <small>Create a new Dearo account</small>
                </span>

                <ArrowRight className="button-arrow" size={20} />
              </Link>

              {/* Security */}
              <div className="security-info">
                <ShieldCheck size={18} />

                <span>
                  Your information is protected and handled securely.
                </span>
              </div>

              {/* Back */}
              <div className="text-center mt-4">
                <Link href="/" className="back-link">
                  ← Back to Dearo Website
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .portal-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(255, 255, 255, 0.08),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #07111f 0%,
              #0c1c31 50%,
              #102944 100%
            );
        }

        .portal-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .portal-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.18;
        }

        .portal-shape-1 {
          width: 400px;
          height: 400px;
          background: #ffffff;
          top: -220px;
          right: -120px;
        }

        .portal-shape-2 {
          width: 300px;
          height: 300px;
          background: #4f8cff;
          bottom: -160px;
          left: -120px;
        }

        .portal-card {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.97);
          border-radius: 24px;
          padding: 50px 55px;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.25),
            0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .portal-logo {
          width: 62px;
          height: 62px;
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #0b1d33;
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .portal-brand {
          margin: 0;
          color: #0b1d33;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .portal-subtitle {
          margin: 3px 0 0;
          color: #6c757d;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .portal-title {
          color: #111827;
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .portal-description {
          max-width: 520px;
          margin: 0 auto;
          color: #6b7280;
          font-size: 15px;
          line-height: 1.7;
        }

        .portal-button {
          width: 100%;
          min-height: 72px;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 14px 18px;
          margin-top: 15px;
          border-radius: 14px;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .portal-button:hover {
          transform: translateY(-2px);
        }

        .portal-button .button-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .portal-button > span:nth-child(2) {
          flex: 1;
          text-align: left;
        }

        .portal-button strong {
          display: block;
          font-size: 16px;
          margin-bottom: 3px;
        }

        .portal-button small {
          display: block;
          font-size: 12px;
        }

        .button-arrow {
          flex-shrink: 0;
        }

        .primary-button {
          background: #0b1d33;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(11, 29, 51, 0.18);
        }

        .primary-button:hover {
          background: #142c49;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(11, 29, 51, 0.25);
        }

        .primary-button .button-icon {
          background: rgba(255, 255, 255, 0.12);
        }

        .primary-button small {
          color: rgba(255, 255, 255, 0.68);
        }

        .secondary-button {
          background: #f5f7fa;
          border: 1px solid #e4e8ed;
          color: #0b1d33;
        }

        .secondary-button:hover {
          background: #edf1f5;
          color: #0b1d33;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .secondary-button .button-icon {
          background: #e7ecf2;
        }

        .secondary-button small {
          color: #6b7280;
        }

        .security-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;
          margin-top: 25px;
          color: #6b7280;
          font-size: 12px;
        }

        .security-info svg {
          color: #198754;
          flex-shrink: 0;
        }

        .back-link {
          color: #6b7280;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #0b1d33;
        }

        @media (max-width: 767px) {
          .portal-card {
            padding: 35px 22px;
            border-radius: 20px;
          }

          .portal-title {
            font-size: 28px;
          }

          .portal-description {
            font-size: 14px;
          }

          .portal-button {
            min-height: 68px;
          }
        }

        @media (max-width: 400px) {
          .portal-card {
            padding: 30px 16px;
          }

          .portal-title {
            font-size: 25px;
          }

          .portal-button {
            padding: 12px;
          }

          .portal-button strong {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}
