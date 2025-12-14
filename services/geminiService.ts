import { GoogleGenAI } from "@google/genai";

// Helper to ensure we get a fresh instance with the potentially newly selected key
const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateDescription = async (
  productName: string, 
  features: string
): Promise<string> => {
  const ai = getAIClient();
  
  try {
    // Simulating GPT-4o-mini behavior using a fast Gemini model
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Write a compelling, SEO-optimized WooCommerce product description for: ${productName}. 
      Key features: ${features}. 
      Ensure the tone is professional yet persuasive. Avoid hallucinations. Keep it concise.`,
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Generation Error:", error);
    throw error;
  }
};
