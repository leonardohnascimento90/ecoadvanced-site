const contacts = [
  {
    label: "Telefone",
    value: "(67) 3522-2782",
    href: "tel:+556735222782",
  },
  {
    label: "WhatsApp",
    value: "(67) 99205-1727",
    href: "https://wa.me/5567992051727",
  },
  {
    label: "WhatsApp",
    value: "(67) 98121-4587",
    href: "https://wa.me/5567981214587",
  },
  {
    label: "E-mail",
    value: "ecoadvanced@ecoadvanced.com.br",
    href: "mailto:ecoadvanced@ecoadvanced.com.br",
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-28 bg-white py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#073d28] shadow-2xl lg:grid-cols-2">
          <div className="p-6 text-white sm:p-10 lg:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d6c33f] sm:text-sm sm:tracking-[0.2em]">
              Entre em contato
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Vamos conversar sobre o seu projeto?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/75 sm:mt-5 sm:text-lg sm:leading-8">
              Fale com a EcoAdvanced para solicitar informações, consultar
              serviços ou pedir um orçamento.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {contacts.map((contact) => {
                const external = contact.href.startsWith("https://");

                return (
                  <a
                    key={`${contact.label}-${contact.value}`}
                    href={contact.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 transition hover:bg-white/15 sm:p-5"
                  >
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#d6c33f]">
                      {contact.label}
                    </span>

                    <span className="mt-2 block break-all text-sm font-semibold sm:break-words sm:text-base">
                      {contact.value}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-7 border-t border-white/15 pt-7 sm:mt-8 sm:pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d6c33f]">
                Endereço
              </span>

              <address className="mt-2 not-italic leading-7 text-white/85">
                Av. Dr. Eloy M. Chaves, 367, Centro
                <br />
                Três Lagoas/MS
              </address>
            </div>
          </div>

          <div className="h-72 bg-[#f4f7f5] sm:h-96 lg:h-auto lg:min-h-96">
            <iframe
              title="Localização da EcoAdvanced"
              src="https://www.google.com/maps?q=Av.%20Dr.%20Eloy%20M.%20Chaves%2C%20367%2C%20Centro%2C%20Tr%C3%AAs%20Lagoas%2FMS&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}