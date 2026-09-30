"use client";

import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection";
import { useState } from "react";

const faqs = [
  {
    question: "What is Dearo Venture Capital Ltd?",
    answer:
      "Dearo Venture Capital Ltd is a diversified investment and business-development organization focused on creating sustainable value for individuals, entrepreneurs, SMEs and corporate partners across Sri Lanka. The company aims to connect capital with business opportunities while supporting sustainable growth and economic development.",
  },

  {
    question: "What is an Equity Investment?",
    answer:
      "An equity investment means investing capital in exchange for an ownership interest or shares in a company, subject to the specific structure and terms of the investment agreement. The investor's potential return is linked to the performance and value of the underlying business and the applicable terms of the investment.",
  },

  {
    question: "How does the Dearo Equity Investment model work?",
    answer:
      "Dearo's investment approach is designed to connect capital with growth opportunities. Depending on the specific investment structure, investors participate in opportunities associated with businesses and ventures supported by Dearo. The exact investment amount, ownership structure, return mechanism, investment period and applicable conditions are explained to investors before they make an investment decision.",
  },

  {
    question: "Who can invest with Dearo Venture Capital?",
    answer:
      "Investment opportunities may be suitable for individuals and other eligible investors, subject to the applicable investment terms, eligibility requirements and due-diligence procedures. Our investment team can explain the available opportunities and the requirements applicable to each investor.",
  },

  {
    question: "What is the minimum investment amount?",
    answer:
       `
      <p>The minimum investment amount can vary depending on the particular investment opportunity
and its structure.</p>

      <p>
        For the most accurate information, please contact our investment team for the currently
available investment options.
      </p>
    `,
  },

  {
    question: "What kind of businesses does Dearo focus on?",
    answer: `
      <p>Dearo operates across a diversified range of sectors, including:</p>

      <ul>
        <li>Agriculture &amp; Plantation</li>
        <li>Engineering &amp; Construction</li>
        <li>Education &amp; Training</li>
        <li>Seafood and Export-Oriented Businesses</li>
        <li>Information Technology</li>
        <li>Islamic Financial Services</li>
      </ul>

      <p>
        The company states that diversification and investment across
        high-potential sectors form part of its investment philosophy.
      </p>
    `,
  },

  {
    question: "Why does Dearo focus on SMEs and entrepreneurs?",
    answer:
      "SMEs and entrepreneurs can play an important role in economic development, employment and innovation. Dearo&#39;s mission is to connect capital with opportunity and support businesses with resources required for growth.",
  },
  {
    question: "How can my investment contribute to business growth?",
    answer:
      "Capital can help businesses expand operations, develop products or services, improve infrastructure, enter new markets and pursue growth opportunities.",
  },
  {
    question: "Does Dearo invest in only one industry?",
    answer:
      "No. Dearo's business portfolio spans multiple sectors, including agriculture, engineering, education, IT and seafood-related businesses. This diversified approach forms part of the company&#39;s stated investment philosophy."
  },
  {
    question: "How does Dearo support the businesses it works with?",
    answer:
      "Dearo aims to provide businesses with access to capital, strategic partnerships, business-development support and resources required for growth. Its stated mission is to connect capital with opportunity and support businesses with the resources required to grow."
  },
  {
    question: "Can I withdraw or sell my investment?",
    answer:
      "This depends on the structure of the investment and the terms of the relevant agreement. For an equity investment, investors should understand the applicable transfer, exit, redemption or liquidity provisions before investing.",
  },
  // {
  //   question: "Why does Dearo focus on SMEs and entrepreneurs?",
  //   answer:
  //     "SMEs and entrepreneurs can play an important role in economic development, employment and innovation. Dearo&#39;s mission is to connect capital with opportunity and support businesses with resources required for growth.",
  // },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* =====================================================
          HERO IMAGE SECTION
      ====================================================== */}
      <section
        className="hero position-relative d-flex align-items-center justify-content-center text-center"
        style={{ height: "60vh" }}
      >
        <Image
          src="/images/con2.png"
          alt="Contact Us Hero"
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Optional dark overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM SECTION
      ====================================================== */}
      <ContactSection />

      {/* =====================================================
          FAQ SECTION
      ====================================================== */}
      <section className="faq-section">
        <div className="faq-container">

          {/* Section Heading */}
          <div className="faq-heading">
            <span>FAQ</span>

            <h2>Frequently Asked Questions</h2>

            <p>
              Find answers to some of the most common questions about
              Dearo Venture Capital.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-answer ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  {/* Render normal text and HTML bullet points */}
                  <div
                    className="faq-answer-content"
                    dangerouslySetInnerHTML={{
                      __html: faq.answer,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOM STYLES
      ====================================================== */}

      <style jsx>{`
        /* ================================
           HERO
        ================================= */

        .hero {
          position: relative;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 6px 15px rgba(0, 0, 0, 0.6);
        }

        .hero-content p {
          font-size: 1.2rem;
          margin: 0;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        /* ================================
           FAQ SECTION
        ================================= */

        .faq-section {
          padding: 90px 20px;
          background: #f8f9fa;
        }

        .faq-container {
          max-width: 950px;
          margin: 0 auto;
        }

        /* Heading */

        .faq-heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-heading span {
          display: inline-block;
          color: #b8943f;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .faq-heading h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1d2939;
          margin: 0 0 15px;
        }

        .faq-heading p {
          max-width: 650px;
          margin: 0 auto;
          color: #667085;
          font-size: 16px;
          line-height: 1.7;
        }

        /* FAQ List */

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.active {
          border-color: #b8943f;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        /* Question */

        .faq-question {
          width: 100%;
          border: none;
          background: transparent;
          padding: 22px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          text-align: left;
          color: #1d2939;
          font-size: 17px;
          font-weight: 600;
        }

        .faq-question:hover {
          color: #b8943f;
        }

        .faq-icon {
          min-width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #f5f1e8;
          color: #b8943f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 400;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-icon {
          background: #b8943f;
          color: white;
        }

        /* Answer */

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition:
            max-height 0.35s ease,
            opacity 0.3s ease;
        }

        .faq-answer.show {
          max-height: 500px;
          opacity: 1;
        }

        /* Answer Content */

        .faq-answer-content {
          padding: 0 25px 22px;
          color: #667085;
          font-size: 15px;
          line-height: 1.8;
        }

        .faq-answer-content p {
          margin: 0 0 12px;
        }

        .faq-answer-content p:last-child {
          margin-bottom: 0;
        }

        .faq-answer-content ul {
          margin: 0 0 15px;
          padding-left: 25px;
        }

        .faq-answer-content li {
          margin-bottom: 6px;
        }

        .faq-answer-content li:last-child {
          margin-bottom: 0;
        }

        /* ================================
           RESPONSIVE
        ================================= */

        @media (max-width: 768px) {
          .hero {
            height: 30vh !important;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 0.9rem;
          }

          .faq-section {
            padding: 60px 15px;
          }

          .faq-heading {
            margin-bottom: 35px;
          }

          .faq-heading h2 {
            font-size: 2rem;
          }

          .faq-heading p {
            font-size: 14px;
          }

          .faq-question {
            padding: 18px;
            font-size: 15px;
          }

          .faq-answer-content {
            padding: 0 18px 18px;
            font-size: 14px;
          }

          .faq-answer-content ul {
            padding-left: 22px;
          }
        }
      `}</style>
    </>
  );
}