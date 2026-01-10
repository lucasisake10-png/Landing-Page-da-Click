import React from 'react';

const Filter: React.FC = () => {
  const conditions = [
    "Você procura milagre",
    "Você quer gastar o mínimo possível",
    "Você não acredita em processo",
    "Você quer resultado em 7 dias",
    "Você não pode investir em marketing"
  ];

  return (
    <section className="py-32 bg-red-600/5 border-y border-red-500/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[20vw] font-black italic">AVISO</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-5 mb-12 reveal">
             <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-2xl animate-pulse">
               <span className="text-2xl">⚠️</span>
             </div>
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
               Esse serviço <span className="text-red-500 underline decoration-2 underline-offset-8">NÃO é para você</span> se:
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal delay-100">
            {conditions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-6 glass border-red-500/10 rounded-2xl">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-lg md:text-xl font-bold text-gray-300 italic">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;