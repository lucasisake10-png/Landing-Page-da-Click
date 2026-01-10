import React from 'react';

const Identification: React.FC = () => {
  const points = [
    {
      title: "Dinheiro sem Volta",
      desc: "Você já injetou dinheiro em anúncios, mas o faturamento nunca saiu do lugar. Sente que está apenas sustentando o Mark Zuckerberg.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M3 20h18M3 16l4-4 4 4 4-8 5 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 8l3-3-3-3" stroke="currentColor" strokeOpacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Refém de Amadores",
      desc: "Já pagou agência, gestor ou o 'menino do marketing'. No começo era tudo lindo, mas o resultado sumiu e as desculpas sobraram.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 10h1M14 10h1M9 14h1M14 14h1M9 18h1M14 18h1" strokeOpacity="0.4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "O Erro do Impulsionar",
      desc: "Você achou que apertar o botão de 'Impulsionar Post' era fazer marketing digital. Ganhou curtidas, mas não pagou nenhum boleto com elas.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <rect x="5" y="2" width="14" height="20" rx="3" strokeLinecap="round" />
          <path d="M12 2v2M12 20v2M8 11h8" strokeLinecap="round" />
          <circle cx="12" cy="11" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Cursos que Travam",
      desc: "Comprou cursos que prometiam o mundo, mas percebeu na prática que é muito mais difícil do que parece. Falta estratégia real.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 9l3 2-3 2V9z" fill="currentColor" stroke="none" />
        </svg>
      )
    },
    {
      title: "Bom, mas Invisível",
      desc: "Você é excelente no que faz e tem um produto incrível, mas o seu cliente ideal nem sabe que você existe. Você é invisível para o mercado.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeOpacity="0.4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Escalar sem Medo",
      desc: "Você precisa vender e escalar de verdade, não apenas 'aparecer' no Instagram. Você quer ser um empresário, não um blogueiro.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path d="M22 7l-9 9-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="problems" className="py-24 md:py-40 bg-[#050505] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-purple-600"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-purple-500">Mapeamento de Realidade</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-10">
              Você já <br />
              <span className="text-purple-600 text-glow">perdeu tempo</span> <br />
              demais com:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal delay-100">
            {points.map((point, idx) => (
              <div 
                key={idx} 
                className="group relative p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] transition-all duration-700 hover:bg-white/[0.05] hover:border-purple-500/30 hover:shadow-[0_40px_100px_-20px_rgba(147,51,234,0.2)] hover:-translate-y-4 cursor-default overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-4 text-[12rem] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.03)] group-hover:[-webkit-text-stroke:1px_rgba(147,51,234,0.1)] transition-all pointer-events-none select-none leading-none italic">
                  {idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/[0.03] rounded-3xl border border-white/5 flex items-center justify-center text-purple-500 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                    {point.icon}
                  </div>
                  
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4 text-white leading-tight group-hover:text-purple-400 transition-colors">
                    {point.title}
                  </h4>
                  
                  <p className="text-gray-400 font-medium leading-relaxed text-base group-hover:text-gray-200 transition-colors">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 flex flex-col items-center reveal delay-300">
            <p className="text-gray-500 font-black uppercase tracking-[0.5em] text-[10px] text-center max-w-sm leading-loose">
              Se você se identificou, <br />
              <span className="text-white">nós somos o seu próximo passo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identification;