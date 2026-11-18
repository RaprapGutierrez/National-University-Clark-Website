export type Program = {
  slug: string;
  title: string;
  text?: string; // major or specialization shown under the title
  image?: string;
  about: string[];
  mission: string;
  vision: string;
  objectives: string[];
  outcomes: string[];
  accreditation: string[];
};

// Fills in placeholders so every program page works right away.
function program(
  slug: string,
  title: string,
  extra: Partial<Program> = {},
): Program {
  return {
    slug,
    title,
    about: ["Add the official overview of this program here."],
    mission: "Add the official mission here.",
    vision: "Add the official vision here.",
    objectives: [
      "Add program educational objective 1",
      "Add program educational objective 2",
      "Add program educational objective 3",
    ],
    outcomes: [
      "Add program outcome 1",
      "Add program outcome 2",
      "Add program outcome 3",
    ],
    accreditation: ["Add accreditation or recognition details here."],
    ...extra,
  };
}

const ENGINEERING_MISSION =
  "The College of Engineering shall be known for producing competent, ethical, and responsible engineers responsive to the needs and aspirations of the country.";

// Key = school slug from lib/site.ts
export const programsBySchool: Record<string, Program[]> = {
  "senior-high-school": [
    program("abm", "ABM", {
      text: "Accountancy, Business, and Management",
      image: "/program-abm.png",
    }),
    program("stem", "STEM", {
      text: "Science, Technology, Engineering, and Mathematics",
      image: "/program-stem.png",
    }),
    program("humss", "HUMSS", {
      text: "Humanities and Social Sciences",
      image: "/program-humss.png",
    }),
  ],

  sabm: [
    program("bs-management-accounting", "BS Management Accounting", {
      image: "/program-management-accounting.png",
    }),
    program("bs-accountancy", "BS Accountancy", {
      image: "/program-accountancy.png",
    }),
    program("bs-business-administration", "BS Business Administration", {
      text: "Major in Marketing Management",
      image: "/program-business-admin.png",
    }),
    program("bs-tourism-management", "BS Tourism Management", {
      image: "/program-tourism.png",
    }),
  ],

  seas: [
    program("ba-political-science", "BA Political Science"),
    program("bs-communication", "BS Communication"),
    program("bs-psychology", "BS Psychology"),
  ],

  satc: [
    program("bs-architecture", "BS Architecture", {
      image: "/program-architecture.png",
    }),
    program("bs-information-technology", "BS Information Technology", {
      text: "Specialization in Web and Mobile Application",
      image: "/program-bsit.png",
    }),
    program("bs-computer-science", "BS Computer Science", {
      text: "Specialization in Artificial Intelligence",
    }),
  ],

  engineering: [
    program("bs-civil-engineering", "BS Civil Engineering", {
      mission: ENGINEERING_MISSION,
    }),
    program("bs-computer-engineering", "BS Computer Engineering", {
      mission: ENGINEERING_MISSION,
    }),
  ],

  // slug "hospitality" is School of Dentistry and Allied Health
  hospitality: [
    program("doctor-of-dental-medicine", "Doctor of Dental Medicine"),
    program("bs-medical-technology", "BS Medical Technology"),
  ],
};
