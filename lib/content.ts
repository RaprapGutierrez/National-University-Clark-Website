import { APPLY_URL } from "./site";
import { programsBySchool } from "./programs";

export type Block =
  // lede: show the first paragraph larger, news style
  | { type: "text"; heading?: string; lede?: boolean; body: string[] }
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
  | {
      type: "stats";
      heading?: string;
      // tone adds a gold, silver or bronze bar on top of the card
      items: {
        value: string;
        label: string;
        tone?: "gold" | "silver" | "bronze";
      }[];
    }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "carousel";
      heading?: string;
      label?: string;
      items: { src: string; alt: string }[];
    }
  | {
      type: "gallery";
      heading?: string;
      items: { src: string; alt: string }[];
    }
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
    {
      type: "cards",
      heading: "Units and centers",
      items: [
        {
          title: "Language Center",
          text: "Programs and support from the NU Clark Language Center.",
          href: "/academics/office-of-the-academic-director/language-center",
        },
      ],
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
      type: "text",
      heading: "4th Nationalian Friendship Games",
      lede: true,
      body: [
        "LOOK: NU Clark athletes emerge CHAMPIONS in Badminton Men and Table Tennis Men, with SILVER winnings in Chess Women and BRONZE in Chess Men during the Day 2 of this year’s Nationalian Friendship Games (NFG) at NU Laguna.",
        "Yesterday, together with the KabaleNU athletes, their coaches and the campus directors, Dr. Arnel A. Diego, Executive Director; Prof. Priscilla M. Evangelista, Academic Director; and Prof. Richard John W. Hernandez, Academic Services Director; as well as the Campus Sports Development Coordinator, Dr. Francisco Gabriel Prevandos, and other campus unit officials attended the NFG Opening Ceremonies.",
        "📸 NU Clark Campus Sports Development Office, Coaches Cynthia Mae Ylarde & co.",
      ],
    },
    {
      type: "stats",
      heading: "Day 2 results",
      items: [
        {
          value: "2",
          label: "Champions: Badminton Men, Table Tennis Men",
          tone: "gold",
        },
        { value: "1", label: "Silver: Chess Women", tone: "silver" },
        { value: "1", label: "Bronze: Chess Men", tone: "bronze" },
      ],
    },
    {
      type: "carousel",
      label: "Nationalian Friendship Games photos",
      items: [
        {
          src: "/carousel-img-1.jpg",
          alt: "NU Clark medalists holding certificates and medals at the Nationalian Friendship Games",
        },
        {
          src: "/carousel-img-2.jpg",
          alt: "NU Clark athletes in navy jerseys with medals and certificates",
        },
        {
          src: "/carousel-img-3.jpg",
          alt: "NU Clark athletes and a coach in gold jerseys",
        },
        {
          src: "/carousel-img-4.jpg",
          alt: "NU Clark athletes and coaches in white and navy jerseys",
        },
        {
          src: "/carousel-img-5.jpg",
          alt: "NU Clark volleyball team with their coaches",
        },
        {
          src: "/carousel-img-6.jpg",
          alt: "NU Clark team in white jerseys in front of Henry Sy Sr. Hall",
        },
        {
          src: "/carousel-img-7.jpg",
          alt: "NU Clark athletes in gold jerseys posing with arms crossed",
        },
        {
          src: "/carousel-img-8.jpg",
          alt: "NU Clark athletes in navy jerseys in front of the 4th Nationalian Friendship Games banner",
        },
        {
          src: "/carousel-img-9.jpg",
          alt: "NU Clark athletes and coaches holding certificates",
        },
      ],
    },
    {
      type: "text",
      heading: "Ready to show your talent and passion, Nationalians!",
      lede: true,
      body: [
        "The PRISAA Tryouts are happening on November 9–13, 2026!",
        "This is your chance to showcase your skills, push your limits, and earn the opportunity to represent NU Clark in the upcoming PRISAA competitions.",
        "Check the pubmat below for the complete tryout schedules, venues, and assigned point persons.",
        "Bring your energy, give your best, and show your pride as a Nationalian!",
        "See you at the tryouts, Bulldogs!",
      ],
    },
    {
      type: "gallery",
      items: [
        {
          src: "/tryout-1.jpg",
          alt: "PRISAA Tryouts poster, November 9–13, 2026",
        },
        {
          src: "/tryout-4.jpg",
          alt: "Tryout schedule for men’s basketball, men’s volleyball, table tennis, chess, and badminton, November 9–11",
        },
        {
          src: "/tryout-3.jpg",
          alt: "Tryout schedule for women’s basketball, women’s volleyball, archery, athletics and arnis, billiards, taekwondo, swimming, and sepak takraw, November 9–13",
        },
        {
          src: "/tryout-2.jpg",
          alt: "Tryout guidelines: sports attire, credentials-only sports, badminton equipment, and waiver form",
        },
      ],
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
