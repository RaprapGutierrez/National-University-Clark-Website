/** Careers at NU Clark — structure from nu.edu.ph talent-hub; assets/copy from CareersAtNUClark. */

export const careersIntro = {
  kicker: "Careers",
  heading: "Build your future with us at NU Clark",
  tagline: "Join a community, not just a workplace — where growth is nurtured and every voice matters.",
  lead: "National University Clark offers careers where passion meets purpose. Build something meaningful alongside educators and professionals who believe great institutions start with great people.",
  email: "careers@nu-clark.edu.ph",
  hrEmail: "hro@nu-clark.edu.ph",
  facebook: "https://www.facebook.com/CareersAtNUClark",
  talentHub: "https://www.nu.edu.ph/nu-clark/talent-hub",
  address:
    "Clark Tech Hub 8, SM City Clark Expansion, Clark-Mabalacat-Angeles Road, Barangay Dau, Mabalacat City, Pampanga",
};

export const careersCover = "/careers/cover.jpg";

export const careersPillars = [
  {
    title: "Build your future",
    text: "Continuous learning, professional development, and chances to take on new challenges so you can expand your skills and advance.",
  },
  {
    title: "A supportive community",
    text: "More than a workplace — collaboration, respect, and belonging where every individual is valued and encouraged to thrive.",
  },
  {
    title: "Make an impact",
    text: "Every role helps create meaningful opportunities for students and strengthens the communities we serve through education.",
  },
];

export const careersTeams = [
  {
    title: "Academic & faculty",
    text: "Shapes the next generation through teaching, research, and program leadership.",
    roles: [
      "College faculty",
      "Research faculty",
      "Academic advisors",
      "Program coordinators",
      "Curriculum specialists",
      "Department heads",
      "Laboratory instructors",
    ],
  },
  {
    title: "Administrative & enabling",
    text: "Keeps campus operations running so people can lead and deliver at their best.",
    roles: [
      "Human resources",
      "Finance & accounting",
      "Marketing & communications",
      "Information technology",
      "Legal & compliance",
      "Campus administration",
    ],
  },
  {
    title: "Student services & operations",
    text: "Supports every Nationalian from enrollment through graduation.",
    roles: [
      "Admissions",
      "Registrar",
      "Student affairs",
      "Scholarships",
      "Library / LRC",
      "Campus facilities",
      "Medical & wellness",
      "Campus security",
    ],
  },
];

export type CareerOpening = {
  title: string;
  type: string;
  category: string;
  note?: string;
};

/** Openings highlighted for NU Clark (talent-hub + CareersAtNUClark posts). */
export const careersOpenings: CareerOpening[] = [
  {
    title: "Guidance Counselor",
    type: "Full-time",
    category: "Faculty & ASP",
    note: "On-site · NU Clark",
  },
  {
    title: "Dentistry Faculty Member (A.Y. 26–27)",
    type: "Full-time / Part-time",
    category: "Faculty",
    note: "Doctor of Dental Medicine founding team",
  },
  {
    title: "BS Accountancy Faculty Member (A.Y. 26–27)",
    type: "Full-time / Part-time",
    category: "Faculty",
    note: "On-site · NU Clark",
  },
  {
    title: "LRC Coordinator (Registered Librarian)",
    type: "Full-time",
    category: "ASP",
    note: "Newly added · Careers at NU Clark",
  },
  {
    title: "Medical Technology Faculty Member",
    type: "Full-time",
    category: "Faculty",
    note: "Newly added · Careers at NU Clark",
  },
  {
    title: "Computer Science / Information Technology Faculty",
    type: "Full-time",
    category: "Faculty",
    note: "Computing programs",
  },
];

export const careersRequirements = [
  "Application letter",
  "Up-to-date comprehensive curriculum vitae",
  "Transcript of records",
  "Diploma",
  "PRC ID (if applicable)",
];

export const careersFaqs = [
  {
    q: "What positions are currently available?",
    a: "Openings listed here reflect recent NU Clark postings. For the full system list, visit the NU Clark Talent Hub or follow Careers at NU Clark on Facebook.",
  },
  {
    q: "How do I apply?",
    a: "Email your requirements as PDF to careers@nu-clark.edu.ph. Put your intended position in the subject line.",
  },
  {
    q: "Can I apply for more than one position?",
    a: "Yes. Send a separate application for each posting you are qualified for.",
  },
  {
    q: "Do you accept fresh graduates?",
    a: "Many openings welcome fresh graduates. Check the qualifications on each posting.",
  },
  {
    q: "Do you offer professional development?",
    a: "Yes. NU supports continuous learning through training, career development, and growth within the university.",
  },
];

export const careersCultureImages = [
  "/careers/posting-01.jpg",
  "/careers/campus-02.jpg",
  "/careers/campus-03.jpg",
  "/careers/campus-04.jpg",
];
