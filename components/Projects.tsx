"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const PER_PAGE = 2;
const PAGES = Math.ceil(projects.length / PER_PAGE);

export default function Projects() {
  const [page, setPage] = useState(0);
  const visible = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="projects" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
                03 — Selected Projects
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tightest text-bone md:text-5xl">
                Things I&apos;ve shipped.
              </h2>
            </div>

            {/* Arrow nav */}
            <div className="flex gap-3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line font-mono text-bone-faint transition-all hover:border-amber-glow hover:text-amber-glow hover:shadow-[0_0_16px_rgba(233,162,59,0.3)] disabled:cursor-not-allowed disabled:opacity-25"
              >
                ←
              </button>
              <button
                onClick={() => setPage((p) => Math.min(PAGES - 1, p + 1))}
                disabled={page === PAGES - 1}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line font-mono text-bone-faint transition-all hover:border-amber-glow hover:text-amber-glow hover:shadow-[0_0_16px_rgba(233,162,59,0.3)] disabled:cursor-not-allowed disabled:opacity-25"
              >
                →
              </button>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex items-center gap-2">
            {Array.from({ length: PAGES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-8 bg-amber-glow shadow-[0_0_8px_rgba(233,162,59,0.7)]"
                    : "w-2 bg-bone-faint/25 hover:bg-bone-faint/50"
                }`}
              />
            ))}
            <span className="ml-3 font-mono text-[10px] text-bone-faint">
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(PAGES).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((p, i) => {
            const globalIdx = page * PER_PAGE + i;
            return (
              <TiltCard key={p.name}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-soft/50 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-amber-deep/50">
                  {/* Spotlight glow (coordinates from TiltCard CSS vars) */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(233,162,59,0.09) 0%, transparent 65%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl text-bone">
                      {p.name}
                    </h3>
                    <span className="font-mono text-2xl font-light leading-none text-bone-faint/15">
                      {String(globalIdx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="relative mt-3 flex-1 leading-relaxed text-bone-dim">
                    {p.blurb}
                  </p>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-bone-faint transition-colors duration-200 group-hover:border-amber-deep/30 group-hover:text-bone-dim"
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
                      className="relative mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-glow transition-all duration-200 hover:gap-3 hover:text-bone"
                    >
                      {p.linkLabel ?? "Visit"}
                      <span>↗</span>
                    </a>
                  )}
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
