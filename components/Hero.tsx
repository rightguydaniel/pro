import { profile, stack } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-amber-glow opacity-0 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          {profile.role} · {profile.location}
        </p>

        <h1
          className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-tightest text-bone opacity-0 animate-fade-up sm:text-7xl md:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          Daniel
          <br />
          <span className="text-bone-dim">Ojiezele</span>
        </h1>

        <p
          className="mt-8 max-w-xl text-lg leading-relaxed text-bone-dim opacity-0 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="mt-10 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-glow px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
          >
            View work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone-dim transition-colors hover:border-bone hover:text-bone"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Marquee of the stack */}
      <div className="relative border-y border-line py-4">
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
