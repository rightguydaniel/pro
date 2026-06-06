"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  pause = 1800,
}: {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];

    if (!isDeleting && displayed === word) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () =>
        setDisplayed(
          isDeleting
            ? word.slice(0, displayed.length - 1)
            : word.slice(0, displayed.length + 1)
        ),
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [displayed, isDeleting, idx, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="inline-flex items-center gap-0.5">
      <span>{displayed}</span>
      <span className="inline-block h-[1em] w-[2px] animate-blink bg-amber-glow" />
    </span>
  );
}
