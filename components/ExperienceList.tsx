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

        <div className="mt-14">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 60}>
              <article className="border-t border-line py-10 first:border-t-0">
                <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-display text-2xl text-bone">
                        {job.role}
                      </h3>
                      <span className="font-mono text-sm text-amber-glow">
                        @ {job.company}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-xs text-bone-faint">
                      {job.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-bone-faint whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed text-bone-dim">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-deep" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
