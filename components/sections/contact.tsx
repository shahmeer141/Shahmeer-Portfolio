import { FileText, Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: site.githubLabel,
    href: site.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
    href: undefined,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Let's connect"
        description="I'm open to new opportunities and collaboration"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {links.map((item, index) => {
          const content = (
            <div className="flex h-full items-start gap-3 rounded-2xl border border-sage/15 bg-[#101714]/70 p-5 hover:border-sage/40">
              <item.icon size={18} className="mt-0.5 text-sage" />
              <div>
                <p className="text-[11px] tracking-[0.18em] text-sage uppercase">{item.label}</p>
                <p className="mt-1 text-sm text-foreground">{item.value}</p>
              </div>
            </div>
          );

          return (
            <Reveal key={item.label} delay={index * 80}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="lift block h-full"
                >
                  {content}
                </a>
              ) : (
                <div className="lift h-full">{content}</div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-[#0c110f] transition-colors hover:bg-sage-bright"
          >
            <Send size={16} />
            Send Email
          </a>
          <a
            href={site.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-sage hover:bg-sage/10"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
