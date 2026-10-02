
"use client";

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
    answer: `
      <p>
        The minimum investment amount can vary depending on the particular investment opportunity
        and its structure.
      </p>

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
      "SMEs and entrepreneurs can play an important role in economic development, employment and innovation. Dearo's mission is to connect capital with opportunity and support businesses with resources required for growth.",
  },

  {
    question: "How can my investment contribute to business growth?",
    answer:
      "Capital can help businesses expand operations, develop products or services, improve infrastructure, enter new markets and pursue growth opportunities.",
  },

  {
    question: "Does Dearo invest in only one industry?",
    answer:
      "No. Dearo's business portfolio spans multiple sectors, including agriculture, engineering, education, IT and seafood-related businesses. This diversified approach forms part of the company's stated investment philosophy.",
  },

  {
    question: "How does Dearo support the businesses it works with?",
    answer:
      "Dearo aims to provide businesses with access to capital, strategic partnerships, business-development support and resources required for growth. Its stated mission is to connect capital with opportunity and support businesses with the resources required to grow.",
  },

  {
    question: "Can I withdraw or sell my investment?",
    answer:
      "This depends on the structure of the investment and the terms of the relevant agreement. For an equity investment, investors should understand the applicable transfer, exit, redemption or liquidity provisions before investing.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <main className="faq-page">

        {/* =====================================================
            FAQ HERO
        ====================================================== */}
        <section className="faq-hero">

          <div className="faq-hero-content">

            <p className="hero-small-text">
              DEARO VENTURE CAPITAL
            </p>

            <h1>
              FREQUENTLY ASKED <span>QUESTIONS</span>
            </h1>

            <p className="hero-description">
              Find answers to common questions about Dearo Venture Capital
              and our investment opportunities.
            </p>

          </div>

        </section>


        {/* =====================================================
            FAQ SECTION
        ====================================================== */}
        <section className="faq-section">

          <div className="faq-container">

            {/* Section Heading */}
            <div className="faq-heading">

              <p className="section-label">
                FAQ
              </p>

              <h2>
                Frequently Asked Questions
              </h2>

              <p className="section-description">
                Find answers to some of the most common questions about
                Dearo Venture Capital.
              </p>

            </div>


            {/* FAQ LIST */}
            <div className="faq-list">

              {faqs.map((faq, index) => (

                <div
                  className={`faq-item ${
                    openIndex === index ? "active" : ""
                  }`}
                  key={index}
                >

                  {/* Question */}
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >

                    <span className="question-text">
                      {faq.question}
                    </span>

                    <span className="faq-icon">
                      {openIndex === index ? "−" : "+"}
                    </span>

                  </button>


                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${
                      openIndex === index ? "show" : ""
                    }`}
                  >

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

      </main>


      {/* =====================================================
          STYLES
      ====================================================== */}
      <style jsx>{`

        /* =========================================
           MAIN PAGE
        ========================================= */

        .faq-page {
          width: 100%;
          min-height: 100vh;

          background: #ffffff;

          color: #071a3d;

          overflow-x: hidden;

          box-sizing: border-box;
        }


        /* =========================================
           FAQ HERO
        ========================================= */

        .faq-hero {
          position: relative;

          width: 100%;

          min-height: 350px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 70px 20px;

          background: #071a3d;

          text-align: center;

          overflow: hidden;

          box-sizing: border-box;
        }


        /* =========================================
           LEFT DECORATIVE CIRCLE
        ========================================= */

        .faq-hero::before {
          content: "";

          position: absolute;

          width: 360px;
          height: 360px;

          top: -190px;
          left: -120px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 50%;

          pointer-events: none;
        }


        /* =========================================
           RIGHT DECORATIVE CIRCLE
        ========================================= */

        .faq-hero::after {
          content: "";

          position: absolute;

          width: 450px;
          height: 450px;

          right: -180px;
          bottom: -250px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 50%;

          pointer-events: none;
        }


        /* =========================================
           HERO CONTENT
        ========================================= */

        .faq-hero-content {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 850px;

          margin: 0 auto;

          box-sizing: border-box;
        }


        /* =========================================
           SMALL HERO TEXT
        ========================================= */

        .hero-small-text {
          margin: 0 0 15px;

          color: rgba(255, 255, 255, 0.75);

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 3px;

          line-height: 1.5;
        }


        /* =========================================
           HERO TITLE
        ========================================= */

        .faq-hero-content h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(42px, 7vw, 68px);

          line-height: 1.1;

          font-weight: 700;

          letter-spacing: -1px;
        }


        /* =========================================
           RED TITLE TEXT
        ========================================= */

        .faq-hero-content h1 span {
          color: #f20b0b;
        }


        /* =========================================
           HERO DESCRIPTION
        ========================================= */

        .hero-description {
          max-width: 650px;

          margin: 22px auto 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 18px;

          line-height: 1.7;
        }


        /* =========================================
           FAQ SECTION
        ========================================= */

        .faq-section {
          width: 100%;

          padding: 80px 20px 100px;

          background: #ffffff;

          box-sizing: border-box;
        }


        /* =========================================
           FAQ CONTAINER
        ========================================= */

        .faq-container {
          width: 100%;

          max-width: 950px;

          margin: 0 auto;

          box-sizing: border-box;
        }


        /* =========================================
           FAQ HEADING
        ========================================= */

        .faq-heading {
          text-align: center;

          margin-bottom: 45px;
        }


        .section-label {
          margin: 0 0 10px;

          color: #f20b0b;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 2.5px;

          line-height: 1.5;
        }


        .faq-heading h2 {
          margin: 0 0 14px;

          color: #071a3d;

          font-size: clamp(30px, 4vw, 42px);

          line-height: 1.2;

          font-weight: 700;
        }


        .section-description {
          max-width: 650px;

          margin: 0 auto;

          color: #666666;

          font-size: 16px;

          line-height: 1.7;
        }


        /* =========================================
           FAQ LIST
        ========================================= */

        .faq-list {
          width: 100%;

          display: flex;

          flex-direction: column;

          gap: 14px;
        }


        /* =========================================
           FAQ ITEM
        ========================================= */

        .faq-item {
          width: 100%;

          background: #ffffff;

          border: 1px solid #e2e6ec;

          border-left: 4px solid transparent;

          border-radius: 8px;

          overflow: hidden;

          box-sizing: border-box;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }


        .faq-item:hover {
          border-color: #cfd6df;

          box-shadow:
            0 8px 25px rgba(7, 26, 61, 0.07);
        }


        /* =========================================
           ACTIVE FAQ ITEM
        ========================================= */

        .faq-item.active {
          border-left-color: #f20b0b;

          border-top-color: #071a3d;

          border-right-color: #071a3d;

          border-bottom-color: #071a3d;

          box-shadow:
            0 12px 30px rgba(7, 26, 61, 0.10);
        }


        /* =========================================
           QUESTION BUTTON
        ========================================= */

        .faq-question {
          width: 100%;

          border: none;

          background: #ffffff;

          padding: 21px 24px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          cursor: pointer;

          text-align: left;

          color: #071a3d;

          font-size: 17px;

          font-weight: 650;

          line-height: 1.5;

          box-sizing: border-box;

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }


        .faq-question:hover {
          color: #f20b0b;

          background: #fafbfc;
        }


        /* =========================================
           ACTIVE QUESTION
        ========================================= */

        .faq-item.active .faq-question {
          background: #071a3d;

          color: #ffffff;
        }


        /* =========================================
           QUESTION TEXT
        ========================================= */

        .question-text {
          flex: 1;

          min-width: 0;
        }


        /* =========================================
           PLUS / MINUS ICON
        ========================================= */

        .faq-icon {
          min-width: 34px;

          width: 34px;

          height: 34px;

          flex-shrink: 0;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #071a3d;

          color: #ffffff;

          font-size: 23px;

          font-weight: 400;

          line-height: 1;

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }


        .faq-question:hover .faq-icon {
          background: #f20b0b;

          color: #ffffff;
        }


        .faq-item.active .faq-icon {
          background: #f20b0b;

          color: #ffffff;
        }


        /* =========================================
           ANSWER
        ========================================= */

        .faq-answer {
          max-height: 0;

          overflow: hidden;

          opacity: 0;

          background: #ffffff;

          transition:
            max-height 0.4s ease,
            opacity 0.3s ease;
        }


        .faq-answer.show {
          max-height: 1000px;

          opacity: 1;
        }


        /* =========================================
           ANSWER CONTENT
        ========================================= */

        .faq-answer-content {
          padding: 22px 25px 25px;

          border-top: 1px solid #e5e9ef;

          color: #566273;

          font-size: 15px;

          line-height: 1.8;

          box-sizing: border-box;
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


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .faq-hero {
            min-height: 320px;

            padding: 65px 20px;
          }


          .faq-section {
            padding: 70px 20px 85px;
          }


          .faq-question {
            padding: 20px;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {

          .faq-hero {
            min-height: 310px;

            padding: 60px 20px;
          }


          .faq-hero-content {
            max-width: 650px;
          }


          .hero-small-text {
            font-size: 12px;

            letter-spacing: 2.5px;

            margin-bottom: 13px;
          }


          .faq-hero-content h1 {
            font-size: 42px;

            line-height: 1.12;

            letter-spacing: -0.5px;
          }


          .hero-description {
            margin-top: 18px;

            font-size: 16px;

            line-height: 1.6;
          }


          .faq-section {
            padding: 60px 15px 75px;
          }


          .faq-heading {
            margin-bottom: 35px;
          }


          .section-label {
            font-size: 12px;
          }


          .faq-heading h2 {
            font-size: 30px;

            line-height: 1.25;
          }


          .section-description {
            font-size: 14px;

            line-height: 1.6;
          }


          .faq-list {
            gap: 11px;
          }


          .faq-question {
            padding: 17px;

            font-size: 15px;

            gap: 12px;
          }


          .faq-icon {
            min-width: 30px;

            width: 30px;

            height: 30px;

            font-size: 20px;
          }


          .faq-answer-content {
            padding: 18px 17px 20px;

            font-size: 14px;

            line-height: 1.75;
          }


          .faq-answer-content ul {
            padding-left: 21px;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {

          .faq-hero {
            min-height: 285px;

            padding: 50px 18px;
          }


          .faq-hero::before {
            width: 280px;

            height: 280px;

            top: -160px;

            left: -120px;
          }


          .faq-hero::after {
            width: 330px;

            height: 330px;

            right: -170px;

            bottom: -200px;
          }


          .hero-small-text {
            font-size: 10px;

            letter-spacing: 2px;

            margin-bottom: 12px;
          }


          .faq-hero-content h1 {
            font-size: 34px;

            line-height: 1.15;
          }


          .hero-description {
            margin-top: 16px;

            font-size: 14px;

            line-height: 1.6;
          }


          .faq-section {
            padding: 50px 12px 60px;
          }


          .faq-heading {
            margin-bottom: 30px;
          }


          .faq-heading h2 {
            font-size: 26px;
          }


          .section-description {
            font-size: 13px;
          }


          .faq-question {
            padding: 15px;

            font-size: 14px;

            gap: 10px;
          }


          .faq-icon {
            min-width: 28px;

            width: 28px;

            height: 28px;

            font-size: 19px;
          }


          .faq-answer-content {
            padding: 16px 15px 18px;

            font-size: 13.5px;
          }

        }


        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {

          .faq-hero {
            min-height: 270px;

            padding: 45px 15px;
          }


          .faq-hero-content h1 {
            font-size: 29px;
          }


          .hero-description {
            font-size: 13px;
          }


          .faq-heading h2 {
            font-size: 24px;
          }


          .faq-question {
            padding: 14px;

            font-size: 13.5px;
          }


          .faq-answer-content {
            padding: 15px 14px 17px;

            font-size: 13px;
          }

        }


        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {

          .faq-item:hover {
            box-shadow: none;

            border-color: #e2e6ec;
          }


          .faq-question:hover {
            color: #071a3d;

            background: #ffffff;
          }


          .faq-question:hover .faq-icon {
            background: #071a3d;

            color: #ffffff;
          }


          .faq-item.active .faq-question {
            background: #071a3d;

            color: #ffffff;
          }


          .faq-item.active .faq-icon {
            background: #f20b0b;

            color: #ffffff;
          }

        }

      `}</style>
    </>
  );
}
