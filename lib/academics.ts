import { programsBySchool } from "@/lib/programs";

/** Academics landing — schools, visuals, and highlighted partners. */

export type AcademicSchool = {
  slug: string;
  short: string;
  title: string;
  text: string;
  image: string;
  accent: string;
  programs: string[];
};

function programTitles(slug: string, limit = 4) {
  return (programsBySchool[slug] ?? [])
    .slice(0, limit)
    .map((p) => p.title.replace(/^BS\s+/, "BS "));
}

export const academicSchools: AcademicSchool[] = [
  {
    slug: "sabm",
    short: "SABM",
    title: "School of Accountancy, Business, and Management",
    text: "Accountancy, business, and management — built for Nationalians who will lead enterprises and professional practice.",
    image: "/school-sabm.png",
    accent: "#1f2f7a",
    programs: programTitles("sabm"),
  },
  {
    slug: "seas",
    short: "SEAS",
    title: "School of Education, Arts, and Sciences",
    text: "Education, arts, and sciences pathways that shape teachers, communicators, and critical thinkers.",
    image: "/school-seas.png",
    accent: "#243a8f",
    programs: programTitles("seas"),
  },
  {
    slug: "satc",
    short: "SATC",
    title: "School of Architecture, Technology, and Computing",
    text: "Architecture, technology, and computing — design, build, and innovate for a digital world.",
    image: "/school-satc.png",
    accent: "#16245c",
    programs: programTitles("satc"),
  },
  {
    slug: "engineering",
    short: "Engineering",
    title: "School of Engineering",
    text: "Engineering programs that prepare Nationalians for industry, infrastructure, and problem-solving.",
    image: "/school-engineering.png",
    accent: "#1a2a6c",
    programs: programTitles("engineering"),
  },
  {
    slug: "hospitality",
    short: "Dentistry & Allied Health",
    title: "School of Dentistry and Allied Health",
    text: "Dentistry and allied health sciences for careers that care for communities.",
    image: "/school-dentistry.png",
    accent: "#2a3f9a",
    programs: programTitles("hospitality"),
  },
];

export const academicStats = [
  { value: String(academicSchools.length), label: "Colleges & schools" },
  {
    value: String(
      academicSchools.reduce(
        (n, s) => n + (programsBySchool[s.slug]?.length ?? 0),
        0,
      ) + (programsBySchool["senior-high-school"]?.length ?? 0),
    ),
    label: "Programs & strands",
  },
  { value: "3", label: "SHS clusters" },
  { value: "Clark", label: "Tech hub campus" },
];

export const shsClusters = [
  {
    code: "STEM",
    name: "Science, Technology, Engineering & Mathematics",
    text: "Engineering, architecture, computing, sciences, and allied health pathways.",
  },
  {
    code: "BUEN",
    name: "Business and Entrepreneurship",
    text: "Management and accountancy foundations for future enterprise leaders.",
  },
  {
    code: "ASSH",
    name: "Arts, Social Sciences and Humanities",
    text: "Education, arts, and social sciences for creative and civic careers.",
  },
];

/** Partner highlights — logos + a few MOU photos. */
export const academicPartners = [
  {
    name: "Institute of Management Accountants",
    note: "CMA pathways",
    logo: "/partners/ima.png",
    image: "/linkages/photo-15.jpg",
  },
  {
    name: "Chez Suzette Philippines",
    note: "Hospitality immersion",
    logo: "/partners/chez.png",
    image: "/linkages/photo-06.jpg",
  },
  {
    name: "Clark Development Corporation",
    note: "Freeport collaboration",
    logo: "/partners/cdc.png",
  },
  {
    name: "NAPOLCOM Region III",
    note: "Internship pathways",
    logo: "/partners/napolcom.png",
  },
  {
    name: "UP Diliman Asian Center",
    note: "Research ties",
    logo: "/partners/upd.png",
  },
  {
    name: "Sunchon National University",
    note: "Global mobility",
    logo: "/partners/scnu.png",
    image: "/news/sunchon-mou/sunchon-mou-01.jpg",
  },
  {
    name: "Pampanga State Agricultural University",
    note: "Regional academe",
    logo: "/partners/psau.png",
  },
  {
    name: "OMADA One Inc.",
    note: "Industry immersion",
    logo: "/partners/omada.png",
  },
  {
    name: "HRAP",
    note: "Hospitality partners",
    logo: "/partners/hrap.png",
  },
  {
    name: "GPCCI",
    note: "International careers",
    logo: "/partners/gpcci.png",
  },
];
