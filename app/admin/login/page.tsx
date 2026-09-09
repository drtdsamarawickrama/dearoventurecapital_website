"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      // Login successful
      router.replace("/admin/dashboard");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">

        {/* Logo */}
        <div className="admin-logo">
          <ShieldCheck size={34} />
        </div>

        {/* Heading */}
        <div className="admin-login-heading">
          <span>DEARO VENTURE CAPITAL</span>

          <h1>Admin Login</h1>

          <p>
            Sign in to manage investment and funding applications.
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="admin-login-form"
        >

          {/* Username */}
          <div className="admin-field">
            <label htmlFor="username">
              Username
            </label>

            <div className="admin-input">
              <User size={19} />

              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="Enter username"
                autoComplete="username"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="admin-field">
            <label htmlFor="password">
              Password
            </label>

            <div className="admin-input">
              <Lock size={19} />

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
                autoComplete="current-password"
                required
                disabled={loading}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (value) => !value
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                disabled={loading}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="admin-error">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  className="spin"
                  size={19}
                />

                Signing in...
              </>
            ) : (
              <>
                <ShieldCheck size={19} />

                Sign In
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="admin-login-footer">
          © 2026 Dearo Venture Capital
        </p>
      </div>

      <style jsx>{`
        .admin-login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;

          background:
            radial-gradient(
              circle at top right,
              rgba(37, 99, 235, 0.16),
              transparent 35%
            ),
            #f5f7fb;
        }

        .admin-login-card {
          width: 100%;
          max-width: 430px;

          padding: 38px;

          background: #ffffff;

          border: 1px solid #e5e7eb;
          border-radius: 22px;

          box-shadow:
            0 20px 60px
            rgba(7, 26, 61, 0.12);
        }

        /* Logo */
        .admin-logo {
          width: 68px;
          height: 68px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0 auto 20px;

          border-radius: 18px;

          background: #071a3d;
          color: #ffffff;

          box-shadow:
            0 10px 25px
            rgba(7, 26, 61, 0.18);
        }

        /* Heading */
        .admin-login-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .admin-login-heading span {
          display: block;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 0.12em;

          color: #2563eb;
        }

        .admin-login-heading h1 {
          margin: 8px 0;

          color: #071a3d;

          font-size: 30px;
          font-weight: 800;
          line-height: 1.2;
        }

        .admin-login-heading p {
          margin: 0;

          color: #64748b;

          font-size: 14px;
          line-height: 1.6;
        }

        /* Form */
        .admin-login-form {
          display: flex;
          flex-direction: column;

          gap: 20px;
        }

        /* Field */
        .admin-field {
          display: flex;
          flex-direction: column;

          gap: 8px;
        }

        .admin-field label {
          color: #334155;

          font-size: 14px;
          font-weight: 700;
        }

        /* Input */
        .admin-input {
          height: 50px;

          display: flex;
          align-items: center;

          gap: 10px;

          padding: 0 14px;

          border: 1px solid #dbe2ea;
          border-radius: 11px;

          background: #f8fafc;

          color: #64748b;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .admin-input:focus-within {
          border-color: #2563eb;

          background: #ffffff;

          box-shadow:
            0 0 0 3px
            rgba(37, 99, 235, 0.1);
        }

        .admin-input input {
          width: 100%;

          border: 0;
          outline: 0;

          background: transparent;

          color: #0f172a;

          font-size: 14px;
        }

        .admin-input input::placeholder {
          color: #94a3b8;
        }

        .admin-input input:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        /* Password button */
        .password-toggle {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 2px;

          border: 0;

          background: transparent;

          color: #64748b;

          cursor: pointer;
        }

        .password-toggle:hover {
          color: #071a3d;
        }

        .password-toggle:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        /* Error */
        .admin-error {
          padding: 12px 14px;

          border-radius: 9px;

          background: #fef2f2;

          border: 1px solid #fecaca;

          color: #b91c1c;

          font-size: 13px;
          line-height: 1.5;
        }

        /* Login button */
        .admin-login-button {
          width: 100%;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border: 0;
          border-radius: 11px;

          background: #071a3d;

          color: #ffffff;

          font-size: 15px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.1s ease;
        }

        .admin-login-button:hover {
          background: #102b5c;
        }

        .admin-login-button:active {
          transform: scale(0.99);
        }

        .admin-login-button:disabled {
          opacity: 0.65;

          cursor: not-allowed;

          transform: none;
        }

        /* Footer */
        .admin-login-footer {
          margin: 26px 0 0;

          text-align: center;

          color: #94a3b8;

          font-size: 12px;
        }

        /* Loading animation */
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

        /* Tablet */
        @media (max-width: 640px) {
          .admin-login-page {
            padding: 18px;
          }

          .admin-login-card {
            max-width: 430px;

            padding: 32px 24px;

            border-radius: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .admin-login-page {
            padding: 14px;
          }

          .admin-login-card {
            padding: 28px 20px;

            border-radius: 18px;
          }

          .admin-logo {
            width: 62px;
            height: 62px;

            margin-bottom: 18px;
          }

          .admin-login-heading {
            margin-bottom: 26px;
          }

          .admin-login-heading h1 {
            font-size: 26px;
          }

          .admin-login-heading p {
            font-size: 13px;
          }

          .admin-login-form {
            gap: 17px;
          }

          .admin-input {
            height: 48px;
          }

          .admin-login-button {
            height: 50px;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .admin-login-card {
            padding: 24px 16px;
          }

          .admin-login-heading h1 {
            font-size: 24px;
          }

          .admin-login-heading span {
            font-size: 9px;
          }
        }
      `}</style>
    </main>
  );
}