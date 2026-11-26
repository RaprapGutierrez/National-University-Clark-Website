import { album as makeAlbum } from "@/lib/album";
import type { EventPost } from "@/lib/events";

// Content for the Research page.

export const RESEARCH_OFFICE_FACEBOOK_URL =
  "https://www.facebook.com/nuclarkresearchoffice";

export const RESEARCH_EMAIL = "research@nu-clark.edu.ph";

export type Researcher = {
  /** Unique, lowercase, no spaces. Example: "maria-santos" */
  slug: string;
  name: string;
  /** Position. Example: "Associate Professor" */
  title?: string;
  /** Department. Example: "Computer Engineering Department" */
  department?: string;
  /** School slug from lib/site.ts ("seas", "satc", "engineering", "sabm" ...). Leave it out if unknown */
  school?: string;
  /** Research interests. Example: ["Machine learning", "Education technology"] */
  areas?: string[];
  /** One or two sentences about their work */
  bio?: string;
  /** Photo saved in /public/research/. Example: "/research/maria-santos.jpg" */
  photo?: string;
  /** Profile links. Example: Google Scholar, ORCID, LinkedIn */
  links?: { label: string; href: string }[];
};

/** A research update has the same fields as an event (see lib/events.ts). */
export type ResearchUpdate = EventPost;

// Pictures for a story: save them in /public/research/<folder>/ and name them
// <folder>-01.jpg, <folder>-02.jpg ... (see lib/album.ts)
const album = (folder: string, count: number, alt: string) =>
  makeAlbum("research", folder, count, alt);

const TAGS = ["#NUClark", "#NUClarkResearchOffice", "#ResearchThatWorks"];

// Add researchers here.
export const researchers: Researcher[] = [
  {
    slug: "jhonas-lumanlan",
    name: "Jhonas S. Lumanlan, PhDc, LPT",
    title: "Associate Professor and Campus Research Coordinator",
    department: "Professional Education Department",
    school: "seas",
    bio: "Presented research at the 2026 World University Rankings for Innovation (WURI) International Research Conference.",
  },
  {
    slug: "aaron-john-alegre",
    name: "Aaron John C. Alegre, MSCpE, PCpE",
    title: "Assistant Professor",
    department: "Computer Engineering Department",
    school: "engineering",
    bio: "Presented research at the 2026 World University Rankings for Innovation (WURI) International Research Conference.",
  },
  {
    slug: "francisco-gabriel-prevandos",
    name: "Francisco Gabriel Prevandos, EdD, LPT",
    title: "Associate Professor",
    department: "General Education Department",
    school: "seas",
    bio: "Co-author of a Scopus-indexed study on gender equity scholarship in sport, physical education, and physical activity.",
  },
  {
    slug: "john-edward-alfonso",
    name: "John Edward E. Alfonso, MA",
    title: "Associate Professor",
    department: "General Education Department",
    bio: "Presented research on Facebook discourse about sisig as culinary heritage at the 7th Kyoto Conference on Arts, Media & Culture.",
  },
];

// Add research news and updates here, newest first. The first one is shown large.
// Source: the NU Clark Research Office Facebook page.
export const researchUpdates: ResearchUpdate[] = [
  {
    slug: "basic-research-training-series-session-1",
    tag: "Training",
    title: "Basic Research Training Series Kicks Off",
    date: "November 25, 2026",
    venue: "Learning Resource Center",
    body: [
      "The NU Clark Research Office kickstarts first of the five sessions of its Basic Research Training Series with lecture workshops on Research Topic and Question Formulation, and Literature Review and Frameworks Development delivered by Campus Research Coordinator, Assoc. Prof. Jhonas S. Lumanlan; and Guidance Services Asst. Director, Assoc. Prof. Jed V. Madlambayan, respectively, at the Learning Resource Center.",
      "The NU Clark Basic Research Training Series is a five-session intensive training on fundamentals of research, with a lead-up to a Faculty and ASP Research Colloquium on May 2027, organized with the collaboration among the Research Office, the Guidance Services Office, and the Learning Resource Center.",
    ],
    ...album(
      "basic-research-training",
      4,
      "Faculty and staff at the NU Clark Basic Research Training Series at the Learning Resource Center",
    ),
    hashtags: TAGS,
  },

  {
    slug: "wuri-international-research-conference",
    tag: "Conference",
    title:
      "NU Clark Research Office and QMO Attend the WURI International Research Conference",
    date: "November 18, 2026",
    venue: "University of Makati, Manila, Philippines",
    body: [
      "NU Clark Research Office Campus Research Coordinator Assoc. Prof. Jhonas Lumanlan, and Quality Management Office (QMO) Asst. Director Jayemer O. Miranda; together with Computer Engineering faculty member, Engr. Aaron John C. Alegre, attended the 1st World University Rankings for Innovation (WURI) International Research Conference (WIRC) at the University of Makati.",
      "Lumanlan and Alegre also each presented their research works during the parallel sessions in the Conference.",
      "The WIRC is its first installment, anticipated to be followed by another one next year and to be hosted in India.",
    ],
    ...album(
      "wuri-conference",
      7,
      "NU Clark representatives at the 2026 WURI International Research Conference at the University of Makati",
    ),
    hashtags: [
      "#UMak2026WIRC",
      "#WURI",
      "#NUClark",
      "#ResearchOffice",
      "#ResearchThatWorks",
    ],
  },

  {
    slug: "lumanlan-alegre-wuri-research-conference",
    tag: "Researcher spotlight",
    title:
      "Lumanlan and Alegre Present Their Work at the WURI Research Conference",
    date: "November 18, 2026",
    venue: "University of Makati, Manila, Philippines",
    body: [
      "Assoc. Prof. Jhonas S. Lumanlan of the NU Clark School of Education, Arts, and Sciences, and Asst. Prof. Aaron John C. Alegre of the NU Clark School of Engineering presented their research at the 2026 World University Rankings for Innovation (WURI) International Research Conference on November 18 at the University of Makati, Manila, Philippines.",
      "Apart from the aforementioned faculty members, four more were originally accepted to present at the Conference. Lumanlan and Alegre were accompanied by Quality Management Office (QMO) Assistant Director, Jayemer O. Miranda, in attending and representing NU Clark at the Conference.",
      "Relevantly, NU Clark ranked 278th in the 2026 WURI, securing placements in the Top 100 across nine (9) categories.",
    ],
    ...album(
      "wuri-spotlight",
      1,
      "Congratulations to Jhonas S. Lumanlan and Aaron John C. Alegre for presenting at the 2026 WURI International Research Conference, November 18 to 20, University of Makati",
    ),
    links: [
      {
        label: "See the NU Clark WURI 2026 ranking post",
        href: "https://www.facebook.com/share/p/1aezz1eBg1/",
      },
      {
        label: "About the WURI International Research Conference",
        href: "https://www.umak.edu.ph/wirc-2026/#welcome",
      },
    ],
    hashtags: [...TAGS, "#WIRC", "#WURI"],
  },

  {
    slug: "alfonso-kyoto-conference",
    tag: "Researcher spotlight",
    title:
      "Alfonso Presents His Research at the 7th Kyoto Conference on Arts, Media & Culture",
    date: "November 11, 2026",
    venue: "Kyoto, Japan",
    body: [
      "Congratulations to Assoc. Prof. John Edward E. Alfonso for presenting his research at the 7th Kyoto Conference on Arts, Media & Culture, held on November 11 in Kyoto, Japan!",
      "His research is titled “Social Media as a Participatory Archive for Culinary Heritage: Discourse and Interpretations of Sisig on Facebook.”",
    ],
    ...album(
      "kyoto-conference",
      1,
      "Congratulations to John Edward E. Alfonso for presenting at the 7th Kyoto Conference on Arts, Media and Culture",
    ),
    links: [
      {
        label: "Read the abstract",
        href: "https://kyoto-amc.iafor.org/presentation/submission108225/",
      },
    ],
    hashtags: TAGS,
  },

  {
    slug: "prevandos-scopus-publication",
    tag: "Publication",
    title:
      "Prevandos Co-Authors a Scopus-Indexed Study on Gender Equity in Sport",
    body: [
      "Congratulations to Assoc. Prof. Dr. Francisco Gabriel Prevandos of the NU Clark School of Education, Arts, and Sciences for being published as a co-author of the study “Are Women Visible, Trusted, and Allowed to Lead?”: A Bibliometric and Science Mapping Review of Gender Equity Scholarship in Sport, Physical Education, and Physical Activity in the Human Kinetics Journal, a Scopus-Indexed Journal!",
      "Abstract: Gender equity in sport, physical education, and physical activity is often treated as a problem of access and representation, but this framing can obscure the deeper structures that decide who is supported, trusted, recognized, and allowed to lead in movement systems. This bibliometric and science mapping review examined Scopus-indexed English-language scholarship from 2015 to 2025 using Bibliometrix/Biblioshiny and VOSviewer. The final corpus included 1,173 documents across 520 sources. Rather than merely documenting growth, the study shows how gender equity scholarship has developed around intertwined questions of participation, leadership, pedagogy, visibility, and knowledge production. The field is increasingly interdisciplinary yet still shaped by uneven systems of authority and recognition. The study advances a gender equity architecture agenda, reframing equity as a structural concern involving opportunity; authority; knowledge geopolitics; and intersectional accountability across sport, physical education, and physical activity contexts.",
    ],
    ...album(
      "scopus-publication",
      1,
      "Congratulations to Francisco Gabriel Prevandos for a Scopus-indexed publication in the Human Kinetics Journal",
    ),
    links: [
      {
        label: "Read and cite the study",
        href: "https://doi.org/10.1123/wspaj.2026-0078",
      },
    ],
    hashtags: TAGS,
  },

  {
    slug: "wsap-international-conference-student-researchers",
    tag: "Student researchers",
    title:
      "BA Communication Students Present Their Research at the WSAP International Conference",
    date: "November 12–13, 2026",
    venue: "Philippine Normal University, Manila, Philippines",
    body: [
      "Third-year BA Communication students Ajeriah Bautista, Nissa Castillo, and Elaiza Solivet were among a total of only 50 (out of 150 submitted abstracts) researchers who showcased their research work during the Women’s and Gender Studies Association of the Philippines (WSAP) International Conference 2026, held on November 12–13 at Philippine Normal University, Manila, Philippines.",
      "Apparently the only undergraduate research presenters in their session, Bautista and Solivet presented their work titled, “Lualu ampo Lugud: The Work of Ladies of Charity in Local Disaster Risk Reduction and Management at Holy Rosary Parish Church, Angeles City” under the thematic area, “Security beyond the state: Human and Environmental Security” during the Conference.",
      "This achievement is a testament that the culture of research excellence at NU Clark extends among its students, whose educative and scholarly training in the campus and its programs only gear them towards academic and professional success.",
    ],
    ...album(
      "wsap-conference",
      1,
      "Congratulations to Ajeriah T. Bautista, Elaiza E. Solivet, and Nissa B. Castillo, third-year BA Communication students, for presenting at the WSAP International Conference 2026",
    ),
    credits: [
      "Photos and details contributed by the NU Clark BA Communication students and faculty members",
    ],
    hashtags: [
      "#NUClark",
      "#NUClarkBACommunication",
      "#NUClarkResearchOffice",
      "#ResearchThatWorks",
    ],
  },
];
