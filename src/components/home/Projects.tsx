"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "Todos",
  "Arquitetura",
  "Engenharia",
  "Meio Ambiente",
  "Gestão de obras",
  "Treinamentos",
];

const projects = [
  {
    category: "Arquitetura",
    title: "Projetos arquitetônicos",
    description:
      "Desenvolvimento de soluções arquitetônicas que unem funcionalidade, segurança e identidade para cada empreendimento.",
    image: "/images/projects/projeto-arquitetura.png",
  },
  {
    category: "Engenharia",
    title: "Projetos de engenharia",
    description:
      "Planejamento técnico e desenvolvimento de projetos orientados pela eficiência, qualidade e conformidade.",
    image: "/images/projects/projeto-engenharia.png",
  },
  {
    category: "Meio Ambiente",
    title: "Projetos ambientais",
    description:
      "Soluções técnicas para regularização, planejamento e atendimento às exigências ambientais aplicáveis.",
    image: "/images/projects/projeto-meio-ambiente.png",
  },
  {
    category: "Gestão de obras",
    title: "Planejamento e gestão de obras",
    description:
      "Acompanhamento organizado das etapas da obra, com foco em qualidade, prazos e eficiência na execução.",
    image: "/images/projects/projeto-gestao-obras.png",
  },
  {
    category: "Treinamentos",
    title: "Treinamentos profissionais",
    description:
      "Capacitações desenvolvidas para preparar equipes, fortalecer a prevenção e promover ambientes de trabalho mais seguros.",
    image: "/images/projects/projeto-treinamentos.png",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projetos"
      className="scroll-mt-20 bg-[#f4f7f5] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b09d20]">
            Projetos
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Experiência aplicada em cada projeto
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Conheça as principais áreas de atuação da EcoAdvanced. As imagens
            atuais são ilustrativas e serão substituídas pelos registros dos
            projetos realizados.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Filtrar projetos por categoria"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  active
                    ? "bg-[#176b3a] text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-[#176b3a] hover:text-[#176b3a]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.category}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Imagem ilustrativa para ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#176b3a] backdrop-blur">
                  Imagem ilustrativa
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <span className="text-sm font-bold uppercase tracking-wider text-[#b09d20]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}