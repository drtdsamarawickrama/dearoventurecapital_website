 
"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Registration will be connected to MongoDB later.
    console.log("Registration submitted");
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

              {/* Heading */}
              <div className="text-center mb-4">
                <h2>Create Account</h2>

                <p className="auth-description">
                  Create your Dearo client account to get started.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>

                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <div className="input-wrapper">
                    <User size={19} />

                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

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

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Mobile Number
                  </label>

                  <div className="input-wrapper">
                    <Phone size={19} />

                    <input
                      id="phone"
                      type="tel"
                      className="form-control"
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>

                  <div className="input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="form-control password-input"
                      placeholder="Create a password"
                      required
                      minLength={8}
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

                  <div className="password-hint">
                    Password must contain at least 8 characters.
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label"
                  >
                    Confirm Password
                  </label>

                  <div className="input-wrapper">
                    <LockKeyhole size={19} />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      className="form-control password-input"
                      placeholder="Confirm your password"
                      required
                      minLength={8}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms */}
                <div className="form-check terms-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                  />

                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <Link href="/terms">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Create Account */}
                <button
                  type="submit"
                  className="auth-submit"
                >
                  Create Account
                  <span>→</span>
                </button>
              </form>

              {/* Login */}
              <div className="login-text">
                Already have a Dearo account?

                <Link href="/portal/login">
                  Login
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
          margin-bottom: 25px;
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

        .password-hint {
          margin-top: 6px;
          color: #9ca3af;
          font-size: 10px;
        }

        .terms-check {
          display: flex;
          align-items: flex-start;
          gap: 7px;
        }

        .terms-check .form-check-input {
          margin-top: 3px;
          flex-shrink: 0;
          cursor: pointer;
        }

        .form-check-input:checked {
          background-color: #0b1d33;
          border-color: #0b1d33;
        }

        .terms-check .form-check-label {
          color: #6b7280;
          font-size: 11px;
          line-height: 1.6;
        }

        .terms-check a {
          color: #0b1d33;
          font-weight: 600;
          text-decoration: none;
        }

        .terms-check a:hover {
          text-decoration: underline;
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

        .login-text {
          text-align: center;
          margin-top: 22px;
          color: #6b7280;
          font-size: 13px;
        }

        .login-text a {
          margin-left: 5px;
          color: #0b1d33;
          font-weight: 700;
          text-decoration: none;
        }

        .login-text a:hover {
          text-decoration: underline;
        }

        .security-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 22px;
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
