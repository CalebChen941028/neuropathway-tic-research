import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PAPER_CONTEXT } from "../paperContext";

let chatSession: Chat | null = null;

const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    // We will return a dummy object or throw, but for the UI to be graceful we might mock.
    // However, the prompt instructions say assume it's valid.
  }

  const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are a specialized research assistant for the paper "Tic severity and executive functioning in children and adolescents". 
      
      Use the following context to answer user questions strictly based on the paper's findings.
      
      CONTEXT:
      ${PAPER_CONTEXT}
      
      Tone: Academic yet accessible. Helpful, precise.
      If the answer is not in the context, state that the paper does not address that specific point.
      Keep answers concise (under 3 paragraphs).`,
    },
  });
  
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I couldn't generate a response based on the paper.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to the analysis model. Please check your API configuration.";
  }
};