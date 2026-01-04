import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-20 bg-black overflow-hidden">
      {/* Tipografia de Fundo - Opacidade mínima no mobile para não interferir na leitura */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.03] md:opacity-100 z-0">
        <span className="bg-typography text-[25vw] md:text-[22vw] leading-[0.8] tracking-tighter">CLIQUE</span>
        <span className="bg-typography text-[25vw] md:text-[22vw] leading-[0.8] tracking-tighter">CONVERTA</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl">
          <div className="reveal inline-flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
            <div className="h-[2px] w-8 md:w-12 bg-primary"></div>
            <span className="text-primary text-[9px] md:text-[10px] font-extrabold tracking-[0.3em] md:tracking-[0.5em] uppercase">Assessoria Digital de Elite</span>
          </div>
          
          <h1 className="reveal delay-100 text-3xl sm:text-5xl md:text-8xl lg:text-[9.5rem] font-extrabold leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 tracking-tighter text-white uppercase">
            Mais Vendas, <br />
            Menos <span className="text-primary">Promessa<span className="inline-block w-2 h-2 md:w-6 md:h-6 bg-primary ml-1 md:ml-2 mb-1 md:mb-2"></span></span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-6 reveal delay-200">
              <p className="text-lg md:text-2xl text-white md:text-gray-400 leading-relaxed md:leading-tight font-medium max-w-xl mb-10 md:mb-12">
                Design de alta performance e tráfego pago focado na única métrica que importa: <span className="text-primary font-bold">lucro real no seu bolso.</span>
              </p>

              {/* Social Proof Section (Avatar Stack) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-12 md:mb-12">
                <div className="flex -space-x-3 md:-space-x-4">
                  {avatars.map((url, idx) => (
                    <div 
                      key={idx} 
                      className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-black overflow-hidden bg-gray-800 ring-1 md:ring-2 ring-white/5"
                    >
                      <img 
                        src={url} 
                        alt={`Cliente ${idx + 1}`} 
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-base md:text-xl tracking-tight leading-none mb-1">+200 Clientes atendidos</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-3 h-3 text-primary fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex flex-col gap-4 md:gap-6 lg:justify-end lg:pt-8 reveal delay-300">
              <button 
                onClick={() => handleScroll('contact')}
                className="btn-nexus px-8 md:px-12 py-5 md:py-6 text-sm md:text-base group overflow-hidden w-full sm:w-auto min-h-[60px]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Começar Agora
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </button>
              
              <button 
                onClick={() => handleScroll('services')}
                className="border-2 border-white/10 px-8 md:px-12 py-5 md:py-6 rounded-xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center flex items-center justify-center w-full sm:w-auto min-h-[60px]"
              >
                Nossas Soluções
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;