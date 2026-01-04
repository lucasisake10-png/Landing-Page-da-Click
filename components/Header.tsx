import React, { useState, useEffect } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://rawcdn.githack.com/lucasisake10-png/click/0095b3751b793b5f349d2f9708f6c4bda4ecadee/click1.png";

  const navItems = [
    { label: 'Serviços', href: 'services' },
    { label: 'Benefícios', href: 'benefits' },
    { label: 'Depoimentos', href: 'testimonials' },
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
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled || isMenuOpen ? 'bg-black py-4 border-b border-white/10' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center group relative z-[10001]"
        >
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="h-8 md:h-12 w-auto object-contain transition-all duration-300 group-hover:brightness-125"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-nexus px-8 py-4"
          >
            Começar
            <div className="triangle-marker ml-2" style={{ borderLeftColor: 'currentColor', fontSize: '0.6rem' }}></div>
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white relative z-[10001] p-2 focus:outline-none"
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isMenuOpen ? 'rotate-[42deg] translate-x-1' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isMenuOpen ? '-rotate-[42deg] translate-x-1' : ''}`}></span>
          </div>
        </button>

        {/* Fullscreen Mobile Overlay - Totalmente Opaco */}
        <div className={`fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <nav className="flex flex-col items-center space-y-8 px-6 text-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className="text-3xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
            >
              Início
            </a>
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-black uppercase tracking-widest text-white hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6">
              <button 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="btn-nexus px-10 py-5 text-sm shadow-[0_15px_50px_rgba(168,85,247,0.5)]"
              >
                Começar Agora
              </button>
            </div>
          </nav>
          
          <div className="absolute bottom-12 opacity-[0.05] pointer-events-none select-none">
            <span className="text-7xl font-black text-white">CLICK PERFORMANCE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;