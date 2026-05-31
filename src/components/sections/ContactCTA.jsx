import { Mail, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export function ContactCTA() {
  return (
    <section className="relative pb-13 lg:py-3 lg:pb-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl border border-border bg-card overflow-hidden p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative">
            <div className="inline-flex whitespace-nowrap items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for projects
            </div>

            <h2 className="mx-auto max-w-[390px] text-[26px] font-light leading-[1.08] tracking-tight text-white sm:max-w-3xl sm:text-[44px] md:text-6xl md:font-medium">
              Let's transform your vision{" "}
              <span className="text-gradient-primary font-medium">
                into reality.
              </span>
            </h2>

            <p className="mt-5 text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Looking for a developer who can turn ideas into scalable digital
              products? I'm available for freelance projects, startup
              collaborations, and remote opportunities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                onClick={() => {
                  setTimeout(() => {
                    window.dispatchEvent(new Event("contact-highlight"));
                  }, 300);
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>

              <Link
                to="/hire"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-primary bg-surface font-medium hover:border-primary/50 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}