"use client"

import { useEffect, useRef } from "react"

export function useInView() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}
