import Reveal from "@/components/Reveal";
import { QUICK_FACTS } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-[84px] bg-paper py-24"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <Reveal
          as="p"
          className="font-bold uppercase tracking-[.18em] text-pine text-[16px]"
        >
          01 · About
        </Reveal>
        <Reveal
          as="h2"
          id="about-title"
          className="mt-3 font-display font-black text-4xl sm:text-5xl max-w-2xl leading-tight"
        >
          The human behind the commits.
        </Reveal>
        <p className="mt-2 font-hand text-3xl text-pine rotate-[-1deg] inline-block">
          the boring parts matter most ↷
        </p>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-start">
          <div className="space-y-6 text-[19px] leading-8 max-w-2xl">
            <Reveal as="p">
              I'm a full-stack developer from Antipolo City. For over eight years
              I've worked on property management systems, international software
              products and large company tools.
            </Reveal>
            <Reveal as="p" delay={1}>
              My work is mostly the part of software that people feel but never
              see: keeping systems reliable, making sure different programs talk
              to each other safely, and testing everything before it goes live.
            </Reveal>
            <Reveal as="p" delay={1}>
              After hours I build Shopify themes, generate images and short
              videos with AI, and keep a small home server running for the whole
              family.
            </Reveal>
            <Reveal as="p" delay={2} className="font-bold text-pine">
              I like technology that survives contact with real data.
            </Reveal>
          </div>

          <Reveal
            as="div"
            delay={1}
            className="bg-paper/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 rotate-[-1deg] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)] hover:rotate-0 transition-transform duration-500"
          >
            <h3 className="font-display font-bold text-2xl">Quick facts</h3>
            <dl className="mt-5 space-y-4">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.term} className="flex items-start gap-4">
                  <span aria-hidden="true" className="text-2xl">
                    {fact.icon}
                  </span>
                  <div>
                    <dt className="font-bold text-[16px] uppercase tracking-wide text-ink-soft">
                      {fact.term}
                    </dt>
                    <dd className="text-lg">{fact.detail}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal as="h3" className="mt-20 font-display font-bold text-3xl">
          How I work
        </Reveal>
        <ul className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          <Reveal
            as="li"
            className="flex gap-5 bg-paper rounded-3xl p-8 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]"
          >
            <span
              aria-hidden="true"
              className="font-display font-black text-4xl text-pine opacity-30 mt-[-4px]"
            >
              1
            </span>
            <p className="text-[17.5px] leading-relaxed text-ink/90">
              Find the slowest or weakest spot first — then fix that before
              anything else.
            </p>
          </Reveal>
          <Reveal
            as="li"
            delay={1}
            className="flex gap-5 bg-paper rounded-3xl p-8 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)] sm:translate-y-4"
          >
            <span
              aria-hidden="true"
              className="font-display font-black text-4xl text-pine opacity-30 mt-[-4px]"
            >
              2
            </span>
            <p className="text-[17.5px] leading-relaxed text-ink/90">
              Error-free is a daily habit, not a last-minute scramble before a
              deadline.
            </p>
          </Reveal>
          <Reveal
            as="li"
            delay={1}
            className="flex gap-5 bg-paper rounded-3xl p-8 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.15)]"
          >
            <span
              aria-hidden="true"
              className="font-display font-black text-4xl text-pine opacity-30 mt-[-4px]"
            >
              3
            </span>
            <p className="text-[17.5px] leading-relaxed text-ink/90">
              I own a feature from first idea to release — and I stay around to
              support it.
            </p>
          </Reveal>
          <Reveal
            as="li"
            delay={2}
            className="flex gap-5 bg-pine text-cream rounded-3xl p-8 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.4)] sm:translate-y-4"
          >
            <span
              aria-hidden="true"
              className="font-display font-black text-3xl text-amber"
            >
              4
            </span>
            <p className="text-lg leading-7">
              React today, Laravel yesterday, AI tomorrow — the tools change, the
              care doesn't.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
