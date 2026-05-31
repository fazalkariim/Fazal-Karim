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

function Timeline({ items, icon: Icon, title }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="relative pl-6 border-l border-border space-y-8">
        {items.map((item) => (
          <div key={item.role} className="relative">
            <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-glow" />
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
  return (
    <section className="relative py-15 lg:py-3 lg:pb-13  bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Journey"
          title="Experience &"
          highlight="education."
        />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <Timeline items={experience} icon={Briefcase} title="Experience" />
          <Timeline items={education} icon={GraduationCap} title="Education" />
        </div>
      </div>
    </section>
  );
}
