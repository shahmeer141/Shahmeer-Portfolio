import Image from "next/image";
import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { site, techStack } from "@/lib/site";
import { Container } from "@/components/ui/section";
import { TechIcon } from "@/components/ui/tech-icon";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center pt-24 pb-8">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sage/25 bg-sage/10 px-3 py-1 text-xs tracking-[0.16em] text-sage-bright uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-sage-bright" />
              {site.availability}
            </p>

            <h1 className="font-serif text-5xl leading-[1.15] text-foreground sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-sage-bright">{site.name}</span>
            </h1>

            <p className="mt-5 text-lg text-foreground/90 sm:text-xl">
              {site.role}{" "}
              <span className="text-muted">@ {site.company}</span>
            </p>

            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} className="text-sage" />
              {site.location}
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted">{site.tagline}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-sage-bright"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-sage/30 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-sage hover:bg-sage/10"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-6 rounded-[2rem] border border-sage/15"
              style={{
                transform:
                  "translate3d(calc((var(--mx, 0.5) - 0.5) * 12px), calc((var(--my, 0.5) - 0.5) * 10px), 0)",
              }}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-sage/25 bg-moss">
              {site.photo ? (
                <Image
                  src={site.photo}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 80vw"
                  priority
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(196,92,38,0.18),transparent_55%)]">
                  <span className="font-serif text-7xl text-sage-bright">{site.shortName}</span>
                  <span className="mt-3 text-sm tracking-[0.2em] text-muted uppercase">
                    {site.name}
                  </span>
                </div>
              )}
            </div>
            <span className="absolute -right-3 -bottom-3 h-16 w-16 rounded-2xl border border-sage/30 bg-sage/10" />
            <span className="absolute -top-4 -left-4 h-10 w-10 rotate-12 rounded-lg border border-gold/40 bg-gold/10" />
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-sage-bright"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </Container>

      <div className="mt-16 border-y border-sage/10 bg-background/40 py-5">
        <p className="mb-4 text-center text-[11px] tracking-[0.24em] text-muted uppercase">
          Technologies I Work With
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee marquee-track flex w-max gap-10 pr-10">
            {[...techStack, ...techStack].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="lift-sm flex items-center gap-2.5 text-sm text-foreground"
              >
                <TechIcon name={tech} />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
