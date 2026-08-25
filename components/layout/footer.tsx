import { site } from "@/lib/site";
import { Container } from "@/components/ui/section";

export function Footer() {
  return (
    <footer className="border-t border-sage/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          <span className="font-serif text-sage-bright">{site.shortName}.</span>{" "}
          © {site.copyrightYear} {site.name}
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </Container>
    </footer>
  );
}
