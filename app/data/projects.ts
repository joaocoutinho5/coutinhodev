import CoutinhoFlix from "@/app/assets/CoutinhoFlix.png";
import Tarefas from "@/app/assets/Tarefas.png";
import { StaticImageData } from "next/image";

export interface ProjectsProps {
  title: string;
  desc: string;
  image: StaticImageData;
  tecs: string[];
  demo: string;
  git?: string;
}

export const PROJECTS = [
  {
    title: "CoutinhoFlix",
    desc: "Um catálogo de filmes desenvolvido para praticar o consumo de APIs e conceitos modernos de desenvolvimento web.",
    image: CoutinhoFlix,
    tecs: ["Next.js", "React.js", "TypeScript", "Tailwind", "TMDB Api"],
    demo: "https://portifolio-filmes.vercel.app/",
    git: "https://github.com/joaocoutinho5/portifolio-filmes",
  },
  {
    title: "Gerenciador de tarefas",
    desc: "Sistema de organização de tarefas, com foco em funcionalidades simples e objetivas para praticar conceitos fundamentais do front-end moderno.",
    image: Tarefas,
    tecs: ["React.js", "JavaScript", "Tailwind"],
    demo: "https://gerenciador-tarefas-ruddy.vercel.app/",
    git: "https://github.com/joaocoutinho5/gerenciador-tarefas",
  },
];
