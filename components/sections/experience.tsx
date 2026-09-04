import { experience } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TechIcon } from "@/components/ui/tech-icon";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Where I've worked"
        description="My professional journey so far"
      />

      <ol className="relative space-y-8 border-l border-sage/20 pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-sage bg-background sm:-left-[39px]" />

            <Reveal delay={index * 110}>
              <article className="lift rounded-2xl border border-sage/15 bg-surface/70 p-6 hover:border-sage/40 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl text-foreground">{job.role}</h3>
                    <p className="mt-1 text-sage-bright">
                      {job.company}
                      <span className="text-muted"> — {job.location}</span>
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs tracking-wide text-muted">{job.period}</p>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((item) => (
                    <span
                      key={item}
                      className="lift-sm inline-flex items-center gap-2 rounded-full border border-sage/20 px-3 py-1 text-xs text-sage-bright hover:border-sage/50 hover:bg-sage/10"
                    >
                      <TechIcon name={item} />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
