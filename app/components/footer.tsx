import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    //Footer Wrapper
    <footer className="w-full bg-background border-t border-border text-foreground/50 py-8">
      <div className="container w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-5 md:gap-0 mx-auto px-5">
        <p className="text-sm md:text-md text-center md:text-left flex flex-row items-center gap-1">
          Criado com <Heart size={20} className="text-primary" /> por{" "}
          <b>João Pedro Coutinho</b>
        </p>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="https://github.com/joaocoutinho5/coutinhodev"
            className="group flex flex-row items-center justify-center gap-0.5 hover:text-primary transition"
            target="_blank"
          >
            Codigo Portfólio
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/joaocoutinho5"
            className="group flex flex-row items-center justify-center gap-0.5 hover:text-primary transition"
            target="_blank"
          >
            LinkedIn
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
            />
          </Link>
          <Link
            href="https://github.com/joaocoutinho5"
            className="group flex flex-row items-center justify-center gap-0.5 hover:text-primary transition"
            target="_blank"
          >
            GitHub
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
