import hero from "../assets/hero-cristina.png";
import heroMobile from "../assets/hero-mobile-cristina.png";
import { useState, useEffect } from "react";

const servicosLicitacoes = [
  {
    t: "Preparação para Vendas Públicas",
    resumo:
      "Diagnóstico completo, regularização cadastral e estruturação interna para empresas que desejam vender ao setor público.",
    subitens: [
      "Diagnóstico de aptidão para licitar.",
      "Análise de documentação societária, fiscal, trabalhista e técnica.",
      "Regularização cadastral e orientação sobre portais de compras públicas.",
      "Revisão de CNAE, objeto social e capacidade operacional.",
      "Estruturação de rotina interna para participação em licitações.",
    ],
  },
  {
    t: "Análise de Editais & Impugnações",
    resumo:
      "Identificação de cláusulas restritivas ou ilegais antes do certame, com pedidos de esclarecimento e impugnações estratégicas.",
    subitens: [
      "Identificação de cláusulas restritivas ou desproporcionais.",
      "Análise de exigências técnicas, fiscais e econômico-financeiras.",
      "Pedidos de esclarecimento junto aos órgãos públicos.",
      "Elaboração de Impugnações ao edital.",
      "Avaliação jurídica de riscos antes da participação no certame.",
    ],
  },
  {
    t: "Acompanhamento de Licitações",
    resumo:
      "Suporte consultivo completo na sessão pública, análise jurídica de concorrentes e estratégias para lances e habilitação.",
    subitens: [
      "Definição da estratégia jurídica de participação.",
      "Análise minuciosa de documentos dos concorrentes.",
      "Acompanhamento em tempo real da sessão pública.",
      "Orientação sobre lances, negociação, habilitação e julgamento.",
      "Atuação em pregões eletrônicos, concorrências, credenciamentos e contratações diretas.",
    ],
  },
  {
    t: "Recursos Administrativos",
    resumo:
      "Peças jurídicas ágeis e técnicas para reverter inabilitações ou desclassificações injustas sofridas no certame.",
    subitens: [
      "Recurso administrativo contra inabilitação da empresa.",
      "Recurso administrativo contra desclassificação de propostas.",
      "Elaboração de Contrarrazões contra recursos de concorrentes.",
      "Memoriais e pedidos de reconsideração estratégicos.",
      "Atuação direta perante agentes de contratação, pregoeiros e comissões.",
    ],
  },
  {
    t: "Reequilíbrio Econômico & Execução",
    resumo:
      "Gestão de riscos contratuais, prorrogações, aditivos e reajustes financeiros para proteger o lucro da sua empresa.",
    subitens: [
      "Pedidos de reajuste, repactuação e revisão (reequilíbrio econômico-financeiro).",
      "Defesa contra glosas administrativas e cobranças indevidas.",
      "Negociação de prorrogações e termos aditivos.",
      "Notificações administrativas preventivas.",
      "Rescisão contratual motivada e gestão de riscos na execução do contrato.",
    ],
  },
  {
    t: "Defesa contra Sanções & Judicialização",
    resumo:
      "Ações judiciais de urgência e defesas contra multas, impedimentos de licitar ou declarações de inidoneidade.",
    subitens: [
      "Defesa contra advertência, multa, impedimento de licitar e inidoneidade.",
      "Produção de provas, sustentação de nulidades e revisão de penalidades.",
      "Mandado de segurança em licitações e medidas liminares urgentes.",
      "Ações anulatórias de atos administrativos ilegais.",
      "Proteção jurídica da continuidade das atividades da empresa.",
    ],
  },
];

export default function CristinaPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <main className="bg-[#E8E9D4] w-screen max-w-none m-0 p-0 font-inter text-black overflow-x-hidden">
      <section
        className="w-full h-[95vh] relative flex items-center px-6 sm:px-10 md:px-20 bg-no-repeat overflow-hidden group"
        style={{
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-110 animate-subtle-zoom z-0"
          style={{
            backgroundImage: `url(${isMobile ? heroMobile : hero})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10 animate-pulse-slow"></div>

        <div className="relative z-20 w-full md:w-3/4 lg:w-1/2 space-y-7 py-20">
          <span className="font-cinzel tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-[#D3CCC6] font-bold block animate-fade-in-down">
            Direito Administrativo & Previdenciário
          </span>

          <h1 className="font-cinzel text-3xl md:text-6xl text-white leading-[1.2] md:leading-[1.1] animate-fade-in-up">
            Defesa Estratégica para Servidores Públicos
          </h1>

          <p className="font-inter text-base md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Garantindo que a dedicação de uma vida inteira ao serviço público
            seja respeitada e recompensada conforme a lei em Natal e todo o Rio
            Grande do Norte.
          </p>

          <div className="flex pt-4 animate-fade-in-up [animation-delay:400ms]">
            <a
              href="https://wa.me/5584991053771"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full md:w-auto bg-[#D3CCC6] text-[#736e69] px-10 md:px-12 py-5 font-cinzel text-xs tracking-[0.3em] font-bold transition-all shadow-2xl rounded-sm hover:bg-white hover:text-[#8E8781] hover:scale-105 active:scale-95 text-center"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] group-hover:left-full transition-all duration-1000"></span>
              <span className="relative z-10">SOLICITAR CONSULTORIA</span>
            </a>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes subtleZoom {
              from { transform: scale(1.1); }
              to { transform: scale(1); }
            }
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-subtle-zoom { animation: subtleZoom 5s ease-out forwards; }
            .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
            .animate-fade-in-up { opacity: 0; animation: fadeInUp 1s ease-out forwards; }
            .animate-pulse-slow { animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          `,
          }}
        />
      </section>

      {/* serviços */}
      <section className="bg-[#E8E9D4]/30 py-20 px-6 sm:px-10 md:px-20 border-y border-[#8E8781]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* CABEÇALHO COM FADE-IN */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 animate-fade-in">
            <h2 className="font-cinzel text-[10px] md:text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-4 font-bold">
              Serviços Especializados
            </h2>
            <h3 className="font-cinzel text-3xl md:text-4xl text-[#8E8781] mb-6 leading-tight">
              Sua carreira merece segurança jurídica
            </h3>
            <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed">
              Muitos servidores enfrentam injustiças administrativas por falta
              de orientação técnica. Identificamos e corrigimos erros que afetam
              sua vida financeira.
            </p>
          </div>

          {/* GRID DE CARDS COM REVELAÇÃO ESCALONADA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                t: "Carreira & Evolução Funcional",
                d: "Ações para destravar promoções, progressões atrasadas e garantia de gratificações de função devidas pela administração pública.",
              },
              {
                t: "Direitos, Licenças & PCD",
                d: "Garantia de licenças-prêmio, licença qualificação, além de pedidos estratégicos de redução de carga horária para servidores PCD.",
              },
              {
                t: "Defesa em Processos e PAD",
                d: "Atuação técnica e humanizada em Processos Administrativos Disciplinares (PAD), sindicâncias e proteção contra remoções ou transferências arbitrárias.",
              },
              {
                t: "Concursos Públicos",
                d: "Intervenção jurídica especializada em fraudes, preterição de vagas em certames e defesas junto a bancas de heteroidentificação.",
              },
              {
                t: "Cobranças & Retroativos",
                d: "Ações de cobrança para recebimento de valores retroativos acumulados e indenizações financeiras por licenças-prêmio não gozadas.",
              },
              {
                t: "Aposentadoria & Pensão",
                d: "Planejamento previdenciário, revisões de pensão por morte e pedidos de indenização por demora injustificada na concessão da aposentadoria.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  group bg-[#faf7f5] p-8 md:p-10 border border-[#8E8781]/10 
                  shadow-sm hover:shadow-2xl flex flex-col justify-between 
                  min-h-[340px] relative overflow-hidden animate-fade-in-up
                `}
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="absolute inset-0 bg-[#8E8781]/5 translate-y-full"></div>
                <div className="relative z-10">
                  <span className="font-cinzel text-[10px] md:text-[12px] text-[#8E8781]/90 tracking-widest block mb-6 uppercase opacity-60">
                    Área de Atuação {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <h4 className="font-cinzel text-lg md:text-xl text-[#8E8781] mb-4 font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {item.t}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {item.d}
                  </p>
                </div>

                <div className="relative z-10 mt-8">
                  <div className="w-12 h-[1px] bg-[#8E8781]/30 group-hover:w-full group-hover:bg-[#8E8781] transition-all duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#faf7f5] py-20 md:py-28 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-29 text-black relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Cabeçalho */}
          <div className="text-center space-y-3">
            <span className="font-cinzel tracking-[0.2em] text-[10px] md:text-xs uppercase text-[#8E8781] font-bold block">
              Atuação Corporativa Avançada
            </span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-[#4A4540] font-bold">
              Licitações e Contratos Públicos
            </h2>
            <p className="font-inter text-xs md:text-sm text-gray-600 max-w-lg mx-auto">
              Clique sobre o card de interesse para conferir o detalhamento da
              nossa assessoria jurídica.
            </p>
            <div className="w-12 h-[1px] bg-[#8E8781]/40 mx-auto mt-4"></div>
          </div>

          {/* Grid de Cards - 3 Colunas Perfeitas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {servicosLicitacoes.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveModal(item)}
                className="group bg-white p-8 md:p-10 border border-[#8E8781]/10 shadow-sm hover:shadow-2xl flex flex-col justify-between min-h-[300px] relative overflow-hidden animate-fade-in-up cursor-pointer transition-all duration-500"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-[#8E8781]/5 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>

                <div className="relative z-10 space-y-4">
                  <span className="font-cinzel text-[10px] md:text-[11px] text-[#8E8781]/70 tracking-widest block uppercase opacity-60">
                    Soluções para Empresas — 0{i + 1}
                  </span>
                  <h4 className="font-cinzel text-base md:text-lg text-[#8E8781] font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {item.t}
                  </h4>
                  <p className="font-inter text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.resumo}
                  </p>
                </div>

                {/* Botão de clique sutil */}
                <div className="relative z-10 mt-6 flex justify-between items-center">
                  <span className="font-cinzel text-[10px] text-[#8E8781] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Ver detalhamento →
                  </span>
                  <div className="w-12 h-[1px] bg-[#8E8781]/30 group-hover:w-20 group-hover:bg-[#8E8781] transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* POP-UP MODAL*/}
        {activeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#4A4540] border border-[#8E8781]/30 max-w-xl w-full p-8 md:p-10 text-[#E8E9D4] relative shadow-2xl rounded-sm scale-100 transition-transform duration-300">
              <div className="space-y-2 mb-6">
                <span className="font-cinzel text-[9px] text-[#8E8781] tracking-[0.2em] uppercase font-bold block">
                  Escopo de Atuação Detalhado
                </span>
                <h3 className="font-cinzel text-xl md:text-2xl text-white font-bold tracking-wide pr-6">
                  {activeModal.t}
                </h3>
                <div className="w-12 h-[1px] bg-[#8E8781]"></div>
              </div>

              <ul className="space-y-4 font-inter text-xs md:text-sm text-[#E8E9D4]/90 leading-relaxed">
                {activeModal.subitens.map((subitem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#8E8781] mt-0.5 shrink-0">◆</span>
                    <span>{subitem}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4 border-t border-[#8E8781]/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="font-cinzel text-xs tracking-widest text-[#E8E9D4]/70 hover:text-white border border-[#8E8781]/40 hover:border-[#8E8781] px-5 py-2 cursor-pointer transition-all duration-300"
                >
                  FECHAR DETALHES
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-16 md:mt-20 text-center animate-fade-in [animation-delay:800ms]">
          <p className="font-inter text-sm text-[#8E8781] mb-8 italic opacity-80">
            "Justiça para quem dedica a vida ao serviço público."
          </p>
          <a
            href="https://wa.me/5584991053771"
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-block text-center w-full md:w-auto 
                font-cinzel text-[13px] md:text-[15px] 
                tracking-[0.2em] border border-[#8E8781] 
                text-[#8E8781] px-10 md:px-16 py-4 md:py-5
                hover:bg-[#8E8781] hover:text-white 
                hover:shadow-xl active:scale-95
                transition-all duration-500 uppercase font-bold
              "
          >
            Agendar Consulta
          </a>
        </div>
      </section>

      {/* formação */}
      <section className="bg-[#D3CCC6] py-24 md:py-32 px-6 sm:px-10 md:px-20 border-t border-[#8E8781]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-4 space-y-8 md:sticky md:top-32 animate-fade-in-left">
            <div className="space-y-4">
              <h3 className="font-cinzel text-3xl md:text-5xl text-[#4A4540] leading-[1.1]">
                Autoridade <br /> & Ética
              </h3>
              <div className="w-16 h-[3px] bg-[#8E8781] transition-all duration-1000 hover:w-32"></div>
            </div>
            <p className="font-inter text-lg text-[#333333] leading-relaxed italic pr-4 border-l-2 border-[#8E8781]/20 pl-4">
              "A ética é o pilar que sustenta cada processo que conduzimos aqui
              no escritório."
            </p>
          </div>

          <div className="md:col-span-8 space-y-12">
            <div className="bg-[#F4F4F0] p-8 md:p-14 border-l-4 border-[#8E8781] shadow-lg relative group overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8E8781]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h4 className="font-cinzel text-[10px] md:text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-6 font-bold relative z-10">
                Ênfase de Atuação
              </h4>
              <p className="font-cinzel text-xl md:text-2xl text-[#2D2A26] leading-relaxed tracking-tight relative z-10">
                Defesa técnica e especializada dos direitos de servidores
                públicos{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">
                    ativos, aposentados e pensionistas
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8E8781]/40 group-hover:h-[2px] group-hover:bg-[#8E8781] transition-all duration-500"></span>
                </span>{" "}
                do Rio Grande do Norte.
              </p>
            </div>

            <div className="grid gap-10 pt-4">
              {[
                {
                  label: "FORMAÇÃO",
                  text: "Mestre em Direito pela UFRN, especialista em Direito Administrativo com foco em servidores públicos.",
                },
                {
                  label: "OAB & INSTITUTO",
                  text: "Presidente da Comissão de Direito Administrativo da OAB/RN e vice-presidente do Instituto de Direito Administrativo Seabra Fagundes.",
                },
                {
                  label: "ATUAÇÃO SINDICAL",
                  text: "Atuou durante quase uma década como assessora jurídica do sindicato de servidores em educação pública do Rio Grande do Norte (SINTE/RN) na defesa dos servidores públicos da educação.",
                },
                {
                  label: "EXPERIÊNCIA",
                  text: "Há treze anos atuando na defesa das mais diversas carreiras dos servidores públicos de Natal e do Estado do Rio Grande do Norte, como educação, saúde e segurança pública.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b border-[#8E8781]/30 group/item animate-fade-in-up"
                  style={{ animationDelay: `${(i + 1) * 200}ms` }}
                >
                  <span className="font-cinzel font-bold text-[#4A4540] text-[10px] md:text-xs tracking-[0.3em] w-32 shrink-0 group-hover/item:text-[#8E8781] transition-colors duration-500">
                    {item.label}
                  </span>
                  <p className="font-inter text-[#1A1A1A] font-medium leading-relaxed max-w-xl group-hover/item:translate-x-2 transition-transform duration-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes fadeInLeft {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
            .animate-fade-in-up { opacity: 0; animation: fadeInUp 1s ease-out forwards; }
          `,
          }}
        />
      </section>
    </main>
  );
}
