"use client";

import {
  Facebook,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Sectors", href: "/sectors" },
    { name: "Contact", href: "/contact" },
    { name: "Community", href: "/community" },
  ];

  const subsidiaries = [
    "Agriculture & Plantation",
    "Engineering & Construction",
    "Education & Training",
    "Dearo Lime",
    "DCCI – From Our Waters to the World",
    "DEARO IT SOLUTION",
  ];

  return (
    <footer className="footer position-relative">
      {/* Decorative Glow */}
      <div className="footer-glow"></div>

      <div className="container position-relative z-1">
        <div className="row g-5">

          {/* ================= COMPANY INFO ================= */}
          <div className="col-md-6 col-lg-4 footer-col">
            <h4 className="footer-brand">
              Dearo Venture Capital Limited
            </h4>

            <p className="footer-desc mt-3">
              Empowering transformative businesses across industries for a
              sustainable and prosperous future.
            </p>

            <div className="contact-info mt-4">

              {/* Address */}
              <div className="info-item">
                <MapPin className="info-icon" size={20} />

                <span>
                  9th Floor, Ceylinco House, No 69,
                  <br />
                  Janadhipathi Mawatha, Colombo 01
                </span>
              </div>

              {/* Phone */}
              <div className="info-item mt-3">
                <Phone className="info-icon" size={18} />

                <a
                  href="tel:0114782400"
                  className="footer-link"
                >
                  011 478 2400
                </a>
              </div>

              {/* Email */}
              <div className="info-item mt-3">
                <Mail className="info-icon" size={18} />

                <a
                  href="mailto:info@dearoventurecapital.com"
                  className="footer-link"
                >
                  info@dearoventurecapital.com
                </a>
              </div>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="col-md-6 col-lg-2 footer-col">

            <h5 className="footer-title">
              Quick Links
            </h5>

            <ul className="footer-links mt-4">

              {quickLinks.map((link, i) => (
                <li
                  key={i}
                  className="quick-link-item"
                >
                  <Link
                    href={link.href}
                    className="quick-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* ================= SUBSIDIARIES ================= */}
          <div className="col-md-6 col-lg-3 footer-col">

            <h5 className="footer-title">
              Subsidiaries
            </h5>

            <ul className="footer-links mt-4">

              {subsidiaries.map((item, i) => (
                <li
                  key={i}
                  className="quick-link-item"
                >
                  <div className="quick-link subsidiary-link">

                    <span className="dot"></span>

                    <span>
                      {item}
                    </span>

                  </div>
                </li>
              ))}

            </ul>

          </div>

          {/* ================= SOCIAL MEDIA ================= */}
          <div className="col-md-6 col-lg-3 footer-col">

            <h5 className="footer-title">
              Connect With Us
            </h5>

            <p className="footer-desc mt-4 mb-3">
              Follow us on social media for the latest updates and insights.
            </p>

            <div className="social-icons">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Dearo-Venture-Capital-Ltd/61566725151766/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/dearoventurecapitalltd?igsh=MWlxYjNtOTJ5ZHhpZg==/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@dearoventurecapital"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dearo-venture-capital-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="social-btn tiktok"
                aria-label="TikTok"
              >
                <PiTiktokLogo size={20} />
              </a>

            </div>

          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <hr className="footer-divider" />

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">

          <div className="copyright">
            © {new Date().getFullYear()} Dearo Venture Capital Limited.
            All Rights Reserved.
          </div>

          <div className="legal-links mt-3 mt-md-0">

            <Link
              href="/privacy"
              className="legal-link"
            >
              Privacy Policy
            </Link>

            <span className="mx-2 separator">
              •
            </span>

            <Link
              href="/terms"
              className="legal-link"
            >
              Terms of Service
            </Link>

          </div>

        </div>
      </div>

      {/* ================= STYLES ================= */}

      <style jsx>{`

        /* ================= FOOTER ================= */

        .footer {
          background: #020617;
          color: #94a3b8;
          padding: 3.5rem 0 1.5rem;
          overflow: hidden;
          font-family: inherit;
        }


        /* ================= GLOW ================= */

        .footer-glow {
          position: absolute;
          top: -150px;
          right: -150px;
          width: 500px;
          height: 500px;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,0.06) 0%,
              rgba(2,6,23,0) 70%
            );

          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }


        /* ================= COMPANY ================= */

        .footer-brand {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
        }

        .footer-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .footer-desc {
          color: #94a3b8;
          line-height: 1.7;
          font-size: 0.95rem;
        }


        /* ================= CONTACT ================= */

        .contact-info .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .info-icon {
          color: #38bdf8;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #38bdf8;
          text-decoration: none;
        }


        /* ================= QUICK LINKS ================= */

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-link-item {
          margin-bottom: 8px;
          width: 100%;
        }

        .quick-link {
          display: inline-flex;
          align-items: center;

          /* Bigger clickable area */
          padding: 9px 0;

          max-width: 100%;

          color: #ffffff;
          text-decoration: none;

          font-size: 0.96rem;
          font-weight: 500;

          line-height: 1.5;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .quick-link:hover {
          color: #38bdf8;
          text-decoration: none;
          transform: translateX(5px);
        }

        .quick-link:focus,
        .quick-link:active,
        .quick-link:visited {
          text-decoration: none;
        }


        /* ================= SUBSIDIARIES ================= */

        .subsidiary-link {
          cursor: default;
          color: #ffffff;
        }

        .subsidiary-link:hover {
          color: #f8fafc;
          transform: translateX(5px);
        }

        .dot {
          width: 6px;
          height: 6px;

          background: #475569;

          border-radius: 50%;

          margin-right: 10px;

          transition: background 0.3s ease;

          flex-shrink: 0;
        }

        .subsidiary-link:hover .dot {
          background: #38bdf8;

          box-shadow:
            0 0 8px rgba(56,189,248,0.6);
        }


        /* ================= SOCIAL MEDIA ================= */

        .social-icons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          border-radius: 50%;

          background: rgba(255,255,255,0.06);

          color: #ffffff;

          text-decoration: none;

          transition:
            all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-btn:hover {
          color: #ffffff;
          transform: translateY(-4px);
        }

        /* Facebook */

        .social-btn.facebook:hover {
          background: #1877f2;

          box-shadow:
            0 8px 16px rgba(24,119,242,0.4);
        }

        /* Instagram */

        .social-btn.instagram:hover {
          background: #e4405f;

          box-shadow:
            0 8px 16px rgba(228,64,95,0.4);
        }

        /* YouTube */

        .social-btn.youtube:hover {
          background: #ff0000;

          box-shadow:
            0 8px 16px rgba(255,0,0,0.4);
        }

        /* LinkedIn */

        .social-btn.linkedin:hover {
          background: #0a66c2;

          box-shadow:
            0 8px 16px rgba(10,102,194,0.4);
        }

        /* TikTok */

        .social-btn.tiktok:hover {
          background: #000000;

          box-shadow:
            0 8px 16px rgba(255,255,255,0.15);
        }


        /* ================= DIVIDER ================= */

        .footer-divider {
          border-color: rgba(255,255,255,0.08);
          margin: 2.5rem 0 1.5rem;
        }


        /* ================= BOTTOM ================= */

        .footer-bottom {
          font-size: 0.95rem;
        }

        .copyright {
          color: #94a3b8;
        }

        .legal-link {
          color: #94a3b8;
          text-decoration: none;

          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #38bdf8;
          text-decoration: none;
        }

        .separator {
          color: #475569;
        }


        /* ================= TABLET ================= */

        @media (max-width: 991px) {

          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-col {
            margin-bottom: 1rem;
          }

          .quick-link {
            font-size: 0.95rem;
            padding: 9px 0;
          }

          .social-icons {
            gap: 10px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 576px) {

          .footer {
            padding: 2.5rem 15px 1.5rem;
          }

          .footer-col {
            text-align: center;
            margin-bottom: 1.5rem;
          }


          /* Company */

          .footer-brand {
            font-size: 1.25rem;
          }

          .footer-desc {
            font-size: 0.92rem;
          }


          /* Contact */

          .contact-info .info-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 6px;
          }


          /* Quick Links */

          .footer-links {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .quick-link-item {
            width: 100%;
            margin-bottom: 4px;
          }

          .quick-link {
            justify-content: center;
            text-align: center;

            font-size: 1rem;

            /* Large touch area */
            padding: 10px 20px;

            width: auto;

            transform: none;
          }

          .quick-link:hover {
            transform: none;
          }


          /* Social */

          .social-icons {
            justify-content: center;
            gap: 10px;
          }

          .social-btn {
            width: 44px;
            height: 44px;
          }


          /* Bottom */

          .footer-bottom {
            text-align: center;
          }

          .copyright {
            font-size: 0.85rem;
            line-height: 1.6;
          }

          .legal-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .separator {
            display: none;
          }

        }

      `}</style>
    </footer>
  );
}