/** Student organizations at NU Clark. */

export type OrgCategoryId =
  | "governance"
  | "academic"
  | "interest"
  | "media"
  | "scholars"
  | "shs";

export type OrgCategory = {
  id: OrgCategoryId;
  title: string;
  text: string;
};

export type Organization = {
  abbr: string;
  name: string;
  blurb: string;
  logo: string;
  category: OrgCategoryId;
  featured?: boolean;
};

export const organizationsIntro = {
  kicker: "Student Life",
  heading: "Find your people at NU Clark",
  lead: "From the University Student Council to program societies and campus media — student organizations are where Nationalians lead, serve, create, and belong.",
  howToJoin:
    "Follow each org on campus channels, watch for recruitment weeks, or ask SDAO and the USC how to get involved.",
};

export const orgCategories: OrgCategory[] = [
  {
    id: "governance",
    title: "Student governance",
    text: "Represent the student body, steward funds, and keep campus accountable.",
  },
  {
    id: "academic",
    title: "Academic & professional",
    text: "Program societies and chapters tied to your degree and future career.",
  },
  {
    id: "interest",
    title: "Interest & advocacy",
    text: "Cause-driven and passion-led groups that grow leadership beyond class.",
  },
  {
    id: "media",
    title: "Campus media",
    text: "Storytellers who document Nationalian life in print and digital.",
  },
  {
    id: "scholars",
    title: "Scholars & honors",
    text: "Communities for high achievers who mentor and lift each other up.",
  },
  {
    id: "shs",
    title: "Senior High School",
    text: "Student government and orgs that shape SHS life at NU Clark.",
  },
];

export const organizations: Organization[] = [
  {
    abbr: "USC",
    name: "University Student Council",
    blurb: "The official voice of NU Clark students — programs, advocacy, and campus life.",
    logo: "/org-usc.png",
    category: "governance",
    featured: true,
  },
  {
    abbr: "SCOA",
    name: "Student Commission on Audit",
    blurb: "Independent student auditors who promote transparency in student funds.",
    logo: "/org-scoa.png",
    category: "governance",
    featured: true,
  },
  {
    abbr: "CODE",
    name: "Consortium of Data Enthusiasts",
    blurb: "Data, analytics, and tech community for builders and curious minds.",
    logo: "/org-code.png",
    category: "academic",
  },
  {
    abbr: "UAPSA",
    name: "United Architects of the Philippines Student Auxiliary",
    blurb: "NU Clark Chapter — design culture, workshops, and architecture networks.",
    logo: "/org-uapsa.png",
    category: "academic",
  },
  {
    abbr: "PYS",
    name: "Psychology Society",
    blurb: "Mental health literacy, peer support, and psychology beyond the lecture hall.",
    logo: "/org-pys.png",
    category: "academic",
  },
  {
    abbr: "JPIA",
    name: "Junior Philippine Institute of Accountants",
    blurb: "NU Clark Chapter — accountancy excellence, review culture, and ethics.",
    logo: "/org-jpia.png",
    category: "academic",
  },
  {
    abbr: "PICE",
    name: "Philippine Institute of Civil Engineers",
    blurb: "NU Clark Student Chapter — engineering practice, site exposure, and peers.",
    logo: "/org-pice.png",
    category: "academic",
  },
  {
    abbr: "JLM",
    name: "Junior League of Marketers",
    blurb: "Brand strategy, campaigns, and marketing competitions for future marketers.",
    logo: "/org-jlm.png",
    category: "academic",
  },
  {
    abbr: "MedTech",
    name: "Medical Technology Society",
    blurb: "Lab excellence, health advocacy, and MedTech professional identity.",
    logo: "/org-medtech.png",
    category: "academic",
  },
  {
    abbr: "PolSci",
    name: "Political Science Society",
    blurb: "Debate, civic literacy, and political discourse on campus.",
    logo: "/org-polsci.png",
    category: "academic",
  },
  {
    abbr: "BullBytes",
    name: "BullBytes",
    blurb: "Computing and IT community for builders, hackers-for-good, and innovators.",
    logo: "/org-bullbytes.png",
    category: "academic",
  },
  {
    abbr: "VOS",
    name: "Vanguards of Society",
    blurb: "Service and social impact for students who want to lead change.",
    logo: "/org-vos.png",
    category: "interest",
  },
  {
    abbr: "SOB",
    name: "Synergy of Bulldozers",
    blurb: "School of Business community — collaboration, grit, and Nationalian pride.",
    logo: "/org-sob.png",
    category: "interest",
  },
  {
    abbr: "ALPAS",
    name: "ALPAS",
    blurb: "Student initiative focused on empowerment, expression, and belonging.",
    logo: "/org-alpas.png",
    category: "interest",
  },
  {
    abbr: "MUN",
    name: "NU Clark Model United Nations",
    blurb: "Diplomacy, debate, and global affairs through Model UN conferences.",
    logo: "/org-mun.png",
    category: "interest",
  },
  {
    abbr: "Pamiyabe",
    name: "Pamiyabe",
    blurb: "Kapampangan culture and community spirit on the NU Clark campus.",
    logo: "/org-pamiyabe.png",
    category: "interest",
  },
  {
    abbr: "PHN",
    name: "Pagsilay sa Hiraya at Namayana",
    blurb: "Pahina — campus writers and literary voices shaping Nationalian stories.",
    logo: "/org-phn.png",
    category: "media",
  },
  {
    abbr: "Resurgence",
    name: "The Resurgence",
    blurb: "Student publication covering campus news, features, and opinion.",
    logo: "/org-resurgence.png",
    category: "media",
  },
  {
    abbr: "Honors",
    name: "Honors A+Trium",
    blurb: "Honor society for academic excellence, mentoring, and scholarship culture.",
    logo: "/org-honors.png",
    category: "scholars",
  },
  {
    abbr: "ISCOLAR",
    name: "Institute of Scholastic, Cooperative, and Outstanding Scholars",
    blurb: "Scholars supporting scholars — excellence with service and cooperation.",
    logo: "/org-iscolar.png",
    category: "scholars",
  },
  {
    abbr: "SHS-SG",
    name: "Senior High School Student Government",
    blurb: "Leads SHS programs, representation, and student initiatives at NU Clark.",
    logo: "/org-shs-sg.png",
    category: "shs",
  },
];

export function orgsByCategory(id: OrgCategoryId) {
  return organizations.filter((o) => o.category === id);
}

export const featuredOrgs = organizations.filter((o) => o.featured);
