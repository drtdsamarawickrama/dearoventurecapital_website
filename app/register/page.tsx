"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  UserPlus,
  User,
  Phone,
  Mail,
  Lock,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Frontend validation
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  if (!agree) {
    alert("Please agree to the Terms and Conditions.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        phone,
        email,
        password,
        confirmPassword,
        agree,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Account created successfully!");

    // Continue based on application type
    if (redirect === "customer") {
      router.push("/portal/customer/application");
    } else if (redirect === "investor") {
      router.push("/portal/investor/application");
    } else {
      router.push("/portal");
    }
  } catch (error) {
    console.error("Registration error:", error);
    alert("Unable to connect to the server.");
  } finally {
    setLoading(false);
  }
};

  const handleLogin = () => {
    if (redirect) {
      router.push(`/portal/login?redirect=${redirect}`);
    } else {
      router.push("/portal/login");
    }
  };

  return (
    <main className="register-page">

      {/* =====================================
          NAVY BLUE TOP SECTION
      ====================================== */}

      <section className="top-section">

        {/* Back Button */}
        <button
          type="button"
          className="back-button"
          onClick={() => router.back()}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className="top-content">

          {/* Logo */}
          {/* <div className="logo-container">
            <Image
              src="/images/final_logo-venture.jpg"
              alt="Dearo Venture Capital"
              width={150}
              height={70}
              className="dearo-logo"
              priority
            />
          </div> */}

          {/* Brand */}
          <p className="brand-name">
            DEARO VENTURE CAPITAL
          </p>

          {/* Heading */}
          <h1>
            Create Your Account
          </h1>

          {/* Subtitle */}
          <p className="top-subtitle">
            Join Dearo and start your journey with us.
          </p>

        </div>

      </section>


      {/* =====================================
          REGISTER CARD
      ====================================== */}

      <section className="register-card">

        {/* Card Header */}
        <div className="card-header">
          {/* 
          <div className="register-icon">
            <UserPlus size={23} />
          </div> */}

          <div>
            <h2>
              Sign Up
            </h2>

            <p>
              Enter your details to get started
            </p>
          </div>

        </div>


        {/* =====================================
            REGISTER FORM
          ====================================== */}

        <form
          onSubmit={handleSubmit}
          className="register-form"
        >

          {/* Full Name */}
          <div className="form-group">

            <label htmlFor="fullName">
              Full Name
            </label>

            <div className="input-wrapper">

              <User
                size={18}
                className="input-icon"
              />

              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                required
              />

            </div>

          </div>


          {/* Phone Number */}
          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <div className="input-wrapper">

              <Phone
                size={18}
                className="input-icon"
              />

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
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

              <Mail
                size={18}
                className="input-icon"
              />

              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

          </div>


          {/* Password */}
          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="input-wrapper">

              <Lock
                size={18}
                className="input-icon"
              />

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (value) => !value
                  )
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>


          {/* Confirm Password */}
          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <div className="input-wrapper">

              <Lock
                size={18}
                className="input-icon"
              />

              <input
                id="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    (value) => !value
                  )
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>


          {/* Terms */}
          <label className="terms-label">

            <input
              type="checkbox"
              checked={agree}
              onChange={(e) =>
                setAgree(e.target.checked)
              }
            />

            <span>
              I agree to the{" "}
              <button
                type="button"
                className="terms-button"
              >
                Terms and Conditions
              </button>
            </span>

          </label>


          {/* Create Account Button */}
          <button
            type="submit"
            className="create-button"
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              <>
                <UserPlus size={19} />
                Create Account
              </>
            )}

          </button>

        </form>


        {/* Divider */}
        <div className="divider">

          <span></span>

          <p>OR</p>

          <span></span>

        </div>


        {/* Login */}
        <div className="login-section">

          <p>
            Already have a Dearo account?
          </p>

          <button
            type="button"
            className="login-button"
            onClick={() => router.push("/login")}
          >
            <ArrowLeft size={17} />
            Back to Login
          </button>

        </div>

      </section>





      {/* =====================================
          CSS
      ====================================== */}

      <style jsx>{`

        /* =====================================
           PAGE
        ====================================== */

        .register-page {
          min-height: 100vh;
          width: 100%;

          position: relative;

          background: #f5f7fb;

          color: #071a3d;

          overflow-x: hidden;

          box-sizing: border-box;

          padding-bottom: 40px;
        }


        /* =====================================
           NAVY TOP SECTION
        ====================================== */

        .top-section {
          width: 100%;

          min-height: 390px;

          background: #071a3d;

          color: #ffffff;

          position: relative;

          display: flex;

          justify-content: center;

          box-sizing: border-box;

          padding: 55px 20px 120px;

          border-radius: 0 0 35px 35px;
        }


        /* =====================================
           BACK BUTTON
        ====================================== */

        .back-button {
          position: absolute;

          top: 25px;
          left: 30px;

          display: flex;

          align-items: center;

          gap: 8px;

          padding: 9px 13px;

          background: transparent;

          border: none;

          color: #ffffff;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .back-button:hover {
          opacity: 0.7;

          transform: translateX(-2px);
        }


        /* =====================================
           TOP CONTENT
        ====================================== */

        .top-content {
          width: 100%;

          max-width: 650px;

          text-align: center;
        }


        /* =====================================
           LOGO
        ====================================== */

        .logo-container {
          width: 150px;
          height: 70px;

          margin: 0 auto 20px;

          display: flex;

          align-items: center;
          justify-content: center;

          background: transparent;
        }

        .dearo-logo {
          width: 150px;

          height: auto;

          object-fit: contain;

          display: block;
        }


        /* =====================================
           BRAND NAME
        ====================================== */

        .brand-name {
          margin: 0 0 10px;

          color: rgba(255, 255, 255, 0.7);

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }


        /* =====================================
           TOP HEADING
        ====================================== */

        .top-content h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(32px, 5vw, 46px);

          line-height: 1.2;

          font-weight: 700;
        }


        /* =====================================
           TOP SUBTITLE
        ====================================== */

        .top-subtitle {
          margin: 12px auto 0;

          max-width: 450px;

          color: rgba(255, 255, 255, 0.72);

          font-size: 14px;

          line-height: 1.6;
        }


        /* =====================================
           REGISTER CARD
        ====================================== */

        .register-card {
          width: calc(100% - 40px);

          max-width: 480px;

          margin: -85px auto 0;

          position: relative;

          z-index: 5;

          box-sizing: border-box;

          padding: 32px;

          background: #ffffff;

          border: 1px solid #e4e8ef;

          border-radius: 20px;

          box-shadow:
            0 20px 55px rgba(7, 26, 61, 0.12);
        }


        /* =====================================
           CARD HEADER
        ====================================== */

        .card-header {
          display: flex;

          align-items: center;

          gap: 13px;

          margin-bottom: 25px;
        }

        .register-icon {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          background: #071a3d;

          color: #ffffff;

          border-radius: 12px;
        }

        .card-header h2 {
          margin: 0 0 3px;

          color: #071a3d;

          font-size: 21px;

          font-weight: 700;
        }

        .card-header p {
          margin: 0;

          color: #8a94a6;

          font-size: 13px;
        }


        /* =====================================
           FORM
        ====================================== */

        .register-form {
          display: flex;

          flex-direction: column;

          gap: 16px;
        }

        .form-group {
          width: 100%;
        }

        .form-group label {
          display: block;

          margin-bottom: 7px;

          color: #374151;

          font-size: 13px;

          font-weight: 600;
        }


        /* =====================================
           INPUT
        ====================================== */

        .input-wrapper {
          position: relative;

          width: 100%;
        }

        .input-wrapper input {
          width: 100%;

          height: 49px;

          box-sizing: border-box;

          padding: 0 45px;

          background: #f8fafc;

          border: 1px solid #dfe4ec;

          border-radius: 10px;

          color: #071a3d;

          font-size: 14px;

          outline: none;

          transition: all 0.25s ease;
        }

        .input-wrapper input::placeholder {
          color: #9ca3af;
        }

        .input-wrapper input:focus {
          background: #ffffff;

          border-color: #071a3d;

          box-shadow:
            0 0 0 3px rgba(7, 26, 61, 0.08);
        }


        /* =====================================
           INPUT ICON
        ====================================== */

        .input-icon {
          position: absolute;

          top: 50%;
          left: 15px;

          transform: translateY(-50%);

          color: #8a94a6;

          pointer-events: none;
        }


        /* =====================================
           PASSWORD TOGGLE
        ====================================== */

        .password-toggle {
          position: absolute;

          top: 50%;
          right: 13px;

          transform: translateY(-50%);

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 3px;

          background: transparent;

          border: none;

          color: #6b7280;

          cursor: pointer;
        }

        .password-toggle:hover {
          color: #071a3d;
        }


        /* =====================================
           TERMS
        ====================================== */

        .terms-label {
          display: flex;

          align-items: flex-start;

          gap: 9px;

          margin-top: 2px;

          color: #6b7280;

          font-size: 12px;

          line-height: 1.5;

          cursor: pointer;
        }

        .terms-label input {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          margin-top: 2px;

          accent-color: #071a3d;

          cursor: pointer;
        }

        .terms-button {
          padding: 0;

          background: transparent;

          border: none;

          color: #071a3d;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;
        }

        .terms-button:hover {
          text-decoration: underline;
        }


        /* =====================================
           CREATE BUTTON
        ====================================== */

        .create-button {
          width: 100%;

          height: 52px;

          margin-top: 3px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          background: #071a3d;

          border: 1px solid #071a3d;

          border-radius: 10px;

          color: #ffffff;

          font-size: 14px;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .create-button:hover:not(:disabled) {
          background: #102c60;

          transform: translateY(-1px);

          box-shadow:
            0 8px 20px rgba(7, 26, 61, 0.18);
        }

        .create-button:disabled {
          opacity: 0.7;

          cursor: not-allowed;
        }


        /* =====================================
           SPINNER
        ====================================== */

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


        /* =====================================
           DIVIDER
        ====================================== */

        .divider {
          display: flex;

          align-items: center;

          gap: 12px;

          margin: 25px 0 20px;
        }

        .divider span {
          flex: 1;

          height: 1px;

          background: #e5e7eb;
        }

        .divider p {
          margin: 0;

          color: #9ca3af;

          font-size: 10px;

          font-weight: 600;
        }


        /* =====================================
           LOGIN SECTION
        ====================================== */

        .login-section {
          text-align: center;
        }

        .login-section p {
          margin: 0 0 12px;

          color: #6b7280;

          font-size: 13px;
        }

        .login-button {
          width: 100%;

          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          background: #ffffff;

          border: 1px solid #071a3d;

          border-radius: 10px;

          color: #071a3d;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .login-button:hover {
          background: #f3f6fa;

          transform: translateY(-1px);
        }


        /* =====================================
           FOOTER
        ====================================== */

        .register-footer {
          margin: 25px 15px 0;

          text-align: center;

          color: #9ca3af;

          font-size: 11px;

          line-height: 1.5;
        }


        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 768px) {

          .top-section {
            min-height: 370px;

            padding-top: 55px;
          }

          .back-button {
            top: 20px;
            left: 20px;
          }

          .register-card {
            margin-top: -75px;
          }
        }


        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 480px) {

          .top-section {
            min-height: 365px;

            padding: 55px 15px 100px;

            border-radius: 0 0 28px 28px;
          }

          .back-button {
            top: 14px;
            left: 12px;

            padding: 8px 10px;

            font-size: 13px;
          }

          .logo-container {
            width: 120px;
            height: 55px;

            margin-bottom: 17px;
          }

          .dearo-logo {
            width: 120px;
          }

          .brand-name {
            font-size: 9px;

            letter-spacing: 1.8px;
          }

          .top-content h1 {
            font-size: 29px;
          }

          .top-subtitle {
            font-size: 13px;

            max-width: 320px;
          }

          .register-card {
            width: calc(100% - 30px);

            margin-top: -65px;

            padding: 24px 20px;

            border-radius: 17px;
          }

          .card-header {
            margin-bottom: 22px;
          }

          .register-icon {
            width: 44px;
            height: 44px;

            border-radius: 10px;
          }

          .card-header h2 {
            font-size: 19px;
          }

          .input-wrapper input {
            height: 48px;

            font-size: 14px;
          }

          .create-button {
            height: 50px;
          }

          .login-button {
            height: 47px;
          }
        }


        /* =====================================
           VERY SMALL MOBILE
        ====================================== */

        @media (max-width: 360px) {

          .top-section {
            min-height: 350px;
          }

          .register-card {
            width: calc(100% - 24px);

            padding: 22px 17px;
          }

          .top-content h1 {
            font-size: 27px;
          }

          .top-subtitle {
            font-size: 12px;
          }

          .card-header h2 {
            font-size: 18px;
          }

          .terms-label {
            font-size: 11px;
          }

          .terms-button {
            font-size: 11px;
          }
        }

      `}</style>

    </main>
  );
}