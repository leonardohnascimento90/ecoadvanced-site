type EquipmentIcon =
  | "grinder"
  | "hammer"
  | "paint"
  | "saw";

const equipment: Array<{
  code: string;
  name: string;
  icon: EquipmentIcon;
}> = [
  {
    code: "ESJ-001",
    name: 'Esmerilhadeira Angular de 9"',
    icon: "grinder",
  },
  {
    code: "MTJ-001",
    name: "Martelete 5 kg",
    icon: "hammer",
  },
  {
    code: "AIR-001",
    name: "Máquina de Pintura Airless",
    icon: "paint",
  },
  {
    code: "SRB-001",
    name: "Serra de bancada",
    icon: "saw",
  },
];

function createWhatsappUrl(code: string, name: string) {
  const message = `Olá! Gostaria de consultar a disponibilidade do equipamento ${code} - ${name}.`;

  return `https://wa.me/5567992051727?text=${encodeURIComponent(message)}`;
}

function Icon({ type }: { type: EquipmentIcon }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-8 w-8",
    "aria-hidden": true,
  };

  if (type === "grinder") {
    return (
      <svg {...commonProps}>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 7-7 2 2-7 7" />
        <path d="M5 11 3 9" />
        <path d="M12 17h7" />
      </svg>
    );
  }

  if (type === "hammer") {
    return (
      <svg {...commonProps}>
        <path d="m14 4 6 6" />
        <path d="m12 6 4-4 6 6-4 4" />
        <path d="M14 10 5 19" />
        <path d="m3 21 4-1 9-9-3-3-9 9-1 4Z" />
      </svg>
    );
  }

  if (type === "paint") {
    return (
      <svg {...commonProps}>
        <path d="M4 7h10l3 3-4 3H8" />
        <path d="M8 7v6" />
        <path d="m12 13-1 8H7l1-8" />
        <path d="M18 8h3" />
        <path d="M19 5v6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="10" cy="12" r="5" />
      <path d="M10 7v2" />
      <path d="m6.5 8.5 1.4 1.4" />
      <path d="M5 12h2" />
      <path d="m6.5 15.5 1.4-1.4" />
      <path d="M10 15v2" />
      <path d="M3 19h18" />
      <path d="M15 8h5v11" />
    </svg>
  );
}

export function Rental() {
  return (
    <section
      id="locacao"
      className="scroll-mt-20 bg-[#073d28] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6c33f]">
            Locação de equipamentos
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Equipamentos para apoiar o seu projeto
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/75">
            Consulte a disponibilidade e solicite informações diretamente pelo
            WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item) => (
            <article
              key={item.code}
              className="flex min-h-72 flex-col rounded-3xl bg-white p-7 text-slate-900 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#176b3a]/10 text-[#176b3a]">
                <Icon type={item.icon} />
              </div>

              <h3 className="mt-7 text-xl font-bold">{item.name}</h3>

              <a
                href={createWhatsappUrl(item.code, item.name)}
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-8 font-bold text-[#176b3a] transition hover:text-[#0f512b]"
              >
                Consultar disponibilidade →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}