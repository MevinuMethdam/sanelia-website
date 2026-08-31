import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are the "Sanélia Gift Concierge", a highly elegant, friendly, and helpful AI assistant for the premium gifting and self-care brand 'Sanélia'. 
Your tone is warm, aesthetic, and polite (use words like 'lovely', 'curated', 'perfect choice'). 
Help customers find the perfect gifts such as Hand Creams, Charm Necklaces, and Custom Gift Boxes. 
IMPORTANT RULE: If a customer asks for the price of any product, politely inform them to send a Direct Message (DM) to our Instagram page (@sanelia.aura) for pricing and purchasing details. Do not state any exact prices.
Keep your responses concise, readable, and structured. Always speak English but you can warmly greet in Sinhala if the user speaks Sinhala.`;

export default function GiftAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'model', text: 'Hello! 🌸 Welcome to Sanélia. Are you looking for a special gift today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);
    const chatSessionRef = useRef(null);

    useEffect(() => {
        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            systemInstruction: SYSTEM_PROMPT
        });
        chatSessionRef.current = model.startChat({ history: [] });
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userText = input;
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setInput('');
        setIsTyping(true);

        try {
            const result = await chatSessionRef.current.sendMessage(userText);
            const aiResponse = result.response.text();

            setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
        } catch (error) {
            const quotaErrorMessage = "Sanélia is all about creating meaningful, aesthetic gifts curated with love for life's special moments. 🌸 Currently, our AI Gift Concierge is resting due to very high demand. Please lovely soul, reach out to us directly on Instagram **@sanelia.aura** for prompt, personalized assistance. 💖";
            setMessages(prev => [...prev, { role: 'model', text: quotaErrorMessage }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end">

            {isOpen && (
                <div className="mb-4 sm:mb-6 w-[calc(100vw-2rem)] sm:w-[400px] h-[70vh] sm:h-[500px] max-h-[500px] flex flex-col rounded-3xl bg-white/80 backdrop-blur-xl border border-rose-100 shadow-2xl overflow-hidden transition-all duration-300">

                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 flex justify-between items-center border-b border-rose-100">
                        <div className="flex items-center gap-3">
                            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm border border-rose-100">
                                <Sparkles size={20} className="text-rose-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-rose-900 font-serif text-lg leading-tight">Sanélia Concierge</h3>
                                <p className="text-xs text-rose-500 font-medium mt-0.5">Online & ready to help</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-rose-400 hover:text-rose-700 transition bg-white p-1.5 rounded-full shadow-sm border border-rose-50 hover:bg-rose-50">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-[14px] shadow-sm ${
                                    msg.role === 'user'
                                        ? 'bg-rose-400 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 rounded-bl-none border border-rose-100'
                                }`}>

                                    {msg.role === 'user' ? (
                                        <p className="whitespace-pre-wrap">{msg.text}</p>
                                    ) : (
                                        <div className="leading-relaxed">
                                            <ReactMarkdown
                                                components={{
                                                    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                                    strong: ({node, ...props}) => <strong className="font-semibold text-rose-800" {...props} />,
                                                    ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                                                    ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                                                    li: ({node, ...props}) => <li {...props} />
                                                }}
                                            >
                                                {msg.text}
                                            </ReactMarkdown>
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-rose-100 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                    <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-2 h-2 bg-rose-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 bg-white border-t border-rose-100">
                        <div className="flex items-center gap-2 bg-rose-50/50 rounded-full pl-4 pr-1.5 py-1.5 border border-rose-200 focus-within:border-rose-400 focus-within:bg-white transition-all shadow-inner">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 py-1"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isTyping || !input.trim()}
                                className="w-8 h-8 rounded-full bg-rose-400 flex items-center justify-center text-white hover:bg-rose-500 transition disabled:opacity-50 disabled:bg-rose-300 shadow-sm"
                            >
                                <Send size={14} className="-ml-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative w-16 h-16">

                <div className={`absolute inset-0 bg-rose-400 rounded-full animate-ping opacity-60 ${isOpen ? 'hidden' : 'block'}`}></div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`absolute inset-0 w-full h-full bg-gradient-to-tr from-rose-400 to-rose-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(244,63,94,0.4)] ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
                >
                    <MessageCircle size={30} strokeWidth={2.5} />
                </button>

            </div>
        </div>
    );
}