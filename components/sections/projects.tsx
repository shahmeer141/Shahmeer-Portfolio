import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Selected work"
        description="A selection of things I've built"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const span = project.featured ? "md:col-span-2" : undefined;
          const card = (
            <div
              className={cn(
                "group h-full rounded-2xl border border-sage/15 bg-surface/70 p-6 hover:border-sage/40 hover:bg-moss/50 sm:p-8",
                project.featured && "lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-8",
              )}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.featured ? (
                      <p className="mb-2 text-[11px] tracking-[0.18em] text-gold uppercase">
                        Featured
                      </p>
                    ) : null}
                    <h3 className="text-xl text-foreground">{project.title}</h3>
                  </div>
                  {project.href ? (
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted transition-colors group-hover:text-sage-bright"
                    />
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
              </div>

              <div className={cn("mt-5 flex flex-wrap gap-2", project.featured && "lg:mt-0 lg:self-end")}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="lift-sm rounded-full border border-sage/20 px-3 py-1 text-xs text-sage-bright hover:border-sage/50 hover:bg-sage/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          if (!project.href) {
            return (
              <Reveal key={project.title} className={span} delay={index * 80}>
                <div className="lift h-full">{card}</div>
              </Reveal>
            );
          }

          return (
            <Reveal key={project.title} className={span} delay={index * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift block h-full"
              >
                {card}
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
