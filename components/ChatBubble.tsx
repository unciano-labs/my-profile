"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Hi! I'm Freddie's assistant. Leave a message and I'll make sure he gets it — or ask a quick question.",
  },
];

function newId(): string {
  return `m${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Mock AI reply generator.
 * Matches keywords to provide context-aware responses about Freddie.
 */
function stubReply(userText: string): string {
  const input = userText.toLowerCase();
  
  if (input.includes("tech stack") || input.includes("skills") || input.includes("technologies") || input.includes("frameworks") || input.includes("react") || input.includes("next.js")) {
    return "Freddie's core stack revolves around Next.js, React, Tailwind CSS, and TypeScript on the front-end, and Laravel, PHP, and Node.js on the back-end. He's also highly experienced with AI-assisted development and server administration. Would you like me to send over his full resume?";
  }
  
  if (input.includes("location") || input.includes("where") || input.includes("timezone") || input.includes("time zone") || input.includes("hours") || input.includes("country")) {
    return "Freddie is based in Antipolo City, Philippines (GMT+8). He has over 6 years of experience working remotely with US and European teams, so he's very comfortable adapting to different time zones and maintaining asynchronous communication.";
  }
  
  if (input.includes("experience") || input.includes("how long") || input.includes("years") || input.includes("background")) {
    return "He has over 8 years of professional experience as a full-stack developer, working across 3 different companies. His work ranges from legacy system modernization to building complex property management suites from scratch.";
  }
  
  if (input.includes("resume") || input.includes("cv") || input.includes("portfolio") || input.includes("download")) {
    return "You can download his full PDF resume directly from the 'Contact' section at the bottom of the page, or I can notify him to email you a direct copy. How would you like to proceed?";
  }

  if (input.includes("rate") || input.includes("salary") || input.includes("compensation") || input.includes("pay") || input.includes("cost")) {
    return "Freddie prefers to handle compensation and rate discussions directly. If you leave your email address here, I'll make sure he reaches out to you personally within 24 hours to discuss it.";
  }
  
  if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("greetings")) {
    return "Hello there! I'm Freddie's AI assistant. I can answer quick questions about his experience, tech stack, and availability, or I can take a message and pass it directly to his inbox. What can I help you with today?";
  }

  return "I've securely logged your message and will pass it directly to Freddie's personal inbox. He typically replies within 24 hours. Is there anything else you'd like me to add to the note?";
}

/**
 * Floating chat bubble + panel, matching the site's design language
 * (pine / cream / sage / amber, rounded corners, soft shadows).
 * State is fully local for now; see stubReply() above for the integration point.
 */
export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onDown(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  function sendMessage(rawText: string) {
    const text = rawText.trim();
    if (!text) return;
    const userMsg: ChatMessage = { id: newId(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply: ChatMessage = {
        id: newId(),
        role: "assistant",
        text: stubReply(text),
      };
      setMessages((prev) => [...prev, reply]);
      setTyping(false);
    }, 900);
  }

  function handleSend(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const PRESET_PROMPTS = [
    "What is your tech stack?",
    "Where are you based?",
    "Can I see your resume?",
    "What is your rate?"
  ];

  return (
    <div
      ref={containerRef}
      className="relative group flex items-center justify-center"
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-ink text-cream text-[13px] font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink rotate-45"></div>
      </div>

      <div
        role="dialog"
        aria-label="Chat with Freddie"
        aria-hidden={!open}
        className={`absolute bottom-[calc(100%+24px)] right-0 sm:-right-12 w-[min(92vw,360px)] bg-paper/95 backdrop-blur-3xl text-ink rounded-2xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col cursor-auto transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between bg-pine text-cream px-5 py-5">
          <div>
            <p className="font-display font-black text-lg leading-tight">
              Chat with Freddie
            </p>
            <p className="text-[14px] text-cream/80">
              Usually replies within 24 hours
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="min-h-[40px] min-w-[40px] rounded-lg hover:bg-pine-dark font-bold text-xl"
          >
            ✕
          </button>
        </div>

        <div
          ref={listRef}
          aria-live="polite"
          className="flex-1 px-4 py-4 space-y-3 overflow-y-auto max-h-[440px] no-scrollbar"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[17px] leading-7 shadow-sm ${
                  m.role === "user"
                    ? "bg-pine text-cream rounded-br-sm"
                    : "bg-sage/40 rounded-bl-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-sage/40 px-4 py-2.5 rounded-2xl rounded-bl-sm text-[17px] text-ink-soft shadow-sm">
                typing…
              </div>
            </div>
          )}
        </div>

        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar border-t border-ink/5">
          {PRESET_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-cream/60 hover:bg-cream text-[14px] text-ink-soft hover:text-ink shadow-sm transition-colors border border-ink/5"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSend}
          className="p-4 pt-2 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            aria-label="Message"
            className="flex-1 min-h-[48px] rounded-xl bg-cream/50 px-4 text-[17px] placeholder:text-ink-soft/50 focus:bg-cream focus:outline-none focus:ring-2 focus:ring-pine/20 transition-all shadow-inner"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center min-h-[48px] px-5 rounded-xl bg-pine text-cream font-bold text-[17px] hover:bg-pine-dark shadow-md transition-transform active:scale-95"
          >
            Send
          </button>
        </form>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1 font-display font-black text-xl shadow-md ${
          open ? "bg-amber text-ink" : "bg-pine text-cream hover:bg-pine-dark"
        }`}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
