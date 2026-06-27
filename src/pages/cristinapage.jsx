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

const servicos = [
  {
    t: "Execução contratual e reequilíbrio econômico-financeiro",
    resumo:
      "A lei garante o direito à manutenção do equilíbrio econômico-financeiro dos contratos. Nossa equipe atua para que a sua empresa receba exatamente o valor justo pelo serviço prestado ou produto entregue, evitando prejuízos e garantindo a saúde financeira do negócio.",
    subitens: [
      "Pedidos de reajuste, repactuação e revisão.",
      "Defesa contra glosas e cobranças indevidas.",
      "Prorrogações e aditivos.",
      "Notificações administrativas.",
      "Rescisão contratual e gestão de riscos na execução.",
    ],
  },
  {
    t: "Defesa em Ação de Improbidade Administrativa",
    resumo:
      "Proteção estratégica para gestores e empresas contra acusações de irregularidades na gestão pública. Atuamos na blindagem patrimonial e na anulação de processos sem provas.",
    subitens: [
      "Desbloqueio de bens: Medidas urgentes para liberar contas e garantir o fluxo de caixa.",
      "Demonstração de boa-fé: Teses focadas na ausência de dolo (intenção) para extinguir a ação.",
      "Produção de provas: Auditoria e perícia técnica de contratos e prestação de contas.",
      "Acordos estratégicos: Negociação de Acordos de Não Persecução Cível (ANPC) vantajosos.",
    ],
  },
  {
    t: "Aposentadoria & Pensão",
    resumo:
      "Planejamento previdenciário, revisões de pensão por morte e pedidos de indenização por demora injustificada na concessão da aposentadoria.",
    subitens: [
      "Planejamento previdenciário: Cálculo do melhor momento e valor para se aposentar.",
      "Aposentadoria por idade ou tempo: Concessão do benefício pelas regras mais vantajosas.",
      "Pensão por morte: Amparo e liberação do benefício para os dependentes.",
      "Benefícios por incapacidade: Defesa em casos de invalidez ou auxílio-doença negados.",
      "Revisão de aposentadoria: Teses para aumentar o valor do benefício já pago.",
      "Regime de servidores públicos: Regras específicas para funcionários de carreira.",
    ],
  },
  {
    t: "Cobranças & Retroativos",
    resumo:
      "Ações de cobrança para recebimento de valores retroativos acumulados e indenizações financeiras por licenças-prêmio não gozadas.",
    subitens: [
      "Cobrança de atrasados: Recebimento de valores que o INSS deixou de pagar desde o pedido inicial.",
      "Ações de cobrança: Recuperação de retroativos devidos a servidores públicos e pensionistas.",
      "Execução de sentenças: Agilidade no cálculo e liberação de precatórios e RPVs.",
      "Revisões com efeitos retroativos: Diferenças salariais ou de benefícios pagas com correção e juros.",
    ],
  },
  {
    t: "Concursos Públicos",
    resumo:
      "Intervenção jurídica especializada em fraudes, preterição de vagas em certames e defesas junto a bancas de heteroidentificação.",
    subitens: [
      "Anulação de questões: Recurso contra gabaritos e critérios de correção ilegais.",
      "Investigação social e exames: Defesa contra reprovações injustas no TAF, psicotécnico ou exames médicos.",
      "Nomeação de aprovados: Ações para garantir a posse de classificados dentro das vagas ou por preterição.",
      "Cotas e heteroidentificação: Reversão de exclusões indevidas em vagas reservadas (PCD e negros).",
      "Exigências abusivas de edital: Combate a requisitos desproporcionais de idade, altura ou títulos.",
    ],
  },
  {
    t: "Defesa em Processos e PAD",
    resumo:
      "Atuação técnica e humanizada em Processos Administrativos Disciplinares (PAD), sindicâncias e proteção contra remoções ou transferências arbitrárias.",
    subitens: [
      "Defesa em PAD e sindicância: Proteção contra demissão, suspensão ou advertência de servidores.",
      "Afastamento preventivo: Medidas para reverter suspensões e garantir o retorno ao cargo.",
      "Nulidades processuais: Identificação de falhas legais, cerceamento de defesa ou prescrição.",
      "Sustentação oral e recursos: Defesa presencial e recursos contra decisões sancionatórias.",
      "Ações de reintegração: Recursos judiciais para recuperar o cargo e receber salários atrasados.",
    ],
  },
  {
    t: "Direitos, Licenças & PCD",
    resumo:
      "Garantia de licenças-prêmio, licença qualificação, além de pedidos estratégicos de redução de carga horária para servidores PCD.",
    subitens: [
      "Licenças de servidores: Garantia de licença-prêmio, capacitação, interesse particular ou saúde.",
      "Vagas e cotas PCD: Defesa em reprovações de exames médicos e fraudes em concursos.",
      "Isenções fiscais: Processos para compra de veículos com isenção de IPI, ICMS e IPVA.",
      "Redução de jornada: Horário especial para servidores com filhos ou dependentes PCD.",
      "Aposentadoria da pessoa com deficiência: Concessão com critérios diferenciados e tempo reduzido.",
    ],
  },
  {
    t: "Carreira & Evolução Funcional",
    resumo:
      "Ações para destravar promoções, progressões atrasadas e garantia de gratificações de função devidas pela administração pública.",
    subitens: [
      "Progressões e promoções: Garantia de mudança de nível e classe atrasadas ou negadas.",
      "Incorporação de gratificações: Inclusão de adicionais e bônus no salário-base de forma definitiva.",
      "Desvio de função: Cobrança de diferenças salariais por exercer cargo superior ao de contratação.",
      "Conversão de licença em pecúnia: Recebimento em dinheiro de licenças-prêmio não gozadas na ativa.",
      "Revisão de quintos e décimos: Defesa do direito adquirido sobre vantagens de funções de confiança.",
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

          <h1 className="font-cinzel text-xl md:text-5xl text-white leading-[1.2] md:leading-[1.1] animate-fade-in-up">
            Defesa em Improbidade Administrativa e Crimes Contra a Administração
            Pública
          </h1>

          <p className="font-inter text-base md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Atuação especializada na defesa de agentes públicos, empresas e
            particulares perante órgãos de controle, Ministério Público e Poder
            Judiciário.
          </p>

          <div className="flex pt-4 animate-fade-in-up [animation-delay:400ms]">
            <a
              href="https://wa.me/5584991053771"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full md:w-auto bg-[#D3CCC6] text-[#736e69] px-10 md:px-12 py-5 font-cinzel text-xs tracking-[0.3em] font-bold transition-all shadow-2xl rounded-sm hover:bg-white hover:text-[#8E8781] hover:scale-105 active:scale-95 text-center"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] group-hover:left-full transition-all duration-1000"></span>
              <span className="relative z-10">AGENDAR ANÁLISE DO CASO</span>
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
      <section className="w-full g-[#E8E9D4]/30 py-20 md:py-28 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-29 text-black relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Cabeçalho */}
          <div className="text-center space-y-3">
            <span className="font-cinzel tracking-[0.2em] text-[10px] md:text-xs uppercase text-[#8E8781] font-bold block">
              Soluções Jurídicas Estratégicas
            </span>
            <h2 className="font-cinzel text-2xl md:text-4xl text-[#4A4540] font-bold">
              Direito Administrativo & Público
            </h2>
            <p className="font-inter text-xs md:text-sm text-gray-600 max-w-lg mx-auto">
              Clique sobre o card de interesse para conferir o detalhamento da
              nossa assessoria jurídica.
            </p>
            <div className="w-12 h-[1px] bg-[#8E8781]/40 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-8 pt-6 max-w-6xl mx-auto">
            {servicos.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveModal(item)}
                className="group bg-white p-8 md:p-10 border border-[#8E8781]/40 shadow-sm hover:shadow-2xl flex flex-col justify-between min-h-[400px] w-full md:w-[calc(33.333%-1.34rem)] relative overflow-hidden animate-fade-in-up cursor-pointer transition-all duration-500"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-[#8E8781]/5 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>

                <div className="relative z-10 space-y-4">
                  <span className="font-cinzel text-[10px] md:text-[11px] text-[#8E8781] tracking-widest block uppercase opacity-60">
                    Soluções — 0{i + 1}
                  </span>
                  <h4 className="font-cinzel text-base md:text-lg text-[#8E8781] font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {item.t}
                  </h4>
                  <p className="font-inter text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.resumo}
                  </p>
                </div>

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
