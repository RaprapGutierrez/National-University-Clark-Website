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

export type Alumnus = {
  /** Unique, lowercase, no spaces. Example: "juan-dela-cruz" */
  slug: string;
  name: string;
  /** Program slug from lib/programs.ts. Example: "bs-information-technology" */
  program: string;
  /** Graduation year. Example: "2025" */
  batch?: string;
  /** Current role and workplace. Example: "Software Engineer at Company" */
  headline?: string;
  /** One or two sentences about them */
  story?: string;
  /** Photo saved in /public/alumni/. Example: "/alumni/juan-dela-cruz.jpg" */
  photo?: string;
  /** Full LinkedIn profile address */
  linkedin?: string;
};

// Add alumni here. Only add people who agreed to be shown on the website.
//
// {
//   slug: "juan-dela-cruz",
//   name: "Juan Dela Cruz",
//   program: "bs-information-technology",
//   batch: "2025",
//   headline: "Software Engineer at Company",
//   story: "Short story here.",
//   photo: "/alumni/juan-dela-cruz.jpg",
//   linkedin: "https://www.linkedin.com/in/...",
// },
export const alumni: Alumnus[] = [];
