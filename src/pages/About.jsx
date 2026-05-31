import { PageHeader } from "../components/PageHeader.jsx";
import { Skills } from "../components/sections/Skills.jsx";
import { Process } from "../components/sections/Process.jsx";
import { Experience } from "../components/sections/Experience.jsx";
import { ContactCTA } from "../components/sections/ContactCTA.jsx";
import { CheckCircle2, Award, Coffee, Users, Zap, Heart } from "lucide-react";
import sideimg from "@/assets/sidee.png";

const strengths = [
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Ship working software in days, not months.",
  },
  {
    icon: Heart,
    title: "Product Mindset",
    desc: "I care about your users as much as your code.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Delivery",
    desc: "Clear comms, honest timelines, no surprises.",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Comfortable in async, remote, and hybrid teams.",
  },
];

const stats = [
  { n: "7+", l: "Projects shipped", icon: Award },
  { n: "3+", l: "Happy clients", icon: Users },
  { n: "1.5+", l: "Years experience", icon: Zap },
  { n: "∞", l: "Cups of coffee", icon: Coffee },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="The developer behind"
        highlight="the code."
        description="A short story about who I am, how I work, and why I love building for the web."
      />

      <section className=" lg:py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border glow-border aspect-square max-w-md">
              <img
                src={sideimg}
                alt="Fazal Karim portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">
              Building{" "}
              <span className="text-primary font-light">
                modern digital products
              </span>{" "}
              that blend performance, scalability, and great user experiences.
            </h2>

            <div className="space-y-3 text-muted-foreground font-light leading-relaxed">
              <p>
                I'm a Full Stack Developer specializing in MERN Stack
                applications, focused on transforming ideas into fast, scalable,
                and production-ready solutions.
              </p>

              <p>
                From intuitive user interfaces to robust backend architectures,
                I build applications that are designed to perform, scale, and
                deliver real business value.
              </p>

              <p>
                Beyond coding, I'm constantly exploring new technologies,
                refining development workflows, and staying current with modern
                web engineering practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.l}
                  className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors text-center"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-extralight text-foreground">
                    {s.n}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Skills />
      <Process />
      <Experience />

      <section className="pb-13 lg:py-3 lg:mb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-14 text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              <span className="w-1 h-1 rounded-full bg-primary" /> Why Me
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">
              Why work <span className="text-primary font-light">with me.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-7 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
