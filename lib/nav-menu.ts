import { campusContact, qualityManagement } from "@/lib/about";
import { sections, type Section } from "@/lib/site";

export type NavItem = { label: string; sub?: string; href: string };
export type NavGroup = { title?: string; href?: string; items: NavItem[] };

/** Top utility strip (desktop) + hamburger extras (mobile). */
export const utilityNavLinks = [
  { label: "Quality Management", href: qualityManagement },
  { label: "Linkages", href: "/linkages" },
  { label: "Community Development", href: "/community-development" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: campusContact },
] as const;

/** Slim program index for navigation only — keeps full program copy out of the client bundle. */
const navProgramsBySchool: Record<
  string,
  Array<{ slug: string; title: string; text?: string }>
> = {
  "senior-high-school": [
    {
      slug: "abm",
      title: "ABM",
      text: "Accountancy, Business, and Management",
    },
    {
      slug: "stem",
      title: "STEM",
      text: "Science, Technology, Engineering, and Mathematics",
    },
    {
      slug: "humss",
      title: "HUMSS",
      text: "Humanities and Social Sciences",
    },
  ],
  sabm: [
    { slug: "bs-management-accounting", title: "BS Management Accounting" },
    { slug: "bs-accountancy", title: "BS Accountancy" },
    {
      slug: "bs-business-administration",
      title: "BS Business Administration",
      text: "Major in Marketing Management",
    },
    { slug: "bs-tourism-management", title: "BS Tourism Management" },
  ],
  seas: [
    { slug: "ba-political-science", title: "AB Political Science" },
    { slug: "bs-communication", title: "AB Communication" },
    { slug: "bs-psychology", title: "BS Psychology" },
  ],
  satc: [
    { slug: "bs-architecture", title: "BS Architecture" },
    {
      slug: "bs-information-technology",
      title: "BS Information Technology",
      text: "Specialization in Mobile and Web Applications",
    },
    {
      slug: "bs-computer-science",
      title: "BS Computer Science",
      text: "Specialization in Artificial Intelligence",
    },
  ],
  engineering: [
    { slug: "bs-civil-engineering", title: "BS Civil Engineering" },
    { slug: "bs-computer-engineering", title: "BS Computer Engineering" },
  ],
  hospitality: [
    { slug: "doctor-of-dental-medicine", title: "Doctor of Dental Medicine" },
    { slug: "bs-medical-technology", title: "BS Medical Technology" },
  ],
  "office-of-the-academic-director": [
    { slug: "language-center", title: "Language Center" },
  ],
};

export const LANGUAGE_CENTER_URL =
  "https://www.facebook.com/people/NU-Clark-Language-Center/61578139199668/";

const order = ["academics", "admissions", "student-life", "about"] as const;

export const navSections = order
  .map((slug) => sections.find((s) => s.slug === slug))
  .filter((s): s is Section => Boolean(s));

export const extraNavLinks = [
  { label: "Research", href: "/research" },
  { label: "Alumni", href: "/alumni" },
  { label: "News", href: "/news" },
];

function programsOf(sectionSlug: string, pageSlug: string): NavItem[] {
  return (navProgramsBySchool[pageSlug] ?? []).map((p) => ({
    label: p.title,
    sub: p.text,
    href: `/${sectionSlug}/${pageSlug}/${p.slug}`,
  }));
}

function buildColumns(s: Section): NavGroup[][] {
  if (s.slug === "academics") {
    const groups: NavGroup[] = s.pages.map((p) => ({
      title: p.title,
      href: `/${s.slug}/${p.slug}`,
      items: programsOf(s.slug, p.slug),
    }));

    const cols: NavGroup[][] = [[], [], []];
    const sizes = [0, 0, 0];
    groups.forEach((g) => {
      const i = sizes.indexOf(Math.min(...sizes));
      cols[i].push(g);
      sizes[i] += g.items.length + 2;
    });
    return cols.filter((c) => c.length > 0);
  }

  const items: NavItem[] = s.pages.map((p) => ({
    label: p.title,
    href: `/${s.slug}/${p.slug}`,
  }));
  const half = Math.ceil(items.length / 2);
  return [
    [{ items: items.slice(0, half) }],
    [{ items: items.slice(half) }],
  ].filter((c) => c[0].items.length > 0);
}

export const columnsBySlug: Record<string, NavGroup[][]> = Object.fromEntries(
  navSections.map((s) => [s.slug, buildColumns(s)]),
);
