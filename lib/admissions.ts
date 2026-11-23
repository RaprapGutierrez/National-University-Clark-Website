// Content source: https://www.nu.edu.ph/nu-clark/admissions
// Update this file when the admissions office changes anything.

export const APPLY_URL = "https://onlineapp.nu-clark.edu.ph/quest/register.php";
export const CONTACT_URL = "https://www.nu.edu.ph/nu-clark/contact-us";
export const SCHOLARSHIPS_URL = "https://www.nu.edu.ph/nu-clark/admissions/scholarships";

/** Shown on the admissions pages. Change or set to "" when it no longer applies. */
export const ENROLLMENT_NOTE = "Enrollment is ongoing for 2nd Term A.Y. 2026–2027.";

export const steps = [
  {
    title: "Fill out the application form",
    text: "Complete the official National University application form with accurate personal and academic information. Check every detail before submitting to avoid delays.",
  },
  {
    title: "Receive an email notification",
    text: "After you submit, you will get an email listing the documents you need and what to do next, before you go to the Admissions Office.",
  },
  {
    title: "Prepare your requirements",
    text: "Gather the documents listed in the email. Make sure every copy is clear and complete so processing goes smoothly.",
  },
  {
    title: "Application evaluation",
    text: "Your documents are assessed to confirm your admission status. Once approved, you will be told how to proceed with enrollment.",
  },
  {
    title: "Enrollment and payment",
    text: "Confirm your slot and proceed with the enrollment assessment. Pay the tuition fee or down payment to secure your enrollment, then get your Official Receipt (OR) from the Treasury Office.",
  },
  {
    title: "Enrollment confirmation",
    text: "Present your Official Receipt to the Registrar’s Office to claim your Certificate of Registration (COR), which has your class schedule and confirms your enrollment.",
  },
];

export const requirementGroups = [
  {
    level: "Senior High School",
    title: "Grade 11",
    items: [
      "Grade 10 Report Card",
      "Certificate of Good Moral Character",
      "Photocopy of the PSA Birth Certificate",
      "Recent two (2) pieces 2×2 colored ID pictures",
      "ESC Certification (if ESC grantee)",
      "PEPT and ALS A&E result (for passers)",
    ],
  },
  {
    level: "College",
    title: "Freshman",
    items: [
      "Grade 12 Report Card",
      "Certificate of Good Moral Character",
      "Photocopy of the PSA Birth Certificate",
      "Recent two (2) pieces 2×2 colored ID pictures",
      "PEPT and ALS A&E passers: Certificate of Passing and Certificate of Rating",
      "ALS A&E passers: photocopy of Diploma",
      "Graduates of 2015 and below: original Form 138 (Report Card)",
    ],
  },
  {
    level: "College",
    title: "Transferee",
    items: [
      "Honorable Dismissal / Transfer Credentials",
      "Official Transcript of Records (TOR) / Scholastic Records",
      "Certificate of Good Moral Character",
      "Course Description of courses taken and passed",
      "Photocopy of the PSA Birth Certificate",
      "Recent two (2) pieces 2×2 colored ID pictures",
      "Photocopy of Diploma",
    ],
  },
  {
    level: "College",
    title: "Second Degree",
    items: [
      "Honorable Dismissal / Transfer Credentials",
      "Official Transcript of Records (TOR) / Scholastic Records",
      "Certificate of Good Moral Character",
      "Course Description of courses taken and passed",
      "Photocopy of the PSA Birth Certificate",
      "Recent two (2) pieces 2×2 colored ID pictures",
      "Photocopy of Diploma",
    ],
  },
];

export const academicScholarships = [
  {
    id: 259,
    name: "Doña Miguela M. Jhocson Blue Scholar",
    for: "Graduates with High Honors",
    benefits: ["100% discount on Tuition Fee", "100% discount on Miscellaneous Fee"],
    requirements: [
      "Certificate from the high school, signed by the Principal, stating the award received",
      "Original Grade 12 Report Card (incoming freshmen)",
      "Certificate of Good Moral Character from high school (incoming freshmen)",
      "Photocopy of PSA Birth Certificate",
      "No grade lower than 90 in any subject",
    ],
    note: "Can be kept for 4 or 5 years (depending on the degree program) if the student meets the University's retention requirements.",
  },
  {
    id: 260,
    name: "Doña Pacita J. Ocampo White Scholar",
    for: "Graduates with Honors",
    benefits: ["100% discount on Tuition Fee"],
    requirements: [
      "Certificate from the high school, signed by the Principal, stating the award received",
      "Original Grade 12 Report Card (incoming freshmen)",
      "Certificate of Good Moral Character from high school (incoming freshmen)",
      "Photocopy of PSA Birth Certificate",
      "No grade lower than 88 in any subject",
    ],
    note: "The discount applies to the term of entry only.",
  },
  {
    id: 261,
    name: "Nationalian Scholarship Program",
    for: "Students who keep an 88% average in every Senior High School subject",
    benefits: ["50% discount on Tuition Fee"],
    requirements: [
      "Original Grade 12 Report Card",
      "Certificate of Good Moral Character from high school",
      "Photocopy of PSA Birth Certificate",
      "At least 88% in all academic subjects, 1st to 4th grading period",
    ],
    note: "The discount applies to the term of entry only.",
  },
];

export const otherDiscounts = [
  { id: 262, name: "SM Employee and Affiliate Discount" },
  { id: 263, name: "Armed Forces of the Philippines" },
  { id: 264, name: "Alumni Discount" },
  { id: 265, name: "Siblings Discount" },
  { id: 266, name: "NU Nazareth School and NU Senior High School Loyalty Discount" },
  { id: 267, name: "BFP Discount" },
  { id: 268, name: "PWD Discount" },
  { id: 269, name: "Philippine Coast Guard (PCG)" },
  { id: 365, name: "SM Foundation" },
];
