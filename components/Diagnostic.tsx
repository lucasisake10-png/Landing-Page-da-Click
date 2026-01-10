import React from 'react';

const Diagnostic: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="diagnostic" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[1.1]">
            Migre para um <br /><span className="text-purple-600 italic">Sistema de Aquisição Robusto.</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
              O seu negócio não precisa de mais posts, precisa de uma <span className="text-white font-bold underline decoration-purple-600 underline-offset-8">Arquitetura Digital de Vendas</span>. Vamos descobrir onde está o gargalo do seu lucro em um diagnóstico gratuito.
            </p>
          </div>

          <div className="space-y-10">
            <button 
              onClick={scrollToContact}
              className="btn-premium px-12 py-7 bg-purple-600 text-white rounded-full font-black uppercase tracking-widest text-base glow-purple hover:scale-105 active:scale-95 group"
            >
              👉 Projetar meu Sistema de Aquisição
            </button>
            
            <div className="reveal delay-200">
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3">O seu próximo nível começa aqui,</p>
              <h3 className="text-xl font-black uppercase tracking-widest">Aperte o botão acima.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;