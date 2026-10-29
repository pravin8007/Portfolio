import PostalCode from "../assets/projects/PostalCode.png";
import ReactCalculaor from "../assets/projects/React-Calculator.png";
import TODO from "../assets/projects/TODO.jpg";
import Alarm from "../assets/projects/Alaram.png";
import YT from "../assets/projects/Youtube.png";
import GoogleSheet from "../assets/projects/GoogleSheet.png";
import Financial from "../assets/projects/PageTitle.png";
import CryptoTracker from "../assets/projects/CryptoTracker.png";
import Taskify from "../assets/projects/Taskify.png";
import InventoryManagement from "../assets/projects/Inventory.png";
import PayrollManagement from "../assets/projects/PayrollManagement.png";

import {
  FaBriefcase,
  FaGraduationCap,
  FaLayerGroup,
  FaPuzzlePiece,
  FaBolt,
  FaCode,
  FaServer,
  FaDatabase,
  FaVial,
} from "react-icons/fa6";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReactrouter,
  SiMui,
  SiAntdesign,
  SiFramer,
  SiRedux,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVite,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

export const ABOUT_TEXT_1 = `👋 Hello! I'm Pravin Patil from Jalgaon, Maharashtra, a Frontend Developer passionate about building responsive and modern web applications using React.js, TypeScript, Redux Toolkit, and Tailwind CSS.`;

export const ABOUT_TEXT_2 = `I Have completed MCA and have hands-on experience developing scalable Single Page Applications, reusable UI components, and REST API integrations with modern frontend technologies.`;

export const ABOUT_TEXT_3 = `I completed a 100+ day coding streak at AccioJob, successfully finished Full Stack Web Development training, and maintained a top 10% academic ranking during my BCA program.`;

export const ABOUT_TEXT_4 = `I enjoy solving problems, learning new technologies, collaborating with teams, and creating clean, high-performance user experiences for modern digital products.`;

export const EXPERIENCES = [
  {
    role: "Frontend Developer",
    company: "Quess Corp Ltd.",
    client: "Client: Vodafone Idea Ltd.",
    period: "Feb 2025 – Apr 2025",
    location: "Pune, Maharashtra · On-site",
    type: "Professional Experience",
    icon: FaBriefcase,
    accent: "cyan",
    description:
      "Developed internal web tools for operational workflows, focusing on reusable UI components, API integration, and responsive interfaces.",
    responsibilities: [
      "Developed internal web tools using React.js, TypeScript, and Tailwind CSS to streamline operational workflows.",
      "Built reusable, responsive UI components and integrated FastAPI services for real-time data handling.",
      "Collaborated with backend and QA teams in an Agile environment, using Git and GitLab to deliver production-ready features.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "FastAPI",
      "Git",
      "GitLab",
      "Agile",
    ],
  },
  {
    role: "Full Stack Web Developer (Trainee)",
    company: "AccioJob",
    client: "Full Stack Web Development Training",
    period: "May 2023 – Dec 2024",
    location: "Remote",
    type: "Training Experience",
    icon: FaGraduationCap,
    accent: "violet",
    description:
      "Completed practical full-stack web development training, building applications and strengthening frontend development skills.",
    responsibilities: [
      "Built and deployed web applications using React.js, Redux Toolkit, REST APIs, and responsive design.",
      "Practiced component optimization and efficient state management to improve application performance.",
      "Implemented authentication and API integrations, maintaining version control with Git and GitHub.",
    ],
    technologies: [
      "React.js",
      "Redux Toolkit",
      "JavaScript",
      "REST APIs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Authentication",
      "Git",
      "GitHub",
    ],
  },
];

export const EDUCATION = [
  {
    title: "Master of Computer Applications (MCA)",
    year: "2023 - 2025",
    CGPA: "7.06",
    company: "KCES's Institute Of Management & Research, Jalgaon.",
    description: [
      "Completed Master of Computer Applications (MCA) with emphasis on software development and practical computing skills.",
      "Strengthened understanding of algorithms, data structures, and software engineering methodologies.",
      "Applied theoretical concepts through hands-on projects, particularly in web development and software design.",
    ],
  },

  {
    title: "Bachelor of Computer Applications (BCA)",
    year: "2020 - 2023",
    CGPA: "9.45 ( Maintained a top 10% academic ranking)",
    company: "KCES's Institute Of Management & Research, Jalgaon.",
    description: [
      "Graduated with a top-tier CGPA.",
      "Built a solid foundation in programming languages like C, C++ And Java",
      "Transitioned into web development, starting with core concepts in HTML, CSS, and JavaScript.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Building Interfaces",
    description: "From reusable components to responsive layouts.",
    icon: FaLayerGroup,
    color: "#67e8f9",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "React Router", icon: SiReactrouter },
    ],
  },
  {
    title: "UI & Experience",
    description: "Polished interfaces with thoughtful interactions.",
    icon: FaPuzzlePiece,
    color: "#c4b5fd",
    skills: [
      { name: "Material UI", icon: SiMui },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Framer Motion", icon: SiFramer },
      { name: "React-Toastify", icon: FaBolt },
      { name: "Responsive Design", icon: FaLayerGroup },
      { name: "Component Design", icon: FaCode },
    ],
  },
  {
    title: "State & Data Flow",
    description: "Keeping application data predictable and connected.",
    icon: FaCode,
    color: "#86efac",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Hooks", icon: SiReact },
      { name: "REST APIs", icon: FaServer },
      { name: "API Integration", icon: FaBolt },
      { name: "Firebase Auth", icon: SiFirebase },
    ],
  },
  {
    title: "Backend & Storage",
    description: "Working with services, APIs, and persistent data.",
    icon: FaDatabase,
    color: "#fcd34d",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Firebase", icon: SiFirebase },
      { name: "Firestore", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Basics", icon: FaDatabase },
    ],
  },
  {
    title: "Quality & Debugging",
    description: "Finding issues and building confidence in code.",
    icon: FaVial,
    color: "#f9a8d4",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "React Testing Library", icon: SiTestinglibrary },
      { name: "Unit Testing", icon: FaVial },
      { name: "Component Testing", icon: FaCode },
      { name: "Debugging", icon: FaTools },
    ],
  },
  {
    title: "Workflow & Delivery",
    description: "Tools for collaboration, development, and deployment.",
    icon: FaTools,
    color: "#fdba74",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "Vite", icon: SiVite },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "Vercel", icon: SiVercel },
      { name: "Agile / Scrum", icon: FaPuzzlePiece },
      { name: "Performance Optimization", icon: FaBolt },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Crypto-Tracker",
    image: CryptoTracker,
    code: "https://github.com/pravin8007/crypto-tracker",
    live: "https://crypto-tracker-beryl-chi.vercel.app/",
    description:
      "A real-time cryptocurrency tracking app that allows users to monitor coin prices, analyze market trends, and manage a personalized watchlist. Includes price charts, comparison tools, and filtering by market cap.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Chart.js",
      "CoinGecko API",
    ],
  },
  {
    title: "Financial-Tracker",
    image: Financial,
    code: "https://github.com/pravin8007/Financial_Tracker",
    live: "https://financial-tracker-lake.vercel.app/",
    description:
      "A financial tracker app helps users manage their expenses, track spending, and set budgets. It often includes features for categorizing transactions, generating reports, and setting financial goals.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Firebase"],
  },
  {
    title: "Payroll Management System",
    image: PayrollManagement,
    code: "https://github.com/pravin8007/Payroll-Management-System",
    live: "https://payroll-management-system-navy.vercel.app/",
    description:
      "A payroll management system helps organizations manage employee payroll operations efficiently. It includes features for employee management, attendance tracking, salary calculation, payslip generation, and payroll record maintenance through an interactive dashboard with real-time updates.",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Inventory Management System",
    image: InventoryManagement,
    code: "https://github.com/pravin8007/Inventory-Management-System",
    live: "https://inventory-management-system-beta-liard.vercel.app/",
    description:
      "An inventory management system helps users track and manage product stock, monitor inventory levels, and organize product data efficiently. It includes features for adding and updating products, viewing stock insights, and maintaining real-time inventory updates through an interactive dashboard.",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Taskify",
    image: Taskify,
    code: "https://github.com/pravin8007/Taskify",
    live: "https://taskify-nine-topaz.vercel.app/",
    description:
      "Taskify is a feature-rich to-do application built with React and TypeScript that allows users to add, edit, delete, and mark tasks as complete. It demonstrates efficient state management, component reusability, and clean UI design.",
    technologies: ["HTML", "CSS", "TypeScript", "React"],
  },
  {
    title: "React Calculator",
    image: ReactCalculaor,
    code: "https://github.com/pravin8007/React-Calculator-F4",
    live: "https://react-calculator-f4-six.vercel.app/",
    description:
      "A React Calculator is a web-based app built with React that performs basic arithmetic operations, demonstrating React ability to create interactive UI components and manage state efficiently.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    title: "Postal Code Finder",
    image: PostalCode,
    code: "https://github.com/pravin8007/Postal-Code-App",
    live: "https://postal-code-app-rho.vercel.app/",
    description:
      "A postal code finder app helps users find postal codes for addresses, cities, or regions. It often includes features for reverse lookup, address validation, and location-based services.",
    technologies: ["HTML", "CSS", "Javascript", "React", "API"],
  },
  {
    title: "Youtube Clone App",
    image: YT,
    code: "https://github.com/pravin8007/Youtube-Clone",
    live: "https://youtube-clone-five-coral.vercel.app/",
    description:
      "A YouTube clone app replicates key YouTube features, enabling users to search for, view, and interact with videos. It integrates APIs to provide video search, playback, and detailed views, showcasing web development skills.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "TO-DO APP",
    image: TODO,
    code: "https://github.com/pravin8007/To-Do-List",
    live: "https://pravin8007.github.io/To-Do-List/",
    description:
      "A to-do list app helps users create, organize, and manage tasks, with features for adding, updating, and deleting tasks. It often includes options for task organization, search, and data persistence to enhance productivity.",
    technologies: ["HTML", "CSS", "Javascrit"],
  },
  {
    title: "Alarm App",
    image: Alarm,
    code: "https://github.com/pravin8007/Alarm-Timer-App",
    live: "https://pravin8007.github.io/Alarm-Timer-App/",
    description:
      "An alarm app is used for setting reminders, managing time, and providing notifications for tasks, events, or waking up, helping users stay organized and on schedule..",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Google Sheet Clone",
    image: GoogleSheet,
    code: "https://github.com/pravin8007/Google-Sheet-Clone",
    live: "https://pravin8007.github.io/Google-Sheet-Clone/",
    description:
      "A Google Sheets clone is a web app that mimics Google Sheets' core features, allowing users to create and edit spreadsheets with real-time collaboration and data manipulation.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];
