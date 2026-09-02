
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Authentication will be connected to MongoDB later.
    console.log("Login submitted");
  };

  return (
    <main className="auth-page">
      {/* Background */}
      <div className="auth-background">
        <div className="auth-shape auth-shape-1"></div>
        <div className="auth-shape auth-shape-2"></div>
      </div>

      <div className="container position-relative">
        <div className="row min-vh-100 align-items-center justify-content-center py-5">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="auth-card">

              {/* Back */}
              <Link href="/portal" className="back-link">
                <ArrowLeft size={17} />
                Back to Client Portal
              </Link>

              {/* Logo */}
              <div className="text-center auth-header">
                <div className="auth-logo">D</div>

                <h1>DEARO</h1>

                <p>Venture Capital</p>
              </div>

              {/* Title */}
              <div className="text-center mb-4">
                <h2>Welcome Back</h2>

                <p className="auth-description">
                  Login to your Dearo client account to continue.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <div className="input-wrapper">
                    <Mail size={19} />

                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>

                    <Link
                      href="/portal/forgot-password"
                      className="forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control password-input"
                      placeholder="Enter your password"
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="auth-submit"
                >
                  Login
                  <span>
                    →
                  </span>
                </button>
              </form>

              {/* Divider */}
              <div className="divider">
                <span>OR</span>
              </div>

              {/* Register */}
              <div className="register-text">
                Don't have a Dearo account?

                <Link href="/portal/register">
                  Create an account
                </Link>
              </div>

              {/* Security */}
              <div className="security-info">
                <ShieldCheck size={17} />

                <span>
                  Your information is protected securely.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .auth-page {
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

        .auth-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .auth-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.16;
        }

        .auth-shape-1 {
          width: 420px;
          height: 420px;
          background: #ffffff;
          top: -250px;
          right: -120px;
        }

        .auth-shape-2 {
          width: 330px;
          height: 330px;
          background: #5d9cff;
          bottom: -190px;
          left: -140px;
        }

        .auth-card {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 24px;
          padding: 35px 45px 40px;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.28),
            0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #6b7280;
          text-decoration: none;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .back-link:hover {
          color: #0b1d33;
        }

        .auth-header {
          margin-top: 15px;
          margin-bottom: 28px;
        }

        .auth-logo {
          width: 58px;
          height: 58px;
          margin: 0 auto 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0b1d33;
          color: white;
          border-radius: 15px;
          font-size: 27px;
          font-weight: 700;
        }

        .auth-header h1 {
          margin: 0;
          color: #0b1d33;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .auth-header p {
          margin: 3px 0 0;
          color: #6c757d;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.8px;
        }

        h2 {
          color: #111827;
          font-size: 29px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .auth-description {
          color: #6b7280;
          font-size: 14px;
          margin-bottom: 0;
        }

        .form-label {
          display: block;
          color: #1f2937;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 7px;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper > svg {
          position: absolute;
          left: 15px;
          color: #8a94a6;
          pointer-events: none;
          z-index: 2;
        }

        .input-wrapper .form-control {
          height: 50px;
          border: 1px solid #dfe4ea;
          border-radius: 11px;
          padding: 0 45px;
          font-size: 14px;
          color: #1f2937;
          box-shadow: none;
          transition: 0.2s ease;
        }

        .input-wrapper .form-control:focus {
          border-color: #0b1d33;
          box-shadow: 0 0 0 3px rgba(11, 29, 51, 0.08);
        }

        .input-wrapper .form-control::placeholder {
          color: #a0a8b5;
        }

        .forgot-link {
          color: #0b1d33;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .password-input {
          padding-right: 48px !important;
        }

        .password-toggle {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: #7b8493;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .password-toggle:hover {
          color: #0b1d33;
        }

        .form-check {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .form-check-input {
          cursor: pointer;
        }

        .form-check-input:checked {
          background-color: #0b1d33;
          border-color: #0b1d33;
        }

        .form-check-label {
          color: #6b7280;
          font-size: 12px;
          cursor: pointer;
        }

        .auth-submit {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 11px;
          background: #0b1d33;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .auth-submit:hover {
          background: #142c49;
          transform: translateY(-1px);
          box-shadow: 0 10px 25px rgba(11, 29, 51, 0.2);
        }

        .auth-submit span {
          font-size: 20px;
          line-height: 1;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 27px 0 20px;
          color: #a0a8b5;
          font-size: 11px;
        }

        .divider::before,
        .divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: #e5e7eb;
        }

        .register-text {
          text-align: center;
          color: #6b7280;
          font-size: 13px;
        }

        .register-text a {
          margin-left: 5px;
          color: #0b1d33;
          font-weight: 700;
          text-decoration: none;
        }

        .register-text a:hover {
          text-decoration: underline;
        }

        .security-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 24px;
          color: #7b8493;
          font-size: 11px;
        }

        .security-info svg {
          color: #198754;
        }

        @media (max-width: 575px) {
          .auth-card {
            padding: 28px 20px 30px;
            border-radius: 20px;
          }

          h2 {
            font-size: 25px;
          }

          .auth-description {
            font-size: 13px;
          }
        }
      `}</style>
    </main>
  );
}

