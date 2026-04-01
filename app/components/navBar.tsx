"use client";

import { User, Code, Folder, Mail } from "lucide-react";
import NavLinks from "./navLinks";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "Sobre", icon: <User size={20} /> },
  { id: "skills", label: "Skills", icon: <Code size={20} /> },
  { id: "projects", label: "Projetos", icon: <Folder size={20} /> },
  { id: "contact", label: "Contato", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      { rootMargin: "-40% 0px -40% 0px" } 
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          fixed z-50 transition-all duration-300
          flex justify-center items-center
          backdrop-blur-lg border border-border/50 shadow-lg rounded-full
          w-[calc(100%-2.5rem)] left-5 px-4 py-4 bg-card/40
          ${scrolled ? "bottom-6" : "bottom-10"}
          md:w-fit md:left-1/2 md:-translate-x-1/2 md:px-2 md:py-2 md:bg-card/30
          ${scrolled ? "md:bottom-6 md:bg-card/45" : "md:bottom-10"}
        `}
      >
        <div className="flex items-center justify-between w-full font-mono md:gap-px">
          {NAV_ITEMS.map((item) => (
            <NavLinks
              key={item.id}
              id={item.id}
              label={item.label}
              icon={item.icon}
              active={activeSection === item.id}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}