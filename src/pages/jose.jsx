import hero from "../assets/jose-hero.png";
import heroMobile from "../assets/hero-mobile-jose.jpeg";
import { useState, useEffect } from "react";

export default function JosePage() {
  const [activeTab, setActiveTab] = useState("trabalhadores");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Quais documentos devo enviar para análise trabalhista?",
      a: "Contrato de trabalho, carteira de trabalho, holerites, extratos de FGTS, termo de rescisão, controles de ponto, mensagens, advertências, exames médicos, comunicações da empresa e demais documentos relacionados ao caso concreto.",
    },
    {
      q: "O atendimento garante o resultado da ação?",
      a: "Não. A atuação jurídica envolve análise técnica rigorosa, definição de estratégia personalizada e defesa de interesses, mas o resultado final depende das provas apresentadas, da legislação aplicável, da interpretação judicial e das circunstâncias específicas do caso.",
    },
    {
      q: "Empresas podem contratar assessoria preventiva?",
      a: "Sim. A assessoria preventiva é ideal para empresas de todos os portes. Ela auxilia diretamente na redução de riscos trabalhistas, na regularização de documentos, na orientação contínua de gestores e na tomada de decisões estratégicas com total segurança jurídica.",
    },
    {
      q: "Também há atendimento especializado para empregadores domésticos?",
      a: "Sim. Prestamos suporte completo para empregadores domésticos, abrangendo desde a contratação regular, gestão de jornada, recibos de pagamento, controle de férias, recolhimentos tributários e eSocial, até rescisões e regularização geral das obrigações do vínculo.",
    },
  ];
  const servicosTrabalhadores = [
    {
      t: "Vínculo Empregatício & Rescisão",
      d: "Análise completa de situações de pejotização, ausência de registro e contratos falsos de autônomo. Conferência minuciosa de verbas rescisórias, saldos, aviso-prévio, FGTS e seguro-desemprego.",
    },
    {
      t: "Jornada, Horas Extras & Intervalos",
      d: "Avaliação detalhada de controle de ponto, fraudes em banco de horas, intervalos sonegados, adicional noturno, regime de sobreaviso e particularidades do trabalho remoto.",
    },
    {
      t: "Assédio, Discriminação & Danos Morais",
      d: "Atuação técnica frente a condutas abusivas no ambiente de trabalho, humilhações, cobranças excessivas, discriminação, retaliações e exposição indevida que geram direito à reparação.",
    },
    {
      t: "Acidentes de Trabalho & Doenças",
      d: "Orientação e defesa jurídica especializada sobre estabilidade acidentária, afastamento previdenciário, emissão de CAT, reintegração ao emprego e indenizações por responsabilidade do empregador.",
    },
  ];

  const servicosEmpresas = [
    {
      t: "Consultoria Preventiva & Auditoria",
      d: "Orientação contínua e diagnóstico completo de riscos. Análise de folha, contratos, práticas de admissão, jornada e benefícios, com relatórios e recomendações para mitigar o passivo trabalhista.",
    },
    {
      t: "Contratos & Políticas Internas",
      d: "Elaboração e revisão de contratos por prazo determinado/indeterminado, teletrabalho, acordos de banco de horas, termos de confidencialidade, regulamentos internos e políticas corporativas.",
    },
    {
      t: "Desligamentos & Defesa Judicial",
      d: "Planejamento jurídico de dispensas individuais e acordos de extinção. Defesa técnica e contundente em reclamações trabalhistas, audiências, recursos, impugnação de cálculos e execuções.",
    },
    {
      t: "Treinamentos de RH & Plano Mensal",
      d: "Capacitação de gestores e RH sobre assédio, advertências e justa causa. Plano de assessoria mensal recorrente para suporte imediato nas decisões trabalhistas do cotidiano.",
    },
  ];

  const currentServicos =
    activeTab === "trabalhadores" ? servicosTrabalhadores : servicosEmpresas;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      // Hero
      <section
        className="w-full min-h-screen xl:h-screen relative flex items-center bg-cover bg-fixed bg-center bg-no-repeat overflow-hidden animate-fade-in"
        style={{
          backgroundImage: `url(${isMobile ? heroMobile : hero})`,
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10"></div>
        <div className="relative z-20 w-full px-4 sm:px-10 md:px-20 lg:px-24 xl:px-29 pt-28 pb-12 xl:py-0 flex flex-col justify-center">
          <div className="max-w-full md:max-w-3/4 lg:w-11/12 xl:w-2/3 space-y-6 md:space-y-8">
            <span className="font-cinzel tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-brand-light/90 block animate-fade-in-down lg:pt-4">
              Atuação Preventiva, Consultiva & Contenciosa
            </span>

            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl leading-tight md:leading-[1.15] xl:leading-[1.1] text-brand-light animate-fade-in-up">
              Assessoria Jurídica Trabalhista Estratégica
            </h1>

            <p className="font-inter text-base md:text-lg lg:text-xl xl:text-2xl text-brand-light/90 max-w-xl lg:max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Defesa de excelência para trabalhadores, empresas, empregadores
              domésticos, sindicatos e cooperativas. Foco em análise técnica,
              prevenção de riscos e negociações seguras.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 md:pt-6 animate-fade-in-up [animation-delay:400ms]">
              <a
                href="https://wa.me/5584991053771"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden w-full sm:w-auto bg-[#8E8781] text-[#E8E9D4] px-8 md:px-12 py-4 md:py-5 font-cinzel text-xs md:text-sm tracking-[0.3em] font-bold cursor-pointer rounded-sm transition-all duration-500 text-center"
              >
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></span>
                <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-500 block">
                  AGENDAR ATENDIMENTO
                </span>
              </a>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
              .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
              .animate-fade-in-up { opacity: 0; animation: fadeInUp 1s ease-out forwards; }
            `,
          }}
        />
      </section>

      {/* BLOCO INSTITUCIONAL */}
      <section className="w-full bg-[#faf7f5] py-20 md:py-28 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-29 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 md:pb-24 border-b border-[#8E8781]/20">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-cinzel tracking-[0.2em] text-[10px] md:text-xs uppercase text-[#8E8781] font-bold block">
              Atuação Especializada
            </span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-[#4A4540] font-bold leading-tight">
              Orientação Segura em Questões Individuais e Coletivas
            </h2>
            <p className="font-inter text-sm md:text-base text-gray-700 leading-relaxed pt-2">
              Atuação em Direito do Trabalho voltada à orientação segura de
              trabalhadores e empregadores, unindo rigor técnico e atendimento
              humanizado.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end space-y-6 lg:pl-6">
            <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed border-l-2 border-[#8E8781]/40 pl-6 italic">
              "O atendimento é conduzido com análise documental minuciosa,
              identificação de riscos, estudo aprofundado da legislação
              aplicável e definição da estratégia jurídica mais adequada ao caso
              concreto."
            </p>
            <p className="font-inter text-sm text-gray-700 leading-relaxed">
              Nosso objetivo é oferecer suporte técnico de excelência desde a
              <em> fase preventiva</em>, com contratos, políticas internas,
              acordos, rescisões e regularização de rotinas até a{" "}
              <em> fase contenciosa </em>
              com elaboração de peças, acompanhamento processual, audiências,
              recursos e negociação de acordos.
            </p>
          </div>
        </div>

        {/* SEÇÃO DE SERVIÇOS (TABS) */}
        <div className="pt-16 md:pt-24 space-y-12">
          <h2 className="font-cinzel text-xl md:text-5xl text-[#4A4540] font-bold leading-tight text-center">
            Serviços prestados
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <button
              onClick={() => setActiveTab("trabalhadores")}
              className={`font-cinzel text-xs md:text-sm tracking-[0.2em] font-bold py-3 px-8 w-full sm:w-auto transition-all duration-300 border cursor-pointer ${
                activeTab === "trabalhadores"
                  ? "bg-[#8E8781] text-white border-[#8E8781]"
                  : "bg-transparent text-[#8E8781] border-[#8E8781]/40 hover:border-[#8E8781]"
              }`}
            >
              SERVIÇOS PARA TRABALHADORES
            </button>
            <button
              onClick={() => setActiveTab("empresas")}
              className={`font-cinzel text-xs md:text-sm tracking-[0.2em] font-bold py-3 px-8 w-full sm:w-auto transition-all duration-300 border cursor-pointer ${
                activeTab === "empresas"
                  ? "bg-[#8E8781] text-white border-[#8E8781]"
                  : "bg-transparent text-[#8E8781] border-[#8E8781]/40 hover:border-[#8E8781]"
              }`}
            >
              SERVIÇOS PARA EMPRESAS
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentServicos.map((item, i) => (
              <div
                key={`${activeTab}-${i}`}
                className="group bg-[#faf7f5] p-8 md:p-10 border border-[#8E8781]/10 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[260px] relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-[#8E8781]/5 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>

                <div className="relative z-10 space-y-4">
                  <span className="font-cinzel text-[10px] md:text-[11px] text-[#8E8781]/70 tracking-widest block uppercase opacity-60">
                    {activeTab === "trabalhadores"
                      ? "Proteção ao Trabalhador"
                      : "Solução Corporativa"}{" "}
                    — 0{i + 1}
                  </span>
                  <h4 className="font-cinzel text-lg md:text-xl text-[#8E8781] font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {item.t}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {item.d}
                  </p>
                </div>

                <div className="relative z-10 mt-6">
                  <div className="w-12 h-[1px] bg-[#8E8781]/30 group-hover:w-full group-hover:bg-[#8E8781] transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* experiencia/formação */}
      <section className="w-full bg-[#4c4845] py-16 md:py-24 px-4 sm:px-10 md:px-20 text-[#E8E9D4]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="font-cinzel text-[10px] md:text-xs tracking-[0.3em] text-[#969492] font-bold uppercase block">
              Excelência Acadêmica e Profissional
            </span>
            <h2 className="font-cinzel text-xl md:text-3xl font-bold tracking-wider">
              Formação & Experiência
            </h2>
            <div className="w-12 h-[1px] bg-[#8E8781] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {[
              {
                label: "01 / ATUAÇÃO",
                title: "Auditor & Advogado",
                text: "Auditor de Controle Externo do Tribunal de Contas do Estado (TCE/RN) e Advogado atuante.",
              },
              {
                label: "02 / GRADUAÇÃO",
                title: "Direito & Contabilidade",
                text: "Bacharel em Direito e em Ciências Contábeis, integrando a inteligência jurídica à precisão analítica da contabilidade.",
              },
              {
                label: "03 / MESTRADO",
                title: "Direito Constitucional",
                text: "Mestre em Direito Constitucional pela Universidade Federal do Rio Grande do Norte (UFRN).",
              },
              {
                label: "04 / ESPECIALIZAÇÕES",
                title: "Controladoria & Finanças",
                text: "Possui MBA em Controladoria e Finanças, além de especializações em Direito Administrativo e Direito Processual Civil pela UFRN.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#faf7f5]/5 border border-[#8E8781]/20 p-6 md:p-8 flex flex-col justify-between min-h-[180px] transition-all duration-500 hover:border-[#8E8781] hover:bg-[#faf7f5]/10 group animate-fade-in-up"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="space-y-3">
                  <span className="font-cinzel text-[9px] md:text-[10px] text-[#8E8781] tracking-[0.2em] font-bold block">
                    {item.label}
                  </span>
                  <h3 className="font-cinzel text-base md:text-lg font-bold tracking-wide text-white group-hover:text-[#E8E9D4] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-[#E8E9D4]/80 leading-relaxed font-normal">
                    {item.text}
                  </p>
                </div>

                <div className="w-6 h-[1px] bg-[#8E8781]/30 mt-4 group-hover:w-12 group-hover:bg-[#8E8781] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* perguntas frequentes */}
      <section className="w-full bg-[#faf7f5] py-20 md:py-28 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-29 text-black">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="font-cinzel tracking-[0.2em] text-[10px] md:text-xs uppercase text-[#8E8781] font-bold block">
              Esclareça suas dúvidas
            </span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-[#4A4540] font-bold">
              Perguntas Frequentes
            </h2>
            <div className="w-12 h-[1px] bg-[#8E8781]/40 mx-auto mt-4"></div>
          </div>

          <div className="space-y-4 pt-6">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-[#8E8781]/20 pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex justify-between items-center text-left py-4 group cursor-pointer focus:outline-none"
                  >
                    <span className="font-cinzel text-sm md:text-base text-[#4A4540] font-bold tracking-wide group-hover:text-[#8E8781] transition-colors duration-300 pr-4">
                      {faq.q}
                    </span>

                    <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
                      <span className="absolute w-3 h-[1.5px] bg-[#8E8781]"></span>
                      <span
                        className={`absolute w-[1.5px] h-3 bg-[#8E8781] transition-transform duration-300 ${
                          isOpen ? "rotate-90 opacity-0" : ""
                        }`}
                      ></span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-2"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed pl-1 pb-2">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
