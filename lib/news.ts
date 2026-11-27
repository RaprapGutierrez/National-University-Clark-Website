import { album as makeAlbum } from "@/lib/album";
import type { EventPost } from "@/lib/events";

// Content for the News page.

/**
 * The NU Clark Facebook page address, for example "https://www.facebook.com/your-page-name".
 * Leave it empty ("") to hide the Facebook feed.
 */
export const FACEBOOK_PAGE_URL = "";

/** A news story has the same fields as an event (see lib/events.ts). */
export type NewsPost = EventPost;

// Pictures for a story: save them in /public/news/<folder>/ and name them
// <folder>-01.jpg, <folder>-02.jpg ... (see lib/album.ts)
const album = (folder: string, count: number, alt: string) =>
  makeAlbum("news", folder, count, alt);

// Add stories here, newest first. The first one is shown large.
// Add `date: "November 20, 2026"` to a story to show its date.
export const news: NewsPost[] = [
  {
    slug: "the-sustainability-impact-ratings-2026",
    tag: "Recognition",
    title:
      "NU Clark Achieves Global Recognition in the THE Sustainability Impact Ratings 2026",
    body: [
      "National University Clark has earned global recognition in the Times Higher Education (THE) Sustainability Impact Ratings 2026, securing a ranking of 801–1000 worldwide for Sustainable Development Goal (SDG) 8: Decent Work and Economic Growth and 1001+ for SDG 5: Gender Equality.",
      "This achievement highlights NU Clark’s growing contribution to advancing the United Nations Sustainable Development Goals through quality education, meaningful community engagement, responsible institutional practices, and initiatives that promote inclusive growth and equal opportunities.",
      "The recognition in SDG 8 reflects the University’s efforts to support economic development, employability, innovation, and productive opportunities for learners and communities. Meanwhile, its ranking in SDG 5 underscores NU Clark’s commitment to fostering an inclusive environment that promotes gender equality, diversity, and empowerment.",
      "The THE Sustainability Impact Ratings assess universities worldwide based on their contributions to the United Nations Sustainable Development Goals, measuring performance across research, stewardship, outreach, and teaching.",
      "NU Clark’s inclusion in the 2026 rankings further strengthens its position as a forward-looking institution committed to academic excellence, social responsibility, and sustainable development—developing future-ready graduates while helping build a more inclusive and sustainable future for all.",
    ],
    ...album(
      "the-impact-ratings-2026",
      1,
      "NU Clark Achieves Global Recognition in Times Higher Education Sustainability Impact Ratings 2026: ranked 801-1000 worldwide in SDG 8 and 1000+ worldwide in SDG 5",
    ),
  },

  {
    slug: "wuri-2026",
    tag: "Recognition",
    title: "NU Clark Ranks Among the World’s Top Universities in WURI 2026",
    body: [
      "National University – Clark has achieved global recognition, ranking 278th in the 2026 World University Rankings for Innovation (WURI)—a prestigious list of the Most Innovative Universities in the World.",
      "In addition to its overall global ranking, NU Clark earned outstanding placements across key categories:",
      "Rank 40 – Student Support and Engagement",
      "Rank 16 – Student Mobility and Openness",
      "Rank 27 – Ethics and Integrity",
      "Rank 23 – SDG and ESG Based Responses to Global Challenges",
      "Rank 31 – Visionary Leadership",
      "Rank 14 – Culture and Values",
      "Rank 31 – Curricular Innovation for Future-Readiness",
      "Rank 26 – Social Impact",
      "Rank 63 – Inclusive Social Innovation for the Underserved",
      "This remarkable achievement highlights NU Clark’s growing global presence and commitment to excellence, global engagement and innovation in higher education.",
      "NU Clark is proud to be among the world’s best in innovation!",
      "At NU Clark, We Want The Best iN U.",
    ],
    ...album(
      "wuri-2026",
      10,
      "NU Clark ranks 278th in the 2026 World University Rankings for Innovation (WURI)",
    ),
    hashtags: [
      "#NUClark",
      "#WURI2026",
      "#GlobalRecognition",
      "#ExcellenceInEducation",
      "#WorldClassUniversity",
    ],
  },

  {
    slug: "ched-icons-awards-2025",
    tag: "Award",
    title: "NU Clark Receives an Award at the CHED ICONS Awards 2025",
    venue: "Philippine International Convention Center (PICC)",
    body: [
      "NU Clark proudly received an award at the Commission on Higher Education (CHED) ICONS Awards 2025, held at the Philippine International Convention Center (PICC).",
      "The award was presented by CHED Chairperson Dr. Shirley C. Agrupis and received by Dr. Arnel A. Diego, Executive Director of NU Clark.",
      "This recognition highlights NU Clark’s commitment to excellence in higher education, academic innovation, internationalization, and community engagement, reflecting its ongoing efforts to contribute meaningfully to the Philippine higher education landscape.",
    ],
    ...album(
      "ched-icons-2025",
      1,
      "NU Clark receives an award at the CHED ICONS Awards 2025 at the Philippine International Convention Center",
    ),
  },

  {
    slug: "south-korean-universities-engagement",
    tag: "Partnership",
    title: "NU Clark Engages Five South Korean Universities",
    body: [
      "NU Clark reaffirmed its commitment to internationalization through a collaborative engagement with five distinguished universities from South Korea, creating new opportunities for academic exchange, global learning, and future educational pathways for Senior High School students.",
      "Representatives from the partner institutions presented their academic programs, international learning opportunities, and potential pathways available to NU Clark learners:",
      "🇰🇷 Cheongam University – led by Kim Hyeon-na",
      "🇰🇷 Hanyeong University – led by Yoo In-eun",
      "🇰🇷 Suncheon Jeil College – led by Bae Jae-hoon",
      "🇰🇷 Chonnam National University – led by Park Jong-bok",
      "🇰🇷 Sunchon National University – represented by Director for International Affairs, Seo Kang-seok",
      "The engagement provided students with valuable insights into international education, encouraging them to explore opportunities beyond borders and broaden their global perspectives. Through these partnerships, NU Clark continues to build meaningful connections that support student mobility, cultural exchange, and academic advancement.",
      "Aligned with its vision of developing globally competitive and future-ready graduates, NU Clark remains dedicated to expanding access to transformative educational experiences that prepare learners to thrive in an increasingly interconnected world.",
    ],
    ...album(
      "korea-universities",
      22,
      "NU Clark students and representatives of five South Korean universities",
    ),
  },

  {
    slug: "sunchon-national-university-mou",
    tag: "Partnership",
    title:
      "NU Clark Signs a Memorandum of Understanding with Sunchon National University",
    body: [
      "NU Clark strengthens its commitment to global education through the signing of a Memorandum of Understanding (MOU) with Sunchon National University of the Republic of Korea.",
      "The partnership establishes a framework for academic cooperation and exchange, fostering opportunities for joint research and educational activities, faculty and student mobility, curriculum development, and the sharing of educational resources. Through this collaboration, both institutions aim to advance international engagement and create meaningful learning and research opportunities that transcend borders.",
      "This milestone reinforces NU Clark's dedication to providing globally connected education and preparing future professionals to thrive in an increasingly interconnected world.",
    ],
    ...album(
      "sunchon-mou",
      8,
      "Signing of the Memorandum of Understanding between NU Clark and Sunchon National University",
    ),
  },

  {
    slug: "nvidia-ai-tech-update",
    tag: "Event",
    title: "NVIDIA: AI Tech Update at NU Clark",
    body: [
      "ICYMI: NU Clark students got a firsthand look at the future of technology during the NVIDIA: AI Tech Update!",
      "In collaboration with the Consortium of Data Enthusiasts (CODE), PC Express brought together NVIDIA Philippines and Kingston for an engaging learning experience focused on artificial intelligence, computer technology, and PC building.",
      "Students gained valuable insights from industry experts, including Jesse Tan of PC Express, who discussed local AI using NVIDIA RTX; Jay Ortiz of Dark Side Studios, who shared practical applications of AI; and Matthew Labrador, who explored the role of AI in game development.",
      "The event also featured discussions on NVIDIA's latest AI technologies, Kingston innovations, and PCX Desktop solutions. Beyond the talks, students enjoyed exploring partner booths, participating in interactive PC challenge games, and showcasing their skills during the PC DIY Seminar and PC Build Challenge.",
      "Through initiatives like these, NU Clark continues to provide opportunities for students to connect with industry professionals, discover emerging technologies, and prepare for the rapidly evolving digital landscape.",
    ],
    ...album(
      "nvidia-ai-tech-update",
      40,
      "NU Clark students at the NVIDIA: AI Tech Update with PC Express, NVIDIA Philippines, Kingston, and CODE",
    ),
    credits: ["Photos: Consortium of Data Enthusiasts (CODE)"],
  },
];
