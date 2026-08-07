const highlights = [
  "Projetos técnicos",
  "Planejamento e gerenciamento de obras",
  "Regularizações e emissão de alvarás",
  "Segurança e conformidade com as normas",
];

export function About() {
  return (
    <section id="empresa" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b09d20]">
            Sobre a EcoAdvanced
          </span>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Soluções técnicas com qualidade, agilidade e confiança
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Oferecemos soluções completas em projetos técnicos, planejamento e
            gerenciamento de obras, regularizações e emissão de alvarás.
            Garantindo segurança, eficiência e conformidade com as normas.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Atuamos com foco em qualidade, agilidade e resultados, atendendo
            empresas e clientes que buscam profissionalismo e confiança.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#073d28] p-7 text-white shadow-2xl sm:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[32px] border-[#d6c33f]/15" />

          <h3 className="relative text-2xl font-bold">
            Atuação completa para cada necessidade
          </h3>

          <div className="relative mt-8 grid gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d6c33f] font-bold text-[#073d28]">
                  ✓
                </span>

                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}