import { IconType } from "react-icons";

export interface INavItem {
  section: string;
}

export interface IStickyState {
  about: boolean;
  experience: boolean;
  projects: boolean;
  articles: boolean;
}

export interface ISocialMedia {
  link: string;
  image: IconType;
  title: string;
}

export interface IExperience {
  position: string;
  type: string;
  company: string;
  link: string;
  date: string;
  jobDesc: string[];
  techStack: string[];
}

export interface IProject {
  name: string;
  link: string;
  position: string;
  description: string;
  jobDesc: string[];
  techStack: string[];
}

export interface IArticle {
  title: string;
  link: string;
}
