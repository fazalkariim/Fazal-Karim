import React, { useRef, useEffect, useState } from "react";
import { Mail, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleInSmooth {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .scroll-scale-in {
          animation: scaleInSmooth 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .scroll-slide-down {
          animation: slideInDown 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .cta-badge { animation-delay: 0.1s; }
        .cta-heading { animation-delay: 0.25s; }
        .cta-description { animation-delay: 0.4s; }
        .cta-buttons { animation-delay: 0.55s; }
        .cta-button-1 { animation-delay: 0.6s; }
        .cta-button-2 { animation-delay: 0.75s; }

        .cta-button {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-button:hover {
          transform: translateY(-3px);
        }

        .cta-button.primary:hover {
          box-shadow: 0 20px 40px rgba(0, 119, 255, 0.3);
        }

        .cta-button.secondary:hover {
          background-color: rgba(0, 119, 255, 0.05);
        }
      `}</style>

      <section ref={sectionRef} className="relative pb-13 lg:py-3 lg:pb-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-grid opacity-20" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />

            <div className="relative">
              {/* BADGE */}
              <div
                className={`inline-flex whitespace-nowrap items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-[11px] uppercase tracking-[0.2em] text-primary mb-6 ${
                  isVisible ? "scroll-slide-down cta-badge" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for projects
              </div>

              {/* HEADING */}
              <h2
                className={`mx-auto max-w-[390px] text-[26px] font-light leading-[1.08] tracking-tight text-white sm:max-w-3xl sm:text-[44px] md:text-6xl md:font-medium ${
                  isVisible ? "scroll-fade-up cta-heading" : ""
                }`}
              >
                Let's transform your vision{" "}
                <span className="text-gradient-primary font-medium">
                  into reality.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className={`mt-5 text-muted-foreground font-light max-w-xl mx-auto leading-relaxed ${
                  isVisible ? "scroll-fade-up cta-description" : ""
                }`}
              >
                Looking for a developer who can turn ideas into scalable digital
                products? I'm available for freelance projects, startup
                collaborations, and remote opportunities.
              </p>

              {/* BUTTONS */}
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-3 justify-center ${
                  isVisible ? "scroll-fade-up cta-buttons" : ""
                }`}
              >
                <Link
                  to="/hire"
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all cta-button primary ${
                    isVisible ? "scroll-scale-in cta-button-1" : ""
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Link>

                <Link
                  to="/hire"
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-primary bg-surface font-medium hover:border-primary/50 transition-all cta-button secondary ${
                    isVisible ? "scroll-scale-in cta-button-2" : ""
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}