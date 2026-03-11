"use client";

import { useInView } from "../hooks/useInView";
//import { ContactCard } from "./ui/cards";
import { BtnWpp } from "./ui/buttons";
import { SectionHeader } from "./sectionHeader";

export default function Contact() {
  const ref = useInView();

  return (
    <section
      id="contact"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div
        className="container flex flex-col justify-center items-start text-center gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0"
      >
        <SectionHeader title="Entre em contato" number="4" />
        <section className="w-full min-h- md:min-h- flex flex-col items-center justify-center gap-4 md:gap-6 mt-10">
          <p className="text-lg text-foreground/65 font-extralight">
            Quer trabalhar comigo?
          </p>
          <h2 className="text-6xl md:text-8xl text-foreground font-bold mb-10">
            Diga olá!
          </h2>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-primary/90 text-2xl">coutinhodev@outlook.com</p>
            <p className="text-foreground/65 mb-1">ou</p>
            <BtnWpp />
          </div>
        </section>
      </div>
    </section>
  );
}
