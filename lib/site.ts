export const APPLY_URL =
  "https://onlineapp.national-u.edu.ph/quest/register.php";

export type PageItem = {
  slug: string;
  title: string;
  summary: string;
  cta?: { label: string; href: string };
};

export type Section = {
  slug: string;
  title: string;
  intro: string;
  pages: PageItem[];
};

export const sections: Section[] = [
  {
    slug: "about",
    title: "About",
    intro:
      "Learn about National University Clark, its people, and its mission.",
    pages: [
      {
        slug: "our-story",
        title: "Our Story",
        summary: "How NU Clark started and where it is today.",
      },
      {
        slug: "leadership",
        title: "Leadership",
        summary: "Meet the campus leaders and view the organizational chart.",
      },
      {
        slug: "vmgo",
        title: "VMGO",
        summary: "Our vision, mission, goals, and objectives.",
      },
      {
        slug: "accreditation",
        title: "Accreditation",
        summary: "Recognitions and accredited programs.",
      },
      {
        slug: "campus-tour",
        title: "Campus Tour",
        summary: "Take a look around the NU Clark campus.",
      },
    ],
  },
  {
    slug: "academics",
    title: "Academics",
    intro: "Choose a school to see its programs, mission, and vision.",
    pages: [
      {
        slug: "senior-high-school",
        title: "Senior High School",
        summary: "Tracks and strands for Grades 11 and 12.",
      },
      {
        slug: "sabm",
        title: "School of Accountancy, Business, and Management",
        summary: "Programs in accountancy, business, and management.",
      },
      {
        slug: "seas",
        title: "School of Education, Arts, and Sciences",
        summary: "Programs in education, arts, and sciences.",
      },
      {
        slug: "satc",
        title: "School of Architecture, Technology, and Computing",
        summary: "Programs in architecture, technology, and computing.",
      },
      {
        slug: "engineering",
        title: "School of Engineering",
        summary: "Engineering programs offered at NU Clark.",
      },
      {
        slug: "hospitality",
        title: "School of Dentistry and Allied Health",
        summary: "Programs in dentistry and allied health sciences.",
      },
      {
        slug: "office-of-the-academic-director",
        title: "Office of the Academic Director",
        summary: "Academic leadership, policies, and support for NU Clark.",
      },
    ],
  },
  {
    slug: "admissions",
    title: "Admissions",
    intro: "Everything you need to start your journey as a Nationalian.",
    pages: [
      {
        slug: "apply-now",
        title: "Apply Now",
        summary: "Start your online application.",
        cta: { label: "Go to online application", href: APPLY_URL },
      },
      {
        slug: "requirements",
        title: "Requirements",
        summary: "What to prepare before you enroll.",
      },
      {
        slug: "scholarships",
        title: "Scholarships",
        summary: "Find financial support options.",
      },
      {
        slug: "tuition-fees",
        title: "Tuition & Fees",
        summary: "See what each term costs.",
      },
    ],
  },
  {
    slug: "student-life",
    title: "Student Life",
    intro: "Life at NU Clark goes beyond the classroom.",
    pages: [
      {
        slug: "organizations",
        title: "Organizations",
        summary: "Join student clubs and organizations.",
      },
      {
        slug: "sports",
        title: "Sports",
        summary: "Teams, programs, and athletic events.",
      },
      {
        slug: "events",
        title: "Events",
        summary: "What's happening on campus.",
      },
      {
        slug: "services",
        title: "Services",
        summary: "Student support services.",
      },
    ],
  },
];
