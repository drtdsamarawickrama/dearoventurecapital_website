 
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* =====================================================
     MENU FUNCTIONS
  ===================================================== */

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

  /* =====================================================
     SCROLL
     Only changes shadow.
     Does NOT change navbar height or position.
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-wrapper">

      {/* =================================================
          TOP BAR
      ================================================= */}

      <div className="top-bar">
        <div className="container-fluid px-3 px-lg-4">
          <div className="top-bar-inner">

            {/* LEFT */}
            <div className="top-bar-left">
              Building Wealth, Empowering Futures in Sri Lanka
            </div>

            {/* RIGHT */}
            <div className="top-bar-right">

              <a
                href="tel:0114782400"
                className="top-bar-link"
              >
                <Phone size={14} />
                <span>011 478 2400</span>
              </a>

              <a
                href="mailto:info@dearoventurecapital.com"
                className="top-bar-link"
              >
                <Mail size={14} />
                <span>info@dearoventurecapital.com</span>
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* =================================================
          NAVBAR
          ONLY THIS ELEMENT IS STICKY
      ================================================= */}

      <nav
        className={`navbar navbar-expand-lg premium-nav ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid px-3 px-lg-4">

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
              alt="Dearo Venture Capital Logo"
              width={140}
              height={40}
              className="logo"
              priority
            />
          </Link>

          {/* =================================================
              MOBILE TOGGLE
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
                  ABOUT US
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

                {/* DROPDOWN */}

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

                  {/* <Link
                    href="/community"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    <span className="dropdown-point">•</span>
                    <span className="dropdown-text">
                      COMMUNITY
                    </span>
                  </Link> */}

                </div>
              </li>

              {/* =================================================
                  ISLAMIC SERVICES
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Islamic Services
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
                  BRANCH NETWORK
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/branches"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Branch Network
                </Link>
              </li>

              {/* =================================================
                  GALLERY
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/community"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  News & Updates
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

              {/* {/* =================================================
                  Apply Now
              ================================================= */}

              {/* { <li className="nav-item">
                <Link
                  href="/portal"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
              </li> }  */} 

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
          width: 100%;
          background: #ffffff;
          position: relative;
          z-index: 9999;
        }


        /* =====================================================
           TOP BAR
        ===================================================== */

        .top-bar {
          width: 100%;
          background: #1a2850;
          color: #ffffff;
          font-size: 0.85rem;
        }


        .top-bar-inner {
          min-height: 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 5px 0;
        }


        .top-bar-left {
          font-size: 0.8rem;
          line-height: 1.4;
          white-space: nowrap;
        }


        .top-bar-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 18px;
        }


        .top-bar-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          color: #ffffff !important;
          text-decoration: none !important;

          white-space: nowrap;

          transition: color 0.2s ease;
        }


        .top-bar-link:hover {
          color: #a5c8ff !important;
        }


        /* =====================================================
           NAVBAR

           IMPORTANT:
           ONLY NAVBAR IS STICKY
        ===================================================== */

        .premium-nav {
          position: sticky;
          top: 0;

          z-index: 9998;

          width: 100%;

          background: #ffffff;

          padding: 14px 0;

          border-bottom: 1px solid rgba(0, 0, 0, 0.06);

          /*
             Only shadow/background transition.
             No height, transform, padding, margin animation.
          */

          transition:
            box-shadow 0.2s ease,
            background-color 0.2s ease;
        }


        /* =====================================================
           SCROLLED NAVBAR
        ===================================================== */

        .premium-nav.scrolled {
          background: #ffffff;

          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.10);
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .logo {
          display: block;

          width: 140px;
          height: 40px;

          object-fit: contain;

          /*
             Prevent image resizing/jumping.
          */

          flex-shrink: 0;
        }


        /* =====================================================
           NAV MENU
        ===================================================== */

        .nav-menu {
          display: flex;

          gap: 20px;

          margin-bottom: 0;
        }


        /* =====================================================
           NAV LINKS
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

          text-decoration: none !important;

          transition: color 0.2s ease;
        }


        .nav-link:hover {
          color: #0d6efd;
        }


        /* =====================================================
           NAV UNDERLINE
        ===================================================== */

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

          transition: width 0.25s ease;
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

          transition: transform 0.25s ease;

          flex-shrink: 0;
        }


        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }


        /* =====================================================
           DROPDOWN
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

          transform: translateY(8px);

          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;

          z-index: 10001;
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
           CLICK DROPDOWN
        ===================================================== */

        .dropdown-active
        .dropdown-menu-custom {

          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }


        /* =====================================================
           DROPDOWN ITEMS
        ===================================================== */

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

          transform: none !important;

          transition:
            background-color 0.2s ease,
            color 0.2s ease;
        }


        /* =====================================================
           REMOVE UNDERLINES
        ===================================================== */

        .dropdown-menu-custom
        .dropdown-item-custom::before,

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
           DROPDOWN STATES
        ===================================================== */

        .dropdown-menu-custom
        .dropdown-item-custom:link,

        .dropdown-menu-custom
        .dropdown-item-custom:visited,

        .dropdown-menu-custom
        .dropdown-item-custom:active,

        .dropdown-menu-custom
        .dropdown-item-custom:focus {

          color: #000000 !important;

          text-decoration: none !important;

          outline: none !important;
        }


        /* =====================================================
           DROPDOWN HOVER
        ===================================================== */

        .dropdown-menu-custom
        .dropdown-item-custom:hover {

          color: #000000 !important;

          background: #f2f6ff !important;

          text-decoration: none !important;

          transform: none !important;
        }


        /* =====================================================
           BULLET
        ===================================================== */

        .dropdown-point {

          display: inline-block !important;

          width: 8px;
          min-width: 8px;

          color: #000000 !important;

          font-size: 18px !important;

          font-weight: 700 !important;

          line-height: 1 !important;
        }


        /* =====================================================
           TEXT
        ===================================================== */

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

            border-top: 1px solid rgba(0, 0, 0, 0.05);
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


          /* REMOVE UNDERLINE ON MOBILE */

          .nav-link::after {
            display: none;
          }


          /* =================================================
             MOBILE DROPDOWN
          ================================================= */

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


          .top-bar-inner {

            flex-direction: column;

            justify-content: center;

            gap: 4px;

            padding: 6px 0;
          }


          .top-bar-left {

            display: none;
          }


          .top-bar-right {

            justify-content: center;

            gap: 12px;
          }


          .logo {

            width: 140px;
            height: 40px;
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


        /* =====================================================
           REDUCE MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .premium-nav,
          .nav-link::after,
          .dropdown-menu-custom,
          .dropdown-icon,
          .dropdown-item-custom {

            transition: none !important;
          }
        }

      `}</style>
    </header>
  );
}

