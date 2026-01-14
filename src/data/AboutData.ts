import type { skills } from "../types";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";
import { FaAngular, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot ,BiLogoGithub } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { BsDiagram2Fill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

export const skillsData: skills[] = [
  {
    field: "Frontend",
    content: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: FaAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiNextdotjs },
    ],
  },
  {
    field: "Backend",
    content: [
      { name: "Java", icon: FaJava },
      { name: "SpringBoot", icon: BiLogoSpringBoot },
      { name: "Rest APIs", icon: TbApi },
    ],
  },
  {
    field: "Database",
    content: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    field: "Outros",
    content: [
        { name: "GitHub", icon: BiLogoGithub },
        { name: "UML", icon: BsDiagram2Fill },
        { name: "Figma", icon: SiFigma },
        { name: "Agile Methodologies", icon: SlCalender },
    ],
  }
];
