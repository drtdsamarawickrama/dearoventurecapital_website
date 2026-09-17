
"use client";

import Image from "next/image";
import { useEffect } from "react";

type ProfileModalProps = {
  profile: any;
  type: "director" | "management";
  onClose: () => void;
};

export default function ProfileModal({
  profile,
  type,
  onClose,
}: ProfileModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling while popup is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="profile-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="profile-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-modal-title"
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="profile-modal-close"
          onClick={onClose}
          aria-label="Close profile"
        >
          ×
        </button>

        <div className="profile-modal-inner">
          {/* IMAGE */}
          <div className="profile-modal-image">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              sizes="(max-width: 767px) 230px, 280px"
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>

          {/* DETAILS */}
          <div className="profile-modal-details">
            {/* LABEL */}
            <div className="profile-modal-label">
              {type === "director"
                ? "BOARD OF DIRECTORS"
                : "CORPORATE MANAGEMENT"}
            </div>

            {/* NAME */}
            <h2 id="profile-modal-title">{profile.name}</h2>

            {/* ROLE */}
            <div className="profile-modal-role">
              {Array.isArray(profile.role) ? (
                profile.role.map((role: string, index: number) => (
                  <span key={index}>{role}</span>
                ))
              ) : (
                <span>{profile.role}</span>
              )}
            </div>

            <div className="profile-modal-divider" />

            {/* PROFILE */}
            <div className="profile-modal-section">
              <h3>Profile</h3>

              <p>{profile.description}</p>
            </div>

            {/* DIRECTOR ONLY */}
            {/* {type === "director" && (
              <> */}
                {/* QUALIFICATIONS */}
                {/* {profile.qualifications?.length > 0 && (
                  <div className="profile-modal-section">
                    <h3>Academic &amp; Professional Qualifications</h3>

                    <ul>
                      {profile.qualifications.map(
                        (qualification: string, index: number) => (
                          <li key={index}>{qualification}</li>
                        )
                      )}
                    </ul>
                  </div>
                )} */}

                {/* EXPERIENCE */}
                {/* {profile.experience?.length > 0 && (
                  <div className="profile-modal-section">
                    <h3>Professional Experience</h3>

                    <ul>
                      {profile.experience.map(
                        (experience: string, index: number) => (
                          <li key={index}>{experience}</li>
                        )
                      )}
                    </ul>
                  </div> */}
                {/* )} */}
            {/* )} */}
          {/* </div> */}
        </div>
                </div>

      </div>

      <style jsx>{`
        .profile-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 25px;

          background: rgba(5, 15, 35, 0.76);

          backdrop-filter: blur(8px);

          animation: overlayIn 0.2s ease;
        }

        .profile-modal {
          position: relative;

          width: min(100%, 1000px);
          max-height: 90vh;

          overflow-y: auto;

          background: #ffffff;

          border-radius: 20px;

          border-top: 5px solid #b21f2d;

          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.30);

          animation: modalIn 0.28s ease;
        }

        /* =========================
           INNER
        ========================= */

        .profile-modal-inner {
          display: grid;

          grid-template-columns: 280px 1fr;

          gap: 38px;

          align-items: flex-start;

          padding: 42px;
        }

        /* =========================
           IMAGE
        ========================= */

        .profile-modal-image {
          position: relative;

          width: 280px;
          height: 330px;

          overflow: hidden;

          border-radius: 17px;

          background: #f1f3f6;

          box-shadow:
            0 0 0 2px rgba(178, 31, 45, 0.12),
            0 16px 35px rgba(11, 31, 75, 0.15);
        }

        /* =========================
           DETAILS
        ========================= */

        .profile-modal-details {
          min-width: 0;

          padding-right: 12px;
        }

        /* =========================
           LABEL
        ========================= */

        .profile-modal-label {
          display: inline-flex;

          align-items: center;

          padding: 6px 13px;

          margin-bottom: 12px;

          border-radius: 50px;

          background: #f8e9eb;

          color: #b21f2d;

          font-size: 0.68rem;

          font-weight: 800;

          letter-spacing: 1.1px;
        }

        /* =========================
           NAME
        ========================= */

        .profile-modal-details h2 {
          margin: 0;

          color: #0b1f4b;

          font-size: clamp(1.55rem, 3vw, 2.25rem);

          font-weight: 750;

          line-height: 1.2;
        }

        /* =========================
           ROLE
        ========================= */

        .profile-modal-role {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 12px;

          color: #b21f2d;

          font-size: 0.9rem;

          font-weight: 650;

          line-height: 1.55;
        }

        .profile-modal-role span:not(:last-child)::after {
          content: "•";

          color: #a1a8b2;

          margin-left: 8px;
        }

        /* =========================
           DIVIDER
        ========================= */

        .profile-modal-divider {
          height: 1px;

          margin: 22px 0;

          background: linear-gradient(
            90deg,
            #b21f2d,
            #0b1f4b,
            transparent
          );
        }

        /* =========================
           SECTION
        ========================= */

        .profile-modal-section {
          margin-bottom: 24px;
        }

        .profile-modal-section:last-child {
          margin-bottom: 0;
        }

        .profile-modal-section h3 {
          display: flex;

          align-items: stretch;

          gap: 8px;

          margin: 0 0 10px;

          color: #b21f2d;

          font-size: 0.96rem;

          font-weight: 750;

          line-height: 1.4;
        }

        .profile-modal-section h3::before {
          content: "";

          width: 4px;

          min-width: 4px;

          border-radius: 5px;

          background: #b21f2d;
        }

        .profile-modal-section p {
          margin: 0;

          color: #555f6d;

          font-size: 0.86rem;

          line-height: 1.75;

          text-align: justify;
        }

        .profile-modal-section ul {
          margin: 0;

          padding-left: 20px;
        }

        .profile-modal-section li {
          color: #555f6d;

          font-size: 0.84rem;

          line-height: 1.65;

          margin-bottom: 7px;
        }

        .profile-modal-section li::marker {
          color: #b21f2d;
        }

        /* =========================
           CLOSE BUTTON
        ========================= */

        .profile-modal-close {
          position: absolute;

          top: 16px;
          right: 16px;

          z-index: 5;

          width: 42px;
          height: 42px;

          border: none;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #0b1f4b;

          color: #ffffff;

          font-size: 1.65rem;

          line-height: 1;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .profile-modal-close:hover {
          background: #b21f2d;

          transform: rotate(90deg);
        }

        .profile-modal-close:focus-visible {
          outline: 3px solid rgba(178, 31, 45, 0.3);

          outline-offset: 3px;
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes overlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;

            transform:
              translateY(20px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .profile-modal-inner {
            grid-template-columns: 230px 1fr;

            gap: 28px;

            padding: 34px;
          }

          .profile-modal-image {
            width: 230px;

            height: 290px;
          }

          .profile-modal-section p {
            font-size: 0.82rem;
          }

          .profile-modal-section li {
            font-size: 0.8rem;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 767px) {
          .profile-modal-overlay {
            padding: 12px;
          }

          .profile-modal {
            width: 100%;

            max-height: 94vh;

            border-radius: 17px;
          }

          .profile-modal-inner {
            display: flex;

            flex-direction: column;

            align-items: center;

            gap: 22px;

            padding: 34px 20px 25px;
          }

          .profile-modal-image {
            width: min(230px, 68vw);

            height: min(260px, 68vw);

            flex-shrink: 0;
          }

          .profile-modal-details {
            width: 100%;

            padding-right: 0;
          }

          .profile-modal-label {
            font-size: 0.62rem;

            padding: 5px 10px;
          }

          .profile-modal-details h2 {
            font-size: 1.45rem;

            padding-right: 35px;
          }

          .profile-modal-role {
            font-size: 0.82rem;

            margin-top: 9px;
          }

          .profile-modal-divider {
            margin: 18px 0;
          }

          .profile-modal-section {
            margin-bottom: 20px;
          }

          .profile-modal-section h3 {
            font-size: 0.86rem;
          }

          .profile-modal-section p {
            font-size: 0.79rem;

            line-height: 1.65;
          }

          .profile-modal-section li {
            font-size: 0.77rem;

            line-height: 1.6;
          }

          .profile-modal-close {
            top: 9px;

            right: 9px;

            width: 38px;

            height: 38px;

            font-size: 1.45rem;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 380px) {
          .profile-modal-inner {
            padding: 30px 16px 22px;
          }

          .profile-modal-image {
            width: 180px;

            height: 220px;
          }

          .profile-modal-details h2 {
            font-size: 1.3rem;
          }

          .profile-modal-section p {
            font-size: 0.75rem;
          }

          .profile-modal-section li {
            font-size: 0.74rem;
          }
        }
      `}</style>
    </div>
  );
}

