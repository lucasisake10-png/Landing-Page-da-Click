import React from 'react';

const BigNumbers: React.FC = () => {
  const stats = [
    { 
      label: 'Anos de Experiência', 
      value: '07', 
      suffix: 'Anos',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: 'Negócios Atingidos', 
      value: '1.000', 
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      label: 'Vendas Convertidas', 
      value: '30.000', 
      suffix: '+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    { 
      label: 'Faturamento Anual', 
      value: '17', 
      suffix: 'Milhões',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#050505] relative overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Dynamic Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 reveal">
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl mb-10">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></span>
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.6em]">Ecossistema de Alta Performance</span>
          </div>
          
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            NÚMEROS QUE <br />
            <span className="text-outline">ESCANCARAM</span> <br />
            NOSSA <span className="text-purple-600 text-glow italic">ESCALA.</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-lg font-bold uppercase tracking-[0.3em] max-w-2xl leading-relaxed">
            7 Anos de engenharia digital transformados em <span className="text-white">resultados exponenciais</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-32">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="reveal glass group relative p-12 rounded-[3.5rem] border-white/5 hover:border-purple-600/40 transition-all duration-700 flex flex-col items-center text-center overflow-hidden hover:scale-[1.02]"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="mb-8 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 inline-block">
                  {stat.icon}
                </div>
                
                <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter flex items-baseline justify-center">
                  {stat.value}
                  <span className="text-purple-600 text-xl ml-1 font-bold">{stat.suffix}</span>
                </div>
                
                <div className="h-px w-12 bg-white/10 mx-auto mb-6 group-hover:w-20 group-hover:bg-purple-600 transition-all duration-700"></div>
                
                <p className="text-gray-500 font-black uppercase tracking-[0.4em] text-[10px] leading-relaxed group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Partners Panel */}
        <div className="reveal delay-500 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-white/[0.01] blur-3xl rounded-full"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 p-12 border border-white/5 bg-white/[0.02] rounded-[3rem] backdrop-blur-md">
            
            <div className="flex items-center gap-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://rawcdn.githack.com/lucasisake10-png/click/b88c69da57effa9ec24a5f2eae231ce2fb5f4310/Selo%20Google%20.png" 
                  alt="Google" 
                  className="h-10 md:h-12 w-auto object-contain brightness-110 group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">GOOGLE</span>
                <span className="text-[9px] font-bold text-purple-600 uppercase tracking-[0.3em] mt-1">Certified Partner</span>
              </div>
            </div>

            <div className="w-px h-12 bg-white/5 hidden md:block"></div>

            <div className="flex items-center gap-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#0668E1]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-[#0668E1] p-3 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter leading-none">META</span>
                <span className="text-[9px] font-bold text-purple-600 uppercase tracking-[0.3em] mt-1">Business Partner</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BigNumbers;