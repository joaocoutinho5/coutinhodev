"use client";

import Link from "next/link";
import { useInView } from "../hooks/useInView";
//import { BtnCurriculo } from "./ui/buttons";
import { Mail, MapPin } from "lucide-react";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import Grainient from "./ui/heroBg";
import { ScrollIndicator } from "./ui/scrollIndicator";

export default function Hero() {
  const subtitleRef = useInView();
  const titleRef = useInView();
  const linksRef = useInView();
  const linksRefMbl = useInView();
  //const btnRef = useInView();

  return (
    <section id="hero" className="relative z-10 w-full flex justify-center">
      <div className="absolute inset-0 z-0">
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
      <div id="hero-content" className="w-full min-h-screen flex flex-col gap-10 justify-center items-center mx-2 md:mx-0">
        <div className="flex md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator />
        </div>
        <p className="absolute top-9 md:top-8 left-6 md:left-8 text-foreground flex flex-row items-end text-lg md:text-xl font-semibold hover:text-primary transition">
          coutinho
          <span className="mb-1.75 w-0.75 h-0.75 shrink-0 rounded-full bg-primary" />
          dev
        </p>
        <p className="hidden md:flex absolute top-9 md:top-8 right-6 md:right-8 items-center gap-2 text-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          open to work
        </p>
        <header className="container flex flex-col justify-center items-center text-center gap-4">
          <p
            ref={subtitleRef}
            className="text-md md:text-lg text-primary fade-down"
          >
            Fullstack Developer
          </p>
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl font-bold fade-down delay-1 text-white/90"
          >
            João Pedro Coutinho
          </h1>
          <div
            ref={linksRef}
            className="hidden max-w-150 text-sm md:text-base md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 fade-down delay-2"
          >
            {/* Coluna 1 */}
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

            {/* Coluna 2 */}
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
          <div
            ref={linksRefMbl}
            className="flex flex-row md:hidden justify-center items-center gap-6 md:gap-8 mt-6 fade-down delay-2"
          >
            <Link
              href="https://github.com/joaocoutinho5/coutinhodev"
              className="text-primary transition"
              target="_blank"
            >
              <LuGithub size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joaocoutinho5"
              className="text-primary transition"
              target="_blank"
            >
              <LuLinkedin size={22} />
            </Link>
            <Link
              href="https://github.com/joaocoutinho5"
              className="text-primary transition"
              target="_blank"
            >
              <LuInstagram size={22} />
            </Link>
          </div>
        </header>

        {/* <div ref={btnRef} className="fade-down delay-4">
          <BtnCurriculo />
          </div> */}

        {/* Background decoration*/}
      </div>
    </section>
  );
}
