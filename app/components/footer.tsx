import { LuGithub, LuLinkedin, LuInstagram, LuArrowUp } from "react-icons/lu";
import Link from "next/link";
import { TooltipLabel } from "./tooltipLabel";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 overflow-hidden">
      {/* ================= MOBILE ================= */}
      <div className="flex flex-col md:hidden px-6 gap-4">
        <div className="w-full flex flex-col pb-6 gap-6">
          <div className="flex flex-col items-end justify-center py-8 gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-full flex items-center justify-end gap-1 text-foreground/90 pb-4"
            >
              <LuArrowUp className="" />
              <p className="text-md">Voltar ao topo</p>
            </button>
            {/* Links sociais */}
            <nav className="flex flex-col items-end gap-4 text-md text-foreground/90">
              <p className="text-foreground/40">Links</p>
              <div className="relative group">
                <Link
                  href="https://github.com/joaocoutinho5/coutinhodev"
                  target="_blank"
                >
                  <p>GitHub</p>
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="https://www.linkedin.com/in/joaocoutinho5"
                  target="_blank"
                >
                  <p>Linkedin</p>
                </Link>
              </div>
              <div className="relative group">
                <Link href="https://www.instagram.com/jaocoutinho5" target="_blank">
                  <p>Instagram</p>
                </Link>
              </div>
            </nav>
          </div>
          <p className="text-sm text-foreground/40 w-full flex justify-center">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
        <div className="w-full relative flex justify-center items-center pb-4">
          <h1 className="absolute left-1/2 -translate-x-1/2 -bottom-[200%] text-[55px] font-bold text-white/10 whitespace-nowrap select-none">
            coutinho.dev
          </h1>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="relative z-10 flex flex-col items-end justify-between px-5 xl:px-12 py-12 gap-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center justify-center gap-1 text-foreground/90"
          >
            <LuArrowUp className="w-5 h-5 group-hover:text-primary transition" />
            <p className="text-lg group-hover:text-primary transition">
              Voltar ao topo
            </p>
          </button>
          <div className="w-full flex flex-row justify-between items-end">
            <p className="text-sm text-foreground/40 self-start">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
            {/* Links sociais */}
            <nav className="flex items-center gap-6 text-sm text-foreground/90">
              <div className="relative group">
                <Link
                  href="https://github.com/joaocoutinho5/coutinhodev"
                  className="hover:text-primary transition"
                  target="_blank"
                >
                  <LuGithub size={22} />
                </Link>
                <TooltipLabel label="GitHub" />
              </div>
              <div className="relative group">
                <Link
                  href="https://www.linkedin.com/in/joaocoutinho5"
                  className="hover:text-primary transition"
                  target="_blank"
                >
                  <LuLinkedin size={22} />
                </Link>
                <TooltipLabel label="Linkedin" />
              </div>
              <div className="relative group">
                <Link
                  href="https://www.instagram.com/jaocoutinho5/"
                  className="hover:text-primary transition"
                  target="_blank"
                >
                  <LuInstagram size={22} />
                </Link>
                <TooltipLabel label="Instagram" />
              </div>
            </nav>
          </div>
        </div>
        <div className="relative h-30 md:h-38">
          <h1 className="absolute left-1/2 -translate-x-1/2 -bottom-[55%] xl:-bottom-[75%] 2xl:-bottom-full text-[14vw] font-bold text-white/10 whitespace-nowrap select-none">
            coutinho.dev
          </h1>
        </div>
      </div>
    </footer>
  );
}
