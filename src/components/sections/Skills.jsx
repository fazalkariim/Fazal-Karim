import { SectionHeader } from "../SectionHeader.jsx";
import {
  Database, Server, Atom, FileCode2, Braces, Globe,
  Shield, Wind, GitBranch, Rocket,
} from "lucide-react";

const skills = [
  { name: "MongoDB", icon: Database, level: "Expert" },
  { name: "Express.js", icon: Server, level: "Expert" },
  { name: "React.js", icon: Atom, level: "Expert" },
  { name: "Node.js", icon: FileCode2, level: "Expert" },
  { name: "JavaScript", icon: Braces, level: "Expert" },
  { name: "REST APIs", icon: Globe, level: "Advanced" },
  { name: "Authentication", icon: Shield, level: "Advanced" },
  { name: "Tailwind CSS", icon: Wind, level: "Expert" },
  { name: "Git / GitHub", icon: GitBranch, level: "Advanced" },
  { name: "Deployment", icon: Rocket, level: "Advanced" },
];

export function Skills() {
  return (
    <section className="relative bg-surface/30  pb-15 lg:pt-3 lg:pb-1">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools I use to build"
          highlight="production-grade products."
          description="A curated stack chosen for performance, maintainability, and speed of delivery."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="group relative p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-medium text-sm">{s.name}</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.level}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
