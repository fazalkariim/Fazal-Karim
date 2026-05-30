import { Github, ExternalLink } from "lucide-react";

export const projectsData = [
  {
    title: "Flavora ",
    description:
      "AI-powered recipe platform delivering personalized meal ideas and smart pantry-based cooking recommendations.",
    tech: ["Next", "Tailwind", "Strapi", "Shadcn-UI", "Gemini API"],
    category: "NEXT Apps",
    status: "Completed",
    image: "/aiassis.png",
    github: "https://github.com/fazalkariim/Smart-Recipe-Platform.ai",
  },
  {
    title: "Bookifyr",
    description:
      "MERN-powered ticketing platform featuring secure reservations, role-based workflows, and event administration.",
    tech: ["React", "Node", "Express", "Stripe", "Tailwind", "JWT"],
    category: "MERN Apps",
    status: "Completed",
    image: "/book.png",
    github: "https://github.com/fazalkariim/Bookifyr-Event_Booking_Platform",
  },
  {
    title: "TynexaAi",
    description:
      "Modern AI customer support system with automated responses, user management, and chatbot integration.",
    tech: [
      "Node",
      "Express",
      "Express",
      "Mongoose",
      "MongoDB",
      "Scalekit",
      "JWT",
    ],
    category: "MERN Apps",
    status: "Completed",
    image: "/chatbot.png",
    github: "https://github.com/fazalkariim/Ai-Customer-Support-ChatBot",
  },
  {
    title: "Restaurant POS",
    description:
      "Smart Restaurant POS solution with order processing, tax billing, and operational management tools.",
    tech: ["Node", "Express", "Redis", "MongoDB", "React", "Mongoose"],
    category: "MERN Apps",
    status: "In Progress",
    image: "/res.png",
    github: "https://github.com/fazalkariim/Restaurant-POS",
  },
  {
    title: "Yoga Wellness Tracker",
    description:
      "Smart yoga wellness ecosystem combining AI pose tracking, engaging challenges, and personalized fitness experiences.",
    tech: ["Next", "Prisma", "Socket.IO", "Firebase", "Node"],
    category: "NEXT Apps",
    status: "Completed",
    image: "/yoga.png",
    github: "https://github.com/fazalkariim/final-year-project",
  },
];

export function ProjectCard({ p }) {
  return (
    <article className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative h-[190px] sm:h-[160px] lg:h-[180px] overflow-hidden bg-card">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-contain p-1 sm:p-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
          {p.title}
        </h3>

        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-surface border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          </div>

          {p.status && (
            <span
              className={`px-2 py-1 text-[10px] uppercase tracking-widest rounded-full backdrop-blur border ${
                p.status === "Completed"
                  ? "bg-primary/10 border-primary/40 text-primary"
                  : "bg-amber-500/10 border-amber-500/40 text-amber-400"
              }`}
            >
              {p.status}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
