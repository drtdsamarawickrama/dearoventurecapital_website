
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   BOARD OF DIRECTORS
========================================================= */

const directors = [
  {
    name: "Mr. K.M.M.Jabir",
    role: ["Chairman", "Independent / Non - Executive Director"],
    image: "/images/directors/jabeer_new.jpg",
    description:
      "Mr. K. M. M. Jabir is a distinguished financial services professional with an accomplished career spanning banking, finance, operations management, and corporate leadership. With decades of experience in Sri Lanka's financial sector, he has earned a reputation for strategic vision, operational excellence, and strong governance practices. He holds a Bachelor of Commerce degree and is a Fellow Member of the Institute of Bankers of Sri Lanka (IBSL). He is also a Finalist of the Chartered Institute of Management Accountants (CIMA), UK, and a Member of the Sri Lanka Institute of Marketing (SLIM), reflecting his multidisciplinary expertise in finance, management, and business strategy. Throughout his career, Mr. Jabir has held several senior leadership positions in leading financial institutions. He currently serves as an Independent Non-Executive Director of SMIB, contributing his extensive industry knowledge and governance expertise. Previously, he served as Executive Director and Chief Executive Officer of Janashakthi Finance PLC and Richard Pieris Finance Ltd, where he played a pivotal role in driving organizational growth, operational transformation, and sustainable business performance. He also held the position of Deputy General Manager – Operations at People’s Leasing PLC, overseeing key operational functions and contributing to the institution's success. As Chairman, Mr. Jabir provides strategic guidance and leadership, fostering a culture of integrity, innovation, and sustainable growth while strengthening stakeholder confidence and corporate governance standards.",
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
      "Mr. Prasanna Sanjeewa Ranasinghe is a dynamic business leader with extensive experience in investment management, finance, marketing, business development, and strategic leadership. As the Managing Director and Chief Executive Officer of Dearo Venture Capital Ltd, he plays a pivotal role in driving the company's vision, growth strategy, and operational excellence while fostering a culture of innovation, entrepreneurship, and sustainable value creation. Armed with a strong academic foundation, Mr. Ranasinghe holds a Master of Business Administration (MBA) and a Bachelor of Business Administration (BBA) in Marketing from the University of Peradeniya. He has further enhanced his professional expertise through a Diploma in Credit Management from the Institute of Bankers of Sri Lanka (IBSL) and a Diploma in Banking and Finance from the Corporate Finance Institute (CFI). Throughout his career, Mr. Ranasinghe has demonstrated exceptional leadership in business strategy, investment planning, market expansion, and stakeholder engagement. His ability to identify emerging opportunities and develop innovative business solutions has contributed significantly to organizational growth and long-term success.As the leader of Dearo Venture Capital Ltd, he is committed to empowering entrepreneurs, supporting business development, and creating sustainable investment opportunities that contribute to economic progress. Under his leadership, the organization continues to strengthen its position as a trusted partner for investors and businesses while promoting responsible growth, corporate governance, and long-term value creation. His vision is centered on building a stronger entrepreneurial ecosystem, fostering innovation, and creating lasting economic impact through strategic investments and business partnerships.",
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
      "Mr. Muditha Welihinda is an experienced Information Technology professional with extensive expertise in IT management, information systems auditing, and technology leadership. He holds an MBA and is a Certified Information Systems Auditor (CISA), USA, and is a member of the British Computer Society, Australian Computer Society, and the Institute of Data Processing Management, UK. Throughout his career, he has held several senior positions across the education, finance, and food production sectors, including Former Director of Highbrow College & Institute, Director / Head of IT at Richard Peiris Finance Ltd, Manager – IT at Radwa Food Productions Ltd, and IT Manager at Food & Fine Pastries Ltd. His diverse professional experience and strong background in technology and information systems enable him to bring valuable expertise, strategic insight, and leadership to his role.",
    qualifications: [
      "MBA",
      "Certified Information Systems Auditor - USA",
      "Member of the British Computer Society",
      "Member of the Australian Computer Society",
      "Member of the Institute of Data Processing Management, UK",
    ],
    experience: [
      "Former Director - Highbrow College & Institute",
      "Director/ Head of IT - Richard Peiris Finance Ltd",
      "Manager - IT, Radwa Food Productions Ltd",
      "IT Manager - Food & Fine pastries Ltd",
    ],
  },

  {
    name: "Mr. Lalith J. Fernando",
    role: ["Independent / Non-Executive Director"],
    image: "/images/directors/lalith_new.jpg",
    description:
      "Mr. Lalith J. Fernando is a financial risk management professional with extensive experience in banking, risk management, compliance, and financial services. He holds a BSc in Statistics from the University of Peradeniya and an MSc in Management from the University of Sri Jayewardenepura, and is a Fellow of the Institute of Bankers of Sri Lanka (IBSL) and a Financial Risk Manager (FRM) certified by the Global Association of Risk Professionals (GARP), USA. He was the first Sri Lankan to obtain the FRM designation in 2012. Throughout his career, he has served in several senior and advisory roles, including Consultant in Risk Management, Consultant and Resource Person at IBSL, Chief Risk Officer / Deputy General Manager at PABC Bank, and Chief Risk Officer / Deputy General Manager at Bank of Ceylon (BOC). His extensive expertise in financial risk management, banking, and compliance brings valuable professional insight and experience to his role as an Independent / Non-Executive Director.",

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
      "Dr. Neil Bogahalanda is an accomplished Human Resources and corporate management professional with extensive experience in strategic HR leadership, organizational development, and professional education. He holds a PhD from MSU, Malaysia, and an MBA, and is a member of the Institute of Certified Management Accountants (ICMA), the Chartered Institute of Personnel Management (CIPM), and the Sri Lanka Institute of Directors (SLID). He is also the recipient of the Lifetime Gold Award presented by the CIPM in recognition of his professional contribution and achievements. Throughout his distinguished career, he has held several senior leadership positions, including President of CIPM, Head of Group HR at Royal Ceramics Lanka PLC, General Manager – HR at Brownes Group, and Assistant General Manager – HR at Sampath Bank. His extensive expertise in human resources, corporate management, and organizational development brings valuable strategic insight and leadership to his role as an Independent / Non-Executive Director.",

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
      "Ms. Shaheena Mohamed is an accomplished legal and compliance professional with extensive experience in corporate governance, legal practice, regulatory compliance, and company secretarial functions. She is an Attorney-at-Law and holds a Professional Diploma in Anti-Money Laundering, an MBA, and a Postgraduate Diploma in Economic Development from the University of Colombo. Throughout her career, she has gained diverse experience in legal, compliance, and corporate governance roles, including serving as an Independent Legal Practitioner, Visiting Lecturer at the Institute of Chartered Corporate Secretaries of Sri Lanka, Deputy General Manager – Compliance & Company Secretary at Sri Lanka Insurance Corporation, and Group Company Secretary at Janashakthi Group. Her extensive knowledge and experience in legal affairs, regulatory compliance, and corporate governance bring valuable professional expertise and strategic insight to her role as an Independent / Non-Executive Director.",

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
      "As Head of HR at Dearo Venture Capital, he brings over 20 years of experience in human resource management, talent development, employee engagement, and organizational transformation. His expertise includes HR strategy, performance management, recruitment, HR technology, and regulatory compliance, supporting a productive, people-focused workplace and sustainable organizational growth.",
  },

  {
    name: "Mr. Minol Hewage",
    role: "Head of Marketing, Communication & Branding",
    image:
      "/images/directors/WhatsApp Image 2026-09-15 at 1.03.52 PM.jpeg",
    description:
      "As Head of Marketing, Communication & Branding at Dearo Venture Capital, he brings extensive experience in brand development, strategic communication, digital marketing, media, and creative strategy. His expertise focuses on strengthening brand presence, engaging target audiences, creating impactful communication, and developing innovative marketing strategies that support business growth, reputation, and long-term success.",
  },

  {
    name: "Mr. Chathura Dissanayaka",
    role: "Chief Manager Business Development",
    image: "/images/directors/chathura.jpg",
    description:
      "Mr. Chathura Dissanayaka leads business development initiatives, focusing on identifying new opportunities, strengthening strategic partnerships, and supporting sustainable business growth. With a strong focus on client relationships and market development, he contributes to expanding the company’s presence while aligning business strategies with organizational objectives and long-term growth plans.",
  },

  {
    name: "Mr. Asitha Gunawardana",
    role: "Chief Manager Business Development",
    image: "/images/directors/asith.jpg",
    description:
      "Mr. Asitha Gunawardana is responsible for driving business development initiatives, identifying new opportunities, and strengthening strategic relationships. He focuses on expanding the company’s market presence, supporting client engagement, and developing sustainable business opportunities. His contribution helps align business development activities with organizational objectives and long-term growth strategies.",
  },

  {
    name: "Mr. Rex Jeroshan",
    role: "Head of Branch operation",
    image: "/images/directors/rex1.jpg",
    description:
      "Mr. Rex Jeroshan oversees branch operations, ensuring efficient daily activities, quality service delivery, and effective coordination across branch functions. He focuses on operational performance, customer satisfaction, and process improvement while supporting organizational standards. His leadership contributes to maintaining smooth branch operations and achieving business objectives through effective management.",
  },

  {
    name: "Mr. Rajitha Bandara",
    role: "Head of Adminstration",
    image: "/images/directors/rajitha.jpg",
    description:
      "Mr. Rajitha Bandara serves as the Head of Administration at Dearo Venture Capital, providing effective leadership across administrative operations and organizational support. He focuses on maintaining efficient processes, coordinating internal functions, strengthening operational standards, and supporting a productive workplace environment, contributing to the company’s overall efficiency, growth, and professional excellence.",
  },

  {
    name: "Mr. Mahesh Gunawardana",
    role: "Head of Audit",
    image: "/images/directors/Mahesh Gunarathna Manager Audit.jpeg",
    description:
      "Mr. Mahesh Gunawardana serves as the Head of Audit at Dearo Venture Capital, overseeing internal audit functions and supporting strong governance, compliance, and risk management practices. He focuses on maintaining effective internal controls, reviewing operational processes, identifying potential risks, and promoting transparency and accountability across the organization to support sustainable business performance.",
  },

  {
    name: "Mrs. Lasanthi Gunawardana",
    role: "Head of Finance",
    image:
      "/images/directors/ChatGPT Image Sep 15, 2026, 12_14_57 PM.png",
    description:
      "Ms. Lasanthi Maheshika Gunawardhana serves as the Head of Finance at Dearo Venture Capital Limited. She is responsible for overseeing financial operations, planning, reporting, budgeting, and financial controls. Her role supports sound financial management, regulatory compliance, accurate reporting, and effective decision-making while contributing to the company’s sustainable growth and long-term financial objectives.",
  },
];

/* =========================================================
   GOVERNANCE
========================================================= */

const governanceItems = [
  {
    title: "Board Structure",
    shortDescription:
      "Learn about the structure, composition, responsibilities, and oversight of the Board of Directors.",
    content:
      "Dearo Venture Capital Limited is committed to maintaining an effective Board structure that supports responsible decision-making, strategic direction, accountability, and appropriate oversight of the company’s operations. The Board provides leadership and supervision while promoting transparency and sound corporate practices.",
  },
  {
    title: "Corporate Governance",
    shortDescription:
      "Our framework for responsible leadership, transparency, accountability, and sustainable growth.",
    content:
      "Corporate governance at Dearo Venture Capital Limited is guided by principles of accountability, transparency, integrity, responsible decision-making, and effective oversight. The company seeks to maintain appropriate governance practices that support stakeholder confidence and sustainable long-term growth.",
  },
  {
    title: "Risk Management",
    shortDescription:
      "A structured approach to identifying, assessing, monitoring, and managing business risks.",
    content:
      "Risk management supports the company in identifying and assessing material business and operational risks, implementing appropriate controls, monitoring risk exposure, and taking timely action where required. The objective is to support sound business decisions while protecting the company and its stakeholders.",
  },
  {
    title: "Compliance",
    shortDescription:
      "Commitment to applicable laws, regulations, standards, and responsible business practices.",
    content:
      "Dearo Venture Capital Limited is committed to conducting its business in accordance with applicable laws, regulations, regulatory requirements, internal policies, and recognized standards. Compliance responsibilities form an important part of maintaining the company’s integrity and institutional credibility.",
  },
  {
    title: "Internal Controls",
    shortDescription:
      "Controls designed to support operational effectiveness, accuracy, accountability, and asset protection.",
    content:
      "The company maintains internal control practices designed to support effective operations, reliable information, appropriate authorization, accountability, protection of company assets, and the identification of potential control weaknesses. Internal controls are reviewed and strengthened as business requirements evolve.",
  },
  {
    title: "Ethics",
    shortDescription:
      "Promoting integrity, professionalism, fairness, and responsible conduct across the organization.",
    content:
      "Dearo Venture Capital Limited expects directors, management, employees, and representatives to conduct themselves with integrity, professionalism, fairness, and respect. Ethical business conduct is fundamental to maintaining trust with customers, investors, employees, regulators, and other stakeholders.",
  },
  {
    title: "Conflict of Interest Policy",
    shortDescription:
      "Guidelines for identifying, disclosing, managing, and addressing potential conflicts of interest.",
    content:
      "The company is committed to identifying and appropriately managing actual, potential, or perceived conflicts of interest. Individuals are expected to disclose relevant conflicts and act in the best interests of the company while maintaining transparency and professional integrity.",
  },
  {
    title: "Privacy Policy",
    shortDescription:
      "Our approach to protecting personal information and maintaining responsible data practices.",
    content:
      "Dearo Venture Capital Limited recognizes the importance of protecting personal and confidential information. The company aims to handle information responsibly, maintain appropriate safeguards, and use personal information only for legitimate business and service-related purposes in accordance with applicable requirements.",
  },
  {
    title: "Customer Complaints",
    shortDescription:
      "A structured approach to receiving, reviewing, and responding to customer concerns.",
    content:
      "Dearo Venture Capital Limited values customer feedback and is committed to handling complaints fairly, respectfully, and within appropriate processes. Customer concerns are reviewed with the objective of providing suitable responses, identifying service improvements, and strengthening customer experience.",
  },
  {
    title: "Whistleblowing Policy",
    shortDescription:
      "A confidential mechanism for raising concerns about suspected wrongdoing or unethical conduct.",
    content:
      "The whistleblowing framework supports the responsible reporting of suspected misconduct, unethical behavior, fraud, serious control concerns, or other inappropriate activities. The company encourages concerns to be raised responsibly and aims to handle reported matters with appropriate confidentiality and fairness.",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function DirectorsPage() {
  const [selectedProfile, setSelectedProfile] = useState<{
    type: "director" | "management";
    index: number;
  } | null>(null);

  const [openGovernance, setOpenGovernance] = useState<number | null>(null);

  const openDirectorProfile = (index: number) => {
    setSelectedProfile({
      type: "director",
      index,
    });
  };

  const openManagementProfile = (index: number) => {
    setSelectedProfile({
      type: "management",
      index,
    });
  };

  const closeProfile = () => {
    setSelectedProfile(null);
  };

  const toggleGovernance = (index: number) => {
    setOpenGovernance(openGovernance === index ? null : index);
  };

  /* ESCAPE TO CLOSE */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProfile();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main className="directors-page">
      <section className="container py-5">

        {/* =====================================================
            BOARD OF DIRECTORS
        ===================================================== */}

        <div className="text-center mb-5">
          <div className="section-label">LEADERSHIP</div>

          <h1 className="page-title">
            Board of Directors
          </h1>

          <p className="page-subtitle">
            Strategic leadership guiding Dearo Venture Capital Limited
          </p>
        </div>

        <div className="row justify-content-center g-4 directors-row">
          {directors.map((director, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12"
            >
              <div className="director-card">
                <div className="photo-wrapper">
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

                <h6 className="person-name">
                  {director.name}
                </h6>

                <div className="person-role">
                  {director.role.map((role, roleIndex) => (
                    <div key={roleIndex}>
                      {role}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="profile-button"
                  onClick={() => openDirectorProfile(index)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            CORPORATE MANAGEMENT
        ===================================================== */}

        <div className="management-heading text-center">
          <div className="section-label">
            MANAGEMENT
          </div>

          <h2 className="page-title management-title">
            Corporate Management
          </h2>

          <p className="page-subtitle">
            Experienced professionals supporting our strategic growth
          </p>
        </div>

        <div className="row justify-content-center g-4 management-row">
          {corporateManagement.map((person, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12"
            >
              <div className="director-card management-card">
                <div className="photo-wrapper">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="210px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <h6 className="person-name">
                  {person.name}
                </h6>

                <div className="person-role management-person-role">
                  {person.role}
                </div>

                <button
                  type="button"
                  className="profile-button"
                  onClick={() => openManagementProfile(index)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            GOVERNANCE
        ===================================================== */}

        <section className="corporate-governance-section">
          <div className="governance-heading text-center">
            <div className="governance-label">
              CORPORATE GOVERNANCE
            </div>

            <h2 className="page-title">
              Governance &amp; Responsibility
            </h2>

            <p className="page-subtitle governance-subtitle">
              Our commitment to responsible leadership, transparency,
              accountability, and sustainable business practices.
            </p>
          </div>

          <div className="row g-4 governance-grid">
            {governanceItems.map((item, index) => {
              const isOpen = openGovernance === index;

              return (
                <div
                  key={index}
                  className="col-lg-6 col-md-6 col-12"
                >
                  <div
                    className={`governance-card ${isOpen ? "governance-card-open" : ""
                      }`}
                  >
                    <button
                      type="button"
                      className="governance-card-button"
                      onClick={() => toggleGovernance(index)}
                      aria-expanded={isOpen}
                    >
                      <div className="governance-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="governance-card-text">
                        <div className="governance-title">
                          {item.title}
                        </div>

                        <div className="governance-short">
                          {item.shortDescription}
                        </div>
                      </div>

                      <div
                        className={`governance-arrow ${isOpen ? "arrow-open" : ""
                          }`}
                      >
                        +
                      </div>
                    </button>

                    {isOpen && (
                      <div className="governance-content">
                        <div className="governance-content-line" />

                        <p>{item.content}</p>

                        <button
                          type="button"
                          className="governance-close"
                          onClick={() => toggleGovernance(index)}
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

          <div className="governance-footer">
            <div className="governance-footer-icon">
              ✓
            </div>

            <div>
              <h5>Our Commitment</h5>

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

      {/* =====================================================
          PROFILE POPUP
      ===================================================== */}

      {selectedProfile && (
        <div
          className="profile-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProfile();
            }
          }}
        >
          <div
            className="profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
          >
            <button
              type="button"
              className="profile-modal-close"
              onClick={closeProfile}
              aria-label="Close profile"
            >
              ×
            </button>

            {selectedProfile.type === "director" ? (
              <div className="profile-modal-inner">
                <div className="profile-modal-image">
                  <Image
                    src={directors[selectedProfile.index].image}
                    alt={directors[selectedProfile.index].name}
                    fill
                    sizes="280px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>

                <div className="profile-modal-details">
                  <div className="profile-modal-label">
                    BOARD OF DIRECTORS
                  </div>

                  <h2 id="profile-title">
                    {directors[selectedProfile.index].name}
                  </h2>

                  <div className="profile-modal-role">
                    {directors[selectedProfile.index].role.map(
                      (role, index) => (
                        <span key={index}>{role}</span>
                      )
                    )}
                  </div>

                  <div className="profile-modal-divider" />

                  <div className="profile-modal-section">
                    <h3>Profile</h3>

                    <p>
                      {directors[selectedProfile.index].description}
                    </p>
                  </div>

                  <div className="profile-modal-section">
                    {/* <h3>
                      Academic &amp; Professional Qualifications
                    </h3> */}

                    {/* <ul>
                      {directors[
                        selectedProfile.index
                      ].qualifications.map((qualification, index) => (
                        <li key={index}>
                          {qualification}
                        </li>
                      ))}
                    </ul> */}
                  </div>

                  <div className="profile-modal-section">
                    {/* <h3>Professional Experience</h3> */}

                    {/* <ul>
                      {directors[
                        selectedProfile.index
                      ].experience.map((experience, index) => (
                        <li key={index}>
                          {experience}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="profile-modal-inner">
                <div className="profile-modal-image">
                  <Image
                    src={
                      corporateManagement[
                        selectedProfile.index
                      ].image
                    }
                    alt={
                      corporateManagement[
                        selectedProfile.index
                      ].name
                    }
                    fill
                    sizes="280px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>

                <div className="profile-modal-details">
                  <div className="profile-modal-label">
                    CORPORATE MANAGEMENT
                  </div>

                  <h2 id="profile-title">
                    {
                      corporateManagement[
                        selectedProfile.index
                      ].name
                    }
                  </h2>

                  <div className="profile-modal-role">
                    <span>
                      {
                        corporateManagement[
                          selectedProfile.index
                        ].role
                      }
                    </span>
                  </div>

                  <div className="profile-modal-divider" />

                  <div className="profile-modal-section">
                    <h3>Profile</h3>

                    <p>
                      {
                        corporateManagement[
                          selectedProfile.index
                        ].description
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`
        .directors-page {
          --navy: #0b1f4b;
          --navy-light: #17366d;
          --red: #b21f2d;
          --red-dark: #941a26;
          --red-light: #f8e9eb;
          --text: #555f6d;
          --border: #e1e5ea;

          background: #f8f9fa;
          min-height: 100vh;
        }

        /* =====================================================
           HEADINGS
        ===================================================== */

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

        /* =====================================================
           DIRECTOR / MANAGEMENT CARDS
        ===================================================== */

        .director-card {
          height: 100%;
          min-height: 375px;

          padding: 28px 22px;

          background: #ffffff;

          border: 1px solid #e4e8ee;
          border-radius: 18px;

          text-align: center;

          display: flex;
          flex-direction: column;
          align-items: center;

          box-shadow:
            0 8px 24px rgba(11, 31, 75, 0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .director-card:hover {
          transform: translateY(-7px);

          border-color: rgba(178, 31, 45, 0.35);

          box-shadow:
            0 16px 35px rgba(11, 31, 75, 0.12);
        }

        .management-card {
          min-height: 375px;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .photo-wrapper {
          position: relative;

          width: 190px;
          height: 190px;

          margin: 0 auto 20px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #f1f3f6;

          box-shadow:
            0 0 0 5px #ffffff,
            0 0 0 7px rgba(178, 31, 45, 0.14),
            0 12px 28px rgba(11, 31, 75, 0.12);

          overflow: hidden;
        }

        /* =====================================================
           NAME
        ===================================================== */

        .person-name {
          font-size: 1rem;
          font-weight: 600;
          color: #111;
          margin-top: 8px;

          margin: 0 0 9px;
        }

        /* =====================================================
           ROLE
        ===================================================== */

        .person-role {
          color: var(--navy);

font-size: 0.85rem;
          line-height: 1.5;

          min-height: 63px;

          display: flex;
          align-items: flex-start;
          justify-content: center;

          text-align: center;

          font-weight: 600;
          line-height: 1.5;

          min-height: 63px;

          display: flex;
          flex-direction: column;
          justify-content: flex-start;


          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-bottom: 20px;
        }

        .management-person-role {
          min-height: 50px;
        }

        /* =====================================================
           VIEW PROFILE BUTTON
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
        

        /* =====================================================
           MANAGEMENT HEADING
        ===================================================== */

        .management-heading {
          margin-top: 80px;
          margin-bottom: 42px;
        }

        .management-title {
          margin-bottom: 12px;
        }

        .management-row {
          margin-bottom: 80px;
        }

        /* =====================================================
           PROFILE MODAL
        ===================================================== */

        .profile-modal-overlay {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;
          justify-content: center;

          padding: 25px;

          background: rgba(5, 15, 35, 0.74);

          backdrop-filter: blur(7px);

          animation: overlayIn 0.2s ease;
        }

        .profile-modal {
          position: relative;

          width: min(100%, 1000px);

          max-height: 90vh;

          overflow-y: auto;

          background: #ffffff;

          border-radius: 20px;

          border-top: 5px solid var(--red);

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.3);

          animation: profileModalIn 0.3s ease;
        }

        .profile-modal-inner {
          display: grid;

          grid-template-columns: 280px 1fr;

          gap: 38px;

          align-items: flex-start;

          padding: 42px;
        }

        .profile-modal-image {
          position: relative;

          width: 280px;
          height: 330px;

          overflow: hidden;

          border-radius: 16px;

          background: #f2f4f7;

          box-shadow:
            0 0 0 2px rgba(178, 31, 45, 0.14),
            0 14px 35px rgba(11, 31, 75, 0.15);
        }

        .profile-modal-details {
          min-width: 0;

          padding-right: 10px;
        }

        .profile-modal-label {
          display: inline-flex;

          padding: 6px 12px;

          margin-bottom: 12px;

          border-radius: 50px;

          background: var(--red-light);

          color: var(--red);

          font-size: 0.68rem;
          font-weight: 800;

          letter-spacing: 1.1px;
        }

        .profile-modal-details h2 {
          margin: 0;

          color: var(--navy);

          font-size: clamp(1.5rem, 3vw, 2.25rem);

          font-weight: 750;

          line-height: 1.2;
        }

        .profile-modal-role {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 12px;

          color: var(--red);

          font-size: 0.9rem;

          font-weight: 650;

          line-height: 1.55;
        }

        .profile-modal-role span:not(:last-child)::after {
          content: " •";

          color: #a1a8b2;

          margin-left: 7px;
        }

        .profile-modal-divider {
          height: 1px;

          margin: 22px 0;

          background:
            linear-gradient(
              90deg,
              var(--red),
              var(--navy),
              transparent
            );
        }

        .profile-modal-section {
          margin-bottom: 23px;
        }

        .profile-modal-section h3 {
          display: flex;

          gap: 8px;

          margin: 0 0 10px;

          color: var(--red);

          font-size: 0.95rem;

          font-weight: 750;
        }

        .profile-modal-section h3::before {
          content: "";

          width: 4px;

          min-width: 4px;

          border-radius: 5px;

          background: var(--red);
        }

        .profile-modal-section p,
        .profile-modal-section li {
          color: var(--text);

          font-size: 0.86rem;

          line-height: 1.75;
        }

        .profile-modal-section p {
          margin: 0;

          text-align: justify;
        }

        .profile-modal-section ul {
          margin: 0;

          padding-left: 20px;
        }

        .profile-modal-section li {
          margin-bottom: 6px;
        }

        .profile-modal-section li::marker {
          color: var(--red);
        }

        /* =====================================================
           CLOSE BUTTON
        ===================================================== */

        .profile-modal-close {
          position: absolute;

          top: 17px;
          right: 17px;

          z-index: 5;

          width: 42px;
          height: 42px;

          border: 0;

          border-radius: 50%;

          background: var(--navy);

          color: #ffffff;

          font-size: 1.7rem;

          line-height: 1;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .profile-modal-close:hover {
          background: var(--red);

          transform: rotate(90deg);
        }

        /* =====================================================
           GOVERNANCE
        ===================================================== */

        .corporate-governance-section {
          margin-top: 30px;

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
        }

        .governance-subtitle {
          max-width: 720px;

          margin-left: auto;
          margin-right: auto;

          line-height: 1.7;
        }

        .governance-grid {
          max-width: 1100px;

          margin: 0 auto;
        }

        .governance-card {
          height: 100%;

          background: #ffffff;

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
            0 12px 28px rgba(11, 31, 75, 0.1);
        }

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

          transition: background 0.25s ease;
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

        .governance-content {
          padding: 0 24px 24px;

          animation: governanceOpen 0.3s ease;
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

          cursor: pointer;
        }

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
           ANIMATIONS
        ===================================================== */

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

        @keyframes overlayIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
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

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1199px) and (min-width: 768px) {
          .director-card,
          .management-card {
            min-height: 360px;
          }

          .photo-wrapper {
            width: 180px;
            height: 180px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {
          .profile-modal-overlay {
            padding: 14px;
          }

          .profile-modal {
            max-height: 92vh;

            border-radius: 16px;
          }

          .profile-modal-inner {
            display: flex;

            flex-direction: column;

            align-items: center;

            gap: 22px;

            padding: 30px 22px 26px;
          }

          .profile-modal-image {
            width: min(230px, 72vw);

            height: min(260px, 72vw);
          }

          .profile-modal-details {
            width: 100%;

            padding-right: 0;
          }

          .profile-modal-details h2 {
            font-size: 1.45rem;
          }

          .profile-modal-section p,
          .profile-modal-section li {
            font-size: 0.8rem;

            line-height: 1.65;
          }

          .profile-modal-close {
            top: 10px;

            right: 10px;

            width: 38px;

            height: 38px;

            font-size: 1.45rem;
          }

          .director-card,
          .management-card {
            min-height: auto;
          }

          .management-heading {
            margin-top: 60px;

            margin-bottom: 35px;
          }

          .management-row {
            margin-bottom: 60px;
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
           SMALL MOBILE
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

          .director-card,
          .management-card {
            padding: 22px !important;

            border-radius: 15px;
          }

          .photo-wrapper {
            width: 160px;

            height: 160px;
          }

          .person-name {
            font-size: 0.95rem;
          }

          .person-role {
            font-size: 0.82rem;

            min-height: auto;

            margin-bottom: 18px;
          }

          .profile-button {
            font-size: 0.82rem;

            padding: 8px 16px;
          }

          .management-heading {
            margin-top: 50px;

            margin-bottom: 30px;
          }

          .management-row {
            margin-bottom: 50px;
          }

          .corporate-governance-section {
            padding-bottom: 15px;
          }

          .governance-heading {
            margin-bottom: 30px;
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

          .director-card,
          .management-card {
            padding: 18px !important;
          }

          .person-name {
            font-size: 0.9rem;
          }

          .person-role {
            font-size: 0.75rem;
          }

          .profile-button {
            font-size: 0.76rem;

            padding: 7px 14px;
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

