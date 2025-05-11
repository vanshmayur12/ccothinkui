import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "👋 Hey, I'm COTHINK AI. Ask me anything!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        text: `🤖 "${input}" — nice question! Let me think on it.`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-br from-black to-gray-900 text-white font-sans">
      {/* Header */}
      <div className="w-full text-center text-xl font-bold py-4 border-b border-gray-800 bg-black/40 backdrop-blur-md">
        COTHINK AI 
      </div>

      {/* Chat Window */}
      <div className="flex-1 w-full max-w-3xl overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`max-w-[75%] px-4 py-3 rounded-2xl text-base leading-snug break-words ${
              msg.sender === "user"
                ? "ml-auto bg-blue-600"
                : "mr-auto bg-gray-800"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mr-auto bg-gray-700 px-4 py-2 rounded-xl flex items-center gap-1 w-fit"
          >
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]" />
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <div className="w-full max-w-3xl px-4 py-3 border-t border-gray-800 bg-black/30 backdrop-blur-lg flex gap-2 items-center">
        <input
          type="text"
          placeholder="Ask me something..."
          className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-red-600 hover:bg-red-700 transition-all duration-200 px-5 py-2 rounded-full"
        >
          ➤
        </button>
      </div>

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-sm bg-white text-black px-4 py-1 rounded-full shadow hover:scale-105 transition
        
        font-poppins
        "
      >
       home
      </button>
    </div>
  );
}

export default Home;
