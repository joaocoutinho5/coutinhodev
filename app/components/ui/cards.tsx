"use client";

import Image from "next/image";
import Link from "next/link";
import Foto from "@/app/assets/joao.jpeg";
import { BtnWpp } from "./buttons";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { ProjectsProps } from "@/app/data/projects";
import { SkillItemProps } from "@/app/data/skills";

export function ProfileCard() {
  return (
    <div className="relative w-full md:max-w-105 bg-linear-to-br from-[#0f0f12] to-[#08080a] border border-border/50 rounded-xl p-8 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
      <div className="flex flex-col gap-6"> 
        <div className="flex items-center gap-5">
          <div className="relative">
            <Image
              alt="Foto"
              src={Foto}
              width={90}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              João Pedro Coutinho
            </h3>
            <p className="text-md text-foreground/60">
              Desenvolvedor Fullstack
            </p>
          </div>
        </div>
        <span className="w-full h-px bg-border" />
        <p className="text-sm text-foreground/60 leading-relaxed">
          Desenvolvedor focado em criar aplicações web modernas, com atenção
          à experiência do usuário, performance e boas práticas de código.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary">
            Aprendizado contínuo
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary">
            Código limpo
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary">
            Atenção a detalhes
          </span>
        </div>
      </div>
    </div>
  );
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function SkillItem({ name, icon: Icon }: SkillItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col justify-center items-center w-full gap-2 py-6 rounded-xl
                bg-linear-to-br from-[#0f0f12] to-[#08080a] border border-border/50
                text-foreground/65 hover:text-foreground/90
                hover:border-primary/40"
    >
      <Icon className="text-lg" />
      <span className="text-sm font-medium text-nowrap">{name}</span>
    </motion.div>
  );
}

export function ContactCard() {
  return (
    <div className="w-full md:max-w-200 flex flex-col justify-center items-center bg-linear-to-br from-[#0f0f12] to-[#08080a] border border-border/50 rounded-xl gap-6 px-6 md:px-12 py-12">
      <section className="text-start flex flex-col md:flex-row w-full max-w-71 md:max-w-full justify-between gap-6 md:gap-2 ">
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <div className="p-3 rounded-xl text-primary bg-primary/10">
            <Mail />
          </div>
          <div className="text-sm md:text-md">
            <h1 className="text-foreground/50 font-light">Email</h1>
            <p className="text-foreground/90">coutinhodev@outlook.com</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-4">
          <div className="p-3 rounded-xl text-primary bg-primary/10">
            <MapPin />
          </div>
          <div className="text-sm md:text-md">
            <h1 className="text-foreground/50 font-light">Localização</h1>
            <p className="text-foreground/90">
              Ribeirão Preto, São Paulo, Brasil
            </p>
          </div>
        </div>
      </section>
      <span className="w-full h-px bg-border my-3" />
      <BtnWpp />
    </div>
  );
}

export function ProjectCard({
  title,
  desc,
  tecs,
  demo,
  git,
  image,
  index,
}: ProjectsProps) {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-border/50
        bg-linear-to-br from-[#0f0f12] to-[#08080a]
        transition-all
        duration-350
        ease-out
        hover:border-primary/40
        hover:scale-101
        hover:shadow-[0_0_22px_rgba(168,85,247,0.35)]
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Preview do projeto ${title}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Overlay gradient */}

          {/* Número do projeto */}
          {!image && (
            <span className="font-mono text-6xl text-primary/20">
              {String(index).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-foreground/90">{title}</h3>
          <p className="text-sm font-light text-foreground/50 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Techs */}
        <ul className="flex flex-wrap gap-2">
          {tecs.map((tec) => (
            <li
              key={tec}
              className="rounded-full bg-primary/10 px-3 py-1.5 text-xs text-primary"
            >
              {tec}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-5 pt-2">
          {git && (
            <Link
              href={git}
              target="_blank"
              className="flex flex-row justify-center items-center gap-2 text-sm text-foreground/50 hover:text-primary transition"
            >
              {" "}
              <LuGithub size={17} />
              Código
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              className="flex flex-row justify-center items-center gap-2 text-sm text-foreground/50 hover:text-primary transition"
            >
              <LuExternalLink size={17} />
              Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
