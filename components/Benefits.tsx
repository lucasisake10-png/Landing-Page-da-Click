import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { title: 'Análise de Dados Brutal', desc: 'Transformamos números complexos em decisões de lucro através de dashboards inteligentes.' },
    { title: 'Copywriting Persuasivo', desc: 'Textos que prendem a atenção e forçam a tomada de ação imediata do seu público.' },
    { title: 'Suporte Prioritário', desc: 'Comunicação direta e transparente sobre cada centavo investido no seu crescimento.' }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="relative py-40 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="reveal">
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-20 uppercase leading-[0.9] text-slate-900">
              Por que <br /> <span className="text-primary">Click?</span>
            </h2>
            
            <div className="space-y-16 mb-16">
              {benefits.map((b, i) => (
                <div key={i} className={`reveal delay-${(i + 1) * 100} flex gap-10 group`}>
                  <div className="flex-shrink-0 mt-2">
                    <div className="triangle-marker group-hover:scale-125 transition-transform" style={{ fontSize: '1.2rem' }}></div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-extrabold mb-4 tracking-tight uppercase text-slate-800">{b.title}</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg max-w-md group-hover:text-slate-900 transition-colors">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal delay-400">
              <button 
                onClick={handleScrollToContact}
                className="btn-nexus px-12 py-6 text-base"
              >
                Quero Escalar meu Negócio
              </button>
            </div>
          </div>
          
          <div className="relative group reveal delay-300">
            <div className="aspect-[4/5] bg-white overflow-hidden rounded-3xl border border-slate-200 shadow-2xl relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Equipe de Performance" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-2xl hidden md:block rotate-[-3deg] shadow-[0_20px_50px_rgba(168,85,247,0.3)] z-30 transition-transform group-hover:rotate-0 duration-500">
              <p className="text-5xl font-extrabold tracking-tighter text-white uppercase">+50M</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mt-2">Investidos em Ads</p>
            </div>

            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;