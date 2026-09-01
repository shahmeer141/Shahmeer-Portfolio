/**
 * ============================================================
 *  SITE CONTENT — yahan apni saari personal information daalein
 * ============================================================
 * Har field ke upar comment hai. Placeholder values hain —
 * inhe replace kar ke save karo, website update ho jayegi.
 */

export const site = {
  // ---------- Identity ----------
  /** TODO: Apna poora naam */
  name: "Shahmeer Nadeem",
  /** TODO: Short display name / logo text (navbar pe dikhega) */
  shortName: "SN",
  /** TODO: Role, e.g. "Full Stack Developer" */
  role: "Software Engineer",
  /** TODO: Current company ya "Freelance" / "Open to work" */
  company: "Daira Engineering",
  /** TODO: City, Country */
  location: "Lahore, Pakistan",
  /** TODO: Hero ke upar chhoti badge line */
  availability: "Open to new opportunities & collaboration",

  // ---------- Hero copy ----------
  /** TODO: Hero heading ke baad wala short intro paragraph */
  tagline:
    "I design and build modern web and mobile applications — from polished React interfaces to reliable backend APIs — with a focus on clean code, performance, and products that actually ship.",

  // ---------- Contact ----------
  /** TODO: Apna email */
  email: "shahmeersiddique296@gmail.com",
  /** TODO: LinkedIn profile URL */
  linkedin: "https://linkedin.com/in/shahmeernadeem141",
  /** TODO: LinkedIn display text */
  linkedinLabel: "Shahmeer Nadeem",
  /** TODO: GitHub profile URL */
  github: "https://github.com/shahmeer141",
  /** TODO: GitHub display text */
  githubLabel: "github.com/shahmeer141",
  /**
   * TODO: Resume file `public/resume.pdf` mein add karke path confirm karo.
   * File na ho to button 404 dega — pehle PDF public folder mein rakho.
   */
  resumeUrl: "/resume.pdf",

  // ---------- Photo ----------
  /**
   * TODO: Apni photo `public/profile.jpg` mein daalo, phir neeche path set karo.
   * `null` rehne par initials (shortName) dikhengi.
   */
  photo: "/profile.jpg",

  /** TODO: Footer copyright year */
  copyrightYear: 2026,
  /** TODO: Browser tab title */
  title: "Shahmeer Nadeem | Software Engineer | Portfolio",
  /** TODO: Google / social preview description */
  description:
    "Software Engineer based in Lahore, Pakistan. I build modern web and mobile apps with React, Next.js, Node.js, Tailwind CSS, Kotlin and Flutter.",
};

/** TODO: Hero ke neeche tech marquee — jo technologies use karte ho */
export const techStack = [
  "Kotlin",
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "MySQL",
  "PHP/Laravel",
  "Git",
  "GitHub",
  "Vercel",
];

/** TODO: About section ke 4 highlight cards — icon: code | layers | pin | rocket */
export const aboutHighlights = [
  { label: "Focus", value: "Full-Stack", icon: "code" },
  { label: "Stack", value: "Web / Mobile Apps", icon: "layers" },
  { label: "Based in", value: "Lahore, Pakistan", icon: "pin" },
  { label: "Projects", value: "10+", icon: "rocket" },
] as const;

/**
 * TODO: About paragraphs — apni story 2–4 paragraphs mein likho.
 * Har string ek paragraph hai.
 */
export const aboutParagraphs = [
  "I'm a Full Stack Software Engineer based in Lahore, Pakistan working on Cross Platforms. I enjoy turning messy ideas into calm, usable products — the kind with clear interfaces, solid APIs, and code you can still read six months later.",
  "My work covers the whole stack: For Web: React and Next.js on the frontend, Node.js services on the backend, and thoughtful database design in between. For Android: Kotlin/Java, RoomDB, Retrofit, Dagger Hilt. I care about performance, accessibility, and shipping features that hold up in production.",
  "I'm currently open to new opportunities and collaboration. I do my best work in teams that value craft, feedback, and building things that matter.",
];

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

/**
 * TODO: Experience — nayi job add karne ke liye object copy karke array ke top pe paste karo.
 * Sab se recent pehle.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer - Onsite",
    company: "Daira Engineering",
    location: "Lahore, Pakistan",
    period: "Apr 2026 — Present",
    bullets: [
      "Building Android AR glasses app - Minimis Flow.",
      "Build React / Next.js interfaces and Node.js REST APIs used by real users.",
      "Collaborate with the team through Git, code reviews, and iterative delivery.",
    ],
    stack: ["Kotlin", "Dagger Hilt", "Retrofit", "RoomDB", "MVI", "Node.js"],
  },
  {
    role: "MERN Developer - Onsite",
    company: "Aylvah",
    location: "Lahore, Pakistan",
    period: "Sep 2025 — Mar 2026",
    bullets: [
      "Shipped responsive UI with React, TypeScript, and Tailwind CSS.",
      "Integrated REST APIs and improved page performance and accessibility.",
      "Worked closely with designers to turn mockups into production-ready pages.",
    ],
    stack: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "Git"],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

/**
 * TODO: Projects — featured: true wale cards bade dikhte hain.
 * Live link na ho to `href` hata dena.
 */
export const projects: ProjectItem[] = [
  {
    title: "Project One — Minimis Flow",
    description:
      "A product dashboard with auth, role-based views, and real-time updates. Replace this with what you actually built, the problem it solved, and the stack you used.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    featured: true,
  },
  {
    title: "Project Two — E-commerce Store",
    description:
      "A storefront with catalog, cart, and checkout flow. Add a sentence about the client, the market, or a technical challenge you solved.",
    tags: ["React.js", "Express", "REST APIs", "MongoDB"],
    featured: true,
  },
  {
    title: "Project Three — Marketing Site",
    description:
      "A content-rich marketing website with SEO-friendly pages and a fast, responsive layout.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
  {
    title: "Project Four — Internal Tool",
    description:
      "An internal tool that replaced a spreadsheet workflow. Mention the outcome if you can (time saved, errors reduced, etc.).",
    tags: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Project Five — Portfolio / Blog",
    description:
      "A personal or client publication with articles, tags, and a clean reading experience.",
    tags: ["Next.js", "MDX", "Vercel"],
  },
  {
    title: "Project Six — API Platform",
    description:
      "Backend APIs for a mobile or web client: authentication, CRUD resources, and deployment.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];

/** TODO: Skills — category heading + list. Items add/remove freely. */
export const skills = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Kotlin", "Python", "PHP", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Redux", "JetPack Compose", "Tailwind CSS", "Bootstrap", "Material UI", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "REST APIs", "JWT Auth", "Retrofit"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "SQLite", "RoomDB"],
  },
  {
    title: "Tools & Libraries",
    items: ["Git", "GitHub", "Postman", "VS Code", "Android Studio", "Jupyter Notebook", "Android SDK", "Figma", "Dagger Hilt"],
  },
  {
    title: "Deployment",
    items: ["Vercel", "Netlify", "AWS S3"],
  },
];

export type EducationItem = {
  title: string;
  org: string;
  period: string;
  detail?: string;
};

/** TODO: Degree / university */
export const education: EducationItem[] = [
  {
    title: "BS Information Technology (IT)",
    org: "Punjab University College of Information and Technology (PUCIT)",
    period: "2021 — 2025"
  },
];

/** TODO: Courses / certificates */
export const certifications: EducationItem[] = [
  {
    title: "AI Development",
    org: "Corvit Systems, Lahore - Onsite",
    period: "Oct 2022 — Feb 2023",
  },
];

export const nav: { href: string; label: string; featured?: boolean }[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Hire Me", featured: true },
  { href: "#contact", label: "Contact" },
];