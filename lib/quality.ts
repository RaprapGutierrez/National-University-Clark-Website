/** Content from NU Clark Educational Organization Management System (CollabHome). */

export const qualityIntro = {
  kicker: "Quality Management",
  heading: "NU Clark Educational Organization Management System",
  tagline:
    "An Integrated Digital Platform for Efficient Academic and Administrative Management",
  highlight: "CAMPUS OF THE YEAR at the 2026 National University Excellence Awards",
  lead: "NU Clark is the CAMPUS OF THE YEAR at the 2026 National University Service Excellence Awards.",
  awardsLead: "We received seven Major Awards including:",
};

export type QualityAward = {
  title: string;
  year?: string;
  date?: string;
  category: string;
  summary?: string;
  href?: string;
  image?: string;
};

/**
 * Seven major awards — images matched to ceremony graphics from the
 * Campus of the Year announcement.
 */
export const serviceExcellenceAwards: QualityAward[] = [
  {
    title: "Campus of the Year (Momentum Builders)",
    year: "2026",
    date: "August 13, 2026",
    category: "Service Excellence",
    summary:
      "Outstanding institutional performance and excellence — the campus headline award of the 2026 Service Excellence Awards.",
    image: "/quality/award-02.jpg",
  },
  {
    title: "Enrollment Excellence Award",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Recognized for strong enrollment performance and sustained growth of the NU Clark community.",
    image: "/quality/award-05.jpg",
  },
  {
    title: "Exceptional Performance in Physical Facilities",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Award for campus facilities performance that supports teaching, learning, and the student experience.",
    image: "/quality/award-04.jpg",
  },
  {
    title: "The Catalyst Award - Gold",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Gold recognition for initiatives that advanced university priorities with reach, engagement, and institutional impact.",
    image: "/quality/award-03.jpg",
  },
  {
    title: "Quality Policy Champion - Gold",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Gold recognition for living the university quality policy across campus operations and continuous improvement.",
  },
  {
    title: "Financial Stewardship and Governance Excellence Awards",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Recognition for responsible financial stewardship and sound campus governance practices.",
  },
  {
    title: "CHED Recognized Micro credentials",
    year: "2026",
    category: "Service Excellence",
    summary:
      "Acknowledged for CHED-recognized microcredential offerings that expand flexible learning pathways.",
  },
];

/** Overview collage of trophies and certificates from the awards night. */
export const awardsCollage = "/quality/award-01.jpg";

/** Other recognitions featured on the EOMS home. */
export const qualityHighlights: QualityAward[] = [
  {
    title:
      "NU Clark Achieves Global Recognition in THE Sustainability Impact Ratings 2026",
    date: "June 24, 2026",
    year: "2026",
    category: "Global ranking",
    href: "/news#the-sustainability-impact-ratings-2026",
    image: "/quality/highlight-the.jpg",
  },
  {
    title:
      "NU Clark Ranks Among the World's Top 278 Most Innovative Universities in WURI 2026.",
    date: "May 7, 2026",
    year: "2026",
    category: "Global ranking",
    href: "/news#wuri-2026",
    image: "/quality/highlight-wuri.jpg",
  },
  {
    title:
      "NU Clark proudly received an award at the Commission on Higher Education (CHED) ICONS Awards 2025, held at the Philippine International Convention Center (PICC)",
    date: "December 10, 2025",
    year: "2025",
    category: "National recognition",
    href: "/news#ched-icons-awards-2025",
    image: "/quality/highlight-ched.jpg",
  },
];

export const qualityVision =
  "We are National University, a dynamic Philippine institution leading in Asia, internationally recognized in teaching, research, and sustainable community development towards nation-building.";

export const qualityMission =
  "Guided by the core values and characterized by our cultural heritage of Dynamic Filipinism, National University commits to delivering transformative, quality education that is accessible and affordable.";

export const qualityValues = [
  { name: "Compassion", icon: "/about/value-compassion.png" },
  { name: "Innovation", icon: "/about/value-innovation.png" },
  { name: "Integrity", icon: "/about/value-integrity.png" },
  { name: "Patriotism", icon: "/about/value-patriotism.png" },
  { name: "Resilience", icon: "/about/value-resilience.png" },
];

export const qualityCampusAddress =
  "Clark Tech Hub 8, SM City Clark Expansion, Clark-Mabalacat-Angeles Road, Barangay Dau, Mabalacat City, Pampanga, 2010 Philippines";

export const qualityHeroImage = "/quality/award-02.jpg";
export const qualityFeatureImage = "/quality/award-01.jpg";
export const qualityCampusImage = "/quality/campus.jpg";
