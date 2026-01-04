import React from 'react';

const FunnelStrategy: React.FC = () => {
  const funnelSteps = [
    {
      stage: 'Topo',
      title: 'Atração Magnética',
      desc: 'Anúncios ultra-segmentados que filtram curiosos e atraem compradores reais.',
      width: 'w-full',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      stage: 'Meio',
      title: 'Experiência de Conversão',
      desc: 'Landing Pages de elite com copy persuasiva que elimina objeções.',
      width: 'md:w-[90%] w-full',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      stage: 'Fundo',
      title: 'Ação Decisiva',
      desc: 'Checkout otimizado e integração com CRM para fechamento imediato.',
      width: 'md:w-[80%] w-full',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      stage: 'Escala',
      title: 'Escala e LTV',
      desc: 'Análise de dados para maximizar o valor de cada cliente adquirido.',
      width: 'md:w-[70%] w-full',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
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
    <section id="funnel" className="relative py-16 md:py-24 bg-black overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" 
          alt="Funnel Analytics" 
          className="w-full h-full object-cover blur-[100px] opacity-10 scale-110"
        />
        <div className="absolute inset-0 bg-black/90 z-1"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-4 md:mb-6 text-white">
            Engenharia de <span className="text-primary">Vendas.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
            Uma jornada de conversão otimizada para o máximo ROI.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
          {funnelSteps.map((step, i) => (
            <div 
              key={i} 
              className={`reveal delay-${(i + 1) * 100} ${step.width} group relative flex items-center gap-4 md:gap-6 bg-white/[0.03] border border-white/10 p-4 md:p-6 backdrop-blur-3xl rounded-xl md:rounded-2xl hover:bg-white/[0.07] hover:border-primary/50 transition-all duration-500 shadow-xl`}
            >
              <div className="flex-shrink-0 text-primary bg-primary/10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg md:rounded-xl border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {step.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-0.5 md:mb-1">
                  <span className="text-primary text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] px-1.5 md:px-2 py-0.5 bg-primary/10 rounded border border-primary/20">
                    {step.stage}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm font-medium leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
          
          <div className="reveal delay-500 mt-8 md:mt-10 w-full sm:w-auto text-center">
            <button 
              onClick={handleScrollToContact}
              className="btn-nexus px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm w-full sm:w-auto"
            >
              Quero este funil no meu negócio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunnelStrategy;