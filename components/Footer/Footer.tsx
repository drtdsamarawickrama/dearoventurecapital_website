"use client";

import { Facebook, MapPin, Phone, Mail, ArrowRight, Instagram, Youtube } from "lucide-react";
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
          {/* Company Info */}
          <div className="col-md-6 col-lg-4 footer-col">
            <h4 className="footer-brand">Dearo Venture Capital Limited</h4>
            <p className="footer-desc mt-3">
              Empowering transformative businesses across industries for a sustainable and prosperous future.
            </p>
            <div className="contact-info mt-4">
              <div className="info-item">
                <MapPin className="info-icon" size={20} />
                <span>9th Floor, Ceylinco House, No 69,<br/>Janadhipathi Mawatha, Colombo 01</span>
              </div>
              <div className="info-item mt-3">
                <Phone className="info-icon" size={18} />
                <a href="tel:+94743908274" className="footer-link">011 478 2400</a>
              </div>
              <div className="info-item mt-3">
                <Mail className="info-icon" size={18} />
                <a href="mailto:info@dearoventurecapital.com" className="footer-link">info@dearoventurecapital.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-2 footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links mt-4">
              {quickLinks.map((link, i) => (
                <li key={i} className="quick-link-item">
                  <Link href={link.href} className="quick-link">
                    <ArrowRight className="link-arrow" size={14} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Subsidiaries</h5>
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

          {/* Social */}
          <div className="col-md-6 col-lg-3 footer-col">
            <h5 className="footer-title">Connect With Us</h5>
            <p className="footer-desc mt-4 mb-3">Follow us on social media for the latest updates and insights.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/Dearo-Venture-Capital-Ltd/61566725151766/" target="_blank" rel="noopener noreferrer" className="social-btn facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>

            <div className="social-icons">
              <a href="https://www.instagram.com/dearoventurecapitalltd?igsh=MWlxYjNtOTJ5ZHhpZg==/" target="_blank" rel="noopener noreferrer" className="social-btn Instagram" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          

           <div className="social-icons">
              <a href="https://www.youtube.com/@dearoventurecapital" target="_blank" rel="noopener noreferrer" className="social-btn Youtube" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>

             <div className="social-icons">
              <a href="" target="_blank" rel="noopener noreferrer" className="social-btn Tiktok" aria-label="Tiktok">
                <PiTiktokLogo size={20} />
              </a>
            </div>
          


          
        </div>
        </div>
        <hr className="footer-divider" />

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="copyright">
            © {new Date().getFullYear()} Dearo Venture Capital Limited. All Rights Reserved.
          </div>
          <div className="legal-links mt-3 mt-md-0">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <span className="mx-2 separator">•</span>
            <Link href="/terms" className="legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .footer {
          background: #020617;
          color: #94a3b8;
          padding: 3.5rem 0 1.5rem;
          overflow: hidden;
          font-family: inherit;
        }

        .footer-glow {
          position: absolute;
          top: -150px;
          right: -150px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(2,6,23,0) 70%);
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
        }

        .footer-brand {
          color: #f8fafc;
          font-weight: 700;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
        }

        .footer-title {
          color: #f8fafc;
          font-weight: 600;
          font-size: 1.15rem;
          position: relative;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .footer-desc {
          line-height: 1.7;
          font-size: 0.95rem;
        }

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
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #38bdf8;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quick-link-item {
          margin-bottom: 14px;
        }

        .quick-link {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.98rem;
          transition: all 0.3s ease;
        }

        .link-arrow {
          color: #38bdf8;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .quick-link:hover {
          color: #f8fafc;
          transform: translateX(6px);
        }

        .quick-link:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .subsidiary-link {
          cursor: default;
        }

        .subsidiary-link:hover {
          color: #f8fafc;
          transform: translateX(6px);
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #475569;
          border-radius: 50%;
          transition: background 0.3s ease;
          flex-shrink: 0;
        }

        .subsidiary-link:hover .dot {
          background: #38bdf8;
          box-shadow: 0 0 8px rgba(56,189,248,0.6);
        }

        .social-icons {
          display: flex;
          gap: 14px;
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
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .social-btn:hover {
          color: #fff;
          transform: translateY(-4px);
        }

        .social-btn.facebook:hover { background: #1877f2; box-shadow: 0 8px 16px rgba(24,119,242,0.4); }

        .footer-divider {
          border-color: rgba(255,255,255,0.08);
          margin: 2.5rem 0 1.5rem;
        }

        .footer-bottom {
          font-size: 0.95rem;
        }

        .legal-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #38bdf8;
        }

        .separator {
          color: #475569;
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-col {
            margin-bottom: 2rem;
          }

          .footer-bottom {
            text-align: center;
          }
        }

        @media (max-width: 576px) {
          .footer-col {
            text-align: center;
          }
          
          .contact-info .info-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .quick-link, .subsidiary-link {
            justify-content: center;
          }

          .link-arrow {
            display: none;
          }

          .social-icons {
            justify-content: center;
          }

          .legal-links {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          
          .separator {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}  