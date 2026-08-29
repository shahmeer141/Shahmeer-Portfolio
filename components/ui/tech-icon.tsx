import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const iconMap: Record<string, SimpleIcon> = {
  Kotlin: icons.siKotlin,
  Python: icons.siPython,
  React: icons.siReact,
  "React.js": icons.siReact,
  "Next.js": icons.siNextdotjs,
  TypeScript: icons.siTypescript,
  JavaScript: icons.siJavascript,
  "JavaScript (ES6+)": icons.siJavascript,
  "Node.js": icons.siNodedotjs,
  Express: icons.siExpress,
  "Express.js": icons.siExpress,
  MongoDB: icons.siMongodb,
  Tailwind: icons.siTailwindcss,
  "Tailwind CSS": icons.siTailwindcss,
  MySQL: icons.siMysql,
  "PHP/Laravel": icons.siLaravel,
  Laravel: icons.siLaravel,
  PHP: icons.siPhp,
  Git: icons.siGit,
  GitHub: icons.siGithub,
  Vercel: icons.siVercel,
  Android: icons.siAndroid,
  HTML5: icons.siHtml5,
  CSS3: icons.siCss,
  SQL: icons.siSqlite,
  Redux: icons.siRedux,
  "JetPack Compose": icons.siJetpackcompose,
  Postman: icons.siPostman,
  "Android Studio": icons.siAndroidstudio,
  Netlify: icons.siNetlify,
  Docker: icons.siDocker,
  Figma: icons.siFigma,
  Firebase: icons.siFirebase,
};

export function TechIcon({ name }: { name: string }) {
  const icon = iconMap[name];

  if (!icon) {
    return <span className="h-1.5 w-1.5 rounded-full bg-sage" />;
  }

  return (
    <span
      className="inline-flex shrink-0 [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:fill-current"
      style={{ color: `#${icon.hex}` }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      aria-hidden="true"
    />
  );
}
