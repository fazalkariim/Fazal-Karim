import React, { useRef, useEffect, useState } from "react";
import { SectionHeader } from "../SectionHeader.jsx";
import { ClipboardList, PenTool, Code, TestTube2, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Planning", desc: "Define goals, scope, and the smallest valuable thing to ship first." },
  { icon: PenTool, title: "UI Design", desc: "Wireframes and polished interfaces grounded in your brand language." },
  { icon: Code, title: "Development", desc: "Clean, typed code with sensible architecture and a fast feedback loop." },
  { icon: TestTube2, title: "Testing", desc: "Manual QA, integration checks, and edge-case coverage before launch." },
  { icon: Rocket, title: "Deployment", desc: "CI/CD pipelines, monitoring, and a smooth handover to your team." },
];

export function Process() {
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
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
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

        .step-delay-1 { animation-delay: 0.1s; }
        .step-delay-2 { animation-delay: 0.2s; }
        .step-delay-3 { animation-delay: 0.3s; }
        .step-delay-4 { animation-delay: 0.4s; }
        .step-delay-5 { animation-delay: 0.5s; }

        .step-container {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-container:hover {
          transform: translateY(-6px);
        }

        .step-icon {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-container:hover .step-icon {
          box-shadow: 0 20px 40px rgba(0, 119, 255, 0.3);
          transform: scale(1.08);
        }
      `}</style>

      <section ref={sectionRef} className="relative lg:py-15">
        <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-12 2xl:px-20">
          <div className={isVisible ? "scroll-fade-up" : ""}>
            <SectionHeader
              eyebrow="How I Work"
              title="A clear process,"
              highlight="from idea to launch."
            />
          </div>

          <div className="relative">
            <div className={`hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent ${
              isVisible ? "scroll-slide-down" : ""
            }`} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const delayClass = `step-delay-${i + 1}`;

                return (
                  <div
                    key={s.title}
                    className={`relative step-container ${isVisible ? `scroll-fade-up ${delayClass}` : ""}`}
                  >
                    <div className={`relative z-10 w-16 h-16 mx-auto rounded-2xl bg-background border border-primary/40 grid place-items-center shadow-glow step-icon ${
                      isVisible ? `scroll-scale-in ${delayClass}` : ""
                    }`}>
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <div className={`text-center mt-5 ${isVisible ? `scroll-fade-up ${delayClass}` : ""}`}>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                        Step 0{i + 1}
                      </div>

                      <h3 className="text-lg font-medium mb-2">{s.title}</h3>

                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}