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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <nav
        className={`fixed hidden md:flex text-foreground/90 w-6 md:w-fit justify-center items-center backdrop-blur-lg border border-border/50 shadow-lg rounded-full right-6 md:left-1/2 md:-translate-x-1/2 z-50 p-2 transition-all duration-300
        ${scrolled ? "md:bottom-6 bg-card/45" : "md:bottom-10 bg-card/30"}`}
      >
        {/* LOGO */}

        {/* LINKS */}
        <div className="hidden font-mono md:flex text-foreground/90 items-center gap-px">
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
      <MobileMenu />
    </header>
  );
}
