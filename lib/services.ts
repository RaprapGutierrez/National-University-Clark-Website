// Student support offices for /student-life/services
// Contacts: https://www.nu.edu.ph/nu-clark/contact-us

import { APPLY_URL } from "@/lib/site";
import { ADMISSIONS_EMAIL, ADMISSIONS_PHONE } from "@/lib/scholarships";

export type ServiceOffice = {
  title: string;
  short: string;
  text: string;
  email?: string;
  phone?: string;
  href?: string;
  hrefLabel?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  text: string;
  offices: ServiceOffice[];
};

export const OFFICE_HOURS =
  "Administrative and academic support offices are open Monday to Friday, 8:00 AM to 5:00 PM.";

export const servicesIntro = {
  title: "Campus offices that support you",
  lead: "From application to graduation — counseling, records, payments, health, IT, and student life.",
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "getting-in",
    title: "Getting in",
    text: "Start here if you are applying or already preparing to enroll.",
    offices: [
      {
        title: "Admissions Office",
        short: "AD",
        text: "Help with applying, requirements, scholarships, and enrollment.",
        email: ADMISSIONS_EMAIL,
        phone: ADMISSIONS_PHONE,
        href: APPLY_URL,
        hrefLabel: "Apply online",
      },
      {
        title: "Registrar’s Office",
        short: "RO",
        text: "Student records, transcript of records, certificates, and your Certificate of Registration.",
        email: "registrar@nu-clark.edu.ph",
      },
      {
        title: "Accounting and Treasury Office",
        short: "AT",
        text: "Tuition and fee payments, and your Official Receipt.",
        email: "accounting@nu-clark.edu.ph",
      },
    ],
  },
  {
    id: "student-support",
    title: "Student support",
    text: "Wellness, counseling, conduct, and campus life beyond class.",
    offices: [
      {
        title: "Guidance Services Office",
        short: "GS",
        text: "Counseling and support for your academic, personal, and career concerns.",
        email: "gso@nu-clark.edu.ph",
      },
      {
        title: "Student Development and Activities Office",
        short: "SD",
        text: "Organizations, campus activities, SDAO scholarships, and student development programs.",
        email: "sdao@nu-clark.edu.ph",
      },
      {
        title: "Health Services Office (Clinic)",
        short: "HS",
        text: "Basic health care and first aid on campus.",
        email: "hso@nu-clark.edu.ph",
      },
      {
        title: "Discipline Office",
        short: "DO",
        text: "Student conduct, school rules, and discipline concerns. Visit the office on campus during office hours.",
      },
    ],
  },
  {
    id: "campus-systems",
    title: "Campus systems",
    text: "Accounts, portals, and day-to-day campus technology.",
    offices: [
      {
        title: "Information Technology Services Office",
        short: "IT",
        text: "Help with school systems, accounts, and campus IT services.",
        email: "itso@nu-clark.edu.ph",
      },
    ],
  },
];

export const quickLinks = [
  { label: "Apply now", href: "/admissions/apply-now" },
  { label: "Requirements", href: "/admissions/requirements" },
  { label: "Scholarships", href: "/admissions/scholarships" },
  { label: "Campus events", href: "/student-life/events" },
];
