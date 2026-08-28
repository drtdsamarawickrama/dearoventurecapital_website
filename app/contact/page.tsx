
"use client";

import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection";
import { useState } from "react";

const faqs = [
  {
    question: "What is Dearo Venture Capital?",
    answer:
      "Dearo Venture Capital is an investment company focused on supporting innovative businesses and entrepreneurs with growth opportunities and strategic guidance.",
  },
  // {
  //   question: "What types of businesses do you invest in?",
  //   answer:
  //     "We are interested in innovative businesses and promising ventures with strong growth potential, sustainable business models, and capable management teams.",
  // },
  // {
  //   question: "How can I contact Dearo Venture Capital?",
  //   answer:
  //     "You can contact us through the contact form on this website. Our team will review your inquiry and get back to you as soon as possible.",
  // },
  // {
  //   question: "How can I submit my business or investment proposal?",
  //   answer:
  //     "You can submit your business or investment inquiry through our contact section. Please provide relevant information about your business, project, and funding requirements.",
  // },
  // {
  //   question: "Do you provide support beyond financial investment?",
  //   answer:
  //     "Yes. Depending on the opportunity, we may provide strategic guidance, business development support, networking opportunities, and other forms of assistance.",
  // },
  // {
  //   question: "How long does it take to receive a response?",
  //   answer:
  //     "Our team reviews inquiries carefully. Response times may vary depending on the nature and complexity of your request.",
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
                  <p>{faq.answer}</p>
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
          max-height: 300px;
          opacity: 1;
        }

        .faq-answer p {
          padding: 0 25px 22px;
          margin: 0;
          color: #667085;
          font-size: 15px;
          line-height: 1.8;
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

          .faq-answer p {
            padding: 0 18px 18px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

