/** Community Development / COMEX — structure from nu.edu.ph; assets from NUClarkCOMEX. */

export const communityIntro = {
  kicker: "COMEX",
  heading: "Community Extension Services Office",
  tagline: "NUrturing communities through geNUine service.",
  about:
    "NU Clark’s Community Extension Services Office plans and runs sustainable community projects — with students, partners, and barangays — so learning reaches beyond the classroom.",
  facebook: "https://www.facebook.com/NUClarkCOMEX",
  email: "comex@national-u.edu.ph",
  address:
    "Clark Tech Hub 8, SM City Clark Expansion, Clark-Mabalacat-Angeles Road, Barangay Dau, Mabalacat City, Pampanga",
};

export const communityCover = "/community/cover.jpg";

export const communityVision =
  "The National University Community Extension Office as the primary center for community development steers all stakeholders in building resilient and sustainable communities.";

export const communityMission =
  "To develop and facilitate community-based strategies, programs, and projects through collective participation which improves socio-economic opportunities, preserves cultural vitality, and promotes environmental responsibility.";

export type CommunityProgram = {
  title: string;
  subtitle: string;
  sdg: string;
  text: string;
  image: string;
};

export const communityPrograms: CommunityProgram[] = [
  {
    title: "Usaping Seguridad at Kaligtasan",
    subtitle: "Disaster risk reduction and resiliency",
    sdg: "SDG 11",
    text: "Emergency response training, first aid, and post-disaster relief that help partner communities prepare and recover.",
    image: "/community/photo-04.jpg",
  },
  {
    title: "Gintong Kaalaman at Kabuhayan",
    subtitle: "Education and livelihood",
    sdg: "SDG 4 & 8",
    text: "Tutoring, classroom assistance, skills development, and livelihood training that open doors for learners and families.",
    image: "/community/photo-01.jpg",
  },
  {
    title: "Natatanging Kultura at Pagkakapantay-pantay",
    subtitle: "Culture and social equity",
    sdg: "SDG 10 & 17",
    text: "Heritage, gender equality, and community empowerment initiatives that keep culture and inclusion at the center.",
    image: "/community/photo-02.jpg",
  },
  {
    title: "Aksyon para sa Kalikasan",
    subtitle: "Environment and climate action",
    sdg: "SDG 13",
    text: "Reforestation, waste reduction, clean-up drives, and sustainability advocacy with partner communities.",
    image: "/community/photo-06.jpg",
  },
  {
    title: "Yamang Pangkalusugan at Kapakanan",
    subtitle: "Community health and well-being",
    sdg: "SDG 3",
    text: "Medical missions, mental health awareness, and nutrition education for healthier partner communities.",
    image: "/community/photo-05.jpg",
  },
];

export const communityVolunteer = {
  title: "Nagkakaisang Ugnayan Volunteerism Program",
  short: "NUVP",
  text: "NUVP builds a volunteer network for students and staff who want to lead with service. Five SDG-aligned programs offer leadership experience, real partnerships, and lasting community impact.",
};

/** Featured COMEX story for the page lead. */
export const communityFeatured = {
  title: "Community immersion in the field",
  text: "Nationalians work side by side with partner communities — from needs assessments to service days — so extension stays grounded in real needs.",
  image: "/community/photo-07.jpg",
};

export const communityImpact = [
  { value: "366+", label: "Trees planted" },
  { value: "970+", label: "Blood bags donated" },
  { value: "1,000+", label: "Families assisted" },
  { value: "1,998+", label: "Patients served" },
  { value: "3,900+", label: "Kilos of waste collected" },
];

export const communityFeedback = [
  {
    quote:
      "Maraming salamat po sa inyong lahat, lubos po kaming nasiyahan dahil isa po ang aming lugar na napili niyong puntahan upang magbigay ng serbisyo (Bayanihan para sa Kalusugan) sa mga mamamayan.",
    attribution: "MoFA Member",
  },
  {
    quote:
      "Taos-puso po kaming nagpapasalamat sa NU ComEx para sa puhunan at tulong pangkabuhayan na inyong ipinagkaloob (TAGUYOD). Malaking tulong po ito sa aming pagsisimula at pag-unlad.",
    attribution: "Mr. Lapig, VCA",
  },
  {
    quote:
      "Malaking bagay ito (Ready2ACT Project) para sa bagong kaalaman sa paghanda para sa paparating na sakuna. Thank you po.",
    attribution: "DRCNAI Member",
  },
];

/** Remaining field posts not paired with a program. */
export const communityGallery = [
  "/community/photo-03.jpg",
  "/community/photo-08.jpg",
];
