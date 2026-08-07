import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#073d28]">
      <div className="relative mx-auto min-h-[calc(100svh-5rem)] overflow-hidden md:aspect-[2048/788] md:min-h-0">
        <Image
          src="/images/hero/banner-ecoadvanced-clean.png"
          alt="Profissionais da EcoAdvanced representando Segurança do Trabalho, Meio Ambiente, Construção Civil e Arquitetura"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#052f20]/95 via-[#073d28]/65 to-transparent md:hidden" />

        <div className="absolute inset-x-0 bottom-0 top-0 flex items-center px-6 md:hidden">
          <div className="max-w-xs text-white">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6c33f]">
              EcoAdvanced
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight">
              Soluções completas para sua empresa
            </h1>

            <p className="mt-4 text-base leading-7 text-white/85">
              Segurança do Trabalho, Meio Ambiente, Construção Civil e
              Arquitetura.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="https://wa.me/5567992051727"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d6c33f] px-6 py-3 text-center font-bold text-[#073d28]"
              >
                Solicitar orçamento
              </Link>

              <Link
                href="#servicos"
                className="rounded-full border border-white/70 px-6 py-3 text-center font-bold text-white"
              >
                Conheça nossos serviços
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden gap-3 md:flex">
          <Link
            href="#servicos"
            className="rounded-full border border-white/80 bg-black/20 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#073d28]"
          >
            Conheça nossos serviços
          </Link>

          <Link
            href="https://wa.me/5567992051727"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#d6c33f] px-6 py-3 font-bold text-[#073d28] transition hover:bg-[#eadb64]"
          >
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </section>
  );
}