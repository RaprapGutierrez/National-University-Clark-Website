// Content for /admissions/scholarships
// Sources: NU Clark scholarship posts for A.Y. 2026–2027 and the SDAO UAEB announcement.
// Pictures go in public/scholarships/

export const ADMISSIONS_EMAIL = "admissions@nu-clark.edu.ph";
export const ADMISSIONS_PHONE = "0919-081-4634";
export const SDAO_EMAIL = "sdao@nu-clark.edu.ph";

/**
 * Optional banner at the top of the page, e.g.
 * "Applications for A.Y. 2026–2027 are closed. Watch our Facebook page for the next call."
 * Leave "" to hide it.
 */
export const SCHOLARSHIP_NOTICE = "";

const P = "/scholarships";

export const pics = {
  programs: { src: `${P}/scholarship-programs.jpg`, alt: "NU Clark Scholarship Programs for A.Y. 2026–2027, registration May 14 to 15, 2026" },
  application: { src: `${P}/scholarship-application.jpg`, alt: "NU Clark Scholarship Application for A.Y. 2026–2027" },
  steps: { src: `${P}/scholarship-steps.jpg`, alt: "Steps for scholarship application: Step 1 May 14 to 15, 2026, Step 2 May 23, 2026" },
  requirements: { src: `${P}/scholarship-requirements.jpg`, alt: "Scholarship requirements checklist" },
  reminders: { src: `${P}/application-reminders.jpg`, alt: "Application reminders: check your email, eligibility, on-time compliance, limited slots" },
};

export const intro = {
  title: "NU Clark Scholarship Programs and Application for A.Y. 2026–2027",
  lead: "Attention Incoming Freshmen and Grade 11 Students!",
  body: [
    "Applications for the NU Clark Scholarship Programs are open from May 14, 2026 (5:00 AM) to May 15, 2026 (12:00 MN).",
    "Don’t miss this chance to join one of Central Luzon’s fastest-growing universities and gain access to quality education through our prestigious scholarship programs.",
    "Follow the application steps carefully and keep track of all important dates throughout the process.",
  ],
};

const RETENTION =
  "The discount applies to the term of entry only. Students may continue the scholarship if they meet the retention requirements or grades set by the university.";

export const programs = [
  {
    label: "Gold Scholar",
    name: "Don Mariano F. Jhocson",
    eligibility:
      "For Senior High School graduates with Highest and High Honors and no grade lower than 90 in any subject, from the 1st to the 4th quarter grading period.",
    benefits: [
      "100% discount on Tuition Fee",
      "100% discount on Miscellaneous Fee",
      "Stipend and allowance",
    ],
    note: RETENTION,
    image: { src: `${P}/gold-scholar.jpg`, alt: "Don Mariano F. Jhocson Gold Scholar: 100% tuition and miscellaneous fee discount plus stipend and allowance" },
  },
  {
    label: "Blue Scholar",
    name: "Doña Miguela M. Jhocson",
    eligibility:
      "For Senior High School graduates with Highest and High Honors and no grade lower than 90 in any subject, from the 1st to the 4th quarter grading period.",
    benefits: [
      "100% discount on Tuition Fee",
      "100% discount on Miscellaneous Fee",
    ],
    note: RETENTION,
    image: { src: `${P}/blue-scholar.jpg`, alt: "Doña Miguela M. Jhocson Blue Scholar: 100% tuition and miscellaneous fee discount" },
  },
  {
    label: "White Scholar",
    name: "Doña Pacita J. Ocampo",
    eligibility:
      "For Senior High School graduates with Honors and no grade lower than 88 in any subject, from the 1st to the 4th quarter grading period.",
    benefits: ["100% discount on Tuition Fee"],
    note: RETENTION,
    image: { src: `${P}/white-scholar.jpg`, alt: "Doña Pacita J. Ocampo White Scholar: 100% tuition discount" },
  },
  {
    label: "NSP",
    name: "Nationalian Scholarship Program",
    eligibility:
      "For College, no grade lower than 88 in any subject (Senior High School graduates). For Senior High School, no grade lower than 90 in any subject (Grade 10 completers), from the 1st to the 4th quarter grading period.",
    benefits: [
      "College: 50% discount on Tuition Fee",
      "Senior High School: 30% discount on Tuition Fee",
    ],
    note: "The discount applies to the term of entry only.",
    image: { src: `${P}/nationalian-scholarship.jpg`, alt: "Nationalian Scholarship Program: 50% tuition discount for College, 30% for Senior High School" },
  },
];

export const applySteps = [
  {
    date: "May 14–15, 2026 (Thursday and Friday)",
    title: "Submit your requirements online",
    text: "Submit all required documents online using your NU Quest account. Acceptance of applications starts on May 14, 2026 (5:00 AM) and ends on May 15, 2026 (12:00 MN).",
  },
  {
    date: "May 23, 2026 (Saturday)",
    title: "Check your personal email",
    text: "Qualified applicants will be notified by personal email about their scheduled written examination and batch assignment at the NU Clark campus.",
  },
];

export const documents = [
  "Complete grades of Report Card (Form 138)",
  "PSA Birth Certificate",
  "Certificate of Good Moral",
  "2×2 picture with white background (formal attire)",
  "Certificate of Awards and Achievements",
  "Certificate of Ranking",
  "Income Tax Return (ITR) or Certificate of Indigency (for Gold Scholar applicants)",
];

export const documentsNote =
  "Once accepted, bring a long brown envelope with the original documents you submitted through NU Quest before taking the examination.";

export const reminders = [
  {
    title: "Check your email",
    text: "Check your email regularly after submitting your requirements. An email will be sent to applicants who are eligible for the scholarship slots. If you do not receive an email, you are either not qualified or not selected for the scholarship.",
  },
  {
    title: "Student eligibility",
    text: "Only regular students and applicants with COMPLETE requirements are considered eligible for the application.",
  },
  {
    title: "On-time compliance",
    text: "Only applicants who fully comply with all requirements and follow instructions exactly will be considered. Incomplete or late submissions are automatically disqualified.",
  },
  {
    title: "Limited slots only",
    text: "Scholarship slots are very limited. Submitting your requirements does NOT guarantee a slot.",
  },
];

export const otherInfo = [
  "The scholarship program is online application only. Submissions made on-site or in the office will not be accepted.",
  "Certificate of Awards refers to your diploma or certificate of honors, and your other academic achievements.",
  "Certificate of Ranking refers to your overall rank among all graduating students. You can get this from your school.",
  "Certificate of Indigency is a document from your barangay (local government) that shows a person or family has little or no income.",
  "Students who are already enrolled and submitted the original copies of their requirements: visit the Registrar’s Office to get your documents, make photocopies, and return the originals to the Registrar’s Office.",
  "If you are not qualified for the scholarship, you may enroll as a regular student.",
];

export const importantNote =
  "Read the scholarship details carefully and completely. Questions that are already answered in the provided materials will not be entertained.";

// ---------- UAEB ----------
const U = "/scholarships";

export const uaeb = {
  title: "University Academic Excellence Benefit (UAEB) Scholarship",
  dates: "Applications: June 16–18, 2026",
  intro: [
    "The University Academic Excellence Benefit (UAEB) Scholarship Program from the Student Development and Activities Office (SDAO) turns academic excellence into greater educational support.",
    "Applications must be submitted personally by the applicant. Only complete applications will proceed to the evaluation process.",
  ],
  eligibility: [
    "A grade not lower than 2.5 in any subject, with no remarks of fail (F), R, or any zero (0) credit subject, and a CGWA of 3.0 and above for 3 consecutive terms.",
    "A minimum subject load of 12 academic units, unless your program flowchart says otherwise.",
    "Good conduct and no record of any disciplinary offense.",
  ],
  requirements: [
    "Income Tax Return (ITR) of your parents, or of the one supporting the family’s financial needs, with a gross annual family income of less than Php 300,000. If self-employed, the business must earn not more than Php 100,000 annually.",
    "If no family member meets the qualification or is unemployed: a Certification of Tax Exemption (from the BIR District Office) and a copy of a notarized Affidavit of Non-Filing of Tax.",
    "Certificate of Indigency from the barangay, from your parent/s and/or educational provider.",
    "Notarized Affidavit of Solo Parent (if applicable).",
    "If your parent/s is an Overseas Filipino Worker (OFW): Certificate of Tax Exemption, a copy of the Affidavit of Non-Filing of Tax, and an updated employment contract from the international employer.",
    "Recommendation Letter from SDAO.",
  ],
  letter: {
    text: "Request your Recommendation Letter from SDAO ahead of time to avoid delays. It is filled out by a faculty member or employee who knows your academic performance and family circumstances well, and signed by your program chairperson.",
    include: [
      "Name of the student to be endorsed",
      "Name of the faculty or employee",
      "Faculty or employee’s department and designation",
      "Faculty or employee’s contact information",
    ],
  },
  images: [
    { src: `${U}/uaeb-cover.jpg`, alt: "UAEB Scholarship eligibility and requirements, Academic Year 2026–2027" },
    { src: `${U}/uaeb-eligibility-1.jpg`, alt: "UAEB eligibility: grades, CGWA, subject load, and conduct" },
    { src: `${U}/uaeb-eligibility-2.jpg`, alt: "UAEB requirements: ITR with gross annual family income of less than Php 300,000" },
    { src: `${U}/uaeb-eligibility-3.jpg`, alt: "UAEB requirements: Certificate of Indigency, Affidavit of Solo Parent, OFW documents" },
    { src: `${U}/uaeb-eligibility-4.jpg`, alt: "UAEB requirements: Recommendation Letter from SDAO" },
  ],
};
