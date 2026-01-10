import React from 'react';

const BeliefBreaker: React.FC = () => {
  const vanityMetrics = [
    { label: "Instagram", error: "Não é catálogo de vendas" },
    { label: "Impulsionar", error: "Não é estratégia" },
    { label: "Curtidas", error: "Não pagam seus boletos" },
    { label: "Blogueiro", error: "Você é um empresário" }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#050505] text-white overflow-hidden relative border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="reveal mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <span className="text-[9px] font-black uppercase tracking-widest text-red-500">Métricas de Mentira</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[1] md:leading-[0.9]">
              Instagram não é currículo. <br />
              <span className="text-purple-600 text-glow">Seguidor não é lucro.</span>
            </h2>
          </div>
          
          <p className="reveal delay-100 text-lg md:text-2xl text-gray-400 font-medium max-w-3xl mb-20 leading-relaxed">
            Muitas agências focam no "bonitinho" para te distrair da falta de resultados. Para nós, <span className="text-red-500 font-bold uppercase italic tracking-wider">o único dado que importa</span> é o dinheiro que entra no seu caixa.
          </p>

          <div className="reveal delay-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
             {vanityMetrics.map((item, idx) => (
               <div 
                 key={idx} 
                 className="group relative p-8 bg-black border border-white/5 rounded-[2rem] flex flex-col items-center justify-center transition-all duration-500 hover:border-red-500/30 overflow-hidden"
               >
                 <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    <span className="text-[10rem] font-black text-red-500">X</span>
                 </div>

                 <div className="relative z-10 flex flex-col items-center">
                   <div className="relative mb-4">
                     <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-gray-500 group-hover:text-red-500/50 transition-colors">
                       {item.label}
                     </span>
                     <div className="absolute top-1/2 left-[-10%] w-[120%] h-[2px] bg-red-600 transform -rotate-6 shadow-[0_0_10px_rgba(220,38,38,0.5)]"></div>
                   </div>
                   
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors text-center">
                     {item.error}
                   </span>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-20 reveal delay-300">
            <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px]">
              Trocamos o 'aparecer' por <span className="text-white">Estratégia de Escala</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefBreaker;