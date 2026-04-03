"use client";

import Link from "next/link";
import { useInView } from "../hooks/useInView";
import { Mail, MapPin } from "lucide-react";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import Grainient from "./ui/heroBg";

export default function Hero() {
  const subtitleRef = useInView();
  const titleRef = useInView();
  const linksRef = useInView();
  const linksRefMbl = useInView();

  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* =========================================
                        MOBILE
          ========================================= */}
      <div className="block md:hidden fixed inset-0 -z-20 pointer-events-none w-full h-full bg-transparent">
        <Grainient
          color1="#000000"
          color2="#000000"
          color3="#8f09ce"
          timeSpeed={0.1} // Velocidade de movimento reduzida para ser sutil por baixo das seções
          warpFrequency={2} // Menos complexidade matemática para não engasgar o scroll
          warpSpeed={0.5}
          grainAmount={0} // Menos granulação = Menos lag no mobile
          grainAnimated={false}
          zoom={1.2} // Zoom leve para ajudar a esconder imperfeições de resolução baixa (DPR 0.9)
        />
      </div>

      {/* =========================================
                        DESKTOP
          ========================================= */}
      <div className="hidden md:block fixed inset-0 -z-20 pointer-events-none">
        <Grainient
          color1="#000000"
          color2="#000000"
          color3="#8f09ce"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* =========================================
                      Texto e Links)
          ========================================= */}
      <div
        id="hero-content"
        className="relative z-10 w-full min-h-screen flex flex-col gap-10 justify-center items-center px-4 md:px-0"
      >
        {/* Logo */}
        <p className="absolute top-9 md:top-8 left-6 md:left-8 text-foreground flex flex-row items-end text-lg md:text-xl font-semibold hover:text-primary transition">
          coutinho
          <span className="mb-1.75 w-0.75 h-0.75 shrink-0 rounded-full bg-primary" />
          dev
        </p>

        {/* Status */}
        <Link
          href="https://www.linkedin.com/in/joaocoutinho5"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex absolute top-9 md:top-8 right-6 md:right-8 items-center gap-2 text-lg"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          open to work
        </Link>

        <header className="container flex flex-col justify-center items-center text-center gap-4">
          <p
            ref={subtitleRef}
            className="text-md md:text-lg text-primary fade-down"
          >
            Fullstack Developer
          </p>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold fade-down delay-1 text-white/90 leading-tight"
          >
            João Pedro <br className="md:hidden" /> Coutinho
          </h1>

          {/* Desktop info */}
          <div
            ref={linksRef}
            className="hidden max-w-150 text-sm md:text-base md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 fade-down delay-2"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/65">coutinhodev@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LuGithub className="w-5 h-5 text-primary" />
                <span className="text-white/65">github.com/joaocoutinho5</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <LuLinkedin className="w-5 h-5 text-primary" />
                <span className="text-white/65">
                  linkedin.com/in/joaocoutinho5
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/65">Ribeirão Preto, SP</span>
              </div>
            </div>
          </div>

          {/* Mobile icons */}
          <div
            ref={linksRefMbl}
            className="flex flex-row md:hidden justify-center items-center gap-8 mt-6 fade-down delay-2"
          >
            <Link
              href="https://github.com/joaocoutinho5"
              target="_blank"
              className="text-primary hover:scale-110 transition"
            >
              <LuGithub size={26} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joaocoutinho5"
              target="_blank"
              className="text-primary hover:scale-110 transition"
            >
              <LuLinkedin size={26} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-primary hover:scale-110 transition"
            >
              <LuInstagram size={26} />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
