import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoo from "@/assets/logo.png";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const experienceHref =
    location.pathname === "/about"
      ? "/about#experience"
      : location.pathname === "/projects"
        ? "/projects#experience"
        : "/#experience";

  const skillsHref =
    location.pathname === "/about"
      ? "/about#skills"
      : location.pathname === "/projects"
        ? "/projects#skills"
        : "/#skills";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = () => {
    setOpen(false);

    setTimeout(() => {
      window.dispatchEvent(new Event("contact-highlight"));
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-[1680px] mx-auto px-6 lg:px-10 xl:px-12 2xl:px-16 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-1 group">
          <img src={logoo} alt="logo" className="w-8 h-8 object-contain" />

          <span className="text-xl font-light tracking-tight text-white">
            F<span className="text-primary">a</span>zal K
            <span className="text-primary">a</span>rim
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-light transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={skillsHref}
            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>

          <a
            href={experienceHref}
            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all"
          >
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-light ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={skillsHref}
            onClick={() => setOpen(false)}
            className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>

          <a
            href={experienceHref}
            onClick={() => setOpen(false)}
            className="text-base font-light text-muted-foreground"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
