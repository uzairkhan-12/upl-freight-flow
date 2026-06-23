import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  dotSpeed?: number;
  className?: string;
  loop?: boolean;
}

export function TypewriterText({
  text,
  speed = 320,
  dotSpeed = 160,
  className = "",
  loop = true,
}: TypewriterTextProps) {
  const [revealed, setRevealed] = useState(0);
  const [dots, setDots] = useState(0);
  const [phase, setPhase] = useState<"char" | "dots">("char");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "char") {
      if (revealed < text.length) {
        timeout = setTimeout(() => {
          setRevealed((r) => r + 1);
          setDots(1);
          setPhase("dots");
        }, speed);
      } else if (loop) {
        timeout = setTimeout(() => {
          setRevealed(0);
          setDots(1);
          setPhase("dots");
        }, speed * 3);
      }
    } else {
      if (dots < 3) {
        timeout = setTimeout(() => {
          setDots((d) => d + 1);
        }, dotSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("char");
          setDots(0);
        }, dotSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, revealed, dots, phase, speed, dotSpeed, loop]);

  return (
    <>
      <span aria-hidden className={`inline-block whitespace-nowrap ${className}`}>
        {text.slice(0, revealed)}
        <span className="inline-block w-[1ch] text-center">
          {".".repeat(dots)}
          <span className="inline-block w-0 overflow-hidden align-bottom">
            {".".repeat(3 - dots)}
          </span>
        </span>
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
