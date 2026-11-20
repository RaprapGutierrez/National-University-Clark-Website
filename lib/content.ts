import { APPLY_URL } from "./site";
import { programsBySchool } from "./programs";

export type Block =
  | { type: "text"; heading?: string; body: string[] }
  | { type: "mv"; items: { label: string; text: string }[] }
  | {
      type: "cards";
      heading?: string;
      items: {
        title: string;
        text?: string;
        href?: string;
        image?: string;
        logo?: string;
      }[];
    }
  | { type: "list"; heading?: string; items: string[] }
  | {
      type: "steps";
      heading?: string;
      items: { title: string; text: string }[];
    }
  | { type: "table"; heading?: string; columns: string[]; rows: string[][] }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "note"; text: string };

// School page: only the programs, each one clickable.
function school(slug: string): Block[] {
  const programs = programsBySchool[slug] ?? [];
  return [
    {
      type: "cards",
      heading: "Programs offered",
      items: programs.map((p) => ({
        title: p.title,
        text: p.text,
        image: p.image,
        href: `/academics/${slug}/${p.slug}`,
      })),
    },
  ];
}

export const pageContent: Record<string, Block[]> = {
  // ---------- ACADEMICS ----------
  "academics/senior-high-school": school("senior-high-school"),
  "academics/sabm": school("sabm"),
  "academics/seas": school("seas"),
  "academics/satc": school("satc"),
  "academics/engineering": school("engineering"),
  "academics/hospitality": school("hospitality"),

  "academics/office-of-the-academic-director": [
    {
      type: "text",
      heading: "About the Office of the Academic Director",
      body: ["Add the official overview of this office here."],
    },
  ],

  // ---------- ADMISSIONS ----------
  "admissions/apply-now": [
    {
      type: "steps",
      heading: "How to apply",
      items: [
        {
          title: "Create an account",
          text: "Register on the NU online application portal.",
        },
        {
          title: "Fill out the application",
          text: "Complete the form and upload your requirements.",
        },
        {
          title: "Complete admission steps",
          text: "Take any required test or interview.",
        },
        { title: "Enroll", text: "Pay the fees and finish your enrollment." },
      ],
    },
    {
      type: "note",
      text: "Confirm these steps with the NU Clark admissions office before publishing.",
    },
  ],

  "admissions/requirements": [
    {
      type: "list",
      heading: "Senior High School",
      items: ["Add requirement 1", "Add requirement 2", "Add requirement 3"],
    },
    {
      type: "list",
      heading: "College freshmen",
      items: ["Add requirement 1", "Add requirement 2", "Add requirement 3"],
    },
    {
      type: "list",
      heading: "Transferees",
      items: ["Add requirement 1", "Add requirement 2", "Add requirement 3"],
    },
  ],

  "admissions/scholarships": [
    {
      type: "cards",
      heading: "Scholarships and financial aid",
      items: [
        {
          title: "Academic scholarship",
          text: "Add who qualifies and the benefits.",
        },
        {
          title: "Athletic scholarship",
          text: "Add who qualifies and the benefits.",
        },
        { title: "Government grants", text: "Add available programs." },
      ],
    },
  ],

  "admissions/tuition-fees": [
    {
      type: "table",
      heading: "Tuition and fees per term",
      columns: ["Program", "Tuition", "Misc. fees", "Total"],
      rows: [
        ["Senior High School", "₱ —", "₱ —", "₱ —"],
        ["School of Engineering", "₱ —", "₱ —", "₱ —"],
        [
          "School of Architecture, Technology, and Computing",
          "₱ —",
          "₱ —",
          "₱ —",
        ],
      ],
    },
    {
      type: "note",
      text: "Add the official amounts and the school year they apply to.",
    },
  ],

  // ---------- STUDENT LIFE ----------
  "student-life/organizations": [
    {
      type: "cards",
      heading: "Student organizations",
      items: [
        {
          title: "CODE",
          text: "Consortium of Data Enthusiasts",
          logo: "/org-code.png",
        },
        {
          title: "SCOA",
          text: "Student Commission on Audit",
          logo: "/org-scoa.png",
        },
        {
          title: "USC",
          text: "University Student Council",
          logo: "/org-usc.png",
        },
        { title: "VOS", text: "Vanguards of Society", logo: "/org-vos.png" },
        { title: "SOB", text: "Synergy of Bulldozers", logo: "/org-sob.png" },
        { title: "ALPAS", logo: "/org-alpas.png" },
        {
          title: "UAPSA",
          text: "United Architects of the Philippines Student Auxiliary – NU Clark Chapter",
          logo: "/org-uapsa.png",
        },
        { title: "PYS", text: "Psychology Society", logo: "/org-pys.png" },
        {
          title: "PHN",
          text: "Pagsilay sa Hiraya at Namayana (Pahina)",
          logo: "/org-phn.png",
        },
        { title: "NU Clark Model United Nations", logo: "/org-mun.png" },
        { title: "Honors A+Trium", logo: "/org-honors.png" },
        {
          title: "Junior Philippine Institute of Accountants",
          text: "NU Clark Chapter",
          logo: "/org-jpia.png",
        },
        {
          title: "PICE",
          text: "Philippine Institute of Civil Engineers – NU Clark Student Chapter",
          logo: "/org-pice.png",
        },
        { title: "The Resurgence", logo: "/org-resurgence.png" },
        { title: "Junior League of Marketers", logo: "/org-jlm.png" },
        {
          title: "ISCOLAR",
          text: "Institute of Scholastic, Cooperative, and Outstanding Scholars",
          logo: "/org-iscolar.png",
        },
        { title: "Medical Technology Society", logo: "/org-medtech.png" },
        { title: "Pamiyabe", logo: "/org-pamiyabe.png" },
        {
          title: "Senior High School Student Government",
          logo: "/org-shs-sg.png",
        },
        { title: "Political Science Society", logo: "/org-polsci.png" },
        { title: "BullBytes", logo: "/org-bullbytes.png" },
      ],
    },
  ],

  "student-life/sports": [
    {
      type: "list",
      heading: "Sports offered",
      items: ["Basketball", "Volleyball", "Add more sports"],
    },
    {
      type: "text",
      heading: "Athletics at NU Clark",
      body: ["Add information about teams, tryouts, and facilities."],
    },
  ],

  "student-life/events": [
    {
      type: "text",
      heading: "What's happening on campus",
      body: ["Add yearly traditions and major events here."],
    },
    {
      type: "cards",
      heading: "Upcoming events",
      items: [
        { title: "Event name", text: "Date and place." },
        { title: "Event name", text: "Date and place." },
      ],
    },
  ],

  "student-life/services": [
    {
      type: "cards",
      heading: "Student services",
      items: [
        { title: "Guidance and counseling", text: "Add description." },
        { title: "Library", text: "Add description." },
        { title: "Clinic", text: "Add description." },
        { title: "Registrar", text: "Add description." },
        {
          title: "Online application help",
          text: "Apply online anytime.",
          href: APPLY_URL,
        },
      ],
    },
  ],
};
