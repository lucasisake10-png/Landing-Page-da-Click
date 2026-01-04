import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  /**
   * CHAVE DE API WEB3FORMS
   * Chave configurada: b6dd7ed9-69bc-4eb3-aca7-489237dfaddf
   */
  const WEB3FORMS_ACCESS_KEY = "b6dd7ed9-69bc-4eb3-aca7-489237dfaddf";

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    whatsapp: '',
    revenue: 'até 5k' 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `🚀 Nova Aplicação Click - ${formData.name}`,
          from_name: "Click Performance",
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          revenue: formData.revenue,
          message: `O lead ${formData.name} (WhatsApp: ${formData.whatsapp}) possui faturamento ${formData.revenue} e solicitou contato estratégico.`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', whatsapp: '', revenue: 'até 5k' });
        // Reset status after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-5xl md:text-9xl font-extrabold tracking-tighter mb-6 md:mb-8 uppercase">
              VAMOS <span className="text-primary">FALAR?</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-xs font-bold px-4">
              Responda em 30 segundos e entraremos em contato
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Coluna Esquerda: Campos de Texto */}
            <div className="space-y-12 md:space-y-16 reveal delay-100">
              <div className="group border-b border-white/10 focus-within:border-primary transition-all duration-500">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full bg-transparent py-4 text-2xl md:text-3xl outline-none text-white placeholder-white/5 font-bold"
                  placeholder="DIGITE AQUI"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="group border-b border-white/10 focus-within:border-primary transition-all duration-500">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Email Profissional</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full bg-transparent py-4 text-2xl md:text-3xl outline-none text-white placeholder-white/5 font-bold"
                  placeholder="EXEMPLO@EMPRESA.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="group border-b border-white/10 focus-within:border-primary transition-all duration-500">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  className="w-full bg-transparent py-4 text-2xl md:text-3xl outline-none text-white placeholder-white/5 font-bold"
                  placeholder="(00) 00000-0000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Coluna Direita: Select e Botão */}
            <div className="flex flex-col justify-between items-start gap-12 md:gap-16 reveal delay-200">
              <div className="w-full group border-b border-white/10 focus-within:border-primary transition-all duration-500">
                <label className="block text-[9px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Faturamento Mensal</label>
                <select 
                  name="revenue"
                  className="w-full bg-transparent py-4 text-2xl md:text-3xl outline-none appearance-none cursor-pointer text-white font-bold"
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                >
                  <option className="bg-neutral-900" value="até 5k">até 5k</option>
                  <option className="bg-neutral-900" value="5k - 10k">5k - 10k</option>
                  <option className="bg-neutral-900" value="10k - 50k">10k - 50k</option>
                  <option className="bg-neutral-900" value="acima de 50k">acima de 50k</option>
                </select>
              </div>
              
              <div className="w-full mt-auto relative">
                {formStatus === 'success' && (
                  <p className="text-green-400 font-bold mb-6 text-xs uppercase tracking-widest animate-pulse">
                    ✅ Aplicação enviada! Falaremos com você em breve.
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-500 font-bold mb-6 text-xs uppercase tracking-widest">
                    ❌ Erro no envio. Verifique os dados.
                  </p>
                )}
                
                <div className="relative group">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-primary hover:bg-white text-white hover:text-black py-6 md:py-8 rounded-2xl text-lg md:text-xl font-black uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 ${
                      isSubmitting ? 'opacity-50 grayscale cursor-wait' : 'shadow-[0_20px_60px_rgba(168,85,247,0.3)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]'
                    }`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar minha aplicação'}
                  </button>
                  
                  {!isSubmitting && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg pointer-events-none group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;