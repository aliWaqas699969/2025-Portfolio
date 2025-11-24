import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { sendMessageToGemini } from "../services/geminiService.jsx";

export const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "model",
      text: "Hi! I'm Ali's Digital Twin. I can answer questions about his experience, stack, and projects. What would you like to know?",
      timestamp: Date.now(),
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      text: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const responseText = await sendMessageToGemini(messages, input);

    const botMsg = {
      id: (Date.now() + 1).toString(),
      role: "model",
      text: responseText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const suggestions = [
    "Does Ali know Next.js?",
    "Tell me about his biggest project.",
    "What databases has he used?",
    "Why should I hire him?",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto h-[550px] flex flex-col glass-panel rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
      {/* Header */}
      <div className="p-4 border-b border-white/5 bg-zinc-900/50 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-medium text-zinc-200 flex items-center gap-2">
          <Bot className="w-4 h-4 text-blue-400" />
          Ali Waqas
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === "model"
                  ? "bg-blue-600/20 text-blue-400"
                  : "bg-zinc-700/50 text-zinc-300"
              }`}
            >
              {msg.role === "model" ? (
                <Sparkles className="w-4 h-4" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>

            <div
              className={`p-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-zinc-800 text-zinc-100 rounded-tr-none"
                  : "bg-blue-600/10 text-zinc-100 border border-blue-500/10 rounded-tl-none"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-blue-400" />
            </div>
            <div className="bg-blue-600/10 p-3 rounded-2xl rounded-tl-none">
              <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-zinc-900/50 border-t border-white/5">
        {messages.length < 3 && !isTyping && (
          <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about my skills..."
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-white placeholder-zinc-600"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-2 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChatInterface;
