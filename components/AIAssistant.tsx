
import React, { useState } from 'react';
import { getMarketingAdvice } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessType, setBusinessType] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!businessType.trim()) return;
    setLoading(true);
    const result = await getMarketingAdvice(businessType);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-28 z-[60]">
      {isOpen ? (
        <div className="w-80 bg-black border border-white/10 p-8 shadow-[0_0_50px_rgba(168,85,247,0.1)] animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Click IA</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          {advice ? (
            <div className="animate-in fade-in duration-500">
              <p className="text-sm text-gray-300 mb-6 leading-relaxed font-light">{advice}</p>
              <button 
                onClick={() => {setAdvice(''); setBusinessType('');}} 
                className="text-[10px] font-bold uppercase text-primary hover:text-white transition-colors"
              >
                Nova consulta
              </button>
            </div>
          ) : (
            <>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-4">Qual seu nicho?</p>
              <input 
                type="text"
                className="w-full bg-white/5 border-b border-white/10 py-3 text-sm text-white mb-6 focus:outline-none focus:border-primary"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
              />
              <button 
                onClick={handleGetAdvice}
                disabled={loading}
                className="btn-nexus w-full py-3 text-[10px]"
              >
                {loading ? 'Analisando...' : 'Obter Estratégia'}
              </button>
            </>
          )}
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
