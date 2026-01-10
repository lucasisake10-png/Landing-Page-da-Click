import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-32 bg-purple-600 relative overflow-hidden group">
      {/* Elementos visuais abstratos */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-[0.05] -skew-x-12 translate-x-20 transition-transform group-hover:translate-x-10 duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-black opacity-[0.1] skew-x-12 -translate-x-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none mb-10">
          Cansado de só 'aparecer'? <br /> Chegou a hora de <span className="italic text-black">vender de verdade.</span>
        </h2>
        <p className="text-purple-200 text-lg md:text-xl font-bold uppercase tracking-widest mb-12">
          Saia do amadorismo e tenha uma assessoria focada no seu lucro.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          className="btn-premium px-12 py-7 bg-white text-black rounded-full font-black uppercase tracking-widest text-base shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          Quero meu Diagnóstico Estratégico
        </button>
      </div>
    </section>
  );
};

export default CTASection;