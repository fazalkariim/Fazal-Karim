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
  return (
    <section className="relative py- lg:py-15 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow="How I Work" title="A clear process," highlight="from idea to launch." />

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative">
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-background border border-primary/40 grid place-items-center shadow-glow">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-center mt-5">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Step 0{i + 1}</div>
                    <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
