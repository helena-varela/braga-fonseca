import hero from "../assets/hero-kelly.png";

export default function KellyPage() {
  return (
    <main className="w-full bg-[#F9F9F4] pt-20">
      {/* hero */}
      <section
        className="w-full h-[95vh] relative flex items-center px-10 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${hero})`,
          borderBottomLeftRadius: "40% 8%",
          borderBottomRightRadius: "50% 8%",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent z-0"></div>
        <div className="relative z-10 w-full flex justify-end">
          <div className="w-full md:w-3/4 lg:w-1/2 space-y-7 text-right flex flex-col items-end">
            <span className="font-cinzel tracking-[0.4em] text-xs uppercase text-[#D3CCC6] font-bold">
              Direito Administrativo & Previdenciário
            </span>

            <h1 className="font-cinzel text-4xl md:text-6xl text-white leading-[1.1]">
              Defesa Estratégica para Servidores Públicos
            </h1>

            <p className="font-inter text-lg md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed">
              Garantindo que a dedicação de uma vida inteira ao serviço público
              seja respeitada e recompensada conforme a lei em Natal e todo o
              RN.
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
        </div>
      </section>

      {/* dores do cliente */}
      <section className="bg-white py-24 px-10 md:px-20 border-y border-[#8E8781]/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-4 font-bold">
              Apoio Especializado em Natal
            </h2>
            <h3 className="font-cinzel text-3xl md:text-4xl text-[#8E8781] mb-6">
              Você não precisa lutar sozinho contra o INSS
            </h3>
            <p className="font-inter text-gray-600 text-lg leading-relaxed">
              Muitas pessoas em Natal e no RN têm o pedido negado por erros na
              organização dos papéis. Meu trabalho é garantir que você não perca
              o que é seu por direito.
            </p>
          </div>

          {/* serviços e soluções */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                t: "Pedido Negado",
                sub: "Recursos e Revisões",
                d: "Se o INSS disse 'não', nós analisamos o motivo do erro e entramos com o recurso para reverter a decisão injusta.",
              },
              {
                t: "Aposentadorias",
                sub: "Planejamento Completo",
                d: "Cuidamos de todo o cálculo e organização do tempo de contribuição para você se aposentar com o melhor valor possível.",
              },
              {
                t: "Auxílio Doença",
                sub: "Segurança Imediata",
                d: "Suporte para quem não pode trabalhar e precisa garantir o benefício por incapacidade com rapidez e segurança financeira.",
              },
              {
                t: "BPC / LOAS",
                sub: "Direito Assistencial",
                d: "Garantimos o benefício para idosos ou pessoas com deficiência que nunca puderam contribuir, mas precisam de amparo.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-10 bg-[#F9F9F4] border-t-2 border-[#8E8781]/20 hover:border-[#8E8781] transition-all duration-500 shadow-sm hover:shadow-md flex flex-col gap-4"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-cinzel text-[#8E8781] font-bold text-xl uppercase">
                    {item.t}
                  </h4>
                  <span className="text-[12px] font-inter font-bold text-[#8E8781]/80 uppercase tracking-widest bg-white px-3 py-1 rounded-full">
                    {item.sub}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#8E8781]/10 group-hover:bg-[#8E8781]/30 transition-all"></div>

                <p className="font-inter text-md text-gray-600 leading-relaxed">
                  {item.d}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[#8E8781] font-cinzel text-[11px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  SOLICITAR AJUDA <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#8E8781] text-center">
            <p className="font-cinzel text-[#E8E9D4] text-sm tracking-[0.2em] uppercase font-bold">
              Atendimento Humanizado para garantir sua dignidade e respeito.
            </p>
          </div>
        </div>
      </section>

      {/* sobre kelly */}
      <section className="bg-[#E8E9D4] py-32 px-10 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8E8781]/5 rounded-full -mr-32 -mt-32"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
          <div className="md:w-3/5 space-y-12">
            <div className="space-y-6">
              <h3 className="font-cinzel text-4xl md:text-5xl text-[#4A4540] leading-tight">
                Uma mão estendida <br /> para garantir seus direitos
              </h3>
              <div className="w-24 h-[3px] bg-[#8E8781]"></div>
            </div>

            <p className="font-inter text-xl text-[#333333] leading-relaxed max-w-2xl">
              Dra. Kelly Fonsêca acredita que o Direito Previdenciário é, acima
              de tudo, um trabalho de humanidade. Com atuação firme em Natal e
              em todo o Rio Grande do Norte, ela se dedica a proteger quem mais
              precisa de amparo.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col gap-3 p-6 bg-white/40 border-l-2 border-[#8E8781]">
                <span className="font-cinzel font-bold text-[#8E8781] text-xs tracking-widest uppercase">
                  Registro
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium">
                  Inscrita na OAB/RN
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 bg-white/40 border-l-2 border-[#8E8781]">
                <span className="font-cinzel font-bold text-[#8E8781] text-xs tracking-widest uppercase">
                  Especialidade
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium">
                  Direito Previdenciário (INSS)
                </p>
              </div>

              <div className="flex flex-col gap-3 p-6 bg-white/40 border-l-2 border-[#8E8781] sm:col-span-2">
                <span className="font-cinzel font-bold text-[#8E8781] text-xs tracking-widest uppercase">
                  Missão
                </span>
                <p className="font-inter text-[#1A1A1A] font-medium">
                  Foco em atendimento humanizado, transparente e focado em
                  resultados reais
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 w-full relative">
            <div className="bg-white p-12 md:p-16 shadow-2xl relative z-10 rounded-sm border border-[#8E8781]/10">
              <span className="absolute top-8 left-8 font-cinzel text-6xl text-[#8E8781]/20">
                "
              </span>

              <p className="font-inter italic text-[#4A4540] text-2xl leading-relaxed relative z-20 text-center md:text-left">
                Meu compromisso é fazer com que você receba o que é seu por
                direito, com respeito e dignidade.
              </p>

              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-[1px] bg-[#8E8781]"></div>
                <span className="font-cinzel text-sm tracking-[0.2em] text-[#8E8781] font-bold">
                  Kelly Fonsêca
                </span>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-[#8E8781] translate-x-4 translate-y-4 z-0"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
