import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { 
      n: "01", 
      t: "Diagnóstico 360", 
      d: "Analisamos sua viabilidade de mercado para projetar o melhor Sistema de Aquisição de Clientes para o seu nicho.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    { 
      n: "02", 
      t: "Arquitetura Digital", 
      d: "Desenvolvemos sua Estrutura de Vendas com Tráfego Pago focada em converter visitantes em oportunidades de negócio.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      n: "03", 
      t: "Engenharia de Tráfego", 
      d: "Implementamos campanhas agressivas para alimentar seu funil com tráfego pago de alta intenção de compra.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      n: "04", 
      t: "Captura de Leads", 
      d: "O lead qualificado entra no seu Sistema de Vendas pronto para a conversão final pela sua equipe.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h4v4l4-4z" />
        </svg>
      )
    },
    { 
      n: "05", 
      t: "Escala Vertical", 
      d: "Otimizamos sua estrutura de vendas para multiplicar o faturamento mantendo a eficiência do ROI.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/10 border border-purple-600/20 mb-6">
            <div className="triangle-right scale-50"></div>
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400">Metodologia de Escala</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
            Sua nova <br /><span className="text-purple-600">Engenharia de Vendas</span>
          </h2>
          <p className="text-gray-400 font-medium">Projetamos ecossistemas digitais focados em ROAS (Retorno sobre Investimento em Anúncios).</p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-600/30 to-transparent"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((s, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between reveal ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} md:mb-32 last:mb-0 group`}>
                <div className="hidden md:block w-[42%]"></div>
                <div className="relative z-20 flex items-center justify-center mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-2xl bg-black border border-purple-600/30 flex items-center justify-center text-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.15)] group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                    {s.icon}
                  </div>
                  <span className="absolute -top-4 -right-4 text-xs font-black text-purple-800/50 group-hover:text-purple-400 transition-colors">{s.n}</span>
                </div>
                <div className={`w-full md:w-[42%] glass p-8 md:p-10 rounded-[2rem] border-white/5 hover:border-purple-600/30 transition-all duration-500 relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-1 h-0 bg-purple-600 group-hover:h-full transition-all duration-700"></div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-purple-500 transition-colors">
                    {s.t}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {s.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center reveal">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            className="group relative inline-flex items-center gap-4 text-purple-500 font-black uppercase tracking-widest text-[11px] hover:text-white transition-colors"
          >
            <span>Quero este Sistema de Aquisição no meu negócio</span>
            <div className="w-8 h-[1px] bg-purple-500 group-hover:w-12 group-hover:bg-white transition-all"></div>
            <div className="triangle-right scale-50 opacity-50 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;