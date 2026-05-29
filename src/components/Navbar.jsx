import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronLeft } from "lucide-react";
import logoo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group">
          <img src={logoo} alt="logo" className="w-8 h-8 object-contain" />

          <span className="text-xl font-light tracking-tight text-white">
            F<span className="text-primary">a</span>zal K
            <span className="text-primary">a</span>rim
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
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
  href="#contact"
  onClick={() => {
    setOpen(false);

    setTimeout(() => {
      window.dispatchEvent(new Event("contact-highlight"));
    }, 300);
  }}
  className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
>
  Contact
</a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-light ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {l.label}
            </NavLink>
          ))}

  <a
  href="#contact"
  onClick={() => {
    setOpen(false);

    setTimeout(() => {
      window.dispatchEvent(new Event("contact-highlight"));
    }, 300);
  }}
  className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center"
>
  Contact
</a>
        </div>
      )}
    </header>
  );
}
