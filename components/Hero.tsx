import { profile, stack } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Animated ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 hero-grid" />

      <div className="mx-auto max-w-6xl px-6 pb-16 pt-32">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-amber-glow opacity-0 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          {profile.location}
        </p>

        <h1
          className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-tightest text-bone opacity-0 animate-fade-up sm:text-7xl md:text-[7rem]"
          style={{ animationDelay: "120ms" }}
        >
          Daniel
          <br />
          <span className="text-bone-dim">Ojiezele</span>
        </h1>

        {/* Typewriter role line */}
        <p
          className="mt-6 font-mono text-lg text-amber-glow opacity-0 animate-fade-up sm:text-xl"
          style={{ animationDelay: "200ms" }}
        >
          <Typewriter
            words={[
              "FullStack Engineer",
              "React & Node.js Dev",
              "Fintech Builder",
              "Frontend Engineer",
              "API Architect",
            ]}
          />
        </p>

        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-bone-dim opacity-0 animate-fade-up"
          style={{ animationDelay: "280ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {/* Primary CTA with sweep effect */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-amber-glow px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(251,191,36,0.65)]"
          >
            <span className="relative z-10">View work</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 -translate-x-full bg-amber-deep transition-transform duration-300 group-hover:translate-x-0" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-bone-dim transition-all hover:border-violet-glow/70 hover:text-violet-glow hover:shadow-[0_0_28px_rgba(167,139,250,0.2)]"
          >
            Hire me
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-bone-dim transition-all hover:border-amber-glow/60 hover:text-bone"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 flex items-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-deep" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-faint">
            Scroll to explore
          </span>
          <div className="animate-scroll-bounce text-amber-deep">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2v10M3 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-auto border-y border-line py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="font-mono text-sm uppercase tracking-widest text-bone-faint"
            >
              {s} <span className="text-amber-deep">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
