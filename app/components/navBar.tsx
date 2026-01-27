"use client";

import { MobileMenu } from "./mobileMenu";
import NavLinks from "./navLinks";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="w-full bg-background/50 backdrop-blur-lg flex justify-center py-7 md:py-8">
        <nav className="flex w-full justify-between px-6 xl:px-12">
          {/* LOGO */}
          <a
            href="#"
            className="flex flex-row items-end text-lg md:text-xl font-semibold hover:text-primary transition"
          >
            coutinho
            <span className="mb-1.75 w-0.75 h-0.75 shrink-0 rounded-full bg-primary" />
            dev
          </a>

          {/* LINKS */}
          <div className="hidden font-mono md:flex text-foreground items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <NavLinks
                  key={item.id}
                  href={`#${item.id}`}
                  label={item.label}
                  active={isActive}
                />
              );
            })}
          </div>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
}
