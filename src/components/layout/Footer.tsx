import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Locação", href: "#locacao" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-[#052f20] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-8 lg:py-16">
        <div>
          <div className="inline-flex rounded-2xl bg-white p-3">
            <Image
              src="/images/brand/logo-ecoadvanced.jpg"
              alt="EcoAdvanced"
              width={220}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="mt-6 max-w-md leading-7 text-white/70">
            Soluções em Segurança do Trabalho, Meio Ambiente, Construção Civil
            e Arquitetura.
          </p>

          <p className="mt-4 max-w-md font-semibold text-[#d6c33f]">
            Todos os trabalhos, para todos os setores, em todas as empresas.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6c33f]">
            Links rápidos
          </h2>

          <nav className="mt-6 flex flex-col items-start gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6c33f]">
            Contato
          </h2>

          <div className="mt-6 space-y-3 text-white/75">
            <a
              href="tel:+556735222782"
              className="block transition hover:text-white"
            >
              (67) 3522-2782
            </a>

            <a
              href="https://wa.me/5567992051727"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              (67) 99205-1727
            </a>

            <a
              href="mailto:ecoadvanced@ecoadvanced.com.br"
              className="block break-words transition hover:text-white"
            >
              ecoadvanced@ecoadvanced.com.br
            </a>

            <address className="not-italic leading-7">
              Av. Dr. Eloy M. Chaves, 367, Centro
              <br />
              Três Lagoas/MS
            </address>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.instagram.com/ecoadvanced/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#d6c33f] transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/ecoadvanced"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#d6c33f] transition hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} EcoAdvanced. Todos os direitos
            reservados.
          </p>

          <p>CNPJ: 20.953.856/0001-99</p>
        </div>
      </div>
    </footer>
  );
}