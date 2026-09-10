import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectCard, projectsData } from "./ProjectCard.jsx";

export function FeaturedProjects() {
  return (
    <section className="relative py-14 lg:py-3 bg-surface/30">
      <div className="w-full max-w-[1680px] mx-auto px-6 lg:px-12 xl:px-12 2xl:px-20">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 border border-border bg-surface/50 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            <span className="text-primary">//</span>
            Featured Work
          </div>

          <h2 className="max-w-2xl mx-auto text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
            Recent work,{" "}
            <span className="text-primary font-light">shipped and live.</span>
          </h2>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
          >
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
