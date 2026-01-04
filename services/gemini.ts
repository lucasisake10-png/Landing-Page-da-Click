import { GoogleGenAI } from "@google/genai";

export const getMarketingAdvice = async (businessType: string): Promise<string> => {
  try {
    // Instanciando dentro da função para garantir que sempre use o contexto de API mais atualizado
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Upgrade para Pro para melhores insights estratégicos
      contents: `O usuário tem um negócio do tipo: ${businessType}. 
      Como especialista em tráfego pago da agência Click, dê uma sugestão curta, direta e impactante (máximo 300 caracteres) de qual estratégia de marketing digital ele deve usar hoje para crescer.`,
      config: {
        systemInstruction: "Você é um consultor sênior de marketing digital da agência Click. Sua linguagem é moderna, profissional, direta e persuasiva. Use termos como ROI, escala e conversão.",
        temperature: 0.8,
      }
    });

    return response.text || "Não foi possível gerar uma sugestão no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, nosso assistente está analisando dados agora. Tente falar conosco pelo formulário!";
  }
};