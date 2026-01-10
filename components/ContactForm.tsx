import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const WEB3FORMS_ACCESS_KEY = "b6dd7ed9-69bc-4eb3-aca7-489237dfaddf";
  const [formData, setFormData] = useState({ name: '', whatsapp: '', revenue: 'Até 10k' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `🎯 NOVO DIAGNÓSTICO - ${formData.name}`,
          from_name: "Click Performance Site",
          ...formData
        })
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Sua <span className="text-purple-600 italic">Aplicação</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Responda e entraremos em contato</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-10 reveal delay-100">
          <div className="group border-b-2 border-slate-200 focus-within:border-purple-600 transition-all pb-4">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Seu Nome</label>
            <input 
              type="text" 
              className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-slate-200"
              placeholder="Digite aqui"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="group border-b-2 border-slate-200 focus-within:border-purple-600 transition-all pb-4">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">WhatsApp</label>
            <input 
              type="tel" 
              className="w-full bg-transparent text-2xl font-black outline-none placeholder:text-slate-200"
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={e => setFormData({...formData, whatsapp: e.target.value})}
              required
            />
          </div>

          <div className="group border-b-2 border-slate-200 focus-within:border-purple-600 transition-all pb-4">
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Faturamento Mensal</label>
            <select 
              className="w-full bg-transparent text-2xl font-black outline-none cursor-pointer"
              value={formData.revenue}
              onChange={e => setFormData({...formData, revenue: e.target.value})}
            >
              <option>Até 10k/mês</option>
              <option>10k a 50k/mês</option>
              <option>50k a 100k/mês</option>
              <option>Acima de 100k/mês</option>
            </select>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-8 rounded-3xl font-black uppercase tracking-[0.2em] text-sm hover:bg-purple-600 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group"
          >
            <span>{isSubmitting ? 'Enviando...' : 'Falar com um especialista agora'}</span>
            <div className="triangle-right border-l-white scale-75 transition-transform group-hover:translate-x-1"></div>
          </button>
          
          {status === 'success' && <p className="text-center font-black text-green-600 text-xs uppercase animate-pulse">Aplicação enviada! Redirecionando...</p>}
          {status === 'error' && <p className="text-center font-black text-red-600 text-xs uppercase">Erro ao enviar. Tente novamente.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;