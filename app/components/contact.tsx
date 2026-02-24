"use client";

import { useInView } from "../hooks/useInView";
import { ContactCard } from "./ui/cards";
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
        className="container flex flex-col justify-center items-center text-center gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0 fade-down delay-main"
      >
        <SectionHeader
          subtitle="Entre em contato"
          title="Vamos conversar"
          description="Estou sempre aberto a novas oportunidades e projetos interessantes.
            Se você tem uma ideia em mente, vamos conversar!"
          align="center"
        />
        <section className="w-full min-h- md:min-h- flex flex-col items-center justify-center gap-10">
          <ContactCard />
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
