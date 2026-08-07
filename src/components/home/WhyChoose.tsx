const differentials = [
  {
    title: "Soluções completas",
    description:
      "Atuação integrada em diferentes áreas para atender cada projeto de forma ampla.",
  },
  {
    title: "Qualidade técnica",
    description:
      "Planejamento e execução orientados pela eficiência e pelo cuidado em cada etapa.",
  },
  {
    title: "Agilidade",
    description:
      "Atendimento focado em respostas objetivas e no cumprimento das necessidades do cliente.",
  },
  {
    title: "Conformidade",
    description:
      "Soluções desenvolvidas com atenção às normas e exigências aplicáveis.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b09d20]">
              Por que escolher a EcoAdvanced?
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Compromisso em cada solução
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Unimos conhecimento técnico, organização e atendimento
              personalizado para entregar resultados com confiança.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {differentials.map((differential) => (
              <article
                key={differential.title}
                className="rounded-3xl border border-slate-200 p-7 transition hover:border-[#176b3a]/30 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#176b3a] text-xl font-bold text-[#d6c33f]">
                    ✓
                  </span>

                  <h3 className="text-xl font-bold text-slate-900">
                    {differential.title}
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {differential.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}