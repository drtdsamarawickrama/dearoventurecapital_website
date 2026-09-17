"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Handshake,
  Landmark,
  Leaf,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Wakalah",
    subtitle: "Agency-Based Investment",
    icon: Handshake,
    description:
      "Wakalah is an agency-based arrangement where an investor appoints an agent to manage funds in accordance with agreed terms and Shari’ah principles. The arrangement provides clarity on responsibilities, investment activities, and agreed conditions.",
    features: [
      "Agency-based financial structure",
      "Clearly defined roles and responsibilities",
      "Shari’ah-compliant investment activities",
      "Transparent contractual terms",
    ],
  },
  {
    title: "Ijarah",
    subtitle: "Shari’ah-Compliant Leasing",
    icon: Building2,
    description:
      "Ijarah is a leasing arrangement that allows customers to benefit from the use of an asset for an agreed period in exchange for agreed rental payments. The structure is designed to follow applicable Shari’ah principles.",
    features: [
      "Asset-based leasing structure",
      "Agreed rental payments",
      "Defined lease period",
      "Suitable for selected assets and equipment",
    ],
  },
  {
    title: "Murabaha",
    subtitle: "Cost-Plus Sale",
    icon: CircleDollarSign,
    description:
      "Murabaha is a Shari’ah-compliant sale arrangement where the acquisition cost and agreed profit margin are disclosed to the customer. The structure provides transparency around the asset, cost, and selling price.",
    features: [
      "Transparent cost disclosure",
      "Agreed profit margin",
      "Asset-backed transaction",
      "Clear contractual structure",
    ],
  },
  {
    title: "Wadi’ah",
    subtitle: "Safekeeping Arrangement",
    icon: ShieldCheck,
    description:
      "Wadi’ah refers to a safekeeping arrangement in which an asset is entrusted for protection and safekeeping. The arrangement emphasizes responsibility, security, transparency, and compliance with applicable Shari’ah principles.",
    features: [
      "Secure safekeeping arrangement",
      "Transparent terms",
      "Responsible asset handling",
      "Shari’ah-focused structure",
    ],
  },
];

const principles = [
  {
    title: "No Interest",
    description:
      "Financial arrangements are structured in accordance with the Islamic prohibition of interest (riba).",
    icon: CircleDollarSign,
  },
  {
    title: "Asset-Backed",
    description:
      "Where applicable, transactions are connected to identifiable assets, goods, services, or legitimate business activities.",
    icon: Building2,
  },
  {
    title: "Transparency",
    description:
      "Clear contractual terms, responsibilities, pricing, and obligations are emphasized.",
    icon: BookOpen,
  },
  {
    title: "Fairness",
    description:
      "Islamic finance promotes fairness, responsible dealing, and balanced contractual relationships.",
    icon: Scale,
  },
  {
    title: "Ethical Activities",
    description:
      "Financial activities are structured to avoid prohibited and unethical business activities.",
    icon: Leaf,
  },
  {
    title: "Risk Awareness",
    description:
      "Islamic finance recognizes the importance of genuine economic activity, responsibility, and appropriate risk allocation.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is Islamic Finance?",
    answer:
      "Islamic finance is a system of financial services and transactions structured according to Islamic principles. It emphasizes ethical business activity, transparency, fairness, asset-backed transactions where applicable, and the avoidance of interest, excessive uncertainty, and prohibited activities.",
  },
  {
    question: "What are the main principles of Islamic Finance?",
    answer:
      "Key principles include the prohibition of interest (riba), avoidance of excessive uncertainty (gharar) and speculation, ethical investment, transparency, fairness, and appropriate connection to genuine economic activity.",
  },
  {
    question: "What is Wakalah?",
    answer:
      "Wakalah is an agency arrangement. One party appoints another party as an agent to perform specified activities on their behalf under agreed terms and conditions.",
  },
  {
    question: "What is Ijarah?",
    answer:
      "Ijarah is a leasing arrangement under which the owner of an asset provides the right to use that asset for an agreed period in exchange for agreed rental payments, subject to the relevant Shari’ah requirements.",
  },
  {
    question: "What is Murabaha?",
    answer:
      "Murabaha is a sale-based arrangement in which the cost of an asset and the agreed profit margin are disclosed, with the final selling price agreed between the relevant parties.",
  },
  {
    question: "What is Wadi’ah?",
    answer:
      "Wadi’ah refers to a safekeeping arrangement where an asset is entrusted to another party for protection and safekeeping under agreed conditions.",
  },
];

export default function IslamicFinancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="islamic-page">
      {/* =========================
          HERO
      ========================== */}
      <section className="islamic-hero">
        <div className="hero-pattern" />

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="label-line" />
              ISLAMIC FINANCE
            </div>

            <h1>
              Ethical Finance
              <br />
              <span>Guided by Principles.</span>
            </h1>

            <p>
              Explore Shari’ah-compliant financial solutions designed around
              transparency, fairness, ethical business practices, and
              responsible financial relationships.
            </p>

            <a href="#services" className="hero-button">
              Explore Our Services
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="hero-symbol">
            <div className="symbol-ring ring-one" />
            <div className="symbol-ring ring-two" />
            <div className="symbol-center">
              <span>AR</span>
              <small>ISLAMIC<br />FINANCE</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="section-heading">
              <span className="section-tag">OUR APPROACH</span>

              <h2>
                Financial solutions
                <br />
                <span>with purpose.</span>
              </h2>

              <div className="heading-line" />
            </div>

            <div className="intro-text">
              <p>
                Islamic Finance provides an alternative approach to financial
                services based on principles of ethical conduct, transparency,
                fairness, and responsible economic activity.
              </p>

              <p>
                At Dearo Venture Capital, our Islamic Finance services are
                intended to support customers seeking financial solutions
                structured in accordance with Shari’ah principles. Our approach
                focuses on clear agreements, responsible financial practices,
                and solutions that respect the values of our customers.
              </p>

              <p>
                Through suitable Islamic financial structures, we aim to
                provide practical solutions for personal and business
                requirements while maintaining a strong focus on ethical
                standards and responsible relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HIGHLIGHTS
      ========================== */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <ShieldCheck size={27} />
              </div>
              <div>
                <h3>Shari’ah Focused</h3>
                <p>
                  Financial structures designed with applicable Islamic
                  principles in mind.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Scale size={27} />
              </div>
              <div>
                <h3>Transparent</h3>
                <p>
                  Clear terms and responsibilities to support informed
                  financial decisions.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <Users size={27} />
              </div>
              <div>
                <h3>Customer Focused</h3>
                <p>
                  Solutions developed around practical personal and business
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================== */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="center-heading">
            <span className="section-tag">OUR SERVICES</span>

            <h2>
              Islamic Finance
              <span> Solutions</span>
            </h2>

            <p>
              Explore financial structures based on established Islamic
              finance concepts and ethical financial practices.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-top">
                    <div className="service-number">
                      0{index + 1}
                    </div>

                    <div className="service-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="service-content">
                    <span>{service.subtitle}</span>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <div className="feature-list">
                      {service.features.map((feature) => (
                        <div className="feature-item" key={feature}>
                          <CheckCircle2 size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          PRINCIPLES
      ========================== */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-header">
            <div>
              <span className="section-tag light-tag">CORE PRINCIPLES</span>

              <h2>
                Built around
                <br />
                <span>ethical finance.</span>
              </h2>
            </div>

            <p>
              Islamic Finance is based on principles that encourage
              transparency, ethical activity, responsible transactions, and
              fairness between parties.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <div className="principle-card" key={principle.title}>
                  <div className="principle-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="principle-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          RESPONSIBLE FINANCE
      ========================== */}
      <section className="responsible-section">
        <div className="container">
          <div className="responsible-grid">
            <div className="responsible-visual">
              <div className="visual-box">
                <div className="visual-circle">
                  <Sparkles size={35} />
                </div>

                <span>ETHICAL</span>
                <strong>FINANCE</strong>
                <small>WITH PURPOSE</small>
              </div>
            </div>

            <div className="responsible-content">
              <span className="section-tag">RESPONSIBLE FINANCE</span>

              <h2>
                A different approach
                <br />
                <span>to financial solutions.</span>
              </h2>

              <p>
                Islamic Finance connects financial activity with ethical and
                responsible principles. Rather than focusing only on financial
                outcomes, Islamic financial structures consider the nature of
                the transaction, the underlying activity, and the rights and
                responsibilities of the parties involved.
              </p>

              <div className="responsible-points">
                <div>
                  <CheckCircle2 size={19} />
                  <span>Clear and transparent agreements</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Ethical and responsible transactions</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Customer-focused financial solutions</span>
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  <span>Respect for Shari’ah principles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SHARIAH GOVERNANCE
      ========================== */}
      <section className="governance-section">
        <div className="container">
          <div className="governance-card">
            <div className="governance-icon">
              <Landmark size={35} strokeWidth={1.6} />
            </div>

            <div className="governance-content">
              <span className="section-tag">SHARI’AH GOVERNANCE</span>

              <h2>
                Guidance, oversight
                <br />
                <span>&amp; accountability.</span>
              </h2>

              <p>
                Islamic financial products and services require appropriate
                Shari’ah oversight to ensure that their structures and
                processes remain aligned with applicable Islamic principles.
                Dearo Venture Capital is committed to maintaining appropriate
                governance and professional oversight for its Islamic Finance
                activities.
              </p>

              <div className="scholars">
                <div className="scholar">
                  <div className="scholar-icon">SN</div>
                  <div>
                    <strong>Sheikh Abdul Nazar</strong>
                    <span>Shari’ah Scholar</span>
                  </div>
                </div>

                <div className="scholar">
                  <div className="scholar-icon">MM</div>
                  <div>
                    <strong>Sheikh Murshid Munsif</strong>
                    <span>Shari’ah Scholar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================== */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-intro">
              <span className="section-tag">FAQ</span>

              <h2>
                Frequently Asked
                <br />
                <span>Questions</span>
              </h2>

              <p>
                Learn more about Islamic Finance, its principles, and the
                financial structures commonly used to provide Shari’ah-
                compliant solutions.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "active" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                    >
                      <span>
                        <b>{String(index + 1).padStart(2, "0")}</b>
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={20}
                        className={isOpen ? "rotate" : ""}
                      />
                    </button>

                    <div
                      className={`faq-answer ${
                        isOpen ? "answer-open" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="islamic-cta">
        <div className="cta-decoration decoration-one" />
        <div className="cta-decoration decoration-two" />

        <div className="container cta-container">
          <div>
            <span className="section-tag light-tag">
              ISLAMIC FINANCE
            </span>

            <h2>
              Explore financial solutions
              <br />
              <span>aligned with your values.</span>
            </h2>

            <p>
              Speak with our team to learn more about our Islamic Finance
              services and available solutions.
            </p>
          </div>

          <a href="/contact" className="cta-button">
            Contact Us
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      {/* =========================
          STYLES
      ========================== */}
      <style jsx>{`
        .islamic-page {
          --navy: #071a33;
          --navy-dark: #041226;
          --red: #c81e2b;
          --red-dark: #a91522;
          --white: #ffffff;
          --off-white: #f7f8fa;
          --text: #172033;
          --muted: #687386;
          --border: #e3e6eb;
          background: var(--white);
          color: var(--text);
          overflow: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* HERO */

        .islamic-hero {
          min-height: 610px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 80% 40%,
              rgba(200, 30, 43, 0.12),
              transparent 30%
            ),
            linear-gradient(
              120deg,
              #041226 0%,
              #071a33 55%,
              #0a2343 100%
            );
          color: white;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.14;
          background-image:
            linear-gradient(
              30deg,
              transparent 12%,
              rgba(255,255,255,0.08) 12.5%,
              transparent 13%
            ),
            linear-gradient(
              150deg,
              transparent 12%,
              rgba(255,255,255,0.08) 12.5%,
              transparent 13%
            );
          background-size: 90px 90px;
          pointer-events: none;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 70px;
          padding-top: 70px;
          padding-bottom: 70px;
        }

        .hero-content {
          max-width: 690px;
        }

        .hero-label,
        .section-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--red);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .label-line {
          width: 32px;
          height: 2px;
          background: var(--red);
        }

        .hero-content h1 {
          margin: 25px 0 25px;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .hero-content h1 span {
          color: #e9edf4;
        }

        .hero-content p {
          max-width: 650px;
          margin: 0 0 35px;
          color: #cbd3df;
          font-size: 18px;
          line-height: 1.75;
        }

        .hero-button,
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 23px;
          background: var(--red);
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .hero-button:hover,
        .cta-button:hover {
          background: white;
          color: var(--navy);
          transform: translateY(-3px);
        }

        .hero-symbol {
          width: 310px;
          height: 310px;
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .symbol-ring {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.22);
          transform: rotate(45deg);
        }

        .ring-one {
          width: 220px;
          height: 220px;
        }

        .ring-two {
          width: 275px;
          height: 275px;
          border-color: rgba(200,30,43,0.55);
          transform: rotate(45deg) scale(0.85);
        }

        .symbol-center {
          width: 145px;
          height: 145px;
          border: 1px solid rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(5px);
          transform: rotate(45deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .symbol-center span,
        .symbol-center small {
          transform: rotate(-45deg);
        }

        .symbol-center span {
          font-size: 35px;
          font-weight: 800;
          color: var(--red);
        }

        .symbol-center small {
          margin-top: 3px;
          font-size: 8px;
          line-height: 1.4;
          letter-spacing: 2px;
          color: #dce2eb;
        }

        /* INTRO */

        .intro-section {
          padding: 110px 0;
          background: white;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 90px;
          align-items: start;
        }

        .section-heading h2,
        .center-heading h2,
        .responsible-content h2,
        .faq-intro h2 {
          margin: 18px 0 20px;
          font-size: clamp(35px, 4vw, 54px);
          line-height: 1.08;
          letter-spacing: -1.7px;
          color: var(--navy);
        }

        .section-heading h2 span,
        .center-heading h2 span,
        .responsible-content h2 span,
        .faq-intro h2 span {
          color: var(--red);
        }

        .heading-line {
          width: 65px;
          height: 4px;
          background: var(--red);
        }

        .intro-text p {
          margin: 0 0 20px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.85;
        }

        /* HIGHLIGHTS */

        .highlights-section {
          padding: 0 0 100px;
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 35px 30px;
          border-right: 1px solid var(--border);
        }

        .highlight-card:last-child {
          border-right: none;
        }

        .highlight-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8e9eb;
          color: var(--red);
        }

        .highlight-card h3 {
          margin: 3px 0 7px;
          color: var(--navy);
          font-size: 17px;
        }

        .highlight-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 13px;
        }

        /* SERVICES */

        .services-section {
          padding: 110px 0;
          background: var(--off-white);
        }

        .center-heading {
          max-width: 720px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .center-heading .section-tag {
          justify-content: center;
        }

        .center-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.75;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .service-card {
          position: relative;
          padding: 35px;
          background: white;
          border: 1px solid var(--border);
          min-height: 420px;
          transition: 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(200,30,43,0.4);
          box-shadow: 0 20px 50px rgba(7,26,51,0.09);
        }

        .service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 35px;
        }

        .service-number {
          color: #aeb6c3;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .service-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy);
          color: white;
          transition: 0.3s ease;
        }

        .service-card:hover .service-icon {
          background: var(--red);
          transform: rotate(-5deg);
        }

        .service-content > span {
          color: var(--red);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .service-content h3 {
          margin: 10px 0 15px;
          color: var(--navy);
          font-size: 31px;
        }

        .service-content p {
          margin: 0 0 22px;
          color: var(--muted);
          line-height: 1.75;
          font-size: 14px;
        }

        .feature-list {
          display: grid;
          gap: 9px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #3f4858;
          font-size: 13px;
        }

        .feature-item svg {
          color: var(--red);
          flex-shrink: 0;
        }

        .service-arrow {
          position: absolute;
          right: 32px;
          bottom: 28px;
          color: #b3bac5;
        }

        /* PRINCIPLES */

        .principles-section {
          padding: 110px 0;
          background: var(--navy);
          color: white;
        }

        .principles-header {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 100px;
          align-items: end;
          margin-bottom: 60px;
        }

        .light-tag {
          color: #ef6670;
        }

        .principles-header h2 {
          margin: 18px 0 0;
          color: white;
          font-size: clamp(36px, 4vw, 54px);
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .principles-header h2 span {
          color: #ef6670;
        }

        .principles-header > p {
          margin: 0;
          color: #bfc9d7;
          line-height: 1.8;
          font-size: 15px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.14);
          border-left: 1px solid rgba(255,255,255,0.14);
        }

        .principle-card {
          min-height: 250px;
          padding: 30px;
          position: relative;
          border-right: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
          transition: 0.3s ease;
        }

        .principle-card:hover {
          background: rgba(255,255,255,0.04);
        }

        .principle-number {
          position: absolute;
          top: 25px;
          right: 28px;
          color: rgba(255,255,255,0.22);
          font-size: 12px;
          font-weight: 700;
        }

        .principle-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          color: #ef6670;
          border: 1px solid rgba(239,102,112,0.4);
        }

        .principle-card h3 {
          margin: 0 0 10px;
          color: white;
          font-size: 18px;
        }

        .principle-card p {
          margin: 0;
          color: #aeb9c8;
          font-size: 13px;
          line-height: 1.7;
        }

        /* RESPONSIBLE */

        .responsible-section {
          padding: 110px 0;
          background: white;
        }

        .responsible-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 90px;
          align-items: center;
        }

        .responsible-visual {
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(
              135deg,
              rgba(7,26,51,0.98),
              rgba(7,26,51,0.88)
            );
          position: relative;
          overflow: hidden;
        }

        .responsible-visual::before,
        .responsible-visual::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(255,255,255,0.15);
          transform: rotate(45deg);
        }

        .responsible-visual::before {
          top: -100px;
          left: -100px;
        }

        .responsible-visual::after {
          bottom: -100px;
          right: -100px;
        }

        .visual-box {
          position: relative;
          z-index: 2;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .visual-circle {
          width: 65px;
          height: 65px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--red);
          color: white;
          border-radius: 50%;
        }

        .visual-box span {
          font-size: 12px;
          letter-spacing: 4px;
          color: #c7d0dc;
        }

        .visual-box strong {
          color: white;
          font-size: 31px;
          line-height: 1;
          margin: 5px 0 8px;
        }

        .visual-box small {
          color: #ef6670;
          letter-spacing: 3px;
          font-size: 9px;
        }

        .responsible-content > p {
          color: var(--muted);
          line-height: 1.8;
          font-size: 15px;
          margin: 0 0 28px;
        }

        .responsible-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .responsible-points div {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          color: var(--navy);
          font-weight: 600;
        }

        .responsible-points svg {
          color: var(--red);
          flex-shrink: 0;
        }

        /* GOVERNANCE */

        .governance-section {
          padding: 0 0 110px;
          background: white;
        }

        .governance-card {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 40px;
          padding: 60px;
          background: #f7f8fa;
          border-left: 5px solid var(--red);
        }

        .governance-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy);
          color: white;
        }

        .governance-content h2 {
          margin: 17px 0 18px;
          color: var(--navy);
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
        }

        .governance-content h2 span {
          color: var(--red);
        }

        .governance-content > p {
          max-width: 820px;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .scholars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 35px;
        }

        .scholar {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px;
          background: white;
          border: 1px solid var(--border);
        }

        .scholar-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #f8e9eb;
          color: var(--red);
          font-size: 12px;
          font-weight: 800;
        }

        .scholar strong,
        .scholar span {
          display: block;
        }

        .scholar strong {
          color: var(--navy);
          font-size: 14px;
          margin-bottom: 4px;
        }

        .scholar span {
          color: var(--muted);
          font-size: 11px;
        }

        /* FAQ */

        .faq-section {
          padding: 110px 0;
          background: var(--off-white);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 100px;
          align-items: start;
        }

        .faq-intro p {
          max-width: 420px;
          margin: 0;
          color: var(--muted);
          line-height: 1.8;
          font-size: 14px;
        }

        .faq-list {
          border-top: 1px solid var(--border);
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
        }

        .faq-question {
          width: 100%;
          border: none;
          background: transparent;
          padding: 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          color: var(--navy);
          text-align: left;
          font-size: 15px;
          font-weight: 700;
        }

        .faq-question span {
          display: flex;
          align-items: center;
          gap: 17px;
        }

        .faq-question b {
          color: var(--red);
          font-size: 11px;
          letter-spacing: 1px;
        }

        .faq-question svg {
          flex-shrink: 0;
          transition: 0.3s ease;
        }

        .faq-question svg.rotate {
          transform: rotate(180deg);
          color: var(--red);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: 0.3s ease;
        }

        .faq-answer p {
          overflow: hidden;
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .answer-open {
          grid-template-rows: 1fr;
          padding-bottom: 24px;
        }

        /* CTA */

        .islamic-cta {
          position: relative;
          overflow: hidden;
          padding: 85px 0;
          background: var(--navy);
          color: white;
        }

        .cta-container {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .islamic-cta h2 {
          margin: 17px 0 14px;
          font-size: clamp(34px, 4vw, 53px);
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .islamic-cta h2 span {
          color: #ef6670;
        }

        .islamic-cta p {
          margin: 0;
          color: #b8c3d2;
          font-size: 14px;
          line-height: 1.7;
        }

        .cta-button {
          flex-shrink: 0;
        }

        .cta-decoration {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.08);
          transform: rotate(45deg);
        }

        .decoration-one {
          width: 300px;
          height: 300px;
          right: -120px;
          top: -100px;
        }

        .decoration-two {
          width: 180px;
          height: 180px;
          left: -80px;
          bottom: -70px;
        }

        /* RESPONSIVE */

        @media (max-width: 1000px) {
          .hero-container {
            gap: 30px;
          }

          .hero-symbol {
            width: 240px;
            height: 240px;
          }

          .intro-grid,
          .responsible-grid {
            gap: 50px;
          }

          .principles-header {
            gap: 50px;
          }

          .faq-grid {
            gap: 50px;
          }
        }

        @media (max-width: 800px) {
          .islamic-hero {
            min-height: auto;
          }

          .hero-container {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .hero-symbol {
            align-self: center;
            margin-top: 20px;
          }

          .intro-grid,
          .responsible-grid,
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }

          .highlight-card {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }

          .highlight-card:last-child {
            border-bottom: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .principles-header {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .governance-card {
            grid-template-columns: 1fr;
            padding: 40px;
          }

          .cta-container {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 560px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .islamic-hero {
            padding: 0;
          }

          .hero-content h1 {
            font-size: 45px;
            letter-spacing: -2px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .hero-symbol {
            transform: scale(0.82);
            margin: -15px auto -15px;
          }

          .intro-section,
          .services-section,
          .principles-section,
          .responsible-section,
          .faq-section {
            padding: 75px 0;
          }

          .highlights-section {
            padding-bottom: 75px;
          }

          .section-heading h2,
          .center-heading h2,
          .responsible-content h2,
          .faq-intro h2 {
            font-size: 38px;
          }

          .service-card {
            padding: 27px;
            min-height: auto;
          }

          .service-content h3 {
            font-size: 28px;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }

          .principle-card {
            min-height: auto;
          }

          .responsible-visual {
            min-height: 350px;
          }

          .responsible-points {
            grid-template-columns: 1fr;
          }

          .governance-card {
            padding: 30px 25px;
          }

          .scholars {
            grid-template-columns: 1fr;
          }

          .islamic-cta {
            padding: 70px 0;
          }

          .islamic-cta h2 {
            font-size: 36px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}