/** Content from NU Clark Academe-Industry Linkages and Placement Office (AILPO). */

export const linkagesIntro = {
  kicker: "AILPO",
  heading: "Academe-Industry Linkages and Placement Office",
  tagline: "Connecting Students. Forging Partnerships. Empowering Futures.",
  about:
    "Connecting NU Clark students with industry through internships, training, and career opportunities. Empowering futures through strategic partnerships and holistic development.",
  email: "ailpo@nu-clark.edu.ph",
  facebook:
    "https://www.facebook.com/people/NU-Clark-Academe-Industry-Linkages-and-Placement-Office/61578595724963/",
  address:
    "Clark Tech Hub 8, SM City Clark Expansion, Clark-Mabalacat-Angeles Road, Barangay Dau, Mabalacat City, Pampanga",
};

export const linkagesCover = "/linkages/cover.jpg";

export type LinkageFocus = {
  title: string;
  text: string;
};

export const linkagesFocus: LinkageFocus[] = [
  {
    title: "Internship",
    text: "Partners that give students hands-on industry experience aligned with their programs.",
  },
  {
    title: "Placement",
    text: "Matching graduates with roles that fit their skills, qualifications, and career goals.",
  },
  {
    title: "Curriculum development",
    text: "Industry input that keeps programs relevant to current market demands.",
  },
  {
    title: "Workshops and training",
    text: "Seminars, guest lectures, and capacity-building for students, faculty, and staff.",
  },
  {
    title: "SHS immersion",
    text: "Real-world training pathways that bridge Senior High School learning and practice.",
  },
];

export type LinkagePartnership = {
  title: string;
  partner: string;
  date?: string;
  category: string;
  summary: string;
  images: string[];
};

/** Featured partnerships sourced from the AILPO Facebook page. */
export const linkagesFeatured: LinkagePartnership[] = [
  {
    title: "MOU signing with Gueco Balibago Elementary School",
    partner: "Gueco Balibago Elementary School",
    category: "Community · Education",
    summary:
      "National University Clark and Gueco Balibago Elementary School have established a strategic partnership that strengthens ties between educational institutions in pursuit of shared goals for quality education and community impact. Through this collaboration, both institutions reaffirm their commitment to nurturing learning, leadership, and lifelong development — expanding opportunities through internships, community extensions, research collaborations, faculty immersion, and capacity-building initiatives.",
    images: [
      "/linkages/photo-02.jpg",
      "/linkages/photo-03.jpg",
      "/linkages/photo-04.jpg",
      "/linkages/photo-01.jpg",
    ],
  },
  {
    title: "MOU signing with Chez Suzette Philippines",
    partner: "Chez Suzette French Brasserie",
    category: "Industry · Hospitality",
    summary:
      "NU Clark proudly celebrates the official MOU signing with Chez Suzette Philippines, strengthening industry-academe collaboration and opening new avenues for experiential learning, workforce readiness, and student success.",
    images: [
      "/linkages/photo-06.jpg",
      "/linkages/photo-07.jpg",
      "/linkages/photo-08.jpg",
      "/linkages/photo-05.jpg",
    ],
  },
  {
    title: "MOU signing with IMA",
    partner: "Institute of Management Accountants (IMA)",
    category: "Professional · Accountancy",
    summary:
      "A milestone in strengthening collaboration and creating new opportunities through the MOU signing with the Institute of Management Accountants Inc. — connecting NU Clark students and educators to professional learning, leadership development, industry engagement, competitions, scholarships, and pathways toward the CMA journey.",
    images: [
      "/linkages/photo-15.jpg",
      "/linkages/photo-12.jpg",
      "/linkages/photo-13.jpg",
      "/linkages/photo-11.jpg",
      "/linkages/photo-14.jpg",
    ],
  },
];

export type LinkageOpportunity = {
  title: string;
  date?: string;
  venue?: string;
  summary: string;
  image: string;
};

export const linkagesOpportunities: LinkageOpportunity[] = [
  {
    title: "Ready for Germany: Your Path to Work & Life Abroad",
    date: "November 22, 2026 · 12:00 PM – 5:00 PM",
    venue: "One Ayala Mall, Level 2 Concourse B",
    summary:
      "A careers and migration session with AHK and ProRecognition covering the German labor market, visas, recognition of qualifications, and life in Germany — hosted by NU Clark AILPO.",
    image: "/linkages/photo-09.jpg",
  },
  {
    title: "Your career in Germany starts here",
    summary:
      "AILPO’s valued partner, the German-Philippine Chamber of Commerce and Industry (GPCCI), invites Filipino professionals and aspiring international talents to a Career Fair under the ProRecognition Project, funded by the German Federal Ministry.",
    image: "/linkages/photo-10.jpg",
  },
  {
    title: "Join the Army — Integrated Basic Officer Leader Course",
    summary:
      "Career pathway briefing for baccalaureate degree holders: officer candidate training, exams, and leadership careers through the Philippine Army Recruitment Office–Luzon, shared by AILPO.",
    image: "/linkages/photo-16.jpg",
  },
];

export type LinkagePartner = {
  name: string;
  kind: "Industry" | "Government" | "Academic" | "International" | "Community";
  note: string;
  /** Partner mark when available */
  logo?: string;
  /** Ceremony / MOU photo when available */
  image?: string;
};

/** Broader NU Clark partnership network (AILPO page + campus announcements). */
export const linkagesNetwork: LinkagePartner[] = [
  {
    name: "Institute of Management Accountants (IMA)",
    kind: "Industry",
    note: "University partner for CMA pathways, competitions, and professional learning.",
    logo: "/partners/ima.png",
    image: "/linkages/photo-15.jpg",
  },
  {
    name: "Chez Suzette French Brasserie",
    kind: "Industry",
    note: "Hospitality MOU for experiential learning and workforce readiness.",
    logo: "/partners/chez.png",
    image: "/linkages/photo-06.jpg",
  },
  {
    name: "Gueco Balibago Elementary School",
    kind: "Community",
    note: "Education partnership for immersion, extension, and capacity-building.",
    image: "/linkages/photo-02.jpg",
  },
  {
    name: "German-Philippine Chamber of Commerce and Industry",
    kind: "International",
    note: "ProRecognition career fair and Germany work-abroad pathways.",
    logo: "/partners/gpcci.png",
    image: "/linkages/photo-09.jpg",
  },
  {
    name: "NAPOLCOM Regional Office III",
    kind: "Government",
    note: "Internship, professional development, research, and community initiatives.",
    logo: "/partners/napolcom.png",
  },
  {
    name: "Dewey International – Taiwan",
    kind: "International",
    note: "Language education and global learning pathways.",
  },
  {
    name: "OMADA One Inc.",
    kind: "Industry",
    note: "BPO and remote staffing collaboration for academe-industry engagement.",
    logo: "/partners/omada.png",
  },
  {
    name: "PSYZYGY Psychological Center",
    kind: "Industry",
    note: "Internship and placement in psychology and mental health services.",
  },
  {
    name: "Servo IT Solutions",
    kind: "Industry",
    note: "IT education, innovation, and industry immersion.",
    logo: "/partners/servo.png",
  },
  {
    name: "UP Diliman Asian Center",
    kind: "Academic",
    note: "Interdisciplinary research and academic collaboration.",
    logo: "/partners/upd.png",
  },
  {
    name: "Clark International Airport (LIPAD)",
    kind: "Industry",
    note: "Airport and aviation-sector training and partnership opportunities.",
    logo: "/partners/lipad.png",
  },
  {
    name: "Clark Development Corporation",
    kind: "Government",
    note: "Clark Freeport institutional collaboration.",
    logo: "/partners/cdc.png",
  },
  {
    name: "DICT",
    kind: "Government",
    note: "Recognized Outstanding Partner for technology-driven programs.",
  },
  {
    name: "Nippon Sport Science University – Japan",
    kind: "International",
    note: "Faculty and student mobility, satellite office, and cultural exchange.",
  },
  {
    name: "Kainan University – Taiwan",
    kind: "International",
    note: "Academic MOA for global student and faculty pathways.",
  },
  {
    name: "Sunchon National University – Korea",
    kind: "International",
    note: "MOU for research, mobility, and shared educational resources.",
    logo: "/partners/scnu.png",
    image: "/news/sunchon-mou/sunchon-mou-01.jpg",
  },
  {
    name: "Hotels and Restaurants Association of Pampanga",
    kind: "Industry",
    note: "OJT, careers, and research with leading hospitality partners.",
    logo: "/partners/hrap.png",
  },
  {
    name: "Pampanga State Agricultural University",
    kind: "Academic",
    note: "Academic programs, research, and community engagement.",
    logo: "/partners/psau.png",
  },
];
