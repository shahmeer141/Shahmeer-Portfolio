import { Bot, Database, Mail, MonitorSmartphone, Network, Server, type LucideIcon } from "lucide-react";
import * as icons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const iconMap: Record<string, SimpleIcon> = {
  Kotlin: icons.siKotlin,
  Flutter: icons.siFlutter,
  Dart: icons.siDart,
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
  SQLite: icons.siSqlite,
  "PHP/Laravel": icons.siLaravel,
  Laravel: icons.siLaravel,
  PHP: icons.siPhp,
  Git: icons.siGit,
  GitHub: icons.siGithub,
  Vercel: icons.siVercel,
  Android: icons.siAndroid,
  "Android SDK": icons.siAndroid,
  HTML5: icons.siHtml5,
  CSS3: icons.siCss,
  SQL: icons.siMysql,
  Redux: icons.siRedux,
  "JetPack Compose": icons.siJetpackcompose,
  Postman: icons.siPostman,
  Netlify: icons.siNetlify,
  Docker: icons.siDocker,
  Figma: icons.siFigma,
  Firebase: icons.siFirebase,
  "Firebase (FCM)": icons.siFirebase,
  "JWT Auth": icons.siJsonwebtokens,
  "REST APIs": icons.siSwagger,
  "Material UI": icons.siMui,
  "Styled Components": icons.siStyledcomponents,
  Bootstrap: icons.siBootstrap,
  Puppeteer: icons.siPuppeteer,
  Selenium: icons.siSelenium,
  "Leaflet.js": icons.siLeaflet,
  Axios: icons.siAxios,
  "Jupyter Notebook": icons.siJupyter,
};

const lucideFallbacks: Record<string, { Icon: LucideIcon; color: string }> = {
  AWS: { Icon: Database, color: "#FF9900" },
  "AWS basics": { Icon: Database, color: "#FF9900" },
  "AWS S3": { Icon: Database, color: "#FF9900" },
  "AWS EC2": { Icon: Server, color: "#FF9900" },
  EC2: { Icon: Server, color: "#FF9900" },
  "Responsive UI": { Icon: MonitorSmartphone, color: "#c45c26" },
  "Web Scraping": { Icon: Bot, color: "#a855f7" },
  Nodemailer: { Icon: Mail, color: "#0ea5e9" },
  "Microsoft Azure": { Icon: Database, color: "#0078D4" },
  RoomDB: { Icon: Database, color: "#3DDC84" },
  Retrofit: { Icon: Network, color: "#00A8E1" },
};

const customSvgs: Record<string, string> = {
  "VS Code": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#0065A9" d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.309l-9.46 8.63-4.12-3.126a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.92a.999.999 0 0 0 1.276.057l4.12-3.126 9.46 8.63a1.492 1.492 0 0 0 1.704.31l4.942-2.377A1.5 1.5 0 0 0 24 19.78V4.22a1.5 1.5 0 0 0-.85-1.633z"/><path fill="#007ACC" d="M16.5 21.5 7.442 12.57v-.99L16.5 2.5v19z" opacity=".25"/><path fill="#1F9CF0" d="M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.309L16.5 1.52v20.96l.005.001a1.492 1.492 0 0 0 1.704.31l4.942-2.377A1.5 1.5 0 0 0 24 19.78V4.22a1.5 1.5 0 0 0-.85-1.633z"/></svg>`,
  "Android Studio": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#1A237E" d="M3.6 7.15 12 3.4l8.4 3.75-8.4 2.15z"/><path fill="#1A237E" d="M11.35 3.1h1.3v2.6h-1.3z"/><path stroke="#1A237E" stroke-linecap="round" stroke-width="1.15" d="M18.55 7.15v3.1"/><circle cx="7.15" cy="4.15" r=".85" fill="#7CB342"/><circle cx="16.85" cy="4.15" r=".85" fill="#7CB342"/><path stroke="#7CB342" stroke-linecap="round" stroke-width="1.15" d="M7.7 4.7 10 7.4M16.3 4.7 14 7.4"/><rect width="14.2" height="9.8" x="4.9" y="8.35" fill="#A4C639" rx="2.4"/><circle cx="9.15" cy="12.55" r="1.2" fill="#fff"/><circle cx="14.85" cy="12.55" r="1.2" fill="#fff"/><path fill="#7CB342" d="M8.2 19.4h1.7v2.1H8.2zm5.9 0h1.7v2.1h-1.7z"/></svg>`,
  "Dagger Hilt": `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#3DDC84" d="M12 2.2 13.7 8h-3.4L12 2.2z"/><path fill="#4285F4" d="M9.2 8.6h5.6v2.2H9.2z"/><path fill="#A4C639" d="M11.15 11.2h1.7V21.4c0 .5-.4.9-.85.9s-.85-.4-.85-.9z"/><path fill="#1A237E" d="M8.4 10.4h7.2v1.4H8.4z"/></svg>`,
};

function BrandSvg({ markup }: { markup: string }) {
  return (
    <span
      className="inline-flex h-[18px] w-[18px] shrink-0 [&_svg]:h-full [&_svg]:w-full"
      dangerouslySetInnerHTML={{ __html: markup }}
      aria-hidden="true"
    />
  );
}

export function TechIcon({ name }: { name: string }) {
  const custom = customSvgs[name];
  if (custom) {
    return <BrandSvg markup={custom} />;
  }

  const icon = iconMap[name];
  if (icon) {
    return (
      <span
        className="inline-flex shrink-0 [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:fill-current"
        style={{ color: `#${icon.hex}` }}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
        aria-hidden="true"
      />
    );
  }

  const fallback = lucideFallbacks[name];
  if (fallback) {
    const FallbackIcon = fallback.Icon;
    return (
      <FallbackIcon
        size={18}
        strokeWidth={2}
        className="shrink-0"
        style={{ color: fallback.color }}
        aria-hidden="true"
      />
    );
  }

  return <span className="h-1.5 w-1.5 rounded-full bg-sage" />;
}
