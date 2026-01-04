import React from 'react';

const Framework: React.FC = () => {
  const steps = [
    {
      letter: 'C',
      title: 'Clareza',
      subtitle: 'DIAGNÓSTICO 360°',
      desc: 'Mapeamos cada detalhe do seu modelo de negócio para definir metas reais e alcançáveis. Sem clareza, não há direção.',
      color: 'from-purple-600/20'
    },
    {
      letter: 'A',
      title: 'Análise',
      subtitle: 'DATA INTELLIGENCE',
      desc: 'Investigamos o comportamento do seu público e a estratégia dos concorrentes para encontrar brechas de lucro no mercado.',
      color: 'from-indigo-600/20'
    },
    {
      letter: 'E',
      title: 'Estratégia',
      subtitle: 'ROADMAP DE ESCALA',
      desc: 'Desenhamos o funil de vendas perfeito e a estrutura de anúncios que vai converter curiosos em clientes fiéis.',
      color: 'from-fuchsia-600/20'
    },
    {
      letter: 'G',
      title: 'Gestão',
      subtitle: 'OTIMIZAÇÃO AGRESSIVA',
      desc: 'Monitoramento diário focado em ROI. Onde o dinheiro está performando, nós escalamos; onde não está, nós cortamos.',
      color: 'from-violet-600/20'
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
    <section id="framework" className="relative py-20 md:py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80" 
          alt="Tech background" 
          className="w-full h-full object-cover blur-[120px] opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-1"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16 md:mb-32 reveal">
          <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-12 h-[1px] bg-primary"></span>
            <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">Nossa Engenharia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-extrabold tracking-tighter leading-[1.1] md:leading-none uppercase mb-8 md:mb-12 text-white break-words">
            Metodologia <br />
            <span className="text-white">CAEG<span className="text-primary">.</span></span>
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-2xl font-medium leading-relaxed">
            Não jogamos a verba dos nossos clientes na sorte. Utilizamos um framework proprietário de 4 pilares para garantir previsibilidade e escala constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`reveal delay-${(i + 1) * 100} group relative bg-white/5 border border-white/10 p-8 md:p-10 h-full backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:bg-white/10 overflow-hidden rounded-xl`}
            >
              <span className="absolute -top-6 -right-4 text-[8rem] md:text-[12rem] font-black text-white/[0.02] group-hover:text-primary/10 transition-colors pointer-events-none select-none leading-none">
                {step.letter}
              </span>
              
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center rounded-lg mb-6 md:mb-8 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <span className="text-white font-black text-lg md:text-xl">{step.letter}</span>
                </div>
                
                <p className="text-primary text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-2">{step.subtitle}</p>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold uppercase mb-4 md:mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                  {step.desc}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="reveal delay-500 text-center">
          <button 
            onClick={handleScrollToContact}
            className="btn-nexus px-10 md:px-12 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto"
          >
            Aplicar Metodologia no meu Negócio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Framework;