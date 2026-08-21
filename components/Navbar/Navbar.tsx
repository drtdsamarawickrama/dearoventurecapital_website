"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

// import GoogleTranslate from "./GoogleTranslate";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-wrapper">

      {/* ===================== TOP BAR ===================== */}

      <div className={`top-bar ${scrolled ? "top-bar-hidden" : ""}`}>
        <div className="container-fluid px-3 px-lg-4">

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-1">

            {/* LEFT SIDE */}
            <div className="top-bar-left text-white small mb-1 mb-md-0 d-none d-md-block">
              Building Wealth, Empowering Futures in Sri Lanka
            </div>

            {/* RIGHT SIDE */}
            <div className="top-bar-right d-flex flex-wrap justify-content-center align-items-center text-white small">

              {/* PHONE */}
              <a
                href="tel:0114782400"
                className="top-bar-link me-3 d-flex align-items-center gap-1"
              >
                <Phone size={14} />
                011 478 2400
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@dearoventurecapital.com"
                className="top-bar-link me-3 d-flex align-items-center gap-1"
              >
                <Mail size={14} />
                info@dearoventurecapital.com
              </a>

              {/* ===================== LANGUAGE ===================== */}

              {/* <div className="language-wrapper">
                <GoogleTranslate />
              </div> */}

            </div>
          </div>

        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}

      <nav
        className={`navbar navbar-expand-lg premium-nav ${
          scrolled ? "scrolled" : ""
        }`}
      >

        <div className="container-fluid">

          {/* LOGO */}

          <Link
            href="/"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <Image
              src="/images/final_logo-venture.jpg"
              alt="Dearo Logo"
              width={160}
              height={40}
              className="logo"
              priority
            />
          </Link>

          {/* HAMBURGER */}

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV ITEMS */}

          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-center nav-menu">

              {/* ABOUT US */}

              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>

              {/* LEADERSHIP */}

              <li className="nav-item">
                <Link
                  href="/director"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Our Leadership
                </Link>
              </li>

              {/* SUBSIDIARIES */}

              <li className="nav-item">
                <Link
                  href="/sectors"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Subsidiaries
                </Link>
              </li>

              {/* ESTABLISH FINANCE */}

              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Islamic Finance
                </Link>
              </li>

              {/* COMMUNITY */}

              <li className="nav-item">
                <Link
                  href="/community"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Community & Environment
                </Link>
              </li>

              {/* INVESTORS */}

              <li className="nav-item">
                <Link
                  href="/investors"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Investor Relations
                </Link>
              </li>

              {/* GALLERY */}

              <li className="nav-item">
                <Link
                  href="/gallery"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </li>

              {/* CAREERS */}

              <li className="nav-item">
                <Link
                  href="/careers"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Careers
                </Link>
              </li>

              {/* CONTACT */}

              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>

      </nav>

      {/* ===================== STYLES ===================== */}

      <style jsx>{`

        /* ===================== HEADER ===================== */

        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
          background: #ffffff;
        }

        /* ===================== TOP BAR ===================== */

        .top-bar {
          background-color: #1a2850;
          font-size: 0.85rem;
          padding: 5px 0;
          transition: all 0.3s ease;
          overflow: hidden;
          max-height: 100px;
        }

        .top-bar-hidden {
          max-height: 0;
          padding: 0;
          opacity: 0;
        }

        .top-bar-left {
          font-size: 0.8rem;
        }

        .top-bar-right {
          gap: 0;
        }

        .top-bar-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .top-bar-link:hover {
          color: #a5c8ff;
        }

        /* ===================== LANGUAGE ===================== */

        // .language-wrapper {
        //   display: flex;
        //   align-items: center;
        //   margin-left: 2px;
        // }

        /* ===================== NAVBAR ===================== */

        .premium-nav {
          position: relative;
          z-index: 998;
          background: #ffffff;
          padding: 14px 0;
          transition: all 0.35s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .premium-nav.scrolled {
          padding: 6px 0;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* ===================== LOGO ===================== */

        .logo {
          display: block;
          transition: transform 0.35s ease;
        }

        .premium-nav.scrolled .logo {
          transform: scale(0.9);
        }

        /* ===================== NAV MENU ===================== */

        .nav-menu {
          display: flex;
          gap: 30px;
          margin-bottom: 0;
        }

        /* ===================== NAV LINKS ===================== */

        .nav-link {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          position: relative;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .premium-nav.scrolled .nav-link {
          padding: 4px 10px;
          font-size: 0.8rem;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(
            90deg,
            #0d6efd,
            #5aa2ff
          );
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0d6efd;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* ===================== MOBILE ===================== */

        @media (max-width: 991px) {

          .nav-menu {
            flex-direction: column;
            gap: 20px;
          }

          .top-bar-right {
            justify-content: center;
          }

          .language-wrapper {
            margin-left: 0;
          }

        }

        /* ===================== LARGE SCREENS ===================== */

        @media (min-width: 1200px) {

          .nav-menu {
            gap: 24px;
          }

          .nav-link {
            font-size: 0.82rem;
          }

        }

      `}</style>

    </header>
  );
}