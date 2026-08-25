import { aboutHighlights, aboutParagraphs } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="About Me"
        description="A little context before the work."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-3">
          {aboutHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-sage/15 bg-moss/60 p-5"
            >
              <p className="text-[11px] tracking-[0.18em] text-sage uppercase">{item.label}</p>
              <p className="mt-2 font-serif text-2xl leading-snug text-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-5 text-base leading-7 text-muted">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
