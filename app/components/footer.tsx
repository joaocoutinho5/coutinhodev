import Link from "next/link";
import { TooltipLabel } from "./tooltipLabel";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";

export default function Footer() {
  return (
    //Footer Wrapper
    <footer className="w-full bg-background border-t border-border text-foreground/50 py-8">
      <div className="container w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-0 mx-auto px-5">
        <p className="text-sm md:text-md text-center md:text-left flex flex-row items-center gap-1">
          Designed & Built by
          <b>João Pedro Coutinho</b>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm">
          <div className="relative group">
            <Link
              href="https://github.com/joaocoutinho5/coutinhodev"
              className="hover:text-primary transition"
              target="_blank"
            >
              <LuGithub size={20} />
            </Link>
            <TooltipLabel label="GitHub" />
          </div>
          <div className="relative group">
            <Link
              href="https://www.linkedin.com/in/joaocoutinho5"
              className="hover:text-primary transition"
              target="_blank"
            >
              <LuLinkedin size={20} />
            </Link>
            <TooltipLabel label="Linkedin" />
          </div>
          <div className="relative group">
            <Link
              href="https://github.com/joaocoutinho5"
              className="hover:text-primary transition"
              target="_blank"
            >
              <LuInstagram size={20} />
            </Link>
            <TooltipLabel label="Instagram" />
          </div>
        </nav>
      </div>
    </footer>
  );
}
