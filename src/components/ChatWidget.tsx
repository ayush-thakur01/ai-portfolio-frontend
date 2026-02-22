import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface ChatWidgetProps {
  forceOpen?: boolean;
}

const ChatWidget = ({ forceOpen }: ChatWidgetProps) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
  if (forceOpen) {
    setOpen(true);
  }
}, [forceOpen]);
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user" as const, text: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://ai-portfolio-backend-tovu.onrender.com/chat", {
        message: input,
      });

      setMessages([
        ...updatedMessages,
        { sender: "ai", text: res.data.response },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        { sender: "ai", text: "Server error. Try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className=""
      >
        AI
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[420px] h-[520px] bg-slate-900/90 backdrop-blur-2xl border border-slate-700 rounded-2xl shadow-2xl flex flex-col p-5">

          {/* Header */}
          <div className="flex justify-between items-center border-b border-slate-700 pb-3 mb-4">
            <h2 className="text-white font-semibold text-lg">
              Ayush AI Assistant
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto space-y-4 text-sm pr-2"
          >
            {messages.map((msg, i) =>
              msg.sender === "user" ? (
                <div
                  key={i}
                  className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-xl max-w-[75%] shadow"
                >
                  {msg.text}
                </div>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-slate-800 text-white px-4 py-2 rounded-xl max-w-[75%] shadow">
                    {msg.text}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                  AI
                </div>
                <div className="bg-slate-800 text-white px-4 py-2 rounded-xl animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex mt-4 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Ayush..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 px-5 rounded-xl text-white transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;