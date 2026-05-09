import hero from "../assets/hero-kelly.png";

export default function KellyPage() {
  return (
    <main className="w-full bg-[#F9F9F4] pt-20">
      {/* hero */}
      <section
        className="w-full h-[95vh] relative flex items-center px-6 sm:px-10 md:px-20 bg-cover bg-center bg-no-repeat overflow-hidden group"
        style={{
          backgroundImage: `url(${hero})`,
          borderBottomLeftRadius: window.innerWidth > 768 ? "40% 12%" : "60px",
          borderBottomRightRadius: window.innerWidth > 768 ? "50% 12%" : "60px",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns -z-10"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-0 animate-pulse-slow"></div>
        <div className="relative z-10 w-full flex justify-end">
          <div className="w-full md:w-3/4 lg:w-1/2 space-y-7 text-right flex flex-col items-end py-20">
            <span className="font-cinzel tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs uppercase text-[#D3CCC6] font-bold block animate-fade-in-right">
              Direito Administrativo & Previdenciário
            </span>

            <h1 className="font-cinzel text-3xl md:text-6xl text-white leading-[1.2] md:leading-[1.1] animate-fade-in-right [animation-delay:200ms]">
              Defesa Estratégica para Servidores Públicos
            </h1>

            <p className="font-inter text-base md:text-xl text-[#E8E9D4]/90 max-w-xl leading-relaxed animate-fade-in-right [animation-delay:400ms]">
              Garantindo que a dedicação de uma vida inteira ao serviço público
              seja respeitada e recompensada conforme a lei em Natal e todo o
              RN.
            </p>
            <div className="flex pt-4 w-full md:w-auto justify-end animate-fade-in-right [animation-delay:600ms]">
              <a
                href="https://wa.me/5584991053771"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative overflow-hidden w-full md:w-auto 
                  bg-[#D3CCC6] text-[#736e69] 
                  px-4 md:px-12 py-5 
                  font-cinzel text-[11px] md:text-xs 
                  tracking-[0.15em] md:tracking-[0.3em] 
                  font-bold transition-all shadow-2xl rounded-sm 
                  hover:bg-white hover:scale-105 active:scale-95 
                  group/btn text-center whitespace-nowrap
                "
              >
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover/btn:left-full transition-all duration-1000"></span>

                <span className="relative z-10 group-hover/btn:tracking-[0.4em] transition-all duration-500">
                  SOLICITAR CONSULTORIA
                </span>
              </a>
            </div>
          </div>
        </div>
        =
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes kenBurns {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
              }
              @keyframes fadeInRight {
                from { opacity: 0; transform: translateX(40px); }
                to { opacity: 1; transform: translateX(0); }
              }
              @keyframes pulseSlow {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
              }
              .animate-ken-burns { animation: kenBurns 15s ease-out infinite alternate; }
              .animate-fade-in-right { opacity: 0; animation: fadeInRight 1s ease-out forwards; }
              .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
            `,
          }}
        />
      </section>

      {/* dores do cliente */}
      <section className="bg-white py-16 md:py-24 px-6 sm:px-10 md:px-20 border-y border-[#8E8781]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 animate-fade-in">
            <h2 className="font-cinzel text-[10px] md:text-xs tracking-[0.4em] text-[#8E8781] uppercase mb-4 font-bold opacity-70">
              Apoio Especializado em Natal
            </h2>
            <h3 className="font-cinzel text-2xl md:text-4xl text-[#8E8781] mb-6 leading-tight">
              Você não precisa lutar sozinho contra o INSS
            </h3>
            <p className="font-inter text-gray-600 text-base md:text-lg leading-relaxed">
              Muitas pessoas em Natal e no RN têm o pedido negado por erros na
              organização dos papéis. Meu trabalho é garantir que você não perca
              o que é seu por direito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                t: "Pedido Negado",
                sub: "Recursos",
                d: "Se o INSS disse 'não', nós analisamos o motivo do erro e entramos com o recurso para reverter a decisão injusta.",
              },
              {
                t: "Aposentadorias",
                sub: "Planejamento",
                d: "Cuidamos de todo o cálculo e organização do tempo de contribuição para você se aposentar com o melhor valor possível.",
              },
              {
                t: "Auxílio Doença",
                sub: "Incapacidade",
                d: "Suporte para quem não pode trabalhar e precisa garantir o benefício por incapacidade com rapidez e segurança financeira.",
              },
              {
                t: "BPC / LOAS",
                sub: "Assistencial",
                d: "Garantimos o benefício para idosos ou pessoas com deficiência que nunca puderam contribuir, mas precisam de amparo.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  group p-6 md:p-10 bg-[#F9F9F4] border-t-2 border-[#8E8781]/20 
                  hover:border-[#8E8781] transition-all duration-700 
                  hover:shadow-2xl hover:-translate-y-2 flex flex-col gap-4
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                  <h4 className="font-cinzel text-[#8E8781] font-bold text-lg md:text-xl uppercase leading-none group-hover:tracking-wider transition-all duration-500">
                    {item.t}
                  </h4>
                  <span className="text-[10px] font-inter font-bold text-[#8E8781] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#8E8781]/10 group-hover:bg-[#8E8781] group-hover:text-white transition-colors duration-500">
                    {item.sub}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#8E8781]/10 group-hover:bg-[#8E8781]/40 transition-all duration-700"></div>

                <p className="font-inter text-sm md:text-md text-gray-600 leading-relaxed">
                  {item.d}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[#8E8781] font-cinzel text-[11px] font-bold tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-x-[-10px] md:group-hover:translate-x-0">
                  SOLICITAR AJUDA{" "}
                  <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-[#8E8781] text-center shadow-lg animate-fade-in [animation-delay:800ms]">
            <p className="font-cinzel text-[#E8E9D4] text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase font-bold leading-relaxed">
              Atendimento Humanizado para garantir sua dignidade e respeito.
            </p>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
            .animate-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
          `,
          }}
        />
      </section>

      {/* sobre kelly */}
      <section className="bg-[#E8E9D4] py-24 md:py-32 px-6 sm:px-10 md:px-20 relative overflow-hidden">
        {/* ELEMENTO DECORATIVO ANIMADO */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8E8781]/10 rounded-full -mr-32 -mt-32 animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 items-start">
          {/* COLUNA DE TEXTO COM ENTRADA ESCALONADA */}
          <div className="md:w-3/5 space-y-12 animate-fade-in-left">
            <div className="space-y-6">
              <h3 className="font-cinzel text-3xl md:text-5xl text-[#4A4540] leading-tight">
                Uma mão estendida <br /> para garantir seus direitos
              </h3>
              <div className="w-24 h-[3px] bg-[#8E8781] transition-all duration-1000 hover:w-48"></div>
            </div>

            <p className="font-inter text-lg md:text-xl text-[#333333] leading-relaxed max-w-2xl">
              Dra. Kelly Fonsêca acredita que o Direito Previdenciário é, acima
              de tudo, um trabalho de humanidade. Com atuação firme em Natal e
              em todo o Rio Grande do Norte, ela se dedica a proteger quem mais
              precisa de amparo.
            </p>

            {/* CARDS DE INFO COM HOVER DE ELEVAÇÃO */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 pt-4">
              {[
                { label: "Registro", text: "Inscrita na OAB/RN" },
                {
                  label: "Especialidade",
                  text: "Direito Previdenciário (INSS)",
                },
                {
                  label: "Missão",
                  text: "Foco em atendimento humanizado, transparente e focado em resultados reais",
                  full: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`
              flex flex-col gap-3 p-6 bg-white/40 border-l-2 border-[#8E8781] 
              transition-all duration-500 hover:bg-white/80 hover:shadow-xl 
              hover:-translate-y-1 group animate-fade-in-up
              ${item.full ? "sm:col-span-2" : ""}
            `}
                  style={{ animationDelay: `${(i + 1) * 200}ms` }}
                >
                  <span className="font-cinzel font-bold text-[#8E8781] text-[10px] md:text-xs tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                  <p className="font-inter text-[#1A1A1A] font-medium group-hover:text-[#8E8781] transition-colors">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* COLUNA DO CARD COM EFEITO DE FLUTUAÇÃO */}
          <div className="md:w-2/5 w-full relative group animate-fade-in-right">
            <div className="bg-white p-10 md:p-16 shadow-2xl relative z-10 rounded-sm border border-[#8E8781]/10 animate-float">
              <span className="absolute top-8 left-8 font-cinzel text-6xl text-[#8E8781]/20 select-none">
                "
              </span>

              <p className="font-inter italic text-[#4A4540] text-xl md:text-2xl leading-relaxed relative z-20 text-center md:text-left">
                Meu compromisso é fazer com que você receba o que é seu por
                direito, com respeito e dignidade.
              </p>

              <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                <div className="w-10 h-[1px] bg-[#8E8781] group-hover:w-16 transition-all duration-700"></div>
                <span className="font-cinzel text-sm tracking-[0.2em] text-[#8E8781] font-bold">
                  Kelly Fonsêca
                </span>
              </div>
            </div>

            {/* MOLDURA DECORATIVA QUE REAGE AO HOVER */}
            <div className="absolute inset-0 border-2 border-[#8E8781] translate-x-4 translate-y-4 z-0 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
          </div>
        </div>

        {/* DEFINIÇÕES DE ANIMAÇÃO */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.2; transform: scale(1.1); }
    }
    .animate-fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
    .animate-fade-in-right { animation: fadeInRight 1s ease-out forwards; }
    .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
    .animate-float { animation: float 6s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
  `,
          }}
        />
      </section>
    </main>
  );
}
