import React from 'react';

const TrustBar: React.FC = () => {
  const googlePartnerUrl = "https://rawcdn.githack.com/lucasisake10-png/click/b88c69da57effa9ec24a5f2eae231ce2fb5f4310/Selo%20Google%20.png";

  return (
    <section className="py-12 md:py-20 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Luz de fundo sutil para atmosfera premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">
          {/* Título da Seção */}
          <div className="text-center lg:text-left reveal">
            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-primary mb-2">Certificações Oficiais</p>
            <h3 className="text-white text-2xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight">Parceiros de Elite</h3>
          </div>
          
          {/* Container dos Selos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
            
            {/* Google Partner */}
            <div className="reveal delay-100 flex items-center gap-3 md:gap-5 transition-transform duration-500 hover:scale-105 cursor-default group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/5 p-2 md:p-3 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <img 
                    src={googlePartnerUrl} 
                    alt="Google" 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-white font-extrabold text-xl md:text-2xl tracking-tighter">Google</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500">Partner</span>
              </div>
            </div>

            {/* Meta Business Partner */}
            <div className="reveal delay-200 flex items-center gap-3 md:gap-5 transition-transform duration-500 hover:scale-105 cursor-default group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0668E1]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#0668E1] p-2 md:p-3 rounded-full shadow-[0_0_25px_rgba(6,104,225,0.4)]">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-white">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-white font-extrabold text-xl md:text-2xl tracking-tighter">Meta</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-gray-500">Partner</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;