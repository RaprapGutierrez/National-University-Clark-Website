export type ProgramOutcome = string | { label: string; text: string };

export type Program = {
  slug: string;
  title: string;
  text?: string; // major or specialization shown under the title
  image?: string;
  about: string[];
  careers?: string[];
  mission?: string; // optional: only some programs show mission and vision
  vision?: string;
  objectives: string[];
  outcomes: ProgramOutcome[];
  // Format: "Label" or "Label · detail · detail"
  accreditation: string[];
  // When true, the about paragraphs render as separate blocks under mission and vision
  aboutAfterMission?: boolean;
};

// Fills in placeholders so every program page works right away.
function program(
  slug: string,
  title: string,
  extra: Partial<Program> = {},
): Program {
  return {
    slug,
    title,
    about: ["Add the official overview of this program here."],
    objectives: [
      "Add program educational objective 1",
      "Add program educational objective 2",
      "Add program educational objective 3",
    ],
    outcomes: [
      "Add program outcome 1",
      "Add program outcome 2",
      "Add program outcome 3",
    ],
    accreditation: ["Add accreditation or recognition details here."],
    ...extra,
  };
}

const SABM_MISSION =
  "We are a business school providing quality management and accountancy education to students to equip them with the skills, knowledge, and work ethics that they need to become productive and competent members of the national and global workforce. Our faculty will be academically prepared, committed and innovative. We will have close linkages with industry and practitioners, to be able to apply the latest in educational methods and technology.";

const SABM_VISION =
  "To be one of the top ten (10) business schools in the country, producing graduates that will excel in their chosen careers in professional practice, industry and government, and who will be responsible citizens and members of the community.";

const ACCOUNTING_OBJECTIVES = [
  "Make a positive change contribution over their lifetimes to the profession and society which they work.",
  "Develop and maintain an attitude of learning to learn and competence.",
  "Identify problems, know where to find knowledge and apply it in an ethical manner to achieve appropriate solutions.",
  "Support various stakeholders in taking strategic and operating decisions through the presentation and analysis of financial data and information arising from business transactions.",
  "Provide the highest degree of professionalism on the rendering of assurance and related services keeping abreast with the current accounting/auditing issues and regulations along with adherence to ethical standards.",
];

// Key = school slug from lib/site.ts
export const programsBySchool: Record<string, Program[]> = {
  "senior-high-school": [
    program("abm", "ABM", {
      text: "Accountancy, Business, and Management",
      image: "/program-abm.png",
    }),
    program("stem", "STEM", {
      text: "Science, Technology, Engineering, and Mathematics",
      image: "/program-stem.png",
    }),
    program("humss", "HUMSS", {
      text: "Humanities and Social Sciences",
      image: "/program-humss.png",
    }),
  ],

  sabm: [
    program("bs-management-accounting", "BS Management Accounting", {
      image: "/program-management-accounting.png",
      about: [
        "Provides general accounting education to students wanting to pursue a professional career in Management Accounting. Complies with the latest competency framework for professional accountants issued by the International Federation of Accountants (IFAC) through their International Education Standards.",
        "The graduates of this program are qualified to take assessments leading to certifications in Management Accounting given by global professional Management Accounting organizations. By working across functions, Management Accountants understand the links between operational activity, financial resource generation and consumption, and value generation and preservation.",
      ],
      objectives: ACCOUNTING_OBJECTIVES,
      outcomes: [
        "Resolve business issues and problems, with a global and strategic perspective using their knowledge and technical proficiency in the areas of financial accounting and reporting, cost accounting and management, management accounting and control, taxation, and accounting information systems.",
        "Conduct Accountancy/Management Accounting/Accounting Information System research through independent studies of relevant literature and appropriate use of accounting theory and methodologies.",
        "Employ technology as a business tool in capturing financial and non-financial information, generating reports, and making decisions.",
        "Support management in taking strategic decisions which include the definition of organizational strategy via collaborating with the organization’s managers in preparing alternative scenarios and evaluating different possible courses of actions.",
      ],
      accreditation: ["PACUCOA Associate"],
    }),
    program("bs-accountancy", "BS Accountancy", {
      image: "/program-accountancy.png",
      about: [
        "Provides general accounting education to students wanting to pursue a professional career in Accountancy in general and in Public Accounting in particular.",
        "Complies with the latest competency framework for professional accountants issued by the International Federation of Accountants (IFAC) through their International Education Standards. The graduates of this program are qualified to take assessments leading to certifications in Accountancy given by the PRC-BOA, as mandated by the Accountancy Law of the Philippines (RA 9298), and other global professional Accountancy organizations.",
      ],
      objectives: ACCOUNTING_OBJECTIVES,
      outcomes: [
        "Resolve business issues and problems, with a global and strategic perspective using their knowledge and technical proficiency in the areas of financial accounting and reporting, cost accounting and management, management accounting and control, taxation, and accounting information systems.",
        "Conduct Accountancy/Management Accounting/Accounting Information System research through independent studies of relevant literature and appropriate use of accounting theory and methodologies.",
        "Employ technology as a business tool in capturing financial and non-financial information, generating reports, and making decisions.",
        "Apply knowledge and skills that will enable them to successfully respond to various types of assessments including professional licensure and certifications.",
        "Confidently maintain a commitment to good corporate citizenship, social responsibility, and ethical practice in performing functions as an accountant.",
      ],
      accreditation: ["PACUCOA Level III Accredited"],
    }),
    program("bs-business-administration", "BS Business Administration", {
      text: "Major in Marketing Management",
      image: "/program-business-admin.png",
      about: [
        "The BSBA Marketing Management program provides the students with information, technical skills and competencies required in the field of marketing. It prepares the graduate for careers in the field of marketing, advertising, market research and communications.",
      ],
      careers: [
        "Management Trainee in Marketing",
        "Marketing Assistant",
        "Account Executive",
        "Merchandising Assistant",
        "PR/Advertising Assistant",
        "Customer Service Agent/Representative",
        "Junior Sales Trainer",
        "Receptionist",
        "Entrepreneur",
        "Product/Brand/Assistant",
        "Order/Billing Assistant",
      ],
      mission: SABM_MISSION,
      vision: SABM_VISION,
      objectives: [
        "Assume supervisory and/or managerial Responsibilities within their organization",
        "Pursue graduate studies in business and Management",
        "Manage a business",
      ],
      outcomes: [
        "Articulate and discuss the latest developments in the specific field of practice.",
        "Effectively communicate orally and in writing using both English and Filipino",
        "Work effectively and independently in multi-disciplinary and multi-cultural teams.",
        "Act in recognition of professional, social, and ethical responsibility.",
        'Preserve and promote "Filipino historical and cultural heritage".',
        "Perform the basic functions of management such as planning, organizing, staffing, directing and controlling.",
        "Apply the basic concepts that underlie each of the functional areas of business (marketing, finance, human resources management, production and operations management, information technology, and strategic management) and employ these concepts in various business situations.",
        "Select the proper decision-making tools to critically, analytically and creatively solve problems and drive results.",
        "Express oneself clearly and communicate effectively with stakeholders both in oral and written forms.",
        "Apply information and communication technology (ICT) skills as required by the business environment.",
        "Work effectively with other stakeholders and manage conflict in the workplace.",
        "Plan and implement business related activities.",
        "Demonstrate corporate citizenship and social responsibility",
        "Exercise high personal moral and ethical standards",
        "Analyze the business environment for strategic direction",
        "Prepare operational plans",
        "Innovate business ideas based on emerging industry.",
        "For professional institutions: demonstrate a service orientation in one's profession",
        "For colleges: to participate in various types of employment, development activities, and public discourses particularly in response to the needs of the communities one serves",
        "For universities: generate new knowledge using research and development projects",
        "Prepare business correspondence and presentation skills in product handling (4Ps)",
        "Interpret and analyze marketing data including SWOT analysis.",
        "Identify consumer needs and market segmentation.",
        "Coordinate promotional campaigns and establish good rapport with clients, suppliers, and sponsors.",
        "Design and develop marketing strategies and sound marketing plan (SMART)",
        "Formulate marketing/advertising campaign.",
        "Enhance presentation skills through competition within the college and within industry linkages.",
        "Formulate comprehensive and feasible business plan.",
      ],
      accreditation: ["PACUCOA Level III RA"],
    }),
    program("bs-tourism-management", "BS Tourism Management", {
      image: "/program-tourism.png",
      about: [
        "The Bachelor of Science in Tourism Management (BSTM) prepares students for professional roles in travel and tour operations, airlines and airports, events and MICE, destination and tourism product development, cruise and leisure services, and hospitality-related entrepreneurship. Students progress from general education and foundational tourism knowledge to specialized professional coursework, supervised industry practice, research, and graduation.",
      ],
      objectives: [
        "Implement plans, programs, and policies related to the tourism and hospitality industry in a supervisory or managerial capacity through adherence to pertinent laws, active community engagement, and research projects.",
        "Analyze and evaluate reports, trends, and risks associated with Tourism industry standards and practices.",
        "Develop plans, programs, and strategies for service-oriented organizations and communities to ensure the sustainable development of tourism through effective leadership, an entrepreneurial spirit, and continuous self-development.",
        "Generate innovative ideas in the design of local tourism products and services, utilizing the latest information technology applications, tools, and techniques for the development of the Tourism industry.",
        "Demonstrate effective oral and written communication and critical thinking skills in forging relationships with various stakeholders in the industry.",
      ],
      outcomes: [
        "Demonstrate leadership, administrative and managerial skills in a service-oriented business.",
        "Demonstrate knowledge of tourism and hospitality-related principles, standards, risks, trends, and laws by recognizing industry-related problems in the workplace and offering appropriate solutions.",
        "Develop an entrepreneurial mindset anchored on ethical and moral principles and practices.",
        "Prepare and analyze tourism and hospitality industry-specific transactions, reports, and plans using the latest information technology applications, productivity tools, techniques, and research methodologies.",
        "Demonstrate leadership, administrative, and managerial skills in a service-oriented business.",
      ],
      accreditation: ["PACUCOA Candidate"],
    }),
  ],

  seas: [
    program("ba-political-science", "AB Political Science", {
      image: "/program-pol-sci.png",
      about: [
        "The AB Political Science program studies how power, government, and public policy shape society. Students learn political theory, comparative politics, public administration, and international relations, while building skills in research, writing, and public speaking.",
        "The program prepares graduates for roles in government service, public policy, advocacy, and community leadership, and for further study in related fields.",
      ],
      objectives: [
        "Practice social, civic responsibility and human rights through competent leadership.",
        "Work in harmonious partnership with everyone without exhibiting any forms of discrimination.",
        "Demonstrate professional ethics and civic consciousness in solving relevant community problems.",
        "Propose practical problems that would address economic issues in macro and micro level.",
        "Present rules or policies that would fit the need of the political science realm in accordance to the changing demands of the people.",
        "Critically evaluate ideas and information to produce and implement solutions for political science-related issues.",
        "Utilize effective communication to collaborate with multi-disciplinary and diverse team.",
        "Demonstrate integrity, compassion, innovation, resilience, and patriotism in personal and professional life.",
        "Collaborate and participate with different public and private agencies to form relationship that would contribute in enhancing skills.",
        "Apply critical-thinking and analysis, practice self-worth and maintain confidence in personal and professional life.",
        "Utilize multi-perspective theories, approaches and methods in the fields of political science.",
        "Exhibit and promotes respectful, reliable, factual and effective communication with the available ICT tools.",
      ],
      outcomes: [
        "Establish a responsible, accountable and competent character in different setting of profession.",
        "Perform task and responsibilities in diverse community while exhibiting accepted manner and behavior.",
        "Participate in nation-building and complying the duties of citizenship.",
        "Demonstrate resourcefulness and creativity without compromising the effectivity of proposed plans or policies.",
        "Write basic proposal, rules or policies according to hierarchy, processes and guidelines.",
        "Analyze materials, evidences and data to participate, contribute and direct trends and policies.",
        "Master public speaking and other tools to effectively convey significant message to intended audience.",
        "Develop passion towards professional ethics, ideals and practices in line with NU values.",
        "Cooperate with other related disciplines in pursuit to improve and develop specialization in wider society.",
        "Demonstrate with confidence one’s skills and character in various place and levels.",
        "Employ mastery in local and global contexts while minding cultural sensitivity.",
        "Utilize various platforms of new media and technology in producing, promoting and leading major concepts in the discipline, its sub-field, theories, and methods.",
      ],
      accreditation: ["CHED Government Recognition Certified"],
    }),
    program("bs-communication", "AB Communication", {
      image: "/program-ab-com.png",
      about: [
        "The AB Communication program develops students who can research, write, design, and deliver clear messages across print, broadcast, and digital media. Students study communication theories and practice, media content production, and communication management.",
        "The program prepares graduates for careers in media, public relations, corporate communication, and digital content, grounded in ethical and professional standards.",
      ],
      objectives: [
        "Demonstrate Professional Excellence",
        "Exhibit Effective Leadership and Innovation",
        "Uphold Ethical and Social Responsibility",
        "Engage in Lifelong Learning and Research",
        "Contribute to Community and Nation-Building",
      ],
      outcomes: [
        "Demonstrate understanding of communication theories and models, principles and practices.",
        "Define, assess, and organize information and knowledge, produce, share and utilize information and knowledge across settings and audiences.",
        "Exhibit communication management and leadership skills.",
        "Adhere to ethical and professional standards which includes rights and responsibilities in the practice of communication and media.",
        "Pinpoint and examine pressing issues that confront the media and communication industry.",
        "Apply communication models and practices in proposing and implementing innovative and relevant solutions to identified problems.",
        "Evaluate different communication and media content across different formats (print, broadcast and digital formats)",
        "Produce and develop communication and media content, research, plans, evaluations and implementations.",
      ],
      accreditation: ["PACUCOA Candidate"],
    }),
    program("bs-psychology", "BS Psychology", {
      image: "/program-psychology.png",
      about: [
        "The BS Psychology program introduces students to the scientific study of behavior and mental processes. Students learn the foundations of psychology, research methods, and human development, and how these apply to individuals, families, and communities.",
        "The program prepares graduates for helping professions and for further study, with an emphasis on care, ethics, and service to society.",
      ],
      objectives: [], // no objectives provided, section is hidden
      outcomes: [
        "Productive helping professionals that promote development to the community.",
        "Effective mentors, trainers and molders of academic learning with care to society.",
        "Demonstrate effective human relations to empower self, families, and society in the field of profession or specialization.",
        "Empowered individuals in society building through innovation, academic endeavors, and research involvement.",
        "Engaged in successful professional practices and leadership in their workplace and society.",
      ],
      accreditation: ["PACUCOA Level II RA"],
    }),
  ],

  satc: [
    program("bs-architecture", "BS Architecture", {
      image: "/program-architecture.png",
      about: [
        "The BS Architecture program trains students in architectural design, building technology, and the built environment. Students develop design skills, technical knowledge, and an understanding of the laws, codes, and standards that guide the practice.",
        "The program prepares graduates for professional practice, construction management, and further study, with attention to sustainability and Filipino context.",
      ],
      objectives: [
        "Identify global trends and development in architecture and planning.",
        "Participate as a team player in a multi-disciplinary and multi-nation milieu.",
        "Interpret relevant laws, codes, charters and standards of architecture and built environment.",
        "Demonstrate knowledge in business relevant to architectural practice that will contribute to the nation building.",
        "Apply consciousness towards professional, corporate, and ethical responsibility.",
      ],
      outcomes: [
        "Apply concepts and principles from allied professionals in coming up with architectural solutions.",
        "Ensure that all contract documents adhere to applicable laws, codes, and regulations.",
        "Interpret and apply relevant laws, codes, charters and standards of architecture and the built environment.",
        "Conduct research to address architectural problems.",
        "Utilize various information and communication technology media for architectural solutions, presentation, and techniques in design, estimating, construction management, building technology and specialization.",
        "Acquire knowledge in business relevant to architectural practice that will contribute to nation-building.",
        "Practice competency in construction management and building administration in public and private entities.",
      ],
      accreditation: ["PACUCOA Level III RA"],
    }),
    program("bs-information-technology", "BS Information Technology", {
      text: "Specialization in Mobile and Web Applications",
      image: "/program-bsit.png",
      about: [
        "The Mobile and Web Applications (MWA) specialization trains students to use mobile and web computing technologies utilizing database platforms and relevant technologies to develop solutions to real-world problems. The use of networking technologies, cloud services, transaction security, and other transaction-based technologies will be applied.",
      ],
      careers: [
        "Mobile Application Developer",
        "Web Developer",
        "Front-End Developer",
        "Back-End Developer",
        "Full-Stack Developer",
        "Software Developer",
        "UI/UX Designer",
        "Database Developer",
        "Software QA Tester",
        "Application Support Analyst",
        "Systems Analyst",
        "IT Business Analyst",
        "Cloud Application Developer",
      ],
      mission:
        "Pursuant to the University's Mission of providing academic excellence, the College of Computing and Information Technologies provides a high level of education in compliance with international and local standards and prepares highly qualified graduates who can contribute positively towards their communities.",
      vision:
        "The College of Computing and Information Technologies envisions to be recognized as a national and regional center of excellence for learning, research and community development in the fields of Computer Science and Information Technology.",
      objectives: [
        "Our graduates have professional careers in industry or academe or are engaged in advanced studies.",
        "Our graduates continue to seek knowledge to thrive in an increasingly globalized society.",
        "Our graduates are successful team members or team leaders.",
        "Our graduates conduct themselves with integrity and incorporate proper ethical considerations in development and administration of computing-based systems that contribute to nation building.",
      ],
      outcomes: [
        "Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.",
        "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.",
        "Communicate effectively in a variety of professional contexts.",
        "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.",
        "Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline.",
        "Identify and analyze user needs and take them into account in the selection, creation, integration, evaluation, and administration of computing-based systems.",
      ],
      accreditation: ["PACUCOA Level IV Accredited · Local"],
    }),
    program("bs-computer-science", "BS Computer Science", {
      text: "Specialization in Artificial Intelligence",
      aboutAfterMission: true,
      about: [
        "The Bachelor of Science in Computer Science with Specialization in Artificial Intelligence (BSCS-AI) is a four-year degree program designed to equip students with a strong foundation in computer science principles and advanced competencies in artificial intelligence technologies. The program develops learners' knowledge and skills in software development, algorithms, data structures, computer systems, and emerging AI-driven solutions that address real-world challenges across industries.",
        "The specialization in Artificial Intelligence focuses on the design, development, and deployment of intelligent systems capable of learning, reasoning, decision-making, and problem-solving. Students gain hands-on experience in machine learning, deep learning, computer vision, natural language processing, data analytics, robotics, intelligent agents, and AI ethics. Through project-based learning, research, and industry collaborations, students develop innovative AI applications that improve efficiency, productivity, and user experiences in various domains such as healthcare, business, education, finance, and smart technologies.",
      ],
      mission:
        "Pursuant to the University's Mission of providing academic excellence, the College of Computing and Information Technologies provides a high level of education in compliance with international and local standards and prepares highly qualified graduates who can contribute positively towards their communities.",
      vision:
        "The College of Computing and Information Technologies envisions to be recognized as a national and regional center of excellence for learning, research and community development in the fields of Computer Science and Information Technology.",
      objectives: [
        "Our graduates pursue successful careers in the computing profession, academe, research, entrepreneurship, or advanced studies.",
        "Our graduates continuously enhance their knowledge and competencies to adapt to emerging technologies and thrive in a global environment.",
        "Our graduates demonstrate effective leadership, communication, and teamwork in multidisciplinary and professional settings.",
        "Our graduates uphold integrity, professionalism, and ethical responsibility in developing innovative computing solutions that contribute to societal and national development.",
      ],
      outcomes: [
        {
          label: "Problem analysis",
          text: "Analyze complex computing problems and apply principles of computing, mathematics, and other relevant disciplines to identify appropriate solutions.",
        },
        {
          label: "Solution design",
          text: "Design, implement, and evaluate computing-based solutions that meet specified computing requirements using computer science principles and software development methodologies.",
        },
        {
          label: "Theory & algorithms",
          text: "Apply computer science theory, algorithmic foundations, and software design principles in the modeling and development of computing systems.",
        },
        {
          label: "Research practice",
          text: "Conduct research and apply appropriate methods, tools, and techniques to investigate and solve computing problems.",
        },
        {
          label: "Communication",
          text: "Communicate effectively with diverse audiences in a variety of professional and technical contexts.",
        },
        {
          label: "Ethics & judgment",
          text: "Recognize professional responsibilities and make informed judgments in computing practice based on legal, ethical, and societal principles.",
        },
        {
          label: "Team leadership",
          text: "Function effectively as an individual and as a member or leader of multidisciplinary teams.",
        },
        {
          label: "Tools & technology",
          text: "Use current computing techniques, skills, tools, and emerging technologies necessary for professional computing practice.",
        },
        {
          label: "Societal impact",
          text: "Analyze the local and global impacts of computing solutions on individuals, organizations, and society.",
        },
        {
          label: "Lifelong learning",
          text: "Recognize the need for and engage in lifelong learning and continuous professional development.",
        },
      ],
    }),
  ],

  engineering: [
    program("bs-civil-engineering", "BS Civil Engineering", {
      image: "/program-civil-eng.png",
      about: [
        "The BS Civil Engineering program prepares students to plan, design, and build the infrastructure society depends on, such as roads, bridges, buildings, and water systems. Students build a foundation in mathematics, natural science, and engineering, then specialize in a chosen field of practice.",
        "The program prepares graduates for professional practice, project management, and further study, guided by ethics and a commitment to nation-building.",
      ],
      objectives: [
        "Demonstrate knowledge and skills in civil engineering to solve complex problems using various available technology tools.",
        "Exhibit ethical commitment as a civil engineer following the fundamental principles and canons in the community contributing to nation-building.",
        "Consistently involved in life-long learning and skills development in their civil engineering profession aligned with their chosen track of practice.",
      ],
      outcomes: [
        "Apply knowledge of mathematics, natural science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
        "Design and conduct experiments as well as analyze and interpret data.",
        "Design system, component, or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards.",
        "Function on multidisciplinary teams.",
        "Identify, formulate, and solve complex engineering problems.",
        "Understand professional and ethical responsibility.",
        "Communicate effectively (written).",
        "Communicate effectively (oral).",
        "Have a broad education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context.",
        "Recognize the need for, and an ability to engage in life-long learning.",
        "Have knowledge of contemporary issues.",
        "Create, select, and apply appropriate techniques, resources, skills, and modern engineering and IT tools, including prediction and modelling, to complex engineering problems, with an understanding of the limitations.",
        "Have knowledge and understanding of engineering and management principles as a member and leader in a team, to manage projects and in multidisciplinary environments.",
        "Understand and apply one specialized field in engineering.",
      ],
      accreditation: [
        "PACUCOA Level III First Reaccredited · March 2024 · Local",
      ],
    }),
    program("bs-computer-engineering", "BS Computer Engineering", {
      image: "/program-com-eng.png",
      about: [
        "The BS Computer Engineering program combines electronics, computer hardware, and software to design and build computer-based systems. Students learn engineering fundamentals, programming, digital systems, and embedded and networked technologies.",
        "The program prepares graduates for careers in systems design, computing, and technology development, guided by ethics and a commitment to lifelong learning.",
      ],
      objectives: [
        "Demonstrate knowledge and skills in computer engineering to solve complex problems using various technology tools.",
        "Exhibit ethical commitment as a computer engineer in the community contributing to nation-building.",
        "Consistently involve in life-long learning and skills development in their computer engineering profession.",
      ],
      outcomes: [
        "Apply knowledge of mathematics, natural science, engineering fundamentals, and specialization to the solution of complex Computer Engineering problems.",
        "Design and conduct experiments or research as well as analyze and interpret data to provide solutions to complex Computer Engineering problems.",
        "Design computer systems, components, or processes to meet desired solutions of complex Computer Engineering problems within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability, and sustainability, in accordance with standards.",
        "Function on multidisciplinary teams.",
        "Identify, formulate, and solve complex Computer Engineering problems.",
        "Understand professional and ethical responsibility of Computer Engineering practice.",
        "Communicate effectively on complex Computer Engineering activities with the engineering community and society (written).",
        "Communicate effectively in complex Computer Engineering activities with the engineering community and society (oral).",
        "Have a broad education necessary to understand the impact of complex Computer Engineering solutions in a global, economic, environmental, and societal context.",
        "Recognize the need for, and an ability to engage in life-long learning in the broadest context of Computer Engineering and technological change.",
        "Have knowledge of contemporary issues to assess societal, environmental, health, safety, legal and cultural issues and the consequent responsibilities relevant to Computer Engineering professional practice and solutions to complex engineering problems.",
        "Create, select, and apply appropriate techniques, resources, skills, and modern Computer Engineering and IT tools, including prediction and modelling, to complex Computer Engineering problems, with an understanding of the limitation.",
        "Have knowledge and understanding of Computer Engineering and management principles as a member and leader in a team, to manage projects and in multidisciplinary environments.",
        "Understand and apply one specialized field in Computer Engineering.",
      ],
      accreditation: [
        "FAAP Level III Reaccredited · July 2020 · Local",
        "PACUCOA Level IV Accredited · Local",
      ],
    }),
  ],

  // slug "hospitality" is School of Dentistry and Allied Health
  hospitality: [
    program("doctor-of-dental-medicine", "Doctor of Dental Medicine", {
      image: "/program-dentistry.png",
    }),
    program("bs-medical-technology", "BS Medical Technology", {
      image: "/program-med-tech.png",
      about: [
        "The National University College of Allied Health (CAH) prepares healthcare professionals on public health promotion and disease prevention, management of healthcare systems, and evidence-based practice. The College embraces diversity and is committed to creating an atmosphere of inclusion and equity among its students and academic staff.",
      ],
      objectives: [
        "Develop the knowledge, skills, professional attitude, and values in the performance of clinical laboratory procedures needed to help the physician in the proper diagnosis, treatment, prognosis, and prevention of diseases.",
        "Acquire critical thinking skills in Medical Technology/Medical Laboratory Science.",
        "Engage in research and community-related activities.",
        "Participate in activities related to promoting the profession and actively engage in life-long learning undertakings.",
        "Develop collaborative and leadership qualities.",
      ],
      outcomes: [
        "Demonstrate technical competence in the performance of clinical laboratory tests in aid of diagnosis, treatment, and management of diseases vis-à-vis biosafety and waste management.",
        "Demonstrate analytical and critical thinking skills in the workplace.",
        "Engage in the collection, analysis, and projection of health information for improving the health care management system.",
        "Demonstrate inter-personal skills, leadership qualities, and ethical practice of the profession.",
        "Apply research skills in relevant areas of Medical Technology/Medical Laboratory Science practice.",
        "Participate in community-oriented activities.",
        "Engage in life-long learning activities.",
        "Demonstrate effective teaching and communication skills.",
      ],
      accreditation: ["PACUCOA Candidate"],
    }),
  ],
};
