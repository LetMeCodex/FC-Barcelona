import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the "Barça Assistant", an advanced AI expert on FC Barcelona. 
Your tone is passionate, knowledgeable, and elegant (matching the 'Més que un club' motto).
You know everything about the history, players (Cruyff, Messi, Guardiola, Xavi, Iniesta, etc.), trophies, and tactical styles (Tiki-Taka).
Keep responses concise but engaging. If asked about rivals (Real Madrid), maintain respectful sporting rivalry but clearly favor Barcelona.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    return response.text || "I apologize, I cannot access the Barça archives at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection to the Camp Nou mainframe interrupted. Please try again later.";
  }
};