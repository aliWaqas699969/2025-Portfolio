import { GoogleGenAI } from "@google/genai";
import { RESUME } from "../Constant";

let aiClient = null;

const getAiClient = () => {
  if (!aiClient) {
    const key = import.meta.env.VITE_GEMINI_API_KEY;

    if (!key) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key missing");
    }

    aiClient = new GoogleGenAI({ apiKey: key });
  }
  return aiClient;
};

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of Ali Waqas, a Full Stack Engineer. 
You are embedded in his portfolio website.
Your goal is to answer questions about Ali's experience, skills, and projects based STRICTLY on the provided resume context.
Speak in the first person (as if you are Ali).
Be professional, concise, slightly witty, and enthusiastic about technology.
Do not hallucinate experiences not listed in the context.
If asked about contact info, provide the email or social links from the context.

RESUME CONTEXT:
${JSON.stringify(RESUME)}
`;

export const sendMessageToGemini = async (history, newMessage) => {
  try {
    const ai = getAiClient();

    // Construct conversation string
    const conversationStr = history
      .slice(-6)
      .map((m) => `${m.role === "user" ? "Recruiter" : "Ali"}: ${m.text}`)
      .join("\n");

    const prompt = `
    ${SYSTEM_INSTRUCTION}

    Current Conversation History:
    ${conversationStr}

    Recruiter's Latest Question: ${newMessage}
    
    Ali's Answer:
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
        temperature: 0.7,
      },
    });

    return (
      response.text ||
      "I'm having a bit of trouble connecting to my thought process right now. Please try again."
    );
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be offline at the moment (API Error). You can check my static resume below!";
  }
};
export default sendMessageToGemini;
