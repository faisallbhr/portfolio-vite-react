import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import {
  IArticle,
  IExperience,
  INavItem,
  IProject,
  ISocialMedia,
} from "./interface";

export const NAV_ITEMS: INavItem[] = [
  {
    section: "about",
  },
  {
    section: "experience",
  },
  {
    section: "projects",
  },
  {
    section: "articles",
  },
];

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    link: "https://www.linkedin.com/in/faisallbhr/",
    image: SiLinkedin,
    title: "LinkedIn",
  },
  {
    link: "https://github.com/faisallbhr",
    image: SiGithub,
    title: "GitHub",
  },
  {
    link: "https://www.instagram.com/faisallbhr/",
    image: SiInstagram,
    title: "Instagram",
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    position: "Web Developer",
    type: "Intern",
    company: "PT. Datanode Naralogi Siberkarya",
    link: "https://datanode.id/",
    date: "Feb, 2024 - Present",
    jobDesc: [
      "Implementation of design principles, including visual design, typography, color, and composition.",
      "Understand and apply responsive design principles to optimize user experience across different devices and screen sizes.",
      "Build and consume APIs to integrate various systems and services.",
      "Apply software testing techniques, including functional testing, integration testing, and debugging to find and fix bugs in code.",
      "Understand and implement software architecture principles, including design patterns, clean programming, and SOLID principles.",
    ],
    techStack: ["Figma", "HTML/CSS", "Next JS", "Laravel", "MySQL", "Docker"],
  },
  {
    position: "Fullstack Engineer",
    type: "Freelance",
    company: "Build and Service",
    link: "https://buildandservice.vercel.app/",
    date: "Dec, 2023 - Present",
    jobDesc: [
      "Responsible for meeting with clients to discuss project needs.",
      "Designing database and project structure.",
      "Deployment projects.",
      "Ensure that all programs that have been carried out run well and in accordance with the standards set.",
    ],
    techStack: [
      "HTML/CSS",
      "Next JS",
      "Express JS",
      "Python",
      "Flask",
      "Laravel",
      "MySQL",
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: "Gading Bakery",
    link: "https://gading-bakery.com/",
    position: "Backend Engineer",
    description:
      "Mobile application of goods management and cashier for bread sales at Gading Bakery, Gresik (East Java, Indonesia).",
    jobDesc: [
      "Design, develop, and maintain APIs, ensuring optimal performance application.",
      "Develop robust and scalable APIs for seamless communication between the front-end and back-end systems.",
      "Collaborate with front-end developers to integrate user-facing elements.",
      "Perform APIs deployment process to production environment.",
    ],
    techStack: ["Laravel", "MySQL"],
  },
  {
    name: "Hajar IF",
    link: "https://hajarif.hmifunej.id/",
    position: "Frontend Developer",
    description:
      "Learning reference website for Informatics students at the University of Jember.",
    jobDesc: [
      "Discussion with UI/UX team about the design that will be created.",
      "Discussion with backend team about the APIs that will be used.",
      "Slicing design from UI/UX team using Tailwind CSS.",
      "Implementation of fetching APIs that backend team created using Axios.",
    ],
    techStack: ["Tailwind CSS", "React JS"],
  },
];

export const ARTICLES: IArticle[] = [
  {
    title: "Consume APIs in React JS in Modern Way",
    link: "https://medium.com/@faisallbhr/consume-apis-in-react-js-in-modern-way-d273a7be478c",
  },
  {
    title: "React useState Best Practice: A Simple Form Management Solution",
    link: "https://medium.com/@faisallbhr/react-usestate-best-practice-a-simple-form-management-solution-db56e870ab1a",
  },
  {
    title: "Conditional Rendering with an Object-Based Approach in React JS",
    link: "https://medium.com/@faisallbhr/conditional-rendering-with-an-object-based-approach-in-react-728ab6a6762d",
  },
];
