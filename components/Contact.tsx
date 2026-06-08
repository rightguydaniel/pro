import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
            04 — Contact
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tightest text-bone md:text-5xl">
            Let&apos;s work together.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone-dim">
            I&apos;m currently open to new opportunities. Whether you have a
            project in mind or just want to connect — my inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-amber-glow px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone-dim transition-all hover:border-violet-glow hover:text-violet-glow hover:shadow-[0_0_24px_rgba(167,139,250,0.2)]"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone-dim transition-all hover:border-amber-glow hover:text-amber-glow hover:shadow-[0_0_24px_rgba(251,191,36,0.2)]"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-mono text-xs text-bone-faint">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="font-mono text-xs text-bone-faint">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
