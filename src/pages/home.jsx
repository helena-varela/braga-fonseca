import { useState } from "react";
import image from "../assets/image.png";
import cristinabraga from "../assets/cristinabraga.png";
import kelly from "../assets/kelly.png";
import { Link } from "react-router-dom";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";

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
        className="w-full min-h-screen xl:h-screen relative flex items-center bg-cover bg-fixed bg-center bg-no-repeat overflow-hidden transition-all duration-1000"
        style={{
          backgroundImage: `url(${image})`,
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0 animate-pulse-slow"></div>

        <div className="relative z-10 w-full px-6 sm:px-10 md:px-20 lg:px-24 xl:px-29 pt-28 pb-12 xl:py-0 flex flex-col justify-center">
          <div className="max-w-full md:max-w-3/4 lg:w-11/12 xl:w-2/3 space-y-6 md:space-y-8">
          
            <span className="font-cinzel tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-brand-light/90 block animate-fade-in-down lg:pt-4">
              Advocacia Estratégica & Humanizada
            </span>

            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl leading-tight md:leading-[1.15] xl:leading-[1.1] text-brand-light animate-fade-in-up">
              {data.dor}
            </h1>

            <p className="font-inter text-base md:text-lg lg:text-xl xl:text-2xl text-brand-light/90 max-w-xl lg:max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              {data.subDor}
            </p>

            <div className="flex pt-4 md:pt-6 animate-fade-in-up [animation-delay:400ms]">
              <button className="relative group overflow-hidden w-full md:w-auto bg-[#8E8781] text-[#E8E9D4] px-8 md:px-20 py-4 md:py-5 font-cinzel text-xs md:text-sm tracking-[0.3em] font-bold cursor-pointer rounded-sm transition-all duration-500">
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></span>
                <a
                  href="https://wa.me/5584991053771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 group-hover:tracking-[0.4em] transition-all duration-500">
                    FALAR COM UMA ESPECIALISTA
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `,
          }}
        />
      </section>

      {/* pilares*/}
      <section className="w-full bg-[#D3CCC6] py-24 px-6 md:px-20 border-y border-[#8E8781]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl animate-fade-in-left">
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#8E8781] leading-tight mb-6">
              Fundado sobre a ética e o compromisso com o resultado.
            </h2>
            <div className="w-24 h-1 bg-[#8E8781]/30 transition-all duration-700 hover:w-48"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl relative z-10">
            {[
              {
                num: "01",
                t: "Missão",
                h: "Direitos que você já possui",
                d: "Nossa atuação ética e personalizada tem como foco principal ajudar nossos clientes a conhecerem e exercerem os direitos que lhes são garantidos por lei.",
                bg: "bg-[#cbccba]",
              },
              {
                num: "02",
                t: "Experiência",
                h: "Foco em Resultados",
                d: "Unimos a expertise técnica na defesa de servidores públicos com a sensibilidade necessária para garantir benefícios previdenciários e assistenciais.",
                bg: "bg-[#8E8781]",
                dark: true,
              },
              {
                num: "03",
                t: "Presença",
                h: "Natal & Região",
                d: "Estrutura pronta para atendimento presencial na capital e suporte digital estratégico para todo o estado.",
                bg: "bg-[#cbccba]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bg} p-10 md:p-16 space-y-6 flex flex-col justify-start min-h-[450px] transition-all duration-700 ease-in-out hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10 hover:z-20 group relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                <span
                  className={`font-cinzel text-[20px] tracking-[0.2em] uppercase font-bold transition-all duration-500 group-hover:tracking-[0.3em] ${item.dark ? "text-[#E8E9D4]" : "text-[#736e69]"}`}
                >
                  {item.num}. {item.t}
                </span>

                <h3
                  className={`font-cinzel text-2xl leading-snug ${item.dark ? "text-[#E8E9D4]" : "text-[#736e69]"}`}
                >
                  {item.h}
                </h3>

                <p
                  className={`font-inter leading-relaxed transition-all duration-500 ${item.dark ? "text-[#E8E9D4]/90" : "text-gray-700"}`}
                >
                  {item.d}
                </p>

                <div
                  className={`w-8 h-[1px] transition-all duration-500 group-hover:w-16 ${item.dark ? "bg-[#E8E9D4]" : "bg-[#8E8781]"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
            `,
          }}
        />
      </section>

      <section className="w-full py-20 px-10 md:px-20 bg-[#E8E9D4]">
        <div className="max-w-none w-full">
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

          {/* especialistas */}
          <div className="flex flex-wrap justify-center gap-20 md:gap-32 items-start">
            {/* card de cristina */}
            <div className="w-full md:w-[420px] flex flex-col items-center group">
              <Link
                to="/cristina-braga"
                className="group block relative w-full aspect-[4/5] overflow-hidden rounded-t-full border border-[#8E8781]/20 bg-[#D3CCC6]/30 mb-5 transition-all duration-700 hover:border-[#8E8781] hover:shadow-2xl"
              >
                <img
                  src={cristinabraga}
                  alt="Dra. Cristina Braga"
                  className="w-full h-full object-cover object-center transition-all duration-700 cursor-pointer group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#8E8781]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

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

            {/* card de kelly */}
            <div className="w-full md:w-[420px] flex flex-col items-center group">
              <div className="w-full md:w-[420px] flex flex-col items-center group">
                <Link
                  to="/kelly-fonseca"
                  className="group block relative w-full aspect-[4/5] overflow-hidden rounded-t-full border border-[#8E8781]/20 bg-[#D3CCC6]/30 mb-5 transition-all duration-700 hover:border-[#8E8781] hover:shadow-2xl"
                >
                  <img
                    src={kelly}
                    alt="Dra. Cristina Braga"
                    className="w-full h-full object-cover object-center transition-all duration-700 cursor-pointer group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#8E8781]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <div className="absolute inset-0 bg-[#8E8781]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="text-center w-full flex flex-col items-center">
                <h4 className="font-cinzel text-3xl text-[#8E8781] tracking-wider mb-2">
                  Kelly Fonsêca
                </h4>
                <p className="font-inter text-xs text-gray-400 uppercase tracking-[0.3em] mb-6 pb-4 border-b border-[#8E8781]/10 w-3/4">
                  Especialista em INSS
                </p>
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

      {/* feedbacks */}
      <section className="w-full py-16 md:py-24 px-6 md:px-20 bg-white text-[#8E8781] overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-cinzel text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold opacity-80">
              Depoimentos
            </h2>
            <h3 className="font-cinzel text-2xl md:text-5xl text-[#4A4540] leading-tight">
              Confiança de nossos clientes
            </h3>
            <div className="w-16 md:w-20 h-[2px] bg-[#8E8781] mx-auto"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <button
              onClick={prev}
              className="cursor-pointer hidden md:flex shrink-0 w-12 h-12 rounded-full border border-[#8E8781]/20 items-center justify-center text-[#8E8781] hover:bg-[#8E8781] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            <div
              key={current}
              className="flex-1 text-center py-6 md:py-10 px-2 md:px-10 relative animate-fade-in-blur"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-0 md:left-4 text-6xl md:text-7xl font-serif text-[#D3CCC6] opacity-40 leading-none select-none">
                “
              </span>

              <p className="font-inter text-lg md:text-2xl italic leading-relaxed text-[#333333] mb-8 md:mb-10 max-w-3xl mx-auto relative z-10">
                {reviews[current].texto}
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-[1px] bg-[#8E8781]"></div>
                <p className="font-cinzel text-[11px] md:text-xs tracking-[0.3em] uppercase font-extrabold text-[#8E8781]">
                  {reviews[current].nome}
                </p>
                <span className="text-[9px] md:text-[10px] font-inter uppercase text-gray-400 tracking-widest">
                  {reviews[current].cidade || "Natal / RN"}
                </span>
              </div>
            </div>

            <button
              onClick={next}
              className="cursor-pointer hidden md:flex shrink-0 w-12 h-12 rounded-full border border-[#8E8781]/20 items-center justify-center text-[#8E8781] hover:bg-[#8E8781] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Próximo"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>

            <div className="flex md:hidden gap-8 pt-4">
              <button
                onClick={prev}
                className="p-2 text-[#8E8781] active:scale-90 transition-transform"
              >
                <ChevronLeft size={32} strokeWidth={1} />
              </button>
              <button
                onClick={next}
                className="p-2 text-[#8E8781] active:scale-90 transition-transform"
              >
                <ChevronRight size={32} strokeWidth={1} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 md:gap-3 mt-12 md:mt-16">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[2px] transition-all duration-500 ${
                  current === i
                    ? "w-10 md:w-12 bg-[#8E8781]"
                    : "w-3 md:w-4 bg-[#8E8781]/20"
                }`}
              />
            ))}
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes fadeInBlur {
                from { opacity: 0; filter: blur(4px); transform: translateY(10px); }
                to { opacity: 1; filter: blur(0); transform: translateY(0); }
              }
              .animate-fade-in-blur { 
                animation: fadeInBlur 0.8s ease-out forwards; 
              }
            `,
          }}
        />
      </section>

      <section className="bg-[#F4F4F0] py-24 px-10 md:px-20 border-t border-[#8E8781]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-10">
            <div className="space-y-4">
              <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase font-bold">
                Onde Estamos
              </h2>
              <h3 className="font-cinzel text-4xl text-[#4A4540] leading-tight">
                Agende uma visita em <br /> nossa sede em Natal
              </h3>
              <div className="w-16 h-[2px] bg-[#8E8781]"></div>
            </div>

            <div className="space-y-8 font-inter">
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 border border-[#8E8781]/30 flex items-center justify-center text-[#8E8781]">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-[#8E8781] text-sm tracking-widest mb-1">
                    ENDEREÇO
                  </h4>
                  <p className="text-[#333333] leading-relaxed">
                    Av. Deodoro da Fonseca, 741 - Petrópolis <br />
                    Natal/RN - CEP: 59020-120
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 border border-[#8E8781]/30 flex items-center justify-center text-[#8E8781]">
                  <Clock size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-[#8E8781] text-sm tracking-widest mb-1">
                    ATENDIMENTO
                  </h4>
                  <p className="text-[#333333] leading-relaxed">
                    Segunda a Sexta: 08h às 17h <br />
                    Atendimento presencial e online.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.google.com/maps/place/Braga+e+Fons%C3%AAca+%7C+Advocacia/@-5.7886901,-35.2045361,17z/data=!3m1!4b1!4m6!3m5!1s0x7b30106f9f0e5f3:0x879d6cb58c20c090!8m2!3d-5.7886901!4d-35.2045361!16s%2Fg%2F11zjl25t_6?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="bg-[#8E8781] text-[#E8E9D4] px-10 py-4 font-cinzel text-xs tracking-[0.3em] font-bold transition-all shadow-xl inline-block"
              >
                COMO CHEGAR
              </a>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-[450px] relative group">
            <div className="rmd:w-1/2 w-full h-[450px]">
              <div className="w-full h-full overflow-hidden rounded-2xl shadow-xl border border-[#8E8781]/20">
                <iframe
                  title="Localização Braga & Fonsêca Natal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.472790231397!2d-35.2045361!3d-5.7886901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b30106f9f0e5f3%3A0x879d6cb58c20c090!2sBraga%20e%20Fons%C3%AAca%20%7C%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1778264063598!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contrast-125  transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
