import hero from "../assets/hero-cristina.png";

export default function CristinaPage() {
  return (
    <main className="w-full pt-25">
      {/* hero */}
      <section
        className="w-full h-[95vh] relative flex items-center px-10 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-0"></div>
        <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 space-y-7">
          <span className="font-cinzel tracking-[0.4em] text-xs uppercase text-[#D3CCC6] font-bold">
            Direito Administrativo & Previdenciário
          </span>

          <h1 className="font-cinzel text-4xl md:text-6xl text-white leading-[1.1]">
            Defesa Estratégica para Servidores Públicos
          </h1>

          <p className="font-inter text-lg md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed">
            Garantindo que a dedicação de uma vida inteira ao serviço público
            seja respeitada e recompensada conforme a lei em Natal e todo o RN.
          </p>

          <div className="flex pt-4">
            <a
              href="https://wa.me/5584991053771"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D3CCC6] text-[#736e69] px-12 py-5 font-cinzel text-xs tracking-[0.3em] font-bold hover:bg-white transition-all shadow-2xl rounded-sm"
            >
              SOLICITAR CONSULTORIA
            </a>
          </div>
        </div>
      </section>

      {/* serviços */}
      <section className="bg-[#E8E9D4]/30 py-20 px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-4">
              Serviços Especializados
            </h2>
            <h3 className="font-cinzel text-3xl md:text-4xl text-[#8E8781] mb-6">
              Sua carreira merece segurança jurídica
            </h3>
            <p className="font-inter text-gray-600 text-lg leading-relaxed">
              Muitos servidores enfrentam injustiças administrativas por falta
              de orientação técnica. Identificamos e corrigimos erros que afetam
              sua vida financeira.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="group bg-[#faf7f5] p-10 border border-[#8E8781]/10 hover:border-[#8E8781] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <span className="font-cinzel text-[12px] text-[#8E8781]/90 tracking-widest block mb-6 uppercase">
                    Área de Atuação 0{i + 1}
                  </span>
                  <h4 className="font-cinzel text-xl text-[#8E8781] mb-4 font-bold  group-hover:tracking-wider transition-all">
                    {item.t}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {item.d}
                  </p>
                </div>
                <div className="w-12 h-[1px] bg-[#8E8781]/20 group-hover:w-full group-hover:bg-[#8E8781] transition-all duration-700 mt-8"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-inter text-sm text-[#8E8781] mb-8 italic">
              "Justiça para quem dedica a vida ao serviço público."
            </p>
            <a
              href="https://wa.me/5584991053771"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block text-center w-full md:w-auto 
                font-cinzel text-[13px] md:text-[15px] 
                tracking-[0.1em] md:tracking-[0.2em] 
                border border-[#8E8781] text-[#8E8781] 
                px-6 md:px-12 py-4 
                hover:bg-[#8E8781] hover:text-white 
                transition-all uppercase font-bold
              "
            >
              Agendar Consulta em Natal
            </a>
          </div>
        </div>
      </section>

      {/* formação */}
      <section className="bg-[#D3CCC6] py-32 px-10 md:px-20 border-t border-[#8E8781]/20">
        <div className="max-w-none w-full grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4 space-y-8 sticky top-32">
            <div className="space-y-4">
              <h3 className="font-cinzel text-4xl md:text-5xl text-[#4A4540] leading-[1.1]">
                Autoridade <br /> & Ética
              </h3>
              <div className="w-16 h-[3px] bg-[#8E8781]"></div>
            </div>
            <p className="font-inter text-lg text-[#333333] leading-relaxed italic pr-4">
              "A ética é o pilar que sustenta cada processo que conduzimos aqui
              no escritório."
            </p>
          </div>

          <div className="md:col-span-8 space-y-12">
            <div className="bg-[#F4F4F0] p-10 md:p-14 border-l-4 border-[#8E8781] shadow-lg">
              <h4 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-6 font-bold">
                Ênfase de Atuação
              </h4>
              <p className="font-cinzel text-xl md:text-2xl text-[#2D2A26] leading-relaxed tracking-tight">
                Defesa técnica e especializada dos direitos de servidores
                públicos{" "}
                <span className="border-b border-[#8E8781]">
                  ativos, aposentados e pensionistas
                </span>{" "}
                do Rio Grande do Norte.
              </p>
            </div>

            <div className="grid gap-10 pt-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b border-[#8E8781]/30">
                <span className="font-cinzel font-bold text-[#4A4540] text-xs tracking-[0.3em] w-32 shrink-0">
                  OAB/RN
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium leading-relaxed max-w-xl">
                  Advogada regularmente inscrita na Ordem dos Advogados do
                  Brasil, Seccional Rio Grande do Norte.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b border-[#8E8781]/30">
                <span className="font-cinzel font-bold text-[#4A4540] text-xs tracking-[0.3em] w-32 shrink-0">
                  ESPECIALISTA
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium leading-relaxed max-w-xl">
                  Pós-graduada em Direito Administrativo, com foco em regimes
                  próprios de previdência social e estatutos dos servidores.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <span className="font-cinzel font-bold text-[#4A4540] text-xs tracking-[0.3em] w-32 shrink-0">
                  EXPERIÊNCIA
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium leading-relaxed max-w-xl">
                  Vasta experiência no atendimento a servidores municipais e
                  estaduais do RN, garantindo a aplicação justa das leis
                  vigentes e a proteção da estabilidade funcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
