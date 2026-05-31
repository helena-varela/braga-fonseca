import hero from "../assets/hero-cristina.png";

export default function CristinaPage() {
  return (
    <main className="bg-[#E8E9D4] w-screen max-w-none m-0 p-0 font-inter text-black overflow-x-hidden">
      {/* hero */}
      <section
        className="w-full h-[95vh] relative flex items-center px-6 sm:px-10 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden group"
        style={{
          backgroundImage: `url(${hero})`,
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-0 animate-pulse-slow"></div>

        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-110 animate-subtle-zoom -z-10"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>

        <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 space-y-7 py-20">
          <span className="font-cinzel tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-[#D3CCC6] font-bold block animate-fade-in-down">
            Direito Administrativo & Previdenciário
          </span>

          <h1 className="font-cinzel text-3xl md:text-6xl text-white leading-[1.2] md:leading-[1.1] animate-fade-in-up">
            Defesa Estratégica para Servidores Públicos
          </h1>

          <p className="font-inter text-base md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Garantindo que a dedicação de uma vida inteira ao serviço público
            seja respeitada e recompensada conforme a lei em Natal e todo o RN.
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
                t: "Progressões Travadas",
                d: "Atuação jurídica estratégica para destravar níveis, classes e letras que a administração pública ignora ou atrasa indevidamente.",
              },
              {
                t: "Cálculo de Aposentadoria",
                d: "Revisão detalhada de tempo de contribuição e regras de transição para garantir que nenhum direito financeiro seja esquecido na sua aposentadoria.",
              },
              {
                t: "Processos Disciplinares",
                d: "Defesa técnica, ética e humanizada em Processos Administrativos Disciplinares (PADs) para proteger sua estabilidade e dignidade funcional.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  group bg-[#faf7f5] p-8 md:p-10 border border-[#8E8781]/10 
                  shadow-sm hover:shadow-2xl flex flex-col justify-between 
                  min-h-[340px] relative overflow-hidden animate-fade-in-up
                `}
              >
                <div className="absolute inset-0 bg-[#8E8781]/5 translate-y-full"></div>
                <div className="relative z-10">
                  <span className="font-cinzel text-[10px] md:text-[12px] text-[#8E8781]/90 tracking-widest block mb-6 uppercase opacity-60">
                    Área de Atuação 0{i + 1}
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
              Agendar Consulta em Natal
            </a>
          </div>
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
                  label: "OAB/RN",
                  text: "Advogada regularmente inscrita na Ordem dos Advogados do Brasil, Seccional Rio Grande do Norte.",
                },
                {
                  label: "ESPECIALISTA",
                  text: "Pós-graduada em Direito Administrativo, com foco em regimes próprios de previdência social e estatutos dos servidores.",
                },
                {
                  label: "EXPERIÊNCIA",
                  text: "Vasta experiência no atendimento a servidores municipais e estaduais do RN, garantindo a aplicação justa das leis vigentes e a proteção da estabilidade funcional.",
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
