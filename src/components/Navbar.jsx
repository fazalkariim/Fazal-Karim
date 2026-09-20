import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import brand from "@/assets/brand.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  /* ========================================
     SKILLS & EXPERIENCE LINKS
  ======================================== */

  const skillsHref =
    location.pathname === "/about"
      ? "/about#skills"
      : location.pathname === "/projects"
        ? "/projects#skills"
        : "/#skills";

  const experienceHref =
    location.pathname === "/about"
      ? "/about#experience"
      : location.pathname === "/projects"
        ? "/projects#experience"
        : "/#experience";

  /* ========================================
     ACTIVE STATES
  ======================================== */

  const isSkillsActive = location.hash === "#skills";

  const isExperienceActive = location.hash === "#experience";

  /*
   * About / Projects tab should only be active
   * when Skills or Experience is NOT selected.
   */
  const isNormalPageActive =
    !isSkillsActive && !isExperienceActive;

  /* ========================================
     NAVBAR SCROLL EFFECT
  ======================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ========================================
     SCROLL TO HASH SECTION
     Example: #skills / #experience
  ======================================== */

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    /*
     * Small delay allows the route/page
     * to render before scrolling.
     */
    const timeout = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);

  /* ========================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================== */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <style>{`

        /* ========================================
           ANIMATIONS
        ======================================== */

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes mobileMenuSlideDown {
          from {
            opacity: 0;
            transform: translateY(-15px);
            max-height: 0;
          }

          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 500px;
          }
        }

        /* ========================================
           ANIMATION CLASSES
        ======================================== */

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .animate-mobileMenuSlideDown {
          animation: mobileMenuSlideDown 0.4s ease-out forwards;
        }

        /* ========================================
           DESKTOP NAV STAGGER
        ======================================== */

        .nav-link-stagger:nth-child(1) {
          animation-delay: 0.1s;
        }

        .nav-link-stagger:nth-child(2) {
          animation-delay: 0.15s;
        }

        .nav-link-stagger:nth-child(3) {
          animation-delay: 0.2s;
        }

        .nav-link-stagger:nth-child(4) {
          animation-delay: 0.25s;
        }

        .nav-link-stagger:nth-child(5) {
          animation-delay: 0.3s;
        }

        /* ========================================
           MOBILE NAV STAGGER
        ======================================== */

        .mobile-link-stagger:nth-child(1) {
          animation-delay: 0.05s;
        }

        .mobile-link-stagger:nth-child(2) {
          animation-delay: 0.1s;
        }

        .mobile-link-stagger:nth-child(3) {
          animation-delay: 0.15s;
        }

        .mobile-link-stagger:nth-child(4) {
          animation-delay: 0.2s;
        }

        .mobile-link-stagger:nth-child(5) {
          animation-delay: 0.25s;
        }

        /* ========================================
           LOGO ANIMATION
        ======================================== */

        .logo-letter-animation {
          display: inline-block;
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .logo-letter-animation:nth-child(2) {
          animation-delay: 0.05s;
        }

        .logo-letter-animation:nth-child(3) {
          animation-delay: 0.1s;
        }

        .logo-letter-animation:nth-child(4) {
          animation-delay: 0.15s;
        }

        .logo-letter-animation:nth-child(5) {
          animation-delay: 0.2s;
        }

        /* ========================================
           BUTTON HOVER
        ======================================== */

        .nav-button-hover {
          position: relative;
          overflow: hidden;
        }

        .nav-button-hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.3s ease-out;
          z-index: -1;
        }

        .nav-button-hover:hover::before {
          left: 100%;
        }

        /* ========================================
           MOBILE MENU ICON
        ======================================== */

        .menu-icon-rotation {
          transition: transform 0.3s ease-out;
        }

        .menu-icon-rotation.active {
          transform: rotate(90deg);
        }

        /* ========================================
           NAV LINK UNDERLINE
        ======================================== */

        .nav-link-underline {
          position: relative;
        }

        .nav-link-underline::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-underline:hover::after {
          width: 100%;
        }

        .nav-link-underline.active::after {
          width: 100%;
        }

      `}</style>

      {/* ========================================
          HEADER
      ======================================== */}

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-border/60"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-12 py-4 flex items-center justify-between">

          {/* ========================================
              LOGO
          ======================================== */}

          <Link
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-1 group animate-fadeInDown"
          >
            <img
              src={brand}
              alt="logo"
              style={{
                filter: "hue-rotate(-42deg) saturate(1.5)",
              }}
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />

            <span className="text-xl font-light tracking-tight text-white">
              <span className="logo-letter-animation">
                F
              </span>

              <span className="logo-letter-animation text-primary">
                a
              </span>

              <span className="logo-letter-animation">
                z
              </span>

              <span className="logo-letter-animation">
                a
              </span>

              <span className="logo-letter-animation">
                l
              </span>

              <span className="logo-letter-animation ml-1">
                K
              </span>

              <span className="logo-letter-animation text-primary">
                a
              </span>

              <span className="logo-letter-animation">
                r
              </span>

              <span className="logo-letter-animation">
                i
              </span>

              <span className="logo-letter-animation">
                m
              </span>
            </span>
          </Link>

          {/* ========================================
              DESKTOP NAV
          ======================================== */}

          <div className="hidden md:flex items-center gap-10">

            {/* ABOUT + PROJECTS */}

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-light transition-colors nav-link-stagger animate-slideInRight nav-link-underline ${
                    isActive && isNormalPageActive
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* ========================================
                SKILLS
            ======================================== */}

            <Link
              to={skillsHref}
              className={`text-sm font-light transition-colors nav-link-stagger animate-slideInRight nav-link-underline ${
                isSkillsActive
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </Link>

            {/* ========================================
                EXPERIENCE
            ======================================== */}

            <Link
              to={experienceHref}
              className={`text-sm font-light transition-colors nav-link-stagger animate-slideInRight nav-link-underline ${
                isExperienceActive
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </Link>

            {/* ========================================
                CONTACT
            ======================================== */}

            <Link
              to="/hire"
              className="btn-primary btn-sm nav-link-stagger animate-scaleIn nav-button-hover"
            >
              Contact
            </Link>
          </div>

          {/* ========================================
              MOBILE MENU BUTTON
          ======================================== */}

          <button
            type="button"
            className="md:hidden text-foreground menu-icon-rotation"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
            aria-expanded={open}
            style={{
              transform: open
                ? "rotate(90deg)"
                : "rotate(0deg)",
            }}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {/* ========================================
            MOBILE NAV
        ======================================== */}

        {open && (
          <div className="md:hidden glass border-t border-border px-6 py-6 flex flex-col gap-4 animate-mobileMenuSlideDown overflow-hidden">

            {/* ABOUT + PROJECTS */}

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-light transition-colors mobile-link-stagger animate-slideInUp ${
                    isActive && isNormalPageActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* ========================================
                MOBILE SKILLS
            ======================================== */}

            <Link
              to={skillsHref}
              onClick={() => setOpen(false)}
              className={`text-base font-light transition-colors mobile-link-stagger animate-slideInUp ${
                isSkillsActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </Link>

            {/* ========================================
                MOBILE EXPERIENCE
            ======================================== */}

            <Link
              to={experienceHref}
              onClick={() => setOpen(false)}
              className={`text-base font-light transition-colors mobile-link-stagger animate-slideInUp ${
                isExperienceActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </Link>

            {/* ========================================
                MOBILE CONTACT
            ======================================== */}

            <Link
              to="/hire"
              onClick={() => setOpen(false)}
              className="btn-primary btn-sm mobile-link-stagger animate-slideInUp"
            >
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
}