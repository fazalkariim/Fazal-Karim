import { useState } from "react";
import { PageHeader } from "../components/PageHeader.jsx";
import {
  ProjectCard,
  projectsData,
} from "../components/sections/ProjectCard.jsx";
import { ContactCTA } from "../components/sections/ContactCTA.jsx";
import { Sparkles } from "lucide-react";

const categories = ["All", "MERN Apps", "NEXT Apps"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);
  const featured = projectsData[0];

  return (
    <>
      <PageHeader
        eyebrow="Featured Projects"
        title="Solutions that"
        highlight="deliver results."
        description="From business websites to full-stack applications, each project is designed to solve real-world problems and create value."
      />

      {/* Featured */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden grid lg:grid-cols-2 gap-0">
            <div className={`relative h-[230px] sm:aspect-video lg:aspect-auto bg-gradient-to-br ${featured.accent}`}>
              <div className="absolute inset-0 bg-grid opacity-30" />

              {featured.image ? (
             <img
              src={featured.image}
              alt={featured.title}
              className="relative z-10 h-full w-full object-contain p-2 md:mt-11 sm:p-0 sm:ml-5"
            />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-6xl font-extralight text-foreground/40 tracking-tight">
                    {featured.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-[11px] uppercase tracking-[0.2em] text-primary mb-5 w-fit">
                <Sparkles className="w-3 h-3" /> Featured Project
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                {featured.title}
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-surface border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-surface/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
