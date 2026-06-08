import { profile, certifications } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
            01 — About
          </span>
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_auto]">
          <Reveal delay={80}>
            <p className="max-w-2xl text-xl leading-relaxed text-bone-dim">
              {profile.intro}
            </p>
            <p className="mt-6 font-mono text-sm text-amber-glow">
              {profile.availability}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="lg:w-72">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-bone-faint">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="border-l-2 border-violet-glow pl-4 font-mono text-xs leading-relaxed text-bone-dim"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
