export default function CristinaPage() {
  return (
    <main className="w-full bg-[#E8E9D4] pt-32">
      {/* SEÇÃO 1: HERO DA ADVOGADA */}
      <section className="px-10 md:px-20 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase">
            Especialista em Direito Administrativo
          </h2>
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#8E8781] leading-tight">
            Defesa Estratégica para Servidores Públicos
          </h1>
          <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-xl">
            Garantindo que a dedicação de uma vida inteira ao serviço público seja respeitada e recompensada conforme a lei.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/5584991053771" 
              target="_blank" 
              className="bg-[#8E8781] text-white px-10 py-4 font-cinzel text-xs tracking-widest hover:bg-black transition-all shadow-xl"
            >
              SOLICITAR CONSULTORIA
            </a>
          </div>
        </div>
        
        {/* ARCO DE IMAGEM */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-t-full border border-[#8E8781]/20">
           <div className="w-full h-full bg-[#D3CCC6]/30 flex items-center justify-center font-cinzel italic text-[#8E8781]">
             [Foto Dra. Cristina Braga]
           </div>
        </div>
      </section>

      {/* SEÇÃO 2: DORES DO CLIENTE (O QUE RESOLVEMOS) */}
      <section className="bg-white py-24 px-10 md:px-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="font-cinzel text-3xl text-[#8E8781] mb-6">Sua carreira merece segurança jurídica</h3>
          <p className="font-inter text-gray-600">Muitos servidores enfrentam injustiças administrativas por falta de orientação técnica. Identificamos e corrigimos erros que afetam sua vida financeira.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Progressões Travadas", d: "Atuação para destravar níveis e classes que a administração pública ignora." },
            { t: "Cálculo de Aposentadoria", d: "Revisão detalhada para garantir que nenhum direito seja esquecido na transição." },
            { t: "Processos Disciplinares", d: "Defesa técnica e humanizada em PADs para proteger sua estabilidade." }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-[#8E8781]/10 hover:border-[#8E8781]/40 transition-all">
              <h4 className="font-cinzel text-[#8E8781] mb-4 font-bold">{item.t}</h4>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 3: FORMAÇÃO E TRAJETÓRIA */}
      <section className="bg-[#D3CCC6] py-24 px-10 md:px-20">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h3 className="font-cinzel text-4xl text-[#8E8781] leading-tight">Formação & Autoridade</h3>
            <div className="w-20 h-1 bg-[#8E8781] mt-6"></div>
          </div>
          
          <div className="md:w-2/3 space-y-8 font-inter text-gray-800">
            <p className="text-xl leading-relaxed italic">
              "A ética é o pilar que sustenta cada processo que conduzimos aqui no escritório."
            </p>
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <span className="font-cinzel font-bold text-[#8E8781]">OAB/RN</span>
                <p>Advogada regularmente inscrita na Ordem dos Advogados do Brasil, Seccional Rio Grande do Norte.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-cinzel font-bold text-[#8E8781]">ESPECIALISTA</span>
                <p>Pós-graduada em Direito Administrativo, com foco em regimes próprios de previdência social e estatutos dos servidores.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-cinzel font-bold text-[#8E8781]">ATUAÇÃO</span>
                <p>Vasta experiência no atendimento a servidores municipais e estaduais do RN, garantindo a aplicação justa das leis vigentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}