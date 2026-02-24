import Link from "next/link";
import { TooltipLabel } from "../tooltipLabel";

import { FileText } from "lucide-react";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

export function BtnCurriculo() {
  return (
    <div className="w-fit text-md md:text-lg text-primary bg-primary/20 border border-primary/40 hover:shadow-[0_0_22px_rgba(168,85,247,0.35)] hover:scale-101 px-8 py-4 rounded-full transition duration-350 ease-out flex flex-row justify-center items-center gap-2">
      <FileText size={20} />
      <button className="">Currículo</button>
    </div>
  );
}

export function BtnGitHub() {
  return (
    <div className="relative group inline-flex items-center justify-center">
      <Link
        href="https://github.com/joaocoutinho5"
        className="p-3 rounded-xl hover:text-primary bg-border/50 hover:bg-border/30 transition"
        target="_blank"
      >
        <LuGithub size={20} />
      </Link>
      <TooltipLabel label="GitHub" />
    </div>
  );
}

export function BtnLinkedin() {
  return (
    <div className="relative group inline-flex items-center justify-center">
      <Link
        href="https://www.linkedin.com/in/joaocoutinho5"
        className="p-3 rounded-xl hover:text-primary bg-border/50 hover:bg-border/30 transition"
        target="_blank"
      >
        <LuLinkedin size={20} />
      </Link>
      <TooltipLabel label="Linkedin" />
    </div>
  );
}

export function BtnInstagram() {
  return (
    <div className="relative group inline-flex items-center justify-center">
      <Link
        href="https://www.instagram.com/jaocoutinho5/"
        className="p-3 rounded-xl hover:text-primary bg-border/50 hover:bg-border/30 transition"
        target="_blank"
      >
        <LuInstagram size={20} />
      </Link>
      <TooltipLabel label="Instagram" />
    </div>
  );
}

export function BtnWpp() {
  return (
    <Link
      href="https://wa.me/5516993531000?text=Ol%C3%A1,%20Jo%C3%A3o!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
      className="group w-72 md:w-fit text-md md:text-lg text-primary bg-primary/20 border border-primary/40 hover:shadow-[0_0_22px_rgba(168,85,247,0.35)] hover:scale-101 px-10 py-5 rounded-full transition duration-350 ease-out flex flex-row justify-center items-center gap-2"
      target="_blank"
    >
      <FaWhatsapp className="text-lg md:text-2xl group-hover:rotate-20 transition" />
      Enviar mensagem
    </Link>
  );
}
