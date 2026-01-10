import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Tráfego Estratégico',
      desc: 'Gestão de Sistemas de Aquisição no Google e Meta com foco absoluto em escala e ROI.'
    },
    {
      title: 'Arquitetura Digital',
      desc: 'Estruturas de Vendas ultra-velozes e otimizadas com gatilhos mentais de conversão.'
    },
    {
      title: 'Engenharia de Vendas',
      desc: 'Otimização de todo o seu ecossistema digital para reduzir o custo por aquisição de clientes.'
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-40 section-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-20 md:mb-32">
          <div className="max-w-3xl reveal">
            <div className="triangle-marker mb-6 md:mb-8" style={{ fontSize: '1.5rem' }}></div>
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none uppercase">
              Projetamos sua <br /> <span className="text-primary">Escala.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-xs max-w-xs leading-loose reveal delay-100">
            Sistemas de aquisição validados para quem não aceita resultados medianos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 mb-16 md:mb-20">
          {services.map((s, i) => (
            <div 
              key={i} 
              className={`reveal delay-${(i + 2) * 100} group relative bg-slate-50 p-10 md:p-16 hover:bg-black transition-all duration-700 cursor-default rounded-xl md:rounded-none`}
            >
              <div className="absolute top-10 right-10 md:top-16 md:right-16 triangle-marker opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0" style={{ fontSize: '0.8rem' }}></div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 tracking-tight group-hover:text-white transition-colors uppercase leading-tight">{s.title}</h3>
              <p className="text-slate-500 group-hover:text-gray-400 transition-colors leading-relaxed font-medium text-base md:text-lg">
                {s.desc}
              </p>
              
              <button 
                onClick={handleScrollToContact}
                className="mt-10 md:mt-16 inline-flex items-center gap-4 text-primary text-[9px] md:text-[10px] font-extrabold uppercase tracking-[0.3em] hover:text-primary/80 transition-colors"
              >
                VER DETALHES
                <div className="h-[1px] w-6 md:w-8 bg-primary"></div>
              </button>
            </div>
          ))}
        </div>

        <div className="reveal delay-500 text-center">
          <button 
            onClick={handleScrollToContact}
            className="btn-nexus px-10 md:px-12 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
          >
            Falar com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;