"use client";
import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "ai", content: "👋 Hi, I'm your AI Assistant! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages, // send previous messages for memory
        }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg hover:scale-105 transition transform"
      >
        <img
          src="/chatbot.png"
          alt="Chatbot"
          className="w-10 h-10"
        />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-zinc-900 text-white rounded-2xl shadow-lg overflow-hidden flex flex-col z-50">
          <div className="bg-black px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">AI Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${msg.role === "user"
                    ? "ml-auto bg-zinc-700 text-white"
                    : "mr-auto bg-zinc-800 text-zinc-200"
                  }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-zinc-500 text-sm">AI is typing...</div>}
          </div>

          {/* Input */}
          <div className="flex p-3 border-t border-zinc-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-zinc-800 text-white rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-3 py-2 bg-black rounded-lg hover:bg-zinc-700 transition"
              disabled={loading}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
