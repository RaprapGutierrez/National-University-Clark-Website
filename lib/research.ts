// Content for the Research page.

export type Researcher = {
  /** Unique, lowercase, no spaces. Example: "maria-santos" */
  slug: string;
  name: string;
  /** Position. Example: "Associate Professor" */
  title?: string;
  /** School slug from lib/site.ts. Example: "satc", "engineering", "sabm" */
  school: string;
  /** Research interests. Example: ["Machine learning", "Education technology"] */
  areas?: string[];
  /** One or two sentences about their work */
  bio?: string;
  /** Photo saved in /public/research/ */
  photo?: string;
  /** Profile links. Example: Google Scholar, ORCID, LinkedIn */
  links?: { label: string; href: string }[];
};

export type ResearchUpdate = {
  /** Unique, lowercase, no spaces */
  slug: string;
  title: string;
  /** Display date. Example: "November 20, 2026" */
  date: string;
  /** Short label. Example: "Publication", "Presentation", "Award", "Grant" */
  tag: string;
  summary: string;
  /** Picture saved in /public/research/ */
  image?: { src: string; alt: string };
  /** Link to the paper, announcement, or Facebook post */
  href?: string;
};

// Add researchers here.
//
// {
//   slug: "maria-santos",
//   name: "Maria Santos",
//   title: "Associate Professor",
//   school: "satc",
//   areas: ["Machine learning"],
//   bio: "Short description.",
//   photo: "/research/maria-santos.jpg",
//   links: [{ label: "Google Scholar", href: "https://scholar.google.com/..." }],
// },
export const researchers: Researcher[] = [];

// Add research news and updates here, newest first.
//
// {
//   slug: "example-update",
//   title: "Update title",
//   date: "November 20, 2026",
//   tag: "Publication",
//   summary: "Two or three sentences.",
//   href: "https://...",
// },
export const researchUpdates: ResearchUpdate[] = [];
