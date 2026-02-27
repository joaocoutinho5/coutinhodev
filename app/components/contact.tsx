"use client";

import { useInView } from "../hooks/useInView";
import { ContactCard } from "./ui/cards";
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
        ref={ref}
        className="container flex flex-col justify-center items-start text-center gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main"
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

      <div className="absolute -z-10 inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Corner brackets */}
          <div className="absolute top-2 left-2 md:top-8 md:left-8 w-16 h-16 border-l-2 border-t-2 border-primary/10 rounded-tl-lg" />
          <div className="absolute bottom-2 right-2 md:bottom-8 md:right-8 w-16 h-16 border-r-2 border-b-2 border-primary/10 rounded-br-lg" />
        </div>

        {/* Orbs */}
        <div className="absolute top-[18%] left-[20%] w-2 h-2 bg-primary/35 rounded-full animate-pulse" />

        <div
          className="absolute bottom-[18%] left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute bottom-[28%] right-[10%] w-2 h-2 bg-primary/35 rounded-full animate-pulse"
          style={{ animationDelay: "1.8s" }}
        />
        <div
          className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"
          style={{ animationDelay: "2.4s" }}
        />
      </div>
    </section>
  );
}
