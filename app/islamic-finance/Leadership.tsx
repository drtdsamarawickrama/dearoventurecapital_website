
"use client";

import { useState } from "react";
import {
  UserRound,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   ISLAMIC VENTURE CAPITAL DIRECTORS
========================================================= */

const islamicDirectors = [
  {
    name: "Fairoze Burah",
    role: "Director",
    image: "/images/directors/burah_new.png",
    description:
      "Mr. Fairoze Burah is an accomplished corporate leader, senior lecturer, and management consultant with extensive experience in Islamic Banking and Finance, human resource management, business development, and strategic leadership. He has held senior management positions at leading financial institutions, including Amana Bank PLC, Softlogic Finance PLC, and Excel Global Holdings (Pvt) Limited, contributing to corporate growth, organizational development, and financial sector advancement. He has also played a significant role in developing Islamic Banking education in Sri Lanka as the Founding Course Director and Visiting Lecturer at the Institute of Bankers of Sri Lanka (IBSL), while serving as a consultant and resource person for the Central Bank of Sri Lanka and several leading academic institutions. He holds a Master of Business Administration (MBA) in Human Resource Management from the University of Sri Jayewardenepura. With his extensive corporate, academic, and consultancy experience, he brings valuable expertise and strategic insight to Dearo Islamic Venture Capital Ltd.",  },
  {
    name: "Ahmed Dilshard",
    role: "Director",
    image: "/images/directors/dilshard.jpeg",
    description:
      "Dr. M. H. A. Dilshard is a distinguished banking professional with over 32 years of experience in conventional and Islamic banking, corporate banking, and retail banking. Throughout his career, he has held several senior leadership positions at renowned financial institutions, including MashreqBank, Public Bank, and Merchant Bank. Recognized as a pioneer in Islamic Finance in Sri Lanka, he was among the founding members of Amana Investments Ltd and played a key role in transforming the Merchant Bank of Sri Lanka into an Islamic banking window operation, serving as its Head of Islamic Banking. He holds a Bachelor's Degree in Management from the University of Leicester, an MBA in Business Management from American East Coast University, and a PhD in Management from Selinus University of Science and Literature, Italy. With his extensive industry knowledge and leadership experience, he brings valuable banking expertise and strategic insight to Dearo Islamic Venture Capital Ltd as a Non-Executive Director.",  },
];

/* =========================================================
   LEADERSHIP COMPONENT
========================================================= */

export default function Leadership() {
  const [selectedDirector, setSelectedDirector] =
    useState<number | null>(null);

  return (
    <section className="leadership-section" id="leadership">

      <div className="container">

        {/* =====================================================
            MAIN LEADERSHIP GRID
        ===================================================== */}

        <div className="leadership-grid">

          {/* =====================================================
              LEFT SIDE - LEADERSHIP CONTENT
          ===================================================== */}

          <div className="leadership-content">

            <h2>
              OUR <span>LEADERSHIP</span>
            </h2>

            <div className="heading-accent" />

            <div className="leadership-description">

              <p>
                At <strong>Dearo Islamic Venture Capital Ltd</strong>,
                our leadership is guided by experienced directors
                and Islamic financial guidance. We are committed
                to maintaining responsible investment practices
                while supporting sustainable business growth.
              </p>

              <p>
                Our leadership team works towards promoting
                Sharia-compliant investment principles,
                transparency, meaningful partnerships and
                long-term development.
              </p>

            </div>

            {/* =====================================================
                ISLAMIC ADVISER
            ===================================================== */}

            <div className="leadership-category">

              <div className="category-heading">

                <div className="category-icon">
                  <UserRound size={19} />
                </div>

                <span>ISLAMIC ADVISER</span>

              </div>

              <div className="leader-profile">

                <div className="leader-icon">
                  <UserRound size={23} />
                </div>

                <div className="leader-details">

                  <h3>Ash-Shaikh H. Abdul Nazar</h3>

                  <span>Islamic Adviser</span>

                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT SIDE - LEADERSHIP IMAGE
          ===================================================== */}

          <div className="leadership-image-wrapper">

            <div className="leadership-image">

              <img
                src="/images/small-statues-muslim-male-front-his-big-harem.jpg"
                alt="Dearo Islamic Venture Capital Leadership"
              />

              <div className="leadership-image-overlay" />

              <div className="leadership-image-content">

                <div className="leadership-image-label">
                  DEARO ISLAMIC VENTURE CAPITAL LTD
                </div>

                <div className="leadership-image-line" />

                <h3>
                  Guided by
                  <br />
                  Leadership
                </h3>

                <p>
                  Building responsible partnerships through
                  Islamic financial principles and shared growth.
                </p>

              </div>

            </div>

            {/* DECORATIVE CIRCLES */}

            <div className="image-decoration image-decoration-one" />

            <div className="image-decoration image-decoration-two" />

          </div>

        </div>

        {/* =====================================================
            BOARD OF DIRECTORS - FULL WIDTH
        ===================================================== */}

        <section className="islamic-directors-section">

          <div className="islamic-directors-heading">

            {/* <div className="directors-label">
              <div className="category-icon">
                <Users size={19} />
              </div> */}

              {/* <span>OUR LEADERSHIP TEAM</span> */}
            {/* </div> */}

            <h2>Board of Directors</h2>

            <div className="directors-heading-accent" />

            <p>
              Meet the directors guiding Dearo Islamic Venture
              Capital Ltd towards responsible investment and
              sustainable growth.
            </p>

          </div>

          <div className="islamic-directors-grid">

            {islamicDirectors.map((director, index) => (

              <div
                className="islamic-director-card"
                key={index}
              >

                <div className="islamic-director-image">

                  <img
                    src={director.image}
                    alt={director.name}
                  />

                </div>

                <h3>{director.name}</h3>

                <span className="islamic-director-role">
                  {director.role}
                </span>

                <button
                  type="button"
                  className="islamic-director-button"
                  onClick={() => setSelectedDirector(index)}
                >
                  View Profile
                </button>

              </div>

            ))}

          </div>

        </section>

      </div>

      {/* =====================================================
          DIRECTOR PROFILE POPUP
      ===================================================== */}

      {selectedDirector !== null && (

        <div
          className="islamic-profile-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedDirector(null);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setSelectedDirector(null);
            }
          }}
        >

          <div
            className="islamic-profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="director-profile-title"
          >

            <button
              type="button"
              className="islamic-profile-close"
              onClick={() => setSelectedDirector(null)}
              aria-label="Close profile"
            >
              <X size={23} />
            </button>

            <div className="islamic-profile-inner">

              <div className="islamic-profile-photo">

                <img
                  src={islamicDirectors[selectedDirector].image}
                  alt={islamicDirectors[selectedDirector].name}
                />

              </div>

              <div className="islamic-profile-details">

                <span className="islamic-profile-label">
                  BOARD OF DIRECTORS
                </span>

                <h2 id="director-profile-title">
                  {islamicDirectors[selectedDirector].name}
                </h2>

                <span className="islamic-profile-role">
                  {islamicDirectors[selectedDirector].role}
                </span>

                <div className="islamic-profile-divider" />

                <h3>Profile</h3>

                <p>
                  {islamicDirectors[selectedDirector].description}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          LEADERSHIP STYLES
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .leadership-section {
          position: relative;
          padding: 50px 0;
          background: #f5f8f6;
          overflow: hidden;

          --navy: #071a3a;
          --green: #16834b;
          --red: #ed1c24;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .leadership-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 0.98fr)
            minmax(0, 1.02fr);
          gap: 75px;
          align-items: center;
        }

        .leadership-image-wrapper {
          grid-column: 1;
          grid-row: 1;
        }

        .leadership-content {
          grid-column: 2;
          grid-row: 1;
          max-width: 650px;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .leadership-content h2 {
          margin: 0;
          color: var(--navy);
          font-size: clamp(38px, 4vw, 55px);
          line-height: 1.08;
          letter-spacing: -1.7px;
          font-weight: 800;
        }

        .leadership-content h2 span {
          color: var(--green);
        }

        .heading-accent {
          width: 70px;
          height: 4px;
          margin: 25px 0 28px;
          border-radius: 20px;

          background: linear-gradient(
            90deg,
            var(--red) 0%,
            var(--red) 35%,
            var(--green) 35%,
            var(--green) 100%
          );
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .leadership-description {
          padding-left: 22px;
          border-left: 3px solid #dcece3;
          margin-bottom: 28px;
        }

        .leadership-description p {
          margin: 0 0 15px;
          color: #374151;
          font-size: 15px;
          line-height: 1.85;
          text-align: justify;
          text-justify: inter-word;
        }

        .leadership-description p:last-child {
          margin-bottom: 0;
        }

        .leadership-description strong {
          color: var(--navy);
          font-weight: 700;
        }

        /* =====================================================
           LEADERSHIP CATEGORY
        ===================================================== */

        .leadership-category {
          margin-top: 25px;
        }

        .category-heading {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 13px;
          color: var(--navy);
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .category-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #e8f4ed;
          color: var(--green);
          border: 1px solid #cde5d7;
        }

        /* =====================================================
           LEADER PROFILE - ISLAMIC ADVISER
        ===================================================== */

        .leader-profile {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 13px 16px;
          background: #ffffff;
          border: 1px solid #dde5e0;
          border-radius: 10px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .leader-profile:hover {
          transform: translateX(5px);
          border-color: var(--green);
          box-shadow: 0 8px 22px rgba(7, 26, 58, 0.07);
        }

        .leader-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e8f4ed;
          color: var(--green);
        }

        .leader-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .leader-details h3 {
          margin: 0;
          color: var(--navy);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 750;
        }

        .leader-details span {
          color: var(--green);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        /* =====================================================
           LEADERSHIP IMAGE
        ===================================================== */

        .leadership-image-wrapper {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leadership-image {
          position: relative;
          width: 100%;
          height: 520px;
          border-radius: 28px;
          overflow: hidden;
          background: var(--navy);
          box-shadow: 0 25px 60px rgba(7, 26, 58, 0.18);
          z-index: 2;
        }

        .leadership-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
        }

        .leadership-image:hover img {
          transform: scale(1.04);
        }

        .leadership-image-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            180deg,
            rgba(7, 26, 58, 0.04) 15%,
            rgba(7, 26, 58, 0.15) 40%,
            rgba(7, 26, 58, 0.92) 100%
          );
        }

        .leadership-image-content {
          position: absolute;
          left: 42px;
          right: 42px;
          bottom: 45px;
          z-index: 3;
        }

        .leadership-image-label {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 30px;
          background: rgba(22, 131, 75, 0.92);
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .leadership-image-line {
          width: 55px;
          height: 3px;
          margin: 20px 0 16px;
          background: var(--red);
          border-radius: 10px;
        }

        .leadership-image-content h3 {
          margin: 0 0 15px;
          color: #ffffff;
          font-size: 42px;
          line-height: 1.03;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .leadership-image-content p {
          max-width: 390px;
          margin: 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          line-height: 1.7;
        }

        /* =====================================================
           IMAGE DECORATIONS
        ===================================================== */

        .image-decoration {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }

        .image-decoration-one {
          width: 170px;
          height: 170px;
          top: 10px;
          right: -35px;
          background: var(--green);
          opacity: 0.13;
        }

        .image-decoration-two {
          width: 115px;
          height: 115px;
          bottom: 10px;
          left: -35px;
          background: var(--red);
          opacity: 0.11;
        }

        /* =====================================================
           BOARD OF DIRECTORS
        ===================================================== */

        .islamic-directors-section {
          width: 100%;
          margin-top: 85px;
          padding: 55px 35px;
          background: #ffffff;
          border: 1px solid #e3eae5;
          border-radius: 22px;
        }

        .islamic-directors-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .directors-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          color: var(--navy);
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .islamic-directors-heading h2 {
          color: var(--navy);
          font-size: 34px;
          font-weight: 800;
          margin: 15px 0 10px;
        }

        .directors-heading-accent {
          width: 65px;
          height: 4px;
          margin: 15px auto;
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            var(--red),
            var(--green)
          );
        }

        .islamic-directors-heading p {
          max-width: 650px;
          margin: 0 auto;
          color: #687386;
          font-size: 15px;
          line-height: 1.7;
        }

        /* =====================================================
           DIRECTOR GRID
        ===================================================== */

        .islamic-directors-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 260px));
          justify-content: center;
          gap: 30px;
        }

        .islamic-director-card {
          min-height: 365px;
          padding: 30px 24px;
          background: #ffffff;
          border: 1px solid #e1e8e3;
          border-radius: 18px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 24px rgba(7, 26, 58, 0.06);
          transition: all 0.3s ease;
        }

        .islamic-director-card:hover {
          transform: translateY(-7px);
          border-color: var(--green);
          box-shadow: 0 16px 35px rgba(7, 26, 58, 0.12);
        }

        /* =====================================================
           DIRECTOR IMAGE
        ===================================================== */

        .islamic-director-image {
          width: 175px;
          height: 175px;
          overflow: hidden;
          border-radius: 50%;
          margin-bottom: 23px;
          background: #e8f4ed;
          border: 5px solid #ffffff;
          box-shadow:
            0 0 0 2px rgba(22, 131, 75, 0.2),
            0 10px 25px rgba(7, 26, 58, 0.12);
        }

        .islamic-director-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .islamic-director-card h3 {
          color: var(--navy);
          font-size: 17px;
          font-weight: 750;
          margin: 0 0 10px;
        }

        .islamic-director-role {
          color: var(--green);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 23px;
        }

        /* =====================================================
           PROFILE BUTTON
        ===================================================== */

        .islamic-director-button {
          width: 100%;
          margin-top: auto;
          padding: 10px 15px;
          border: 1px solid var(--navy);
          border-radius: 7px;
          background: #ffffff;
          color: var(--navy);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .islamic-director-button:hover {
          background: var(--green);
          border-color: var(--green);
          color: #ffffff;
        }

        /* =====================================================
           PROFILE POPUP
        ===================================================== */

        .islamic-profile-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(5, 15, 35, 0.78);
          backdrop-filter: blur(6px);
          animation: profileOverlayIn 0.2s ease;
        }

        .islamic-profile-modal {
          position: relative;
          width: min(100%, 850px);
          max-height: 90vh;
          overflow-y: auto;
          background: #ffffff;
          border-radius: 18px;
          border-top: 5px solid var(--green);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
          animation: profileModalIn 0.3s ease;
        }

        .islamic-profile-inner {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 35px;
          padding: 45px;
          align-items: center;
        }

        .islamic-profile-photo {
          width: 240px;
          height: 290px;
          overflow: hidden;
          border-radius: 15px;
          background: #e8f4ed;
        }

        .islamic-profile-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .islamic-profile-label {
          display: inline-block;
          padding: 7px 13px;
          border-radius: 30px;
          background: #e8f4ed;
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 13px;
        }

        .islamic-profile-details h2 {
          color: var(--navy);
          font-size: 27px;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .islamic-profile-details h3 {
          color: var(--green);
          font-size: 16px;
          font-weight: 750;
          margin-bottom: 12px;
        }

        .islamic-profile-details p {
          color: #555f6d;
          font-size: 14px;
          line-height: 1.8;
          text-align: justify;
        }

        .islamic-profile-role {
          color: var(--green);
          font-size: 13px;
          font-weight: 700;
        }

        .islamic-profile-divider {
          width: 100%;
          height: 1px;
          margin: 22px 0;
          background: linear-gradient(
            90deg,
            var(--green),
            var(--red),
            transparent
          );
        }

        .islamic-profile-close {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 5;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          background: var(--navy);
          color: #ffffff;
          cursor: pointer;
          transition: background 0.25s ease;
        }

        .islamic-profile-close:hover {
          background: var(--red);
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes profileOverlayIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes profileModalIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .leadership-section {
            padding: 85px 0;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .leadership-image-wrapper {
            grid-column: 1;
            grid-row: 1;
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
          }

          .leadership-content {
            grid-column: 1;
            grid-row: 2;
            max-width: 800px;
            margin: 0 auto;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .leadership-section {
            padding: 65px 0;
          }

          .container {
            padding: 0 18px;
          }

          .leadership-grid {
            gap: 45px;
          }

          .leadership-content h2 {
            font-size: 36px;
            letter-spacing: -0.8px;
          }

          .leadership-description {
            padding-left: 17px;
          }

          .leadership-description p {
            font-size: 14px;
            line-height: 1.8;
          }

          .leadership-image-wrapper {
            min-height: 455px;
          }

          .leadership-image {
            height: 420px;
            border-radius: 22px;
          }

          .leadership-image-content {
            left: 28px;
            right: 28px;
            bottom: 32px;
          }

          .leadership-image-content h3 {
            font-size: 36px;
          }

          .leadership-image-content p {
            font-size: 13px;
          }

          .islamic-directors-section {
            margin-top: 55px;
            padding: 35px 18px;
          }

          .islamic-directors-heading h2 {
            font-size: 27px;
          }

          .islamic-directors-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
            margin: 0 auto;
            gap: 20px;
          }

          .islamic-profile-inner {
            display: flex;
            flex-direction: column;
            padding: 35px 22px 25px;
            gap: 22px;
          }

          .islamic-profile-photo {
            width: 190px;
            height: 220px;
          }

          .islamic-profile-details {
            width: 100%;
          }

          .islamic-profile-details h2 {
            font-size: 23px;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 450px) {

          .leadership-content h2 {
            font-size: 31px;
          }

          .leadership-image {
            height: 390px;
          }

          .leadership-image-wrapper {
            min-height: 425px;
          }

          .leadership-image-content h3 {
            font-size: 32px;
          }

          .leadership-image-content {
            left: 24px;
            right: 24px;
            bottom: 28px;
          }

          .leader-details h3 {
            font-size: 14px;
          }

          .islamic-director-card {
            padding: 25px 20px;
          }

        }

      `}</style>

    </section>
  );
}
