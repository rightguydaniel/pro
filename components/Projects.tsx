import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
            03 — Selected Projects
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tightest text-bone md:text-5xl">
            Things I&apos;ve shipped.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-ink-soft/40 p-7 transition-colors hover:border-amber-deep/60">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-bone">{p.name}</h3>
                  <span className="font-mono text-xs text-bone-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-bone-dim">
                  {p.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bone-faint"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-glow transition-colors hover:text-bone"
                  >
                    {p.linkLabel ?? "Visit"}
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
