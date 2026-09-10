export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl mb-9 ${a}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-surface/50 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                <span className="text-primary">//</span>
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-primary font-light">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
