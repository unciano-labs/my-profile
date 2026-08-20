import Reveal from "@/components/Reveal";
import { LAB_CARDS } from "@/lib/data";

export default function Lab() {
  return (
    <section
      id="lab"
      aria-labelledby="lab-title"
      className="scroll-mt-[84px] bg-paper py-24"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal
              as="p"
              className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
            >
              04 · The Lab
            </Reveal>
            <Reveal
              as="h2"
              id="lab-title"
              className="mt-3 font-display font-black text-4xl sm:text-5xl"
            >
              After-hours experiments.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={1}
            className="font-hand text-3xl text-pine rotate-[-1.5deg]"
          >
            for fun, honestly ✎
          </Reveal>
        </div>
        <Reveal as="p" delay={1} className="mt-4 text-xl text-ink-soft max-w-2xl">
          Three ongoing hobbies that keep me curious. Dated notes, honest results
          — no hype.
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {LAB_CARDS.map((card) => (
            <Reveal
              key={card.title}
              as="article"
              delay={card.delay}
              className={card.cardClassName}
            >
              <div className="relative">
                <img
                  src={card.image.src}
                  width={700}
                  height={440}
                  loading="lazy"
                  alt={card.image.alt}
                  className="w-full h-52 object-cover"
                />
                <span
                  className={`absolute top-4 -left-2 font-bold text-[15px] px-3 py-1 rounded-md shadow-md ${card.badge.className}`}
                >
                  {card.badge.label}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display font-black text-2xl">{card.title}</h3>
                <p className="mt-3 text-lg leading-8">{card.description}</p>
                <ul
                  className={`mt-5 space-y-3 text-[17px] leading-7 border-l-4 ${
                    card.noteBorder === "amber" ? "border-amber" : "border-pine"
                  } pl-5`}
                >
                  {card.notes.map((note) => (
                    <li key={note.date}>
                      <span className="font-bold text-pine">{note.date}</span> —{" "}
                      {note.text}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-paper border border-ink/10 rounded-full px-4 py-1.5 text-[16px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
