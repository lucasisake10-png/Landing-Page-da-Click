import React from 'react';

const PerformanceStats: React.FC = () => {
  const stats = [
    { label: 'Aumento Médio em ROI', value: '340%', icon: '🚀' },
    { label: 'Redução de CPA', value: '45%', icon: '📉' },
    { label: 'Taxa de Conversão LP', value: '18%', icon: '💎' },
    { label: 'Retenção de Clientes', value: '92%', icon: '🤝' }
  ];

  return (
    <section className="relative py-40 bg-black border-y border-white/5 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&w=1600&q=80" 
          alt="Performance Data" 
          className="w-full h-full object-cover blur-[80px] opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black z-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="reveal delay-${(i+1)*100} flex flex-col items-center text-center group">
              <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                {/* Infográfico Circular (SVG) */}
                <svg className="w-full h-full -rotate-90">
                  <circle 
                    cx="64" cy="64" r="60" 
                    fill="transparent" 
                    stroke="rgba(255,255,255,0.05)" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="64" cy="64" r="60" 
                    fill="transparent" 
                    stroke="#a855f7" 
                    strokeWidth="8"
                    strokeDasharray="377"
                    strokeDashoffset={377 - (377 * 0.75)} // Simulação de preenchimento
                    className="group-hover:stroke-white transition-all duration-1000"
                  />
                </svg>
                <span className="absolute text-3xl">{stat.icon}</span>
              </div>
              
              <h4 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                {stat.value}
              </h4>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Infográfico de Barra Adicional */}
        <div className="mt-32 p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl reveal">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-widest">Benchmarking de Performance</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-[10px] font-bold uppercase">Agência Click</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                <span className="text-[10px] font-bold uppercase">Média do Mercado</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                <span>Eficiência de Tráfego</span>
                <span className="text-primary">98% vs 45%</span>
              </div>
              <div className="h-4 w-full bg-gray-900 rounded-full overflow-hidden flex">
                <div className="h-full bg-primary w-[98%] transition-all duration-1000 delay-500"></div>
              </div>
              <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gray-700 w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;