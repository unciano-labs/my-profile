"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/lib/data";

const EMAIL = "itsmefreddieunciano@gmail.com";
const FIELD_IDS: Record<string, string> = {
  name: "fName",
  email: "fEmail",
  message: "fMsg",
};

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  function handleCopy() {
    function done() {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
    function fallback() {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, fallback);
    } else {
      fallback();
    }
  }

  function clearError(field: "name" | "email" | "message") {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      next.message = "Please write a short message — at least 10 characters.";
    setErrors(next);
    const first = (["name", "email", "message"] as const).find((k) => next[k]);
    if (first) {
      document.getElementById(FIELD_IDS[first])?.focus();
      return;
    }
    setSent(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-[84px] relative bg-pine-deep text-cream overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/calm-evening-lights/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover brightness-[.4]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-pine-deep/60" aria-hidden="true"></div>

      <div className="relative max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-12 items-start">
          <div>
            <Reveal
              as="p"
              className="font-bold uppercase tracking-[.18em] text-amber text-[16px]"
            >
              08 · Contact
            </Reveal>
            <Reveal
              as="h2"
              id="contact-title"
              className="mt-3 font-display font-black text-4xl sm:text-5xl"
            >
              Let's talk.
              <svg
                className="mt-1 w-44"
                viewBox="0 0 180 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7 C 40 2, 90 11, 130 6 S 170 4, 177 7"
                  stroke="#E9A13B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </Reveal>
            <Reveal as="p" delay={1} className="mt-5 text-xl leading-8 max-w-xl">
              Have a role that needs a careful, steady developer? I usually reply
              within 24 hours. I'm based in Antipolo City and happy to work with
              US and Europe time zones.
            </Reveal>

            <Reveal as="ul" delay={1} className="mt-8 space-y-4 text-lg">
              <li className="flex items-center gap-3 flex-wrap">
                <span aria-hidden="true" className="text-xl">
                  ✉️
                </span>
                <a
                  href="mailto:itsmefreddieunciano@gmail.com"
                  className="font-bold underline decoration-2 underline-offset-4 hover:text-amber"
                >
                  itsmefreddieunciano@gmail.com
                </a>
                <button
                  id="copyEmail"
                  onClick={handleCopy}
                  className="min-h-[40px] px-4 rounded-lg border-2 border-cream/70 font-bold text-[15px] hover:bg-cream/10"
                  aria-live="polite"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-xl">
                  📞
                </span>
                <a href="tel:+63286597922" className="font-bold hover:text-amber">
                  (02) 8659-7922
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-xl">
                  📍
                </span>
                <span className="font-bold">Antipolo City 1870, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="text-xl">
                  📄
                </span>
                <a
                  href="/Resume-Freddie-Unciano-Jr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline decoration-2 underline-offset-4 hover:text-amber"
                >
                  Download my résumé (PDF)
                </a>
              </li>
            </Reveal>

            <Reveal
              as="p"
              delay={2}
              className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-lg font-bold"
            >
              <a
                href="https://github.com/fredunciano"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-4 hover:text-amber"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/freddieunciano/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-4 hover:text-amber"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://v2.onlinejobs.ph/jobseekers/info/855253"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-2 underline-offset-4 hover:text-amber"
              >
                OnlineJobs ↗
              </a>
            </Reveal>

            <Reveal as="h3" className="mt-14 font-display font-bold text-2xl">
              Working together — common questions
            </Reveal>
            <Reveal
              as="div"
              delay={1}
              className="mt-5 divide-y-2 divide-cream/20 border-y-2 border-cream/20"
            >
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q}>
                    <button
                      className="faq-q w-full flex items-center justify-between gap-4 py-4 text-left font-bold text-lg hover:text-amber"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                    >
                      {f.q}
                      <span
                        className={`faq-icon text-amber text-2xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div 
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="faq-a pb-4 text-[17px] leading-7 text-cream/95">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          <Reveal
            as="div"
            id="formCard"
            delay={1}
            className="bg-paper text-ink rounded-lg p-6 sm:p-8 shadow-2xl rotate-[-.4deg]"
          >
            <h3 className="font-display font-black text-2xl sm:text-3xl">Send me a message</h3>
            <p className="mt-1 text-[17px] text-ink-soft">
              A direct line — no middleman. I read everything myself.
            </p>

            {sent ? (
              <div
                ref={successRef}
                id="formSuccess"
                className="mt-6 bg-sage border-2 border-pine rounded-lg p-6 text-center"
                tabIndex={-1}
                aria-live="polite"
              >
                <p className="text-4xl" aria-hidden="true">
                  🌿
                </p>
                <p className="mt-3 font-display font-black text-2xl">
                  Message sent — thank you!
                </p>
                <p className="mt-2 text-[17px]">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                id="contactForm"
                className="mt-6 space-y-4"
                noValidate
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="fName" className="block font-bold text-[17px]">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="fName"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      clearError("name");
                    }}
                    className={`mt-1.5 w-full min-h-[48px] rounded-lg border-2 ${
                      errors.name ? "border-brick" : "border-ink/25"
                    } bg-cream px-4 text-[17px] focus:border-pine focus:outline-none focus:ring-0`}
                    aria-describedby="err-fName"
                  />
                  <p
                    id="err-fName"
                    className="field-err mt-1.5 font-bold text-brick text-sm"
                    role="alert"
                  >
                    {errors.name ?? ""}
                  </p>
                </div>
                <div>
                  <label htmlFor="fEmail" className="block font-bold text-[17px]">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="fEmail"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearError("email");
                    }}
                    className={`mt-1.5 w-full min-h-[48px] rounded-lg border-2 ${
                      errors.email ? "border-brick" : "border-ink/25"
                    } bg-cream px-4 text-[17px] focus:border-pine focus:outline-none focus:ring-0`}
                    aria-describedby="err-fEmail"
                  />
                  <p
                    id="err-fEmail"
                    className="field-err mt-1.5 font-bold text-brick text-sm"
                    role="alert"
                  >
                    {errors.email ?? ""}
                  </p>
                </div>
                <div>
                  <label htmlFor="fMsg" className="block font-bold text-[17px]">
                    Your message
                  </label>
                  <textarea
                    id="fMsg"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      clearError("message");
                    }}
                    className={`mt-1.5 w-full rounded-lg border-2 ${
                      errors.message ? "border-brick" : "border-ink/25"
                    } bg-cream px-4 py-3 text-[17px] focus:border-pine focus:outline-none focus:ring-0`}
                    aria-describedby="err-fMsg"
                  ></textarea>
                  <p
                    id="err-fMsg"
                    className="field-err mt-1.5 font-bold text-brick text-sm"
                    role="alert"
                  >
                    {errors.message ?? ""}
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center min-h-[52px] rounded-lg bg-pine text-cream font-bold text-[19px] hover:bg-pine-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
