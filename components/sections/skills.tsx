import { skills } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TechIcon } from "@/components/ui/tech-icon";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="Tools I work with"
        description="Technologies I use to bring ideas to life"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 80}>
            <div className="lift h-full rounded-2xl border border-sage/15 bg-surface/70 p-6 hover:border-sage/40">
              <h3 className="text-sm tracking-[0.16em] text-sage uppercase">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="lift-sm inline-flex items-center gap-2 rounded-full bg-sage/10 px-3 py-1.5 text-sm text-foreground hover:bg-sage/20"
                  >
                    <TechIcon name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
