import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const getQuickDiagnosis = async (problemDescription: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment to see the AI demo in action.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Você é um consultor especialista em IA e Automação para empresas.
      O usuário descreveu o seguinte problema operacional: "${problemDescription}".
      
      Forneça uma resposta curta, direta e impactante (máximo 3 parágrafos curtos) sugerindo:
      1. Uma automação ou ferramenta de IA específica que resolveria isso.
      2. O ganho estimado de tempo ou redução de custo.
      
      Mantenha o tom profissional, inovador e encorajador. Formate com markdown simples.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }, // Fast response needed
        temperature: 0.7
      }
    });

    return response.text || "Não foi possível gerar um diagnóstico no momento. Tente novamente.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar a IA. Por favor, tente novamente mais tarde.";
  }
};