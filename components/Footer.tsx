import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://rawcdn.githack.com/lucasisake10-png/click/0095b3751b793b5f349d2f9708f6c4bda4ecadee/click1.png";

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
          <div className="max-w-sm">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="inline-block mb-10 group"
            >
              <img 
                src={logoUrl} 
                alt="Logo" 
                className="h-14 w-auto object-contain brightness-110 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </a>
            <p className="text-gray-500 font-medium leading-relaxed">
              Elevamos o padrão do marketing digital com performance agressiva e design de elite.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h4 className="text-white font-extrabold mb-8 text-xs uppercase tracking-[0.3em]">Navegação</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
                <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="hover:text-primary transition-colors">Benefícios</a></li>
                <li><a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-primary transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-extrabold mb-8 text-xs uppercase tracking-[0.3em]">Social</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600">
          <p>© 2024 CLICK PERFORMANCE</p>
          <div className="flex items-center gap-2">
            PROJETADO PARA CONVERTER 
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current opacity-50">
              <path d="M6 4l12 8-12 8z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;