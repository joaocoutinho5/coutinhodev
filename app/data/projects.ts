import CoutinhoFlix from "@/app/assets/CoutinhoFlix.png";
import Tarefas from "@/app/assets/Tarefas.png";
import RotasML from "@/app/assets/RotasML.png";
import DBVeiculos from "@/app/assets/DBVeiculos.png";
import { StaticImageData } from "next/image";

export interface ProjectsProps {
  title: string;
  desc: string;
  image?: StaticImageData;
  index: number;
  tecs: string[];
  demo?: string;
  git?: string;
}

export const PROJECTS = [
  {
    title: "CoutinhoFlix",
    desc: "Catálogo de filmes desenvolvido para praticar o consumo de APIs e a aplicação de conceitos modernos de desenvolvimento web com Next.js.",
    image: CoutinhoFlix,
    tecs: ["Next.js", "React.js", "TypeScript", "Tailwind", "TMDB Api"],
    demo: "https://portifolio-filmes.vercel.app/",
    git: "https://github.com/joaocoutinho5/portifolio-filmes",
  },
  {
    title: "Gerenciador de tarefas",
    desc: "Sistema de organização de tarefas desenvolvido com foco em funcionalidades simples e objetivas, aplicando conceitos fundamentais do front-end moderno.",
    image: Tarefas,
    tecs: ["React.js", "JavaScript", "Tailwind"],
    demo: "https://gerenciador-tarefas-ruddy.vercel.app/",
    git: "https://github.com/joaocoutinho5/gerenciador-tarefas",
  },
  {
    title: "Calculadora de Rotas",
    desc: "Calculadora de rotas desenvolvida com foco em praticidade, permitindo calcular custos, consumo e lucro de forma simples e objetiva, aplicando conceitos de front-end moderno.",
    image: RotasML,
    tecs: ["React.js", "TypeScript", "Tailwind"],
    demo: "https://rotas-ml.vercel.app/",
    git: "https://github.com/joaocoutinho5/rotas-ml",
  },
  {
    title: "DB Veículos",
    desc: "Aplicação de gerenciamento de veículos criada como projeto de estudo, explorando conceitos essenciais de ASP.NET MVC, como CRUD, controle de acesso e integração com banco de dados relacional.",
    image: DBVeiculos,
    tecs: ["HTML", "CSS", "C#", "SQL Server"],
    git: "https://github.com/joaocoutinho5/db-veiculos",
  },
];
