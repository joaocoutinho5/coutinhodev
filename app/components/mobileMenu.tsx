"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
  { id: "contact", label: "Contato" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Botão Hambúrguer */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 md:hidden"
        aria-label="Abrir menu"
      >
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            open ? "translate-y-1.5 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${
            open ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Overlay com blur + fundo */}
      <div
        className={`
    fixed left-0 right-0 bottom-0 top-0 z-30
    transition-opacity duration-200 backdrop-blur-2xl
    bg-background/85 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      />

      {/* Conteúdo do menu */}
      <nav
        className={` overflow-hidden
    fixed inset-0 z-40
    flex flex-col items-center justify-center gap-10
    text-2xl transition-all duration-500
    ${
      open
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }
  `}
      >
        {MENU_ITEMS.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            onClick={() => {
              scrollToSection(link.id);
              closeMenu();
            }}
            className="font-mono text-foreground"
          >
            {link.label}
          </Link>
        ))}
        {/* Decorative elements */}
        <div
          className={`
    pointer-events-none absolute inset-0 transition-all duration-500
    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
        >
          <div className="absolute top-20 left-8 w-px h-32 bg-linear-to-b from-primary/50 to-transparent" />
          <div className="absolute bottom-20 right-8 w-px h-32 bg-linear-to-t from-primary/50 to-transparent" />
          <div
            className="absolute top-1/4 right-13 w-2 h-2 rounded-full bg-primary/30 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/3 left-14 w-3 h-3 rounded-full bg-primary/30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </nav>
    </>
  );
}
