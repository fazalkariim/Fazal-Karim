import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { SectionHeader } from "../SectionHeader.jsx";
import sideimg from "@/assets/sidee.png";

export function AboutPreview() {
  return (
    <section className="relative py-15 lg:py-15 ">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative ">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl " />
          <img
            src={sideimg}
            alt="Fazal Karim"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent " />
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 ">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 grid place-items-center">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.15em]">
                Full-Stack Developer
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5">
                1.5+ years
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div>
          <SectionHeader
            eyebrow="About Me"
            title="Engineering products"
            highlight="built to last."
            align="left"
          />
          <div className="space-y-5 text-muted-foreground font-light leading-relaxed ">
            <p>
              I'm Fazal - a full-stack developer building fast, scalable web
              applications with React, Next.js, and Node. I work with startups,
              agencies, and product teams to turn requirements into features
              that ship.
            </p>
            <p>
              From admin dashboards to REST APIs to production interfaces, I
              handle the full stack - so you get one person accountable end to
              end, not three handoffs.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 border-y border-border divide-x divide-border">
            {[
              { n: "9+", l: "Projects" },
              { n: "3+", l: "Clients" },
              { n: "1.5yr+", l: "Experience" },
            ].map((s) => (
              <div key={s.l} className="py-5 px-4 first:pl-0">
                <div className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
                  {s.n}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-primary mt-6 group">
            <Sparkles className="w-4 h-4" />
            More About Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
