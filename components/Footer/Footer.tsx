"use client";

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Sectors", href: "/sectors" },
    { name: "Contact", href: "/contact" },
    { name: "News", href: "/news" },
  ];

  return (
    <footer className="bg-dark text-white pt-5 pb-3 position-relative overflow-hidden">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Dearo Investment Limited</h5>
            <p>8th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01</p>
            <p>Phone: <a href="tel:+94743908274" className="text-white">011 478 2400</a></p>
            <p>Email: <a href="mailto:info@dearoinvestment.com" className="text-white">info@dearoinvestment.com</a></p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              {quickLinks.map((link, i) => (
                <li key={i} className="quick-link-item">
                  <Link href={link.href} className="link-text">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3 social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="youtube">
                <Youtube size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="text-center small">
          © 2026 Dearo Investment Limited — All Rights Reserved
        </div>
      </div>

      <style jsx>{`
        footer {
          background: #0a0a0a;
        }

        /* Quick Links - Premium Animation */
        .footer-links {
          padding: 0;
          margin: 0;
        }

        .quick-link-item {
          margin-bottom: 12px;
          opacity: 0;
          transform: translateX(-20px);
          animation: slideIn 0.6s forwards;
        }

        .quick-link-item:nth-child(1) { animation-delay: 0.1s; }
        .quick-link-item:nth-child(2) { animation-delay: 0.2s; }
        .quick-link-item:nth-child(3) { animation-delay: 0.3s; }
        .quick-link-item:nth-child(4) { animation-delay: 0.4s; }

        .link-text {
          position: relative;
          text-decoration: none;
          color: #ffffff;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        /* Gradient underline hover effect */
        .link-text::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #5aa2ff);
          transition: width 0.35s ease;
        }

        .link-text:hover {
          color: #0d6efd;
        }

        .link-text:hover::after {
          width: 100%;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Social Icons */
        .social-icons a {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .social-icons a.facebook { color: #1877F2; }
        .social-icons a.instagram { color: #E1306C; }
        .social-icons a.youtube { color: #FF0000; }
        .social-icons a.linkedin { color: #0A66C2; }
        .social-icons a:hover {
          transform: scale(1.2);
          filter: brightness(1.2);
        }

        hr {
          opacity: 0.3;
        }

        @media (max-width: 768px) {
          .social-icons { justify-content: start; }
        }
      `}</style>
    </footer>
  );
}
