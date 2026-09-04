
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, LogIn } from "lucide-react";

export default function InvestorPage() {
  const router = useRouter();

  return (
    <main className="application-page">

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => router.back()}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <section className="application-container">

        {/* Small Label */}
        <p className="application-label">
          DEARO VENTURE CAPITAL
        </p>

        {/* Heading */}
        <h1>
          Apply as an <span>Customer</span>
        </h1>

        {/* Description */}
        <p className="application-description">
          Join Dearo as an customer and explore opportunities.
        </p>

        {/* Account Box */}
        <div className="account-box">

          <h2>
            Continue Your Application
          </h2>

          <p>
            To continue with your customer application,
            please login to your Dearo account.
          </p>

          {/* Login Button */}
          <div className="button-container">

            <button
              className="primary-button"
              onClick={() =>
                router.push("/login")
              }
            >
              <LogIn size={19} />
              Login
              <ArrowRight size={17} />
            </button>

          </div>

          {/* Account Text */}
          <p className="account-text">
            If you have an account, 
          </p>

          {/* Continue Application Button */}
          <button
            className="continue-button"
            onClick={() =>
              router.push("/portal/customer/application/")
            }
          >
            Continue Fill Customer Application
            <ArrowRight size={18} />
          </button>

        </div>

        {/* Bottom Text */}
        <p className="bottom-text">
          Your account information will be used to automatically
          fill your customer application.
        </p>

      </section>

      <style jsx>{`

        .application-page {
          min-height: 100vh;
          width: 100%;
          background: #f7f9fc;
          color: #071a3d;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          box-sizing: border-box;
        }

        /* BACK BUTTON */

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

        /* MAIN CONTAINER */

        .application-container {
          width: 100%;
          max-width: 650px;
          text-align: center;
          margin: 0 auto;
        }

        /* LABEL */

        .application-label {
          margin: 0 0 12px;

          color: #718096;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 2.5px;
        }

        /* HEADING */

        .application-container h1 {
          margin: 0;

          color: #071a3d;

          font-size: clamp(34px, 5vw, 52px);

          line-height: 1.2;

          font-weight: 700;
        }

        .application-container h1 span {
          color: #071a3d;
        }

        /* DESCRIPTION */

        .application-description {
          max-width: 570px;

          margin: 20px auto 35px;

          color: #666666;

          font-size: 16px;

          line-height: 1.7;
        }

        /* ACCOUNT BOX */

        .account-box {
          width: 100%;

          background: #ffffff;

          border: 1px solid #e4e8ef;

          border-radius: 18px;

          padding: 35px;

          box-sizing: border-box;

          box-shadow:
            0 15px 45px rgba(7, 26, 61, 0.08);
        }

        .account-box h2 {
          margin: 0 0 12px;

          color: #071a3d;

          font-size: 25px;

          font-weight: 700;
        }

        .account-box p {
          max-width: 500px;

          margin: 0 auto 28px;

          color: #6b7280;

          font-size: 15px;

          line-height: 1.7;
        }

        /* BUTTON CONTAINER */

        .button-container {
          display: flex;

          justify-content: center;

          gap: 14px;

          flex-wrap: wrap;
        }

        /* LOGIN BUTTON */

        .primary-button {
          min-height: 50px;

          padding: 13px 25px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

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

        .primary-button:hover {
          background: #102c60;

          transform: translateY(-2px);
        }

        /* ACCOUNT TEXT */

        .account-text {
          margin: 18px auto 22px !important;

          color: #8a94a6 !important;

          font-size: 13px !important;

          line-height: 1.5 !important;
        }

        /* CONTINUE APPLICATION BUTTON */

        .continue-button {
          width: 100%;

          min-height: 52px;

          padding: 14px 20px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          color: #071a3d;

          background: #ffffff;

          border: 1px solid #071a3d;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .continue-button:hover {
          background: #071a3d;

          color: #ffffff;

          transform: translateY(-2px);
        }

        /* BOTTOM TEXT */

        .bottom-text {
          margin: 25px 0 0;

          color: #8a94a6;

          font-size: 13px;
        }

        /* TABLET */

        @media (max-width: 768px) {

          .application-page {
            padding: 80px 20px 50px;
          }

          .back-button {
            top: 20px;
            left: 20px;
          }

          .application-description {
            font-size: 15px;
          }

          .account-box {
            padding: 30px 25px;
          }

        }

        /* MOBILE */

        @media (max-width: 480px) {

          .application-page {
            padding: 75px 15px 40px;
          }

          .back-button {
            top: 15px;
            left: 15px;
          }

          .application-container h1 {
            font-size: 34px;
          }

          .application-description {
            font-size: 14px;

            line-height: 1.6;
          }

          .account-box {
            padding: 27px 20px;

            border-radius: 15px;
          }

          .account-box h2 {
            font-size: 22px;
          }

          .account-box p {
            font-size: 14px;
          }

          .primary-button {
            width: 100%;
          }

          .continue-button {
            width: 100%;

            font-size: 13px;
          }

          .bottom-text {
            font-size: 12px;
          }

        }

      `}</style>

    </main>
  );
}

