import React, { useRef, useEffect, useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Full Stack MERN Developer",
    org: "Freelance",
    period: "2026 — Present",
    desc: "Building scalable MERN applications and modern business platforms.",
  },

  {
    role: "MERN Stack Developer",
    org: "Galactecho",
    period: "2025 — 2026",
    desc: "Developed dashboards, APIs, and authentication systems for SaaS products.",
  },

  {
    role: "Frontend Developer",
    org: "Galactecho",
    period: "2024 — 2025",
    desc: "Created responsive React and Tailwind interfaces for global clients.",
  },
];

const education = [
  {
    role: "Intermediate in Computer Science",
    org: "Punjab College",
    period: "2018 — 2020",
    desc: "Focused on computer science fundamentals and analytical problem-solving.",
  },

  {
    role: "BS Computer Science",
    org: "SZABIST Islamabad",
    period: "2021 — 2025",
    desc: "Studied software engineering, databases, and modern web technologies.",
  },
];

function Timeline({ items, icon: Icon, title, isVisible }) {
  return (
    <div
      className={isVisible ? "scroll-fade-in-stagger" : ""}
    >
      <div className={`flex items-center gap-3 mb-8 ${isVisible ? "scroll-fade-up timeline-header" : ""}`}>
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="relative pl-6 border-l border-border space-y-8">
        {items.map((item, idx) => (
          <div
            key={item.role}
            className={`relative ${isVisible ? `scroll-fade-up timeline-item` : ""}`}
            style={{
              animationDelay: isVisible ? `${0.15 + idx * 0.15}s` : "0s",
            }}
          >
            <div className={`absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-glow transition-all duration-500 ${
              isVisible ? "timeline-dot" : ""
            }`} />
            <div className="text-[11px] uppercase tracking-[0.2em] text-primary mb-1">
              {item.period}
            </div>
            <h4 className="font-medium">{item.role}</h4>
            <div className="text-sm text-muted-foreground">{item.org}</div>
            <p className="text-sm text-muted-foreground font-light mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
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
        threshold: 0.1,
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 119, 255, 0.4);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 0 6px rgba(0, 119, 255, 0.2);
          }
        }

        .scroll-fade-up {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .timeline-header {
          animation-delay: 0s;
        }

        .timeline-item {
          animation: fadeInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .timeline-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }

        .scroll-fade-in-stagger {
          opacity: 1;
        }

        /* Hover effects */
        .timeline-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item:hover {
          transform: translateX(4px);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="experience"
        className="relative py-15 lg:py-3 lg:pb-13 bg-surface/30"
      >
        <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-15 2xl:px-20">
          <div className={isVisible ? "scroll-fade-up" : ""}>
            <SectionHeader
              eyebrow="Journey"
              title="Experience &"
              highlight="education."
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-28">
            <Timeline
              items={experience}
              icon={Briefcase}
              title="Experience"
              isVisible={isVisible}
            />
            <Timeline
              items={education}
              icon={GraduationCap}
              title="Education"
              isVisible={isVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
}