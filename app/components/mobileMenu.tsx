"use client";

import { X } from "lucide-react";
import { NAV_ITEMS } from "./navBar";
import NavLinks from "./navLinks";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
};

export default function MobileMenu({
  isOpen,
  onClose,
  activeSection,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay (Fundo escuro) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-110 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Painel do Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-70 bg-card/95 backdrop-blur-xl z-120 border-l border-white/10 p-8 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-foreground/60">
            <X size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <div key={item.id} className="w-full flex">
              <NavLinks
                id={item.id}
                label={item.label}
                active={activeSection === item.id}
                icon={item.icon}
                closeMenu={onClose}
              />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
