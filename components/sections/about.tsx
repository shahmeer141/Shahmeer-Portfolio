import { Code2, Layers, MapPin, Rocket, type LucideIcon } from "lucide-react";
import { aboutHighlights, aboutParagraphs } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const highlightIcons: Record<(typeof aboutHighlights)[number]["icon"], LucideIcon> = {
  code: Code2,
  layers: Layers,
  pin: MapPin,
  rocket: Rocket,
};

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="About Me"
        description="A little context before the work."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {aboutHighlights.map((item, index) => {
            const Icon = highlightIcons[item.icon];

            return (
              <Reveal key={item.label} delay={index * 90} className="h-full">
                <div className="lift flex h-full min-h-[128px] flex-col items-center justify-center rounded-2xl border border-sage/15 bg-moss/60 px-2.5 py-4 text-center hover:border-sage/40 sm:min-h-[148px] sm:px-4 lg:min-h-0 lg:items-start lg:justify-start lg:p-5 lg:text-left">
                  {Icon ? (
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      className="mb-2.5 text-sage lg:mb-3 lg:size-7"
                    />
                  ) : null}
                  <p className="text-[10px] tracking-[0.18em] text-sage uppercase sm:text-[11px]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-serif text-[15px] leading-snug text-foreground sm:mt-2 sm:text-xl lg:text-2xl">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="space-y-5 text-base leading-7 text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
