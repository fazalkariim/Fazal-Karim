import { SectionHeader } from "../SectionHeader.jsx";
import {
  Database,
  Server,
  Atom,
  FileCode2,
  Braces,
  Globe,
  Shield,
  Wind,
  GitBranch,
  Rocket,
} from "lucide-react";

const skills = [
  {
    name: "MongoDB",
    icon: "/mongodb.png",
    category: "Database",
    isImage: true,
  },
  {
    name: "Express.js",
    icon: "/express.png",
    category: "Backend Framework",
    isImage: true,
  },
  {
    name: "React.js",
    icon: "/react.png",
    category: "Frontend Library",
    isImage: true,
  },
  {
    name: "Figma",
    icon: "/figma.png",
    category: "Design Tool",
    isImage: true,
  },
  {
    name: "Node.js",
    icon: "/node.png",
    category: "Runtime Environment",
    isImage: true,
  },
  {
    name: "JavaScript",
    icon: "/javascript.png",
    category: "Language",
    isImage: true,
  },
  {
    name: "MySQL",
    icon: "/mysql.png",
    category: "Database",
    isImage: true,
  },

  {
    name: "Next.js",
    icon: "/nextjs.png",
    category: "Full Stack Framework",
    isImage: true,
  },
  {
    name: "PostgreSQL",
    icon: "/postgresql.png",
    category: "Database",
    isImage: true,
  },
  { name: "Prisma", icon: "/prisma.png", category: "ORM", isImage: true },

  {
    name: "Tailwind CSS",
    icon: "/tailwindcss.png",
    category: "CSS Framework",
    isImage: true,
  },

  {
    name: "Git / GitHub",
    icon: "/github.png",
    category: "Version Control",
    isImage: true,
  },

  {
    name: "Vercel",
    icon: "/vercel.png",
    category: "Deployment Platform",
    isImage: true,
  },

  {
    name: "Postman",
    icon: "/postman.png",
    category: "API Testing",
    isImage: true,
  },

  { name: "Canva", icon: "/canva.png", category: "Design Tool", isImage: true },
];

const movingSkills1 = [...skills, ...skills];
const reversedSkills = [...skills].reverse();
const movingSkills2 = [...reversedSkills, ...reversedSkills];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group relative min-w-[170px] p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
          </div>

          <div>
            <p className="font-medium text-sm text-foreground">{skill.name}</p>

            <p className="text-xs text-muted-foreground">{skill.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-surface/30 pb-20 lg:pt-3 lg:pb-10 overflow-hidden scroll-mt-24"
    >
      <style>{`
        @keyframes skillsMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes skillsMarqueeReverse {
          0% {
            transform: translateX(-50%);
          }

          100% {
            transform: translateX(0);
          }
        }

      .skills-marquee {
  animation: skillsMarquee 60s linear infinite;
}

.skills-marquee-reverse {
  animation: skillsMarqueeReverse 60s linear infinite;
}

        .skills-marquee:hover,
        .skills-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools I use to build"
          highlight="production-grade products."
          description="A curated stack chosen for performance, maintainability, and speed of delivery."
        />

        <div className="relative overflow-hidden space-y-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="skills-marquee flex w-max gap-4">
            {movingSkills1.map((skill, index) => (
              <SkillCard key={`row-1-${skill.name}-${index}`} skill={skill} />
            ))}
          </div>

          <div className="skills-marquee-reverse flex w-max gap-4">
            {movingSkills2.map((skill, index) => (
              <SkillCard key={`row-2-${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
