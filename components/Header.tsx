import React, { useState, useEffect } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://rawcdn.githack.com/lucasisake10-png/click/0095b3751b793b5f349d2f9708f6c4bda4ecadee/click1.png";
  
  const whatsappUrl = "https://wa.me/5511945620693?text=Olá! Vim pela landing da Click Assessoria Digital. Gostaria de um diagnóstico estratégico, para entender o que faz sentido para o meu negócio.";
  const instagramUrl = "https://www.instagram.com/clickdigitalhub/";

  const navItems = [
    { label: 'Problemas', href: 'problems' },
    { label: 'Diferenciais', href: 'authority' },
    { label: 'Processo', href: 'process' },
    { label: 'Resultados', href: 'testimonials' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[999999] transition-all duration-500 ${
        scrolled || isMenuOpen 
          ? 'py-4 bg-black border-b border-white/5 shadow-2xl' 
          : 'py-6 md:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="relative z-[10000002] transition-transform active:scale-95"
        >
          <img 
            src={logoUrl} 
            alt="Logo Click" 
            className="h-5 md:h-8 w-auto object-contain brightness-110"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, 'diagnostic')}
            className="bg-purple-600 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg active:scale-95"
          >
            Diagnóstico
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-white relative z-[10000002] p-2"
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 absolute top-1/2 -rotate-45' : 'w-6'}`}></span>
            <span className={`h-[2px] bg-purple-600 transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-6 absolute top-1/2 rotate-45' : 'w-5'}`}></span>
          </div>
        </button>

        {/* FULLSCREEN MOBILE MENU */}
        <div className={`fixed inset-0 bg-black z-[10000001] lg:hidden transition-all duration-500 flex flex-col ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          {/* Top Spacing for fixed header area */}
          <div className="h-20 w-full flex-shrink-0"></div>

          {/* Links Area */}
          <div className="flex-grow flex flex-col justify-center px-10 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a 
                  key={item.label} 
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center gap-5 group"
                >
                  <span className="text-purple-600 font-black text-sm italic">0{index + 1}</span>
                  <span className="text-3xl font-black uppercase tracking-tighter text-white">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Area */}
          <div className="p-10 border-t border-white/5 space-y-8 bg-black">
            <button 
              onClick={(e) => handleNavClick(e, 'diagnostic')}
              className="w-full bg-purple-600 text-white py-5 px-8 rounded-3xl font-black uppercase tracking-widest text-[11px] shadow-[0_10px_40px_rgba(147,51,234,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>Quero vender mais</span>
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white"></div>
            </button>
            
            <div className="flex justify-between items-center">
              <div className="flex gap-6">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Instagram</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">WhatsApp</a>
              </div>
              <p className="text-[7px] font-black uppercase tracking-widest text-gray-800">Todos os direitos reservados á Click Assessoria Digital</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;