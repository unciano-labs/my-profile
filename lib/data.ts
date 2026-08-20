/**
 * lib/data.ts
 * Single source of truth for all static site content (typed).
 * Components import from here instead of defining content inline.
 */

/* ------------------------------ Nav ------------------------------ */

export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export interface FooterLink {
  href: string;
  label: string;
}

export const FOOTER_LINKS: FooterLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------ About ------------------------------ */

export interface QuickFact {
  icon: string;
  term: string;
  detail: string;
}

export const QUICK_FACTS: QuickFact[] = [
  { icon: "🏠", term: "Based in", detail: "Antipolo City, Philippines" },
  { icon: "🎓", term: "Degree", detail: "BS Information Technology" },
  { icon: "🗣️", term: "Languages", detail: "English · Filipino" },
  {
    icon: "🌏",
    term: "Working remotely since",
    detail: "2019, with US and Europe teams",
  },
];

/* ---------------------------- Experience ---------------------------- */

export interface Job {
  year: string;
  meta: string;
  hand: string;
  company: string;
  title: string;
  points: string[];
  takeaway: string;
  tags: string[];
  /** Presence of a badge marks the "current" role (amber timeline dot). */
  badge?: string;
  /** Tilts the hand-written caption right (+1deg) instead of left. */
  mirrored?: boolean;
}

export const JOBS: Job[] = [
  {
    year: "2026",
    meta: "Jan 2026 — present · Cyprus · remote",
    hand: "the current chapter ✎",
    company: "Palace Unity",
    title: "Full-Stack Developer & Chat Support",
    points: [
      "Started in QA testing before moving into development, working alongside a senior dev to implement assigned features and UI updates.",
      "Leveraged AI coding tools to write and refine code faster, building components efficiently with React, Next.js, and Tailwind.",
      "Tested internal property management tools, catching edge cases early and turning QA feedback directly into code fixes.",
      "Handled technical requests from hosts and guests, translating real-world support issues into dev fixes.",
      "Managed daily guest communications and technical support, handling inquiries from short-term rental hosts and guests from start to finish.",
    ],
    takeaway:
      "What stuck with me: Combining QA discipline with AI tools lets you ship reliable code much faster.",
    tags: [
      "React.js",
      "Next.js",
      "Tailwind",
      "AI integration",
      "Supabase",
      "QA testing",
      "Customer support",
    ],
    badge: "CURRENT",
  },
  {
    year: "2019",
    meta: "Oct 2019 — Oct 2025 · US · remote",
    hand: "six steady years ✎",
    company: "PeachWiz Inc.",
    title: "Full-Stack Developer",
    points: [
      "Built and maintained complete web applications for six years — including all the testing.",
      "Maintained integrations with outside services to deliver clean data parsing, reliable uptime, and predictable API behavior.",
      "Modernized legacy codebases into clean, standard MVC and OOP patterns to reduce technical debt and simplify maintenance.",
      "Worked across the whole build process with Laravel, PHP, jQuery and MySQL.",
    ],
    takeaway: "What stuck with me: reliable beats clever, every time.",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "API development",
      "Node.js",
      "Server Administration",
      "HTML & CSS",
    ],
    mirrored: true,
  },
  {
    year: "2018",
    meta: "Jan 2018 — Oct 2019 · Philippines",
    hand: "where it all started ✎",
    company: "AcaciaSoft",
    title: "Full-Stack Developer",
    points: [
      "Built and released systems with a focus on clean, error-free code.",
      "Found and fixed serious problems before anything reached customers.",
      "Worked on both the front and the back of applications — which taught me to write thorough tests.",
      "Handled end-to-end deployments and server administration, troubleshooting live issues and maintaining environment stability.",
    ],
    takeaway:
      "What stuck with me: test like the release is yours — because it is.",
    tags: [
      "PHP",
      "Laravel",
      "Deployment",
      "Debugging",
      "DevOps",
      "Software Testing",
      "HTML & CSS",
    ],
  },
];

/* ---------------------------- Projects ---------------------------- */

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  meta: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  images: ProjectImage[];
  /** Rotation applied to the whole image frame (carousel). */
  rotate: string;
  imageSide: "left" | "right";
  /** PeachWiz uses a sage card behind the text column. */
  textCard?: boolean;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export const PROJECTS: Project[] = [
  {
    meta: "2026 · STR · QA and developer",
    title: "Ruvix — property management suite",
    description:
      "An internal tool for managing holiday rentals in Cyprus and the US: listings, bookings and owner payments. I worked on both the QA and development sides, testing new features and implementing fixes.",
    bullets: [
      "Built new features and UI updates with React, Next.js, Tailwind and Supabase",
      "QA testing caught 30+ edge cases before they reached customers",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind","React","Supabase","QA testing","AI-assisted development"],
    images: [
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-bvqd.png",
        alt: "property listing screen from the Ruvix property management suite",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/dashboard.png",
        alt: "Dashboard screen from the Ruvix property management suite",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/booking.png",
        alt: "Booking screen from the Ruvix property management suite",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/guest-messaging.png",
        alt: "Centralized Chat support screen from the Ruvix property management suite",
      },
    ],
    rotate: "rotate-[.8deg]",
    imageSide: "left",
    ctaPrimary: { label: "Private App", href: "#" },
    ctaSecondary: { label: "Code ↗", href: "#" },
  },
  {
    meta: "2025 · PeachWiz Inc. · Developer",
    title: "Youportal - HOA management portal",
    description:
      "A centralized, multi-domain portal for HOA board members to manage property operations and community governance across multiple custom domains..",
    bullets: [
      "99.9% monitoring uptime for 6 years",
      "Iterating on system functionality by regularly building, testing, and deploying scheduled feature updates.",
    ],
    tags: ["Laravel", "MySQL", "jQuery","PHP","Server Administration"],
    images: [
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-esla.png",
        alt: "Administration dashboard from the Youportal HOA management portal",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-ezgt.png",
        alt: "A Marketplace for service offered to HOA residents, from the Youportal HOA management portal",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-escj.png",
        alt: "A website administration screen from the Youportal HOA management portal",
      },
    ],
    rotate: "rotate-[-.8deg]",
    imageSide: "right",
    textCard: true,
    ctaPrimary: { label: "Private App", href: "#" },
    ctaSecondary: { label: "Code ↗", href: "#" },
  },
  {
    meta: "2026 → Shopify · Theme developer",
    title: "Kubaws — Ecommerce storefront theme",
    description:
      "A modern, responsive theme for Shopify stores for supermarket that enhances the shopping experience and boosts conversion rates.",
    bullets: [
      "Built with Liquid, Tailwind CSS, and JavaScript for a seamless shopping experience",
      "Optimized for speed and performance, ensuring fast load times and smooth navigation",
      "Converted from PDF mockups to a fully functional Shopify theme, maintaining design integrity and user experience",
    ],
    tags: ["Shopify", "Liquid", "Tailwind CSS","JavaScript",'API Integration',"AI-assisted development"],
    images: [
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-fdau.png",
        alt: "Ecommerce storefront theme for Kubaws, built with Liquid, Tailwind CSS, and JavaScript",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-fdfn.png",
        alt: "Products page from the Kubaws ecommerce storefront theme, built with Liquid, Tailwind CSS, and JavaScript",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-fdjw.png",
        alt: "Product detail page from the Kubaws ecommerce storefront theme, built with Liquid, Tailwind CSS, and JavaScript",
      },
      {
        src: "https://uaumuuggwipzfhkssivc.supabase.co/storage/v1/object/public/my-profile/SCR-20260817-fdpw.png",
        alt: "Shopping cart page from the Kubaws ecommerce storefront theme, built with Liquid, Tailwind CSS, and JavaScript",
      },
    ],
    rotate: "rotate-[.6deg]",
    imageSide: "left",
    ctaPrimary: { label: "Check Out the Store", href: "https://store-one-nmlvqp9w.myshopify.com/" },
    ctaSecondary: { label: "password: chaymo ↗", href: "#" },
  },
  {
    meta: "Lab · 2026 · AI video",
    title: "FrameForge — AI video storyboard lab",
    description:
      "A small pipeline that turns product notes into five-second demo videos. A library of tested prompts keeps the characters and the style consistent between takes.",
    bullets: [
      "More than 40 tested prompt patterns, versioned like code",
      "These short loops are now used in internal pitches",
    ],
    tags: ["Text-to-video", "Image-to-video", "Prompt design"],
    images: [
      {
        src: "https://picsum.photos/seed/frameforge-board/900/560",
        alt: "Storyboard board from the FrameForge video lab",
      },
      {
        src: "https://picsum.photos/seed/frameforge-takes/900/560",
        alt: "Video takes library in FrameForge",
      },
      {
        src: "https://picsum.photos/seed/frameforge-prompts/900/560",
        alt: "Prompt library in FrameForge",
      },
    ],
    rotate: "rotate-[-.6deg]",
    imageSide: "right",
    ctaPrimary: { label: "Read Lab Notes ↓", href: "#lab" },
    ctaSecondary: { label: "Clips ↗", href: "#" },
  },
];

/* ------------------------------- Lab ------------------------------- */

export interface LabNote {
  date: string;
  text: string;
}

export interface LabCard {
  image: { src: string; alt: string };
  badge: { label: string; className: string };
  title: string;
  description: string;
  notes: LabNote[];
  noteBorder: "amber" | "pine";
  tags: string[];
  cardClassName: string;
  delay?: 1 | 2;
}

export const LAB_CARDS: LabCard[] = [
  {
    image: {
      src: "https://picsum.photos/seed/shopify-theme-desk/700/440",
      alt: "A laptop showing an online store theme Freddie built, beside folded fabric samples",
    },
    badge: { label: "ACTIVE", className: "bg-pine text-cream rotate-[-3deg]" },
    title: "🛍️ Shopify theme building",
    description:
      "Designing and building custom storefront themes — sections that store owners can rearrange themselves, fast pages, and checkouts that don't confuse anyone.",
    notes: [
      { date: "Feb 2026", text: "first theme passed Shopify's own checks with zero warnings." },
      { date: "Jan 2026", text: "rebuilt a product page; it now opens in under a second on a phone." },
      { date: "Dec 2025", text: "started studying Liquid and theme sections." },
    ],
    noteBorder: "amber",
    tags: ["Liquid", "Theme sections", "Storefront design", "Speed tuning"],
    cardClassName:
      "bg-cream border-2 border-ink/10 rounded-lg overflow-hidden shadow-md lg:rotate-[-.6deg]",
  },
  {
    image: {
      src: "https://picsum.photos/seed/ai-video-stills/700/440",
      alt: "A wall of printed video stills and storyboards from AI generation experiments",
    },
    badge: { label: "EXPLORING", className: "bg-amber text-ink rotate-[2deg]" },
    title: "🎬 AI image & video generation",
    description:
      "Turning plain written notes into product pictures and five-second demo clips — with careful prompt writing so characters and style stay consistent between takes.",
    notes: [
      { date: "Feb 2026", text: "a five-second product loop made from plain notes was used in an internal pitch." },
      { date: "Jan 2026", text: "prompt library, version 2: the same character across 40+ patterns." },
      { date: "Dec 2025", text: "first image-to-video tests; kept the best ten seconds out of a hundred." },
    ],
    noteBorder: "pine",
    tags: ["Text-to-image", "Text-to-video", "Image-to-video", "Prompt design"],
    cardClassName:
      "bg-sand border-2 border-ink/10 rounded-lg overflow-hidden shadow-md lg:mt-10",
    delay: 1,
  },
  {
    image: {
      src: "https://picsum.photos/seed/home-server-shelf/700/440",
      alt: "Freddie's small home server with tidy cables on a wooden shelf",
    },
    badge: { label: "ALWAYS-ON", className: "bg-ink text-cream rotate-[-2deg]" },
    title: "🖥️ Home server administration",
    description:
      "A small server at home that runs my backups, blocks ads for the whole house, and hosts family photos — maintained like a real production box, just cozier.",
    notes: [
      { date: "Feb 2026", text: "automatic backups are now restore-tested once a month, on purpose." },
      { date: "Jan 2026", text: "moved the family photo archive to self-hosted storage." },
      { date: "Nov 2025", text: "the server moved to the hallway shelf; noise problem solved." },
    ],
    noteBorder: "amber",
    tags: ["Docker", "Pi-hole", "Backups", "Monitoring"],
    cardClassName:
      "bg-cream border-2 border-ink/10 rounded-lg overflow-hidden shadow-md md:col-span-2 lg:col-span-1 lg:rotate-[.6deg]",
    delay: 2,
  },
];

/* ------------------------------ Skills ------------------------------ */

export interface SkillBar {
  name: string;
  pct: number;
}

export interface SkillTag {
  label: string;
  accent?: boolean;
}

export interface SkillGroup {
  title: string;
  tags: SkillTag[];
}

export const BARS: SkillBar[] = [
  { name: "PHP", pct: 35 },
  { name: "JavaScript", pct: 25 },
  { name: "TypeScript", pct: 15 },
  { name: "HTML & CSS", pct: 15 },
  { name: "Python", pct: 10 },
];

export const GROUPS: SkillGroup[] = [
  {
    title: "Front-end",
    tags: [
      { label: "React.js" },
      { label: "Next.js" },
      { label: "Tailwind CSS" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Bootstrap" },
      { label: "AJAX" },
    ],
  },
  {
    title: "Back-end",
    tags: [
      { label: "PHP / Laravel" },
      { label: "Node.js" },
      { label: "Python" },
      { label: "MySQL" },
      { label: "jQuery" },
      { label: "REST APIs" },
    ],
  },
  {
    title: "Tools & practice",
    tags: [
      { label: "AI-assisted development", accent: true },
      { label: "AI image & video", accent: true },
      { label: "Shopify themes", accent: true },
      { label: "Home server admin", accent: true },
      { label: "Software testing" },
      { label: "Git" },
      { label: "Docker" },
      { label: "Postman" },
      { label: "VS Code" },
      { label: "Server administration" },
    ],
  },
];

/* ----------------------------- Gallery ----------------------------- */

export type GalleryCategory = "hobby" | "skill";
export type GalleryFilter = "all" | GalleryCategory;

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  cat: GalleryCategory;
  span?: string;
  rotate?: string;
  fill?: boolean;
  delay?: 1 | 2;
}

export const FILTERS: { key: GalleryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hobby", label: "Hobbies" },
  { key: "skill", label: "Other skills" },
];

export const ITEMS: GalleryItem[] = [
  {
    src: "https://picsum.photos/seed/hobby-guitar/900/700",
    width: 900,
    height: 700,
    alt: "A guitar resting against a chair in warm evening light",
    title: "Guitar nights",
    caption: "slow songs, slow code reviews",
    cat: "hobby",
    span: "sm:col-span-2 lg:row-span-2",
    fill: true,
  },
  {
    src: "https://picsum.photos/seed/hobby-hiking/500/500",
    width: 500,
    height: 500,
    alt: "A forest trail in the Sierra Madre mountains",
    title: "Sierra Madre trails",
    caption: "debugging by walking",
    cat: "hobby",
    rotate: "rotate-[.7deg]",
    delay: 1,
  },
  {
    src: "https://picsum.photos/seed/hobby-film/500/500",
    width: 500,
    height: 500,
    alt: "A film camera on a wooden table",
    title: "Film photography",
    caption: "36 frames of patience",
    cat: "hobby",
    delay: 1,
  },
  {
    src: "https://picsum.photos/seed/hobby-coffee/500/500",
    width: 500,
    height: 500,
    alt: "Pour-over coffee being brewed",
    title: "Pour-over coffee",
    caption: "ratio-tested, like everything",
    cat: "hobby",
    delay: 2,
  },
  {
    src: "https://picsum.photos/seed/skill-writing/500/500",
    width: 500,
    height: 500,
    alt: "A notebook with handwritten technical notes",
    title: "Technical writing",
    caption: "docs people actually read",
    cat: "skill",
    rotate: "rotate-[-.7deg]",
    delay: 1,
  },
  {
    src: "https://picsum.photos/seed/skill-mentoring/500/500",
    width: 500,
    height: 500,
    alt: "Two people reviewing code together on one laptop",
    title: "Mentoring juniors",
    caption: "code review as teaching",
    cat: "skill",
    delay: 2,
  },
  {
    src: "https://picsum.photos/seed/skill-servers/500/500",
    width: 500,
    height: 500,
    alt: "A quiet home server corner with soft lights",
    title: "Home server tinkering",
    caption: "ssh, logs, calm nights",
    cat: "skill",
    delay: 2,
  },
  {
    src: "https://picsum.photos/seed/skill-video/500/500",
    width: 500,
    height: 500,
    alt: "A video editing timeline on a monitor",
    title: "Video editing",
    caption: "cuts, pacing, AI takes",
    cat: "skill",
    rotate: "rotate-[.5deg]",
    delay: 2,
  },
];

/* ---------------------------- Kind Words ---------------------------- */

export interface Testimonial {
  quote: string;
  author: string;
  rotate: string;
  translate?: string;
  tapeRotate: string;
  delay?: 1 | 2;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '"Freddie treats your production like his own. He flagged bottlenecks we didn\'t know we had — then fixed them."',
    author: "— Operations Manager, Palace Unity · Cyprus",
    rotate: "rotate-[-1.5deg]",
    tapeRotate: "rotate-[-3deg]",
  },
  {
    quote:
      '"Six years, zero drama. Endpoints stayed reliable through every integration we threw at him."',
    author: "— CTO, PeachWiz Inc. · US",
    rotate: "rotate-[1deg]",
    translate: "md:translate-y-6",
    tapeRotate: "rotate-[2deg]",
    delay: 1,
  },
  {
    quote:
      '"Error-free releases became the norm after he joined our deployment pipeline."',
    author: "— Team Lead, AcaciaSoft · Philippines",
    rotate: "rotate-[-.5deg]",
    tapeRotate: "rotate-[-1deg]",
    delay: 2,
  },
];

/* ----------------------------- Contact ----------------------------- */

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: "Are you open to international remote roles?",
    a: "Yes — more than six years working remotely with US and Europe teams. I'm comfortable working across time zones, with or without overlapping hours.",
  },
  {
    q: "Can you join an existing codebase?",
    a: "That's most of my career: reading carefully, testing, and making things stable before adding anything new.",
  },
  {
    q: "Do you provide references?",
    a: "Gladly — I can connect you with past managers from all three companies.",
  },
  {
    q: "What are your working hours?",
    a: "I'm based near Manila (GMT+8) and I happily overlap with US mornings and European afternoons. I've worked this way since 2019.",
  },
];
