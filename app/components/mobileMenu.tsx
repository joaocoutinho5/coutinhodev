"use client";

import { X } from "lucide-react";
import { NAV_ITEMS } from "./navBar";
import NavLinks from "./navLinks";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
};

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-110 md:hidden cursor-pointer pointer-events-auto"
          />

          {/* Painel lateral */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-70 bg-card/95 backdrop-blur-xl z-120 border-l border-white/10 p-8 shadow-2xl md:hidden flex flex-col pointer-events-auto"
          >
            <div className="flex justify-end mb-8">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                className="p-2 text-foreground/60 hover:text-primary transition-colors cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <X size={32} />
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
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}