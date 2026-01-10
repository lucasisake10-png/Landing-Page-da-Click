import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ricardo Silva',
      role: 'CEO - TechStore Brasil',
      content: 'A Click não é uma agência comum. Eles entendem de estratégia de negócio, não apenas de apertar botões no Gerenciador. Nosso ROI saltou de 3x para 11x em 4 meses.'
    },
    {
      name: 'Amanda Costa',
      role: 'Marketing - EcoFlow Solutions',
      content: 'Nossa taxa de conversão de leads era horrível. Com a nova Landing Page da Click e a estratégia de tráfego, hoje recebemos leads muito mais qualificados.'
    },
    {
      name: 'Pedro Mello',
      role: 'Founder - HighTicket Mentoria',
      content: 'Finalmente uma assessoria que fala a língua do empresário. Dados precisos, suporte impecável e resultados que aparecem no extrato bancário todo dia.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 reveal">
          <span className="text-purple-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Voz de quem escala</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            Quem confia <br /> <span className="text-white italic">não volta atrás</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="reveal glass p-10 rounded-[2.5rem] border-white/5 hover:border-purple-600/20 transition-all duration-500 group flex flex-col" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                ))}
              </div>
              <p className="text-gray-400 text-lg italic leading-relaxed mb-10 group-hover:text-white transition-colors flex-grow">
                "{r.content}"
              </p>
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-black uppercase text-xs tracking-widest text-white">{r.name}</h4>
                <p className="text-purple-600 text-[9px] font-black uppercase tracking-widest mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center reveal delay-300">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            className="btn-premium px-10 py-5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all"
          >
            Seja o próximo case de sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;