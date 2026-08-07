import Link from "next/link";

const services = [
  {
    title: "Segurança do Trabalho",
    description:
      "Soluções voltadas à prevenção de riscos, conformidade e segurança nos ambientes de trabalho.",
  },
  {
    title: "Meio Ambiente",
    description:
      "Projetos, regularizações e suporte técnico para atender às exigências ambientais.",
  },
  {
    title: "Construção Civil",
    description:
      "Planejamento, acompanhamento e gerenciamento de obras com qualidade e eficiência.",
  },
  {
    title: "Arquitetura",
    description:
      "Projetos arquitetônicos desenvolvidos para unir funcionalidade, segurança e identidade.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-[#f4f7f5] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b09d20]">
            Nossos serviços
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Conhecimento técnico para soluções completas
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Atuamos em diferentes áreas para oferecer segurança, eficiência e
            conformidade em cada projeto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#176b3a]/30 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-center justify-between gap-5">
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#176b3a] transition group-hover:scale-150" />
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-6 rounded-3xl bg-[#073d28] p-7 text-white sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-2xl font-bold">
              Precisa de uma solução personalizada?
            </h3>

            <p className="mt-2 text-white/75">
              Converse com a equipe da EcoAdvanced.
            </p>
          </div>

          <Link
            href="https://wa.me/5567992051727"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-[#d6c33f] px-6 py-3 text-center font-bold text-[#073d28]"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}