import { useState } from "react";
import image from "./assets/image.png";
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import cristinabraga from "./assets/cristinabraga.png";
import kelly from "./assets/kelly.png";

const reviews = [
  {
    nome: "Luan Xavier",
    texto:
      "Excelente atendimento e assessoramento jurídico. Dra. Cristina e Dra. Kelly são super acessíveis e conseguem transmitir confiança e segurança durante todas as etapas do processo. Muito bem recomendadas!",
  },
  {
    nome: "Thatá Gosson",
    texto:
      "É gratificante ver o trabalho de competência que as advogadas Braga e Fônseca fazem. É confiar que elas vão fazer o que for preciso para que as leis sejam cumpridas.",
  },
  {
    nome: "Paula Castelo Branco",
    texto:
      "Profissionais extremamente competentes, humanas, que se sensibilizam com a dor do cliente do início ao fim do processo e atuam nas mais diversas circunstâncias. De fato, as melhores!",
  },
  {
    nome: "Elayne Gama",
    texto:
      "Eu achei excelente o atendimento! O escritório conta com profissionais altamente competentes e especializados. Fui muito bem orientada em todo o processo, com clareza e segurança. Recomendo com total confiança.",
  },
];

const content = {
  servidor: {
    dor: "A estabilidade não deve vir acompanhada da perda de direitos.",
    subDor:
      "Servidores ativos, aposentados e pensionistas muitas vezes desconhecem correções salariais e benefícios que já possuem por lei.",
    resolucao: "Defesa estratégica para quem serve à sociedade.",
    resDesc:
      "Atuamos para que o servidor público exerça plenamente seus direitos, desde progressões na carreira até revisões de aposentadorias e pensões.",
    feedbacks: [
      {
        nome: "J. Oliveira",
        cargo: "Servidor Estadual",
        texto:
          "Extremo profissionalismo. Me ajudaram a entender um direito que eu nem sabia que tinha.",
      },
    ],
  },
  inss: {
    dor: "Onde o INSS vê um número, nós vemos a sua história.",
    subDor:
      "A burocracia do INSS não pode ser um obstáculo para o seu sustento. Seja no BPC/LOAS ou invalidez, seu direito precisa ser exercido.",
    resolucao: "Especialistas em garantir o que é seu por direito.",
    resDesc:
      "Nossa missão é descomplicar a previdência. Atuamos de forma personalizada para reverter negativas e garantir o benefício de quem mais precisa.",
    feedbacks: [
      {
        nome: "Maria de Fátima",
        cargo: "Beneficiária BPC",
        texto:
          "A Dra. Kelly foi maravilhosa, cuidou de tudo quando eu já não tinha mais forças para lutar.",
      },
    ],
  },
};

export default function LandingPage() {
  const [view, setView] = useState("servidor");
  const data = content[view];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () =>
    setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <div className="bg-[#E8E9D4] w-screen max-w-none m-0 p-0 font-inter text-black overflow-x-hidden">
      {/* HEADER FLAT - LARGURA TOTAL */}
      <nav className="w-full flex justify-between items-center px-10 py-6 border-b border-[#8E8781]/10 bg-[#E8E9D4]/95 sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src={logo2}
            alt="logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView("servidor")}
            className={`text-[10px] font-cinzel tracking-[0.2em] px-5 py-2 transition-all ${view === "servidor" ? "bg-[#8E8781] text-white" : "text-[#8E8781] hover:bg-[#D3CCC6]"}`}
          >
            SERVIDOR PÚBLICO
          </button>
          <button
            onClick={() => setView("inss")}
            className={`text-[10px] font-cinzel tracking-[0.2em] px-5 py-2 transition-all ${view === "inss" ? "bg-[#8E8781] text-white" : "text-[#8E8781] hover:bg-[#D3CCC6]"}`}
          >
            BENEFÍCIOS INSS
          </button>
        </div>
      </nav>

      <section
        className="w-full h-screen relative flex items-center px-10 md:px-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* OVERLAY DE GRADIENTE - Escurece a foto para o texto aparecer */}
        <div className="absolute inset-0 bg-hero-overlay z-0"></div>

        {/* CONTEÚDO DA HERO - Por cima do gradiente (z-10) */}
        <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 space-y-8 pt-20">
          <span className="font-cinzel tracking-[0.4em] text-xs uppercase text-brand-light/70">
            Advocacia Estratégica & Humanizada
          </span>
          <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-brand-light">
            {data.dor}
          </h1>
          <p className="font-inter text-xl md:text-2xl text-brand-light/80 max-w-2xl leading-relaxed">
            {data.subDor}
          </p>

          <div className="flex pt-6">
            <button className="bg-white text-brand-dark px-14 py-5 font-cinzel text-xs tracking-[0.3em] hover:bg-brand-medium transition-all shadow-xl">
              FALAR COM UMA ESPECIALISTA
            </button>
          </div>
        </div>
      </section>

      {/* 2. RESOLUÇÃO - LARGURA TOTAL COM FUNDO CONTRASTE */}
      <section className="w-full bg-white py-10 px-10 md:px-20 flex flex-wrap-reverse items-center">
        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-[#E8E9D4] border border-[#D3CCC6]"></div>
        <div className="w-full md:w-1/2 pb-10 md:pb-0 md:pl-20">
          <h2 className="font-cinzel text-3xl md:text-4xl mb-3 leading-snug text-[#8E8781]">
            {data.resolucao}
          </h2>
          <p className="text-lg text-black leading-relaxed mb-5">
            {data.resDesc}
          </p>
          <div className="grid grid-cols-1 gap-6 font-cinzel text-[11px] tracking-[0.2em] text-[#8E8781]">
            <div className="border-l-2 border-[#8E8781] pl-4 py-2">
              ATUAÇÃO ÉTICA
            </div>
            <div className="border-l-2 border-[#8E8781] pl-4 py-2">
              ATENDIMENTO PERSONALIZADO
            </div>
            <div className="border-l-2 border-[#8E8781] pl-4 py-2">
              ESTRATÉGIA JURÍDICA
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-32 px-10 md:px-20 bg-white text-[#8E8781]">
        <div className="max-w-6xl mx-auto">
          {/* FEEDBACKS */}
          <div className="mb-2 space-y-2">
            <h2 className="font-cinzel text-xs tracking-[0.4em] uppercase opacity-70">
              Depoimentos
            </h2>
            <h3 className="font-cinzel text-3xl md:text-5xl leading-tight">
              A voz de quem confia em nosso trabalho
            </h3>
          </div>

          {/* ESTRUTURA DO CARROSSEL */}
          <div className="relative min-h-[400px] flex flex-col justify-center border-t border-b border-[#8E8781]/10 py-16">
            {/* CONTEÚDO DINÂMICO */}
            <div className="transition-all duration-500 ease-in-out">
              <span className="text-6xl font-serif opacity-20 block mb-8">
                “
              </span>
              <p className="font-inter text-xl md:text-3xl italic leading-relaxed text-gray-700 mb-10 max-w-4xl">
                {reviews[current].texto}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-[#8E8781]"></div>
                <p className="font-cinzel text-sm tracking-[0.3em] uppercase font-bold">
                  {reviews[current].nome}
                </p>
              </div>
            </div>

            {/* CONTROLES NAVEGAÇÃO */}
            <div className="absolute bottom-10 right-0 flex gap-8">
              <button
                onClick={prev}
                className="group flex items-center gap-2 font-cinzel text-[10px] tracking-widest uppercase hover:opacity-50 transition-all"
              >
                <span className="text-lg">←</span> Anterior
              </button>
              <button
                onClick={next}
                className="group flex items-center gap-2 font-cinzel text-[10px] tracking-widest uppercase hover:opacity-50 transition-all"
              >
                Próximo <span className="text-lg">→</span>
              </button>
            </div>

            {/* INDICADORES DE PÁGINA (PONTINHOS) */}
            <div className="absolute bottom-0 left-0 flex gap-2">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] transition-all duration-500 ${current === i ? "w-12 bg-[#8E8781]" : "w-4 bg-[#8E8781]/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-10 md:px-20 bg-[#E8E9D4]">
        <div className="max-w-none w-full">
          {/* CABEÇALHO DA SEÇÃO - Texto de Missão */}
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-2">
            <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase">
              Excelência e Humanidade
            </h2>
            <h3 className="font-cinzel text-3xl md:text-5xl text-[#8E8781] leading-tight">
              Conheça as Especialistas
            </h3>
            <p className="font-inter text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Com atuação ética, personalizada e estratégica, o escritório Braga
              & Fonsêca tem como missão ajudar seus clientes a conhecerem e
              exercerem os direitos que já possuem.
            </p>
          </div>

          {/* GRID DAS ADVOGADAS - Estilo Editorial Arqueado */}
          <div className="flex flex-wrap justify-center gap-20 md:gap-32 items-start">
            {/* CARD: DRA. CRISTINA BRAGA */}
            <div className="w-full md:w-[420px] flex flex-col items-center group">
              {/* CONTAINER DO ARCO */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full border border-[#8E8781]/20 bg-[#D3CCC6]/30 mb-5 transition-all duration-700 group-hover:border-[#8E8781] group-hover:shadow-2xl">
                <img
                  src={cristinabraga}
                  alt="Dra. Cristina Braga"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay suave */}
                <div className="absolute inset-0 bg-[#8E8781]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* CONTEÚDO TEXTUAL */}
              <div className="text-center w-full flex flex-col items-center">
                <h4 className="font-cinzel text-3xl text-[#8E8781] tracking-wider mb-2">
                  Cristina Braga
                </h4>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-[0.3em] mb-6 pb-4 border-b border-[#8E8781]/10 w-3/4">
                  Direito do Servidor Público
                </p>

                {/* Box de texto com altura mínima para alinhar os botões */}
                <div className="min-h-[120px] flex items-center justify-center mb-8">
                  <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed px-4">
                    Dra. Cristina Braga atua com ênfase na defesa dos direitos
                    de servidores públicos ativos, aposentados e pensionistas.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setView("servidor");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-cinzel text-[10px] tracking-[0.3em] text-[#8E8781] border border-[#8E8781] px-10 py-4 hover:bg-[#8E8781] hover:text-white transition-all uppercase font-bold cursor-pointer"
                >
                  Ver Especialidade
                </button>
              </div>
            </div>

            {/* CARD: DRA. KELLY FONSÊCA */}
            <div className="w-full md:w-[420px] flex flex-col items-center group">
              {/* CONTAINER DO ARCO */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-full border border-[#8E8781]/20 bg-[#D3CCC6]/30 mb-5 transition-all duration-700 group-hover:border-[#8E8781] group-hover:shadow-2xl">
                <img
                  src={kelly}
                  alt="Dra. Kelly Fonsêca"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay suave */}
                <div className="absolute inset-0 bg-[#8E8781]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* CONTEÚDO TEXTUAL */}
              <div className="text-center w-full flex flex-col items-center">
                <h4 className="font-cinzel text-3xl text-[#8E8781] tracking-wider mb-2">
                  Kelly Fonsêca
                </h4>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-[0.3em] mb-6 pb-4 border-b border-[#8E8781]/10 w-3/4">
                  Especialista em INSS
                </p>

                {/* Box de texto com altura mínima para alinhar os botões */}
                <div className="min-h-[120px] flex items-center justify-center mb-8">
                  <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed px-4">
                    Dra. Kelly Fonsêca é especialista em aposentadorias e
                    benefícios do INSS, focada em garantir o sustento e
                    dignidade de seus clientes.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setView("inss");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-cinzel text-[10px] tracking-[0.3em] text-[#8E8781] border border-[#8E8781] px-10 py-4 hover:bg-[#8E8781] hover:text-white transition-all uppercase font-bold cursor-pointer"
                >
                  Ver Especialidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
