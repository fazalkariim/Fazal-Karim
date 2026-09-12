import { useState } from "react";
import { PageHeader } from "../components/PageHeader.jsx";
import {
  ProjectCard,
  projectsData,
} from "../components/sections/ProjectCard.jsx";
import { ContactCTA } from "../components/sections/ContactCTA.jsx";
import { Experience } from "../components/sections/Experience.jsx";
import { Skills } from "../components/sections/Skills.jsx";
import { Sparkles, Github, ExternalLink } from "lucide-react";

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
        title="Work that"
        highlight="shipped."
        description="Full-stack applications built for real use — each one solving a specific problem end to end."
      />

      {/* Featured Project */}
      <section>
        <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-16 2xl:px-20">
          <div className="relative rounded-3xl border border-border bg-card overflow-hidden grid lg:grid-cols-2 gap-0">
            
            {/* Featured Image */}
            <div className="relative h-[230px] sm:aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-transparent">
              <div className="absolute inset-0 bg-grid opacity-30" />

              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="relative z-10 h-full w-full object-contain p-2 sm:p-0 sm:ml-5 md:mt-11"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-6xl font-extralight text-foreground/40 tracking-tight">
                    {featured.title}
                  </span>
                </div>
              )}
            </div>

            {/* Featured Content */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 bg-primary/10 font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-5 w-fit">
                <Sparkles className="w-3 h-3" />
                Featured Project
              </div>

              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
                {featured.title}
              </h2>

              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                {featured.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-7">
                {featured.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-surface border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-5">
                {featured.github && (
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}

                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-70 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Projects Grid */}
      <section className="py-16 lg:py-20">
        <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-11 2xl:px-20">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${
                  active === category
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-surface/50 text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.title} p={project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Experience />
      <ContactCTA />
    </>
  );
}