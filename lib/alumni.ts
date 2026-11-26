// Content for the Alumni page. Edit the text here and add people to the `alumni` list.

export const alumniInfo = {
  kicker: "NU Clark alumni",
  heading: "Once a Nationalian, always a Nationalian",
  paragraphs: [
    "Our alumni take what they learned at NU Clark into their careers, further studies, and communities.",
    "This page is a growing directory of NU Clark graduates, organized by program. Their stories show current students and future Nationalians what an NU Clark education can lead to.",
  ],
  points: [
    {
      title: "Find your program",
      text: "Alumni are grouped by the school and program they graduated from.",
    },
    {
      title: "See where they are now",
      text: "Each profile shows a graduate's batch and current work.",
    },
    {
      title: "Connect on LinkedIn",
      text: "Profiles link to each graduate's LinkedIn page.",
    },
  ],
};

/**
 * One alumnus or alumna. The fields come from the "Alumni Database" form.
 *
 * Only the fields below are shown on the website. NEVER copy these form answers into this file,
 * because this file is part of the public website code:
 *   address, email address, contact number, date of birth, nationality,
 *   civil status, sex, and the reason for a career break.
 * Only add people who agreed to be shown on the website.
 */
export type Alumnus = {
  /** Unique, lowercase, no spaces. Example: "juan-dela-cruz" */
  slug: string;
  /** Form: Full name */
  name: string;
  /** Form: Program. Use the program slug from lib/programs.ts. Example: "bs-information-technology" */
  program: string;
  /** Form: Year graduated. Example: "2025" */
  batch?: string;
  /** Form: Post-Graduation Status. Example: "Employed", "Pursuing further studies" */
  status?: string;
  /** Form: Current job classification */
  jobClassification?: string;
  /** Form: Name of company, organization or institution */
  company?: string;
  /** Form: Company location. Example: "Angeles City, Pampanga" */
  companyLocation?: string;
  /** Form: Further studies. Example: "Master of Science in Computer Science, University name, 2027" */
  furtherStudies?: string;
  /** Form: Professional development. Exams or certifications. Example: ["Civil Engineer Licensure Exam"] */
  licensure?: string[];
  /** Optional: one or two sentences about them */
  story?: string;
  /** Optional: photo saved in /public/alumni/. Example: "/alumni/juan-dela-cruz.jpg" */
  photo?: string;
  /** Form: LinkedIn (optional). Full profile address */
  linkedin?: string;
  /** Form: Facebook. Only add it if they agreed to show it */
  facebook?: string;
  /** Form: Instagram (optional). Only add it if they agreed to show it */
  instagram?: string;
};

// Add alumni here.
//
// {
//   slug: "juan-dela-cruz",
//   name: "Juan Dela Cruz",
//   program: "bs-information-technology",
//   batch: "2025",
//   status: "Employed",
//   jobClassification: "Software Developer",
//   company: "Company name",
//   companyLocation: "Angeles City, Pampanga",
//   licensure: ["Name of exam or certification"],
//   linkedin: "https://www.linkedin.com/in/...",
// },
export const alumni: Alumnus[] = [];
