"use client";

import Image from "next/image";
import { useState } from "react";

const directors = [
  {
    name: "Mr. K.M.M.Jabir",
    role: [
      "Chairman",
      "Independent / Non - Executive Director",
      
      // "Chairman of the Credit Committee",
    ],
    image: "/images/directors/mr jabeer.png",

    description:
      "Mr. K.M.M. Jabir is an experienced financial services professional with extensive expertise in banking, finance, operations, and corporate leadership.",

    qualifications: [
      "Bachelor of Commerce Fellow Member - IBSL",
      "Finalist - Chartered Institute of Management Accountants (CIMA) - UK",
      "Member of SLIM",
    ],

    experience: [
      "Former Board Director - SMIB",
      "Former Executive Director/ CEO- Janashakthi Finance PLC",
      "Former Executive Director/ CEO- Richard Ariepis Finance Ltd",
      "DGM - Operations - People Leasing PLC",
    ],
  },

  {
    name: "Mr. Prasanna Sanjeewa",
    role: [
      "Non Independent / Executive Director",
    ],
    image: "/images/directors/Picture1-Picsart-AiImageEnhancer.png",

    description:
      "Mr. Prasanna Sanjeewa Ranasinghe is a senior business leader with experience in investment, finance, marketing, and strategic management. He currently serves as the Managing Director and Chief Executive Officer of Dearo Venture Capital Ltd.",

    qualifications: [
      "MBA",
      "BBA in Marketing - Uni. of Peradeniya",
      "Diploma in Credit Management - IBSL",
      "Diploma in Banking and Finance - CFI",
    ],

    experience: [
      "MD , CEO - Dearo Venture Capital Ltd",
    ],
  },

  {
    name: "Mr. Muditha Welihinda",
    role: [
      "Independent / Non Executive Director",
      // "Chairman of the IT Steering Committee",
    ],
    image: "/images/directors/muditha.jpg",

    description:
      "Mr. Muditha Welihinda is an information technology professional with extensive experience in IT management, information systems auditing, and technology leadership.",

    qualifications: [
      "MBA",
      "Certified Information Systems Auditor - USA",
      "Member of the British Computer Society",
      "Member of the Australian Computer Society",
      "Member of the Institute of Data Processing Management, UK",
    ],

    experience: [
      "Former Director - Highbrow College & Institute",
      "Director/ Head of IT - Richard Ariepis Finance Ltd",
      "Manager - IT, Radwa Food Productions Ltd",
      "IT Manager - Food & Fine pastries Ltd",
    ],
  },

  {
    name: "Mr. Lalith J. Fernando",
    role: [
      "Independent / Non-Executive Director",
      // "Chairman of the Risk & Compliance Committee",
    ],
    image: "/images/directors/lalith.jpg",

    description:
      "Mr. Lalith J. Fernando is a financial risk management professional with extensive experience in banking, risk management, compliance, and financial services.",

    qualifications: [
      "BSc in Statistic - Uni. Of Peradeniya",
      "MSc in Management - Uni. Of J'pura",
      "Fellow - IBSL",
      "Financial Risk Manager (FRM) - GARP, USA",
      "First Sri Lankan to obtain the FRM Designation in 2012",
    ],

    experience: [
      "Consultant - Risk Management",
      "Consultant/Resource Person - IBSL",
      "Chief Risk Officer/DGM-PABC Bank",
      "Chief Risk Officer/DGM-BOC",
    ],
  },

  {
    name: "Dr. Neil Bogahalanda",
    role: [
      "Independent / Non Executive Director",
      // "Chairman of the HR Committee",
    ],
    image: "/images/directors/neil bogahalanda.jpg",

    description:
      "Dr. Neil Bogahalanda is an accomplished human resources and corporate management professional with extensive experience in strategic HR leadership, organizational development, and professional education.",

    qualifications: [
      "PHD - MSU, Malaysia",
      "MBA",
      "Member - ICMA",
      "Member - CIPM",
      "Member - SLID",
      "Winner of the Lifetime Gold Award offered by the CIPM",
    ],

    experience: [
      "President - CIPM",
      "Head of Group HR - Royal Ceramics Lanka PLC",
      "GM - HR, Browens Group",
      "AGM - HR, Sampath Bank",
    ],
  },

  {
    name: "Ms. Shaheena Mohamed",
    role: [
      "Independent / Non Executive Director",
    ],
    image: "/images/directors/shaheena.jpg",

    description:
      "Ms. Shaheena Mohamed is a legal and compliance professional with extensive experience in corporate governance, legal practice, regulatory compliance, and company secretarial functions.",

    qualifications: [
      "Attorney at Law",
      "Professional Diploma in Anti-Money Laundering",
      "MBA",
      "Post Graduate Diploma in Economic Development-Uni. of Colombo",
    ],

    experience: [
      "Independent Legal Practitioner",
      "Visiting Lecturer-Institute of Charted Corporate Secretaries of Sri Lanka",
      "DGM-Compliance & Company Secretary - Sri Lanka Insurance Corporation",
      "Group company Secretary - Janashakthi Group",
    ],
  },
];

const corporateManagement = [
  {
    name: "Mr. Terence Yatawara",
    role: "Head of Sales & Marketing",
    image: "/images/directors/terence.png",
  },
  {
    name: "Mr. Rajitha Madushanka",
    role: "Head of Administration",
    image: "/images/directors/rajitha.jpg",
  },
  {
    name: "Mr. Asitha Suranjith",
    role: "Head of Investment",
    image: "/images/management/asith1.jpg",
  },
  {
    name: "Mr. Chathura Dissanayaka",
    role: "Head of Channel Development",
    image: "/images/management/chathura.jpg",
  },
  {
    name: "Mr. Rex",
    role: "Head of Branch Operation",
    image: "/images/directors/rex1.jpg",
  },
];

export default function DirectorsPage() {
  const [openDirector, setOpenDirector] = useState<number | null>(null);

  return (
    <main className="directors-page">
      <section className="container py-5">

        {/* ================= BOARD OF DIRECTORS ================= */}

        <div className="text-center mb-5">
          <h1 className="page-title">
            Board of Directors
          </h1>

          <p className="page-subtitle">
            Strategic leadership guiding Dearo Venture Capital Limited
          </p>
        </div>

        <div className="row justify-content-center g-4 mb-5 directors-row">

          {directors.map((director, index) => {
            const isOpen = openDirector === index;

            return (
              <div
                key={index}
                className={`director-column ${
                  isOpen ? "col-lg-6 col-md-12" : "col-lg-3 col-md-6"
                } col-sm-12`}
              >

                <div
                  className={`director-layout ${
                    isOpen ? "profile-is-open" : ""
                  }`}
                >

                  {/* ================= DIRECTOR CARD ================= */}

                  <div
                    className={`card border-0 shadow-sm text-center director-card p-4 ${
                      isOpen ? "profile-open" : ""
                    }`}
                  >

                    {/* ================= IMAGE ================= */}

                    <div className="mx-auto mb-3 position-relative photo-wrapper">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        sizes="210px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center top",
                          borderRadius: "50%",
                        }}
                      />
                    </div>

                    {/* ================= NAME ================= */}

                    <h6 className="fw-semibold mb-1">
                      {director.name}
                    </h6>

                    {/* ================= ROLE ================= */}

                    <div className="director-role">
                      {director.role.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="role-line"
                        >
                          {role}
                        </div>
                      ))}
                    </div>

                    {/* ================= VIEW PROFILE ================= */}

                    <div className="profile-box">

                      <button
                        type="button"
                        className={`profile-button ${
                          isOpen ? "active" : ""
                        }`}
                        onClick={() => {
                          if (isOpen) {
                            setOpenDirector(null);
                          } else {
                            setOpenDirector(index);
                          }
                        }}
                      >
                        {isOpen ? "Hide Profile" : "View Profile"}
                      </button>

                    </div>

                  </div>

                  {/* ================= RIGHT SIDE PROFILE DETAILS ================= */}

                  {isOpen && (
                    <div className="profile-content">

                      {/* ================= PROFILE HEADER ================= */}

                      <div className="profile-header">

                        <div className="profile-header-icon">
                          <span>✓</span>
                        </div>

                        <div>
                          <h4>{director.name}</h4>
                          {/* <p>Director Profile</p> */}
                        </div>

                      </div>

                      {/* ================= DESCRIPTION ================= */}

                      <div className="profile-description">
                        <h5>
                          <span className="section-icon"></span>
                          Profile
                        </h5>

                        <p>
                          {director.description}
                        </p>
                      </div>

                      {/* ================= QUALIFICATIONS ================= */}

                      <div className="profile-section">

                        <h5>
                          <span className="section-icon"></span>
                          Academic & Professional Qualifications
                        </h5>

                        <ul>
                          {director.qualifications.map(
                            (qualification, qualificationIndex) => (
                              <li key={qualificationIndex}>
                                {qualification}
                              </li>
                            )
                          )}
                        </ul>

                      </div>

                      {/* ================= EXPERIENCE ================= */}

                      <div className="profile-section">

                        <h5>
                          <span className="section-icon"></span>
                          Professional Experience
                        </h5>

                        <ul>
                          {director.experience.map(
                            (experience, experienceIndex) => (
                              <li key={experienceIndex}>
                                {experience}
                              </li>
                            )
                          )}
                        </ul>

                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="section-divider my-5">
          <span className="divider-line" />
        </div>

        {/* ================= CORPORATE MANAGEMENT ================= */}

        <div className="text-center mb-5">

          <h2 className="page-title">
            Corporate Management
          </h2>

          <p className="page-subtitle">
            Driving operational excellence across Dearo Venture Capital Limited
          </p>

        </div>

        <div className="row justify-content-center g-4 management-row">

          {corporateManagement.map((member, index) => (

            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12"
            >

              <div className="card border-0 shadow-sm text-center director-card p-4">

                {/* ================= IMAGE ================= */}

                <div className="mx-auto mb-3 position-relative photo-wrapper">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="210px"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />

                </div>

                {/* ================= NAME ================= */}

                <h6 className="fw-semibold mb-1">
                  {member.name}
                </h6>

                {/* ================= ROLE ================= */}

                <small className="role-badge">
                  {member.role}
                </small>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= STYLES ================= */}

      <style jsx>{`

        /* =====================================
           MAIN PAGE
        ===================================== */

        .directors-page {
          background: #f8f9fa;
          min-height: 100vh;
        }


        /* =====================================
           TITLES
        ===================================== */

        .page-title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          color: #0b1f4b !important;
          margin-bottom: 12px;
        }

        .page-subtitle {
          font-size: 1rem;
          color: #6c757d;
          margin-top: 6px;
        }


        /* =====================================
           DIRECTOR COLUMN
        ===================================== */

        .director-column {
          transition:
            width 0.35s ease,
            flex 0.35s ease;
        }


        /* =====================================
           DIRECTOR LAYOUT
        ===================================== */

        .director-layout {
          width: 100%;
          display: flex;
          align-items: stretch;
          gap: 18px;
          position: relative;
        }

        .director-layout:not(.profile-is-open) {
          display: block;
        }

        .director-layout.profile-is-open {
          display: flex;
          flex-direction: row;
        }


        /* =====================================
           IMAGE
        ===================================== */

        .photo-wrapper {
          width: 210px;
          height: 210px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 50%;
          background: #fff;
        }


        /* =====================================
           CARD
        ===================================== */

        .director-card {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            width 0.35s ease;

          border-radius: 12px;
          background: #fff;
          cursor: pointer;

          min-height: 390px;

          height: auto !important;

          align-self: flex-start;

          display: flex;
          flex-direction: column;

          width: 100%;
        }


        /* =====================================
           OPEN CARD
        ===================================== */

        .director-layout.profile-is-open .director-card {
          width: 48%;
          flex-shrink: 0;
        }


        .director-card.profile-open {
          min-height: 390px;
        }


        .director-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 12px 24px rgba(0, 0, 0, 0.14);
        }


        /* =====================================
           ROW
        ===================================== */

        .directors-row,
        .management-row {
          align-items: flex-start !important;
        }


        /* =====================================
           NAME
        ===================================== */

        h6 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-top: 8px;
        }


        /* =====================================
           DIRECTOR ROLE
        ===================================== */

        .director-role {
          margin-top: 4px;

          color: #6c757d;

          font-size: 0.85rem;

          line-height: 1.5;

          min-height: 63px;

          display: flex;

          flex-direction: column;

          justify-content: flex-start;
        }


        .role-line {
          display: block;
          width: 100%;
        }


        /* =====================================
           CORPORATE ROLE
        ===================================== */

        .role-badge {
          font-size: 0.85rem;

          color: #1a3a6b;

          font-weight: 500;
        }


        /* =====================================
           PROFILE BOX
        ===================================== */

        .profile-box {
          margin-top: auto;

          padding-top: 18px;

          width: 100%;
        }


        /* =====================================
           PROFILE BUTTON
        ===================================== */

        .profile-button {
          width: 100%;

          border: 1px solid #1a3a6b;

          background: #fff;

          color: #1a3a6b;

          padding: 9px 14px;

          border-radius: 7px;

          font-size: 0.85rem;

          font-weight: 600;

          cursor: pointer;

          transition:
            all 0.25s ease;
        }


        .profile-button:hover,
        .profile-button.active {
          background: #1a3a6b;

          color: #fff;

          box-shadow:
            0 5px 12px rgba(26, 58, 107, 0.2);
        }


        /* =====================================
           RIGHT SIDE PROFILE CONTENT
        ===================================== */

        .profile-content {
          width: 52%;

          min-height: 390px;

          padding: 22px;

          background: #fff;

          border: 1px solid #e1e5ea;

          border-radius: 12px;

          text-align: left;

          cursor: default;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.10);

          animation: profileOpenRight 0.35s ease;

          overflow: hidden;
        }


        /* =====================================
           PROFILE ANIMATION
        ===================================== */

        @keyframes profileOpenRight {

          from {
            opacity: 0;
            transform: translateX(-15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        /* =====================================
           PROFILE HEADER
        ===================================== */

        .profile-header {
          display: flex;

          align-items: center;

          gap: 12px;

          padding-bottom: 16px;

          margin-bottom: 17px;

          border-bottom: 1px solid #e1e5ea;
        }


        .profile-header-icon {
          width: 38px;

          height: 38px;

          min-width: 38px;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #1a3a6b;

          color: #fff;

          font-size: 18px;

          font-weight: 700;
        }


        .profile-header h4 {
          margin: 0;

          color: #0b1f4b;

          font-size: 1.05rem;

          font-weight: 700;

          line-height: 1.3;
        }


        .profile-header p {
          margin: 3px 0 0;

          color: #8a929c;

          font-size: 0.75rem;
        }


        /* =====================================
           PROFILE DESCRIPTION
        ===================================== */

        .profile-description {
          margin-bottom: 18px;

          padding-bottom: 14px;

          border-bottom: 1px solid #e1e5ea;
        }


        .profile-description h5 {
          color: #1a3a6b;

          font-size: 0.88rem;

          font-weight: 700;

          line-height: 1.4;

          margin-bottom: 9px;

          display: flex;

          align-items: center;

          gap: 7px;
        }


        .profile-description p {
          margin: 0;

          color: #555f6d;

          font-size: 0.8rem;

          line-height: 1.65;

          text-align: justify;
        }


        /* =====================================
           PROFILE SECTION
        ===================================== */

        .profile-section {
          margin-bottom: 18px;
        }


        .profile-section:last-child {
          margin-bottom: 0;
        }


        .profile-section h5 {
          color: #1a3a6b;

          font-size: 0.88rem;

          font-weight: 700;

          line-height: 1.4;

          margin-bottom: 9px;

          display: flex;

          align-items: flex-start;

          gap: 7px;
        }


        .section-icon {
          font-size: 7px;

          margin-top: 6px;

          flex-shrink: 0;
        }


        .profile-section ul {
          margin: 0;

          padding-left: 18px;
        }


        .profile-section li {
          color: #6c757d;

          font-size: 0.78rem;

          line-height: 1.55;

          margin-bottom: 6px;
        }


        .profile-section li:last-child {
          margin-bottom: 0;
        }


        /* =====================================
           DIVIDER
        ===================================== */

        .section-divider {
          display: flex;

          align-items: center;

          gap: 16px;
        }


        .divider-line {
          flex: 1;

          height: 2px;

          background: linear-gradient(
            90deg,
            transparent,
            #1a3a6b55,
            transparent
          );

          display: block;
        }


        /* =====================================
           LARGE DESKTOP
        ===================================== */

        @media (min-width: 1200px) {

          .director-layout.profile-is-open {
            gap: 20px;
          }

          .director-layout.profile-is-open .director-card {
            width: 46%;
          }

          .director-layout.profile-is-open .profile-content {
            width: 54%;
          }

        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1199px) and (min-width: 768px) {

          .director-card {
            min-height: 380px;

            margin-bottom: 20px;
          }


          .photo-wrapper {
            width: 180px;

            height: 180px;
          }


          .director-role {
            min-height: 60px;
          }


          .director-column.profile-expanded {
            width: 100%;
          }


          .director-layout.profile-is-open {
            width: 100%;
          }


          .director-layout.profile-is-open .director-card {
            width: 45%;
          }


          .director-layout.profile-is-open .profile-content {
            width: 55%;
          }

        }


        /* =====================================
           SMALL TABLET
        ===================================== */

        @media (max-width: 767px) {

          .director-layout.profile-is-open {
            display: flex;

            flex-direction: column;

            gap: 15px;
          }


          .director-layout.profile-is-open .director-card {
            width: 100%;
          }


          .director-layout.profile-is-open .profile-content {
            width: 100%;
          }


          .profile-content {
            min-height: auto;
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 576px) {

          .directors-page {
            padding: 0;
          }


          .page-title {
            font-size: 2rem;
          }


          .page-subtitle {
            font-size: 0.9rem;

            padding: 0 10px;
          }


          .director-card {
            min-height: auto;

            margin-bottom: 0;

            padding: 22px !important;
          }


          .photo-wrapper {
            width: 160px;

            height: 160px;
          }


          .director-role {
            font-size: 0.82rem;

            min-height: auto;
          }


          .profile-content {
            padding: 16px;

            border-radius: 10px;

            box-shadow:
              0 8px 20px rgba(0, 0, 0, 0.08);
          }


          .profile-header {
            padding-bottom: 13px;

            margin-bottom: 14px;
          }


          .profile-header-icon {
            width: 34px;

            height: 34px;

            min-width: 34px;

            font-size: 15px;
          }


          .profile-header h4 {
            font-size: 0.95rem;
          }


          .profile-description {
            margin-bottom: 16px;

            padding-bottom: 12px;
          }


          .profile-description h5 {
            font-size: 0.84rem;
          }


          .profile-description p {
            font-size: 0.76rem;

            line-height: 1.6;
          }


          .profile-section h5 {
            font-size: 0.84rem;
          }


          .profile-section li {
            font-size: 0.76rem;
          }


          .profile-button {
            font-size: 0.82rem;

            padding: 8px 12px;
          }

        }


        /* =====================================
           VERY SMALL MOBILE
        ===================================== */

        @media (max-width: 380px) {

          .photo-wrapper {
            width: 145px;

            height: 145px;
          }


          .director-card {
            padding: 18px !important;
          }


          .profile-content {
            padding: 14px;
          }


          .profile-header h4 {
            font-size: 0.88rem;
          }


          .profile-description p {
            font-size: 0.74rem;
          }


          .profile-section li {
            font-size: 0.73rem;
          }

        }

      `}</style>

    </main>
  );
}