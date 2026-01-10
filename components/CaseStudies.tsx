import React from 'react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      niche: "Infoproduto - Educação",
      title: "Escala de 6 para 7 dígitos",
      results: ["ROI de 12.4x", "CPL reduzido em 40%", "R$ 1.2M faturados em 30 dias"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      niche: "E-commerce Premium",
      title: "Dominando o Google Shopping",
      results: ["Faturamento triplicado", "ROAS de 9.2x", "Redução de 25% no abandono de carrinho"],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="cases" className="py-24 md:py-40 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 reveal">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
            Provamos com <br />
            <span className="text-purple-600 italic">números reais</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="reveal group relative bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden hover:border-purple-600/30 transition-all duration-700" style={{ transitionDelay: `${i * 200}ms` }}>
              <div className="aspect-video relative overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 px-3 py-1 bg-purple-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                  {c.niche}
                </div>
              </div>
              
              <div className="p-10">
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-8">{c.title}</h4>
                <div className="space-y-4 mb-10">
                  {c.results.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-500">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span className="text-gray-300 font-bold">{res}</span>
                    </div>
                  ))}
                </div>
                <button 
                   onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                   className="text-xs font-black uppercase tracking-widest text-purple-500 hover:text-white transition-colors flex items-center gap-3 group/btn"
                >
                  Ver estrutura desse caso
                  <div className="w-6 h-[1px] bg-purple-500 group-hover/btn:w-10 transition-all"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;