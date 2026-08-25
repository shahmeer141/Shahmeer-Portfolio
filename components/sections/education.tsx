import type { ReactNode } from "react";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/section";

function CardList({
  icon,
  heading,
  items,
}: {
  icon: ReactNode;
  heading: string;
  items: { title: string; org: string; period: string; detail?: string }[];
}) {
  return (
    <div className="rounded-2xl border border-sage/15 bg-[#101714]/70 p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2 text-sage-bright">
        {icon}
        <h3 className="text-lg text-foreground">{heading}</h3>
      </div>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={`${item.title}-${item.org}`}>
            <p className="text-foreground">{item.title}</p>
            <p className="mt-1 text-sm text-sage-bright">{item.org}</p>
            <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            {item.detail ? <p className="mt-2 text-sm text-muted">{item.detail}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title="Studies & training"
        description="My academic background and professional training"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <CardList
          icon={<GraduationCap size={20} />}
          heading="Education"
          items={education}
        />
        <CardList
          icon={<Award size={20} />}
          heading="Certifications"
          items={certifications}
        />
      </div>
    </Section>
  );
}
