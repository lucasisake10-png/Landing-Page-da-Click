import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Ricardo Silva',
      role: 'CEO - TechStore',
      content: 'A Click não é uma agência comum. Eles entendem de negócios, não apenas de botões no Gerenciador de Anúncios.',
    },
    {
      name: 'Amanda Costa',
      role: 'Marketing - EcoFlow',
      content: 'Nossa taxa de conversão saltou de 2% para 11% com a nova estratégia de Landing Pages.',
    }
  ];

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative py-40 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
          alt="People background" 
          className="w-full h-full object-cover blur-[100px] opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black z-1"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-20">
          <div>
            <div className="triangle-marker mb-12" style={{ fontSize: '2.5rem' }}></div>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-12 text-white leading-none uppercase">
              RESULTADOS <br /> <span className="text-primary">REAIS.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-lg">
              O depoimento dos nossos clientes fala mais do que qualquer apresentação de vendas. Não vendemos esperança, vendemos lucro através da Metodologia CAEG.
            </p>
          </div>
          
          <div className="space-y-8">
            {reviews.map((r, i) => (
              <div 
                key={i} 
                className="group relative p-12 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:bg-white/10 hover:border-primary/30"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 rounded-l-2xl"></div>
                <p className="text-2xl font-semibold mb-8 text-white leading-snug">"{r.content}"</p>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm text-white">{r.name}</h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-2">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal delay-500 text-center">
          <button 
            onClick={handleScrollToContact}
            className="btn-nexus px-12 py-6 text-base"
          >
            Seja o nosso próximo caso de sucesso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;