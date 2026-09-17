
"use client";

import Image from "next/image";
import { useState } from "react";

const directors = [
  {
    name: "Mr. K.M.M.Jabir",
    role: [
      "Chairman",
      "Independent / Non - Executive Director",
    ],
    image: "/images/directors/jabeer_new.jpg",

    description:
      "Mr. K.M.M. Jabir is an experienced financial services professional with extensive expertise in banking, finance, operations, and corporate leadership.",

    qualifications: [
      "Bachelor of Commerce Fellow Member - IBSL",
      "Finalist - Chartered Institute of Management Accountants (CIMA) - UK",
      "Member of SLIM",
    ],

    experience: [
      "Independent Non-Executive Director - SMIB (currently)",
      "Former Executive Director/ CEO- Janashakthi Finance PLC",
      "Former Executive Director/ CEO- Richard Pieris Finance Ltd",
      "DGM - Operations - People Leasing PLC",
    ],
  },

  {
    name: "Mr. Prasanna Sanjeewa",
    role: ["Non Independent / Executive Director"],
    image: "/images/directors/prasanna_new.jpg",

    description:
      "Mr. Prasanna Sanjeewa Ranasinghe is a senior business leader with experience in investment, finance, marketing, and strategic management. He currently serves as the Managing Director and Chief Executive Officer of Dearo Venture Capital Ltd.",

    qualifications: [
      "MBA",
      "BBA in Marketing - Uni. of Peradeniya",
      "Diploma in Credit Management - IBSL",
      "Diploma in Banking and Finance - CFI",
    ],

    experience: ["MD , CEO - Dearo Venture Capital Ltd"],
  },

  {
    name: "Mr. Muditha Welihinda",
    role: ["Independent / Non Executive Director"],
    image: "/images/directors/muditha_new.jpg",

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
    role: ["Independent / Non-Executive Director"],
    image: "/images/directors/lalith_new.jpg",

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
    role: ["Independent / Non Executive Director"],
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
    role: ["Independent / Non Executive Director"],
    image: "/images/directors/saheena_new.jpg",

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

/* =========================================================
   CORPORATE MANAGEMENT
========================================================= */

const corporateManagement = [
  {
    name: "Mr. Roshan Jansen",
    role: "Deputy Chief Executive Officer",
    image: "/images/directors/roshan.png",
    description:
      "Mr. Roshan Jansen serves as the Deputy Chief Executive Officer of Dearo Venture Capital Limited. He plays an important role in supporting the company’s strategic direction, business operations, and sustainable growth. With his leadership and management expertise, he contributes to strengthening the company’s performance and advancing its long-term business objectives.",
  },
   {
    name: "Mr. Hemal Manuweera",
    role: "Head of Human Resources",
    image: "/images/directors/ChatGPT Image Sep 15, 2026, 02_51_54 PM.png",
    description:
"As Head of HR at Dearo Venture Capital, he brings over 20 years of experience in human resource management, talent development, employee engagement, and organizational transformation. His expertise includes HR strategy, performance management, recruitment, HR technology, and regulatory compliance, supporting a productive, people-focused workplace and sustainable organizational growth."
  },

 

  {
    name: "Mr. Minol Hewage",
    role: "Head of Marketing, Communication & Branding",
    image: "/images/directors/WhatsApp Image 2026-09-15 at 1.03.52 PM.jpeg",
    description:
"As Head of Marketing, Communication & Branding at Dearo Venture Capital, he brings extensive experience in brand development, strategic communication, digital marketing, media, and creative strategy. His expertise focuses on strengthening brand presence, engaging target audiences, creating impactful communication, and developing innovative marketing strategies that support business growth, reputation, and long-term success."
  },

  {
    name: "Mr. Chathura Dissanayaka",
    role: "Chief Manager Business Development",
    image: "/images/directors/chathura.jpg",
    description:
    "Mr. Chathura Dissanayaka leads business development initiatives, focusing on identifying new opportunities, strengthening strategic partnerships, and supporting sustainable business growth. With a strong focus on client relationships and market development, he contributes to expanding the company’s presence while aligning business strategies with organizational objectives and long-term growth plans."
  },

   {
    name: "Mr. Asitha Gunawardana",
    role: "Chief Manager Business Development",
    image: "/images/directors/asith.jpg",
    description:
    "Mr. Asitha Gunawardana is responsible for driving business development initiatives, identifying new opportunities, and strengthening strategic relationships. He focuses on expanding the company’s market presence, supporting client engagement, and developing sustainable business opportunities. His contribution helps align business development activities with organizational objectives and long-term growth strategies."
  },

   {
    name: "Mr. Rex Jeroshan",
    role: "Head of Branch operation",
    image: "/images/directors/rex1.jpg",
    description:
    "Mr. Rex Jeroshan oversees branch operations, ensuring efficient daily activities, quality service delivery, and effective coordination across branch functions. He focuses on operational performance, customer satisfaction, and process improvement while supporting organizational standards. His leadership contributes to maintaining smooth branch operations and achieving business objectives through effective management."
  },


 


   {
    name: "Mr. Rajitha Bandara",
    role: "Head of Adminstration",
    image: "/images/directors/rajitha.jpg",
    description:
"Mr. Rajitha Bandara serves as the Head of Administration at Dearo Venture Capital, providing effective leadership across administrative operations and organizational support. He focuses on maintaining efficient processes, coordinating internal functions, strengthening operational standards, and supporting a productive workplace environment, contributing to the company’s overall efficiency, growth, and professional excellence."
  },

  {
    name: "Mr. Mahesh Gunawardana",
    role: "Head of Audit",
    image: "/images/directors/Mahesh Gunarathna Manager Audit.jpeg",
    description:
"Mr. Mahesh Gunawardana serves as the Head of Audit at Dearo Venture Capital, overseeing internal audit functions and supporting strong governance, compliance, and risk management practices. He focuses on maintaining effective internal controls, reviewing operational processes, identifying potential risks, and promoting transparency and accountability across the organization to support sustainable business performance."},

  {
    name: "Mrs. Lasanthi Gunawardana",
    role: "Head of Finance",
    image: "/images/directors/ChatGPT Image Sep 15, 2026, 12_14_57 PM.png",
    description:
"Ms. Lasanthi Maheshika Gunawardhana serves as the Head of Finance at Dearo Venture Capital Limited. She is responsible for overseeing financial operations, planning, reporting, budgeting, and financial controls. Her role supports sound financial management, regulatory compliance, accurate reporting, and effective decision-making while contributing to the company’s sustainable growth and long-term financial objectives."
  },

//  {
//     name: "Mrs. Hiranya Samarasinghe",
//     role: "Head of Operations",
//     image: "/images/directors/WhatsApp Image 2026-09-15 at 11.55.15.jpeg",
//     description:
// "Mrs. Hiranya Samarasinghe is an experienced operations and marketing professional with an MBA from West Texas A&M University. She specializes in strategic leadership, digital marketing, business development, data analytics, and AI-driven solutions. Her expertise in operational excellence, team leadership, and performance optimization supports sustainable growth, efficiency, and measurable organizational success."
//   },

  // {
  //   name: "Mr. M.H.M Fazly",
  //   role: "Head of Islamic Services",
  //   image: "/images/directors/fazly.png",
  //   description:
  //     "Mr. Chathura Dissanayaka is responsible for channel development and business expansion initiatives, focusing on strengthening distribution channels, developing strategic relationships, and supporting the company's efforts to expand its market reach.",
  // },
];

/* =========================================================
   CORPORATE GOVERNANCE
========================================================= */

const governanceItems = [
  {
    title: "Board Structure",
    shortDescription:
      "Learn about the structure, composition, responsibilities, and oversight of the Board of Directors.",
    content:
      "Dearo Venture Capital Limited is committed to maintaining an effective Board structure that supports responsible decision-making, strategic direction, accountability, and appropriate oversight of the company’s operations. The Board provides leadership and supervision while promoting transparency and sound corporate practices.",
    icon: "01",
  },

  {
    title: "Corporate Governance",
    shortDescription:
      "Our framework for responsible leadership, transparency, accountability, and sustainable growth.",
    content:
      "Corporate governance at Dearo Venture Capital Limited is guided by principles of accountability, transparency, integrity, responsible decision-making, and effective oversight. The company seeks to maintain appropriate governance practices that support stakeholder confidence and sustainable long-term growth.",
    icon: "02",
  },

  {
    title: "Risk Management",
    shortDescription:
      "A structured approach to identifying, assessing, monitoring, and managing business risks.",
    content:
      "Risk management supports the company in identifying and assessing material business and operational risks, implementing appropriate controls, monitoring risk exposure, and taking timely action where required. The objective is to support sound business decisions while protecting the company and its stakeholders.",
    icon: "03",
  },

  {
    title: "Compliance",
    shortDescription:
      "Commitment to applicable laws, regulations, standards, and responsible business practices.",
    content:
      "Dearo Venture Capital Limited is committed to conducting its business in accordance with applicable laws, regulations, regulatory requirements, internal policies, and recognized standards. Compliance responsibilities form an important part of maintaining the company’s integrity and institutional credibility.",
    icon: "04",
  },

  {
    title: "Internal Controls",
    shortDescription:
      "Controls designed to support operational effectiveness, accuracy, accountability, and asset protection.",
    content:
      "The company maintains internal control practices designed to support effective operations, reliable information, appropriate authorization, accountability, protection of company assets, and the identification of potential control weaknesses. Internal controls are reviewed and strengthened as business requirements evolve.",
    icon: "05",
  },

  {
    title: "Ethics",
    shortDescription:
      "Promoting integrity, professionalism, fairness, and responsible conduct across the organization.",
    content:
      "Dearo Venture Capital Limited expects directors, management, employees, and representatives to conduct themselves with integrity, professionalism, fairness, and respect. Ethical business conduct is fundamental to maintaining trust with customers, investors, employees, regulators, and other stakeholders.",
    icon: "06",
  },

  {
    title: "Conflict of Interest Policy",
    shortDescription:
      "Guidelines for identifying, disclosing, managing, and addressing potential conflicts of interest.",
    content:
      "The company is committed to identifying and appropriately managing actual, potential, or perceived conflicts of interest. Individuals are expected to disclose relevant conflicts and act in the best interests of the company while maintaining transparency and professional integrity.",
    icon: "07",
  },

  {
    title: "Privacy Policy",
    shortDescription:
      "Our approach to protecting personal information and maintaining responsible data practices.",
    content:
      "Dearo Venture Capital Limited recognizes the importance of protecting personal and confidential information. The company aims to handle information responsibly, maintain appropriate safeguards, and use personal information only for legitimate business and service-related purposes in accordance with applicable requirements.",
    icon: "08",
  },

  {
    title: "Customer Complaints",
    shortDescription:
      "A structured approach to receiving, reviewing, and responding to customer concerns.",
    content:
      "Dearo Venture Capital Limited values customer feedback and is committed to handling complaints fairly, respectfully, and within appropriate processes. Customer concerns are reviewed with the objective of providing suitable responses, identifying service improvements, and strengthening customer experience.",
    icon: "09",
  },

  {
    title: "Whistleblowing Policy",
    shortDescription:
      "A confidential mechanism for raising concerns about suspected wrongdoing or unethical conduct.",
    content:
      "The whistleblowing framework supports the responsible reporting of suspected misconduct, unethical behavior, fraud, serious control concerns, or other inappropriate activities. The company encourages concerns to be raised responsibly and aims to handle reported matters with appropriate confidentiality and fairness.",
    icon: "10",
  },
];

export default function DirectorsPage() {
  const [openDirector, setOpenDirector] = useState<number | null>(null);
  const [openManagement, setOpenManagement] = useState<number | null>(null);
  const [openGovernance, setOpenGovernance] = useState<number | null>(null);

  const toggleDirectorProfile = (index: number) => {
    if (openDirector === index) {
      setOpenDirector(null);
    } else {
      setOpenDirector(index);
      setOpenManagement(null);
    }
  };

  const toggleManagementProfile = (index: number) => {
    if (openManagement === index) {
      setOpenManagement(null);
    } else {
      setOpenManagement(index);
      setOpenDirector(null);
    }
  };

  const toggleGovernance = (index: number) => {
    if (openGovernance === index) {
      setOpenGovernance(null);
    } else {
      setOpenGovernance(index);
    }
  };

  return (
    <main className="directors-page">
      <section className="container py-5">

        {/* =====================================================
            BOARD OF DIRECTORS
        ===================================================== */}

        <div className="text-center mb-5">
          <div className="section-label">
            LEADERSHIP
          </div>

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
                  isOpen
                    ? "col-lg-6 col-md-12"
                    : "col-lg-3 col-md-6"
                } col-sm-12`}
              >

                <div
                  className={`director-layout ${
                    isOpen ? "profile-is-open" : ""
                  }`}
                >

                  {/* DIRECTOR CARD */}

                  <div
                    className={`card border-0 shadow-sm text-center director-card p-4 ${
                      isOpen ? "profile-open" : ""
                    }`}
                  >

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

                    <h6 className="fw-semibold mb-1">
                      {director.name}
                    </h6>

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

                    <div className="profile-box">

                      <button
                        type="button"
                        className={`profile-button ${
                          isOpen ? "active" : ""
                        }`}
                        onClick={() =>
                          toggleDirectorProfile(index)
                        }
                      >
                        {isOpen
                          ? "Hide Profile"
                          : "View Profile"}
                      </button>

                    </div>

                  </div>

                  {/* DIRECTOR PROFILE */}

                  {isOpen && (
                    <div className="profile-content">

                      <div className="profile-header">

                        <div className="profile-header-icon">
                          <span>✓</span>
                        </div>

                        <div>
                          <h4>
                            {director.name}
                          </h4>

                          <p>
                            {director.role.join(" • ")}
                          </p>
                        </div>

                      </div>

                      <div className="profile-description">

                        <h5>
                          Profile
                        </h5>

                        <p>
                          {director.description}
                        </p>

                      </div>

                      <div className="profile-section">

                        <h5>
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

                      <div className="profile-section">

                        <h5>
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

        {/* DIVIDER */}

        <div className="section-divider my-5">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>

        {/* =====================================================
            CORPORATE MANAGEMENT
        ===================================================== */}

        <div className="text-center mb-5">

          <div className="section-label">
            LEADERSHIP TEAM
          </div>

          <h2 className="page-title">
            Corporate Management
          </h2>

          <p className="page-subtitle">
            Driving operational excellence across Dearo Venture Capital Limited
          </p>

        </div>

        <div className="row justify-content-center g-4 management-row">

          {corporateManagement.map((member, index) => {

            const isOpen = openManagement === index;

            return (
              <div
                key={index}
                className={`management-column ${
                  isOpen
                    ? "col-lg-6 col-md-12"
                    : "col-lg-3 col-md-6"
                } col-sm-12`}
              >

                <div
                  className={`management-layout ${
                    isOpen
                      ? "management-profile-open"
                      : ""
                  }`}
                >

                  {/* MANAGEMENT CARD */}

                  <div
                    className={`card border-0 shadow-sm text-center director-card management-card p-4 ${
                      isOpen
                        ? "management-card-open"
                        : ""
                    }`}
                  >

                    <div className="mx-auto mb-3 position-relative photo-wrapper">

                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="210px"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center top",
                          borderRadius: "50%",
                        }}
                      />

                    </div>

                    <h6 className="fw-semibold mb-1">
                      {member.name}
                    </h6>

                    <div className="management-role">
                      {member.role}
                    </div>

                    <div className="profile-box">

                      <button
                        type="button"
                        className={`profile-button ${
                          isOpen ? "active" : ""
                        }`}
                        onClick={() =>
                          toggleManagementProfile(index)
                        }
                      >
                        {isOpen
                          ? "Hide Profile"
                          : "View Profile"}
                      </button>

                    </div>

                  </div>

                  {/* MANAGEMENT PROFILE */}

                  {isOpen && (
                    <div className="profile-content management-profile-content">

                      <div className="profile-header">

                        <div className="profile-header-icon">
                          <span>✓</span>
                        </div>

                        <div>

                          <h4>
                            {member.name}
                          </h4>

                          <p>
                            {member.role}
                          </p>

                        </div>

                      </div>

                      <div className="profile-description management-description">

                        <h5>
                          Profile
                        </h5>

                        <p>
                          {member.description}
                        </p>

                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* =====================================================
            CORPORATE GOVERNANCE DIVIDER
        ===================================================== */}

        <div className="section-divider governance-divider my-5">
          <span className="divider-line" />
          <span className="divider-diamond" />
          <span className="divider-line" />
        </div>

        {/* =====================================================
            CORPORATE GOVERNANCE
        ===================================================== */}

        <section className="corporate-governance-section">

          <div className="text-center governance-heading">

            <div className="governance-label">
              GOVERNANCE &amp; ACCOUNTABILITY
            </div>

            <h2 className="page-title">
              Corporate Governance
            </h2>

            <p className="page-subtitle governance-subtitle">
              Our commitment to responsible leadership, transparency,
              accountability, integrity, and sustainable growth.
            </p>

          </div>

          {/* GOVERNANCE CARDS */}

          <div className="row g-4 governance-grid">

            {governanceItems.map((item, index) => {

              const isOpen = openGovernance === index;

              return (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-12"
                >

                  <div
                    className={`governance-card ${
                      isOpen
                        ? "governance-card-open"
                        : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="governance-card-button"
                      onClick={() =>
                        toggleGovernance(index)
                      }
                      aria-expanded={isOpen}
                    >

                      <span className="governance-number">
                        {item.icon}
                      </span>

                      <span className="governance-card-text">

                        <span className="governance-title">
                          {item.title}
                        </span>

                        <span className="governance-short">
                          {item.shortDescription}
                        </span>

                      </span>

                      <span
                        className={`governance-arrow ${
                          isOpen ? "arrow-open" : ""
                        }`}
                      >
                        +
                      </span>

                    </button>

                    {isOpen && (
                      <div className="governance-content">

                        <div className="governance-content-line" />

                        <p>
                          {item.content}
                        </p>

                        <button
                          type="button"
                          className="governance-close"
                          onClick={() =>
                            toggleGovernance(index)
                          }
                        >
                          Close
                        </button>

                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

          {/* GOVERNANCE FOOTER */}

          <div className="governance-footer">

            <div className="governance-footer-icon">
              ✓
            </div>

            <div>

              <h5>
                Our Commitment
              </h5>

              <p>
                Dearo Venture Capital Limited is committed to maintaining
                strong governance practices that promote transparency,
                accountability, ethical conduct, effective risk management,
                and confidence among our customers, investors, employees,
                regulators, and other stakeholders.
              </p>

            </div>

          </div>

        </section>

      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style jsx>{`

        /* =====================================================
           COLOR THEME
        ===================================================== */

        .directors-page {
          --navy: #0B1F4B;
          --navy-light: #17366D;
          --red: #B21F2D;
          --red-dark: #941A26;
          --red-light: #F8E9EB;
          --text: #555F6D;
          --border: #E1E5EA;

          background: #F8F9FA;
          min-height: 100vh;
        }

        /* =====================================================
           TITLES
        ===================================================== */

        .page-title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          color: var(--navy) !important;
          margin-bottom: 12px;
        }

        .page-subtitle {
          font-size: 1rem;
          color: #6c757d;
          margin-top: 6px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 6px 15px;
          margin-bottom: 13px;

          border-radius: 50px;

          background: var(--red-light);
          color: var(--red);

          font-size: 0.68rem;
          font-weight: 700;

          letter-spacing: 1.3px;
        }

        /* =====================================================
           COLUMNS
        ===================================================== */

        .director-column,
        .management-column {
          transition:
            width 0.35s ease,
            flex 0.35s ease;
        }

        /* =====================================================
           LAYOUT
        ===================================================== */

        .director-layout,
        .management-layout {
          width: 100%;
          display: flex;
          align-items: stretch;
          gap: 18px;
          position: relative;
        }

        .director-layout:not(.profile-is-open),
        .management-layout:not(.management-profile-open) {
          display: block;
        }

        .director-layout.profile-is-open,
        .management-layout.management-profile-open {
          display: flex;
          flex-direction: row;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .photo-wrapper {
          width: 210px;
          height: 210px;
          flex-shrink: 0;

          overflow: hidden;
          border-radius: 50%;

          background: #fff;

          border: 4px solid #fff;

          box-shadow:
            0 0 0 2px rgba(178, 31, 45, 0.12),
            0 8px 22px rgba(11, 31, 75, 0.10);
        }

        /* =====================================================
           CARD
        ===================================================== */

        .director-card {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            width 0.35s ease;

          border-radius: 12px;

          background: #fff;

          cursor: default;

          min-height: 390px;
          height: auto !important;

          align-self: flex-start;

          display: flex;
          flex-direction: column;

          width: 100%;

          border-top: 3px solid transparent !important;
        }

        .director-card:hover {
          transform: translateY(-6px);

          border-top-color: var(--red) !important;

          box-shadow:
            0 14px 28px rgba(11, 31, 75, 0.13) !important;
        }

        .management-card {
          min-height: 370px;
        }

        /* =====================================================
           OPEN CARD
        ===================================================== */

        .director-layout.profile-is-open .director-card {
          width: 48%;
          flex-shrink: 0;
        }

        .director-card.profile-open {
          min-height: 390px;
          border-top-color: var(--red) !important;
        }

        .management-layout.management-profile-open
          .management-card {
          width: 48%;
          flex-shrink: 0;
        }

        .management-card-open {
          min-height: 370px;
          border-top-color: var(--red) !important;
        }

        /* =====================================================
           ROW
        ===================================================== */

        .directors-row,
        .management-row {
          align-items: flex-start !important;
        }

        /* =====================================================
           NAME
        ===================================================== */

        h6 {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-top: 8px;
        }

        /* =====================================================
           DIRECTOR ROLE
        ===================================================== */

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

        /* =====================================================
           MANAGEMENT ROLE
        ===================================================== */

        .management-role {
          margin-top: 5px;

          color: var(--navy);

          font-size: 0.85rem;
          line-height: 1.5;

          min-height: 63px;

          display: flex;
          align-items: flex-start;
          justify-content: center;

          text-align: center;

          font-weight: 600;
        }

        /* =====================================================
           PROFILE BOX
        ===================================================== */

        .profile-box {
          margin-top: auto;
          padding-top: 18px;
          width: 100%;
        }

        /* =====================================================
           PROFILE BUTTON
        ===================================================== */

        .profile-button {
          width: 100%;

          border: 1px solid var(--navy);

          background: #fff;

          color: var(--navy);

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
          background: var(--red);

          border-color: var(--red);

          color: #fff;

          box-shadow:
            0 6px 14px rgba(178, 31, 45, 0.22);
        }

        /* =====================================================
           PROFILE CONTENT
        ===================================================== */

        .profile-content {
          width: 52%;
          min-height: 390px;

          padding: 22px;

          background: #fff;

          border: 1px solid var(--border);

          border-top: 3px solid var(--red);

          border-radius: 12px;

          text-align: left;

          cursor: default;

          box-shadow:
            0 10px 25px rgba(11, 31, 75, 0.10);

          animation: profileOpenRight 0.35s ease;

          overflow: hidden;
        }

        .management-profile-content {
          min-height: 370px;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* =====================================================
           PROFILE ANIMATION
        ===================================================== */

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

        /* =====================================================
           PROFILE HEADER
        ===================================================== */

        .profile-header {
          display: flex;
          align-items: center;

          gap: 12px;

          padding-bottom: 16px;
          margin-bottom: 17px;

          border-bottom: 1px solid var(--border);
        }

        .profile-header-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: var(--red);

          color: #fff;

          font-size: 18px;
          font-weight: 700;

          box-shadow:
            0 5px 12px rgba(178, 31, 45, 0.20);
        }

        .profile-header h4 {
          margin: 0;

          color: var(--navy);

          font-size: 1.05rem;
          font-weight: 700;

          line-height: 1.3;
        }

        .profile-header p {
          margin: 3px 0 0;

          color: #8a929c;

          font-size: 0.75rem;
        }

        /* =====================================================
           PROFILE DESCRIPTION
        ===================================================== */

        .profile-description {
          margin-bottom: 18px;
          padding-bottom: 14px;

          border-bottom: 1px solid var(--border);
        }

        .profile-description h5,
        .profile-section h5 {
          color: var(--red);

          font-size: 0.88rem;
          font-weight: 700;

          line-height: 1.4;

          margin-bottom: 9px;

          display: flex;
          align-items: center;
          gap: 7px;
        }

        .profile-description h5::before,
        .profile-section h5::before {
          content: "";

          width: 4px;
          height: 16px;

          border-radius: 5px;

          background: var(--red);

          display: inline-block;
        }

        .profile-description p {
          margin: 0;

          color: var(--text);

          font-size: 0.8rem;
          line-height: 1.65;

          text-align: justify;
        }

        .management-description {
          border-bottom: none;

          margin-bottom: 0;

          padding-bottom: 0;
        }

        /* =====================================================
           PROFILE SECTION
        ===================================================== */

        .profile-section {
          margin-bottom: 18px;
        }

        .profile-section:last-child {
          margin-bottom: 0;
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

        .profile-section li::marker {
          color: var(--red);
        }

        .profile-section li:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .section-divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .divider-line {
          flex: 1;

          height: 2px;

          background: linear-gradient(
            90deg,
            transparent,
            var(--navy),
            var(--red)
          );

          display: block;
        }

        .divider-line:last-child {
          background: linear-gradient(
            90deg,
            var(--red),
            var(--navy),
            transparent
          );
        }

        .divider-diamond {
          width: 9px;
          height: 9px;

          background: var(--red);

          transform: rotate(45deg);

          flex-shrink: 0;

          box-shadow:
            0 0 0 4px var(--red-light);
        }

        /* =====================================================
           CORPORATE GOVERNANCE
        ===================================================== */

        .corporate-governance-section {
          margin-top: 10px;
          padding: 10px 0 30px;
        }

        .governance-heading {
          max-width: 850px;
          margin: 0 auto 42px;
        }

        .governance-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 6px 14px;

          border-radius: 50px;

          background: var(--red-light);

          color: var(--red);

          font-size: 0.7rem;
          font-weight: 700;

          letter-spacing: 1.2px;

          margin-bottom: 14px;

          border: 1px solid rgba(178, 31, 45, 0.15);
        }

        .governance-subtitle {
          max-width: 720px;

          margin-left: auto;
          margin-right: auto;

          line-height: 1.7;
        }

        /* =====================================================
           GOVERNANCE GRID
        ===================================================== */

        .governance-grid {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* =====================================================
           GOVERNANCE CARD
        ===================================================== */

        .governance-card {
          height: 100%;

          background: #fff;

          border: 1px solid #e3e8ef;

          border-radius: 14px;

          overflow: hidden;

          box-shadow:
            0 5px 18px rgba(11, 31, 75, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .governance-card:hover,
        .governance-card-open {
          transform: translateY(-4px);

          border-color: var(--red);

          box-shadow:
            0 12px 28px rgba(11, 31, 75, 0.10);
        }

        /* =====================================================
           GOVERNANCE BUTTON
        ===================================================== */

        .governance-card-button {
          width: 100%;

          min-height: 135px;

          padding: 24px;

          border: 0;

          background: transparent;

          display: flex;

          align-items: center;

          gap: 18px;

          text-align: left;

          cursor: pointer;
        }

        .governance-number {
          width: 48px;
          height: 48px;
          min-width: 48px;

          border-radius: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: var(--navy);

          color: #fff;

          font-size: 0.75rem;
          font-weight: 700;

          letter-spacing: 0.5px;

          box-shadow:
            0 5px 12px rgba(11, 31, 75, 0.15);

          transition:
            all 0.25s ease;
        }

        .governance-card:hover .governance-number,
        .governance-card-open .governance-number {
          background: var(--red);
        }

        .governance-card-text {
          flex: 1;

          display: flex;
          flex-direction: column;

          gap: 7px;
        }

        .governance-title {
          color: var(--navy);

          font-size: 1.02rem;
          font-weight: 700;

          line-height: 1.35;
        }

        .governance-short {
          color: #727b87;

          font-size: 0.79rem;
          line-height: 1.55;
        }

        /* =====================================================
           GOVERNANCE ARROW
        ===================================================== */

        .governance-arrow {
          width: 32px;
          height: 32px;
          min-width: 32px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          background: var(--red-light);

          color: var(--red);

          font-size: 1.25rem;
          font-weight: 400;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .governance-card-button:hover .governance-arrow,
        .arrow-open {
          background: var(--red);

          color: #fff;

          transform: rotate(45deg);
        }

        /* =====================================================
           GOVERNANCE CONTENT
        ===================================================== */

        .governance-content {
          padding: 0 24px 24px;

          animation: governanceOpen 0.3s ease;
        }

        @keyframes governanceOpen {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .governance-content-line {
          width: 100%;
          height: 1px;

          background: #e5e9ef;

          margin-bottom: 18px;
        }

        .governance-content p {
          margin: 0;

          color: #5d6672;

          font-size: 0.82rem;
          line-height: 1.75;

          text-align: justify;
        }

        .governance-close {
          margin-top: 18px;

          border: 0;

          background: transparent;

          color: var(--red);

          font-size: 0.76rem;
          font-weight: 700;

          padding: 0;

          cursor: pointer;
        }

        .governance-close:hover {
          color: var(--navy);

          text-decoration: underline;
        }

        /* =====================================================
           GOVERNANCE FOOTER
        ===================================================== */

        .governance-footer {
          max-width: 1100px;

          margin: 35px auto 0;

          padding: 25px 28px;

          background: var(--navy);

          border-radius: 14px;

          display: flex;

          align-items: flex-start;

          gap: 18px;

          box-shadow:
            0 12px 30px rgba(11, 31, 75, 0.15);

          border-left: 5px solid var(--red);
        }

        .governance-footer-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;

          border-radius: 50%;

          background: var(--red);

          color: #fff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 18px;
          font-weight: 700;

          box-shadow:
            0 5px 12px rgba(178, 31, 45, 0.25);
        }

        .governance-footer h5 {
          color: #fff;

          margin: 0 0 7px;

          font-size: 0.98rem;
          font-weight: 700;
        }

        .governance-footer p {
          color: rgba(255, 255, 255, 0.78);

          margin: 0;

          font-size: 0.78rem;
          line-height: 1.7;
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {

          .director-layout.profile-is-open,
          .management-layout.management-profile-open {
            gap: 20px;
          }

          .director-layout.profile-is-open .director-card,
          .management-layout.management-profile-open
            .management-card {
            width: 46%;
          }

          .director-layout.profile-is-open .profile-content,
          .management-layout.management-profile-open
            .profile-content {
            width: 54%;
          }

        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1199px) and (min-width: 768px) {

          .director-card {
            min-height: 380px;
            margin-bottom: 20px;
          }

          .management-card {
            min-height: 360px;
          }

          .photo-wrapper {
            width: 180px;
            height: 180px;
          }

          .director-role {
            min-height: 60px;
          }

          .management-role {
            min-height: 60px;
          }

          .director-layout.profile-is-open,
          .management-layout.management-profile-open {
            width: 100%;
          }

          .director-layout.profile-is-open .director-card,
          .management-layout.management-profile-open
            .management-card {
            width: 45%;
          }

          .director-layout.profile-is-open .profile-content,
          .management-layout.management-profile-open
            .profile-content {
            width: 55%;
          }

          .governance-card-button {
            min-height: 145px;
          }

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .director-layout.profile-is-open,
          .management-layout.management-profile-open {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .director-layout.profile-is-open .director-card,
          .management-layout.management-profile-open
            .management-card {
            width: 100%;
          }

          .director-layout.profile-is-open .profile-content,
          .management-layout.management-profile-open
            .profile-content {
            width: 100%;
          }

          .profile-content {
            min-height: auto;
          }

          .management-profile-content {
            min-height: auto;
          }

          .governance-card-button {
            min-height: 120px;

            padding: 20px;

            gap: 14px;
          }

          .governance-number {
            width: 42px;
            height: 42px;
            min-width: 42px;

            border-radius: 10px;
          }

          .governance-title {
            font-size: 0.95rem;
          }

          .governance-short {
            font-size: 0.76rem;
          }

          .governance-footer {
            padding: 22px;

            gap: 14px;
          }

        }

        /* =====================================================
           MOBILE 576
        ===================================================== */

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

          .section-label {
            font-size: 0.62rem;
            padding: 5px 12px;
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

          .management-role {
            font-size: 0.82rem;
            min-height: auto;
          }

          .profile-content {
            padding: 16px;

            border-radius: 10px;

            box-shadow:
              0 8px 20px rgba(11, 31, 75, 0.08);
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

          .profile-description h5,
          .profile-section h5 {
            font-size: 0.84rem;
          }

          .profile-description p {
            font-size: 0.76rem;
            line-height: 1.6;
          }

          .profile-section li {
            font-size: 0.76rem;
          }

          .profile-button {
            font-size: 0.82rem;
            padding: 8px 12px;
          }

          /* GOVERNANCE */

          .corporate-governance-section {
            padding-bottom: 15px;
          }

          .governance-heading {
            margin-bottom: 30px;
          }

          .governance-label {
            font-size: 0.62rem;
            letter-spacing: 0.9px;
          }

          .governance-card-button {
            min-height: auto;

            padding: 17px;

            align-items: flex-start;
          }

          .governance-number {
            width: 38px;
            height: 38px;
            min-width: 38px;

            font-size: 0.68rem;
          }

          .governance-card-text {
            gap: 5px;
          }

          .governance-title {
            font-size: 0.9rem;
          }

          .governance-short {
            font-size: 0.72rem;
            line-height: 1.5;
          }

          .governance-arrow {
            width: 28px;
            height: 28px;
            min-width: 28px;

            font-size: 1.05rem;
          }

          .governance-content {
            padding: 0 17px 18px;
          }

          .governance-content p {
            font-size: 0.75rem;
            line-height: 1.65;
          }

          .governance-footer {
            padding: 20px;

            flex-direction: column;
          }

          .governance-footer-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
          }

          .governance-footer p {
            font-size: 0.74rem;
          }

        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

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

          .governance-card-button {
            gap: 10px;
            padding: 15px;
          }

          .governance-number {
            width: 34px;
            height: 34px;
            min-width: 34px;

            font-size: 0.62rem;
          }

          .governance-title {
            font-size: 0.84rem;
          }

          .governance-short {
            font-size: 0.68rem;
          }

        }

      `}</style>

    </main>
  );
}

