export type EventPost = {
  slug: string;
  title: string;
  /** Short label shown above the title, e.g. "Upcoming", "Highlights" */
  tag: string;
  /** Display date, e.g. "November 25, 2026". Leave empty if there is none. */
  date?: string;
  /** Extra line under the date, e.g. venue */
  venue?: string;
  /** Paragraphs of text */
  body: string[];
  /** Pictures in /public/events/ */
  images?: { src: string; alt: string }[];
  /** Photo albums grouped by section, shown full width under the post */
  gallery?: {
    title: string;
    items: { src: string; alt: string; caption: string }[];
  }[];
  /** Buttons, e.g. register forms or the Facebook post */
  links?: { label: string; href: string }[];
  /** Facebook video link (opens in a new tab) */
  video?: string;
  /** Video file saved in /public/events/ (plays on the page) */
  videoSrc?: string;
  hashtags?: string[];
  credits?: string[];
};

export function isUpcoming(event: EventPost) {
  return event.tag.toLowerCase().startsWith("upcoming");
}

const HASHTAGS = ["#NUClarkSDAO", "#NUClark", "#EducationThatWorks"];
const PASKO_TAGS = ["#PaskungKabaleNU2026", "#NUClark", "#EducationThatWorks"];

const IRR_NOTE =
  "Complete IRR and registration/submission details are in the comment section of our Facebook post.";

/** tree-lighting-01.jpg ... tree-lighting-25.jpg */
const TREE_LIGHTING_COUNT = 25;
const treeLighting = Array.from({ length: TREE_LIGHTING_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/events/christmas-tree-lighting/tree-lighting-${n}.jpg`;
});

export const events: EventPost[] = [
  // ---------------------------------------------------------------
  // LATEST EVENT
  // ---------------------------------------------------------------
  {
    slug: "christmas-tree-lighting-ceremony",
    tag: "Highlights",
    title: "Christmas Tree Lighting Ceremony",
    date: "November 2026",
    venue: "NU Clark",
    body: [
      "As the lights begin to glow, so does the spirit of the season.",
      "The NU Clark community gathered to celebrate the Christmas Tree Lighting Ceremony, a beautiful reminder of hope, joy, and togetherness.",
      "As we officially welcome the most wonderful time of the year, may the warm glow of Christmas inspire kindness, gratitude, and meaningful moments with the people who matter most.",
      "From all of us at NU Clark, may your Christmas season be merry, meaningful, and filled with blessings. 💛💙",
    ],
    // Main picture: tree-lighting-01.jpg
    images: [
      {
        src: treeLighting[0],
        alt: "Christmas Tree Lighting Ceremony at NU Clark",
      },
    ],
    // More pictures: tree-lighting-02.jpg to tree-lighting-25.jpg
    gallery: [
      {
        title: "More photos",
        items: treeLighting.slice(1).map((src, i) => ({
          src,
          alt: `Christmas Tree Lighting Ceremony photo ${i + 2}`,
          caption: `Photo ${i + 2} of ${TREE_LIGHTING_COUNT}`,
        })),
      },
    ],
    hashtags: ["#NUClark", "#EducationThatWorks"],
  },

  {
    slug: "micd-up-events-hosting-workshop",
    tag: "Upcoming event",
    title: "On the Mic: Introducing the Speaker",
    date: "November 25, 2026",
    venue: "8th Floor, Room 806",
    body: [
      "Every great event deserves a great host, and every great host has a story behind the microphone!",
      "For MIC’D UP: Events Hosting Workshop (Year 2), we are bringing you someone who knows the art of commanding the stage, connecting with audiences, and making every event memorable.",
      "Meet Mr. Melvin P. Aguilar, a Licensed Professional Teacher, professional events host and planner in Pampanga, and owner of Host Melvin Events Management and Hosting Services. He also serves as the Senior Supervisor of the Student Development and Activities Office at National University Clark.",
      "Get ready to learn from his experience, discover the craft of professional hosting, and build the confidence to take the mic!",
      "Secure your spot now! Limited slots only! Students: 8:30 AM. Employees: 1:30 PM.",
    ],
    images: [
      {
        src: "/events/mic-d-up-poster.jpg",
        alt: "MIC’D UP Year 2 Events Hosting Workshop poster, November 25, 2026, 8th Floor Room 806",
      },
      {
        src: "/events/mic-d-up-speaker.jpg",
        alt: "Speaker poster: Melvin P. Aguilar, Workshop Facilitator",
      },
    ],
    links: [
      {
        label: "Register as a student",
        href: "https://forms.cloud.microsoft/r/b59muZer7d",
      },
      {
        label: "Register as an employee",
        href: "https://forms.cloud.microsoft/r/aZKvrrTsft",
      },
    ],
    hashtags: HASHTAGS,
  },

  // ---------------------------------------------------------------
  // PASKUNG KABALENU 2026
  // ---------------------------------------------------------------
  {
    slug: "jingle-all-the-nuway",
    tag: "Upcoming event",
    title:
      "Jingle All the NU-Way: Four Days of Christmas Magic at Paskung KabaleNU",
    date: "December 1–4, 2026",
    venue: "NU Clark",
    body: [
      "Four days of Christmas festivities, surprises, laughter, and memories are coming to NU Clark!",
      "Join us as we celebrate the season and the Nationalian community at Paskung KabaleNU.",
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/jingle-all-the-nuway.jpg",
        alt: "Jingle All the NU-Way: Four Days of Christmas Magic at Paskung KabaleNU, December 1 to 4, 2026",
      },
    ],
    credits: ["Graphics: Bea Mei Cabral", "Written by: Marc Paguia"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "paskung-kabalenu-prizes",
    tag: "Upcoming event",
    title:
      "Paskung KabaleNU 2026 Just Got a Whole Lot Brighter, and Significantly More Rewarding!",
    date: "December 1–4, 2026",
    body: [
      "The University Student Council and the Senior High School Student Government are bringing bigger prizes to this year's Paskung KabaleNU competitions.",
      "Paskong All-Out: up to an ₱8,000 SM Gift Card for the Overall Champion.",
      "Parol Making: Champion ₱5,000, 1st Runner-Up ₱3,000, 2nd Runner-Up ₱2,000, and 3rd Runner-Up ₱1,500 in SM Gift Cards.",
      "Bibingka Fest: Champion ₱3,000, 1st Runner-Up ₱2,000, and 2nd Runner-Up ₱1,500 in SM Gift Cards.",
      "Paskong Pelikula: 1st Place ₱3,000, 2nd Place ₱2,000, 3rd Place ₱1,000, and 4th and 5th Place ₱500 each in SM Gift Cards.",
      "The 12 Days of Christmas Hunt: a high-capacity powerbank, wireless earbuds, a handheld fan, and many more!",
      "Questions? Email usc@nu-clark.edu.ph or message @nucusc.",
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/prizes-paskong-all-out.jpg",
        alt: "Paskong All-Out prizes",
      },
      {
        src: "/events/paskung-kabalenu/prizes-parol-making.jpg",
        alt: "Parol Making prizes: Champion ₱5,000 SM Gift Card",
      },
      {
        src: "/events/paskung-kabalenu/prizes-bibingka-fest.jpg",
        alt: "Bibingka Fest prizes: Champion ₱3,000 SM Gift Card",
      },
      {
        src: "/events/paskung-kabalenu/prizes-paskong-pelikula.jpg",
        alt: "Paskong Pelikula prizes: 1st Place ₱3,000 SM Gift Card",
      },
      {
        src: "/events/paskung-kabalenu/prizes-12-days-hunt.jpg",
        alt: "The 12 Days of Christmas Hunt prizes: powerbank, wireless earbuds, handheld fan",
      },
    ],
    links: [{ label: "Email the USC", href: "mailto:usc@nu-clark.edu.ph" }],
    credits: ["Image credit: Lady Sophia Molina"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "paskong-pelikula",
    tag: "Upcoming event",
    title: "Paskong Pelikula",
    date: "Deadline: November 30, 2026",
    body: [
      "Create a short vertical film inspired by the theme “Alab ng Puso, Liyab ng Pag-asa,” highlighting gratitude, joy, and unity.",
      IRR_NOTE,
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/paskong-pelikula.jpg",
        alt: "Paskong Pelikula poster",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "parol-making-contest",
    tag: "Upcoming event",
    title: "Parol Making Contest",
    date: "December 1, 2026",
    body: [
      "Programs are invited to create a large parol that shows creativity, craftsmanship, innovation, teamwork, and Kapampangan Christmas identity under the theme “Alab ng Puso, Liyab ng Pag-asa.”",
      IRR_NOTE,
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/parol-making.jpg",
        alt: "Parol Making Contest poster",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "bibingka-fest",
    tag: "Upcoming event",
    title: "Bibingka Fest",
    date: "December 1, 2026",
    body: [
      "Calling all student foodies and aspiring chefs! Represent your school in a live cooking competition and create an innovative bibingka while preserving its Kapampangan identity.",
      IRR_NOTE,
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/bibingka-fest.jpg",
        alt: "Bibingka Fest poster",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "pawskung-tiangge",
    tag: "Upcoming event",
    title: "PAWSkung Tiangge",
    date: "December 1–4, 2026",
    body: [
      "Our invited concessionaires are coming to campus! Visit between classes, support the concessionaires, and enjoy snacks, keychains, trinkets, and holiday finds.",
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/pawskung-tiangge.jpg",
        alt: "PAWSkung Tiangge poster",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "12-days-of-christmas-hunt",
    tag: "Upcoming event",
    title: "The 12 Days of Christmas Hunt",
    date: "December 2, 2026",
    body: [
      "A campus-wide hunt with hidden tokens and clues! Form your squad, decode the clues, and race to find the prizes.",
      "Turn on post notifications so you don't miss any updates.",
      IRR_NOTE,
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/12-days-hunt.jpg",
        alt: "The 12 Days of Christmas Hunt poster",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  {
    slug: "paskong-all-out",
    tag: "Upcoming event",
    title: "Paskong All-Out",
    date: "December 4, 2026",
    body: [
      "Schools, bring your dancers, singers, and rappers for a Christmas performance under the theme “Alab ng Puso, Liyab ng Pag-asa.”",
    ],
    images: [
      {
        src: "/events/paskung-kabalenu/paskong-all-out.jpg",
        alt: "Paskong All-Out poster",
      },
    ],
    links: [
      {
        label: "IRR, criteria, and entry forms",
        href: "https://tinyurl.com/2b94nzdb",
      },
    ],
    credits: ["Image credit: Bea Mei Cabral"],
    hashtags: PASKO_TAGS,
  },

  // ---------------------------------------------------------------
  // EARLIER POSTS
  // ---------------------------------------------------------------
  {
    slug: "ganting-pagal-academic-honors",
    tag: "Highlights",
    title: "Ganting Pagal: Celebrating Academic Excellence",
    date: "A.Y. 2026–2027",
    venue: "NU Clark",
    body: [
      "Ganting Pagal — “shining star” in Kapampangan — honors Nationalians whose hard work in the classroom deserves the spotlight.",
      "Students from Civil Engineering and Computing programs were recognized for First and Second Honors across year levels, celebrating excellence, grit, and the culture of achievement at NU Clark.",
      "Congratulations to every shining star. Keep aiming higher.",
    ],
    images: [
      {
        src: "/events/ganting-pagal/cover.jpg",
        alt: "Ganting Pagal academic honors ceremony at NU Clark",
      },
    ],
    gallery: [
      {
        title: "Civil Engineering honors",
        items: [
          {
            src: "/events/ganting-pagal/civil-1st-first-honors.jpg",
            alt: "Civil Engineering 1st year First Honors",
            caption: "1st year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-1st-second-honors-a.jpg",
            alt: "Civil Engineering 1st year Second Honors",
            caption: "1st year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/civil-1st-second-honors-b.jpg",
            alt: "Civil Engineering 1st year Second Honors",
            caption: "1st year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/civil-2nd-first-honors.jpg",
            alt: "Civil Engineering 2nd year First Honors",
            caption: "2nd year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-2nd-second-honors.jpg",
            alt: "Civil Engineering 2nd year Second Honors",
            caption: "2nd year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/civil-4th-first-honors.jpg",
            alt: "Civil Engineering 4th year First Honors",
            caption: "4th year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-4th-second-honors.jpg",
            alt: "Civil Engineering 4th year Second Honors",
            caption: "4th year · Second Honors",
          },
        ],
      },
      {
        title: "Computing honors",
        items: [
          {
            src: "/events/ganting-pagal/comp-1st-first-honors.jpg",
            alt: "Computing 1st year First Honors",
            caption: "1st year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-1st-second-honors.jpg",
            alt: "Computing 1st year Second Honors",
            caption: "1st year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-2nd-first-honors.jpg",
            alt: "Computing 2nd year First Honors",
            caption: "2nd year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-2nd-second-honors.jpg",
            alt: "Computing 2nd year Second Honors",
            caption: "2nd year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-3rd-first-honors.jpg",
            alt: "Computing 3rd year First Honors",
            caption: "3rd year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-3rd-second-honors.jpg",
            alt: "Computing 3rd year Second Honors",
            caption: "3rd year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-4th-first-honors.jpg",
            alt: "Computing 4th year First Honors",
            caption: "4th year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-4th-second-honors.jpg",
            alt: "Computing 4th year Second Honors",
            caption: "4th year · Second Honors",
          },
        ],
      },
    ],
    hashtags: HASHTAGS,
  },

  {
    slug: "plugged-into-progress-look-back",
    tag: "A look back",
    title: "Plugged Into Progress: Term 1 Executive Assembly",
    date: "October 29, 2026",
    body: [
      "A glimpse into a day of learning, collaboration, and leadership in action!",
      "Relive the highlights of the Term 1 Executive Assembly last October 29, 2026, as College and SHS RSOs and AcSOs came together to strengthen organizational leadership, build meaningful connections, and embrace greater accountability.",
      "The journey continues. Stay plugged into purpose!",
    ],
    video: "https://www.facebook.com/share/r/1E6bjXCCps/",
    hashtags: HASHTAGS,
  },

  {
    slug: "highlights-term-1-executive-assembly",
    tag: "Highlights",
    title: "Plugged Into Progress: Term 1 Executive Assembly",
    date: "October 29, 2026",
    venue: "NU Clark",
    body: [
      "Leadership goes beyond taking the lead. It means building connections, strengthening systems, and turning commitments into meaningful action.",
      "The Term 1 Executive Assembly brought together College and SHS Recognized and Accredited Student Organizations for a day of learning, collaboration, and organizational development.",
      "The session kicked off with The Executive Lab Workshop, facilitated by Mr. Melvin P. Aguilar, SDAO Senior Supervisor, alongside the launch of RSO Link, an initiative that opens opportunities for student organizations to build partnerships and meaningful linkages.",
      "Meanwhile, Mr. Jim Bryn G. Balatero, SDAO Associate, introduced SDAO Sync, the official SDAO Digital Hub designed to streamline updates on project proposals and organizational documents. He also presented the SPARK Framework (Student Organization Performance, Accountability, and Recognition KPI System) and revisited essential organizational processes through SDAO in 3 Easy Steps.",
      "The assembly wrapped up with important dates and reminders from Bernadette Briones, SDAO Assistant, followed by the closing remarks of Katrina Mae D. Lacsina, SDAO Assistant.",
      "Every connection sparks an opportunity. Every system strengthens accountability. Every leader moves student life forward.",
    ],
    credits: [
      "Hosted by: Gabriel Luis Prieto",
      "Covered and documented by: Luiz Andrei Delos Santos",
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid04iN13tiYL6CWN7j1iyP2RcQJ61YYTPxujR2Zt11z36g6wrnLcCQwjSUM1pxbMzgxl&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: HASHTAGS,
  },

  {
    slug: "a-look-back-beyond-the-oath",
    tag: "A look back",
    title: "Beyond the Oath",
    body: [
      "A glimpse into the moments that marked a new chapter of student leadership, commitment, and service.",
      "From taking the oath to turning commitment into action, Senior High School and College Recognized and Accredited Student Organizations stepped forward and plugged into purpose.",
      "Plugged Into Purpose: Oath-Taking Ceremony and Leadership Development Seminar",
      "Beyond the Oath: Transforming Commitment into Meaningful Service",
    ],
    video: "https://www.facebook.com/share/v/1CPDV8KgL4/",
    hashtags: HASHTAGS,
  },

  {
    slug: "highlights-oath-taking-ceremony",
    tag: "Highlights",
    title:
      "Plugged Into Purpose: Oath-Taking Ceremony and Leadership Development Seminar",
    date: "September 16, 2026",
    body: [
      "On September 16, 2026, the Senior High School and College Recognized and Accredited Student Organizations of NU Clark gathered for PLUGGED INTO PURPOSE: Oath-Taking Ceremony and Leadership Development Seminar, formally beginning another year of student leadership and service.",
      "Together with Mx. Aaron Jy E. Macalisang, college instructor and content creator known as Sir Jy Marie across social media platforms, student leaders engaged in a timely conversation on what it means to lead beyond a position.",
      "The session encouraged them to see leadership not simply as a title, but as a responsibility to listen, take initiative, work with others, and create meaningful contributions to the student community.",
      "With the oath taken and the commitment affirmed, our student leaders now move forward with a shared purpose: to transform commitment into meaningful service.",
    ],
    credits: ["Photos: PR1ME Multimedia"],
    links: [
      {
        label: "See the Facebook post",
        href: "https://www.facebook.com/share/p/14vhGCX3td3/",
      },
    ],
    hashtags: HASHTAGS,
  },
];
