import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#8E8781] text-[#E8E9D4] py-16 px-10 md:px-20 mt-auto">
      <div className="max-w-none w-full grid md:grid-cols-3 gap-12 items-start">
        {/* COLUNA 1: LOGO E SOBRE */}
        <div className="space-y-6">
          <img
            src={logo}
            alt="Braga & Fonsêca"
            className="h-12 w-auto brightness-0 invert opacity-90"
          />
          <p className="font-inter text-sm leading-relaxed opacity-70 max-w-xs">
            Compromisso com a ética e a estratégia jurídica para garantir que
            você exerça os direitos que já possui.
          </p>
        </div>

        {/* COLUNA 2: CONTATOS */}
        <div className="space-y-4">
          <h4 className="font-cinzel text-xs tracking-[0.3em] uppercase border-b border-[#E8E9D4]/20 pb-2 inline-block">
            Contato
          </h4>
          <div className="font-inter text-sm space-y-2 opacity-80">
            <p>Natal, Rio Grande do Norte</p>
            <p>Atendimento Presencial e Digital</p>
            <a
              href="https://wa.me/5584991053771"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition-colors"
            >
              WhatsApp: (84) 99105-3771
            </a>
          </div>
        </div>

        {/* COLUNA 3: REDES E BOTÃO */}
        <div className="space-y-6 md:text-right flex flex-col md:items-end">
          <h4 className="font-cinzel text-xs tracking-[0.3em] uppercase border-b border-[#E8E9D4]/20 pb-2 inline-block">
            Siga-nos
          </h4>
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/bragaefonsecaadv/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <span className="font-cinzel text-[10px] tracking-widest border border-[#E8E9D4]/40 px-4 py-2 hover:bg-[#E8E9D4] hover:text-[#8E8781] transition-all">
                INSTAGRAM
              </span>
            </a>
          </div>
          <a
            href="https://wa.me/5584991053771"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8E9D4] text-[#8E8781] font-cinzel text-[10px] tracking-[0.2em] px-8 py-4 hover:bg-white transition-all uppercase font-bold"
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* LINHA FINAL DE COPYRIGHT */}
      <div className="mt-20 pt-8 border-t border-[#E8E9D4]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-cinzel tracking-[0.2em] opacity-40 uppercase text-center md:text-left">
        <p>© 2026 Braga & Fonsêca Advocacia. Todos os direitos reservados.</p>
        <p>OAB/RN — Natal/RN</p>
      </div>
    </footer>
  );
}
