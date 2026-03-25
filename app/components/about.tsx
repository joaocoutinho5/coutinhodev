"use client";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./sectionHeader";
import { ProfileCard } from "./ui/cards";

export default function About() {
  const ref = useInView();

  return (
    <section
      id="about"
      className="relative z-10 w-full flex justify-center h-fit"
    >
      <div
        className="container flex flex-col justify-center items-start gap-12 pt-30 pb-30 md:pb-40 mx-2 md:mx-0"
      >
        <SectionHeader
          title="Sobre mim"
          number="1"
        />
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <section className="text-md md:text-lg font-light w-full md:max-w-120 text-foreground/65 flex flex-col gap-4 leading-relaxed">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas pela PUC
              Minas, atualmente em transição de carreira para a área de
              tecnologia. Resido em Ribeirão Preto – SP e venho direcionando
              meus estudos e projetos para o desenvolvimento de aplicações web,
              com foco em soluções funcionais, organizadas e bem estruturadas.
            </p>
            <p>
              Tenho interesse especial em desenvolvimento fullstack, com maior
              foco no frontend moderno, sem deixar de aprofundar conhecimentos
              em backend e banco de dados. Ao longo da minha formação, venho
              construindo projetos práticos que me permitem evoluir tanto na
              parte técnica quanto na organização do código e na experiência do
              usuário.
            </p>
            <p>
              Busco desenvolver aplicações que aliem clareza, eficiência e boas
              práticas de desenvolvimento. Mais detalhes sobre as tecnologias e
              ferramentas que utilizo estão disponíveis na seção{" "}
              <a href="#skills" className="font-bold text-primary hover:underline">
                Skills
              </a>
              .
            </p>
          </section>
          {/* Card Perfil */}
          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
