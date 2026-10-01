"use client";

import Image from "next/image";
import ContactSection from "@/components/Contact/ContactSection";

export default function ContactPage() {
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

        {/* Dark overlay */}
        <div className="hero-overlay"></div>

        {/* Hero content */}
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
        }
      `}</style>
    </>
  );
}