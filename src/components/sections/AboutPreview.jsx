import { Link } from "react-router-dom";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { SectionHeader } from "../SectionHeader.jsx";
import sideimg from "@/assets/sidee.png";



export function AboutPreview() {
  return (
    <section className="relative py-15 lg:py-15 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">
        <div className="relative ">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl " />
            <img src={sideimg} alt="Fazal Karim" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent " />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 ">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 grid place-items-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">MERN Stack Developer</p>
                <p className="text-xs text-muted-foreground">1.5+ years experience</p>
              </div>
            </div>
          {/* </div> */}
        </div>

        <div >
          <SectionHeader
            eyebrow="About Me"
            title="Crafting digital products with"
            highlight="purpose & precision."
            align="left"
          />
          <div className="space-y-5 text-muted-foreground font-light leading-relaxed ">
            <p>
              I'm Fazal — a full-stack developer focused on building fast, scalable, and beautifully crafted
              web applications using the MERN stack. I help startups, agencies, and product teams ship features
              that actually move the needle.
            </p>
            <p>
              From clean dashboards to robust APIs and pixel-perfect UIs, I bring engineering rigor and design
              sensibility together — so your product feels as good as it performs.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-6  border-y border-border ">
            {[
              { n: "7+", l: "Projects" },
              { n: "3+", l: "Clients" },
              { n: "1.5yr+", l: "Experience" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-light text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all group"
          >
            <Sparkles className="w-4 h-4" />
            More About Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
