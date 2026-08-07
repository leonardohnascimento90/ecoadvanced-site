"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Locação", href: "#locacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="EcoAdvanced - Página inicial">
          <Image
            src="/images/brand/logo-ecoadvanced.jpg"
            alt="EcoAdvanced"
            width={190}
            height={64}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-[#176b3a]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/5567992051727"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#176b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f512b]"
          >
            Solicitar orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-lg p-2 text-[#176b3a] lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="my-1.5 block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t bg-white px-5 py-5 lg:hidden" aria-label="Menu móvel">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-slate-700"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://wa.me/5567992051727"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-[#176b3a] px-5 py-3 text-center font-bold text-white"
            >
              Solicitar orçamento
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}