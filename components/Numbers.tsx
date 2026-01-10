import React from 'react';

const Numbers: React.FC = () => {
  const stats = [
    { label: 'Gerenciados em Ads', value: '+50M', suffix: 'R$' },
    { label: 'Leads Qualificados', value: '+500k', suffix: '' },
    { label: 'Empresas Escaladas', value: '250+', suffix: '' },
    { label: 'ROI Médio Gerado', value: '8.5', suffix: 'x' }
  ];

  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="reveal flex flex-col items-center md:items-start text-center md:text-left group" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-purple-600 transition-colors">
                {stat.value}<span className="text-purple-600 text-2xl ml-1">{stat.suffix}</span>
              </span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;