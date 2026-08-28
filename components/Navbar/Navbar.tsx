
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* ===================== MENU FUNCTIONS ===================== */

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setAboutOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen((prev) => !prev);
  };

  /* ===================== SCROLL ===================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="header-wrapper">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className={`top-bar ${scrolled ? "top-bar-hidden" : ""}`}>
        <div className="container-fluid px-3 px-lg-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-1">

            {/* LEFT TEXT */}

            <div className="top-bar-left text-white small mb-1 mb-md-0 d-none d-md-block">
              Building Wealth, Empowering Futures in Sri Lanka
            </div>

            {/* RIGHT CONTACT */}

            <div className="top-bar-right d-flex flex-wrap justify-content-center align-items-center text-white small">

              <a
                href="tel:0114782400"
                className="top-bar-link me-3 d-flex align-items-center gap-1"
              >
                <Phone size={14} />
                <span>011 478 2400</span>
              </a>

              <a
                href="mailto:info@dearoventurecapital.com"
                className="top-bar-link me-3 d-flex align-items-center gap-1"
              >
                <Mail size={14} />
                <span>info@dearoventurecapital.com</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`navbar navbar-expand-lg premium-nav ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">

          {/* =================================================
              LOGO
          ================================================= */}

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

          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center nav-menu">

              {/* =================================================
                  ABOUT US DROPDOWN
              ================================================= */}

              <li
                className={`nav-item dropdown-custom ${
                  aboutOpen ? "dropdown-active" : ""
                }`}
              >

                <button
                  type="button"
                  className="nav-link dropdown-toggle-custom"
                  onClick={toggleAbout}
                  aria-expanded={aboutOpen}
                >
                  <span>About Us</span>

                  <ChevronDown
                    size={16}
                    className={`dropdown-icon ${
                      aboutOpen ? "rotate" : ""
                    }`}
                  />
                </button>

                {/* =================================================
                    DROPDOWN MENU
                ================================================= */}

                <div className="dropdown-menu-custom">

                  

                  <Link
                    href="/about"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    <span className="dropdown-point">•</span>
                    <span className="dropdown-text">
                      ABOUT US
                    </span>
                  </Link>

                  {/* OUR LEADERSHIP */}

                  <Link
                    href="/director"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    <span className="dropdown-point">•</span>
                    <span className="dropdown-text">
                      OUR LEADERSHIP
                    </span>
                  </Link>

                  {/* SUBSIDIARIES */}

                  <Link
                    href="/sectors"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    <span className="dropdown-point">•</span>
                    <span className="dropdown-text">
                      SUBSIDIARIES
                    </span>
                  </Link>

                </div>
              </li>

              

              {/* =================================================
                  ISLAMIC FINANCE
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Islamic Finance
                </Link>
              </li>

              {/* =================================================
                  INVESTOR RELATIONS
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/investors"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Investor Relations
                </Link>
              </li>

              {/* =================================================
                  OUR LEADERSHIP
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/community"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Community & Environment
                </Link>
              </li>

              {/* =================================================
                  SUBSIDIARIES
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/gallery"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Our Gallery
                </Link>
              </li>

              {/* =================================================
                  CAREERS
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/careers"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Careers
                </Link>
              </li>

              {/* =================================================
                  CONTACT
              ================================================= */}

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

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           HEADER
        ===================================================== */

        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
          background: #ffffff;
        }

        /* =====================================================
           TOP BAR
        ===================================================== */

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

        .top-bar-link {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.2s ease;
        }

        .top-bar-link:hover {
          color: #a5c8ff !important;
          text-decoration: none !important;
        }

        /* =====================================================
           NAVBAR
        ===================================================== */

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

        /* =====================================================
           LOGO
        ===================================================== */

        .logo {
          display: block;
          transition: transform 0.35s ease;
        }

        .premium-nav.scrolled .logo {
          transform: scale(0.9);
        }

        /* =====================================================
           NAVIGATION MENU
        ===================================================== */

        .nav-menu {
          display: flex;
          gap: 20px;
          margin-bottom: 0;
        }

        /* =====================================================
           MAIN NAVIGATION LINKS
        ===================================================== */

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;

          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;

          color: #000000;

          padding: 8px 5px;

          white-space: nowrap;

          transition: color 0.3s ease;

          text-decoration: none !important;
        }

        .premium-nav.scrolled .nav-link {
          padding: 5px;
          font-size: 0.78rem;
        }

        /* MAIN NAV UNDERLINE */

        .nav-link::after {
          content: "";
          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
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
          text-decoration: none !important;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* =====================================================
           ABOUT US BUTTON
        ===================================================== */

        .dropdown-toggle-custom {
          border: none;
          background: transparent;
          cursor: pointer;

          font-family: inherit;
        }

        .dropdown-icon {
          margin-left: 5px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }

        /* =====================================================
           DROPDOWN CONTAINER
        ===================================================== */

        .dropdown-custom {
          position: relative;
        }

        .dropdown-menu-custom {
          position: absolute;

          top: calc(100% + 8px);
          left: 0;

          min-width: 240px;

          padding: 10px;

          display: flex;
          flex-direction: column;
          gap: 2px;

          background: #ffffff;

          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.12);

          opacity: 0;
          visibility: hidden;

          transform: translateY(10px);

          transition:
            opacity 0.25s ease,
            visibility 0.25s ease,
            transform 0.25s ease;

          z-index: 1000;
        }

        /* =====================================================
           DESKTOP DROPDOWN
        ===================================================== */

        @media (min-width: 992px) {

          .dropdown-custom:hover
          .dropdown-menu-custom {

            opacity: 1;
            visibility: visible;
            transform: translateY(0);

          }

          .dropdown-custom:hover
          .dropdown-icon {

            transform: rotate(180deg);

          }

        }

        /* =====================================================
           MOBILE / CLICK DROPDOWN
        ===================================================== */

        .dropdown-active
        .dropdown-menu-custom {

          opacity: 1;
          visibility: visible;
          transform: translateY(0);

        }

        /* =====================================================
           DROPDOWN ITEMS
           
           IMPORTANT:
           These styles are completely separated from .nav-link
           ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom {

          position: static !important;

          display: flex !important;

          align-items: center !important;

          gap: 10px !important;

          width: 100% !important;

          padding: 11px 14px !important;

          margin: 0 !important;

          color: #000000 !important;

          background: transparent !important;

          border: none !important;

          border-radius: 5px;

          font-size: 0.85rem !important;

          font-weight: 600 !important;

          text-transform: none !important;

          line-height: 1.4;

          text-decoration: none !important;

          box-shadow: none !important;

        }

        /* =====================================================
           REMOVE UNDERLINE FROM DROPDOWN
        ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom::before,

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom::after {

          content: none !important;

          display: none !important;

          width: 0 !important;

          height: 0 !important;

          background: none !important;

          border: none !important;

        }

        /* =====================================================
           DROPDOWN LINK STATES
        ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom:link,

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom:visited,

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom:active,

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom:focus {

          color: #000000 !important;

          text-decoration: none !important;

          outline: none !important;

        }

        /* =====================================================
           DROPDOWN HOVER
        ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-item-custom:hover {

          color: #000000 !important;

          background: #f2f6ff !important;

          text-decoration: none !important;

          transform: none !important;

        }

        /* =====================================================
           DROPDOWN BULLET
        ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-point {

          display: inline-block !important;

          width: 8px;
          min-width: 8px;

          color: #000000 !important;

          font-size: 18px !important;

          font-weight: 700 !important;

          line-height: 1 !important;

          text-decoration: none !important;

        }

        /* =====================================================
           DROPDOWN TEXT
        ===================================================== */

        .premium-nav
        .dropdown-menu-custom
        .dropdown-text {

          display: inline-block;

          color: #000000 !important;

          text-decoration: none !important;

        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 991px) {

          .premium-nav {
            padding: 10px 0;
          }

          .navbar-collapse {
            background: #ffffff;
            padding: 15px 0;
          }

          .nav-menu {

            flex-direction: column;

            align-items: stretch !important;

            gap: 5px;

          }

          .nav-item {
            width: 100%;
          }

          .nav-link {

            width: 100%;

            justify-content: space-between;

            padding: 12px 15px;

          }

          /* Remove main nav underline on mobile */

          .nav-link::after {
            display: none;
          }

          /* MOBILE DROPDOWN */

          .dropdown-menu-custom {

            position: static !important;

            display: none;

            width: 100%;

            min-width: 100%;

            margin: 4px 0 0 0;

            padding: 8px 0;

            background: #f8faff !important;

            border: none;

            border-left: 2px solid #0d6efd;

            border-radius: 0;

            box-shadow: none;

            opacity: 1;

            visibility: visible;

            transform: none;

          }

          .dropdown-active
          .dropdown-menu-custom {

            display: flex;

          }

          .dropdown-item-custom {

            padding: 10px 20px !important;

          }

          .dropdown-point {
            font-size: 18px !important;
          }

          .top-bar-right {
            justify-content: center;
          }

        }

        /* =====================================================
           LARGE SCREENS
        ===================================================== */

        @media (min-width: 1200px) {

          .nav-menu {
            gap: 22px;
          }

          .nav-link {
            font-size: 0.8rem;
          }

        }

        @media (min-width: 1400px) {

          .nav-menu {
            gap: 28px;
          }

          .nav-link {
            font-size: 0.83rem;
          }

        }

      `}</style>

    </header>
  );
}

