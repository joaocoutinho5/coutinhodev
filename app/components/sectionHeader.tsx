"use client";

import { useEffect, useRef } from "react";

interface SectionHeaderProps {
  title: string;
  number?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  number,
  align = "left",
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const isCenter = align === "center";

  return (
    <header
      ref={headerRef}
      className={`
        flex flex-col
        ${isCenter ? "items-center text-center" : "items-start text-left"}
      `}
    >
      <div className="flex flex-col gap-4 overflow-visible">
        <h1 className="relative inline-block text-3xl md:text-5xl text-foreground font-bold">
          <span className="overflow-hidden inline-block">
            <span ref={titleRef} className="inline-block">
              {title}
            </span>
          </span>

          <span className="absolute -top-2 -right-6 text-xs md:text-sm font-mono text-primary">
            ({number})
          </span>
        </h1>
      </div>
    </header>
  );
}
