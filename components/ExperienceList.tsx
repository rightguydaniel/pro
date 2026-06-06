import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function ExperienceList() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
            02 — Experience
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tightest text-bone md:text-5xl">
            Where I&apos;ve worked.
          </h2>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-14 pl-6 md:pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-amber-glow via-amber-deep/40 to-transparent" />

          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 70}>
              <article className="group relative pb-14 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-[23px] top-[6px] flex h-4 w-4 items-center justify-center md:-left-[27px]">
                  <span className="h-2 w-2 rounded-full bg-amber-glow shadow-[0_0_8px_rgba(233,162,59,0.8)] transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(233,162,59,1)]" />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-line bg-ink-soft/30 p-6 transition-all duration-300 hover:border-amber-deep/40 hover:bg-ink-soft/60 hover:shadow-[0_4px_32px_rgba(0,0,0,0.4)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="font-display text-xl text-bone">
                          {job.role}
                        </h3>
                        <span className="font-mono text-sm text-amber-glow">
                          @ {job.company}
                        </span>
                      </div>
                      <p className="mt-0.5 font-mono text-xs text-bone-faint">
                        {job.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-bone-faint">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 leading-relaxed text-bone-dim"
                      >
                        <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-amber-deep/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
