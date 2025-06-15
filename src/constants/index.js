import PostalCode from "../assets/projects/PostalCode.png";
import ReactCalculaor from "../assets/projects/React-Calculator.png";
import TODO from "../assets/projects/TODO.jpg";
import Alarm from "../assets/projects/Alaram.png";
import YT from "../assets/projects/Youtube.png";
import GoogleSheet from "../assets/projects/GoogleSheet.png";
import Financial from "../assets/projects/PageTitle.png";
import CryptoTracker from "../assets/projects/CryptoTracker.png"

export const HERO_CONTENT = `I’m a passionate Frontend Developer with strong skills in React.js. I focus on creating smooth, responsive, and attractive user experiences. With experience in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and Redux, I enjoy turning ideas into interactive web applications that are easy for users to engage with.

After completing a full stack web development course, I’ve gained the ability to build modern, scalable web solutions and work on team projects. I’m always learning and looking for ways to improve, aiming to create clean, high-performance websites that make an impact.`;

export const ABOUT_TEXT_1 = `👋 Hello! I'm Pravin Patil from Jalgaon, Maharashtra. I’m currently pursuing MCA and have a strong passion for web development, with a particular focus on React.js. I specialize in creating efficient, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js.`;
export const ABOUT_TEXT_2 = `I work well in teams and believe that collaboration is the key to creating great products. I'm adaptable and quick to pick up new technologies, which helps me stay current in the fast-changing tech world. `;
export const ABOUT_TEXT_3 = `I love solving problems and continuously seek opportunities to learn and grow in web development. Being adaptable and eager to explore new technologies helps me stay up-to-date and deliver cutting-edge solutions.`;
export const ABOUT_TEXT_4 = `I’m excited to apply my skills and knowledge to build innovative web applications. Let’s connect and explore how we can collaborate to create something amazing!`;

export const EDUCATION = [
  {
    title: "Master of Computer Applications (MCA)",
    year: "2023 - Present",
    CGPA: "",
    company: "KCES's Institute Of Management & Research, Jalgaon.",
    description: [
      "Pursuing Master of Computer Applications with a focus on advanced computer science concepts.",
      "Deepening knowledge in algorithms, data structures, and software engineering principles.",
      "Engaging in practical projects to bridge the gap between theory and hands-on application, particularly in web development.",
    ],
  },

  {
    title: "Bachelor of Computer Applications (BCA)",
    year: "2020 - 2023",
    CGPA: "9.45",
    company: "KCES's Institute Of Management & Research, Jalgaon.",
    description: [
      "Graduated with a top-tier CGPA.",
      "Built a solid foundation in programming languages like C, C++ And Java",
      "Transitioned into web development, starting with core concepts in HTML, CSS, and JavaScript.",
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
