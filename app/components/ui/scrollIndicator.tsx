"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollIndicator() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    gsap.to(dotRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-8 rounded-full border-3 border-white/50 flex justify-center p-1">
        <div
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-white"
        />
      </div>
    </div>
  );
}