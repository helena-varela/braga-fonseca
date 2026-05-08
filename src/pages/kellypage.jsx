export default function KellyPage() {
  return (
    <main className="w-full bg-[#F9F9F4] pt-32">
      {/* SEÇÃO 1: HERO - FOCO NO ACOLHIMENTO */}
      <section className="px-10 md:px-20 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="font-cinzel text-xs tracking-[0.4em] text-[#8E8781] uppercase font-bold">
            Especialista em INSS
          </h2>
          <h1 className="font-cinzel text-4xl md:text-6xl text-[#8E8781] leading-tight">
            Segurança para o seu futuro e da sua família
          </h1>
          <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-xl">
            Eu ajudo você a conquistar a sua aposentadoria ou benefício sem que você precise enfrentar as filas e a burocracia do INSS sozinho.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/5584991053771" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#8E8781] text-white px-10 py-5 font-cinzel text-xs tracking-widest hover:bg-black transition-all shadow-xl inline-block"
            >
              VER SE TENHO DIREITO
            </a>
          </div>
        </div>
        
        {/* ARCO DE IMAGEM DA KELLY */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-t-full border border-[#8E8781]/20 shadow-2xl">
           <div className="w-full h-full bg-[#D3CCC6]/30 flex items-center justify-center font-cinzel italic text-[#8E8781]">
             {/* <img src={kelly} className="w-full h-full object-cover" alt="Dra. Kelly Fonsêca" /> */}
             [Foto Dra. Kelly Fonsêca]
           </div>
        </div>
      </section>

      {/* SEÇÃO 2: DORES (VOCÊ ESTÁ PASSANDO POR ISSO?) */}
      <section className="bg-white py-24 px-10 md:px-20 border-y border-[#8E8781]/10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="font-cinzel text-3xl text-[#8E8781] mb-6">Você não precisa lutar sozinho contra o INSS</h3>
          <p className="font-inter text-gray-600 text-lg">Muitas pessoas têm o pedido negado porque não sabem organizar os papéis. Eu estou aqui para resolver isso por você.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Pedido Negado", d: "Se o INSS disse 'não', nós analisamos o erro e entramos com o recurso para reverter." },
            { t: "Aposentadorias", d: "Cuidamos de todo o cálculo para você se aposentar com o melhor valor possível." },
            { t: "Auxílio Doença", d: "Ajuda para quem não pode trabalhar e precisa de segurança financeira imediata." },
            { t: "BPC / LOAS", d: "Direito para idosos ou pessoas com deficiência que nunca puderam contribuir." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[#F9F9F4] border-l-4 border-[#8E8781] space-y-4">
              <h4 className="font-cinzel text-[#8E8781] font-bold text-lg">{item.t}</h4>
              <p className="font-inter text-sm text-gray-600 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 3: SOBRE A DRA. KELLY (CONFIANÇA E EXPERIÊNCIA) */}
      <section className="bg-[#E8E9D4] py-24 px-10 md:px-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-8">
            <h3 className="font-cinzel text-4xl text-[#8E8781] leading-tight">Uma mão estendida para garantir seus direitos</h3>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              Dra. Kelly Fonsêca acredita que o Direito Previdenciário é, acima de tudo, um trabalho de humanidade. Com atuação firme em Natal e em todo o Rio Grande do Norte, ela se dedica a proteger quem mais precisa de amparo.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#8E8781] rounded-full"></div>
                <p className="font-inter font-medium text-[#8E8781]">Inscrita na OAB/RN</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#8E8781] rounded-full"></div>
                <p className="font-inter font-medium text-[#8E8781]">Especialista em Direito Previdenciário</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#8E8781] rounded-full"></div>
                <p className="font-inter font-medium text-[#8E8781]">Foco em atendimento humanizado e transparente</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full bg-white p-10 shadow-inner italic text-gray-600 font-inter text-center text-xl">
             "Meu compromisso é fazer com que você receba o que é seu por direito, com respeito e dignidade."
          </div>
        </div>
      </section>
    </main>
  );
}