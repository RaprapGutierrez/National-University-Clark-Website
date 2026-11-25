// Content for the News page.

/**
 * The NU Clark Facebook page address, for example "https://www.facebook.com/your-page-name".
 * Leave it empty ("") to hide the Facebook feed.
 */
export const FACEBOOK_PAGE_URL = "";

export type NewsPost = {
  /** Unique, lowercase, no spaces. Example: "ganting-pagal-2026" */
  slug: string;
  title: string;
  /** Display date. Example: "November 20, 2026" */
  date: string;
  /** Short label above the title. Example: "Announcement", "Achievement" */
  tag: string;
  summary: string;
  /** Picture saved in /public/news/ */
  image?: { src: string; alt: string };
  /** Link to the original Facebook post */
  href?: string;
};

// Add featured stories here, newest first. The first one is shown large.
//
// {
//   slug: "example-story",
//   title: "Story title",
//   date: "November 20, 2026",
//   tag: "Announcement",
//   summary: "Two or three sentences copied or shortened from the Facebook post.",
//   image: { src: "/news/example-story.jpg", alt: "Describe the picture" },
//   href: "https://www.facebook.com/...",
// },
export const news: NewsPost[] = [];
