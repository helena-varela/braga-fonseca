import { useState } from "react";
import image from "../assets/image.png";
import cristinabraga from "../assets/cristinabraga.png";
import kelly from "../assets/kelly.png";
import { Link } from "react-router-dom";

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

export default function Home() {
  const [view, setView] = useState("servidor");
  const data = content[view];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % reviews.length);
  const prev = () =>
    setCurrent((current - 1 + reviews.length) % reviews.length);

  return (
    <div className="bg-[#D3CCC6] w-screen max-w-none m-0 p-0 font-inter text-black overflow-x-hidden">
      <section
        className="w-full h-screen relative flex items-center px-18 md:px-29 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          borderBottomLeftRadius: "50% 10%",
          borderBottomRightRadius: "50% 10%",
        }}
      >
        <div className="absolute inset-0 bg-hero-overlay z-0"></div>

        <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 space-y-9 pt-20">
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
            <button className="bg-[#8E8781] text-[#E8E9D4] px-20 py-5 font-cinzel text-sm tracking-[0.3em] font-bold cursor-pointer rounded-sm">
              FALAR COM UMA ESPECIALISTA
            </button>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="w-full bg-[#D3CCC6] py-24 px-10 md:px-20 border-y border-[#8E8781]/10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#8E8781] leading-tight mb-6">
            Fundado sobre a ética e o compromisso com o resultado.
          </h2>
          <div className="w-24 h-1 bg-[#8E8781]/30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
          {/* Card 1 */}
          <div className="bg-[#cbccba] p-12 md:p-16 space-y-6 flex flex-col justify-start min-h-[450px] transition-all duration-500 hover:scale-[1.02] hover:z-10 shadow-sm">
            <span className="font-cinzel text-[20px] tracking-[0.4em] text-[#736e69] uppercase font-bold">
              01. Missão
            </span>
            <h3 className="font-cinzel text-2xl text-[#736e69] leading-snug">
              Direitos que você já possui
            </h3>
            <p className="font-inter text-gray-700 leading-relaxed">
              Nossa atuação ética e personalizada tem como foco principal ajudar
              nossos clientes a conhecerem e exercerem os direitos que lhes são
              garantidos por lei.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#8E8781] p-12 md:p-16 space-y-6 flex flex-col justify-start min-h-[450px] text-[#E8E9D4] transition-all duration-500 hover:scale-[1.02] hover:z-10 shadow-sm">
            <span className="font-cinzel text-[20px] tracking-[0.4em] uppercase font-bold">
              02. Experiência
            </span>
            <h3 className="font-cinzel text-2xl leading-snug">
              Foco em Resultados
            </h3>
            <p className="font-inter opacity-90 leading-relaxed">
              Unimos a expertise técnica na defesa de servidores públicos com a
              sensibilidade necessária para garantir benefícios previdenciários
              e assistenciais.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#cbccba] p-12 md:p-16 space-y-6 flex flex-col justify-start min-h-[450px] transition-all duration-500 hover:scale-[1.02] hover:z-10 shadow-sm">
            <span className="font-cinzel text-[20px] tracking-[0.4em] text-[#736e69] uppercase font-bold">
              03. Presença
            </span>
            <h3 className="font-cinzel text-2xl text-[#736e69] leading-snug">
              Natal & Região
            </h3>
            <p className="font-inter text-gray-700 leading-relaxed">
              Estrutura pronta para atendimento presencial na capital e suporte
              digital estratégico para todo o estado.
            </p>
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

                <div className="min-h-[120px] flex items-center justify-center mb-8">
                  <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed px-4">
                    Dra. Cristina Braga atua com ênfase na defesa dos direitos
                    de servidores públicos ativos, aposentados e pensionistas.
                  </p>
                </div>
                <Link to="/cristina-braga">
                  <button
                    onClick={() => {
                      setView("servidor");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="font-cinzel text-[15px] tracking-[0.3em] text-[#8E8781] border border-[#8E8781] px-10 py-4 hover:bg-[#8E8781] hover:text-white transition-all uppercase font-bold cursor-pointer"
                  >
                    Ver Especialidade
                  </button>
                </Link>
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

                <Link to="/kelly-fonseca">
                  <button
                    Ver
                    Especialidade
                    className="font-cinzel text-[15px] tracking-[0.3em] text-[#8E8781] border border-[#8E8781] px-10 py-4 hover:bg-[#8E8781] hover:text-white transition-all uppercase font-bold cursor-pointer"
                  >
                    Ver Especialidade
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="w-full py-30 px-10 md:px-20 bg-white text-[#8E8781]">
        <div className="max-w-6xl mx-auto">
          {/* TÍTULO DA SEÇÃO */}
          <div className="mb-5 space-y-2">
            <h2 className="font-cinzel text-[18px] tracking-[0.4em] uppercase opacity-90">
              Depoimentos
            </h2>
            <h3 className="font-cinzel text-2xl md:text-4xl">
              Confiança de nossos clientes
            </h3>
          </div>

          {/* ESTRUTURA REFORMULADA: TEXTO À ESQUERDA E BOTÕES À DIREITA */}
          <div className="relative border-t border-[#8E8781]/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center">
              {/* BLOCO DE TEXTO (LADO ESQUERDO) */}
              <div className="flex-1 transition-all duration-500 ease-in-out">
                <span className="text-5xl font-serif opacity-70 block leading-none">
                  “
                </span>
                <p className="font-inter text-lg md:text-xl italic leading-relaxed text-gray-700 mb-8 max-w-2xl">
                  {reviews[current].texto}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-[1px] bg-[#8E8781]"></div>
                  <p className="font-cinzel text-[11px] tracking-[0.2em] uppercase font-bold text-[#8E8781]">
                    {reviews[current].nome}
                  </p>
                </div>
              </div>

              {/* BOTÕES DE NAVEGAÇÃO (LADO DIREITO) */}
              <div className="flex gap-10 shrink-0">
                <button
                  onClick={prev}
                  className="flex items-center justify-center w-12 h-12 border border-[#8E8781]/30 text-[#8E8781] hover:bg-[#8E8781] hover:text-[#E8E9D4] transition-all duration-300 group"
                  aria-label="Anterior"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 group-hover:-translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>

                <button
                  onClick={next}
                  className="flex items-center justify-center w-12 h-12 border border-[#8E8781]/30 text-[#8E8781] hover:bg-[#8E8781] hover:text-[#E8E9D4] transition-all duration-300 group"
                  aria-label="Próximo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* INDICADORES (PONTINHOS) ABAIXO DE TUDO */}
            <div className="flex gap-2 mt-12">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] transition-all duration-500 ${current === i ? "w-10 bg-[#8E8781]" : "w-3 bg-[#8E8781]/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
