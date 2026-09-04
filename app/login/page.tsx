"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  ArrowLeft,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    // Login successful
    if (redirect === "customer") {
      router.push("/portal/customer/application");
    } else if (redirect === "investor") {
      router.push("/portal/investor/application");
    } else {
      router.push("/portal");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  } finally {
    setLoading(false);
  }
};

  const handleCreateAccount = () => {
    if (redirect) {
      router.push(`/portal/register?redirect=${redirect}`);
    } else {
      router.push("/portal/register");
    }
  };

  return (
    <main className="login-page">

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

          {/* Heading */}
          <p className="brand-name">
            DEARO VENTURE CAPITAL
          </p>

          <h1>
            Welcome Back
          </h1>

          <p className="top-subtitle">
            Sign in to your Dearo account to continue.
          </p>

        </div>

      </section>


      {/* =====================================
          LOGIN CARD
      ====================================== */}

      <section className="login-card">

        {/* Card Header */}
        <div className="card-header">

          {/* <div className="login-icon">
            <LogIn size={23} />
          </div> */}

          <div>
            <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "600" }}>
              Sign In
            </h2>

            <p>
              Enter your account details
            </p>
          </div>

        </div>


        {/* =====================================
            FORM
        ====================================== */}

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          {/* Phone Number */}
          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

          </div>


          {/* Password */}
          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
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


          {/* Remember Me / Forgot Password */}
          <div className="login-options">

            <label className="remember-label">

              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(e.target.checked)
                }
              />

              <span>
                Remember me
              </span>

            </label>

            <button
              type="button"
              className="forgot-button"
              onClick={() =>
                router.push("")
              }
            >
              Forgot Password?
            </button>

          </div>


          {/* Sign In */}
          <button
            type="submit"
            className="sign-in-button"
            disabled={loading}
          >

            {loading ? (
              <>
                <span className="spinner"></span>
                Signing In...
              </>
            ) : (
              <>
                <LogIn size={19} />
                Sign In
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


        {/* Create Account */}
        <div className="register-section">

          <p>
            Don't have a Dearo account?
          </p>

          <button
            type="button"
            className="create-account-button"
  onClick={() => router.push("/register")}
          >
            <UserPlus size={18} />
            Create Account
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

        .login-page {
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

          max-width: 600px;

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
           BRAND
        ====================================== */

        .brand-name {
          margin: 0 0 10px;

          color: rgba(255, 255, 255, 0.7);

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }


        /* =====================================
           HEADING
        ====================================== */

        .top-content h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(34px, 5vw, 48px);

          line-height: 1.2;

          font-weight: 700;
        }


        /* =====================================
           SUBTITLE
        ====================================== */

        .top-subtitle {
          margin: 12px auto 0;

          max-width: 450px;

          color: rgba(255, 255, 255, 0.72);

          font-size: 14px;

          line-height: 1.6;
        }


        /* =====================================
           LOGIN CARD
        ====================================== */

        .login-card {
          width: calc(100% - 40px);

          max-width: 460px;

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

        .login-icon {
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

        .login-form {
          display: flex;

          flex-direction: column;

          gap: 18px;
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

        .form-group input {
          width: 100%;

          height: 50px;

          box-sizing: border-box;

          padding: 0 15px;

          background: #f8fafc;

          border: 1px solid #dfe4ec;

          border-radius: 10px;

          color: #071a3d;

          font-size: 14px;

          outline: none;

          transition: all 0.25s ease;
        }

        .form-group input::placeholder {
          color: #9ca3af;
        }

        .form-group input:focus {
          background: #ffffff;

          border-color: #071a3d;

          box-shadow:
            0 0 0 3px rgba(7, 26, 61, 0.08);
        }


        /* =====================================
           PASSWORD
        ====================================== */

        .password-wrapper {
          position: relative;
        }

        .password-wrapper input {
          padding-right: 48px;
        }

        .password-toggle {
          position: absolute;

          top: 50%;
          right: 14px;

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
           LOGIN OPTIONS
        ====================================== */

        .login-options {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;
        }

        .remember-label {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #6b7280;

          font-size: 12px;

          cursor: pointer;
        }

        .remember-label input {
          width: 15px;
          height: 15px;

          accent-color: #071a3d;

          cursor: pointer;
        }

        .forgot-button {
          padding: 0;

          background: transparent;

          border: none;

          color: #071a3d;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;
        }

        .forgot-button:hover {
          text-decoration: underline;
        }


        /* =====================================
           SIGN IN BUTTON
        ====================================== */

        .sign-in-button {
          width: 100%;

          height: 52px;

          margin-top: 2px;

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

        .sign-in-button:hover:not(:disabled) {
          background: #102c60;

          transform: translateY(-1px);

          box-shadow:
            0 8px 20px rgba(7, 26, 61, 0.18);
        }

        .sign-in-button:disabled {
          opacity: 0.7;

          cursor: not-allowed;
        }


        /* =====================================
           LOADING SPINNER
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
           REGISTER
        ====================================== */

        .register-section {
          text-align: center;
        }

        .register-section p {
          margin: 0 0 12px;

          color: #6b7280;

          font-size: 13px;
        }

        .create-account-button {
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

        .create-account-button:hover {
          background: #f3f6fa;

          transform: translateY(-1px);
        }


        /* =====================================
           FOOTER
        ====================================== */

        .login-footer {
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

          .login-card {
            margin-top: -75px;
          }
        }


        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 480px) {

          .top-section {
            min-height: 350px;

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
            font-size: 30px;
          }

          .top-subtitle {
            font-size: 13px;

            max-width: 320px;
          }

          .login-card {
            width: calc(100% - 30px);

            margin-top: -65px;

            padding: 24px 20px;

            border-radius: 17px;
          }

          .card-header {
            margin-bottom: 22px;
          }

          .login-icon {
            width: 44px;
            height: 44px;

            border-radius: 10px;
          }

          .card-header h2 {
            font-size: 19px;
          }

          .form-group input {
            height: 48px;

            font-size: 14px;
          }

          .login-options {
            align-items: flex-start;
          }

          .forgot-button {
            font-size: 11px;
          }

          .sign-in-button {
            height: 50px;
          }

          .create-account-button {
            height: 47px;
          }

          .login-footer {
            font-size: 10px;

            margin-top: 20px;
          }
        }


        /* =====================================
           VERY SMALL MOBILE
        ====================================== */

        @media (max-width: 360px) {

          .top-section {
            min-height: 335px;
          }

          .login-card {
            width: calc(100% - 24px);

            padding: 22px 17px;
          }

          .top-content h1 {
            font-size: 28px;
          }

          .top-subtitle {
            font-size: 12px;
          }

          .login-options {
            flex-direction: column;

            align-items: flex-start;

            gap: 10px;
          }

          .forgot-button {
            align-self: flex-end;
          }
        }

      `}</style>

    </main>
  );
}