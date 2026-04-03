"use client";

import { User, Code, Folder, Mail, Menu } from "lucide-react";
import NavLinks from "./navLinks";
import { useEffect, useState } from "react";
import MobileMenu from "./mobileMenu";

export const NAV_ITEMS = [
  { id: "about", label: "Sobre", icon: <User size={20} /> },
  { id: "skills", label: "Skills", icon: <Code size={20} /> },
  { id: "projects", label: "Projetos", icon: <Folder size={20} /> },
  { id: "contact", label: "Contato", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full fixed top-0 z-100 pointer-events-none">
      {/* MOBILE: Botão flutuante no topo */}
      <div className="md:hidden pointer-events-auto flex justify-end p-6">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-3 text-foreground"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MENU LATERAL MOBILE */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        activeSection={activeSection} 
      />

      {/* DESKTOP */}
      <nav className={`
          hidden md:flex pointer-events-auto fixed z-50 transition-all duration-300
          justify-center items-center backdrop-blur-lg border border-border/50 shadow-lg rounded-full
          left-1/2 -translate-x-1/2 px-2 py-2 bg-card/30
          ${scrolled ? "bottom-6 bg-card/45" : "bottom-10"}
        `}
      >
        <div className="flex items-center justify-between font-mono gap-px">
          {NAV_ITEMS.map((item) => (
            <NavLinks
              key={item.id}
              id={item.id}
              label={item.label}
              active={activeSection === item.id}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}