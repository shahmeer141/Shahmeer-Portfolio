"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const objects = [
  { type: "dot" as const, top: "12%", left: "14%", size: 6, rotate: 0, delay: "0s" },
  { type: "dot" as const, top: "22%", left: "78%", size: 5, rotate: 0, delay: "0.8s" },
  { type: "dot" as const, top: "41%", left: "24%", size: 7, rotate: 0, delay: "0.6s" },
  { type: "dot" as const, top: "52%", left: "88%", size: 4, rotate: 0, delay: "1.2s" },
  { type: "dot" as const, top: "68%", left: "11%", size: 6, rotate: 0, delay: "1.1s" },
  { type: "dot" as const, top: "74%", left: "62%", size: 5, rotate: 0, delay: "0.9s" },
  { type: "dot" as const, top: "86%", left: "42%", size: 7, rotate: 0, delay: "2s" },
  { type: "dot" as const, top: "18%", left: "48%", size: 5, rotate: 0, delay: "1.6s" },
  { type: "stroke" as const, top: "16%", left: "82%", size: 36, rotate: 48, delay: "0.7s" },
  { type: "stroke" as const, top: "48%", left: "86%", size: 40, rotate: 55, delay: "0.9s" },
  { type: "stroke" as const, top: "29%", left: "18%", size: 38, rotate: -28, delay: "1.5s" },
  { type: "stroke" as const, top: "71%", left: "74%", size: 34, rotate: 22, delay: "0.4s" },
  { type: "stroke" as const, top: "84%", left: "20%", size: 32, rotate: -18, delay: "1.8s" },
];

export function SageBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX / window.innerWidth;
      mouse.current.y = event.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let frame = 0;
    const tick = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.055;
      current.current.y += (mouse.current.y - current.current.y) * 0.055;
      const valueX = current.current.x.toFixed(4);
      const valueY = current.current.y.toFixed(4);
      document.documentElement.style.setProperty("--mx", valueX);
      document.documentElement.style.setProperty("--my", valueY);
      rootRef.current?.style.setProperty("--mx", valueX);
      rootRef.current?.style.setProperty("--my", valueY);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ "--mx": "0.5", "--my": "0.5" } as CSSProperties}
    >
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.35'/></svg>\")",
        }}
      />

      <div
        className="absolute h-10 w-10 rounded-full bg-sage/50 blur-[10px]"
        style={{
          left: "calc(var(--mx) * 100%)",
          top: "calc(var(--my) * 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute h-40 w-40 rounded-full bg-gold/10 blur-[40px]"
        style={{
          left: "calc(var(--mx) * 100%)",
          top: "calc(var(--my) * 100%)",
          transform:
            "translate(calc(-50% + 28px), calc(-50% - 18px))",
        }}
      />

      {objects.map((item, index) => {
        const shape =
          item.type === "stroke" ? (
            <span className="block h-[1.5px] w-full origin-center bg-foreground/3" />
          ) : (
            <span className="block h-full w-full rounded-full bg-foreground/10" />
          );

        return (
          <span
            key={index}
            className={index % 2 === 0 ? "animate-drift absolute" : "animate-drift-slow absolute"}
            style={{
              top: item.top,
              left: item.left,
              width: `${item.size}px`,
              height: `${item.size}px`,
              animationDelay: item.delay,
            }}
          >
            <span
              className="block h-full w-full"
              style={{
                transform: `translate3d(calc((var(--mx) - 0.5) * ${14 + index * 5}px), calc((var(--my) - 0.5) * ${8 + index * 4}px), 0) rotate(${item.rotate}deg)`,
              }}
            >
              {shape}
            </span>
          </span>
        );
      })}
    </div>
  );
}
