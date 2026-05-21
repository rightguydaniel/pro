import { profile } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.3em] text-bone-dim transition-colors hover:text-bone"
        >
          {profile.name.split(" ")[0]}
          <span className="text-amber-glow">.</span>
        </a>

        <nav className="flex items-center gap-6">
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-bone-faint transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
