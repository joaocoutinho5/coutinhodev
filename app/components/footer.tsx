import Link from "next/link";
import { TooltipLabel } from "./tooltipLabel";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";

export default function Footer() {
  return (
    //Footer Wrapper
    <footer className="w-full flex justify-center items-center border-t border-border text-foreground/50 py-8 md:pb-30">
      <div className="w-full flex flex-col justify-center items-center gap-4 px-5 xl:px-12">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 py-4">
          <p className="md:text-md text-center md:text-left flex flex-row items-center gap-1">
            Designed & Built by
            <b className="text-primary/60">João Pedro Coutinho</b>
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
        <span className="w-[90%] md:w-full h-px bg-border/50 rounded-full" />
        <div className="text-white/30 text-sm md:text-md w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p> © {new Date().getFullYear()}. Todos os direitos reservados.</p>
          <p>v1.00</p>
        </div>
      </div>
    </footer>
  );
}
