import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import logoo from "@/assets/logo.png";

export function Footer() {
  const [activeGradient, setActiveGradient] = useState(false);

  useEffect(() => {
    let timer;

    const triggerGradient = () => {
      setActiveGradient(true);

      clearTimeout(timer);

      timer = setTimeout(() => {
        setActiveGradient(false);
      }, 6000);
    };

    window.addEventListener("contact-highlight", triggerGradient);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("contact-highlight", triggerGradient);
    };
  }, []);

  const socialTextClass = activeGradient
    ? "animated-social-gradient"
    : "text-muted-foreground group-hover:text-primary";

  return (
    <footer
      id="contact"
      className=" relative overflow-hidden border-t border-border/60 bg-background scroll-mt-24"
    >
      <style>{`
        @keyframes socialGradientMove {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .animated-social-gradient {
          background: linear-gradient(
            90deg,
            #ffffff,
            #0077ff,
            #8abfff,
            #0077ff,
            #ffffff
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: socialGradientMove 1.4s ease-in-out infinite;
        }
      `}</style>

      <div className="  absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,119,255,0.12),transparent_45%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8 border "> //-----
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr] ">
          <div>
            <Link to="/" className="inline-flex items-center gap-1 group">
              <img src={logoo} alt="logo" className="w-7 h-7 object-contain" />

              <span className="text-2xl font-light tracking-tight text-white">
                F<span className="text-primary">a</span>zal K
                <span className="text-primary">a</span>rim
              </span>
            </Link>

            <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              MERN Stack Developer crafting modern, <br /> scalable and  clean web
              applications for <br /> brands,  startups and businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white">
              Navigation
            </h4>

            <div className="flex flex-col gap-3 text-sm font-light">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>

              <Link
                to="/projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>

              <a
                href="#contact"
                onClick={() => {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("contact-highlight"));
                  }, 300);
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div >
            <h4 className=" mb-3 text-sm font-medium uppercase tracking-[0.25em] text-white">
              Connect
            </h4>

            <div className="flex flex-col gap-3 text-sm font-light">
              <a
                href="https://github.com/fazalkariim"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-all duration-300"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className={`transition-all duration-300 ${socialTextClass}`}>
                  Github
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://www.linkedin.com/in/fazal-karim-462888276/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className={`transition-all duration-300 ${socialTextClass}`}>
                  LinkedIn
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://www.instagram.com/fazall_karim/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className={`transition-all duration-300 ${socialTextClass}`}>
                  Instagram
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="https://www.facebook.com/hassnain.ali.342678"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className={`transition-all duration-300 ${socialTextClass}`}>
                  Facebook
                </span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t  pt-6 flex justify-center md:flex-row items-center gap-4 ">
          <p className="text-xs text-muted-foreground">
            © 2026 Fazal Karim. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}