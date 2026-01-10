import React from 'react';

const Authority: React.FC = () => {
  const checkmarks = [
    "Não vendemos curso",
    "Não prometemos milagres",
    "Não somos 'meninos do marketing'",
    "Não fazemos post por fazer"
  ];

  return (
    <section id="authority" className="py-24 md:py-40 bg-white text-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <div className="lg:w-1/2 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-purple-600"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-600">Nosso Compromisso</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Foco total no seu <br /><span className="text-purple-600 italic">faturamento.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Esqueça o que te disseram sobre marketing bonitinho. Nós somos o seu braço direito de performance, focado em trazer o cliente qualificado até você.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4 reveal delay-100">
              {checkmarks.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative overflow-hidden flex items-center gap-6 p-7 bg-black text-white rounded-[2rem] group hover:bg-purple-600 transition-all duration-500 shadow-xl hover:-translate-y-1"
                >
                  {/* Glimmer effect */}
                  <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[100%] pointer-events-none skew-x-12"></div>
                  
                  <div className="relative z-10 w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="relative z-10 text-xl md:text-2xl font-black uppercase tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;