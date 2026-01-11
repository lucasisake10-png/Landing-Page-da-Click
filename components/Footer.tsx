import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://rawcdn.githack.com/lucasisake10-png/click/0095b3751b793b5f349d2f9708f6c4bda4ecadee/click1.png";
  const whatsappUrl = "https://wa.me/5511945620693?text=Olá! Vim pela landing da Click Assessoria Digital. Gostaria de um diagnóstico estratégico, para entender o que faz sentido para o meu negócio.";
  const instagramUrl = "https://www.instagram.com/clickdigitalhub/";

  return (
    <footer className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <img 
          src={logoUrl} 
          alt="Click Assessoria" 
          className="h-10 mx-auto mb-10 brightness-110"
        />
        
        <h3 className="text-white font-black uppercase tracking-[0.3em] mb-2">Click Assessoria Digital</h3>
        <p className="text-purple-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-12">Arquitetura Digital & Sistemas de Aquisição</p>
        
        <div className="flex justify-center gap-12 mb-16">
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest italic"
          >
            Instagram
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest italic"
          >
            WhatsApp
          </a>
        </div>
        
        <p className="text-gray-800 text-[8px] font-black uppercase tracking-[0.2em]">Todos os direitos reservados á Click Assessoria Digital</p>
      </div>
    </footer>
  );
};

export default Footer;