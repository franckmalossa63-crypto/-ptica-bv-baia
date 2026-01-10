
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStylingRecommendation = async (faceShape: string, style: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Como estilista visual da BV BAIA Óptica em Angola, recomende o tipo ideal de armação para um cliente com rosto ${faceShape} que prefere um estilo ${style}. Seja profissional, elegante e mencione a importância de lentes de qualidade.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Não foi possível gerar a recomendação agora. Por favor, consulte um dos nossos especialistas.";
  }
};
