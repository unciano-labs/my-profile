import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function KindWords() {
  return (
    <section
      aria-labelledby="words-title"
      className="bg-sand py-24 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal
          as="p"
          className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
        >
          07 · Kind words
        </Reveal>
        <Reveal
          as="h2"
          id="words-title"
          className="mt-3 font-display font-black text-4xl sm:text-5xl"
        >
          What teammates say.
        </Reveal>
        <Reveal
          as="p"
          delay={1}
          className="mt-3 text-lg font-bold text-ink-soft"
        >
          References available on request.
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8 items-start">
          {TESTIMONIALS.map((t) => (
            <Reveal
              as="blockquote"
              key={t.author}
              delay={t.delay}
              className={`relative bg-paper border-2 border-ink/10 rounded-md p-8 shadow-md ${t.rotate} ${
                t.translate ?? ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-soft/80 ${t.tapeRotate} shadow-sm`}
              ></span>
              <p className="font-display italic text-[21px] leading-8">
                {t.quote}
              </p>
              <footer className="mt-5 font-bold text-[16px] uppercase tracking-wide text-pine">
                {t.author}
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
