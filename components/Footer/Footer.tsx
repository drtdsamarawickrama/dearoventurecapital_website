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
      <div className="footer-glow"></div>

      <div className="container position-relative z-1">
        <div className="row g-5">

          {/* COMPANY INFO */}
          <div className="col-md-6 col-lg-4 footer-col">
            <h4 className="footer-brand">
              Dearo Venture Capital Limited
            </h4>

            <p className="footer-desc mt-3">
              Empowering transformative businesses across industries for a
              sustainable and prosperous future.
            </p>

            <div className="contact-info mt-4">
              <div className="info-item">
                <MapPin className="info-icon" size={20} />

                <span>
                  9th Floor, Ceylinco House, No 69,
                  <br />
                  Janadhipathi Mawatha, Colombo 01
                </span>
              </div>

              <div className="info-item mt-3">
                <Phone className="info-icon" size={18} />

                <a
                  href="tel:0114782400"
                  className="footer-link"
                >
                  011 478 2400
                </a>
              </div>

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

          {/* QUICK LINKS */}
          <div className="col-md-6 col-lg-2 footer-col">
            <h5 className="footer-title">
              Quick Links
            </h5>

            <ul className="footer-links mt-4">
              {quickLinks.map((link, i) => (
                <li key={i} className="quick-link-item">
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

          {/* SUBSIDIARIES */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">
              Subsidiaries
            </h5>

            <ul className="footer-links mt-4">
              {subsidiaries.map((item, i) => (
                <li key={i} className="quick-link-item">
                  <div className="quick-link subsidiary-link">
                    <span className="dot"></span>
                    <span>{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">
              Connect With Us
            </h5>

            <p className="footer-desc mt-4 mb-3">
              Follow us on social media for the latest updates and insights.
            </p>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/people/Dearo-Venture-Capital-Ltd/61566725151766/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/dearoventurecapitalltd?igsh=MWlxYjNtOTJ5ZHhpZg==/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.youtube.com/@dearoventurecapital"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/dearo-venture-capital-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

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

        <hr className="footer-divider" />

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="copyright">
            © {new Date().getFullYear()} Dearo Venture Capital Limited.
            All Rights Reserved.
          </div>
        </div>
      </div>

      <style jsx>{`
        /* FOOTER */
        .footer {
          background-color: #001f3f;
          color: #94a3b8;
          padding: 3.5rem 0 1.5rem;
          overflow: hidden;
          font-family: inherit;
        }

        /* GLOW */
        .footer-glow {
          position: absolute;
          top: -150px;
          right: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.06) 0%,
            rgba(2, 6, 23, 0) 70%
          );
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        /* COMPANY */
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

        /* CONTACT */
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

        .footer-link,
        .footer-link:link,
        .footer-link:visited,
        .footer-link:hover,
        .footer-link:active {
          color: #ffffff !important;
          text-decoration: none !important;
        }

        /* QUICK LINKS */
        .footer-links {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .quick-link-item {
          margin-bottom: 2px;
          padding: 0;
          width: 100%;
        }

        /* IMPORTANT: WHITE TEXT + NO UNDERLINE */
        .quick-link,
        .quick-link:link,
        .quick-link:visited,
        .quick-link:hover,
        .quick-link:active,
        .quick-link:focus {
          display: inline-flex !important;
          align-items: center !important;

          padding: 5px 0 !important;
          margin: 0 !important;

          color: #ffffff !important;
          background: transparent !important;

          text-decoration: none !important;
          text-decoration-line: none !important;

          font-size: 0.96rem;
          font-weight: 500;
          line-height: 1.4;

          border: none !important;
          outline: none !important;
          box-shadow: none !important;

          transition: transform 0.3s ease;
        }

        .quick-link:hover {
          color: #ffffff !important;
          text-decoration: none !important;
          transform: translateX(5px);
        }

        /* SUBSIDIARIES */
        .subsidiary-link {
          cursor: default;
          color: #ffffff !important;
        }

        .subsidiary-link:hover {
          color: #ffffff !important;
          transform: translateX(5px);
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #475569;
          border-radius: 50%;
          margin-right: 8px;
          transition: background 0.3s ease;
          flex-shrink: 0;
        }

        .subsidiary-link:hover .dot {
          background: #38bdf8;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
        }

        /* SOCIAL MEDIA */
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
          background: rgba(255, 255, 255, 0.06);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-btn.facebook {
          color: #1877f2;
        }

        .social-btn.instagram {
          color: #e4405f;
        }

        .social-btn.youtube {
          color: #ff0000;
        }

        .social-btn.linkedin {
          color: #0a66c2;
        }

        .social-btn.tiktok {
          color: #ffffff;
        }

        .social-btn:hover {
          transform: translateY(-4px);
        }

        .social-btn.facebook:hover {
          background: #1877f2;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(24, 119, 242, 0.4);
        }

        .social-btn.instagram:hover {
          background: #e4405f;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(228, 64, 95, 0.4);
        }

        .social-btn.youtube:hover {
          background: #ff0000;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(255, 0, 0, 0.4);
        }

        .social-btn.linkedin:hover {
          background: #0a66c2;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(10, 102, 194, 0.4);
        }

        .social-btn.tiktok:hover {
          background: #000000;
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.15);
        }

        /* DIVIDER */
        .footer-divider {
          border-color: rgba(255, 255, 255, 0.08);
          margin: 2.5rem 0 1.5rem;
        }

        /* FOOTER BOTTOM */
        .footer-bottom {
          font-size: 0.95rem;
          text-align: center;
          justify-content: center;
        }

        .copyright {
          color: #94a3b8;
          text-align: center;
          width: 100%;
        }

        /* TABLET */
        @media (max-width: 991px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-col {
            margin-bottom: 1rem;
          }

          .quick-link {
            font-size: 0.95rem !important;
          }

          .social-icons {
            gap: 10px;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .footer {
            padding: 2.5rem 15px 1.5rem;
          }

          .footer-col {
            text-align: center;
            margin-bottom: 1.5rem;
          }

          .footer-brand {
            font-size: 1.25rem;
          }

          .footer-desc {
            font-size: 0.92rem;
          }

          .contact-info .info-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 6px;
          }

          .quick-link,
          .quick-link:link,
          .quick-link:visited,
          .quick-link:hover,
          .quick-link:active,
          .quick-link:focus {
            color: #ffffff !important;
            text-decoration: none !important;
          }

          .social-icons {
            justify-content: center;
            gap: 10px;
          }

          .social-btn {
            width: 44px;
            height: 44px;
          }

          .footer-bottom {
            text-align: center;
            justify-content: center;
            align-items: center;
          }

          .copyright {
            width: 100%;
            text-align: center;
            font-size: 0.85rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </footer>
  );
}