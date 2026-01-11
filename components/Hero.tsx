import React from 'react';

const Hero: React.FC = () => {
  const scrollToDiagnostic = () => {
    const element = document.getElementById('diagnostic');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgImageUrl = "https://rawcdn.githack.com/lucasisake10-png/click/1beca0af0aa3a47f70635303e07975e16d745f3d/5454.png";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={bgImageUrl} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
          style={{ filter: 'brightness(0.4) contrast(1.2) saturate(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-purple-900/5 mix-blend-color"></div>
      </div>

      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[45%] h-[45%] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 backdrop-blur-sm">
              <div className="triangle-right scale-50"></div>
              <span className="text-purple-400 text-[9px] font-black uppercase tracking-[0.4em]">Arquitetura Digital de Performance</span>
            </div>
            
            <h1 className="reveal delay-100 text-4xl md:text-7xl font-black uppercase leading-[1.1] tracking-tighter mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Marketing de verdade para quem <span className="text-purple-600 italic">já tentou de tudo</span> e agora precisa vender.
            </h1>

            <div className="reveal delay-200 mb-12">
              <p className="text-base md:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed mx-auto">
                Se você já tentou de tudo e não teve retorno, o problema não é o seu produto.
              </p>
              <p className="text-base md:text-xl text-gray-300 max-w-2xl font-bold leading-relaxed mx-auto mt-2">
                Nós implementamos <span className="text-white">Sistemas de Aquisição de Clientes</span> validados para quem não quer apenas seguidores, quer faturamento previsível.
              </p>
            </div>

            <button 
              onClick={scrollToDiagnostic}
              className="reveal delay-300 btn-premium px-10 py-6 bg-purple-600 text-white rounded-full font-black uppercase tracking-widest text-[12px] glow-purple hover:bg-purple-700 transition-all hover:scale-105 active:scale-95 group relative z-20 shadow-2xl"
            >
              <span>Quero vender mais</span>
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white transition-transform group-hover:translate-x-1 ml-2"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;