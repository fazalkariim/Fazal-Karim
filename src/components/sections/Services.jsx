import React, { useRef, useEffect, useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import {
  Code2,
  LayoutDashboard,
  Network,
  ShieldCheck,
  Smartphone,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    desc: "End-to-end web apps — database, API, and interface built as one system.",
    variant: "solid",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development",
    desc: "Custom admin panels and analytics dashboards designed for clarity and speed.",
  },
  {
    icon: Network,
    title: "REST API Development",
    desc: "Robust, well-documented APIs that scale with your product and team.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    desc: "JWT, OAuth, role-based access — login flows your users can trust.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI/UX",
    desc: "Pixel-perfect interfaces that look sharp on every screen and device.",
    variant: "outline",
  },
  {
    icon: Layers,
    title: "Deployment & DevOps",
    desc: "CI/CD pipelines, hosting setup, and monitoring so releases stay boring.",
  },
];

export function Services() {
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
      },
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
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .card-delay-1 { animation-delay: 0.1s; }
        .card-delay-2 { animation-delay: 0.2s; }
        .card-delay-3 { animation-delay: 0.3s; }
        .card-delay-4 { animation-delay: 0.4s; }
        .card-delay-5 { animation-delay: 0.5s; }
        .card-delay-6 { animation-delay: 0.6s; }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
                 .service-card:hover {
          transform: translateY(-4px);
        }

        .service-solid {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--primary-foreground);
        }

        .service-solid .service-desc,
        .service-solid .service-num,
        .service-solid .service-arrow {
          color: var(--primary-foreground);
          opacity: .75;
        }

        .service-solid .service-icon-box {
          background: rgba(0,0,0,.12);
          border-color: rgba(0,0,0,.2);
        }

        .service-solid .service-icon {
          color: var(--primary-foreground);
        }

        .service-outline {
          border-color: var(--primary);
        }
      `}</style>

      <section ref={sectionRef} className="relative lg:py-15">
        <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-12 2xl:px-20">
          <div className={isVisible ? "scroll-fade-up" : ""}>
            <SectionHeader
              eyebrow="Services"
              title="What I can build"
              highlight="for you."
              description="What I take on for startups, founders, and product teams."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, index) => {
              const Icon = s.icon;
              const delayClass = `card-delay-${(index % 6) + 1}`;

              return (
                <div
                  key={s.title}
                  className={`group relative p-7 border border-border bg-card overflow-hidden hover:border-primary/40 transition-all service-card ${
                    s.variant === "solid" ? "service-solid" : ""
                  } ${s.variant === "outline" ? "service-outline" : ""} ${
                    isVisible ? `scroll-scale-in ${delayClass}` : ""
                  }`}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="service-num font-mono text-[11px] tracking-[0.2em] text-muted-foreground mb-5">
                      [{String(index + 1).padStart(2, "0")}]
                    </div>

                    <div className="flex items-start justify-between mb-6">
                      <div className="service-icon-box w-12 h-12 bg-primary/10 border border-primary/20 grid place-items-center">
                        <Icon className="service-icon w-6 h-6 text-primary" />
                      </div>

                      <ArrowUpRight className="service-arrow w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                    </div>

                    <h3 className="text-lg font-bold uppercase tracking-tight mb-2">
                      {s.title}
                    </h3>

                    <p className="service-desc text-sm text-muted-foreground font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
