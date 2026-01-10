import React from 'react';

const ObjectionBreak: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#050505] text-white relative overflow-hidden">
      {/* Efeito de Spotlight para reforçar a ideia de "lançar luz" na estratégia */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            {/* Lado Esquerdo: Headline Impactante */}
            <div className="w-full md:w-1/2 reveal">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-8">
                <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.4em]">Objeção #01</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] tracking-tighter mb-8">
                Se você já tentou e não funcionou, <span className="text-purple-600 italic">essa página é pra você.</span>
              </h2>
              
              <div className="h-1 w-20 bg-purple-600 rounded-full mb-8"></div>
            </div>

            {/* Lado Direito: Texto Explicativo e Argumentação */}
            <div className="w-full md:w-1/2 reveal delay-200">
              <div className="space-y-6">
                <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">
                  A maioria dos negócios que chegam até nós já tentou tráfego pago, agência ou marketing sozinho.
                </p>
                
                <div className="p-8 bg-white/[0.02] border-l-4 border-purple-600 rounded-r-3xl">
                  <p className="text-white text-xl md:text-2xl font-black uppercase tracking-tight mb-4 leading-tight">
                    O problema não foi tentar. <br />
                    O problema foi tentar sem <span className="text-purple-500">processo</span>, sem <span className="text-purple-500">estrutura</span> e sem <span className="text-purple-500">estratégia</span>.
                  </p>
                </div>

                <p className="text-lg md:text-2xl text-gray-400 font-medium leading-relaxed">
                  Marketing digital funciona. <br />
                  O que não funciona é fazer <span className="text-white font-bold underline decoration-purple-600 underline-offset-4">marketing no escuro.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Elemento Visual Decorativo: feixe de luz sutil */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default ObjectionBreak;