const slugs: Record<string, string> = {
  Kotlin: "kotlin",
  Python: "python",
  React: "react",
  "React.js": "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Node.js": "nodedotjs",
  Express: "express",
  MongoDB: "mongodb",
  Tailwind: "tailwindcss",
  "Tailwind CSS": "tailwindcss",
  MySQL: "mysql",
  "PHP/Laravel": "laravel",
  Laravel: "laravel",
  PHP: "php",
  Git: "git",
  GitHub: "github",
  Vercel: "vercel",
  Flutter: "flutter",
  Android: "android",
};

export function TechIcon({ name }: { name: string }) {
  const slug = slugs[name];

  if (!slug) {
    return <span className="h-1.5 w-1.5 rounded-full bg-sage" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={18}
      height={18}
      className="h-[18px] w-[18px] shrink-0"
    />
  );
}
