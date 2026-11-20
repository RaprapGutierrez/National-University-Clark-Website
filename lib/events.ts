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
  /** Facebook video link (opens in a new tab, see note below) */
  video?: string;
  hashtags?: string[];
  credits?: string[];
};

const HASHTAGS = ["#NUClarkSDAO", "#NUClark", "#EducationThatWorks"];

const DEANS_LIST_BODY = [
  "The Student Development and Activities Office is pleased to announce the official list of Dean’s List Awardees for the First Term of Academic Year 2026–2027.",
  "With great pride and admiration, we extend our heartfelt congratulations to all awardees. Your perseverance, and unwavering commitment to academic excellence have truly earned you this recognition. Your achievements stand as a testament to the determination and discipline that define true Nationalian excellence.",
  "As we honor your success, may this milestone continue to inspire you to strive higher and pursue greater accomplishments in the journey ahead.",
];

const DEANS_LIST_TAGS = [
  "#NUCGantingPagal",
  "#NUClarkSDAO",
  "#NUClark",
  "#EducationThatWorks",
];

export const events: EventPost[] = [
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
    hashtags: ["#NUClarkSDAO", "#NUClark", "#EducationThatWorks"],
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
    slug: "ganting-pagal-engineering",
    tag: "Dean’s List",
    title: "Ganting Pagal 2026: School of Engineering",
    images: [
      {
        src: "/events/ganting-pagal/cover.jpg",
        alt: "Ganting Pagal, First Term A.Y. 2026-2027, NU Clark SDAO",
      },
    ],
    gallery: [
      {
        title: "BS Civil Engineering",
        items: [
          {
            src: "/events/ganting-pagal/civil-1st-first-honors.jpg",
            alt: "BS Civil Engineering, First Year, First Honors",
            caption: "First Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-1st-second-honors-a.jpg",
            alt: "BS Civil Engineering, First Year, Second Honors, ranks 1 to 4",
            caption: "First Year · Second Honors (1 of 2)",
          },
          {
            src: "/events/ganting-pagal/civil-1st-second-honors-b.jpg",
            alt: "BS Civil Engineering, First Year, Second Honors, ranks 5 to 7",
            caption: "First Year · Second Honors (2 of 2)",
          },
          {
            src: "/events/ganting-pagal/civil-2nd-first-honors.jpg",
            alt: "BS Civil Engineering, Second Year, First Honors",
            caption: "Second Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-2nd-second-honors.jpg",
            alt: "BS Civil Engineering, Second Year, Second Honors",
            caption: "Second Year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/civil-4th-first-honors.jpg",
            alt: "BS Civil Engineering, Fourth Year, First Honors",
            caption: "Fourth Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/civil-4th-second-honors.jpg",
            alt: "BS Civil Engineering, Fourth Year, Second Honors",
            caption: "Fourth Year · Second Honors",
          },
        ],
      },
      {
        title: "BS Computer Engineering",
        items: [
          {
            src: "/events/ganting-pagal/comp-1st-first-honors.jpg",
            alt: "BS Computer Engineering, First Year, First Honors",
            caption: "First Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-1st-second-honors.jpg",
            alt: "BS Computer Engineering, First Year, Second Honors",
            caption: "First Year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-2nd-first-honors.jpg",
            alt: "BS Computer Engineering, Second Year, First Honors",
            caption: "Second Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-2nd-second-honors.jpg",
            alt: "BS Computer Engineering, Second Year, Second Honors",
            caption: "Second Year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-3rd-first-honors.jpg",
            alt: "BS Computer Engineering, Third Year, First Honors",
            caption: "Third Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-3rd-second-honors.jpg",
            alt: "BS Computer Engineering, Third Year, Second Honors",
            caption: "Third Year · Second Honors",
          },
          {
            src: "/events/ganting-pagal/comp-4th-first-honors.jpg",
            alt: "BS Computer Engineering, Fourth Year, First Honors",
            caption: "Fourth Year · First Honors",
          },
          {
            src: "/events/ganting-pagal/comp-4th-second-honors.jpg",
            alt: "BS Computer Engineering, Fourth Year, Second Honors",
            caption: "Fourth Year · Second Honors",
          },
        ],
      },
    ],
    date: "Term 1 | A.Y. 2026–2027",
    venue: "BS Civil Engineering · BS Computer Engineering",
    body: [
      "Recognizing Excellence. Celebrating Achievement.",
      ...DEANS_LIST_BODY,
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid02EyZFsD86WiJovRP7h2MqVUCFySFF94ZKDHqZAxrTuHFPzyGUxwEC9sFRQo5n1NGCl&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: DEANS_LIST_TAGS,
  },

  {
    slug: "ganting-pagal-satc",
    tag: "Dean’s List",
    title:
      "Ganting Pagal 2026: School of Architecture, Technology, and Computing",
    date: "Term 1 | A.Y. 2026–2027",
    venue: "BS Architecture · BS Computer Science · BS Information Technology",
    body: [
      "Recognizing Excellence. Celebrating Achievement.",
      ...DEANS_LIST_BODY,
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid02UP2L415faWW9ceYTgevuHMsQHFr6qZszMSBNVsnA7rCC77Uf25Y6gsVvNhirJ3tdl&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: DEANS_LIST_TAGS,
  },

  {
    slug: "ganting-pagal-sabm",
    tag: "Dean’s List",
    title:
      "Ganting Pagal 2026: School of Accountancy, Business, and Management",
    date: "Term 1 | A.Y. 2026–2027",
    venue:
      "BS Accountancy · BS Management Accounting · BS Business Administration (Major in Marketing Management) · BS Tourism Management",
    body: [
      "Recognizing Excellence. Celebrating Achievement.",
      ...DEANS_LIST_BODY,
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid02ZKhZv1G4YaavVCbiFr6Sq33KYoN49odKH15x2pXwUypkEdnJuSXR6y8W7JcawEVzl&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: DEANS_LIST_TAGS,
  },

  {
    slug: "ganting-pagal-dentistry-allied-health",
    tag: "Dean’s List",
    title: "Ganting Pagal 2026: School of Dentistry and Allied Health",
    date: "Term 1 | A.Y. 2026–2027",
    venue: "BS Medical Technology · Doctor of Dental Medicine",
    body: [
      "Recognizing Excellence. Celebrating Achievement.",
      ...DEANS_LIST_BODY,
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid023Q2M11Fuy5FXEPVtx11i7UyCTp2X8zThX1aHsafwyFBwaTZXdeS8hBoiYcJJbHNUl&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: DEANS_LIST_TAGS,
  },

  {
    slug: "ganting-pagal-seas",
    tag: "Dean’s List",
    title: "Ganting Pagal 2026: School of Education, Arts, and Sciences",
    date: "Term 1 | A.Y. 2026–2027",
    venue: "AB Communication · AB Political Science · BS Psychology",
    body: [
      "Recognizing Excellence. Celebrating Achievement.",
      ...DEANS_LIST_BODY,
    ],
    links: [
      {
        label: "See the Facebook post",
        href: "https://m.facebook.com/story.php?story_fbid=pfbid027zH6H7JTLEvZnkETQjmsHm57tprmYLQEcUkV96Pcx5xhf929GzTZbupymRSxKPi7l&id=100093697247608&mibextid=ZbWKwL",
      },
    ],
    hashtags: DEANS_LIST_TAGS,
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
