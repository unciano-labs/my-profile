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
 * Placeholder reply generator.
 * TODO: replace with a real backend call — e.g. `fetch("/api/chat", …)` or a
 * websocket connection — when one is available.
 */
function stubReply(userText: string): string {
  return `Thanks for reaching out! (Heard: "${userText}") I'm a placeholder reply — wire me to a real backend soon.`;
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

  function handleSend(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
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

  return (
    <div
      ref={containerRef}
      className="relative group flex items-center justify-center"
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-ink text-cream text-[13px] font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink rotate-45"></div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-label="Chat with Freddie"
          className="absolute bottom-[calc(100%+24px)] right-0 sm:-right-12 w-[min(92vw,360px)] bg-paper/95 backdrop-blur-3xl text-ink rounded-2xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col cursor-auto"
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
            className="flex-1 px-4 py-4 space-y-3 overflow-y-auto max-h-[320px]"
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
      )}

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
