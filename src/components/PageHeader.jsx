export function PageHeader({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative pt-30 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {eyebrow}
          </div>
        )}
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-extralight tracking-tight leading-[1.05]">
          {title}{" "}
          {highlight && (
            <span className="text-gradient-primary font-light">
              {highlight}
            </span>
          )} 
        </h1>
        {description && (
          <p className="mt-6 text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
