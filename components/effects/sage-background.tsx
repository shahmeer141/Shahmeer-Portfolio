"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const fragments = [
  { top: "12%", left: "8%", size: 18, rotate: 24, delay: "0s" },
  { top: "22%", left: "78%", size: 12, rotate: -18, delay: "1.2s" },
  { top: "68%", left: "14%", size: 14, rotate: 40, delay: "0.6s" },
  { top: "74%", left: "88%", size: 20, rotate: -8, delay: "2s" },
  { top: "40%", left: "92%", size: 10, rotate: 55, delay: "0.3s" },
  { top: "86%", left: "42%", size: 16, rotate: -30, delay: "1.6s" },
  { top: "8%", left: "48%", size: 11, rotate: 12, delay: "2.4s" },
  { top: "52%", left: "4%", size: 13, rotate: -42, delay: "0.9s" },
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
      <div className="absolute inset-0 bg-[#0c110f]" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 168, 136, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 168, 136, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          transform:
            "translate3d(calc((var(--mx) - 0.5) * -18px), calc((var(--my) - 0.5) * -12px), 0)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform:
            "translate3d(calc((var(--mx) - 0.5) * 28px), calc((var(--my) - 0.5) * 20px), 0)",
        }}
      >
        <path
          d="M-40 180C180 80 320 260 520 210C720 160 820 40 1040 90C1260 140 1380 80 1500 40"
          stroke="#8BA888"
          strokeWidth="1.2"
        />
        <path
          d="M-20 260C200 170 360 330 560 280C760 230 880 110 1100 170C1320 230 1400 180 1520 140"
          stroke="#8BA888"
          strokeWidth="1"
        />
        <path
          d="M-60 520C140 430 300 610 540 540C780 470 900 620 1120 560C1340 500 1420 620 1540 580"
          stroke="#6B8A6E"
          strokeWidth="1.1"
        />
        <path
          d="M-40 640C180 720 340 560 560 630C780 700 920 540 1140 600C1360 660 1440 560 1560 610"
          stroke="#8BA888"
          strokeWidth="1"
        />
        <path
          d="M80 780C280 700 420 840 640 760C860 680 980 820 1200 740C1420 660 1480 780 1600 720"
          stroke="#5F7A63"
          strokeWidth="1"
        />
      </svg>

      <div
        className="animate-pulse-glow absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full bg-sage/25 blur-[90px]"
        style={{
          transform:
            "translate3d(calc((var(--mx) - 0.5) * 50px), calc((var(--my) - 0.5) * 36px), 0)",
        }}
      />
      <div
        className="absolute top-[38%] left-[-10%] h-[380px] w-[380px] rounded-full bg-moss blur-[80px]"
        style={{
          transform:
            "translate3d(calc((var(--mx) - 0.5) * -40px), calc((var(--my) - 0.5) * 48px), 0)",
        }}
      />
      <div
        className="absolute right-[18%] bottom-[-8%] h-[300px] w-[300px] rounded-full bg-gold/15 blur-[80px]"
        style={{
          transform:
            "translate3d(calc((var(--mx) - 0.5) * 32px), calc((var(--my) - 0.5) * -28px), 0)",
        }}
      />

      <div
        className="absolute h-48 w-48 rounded-full bg-sage/20 blur-[50px]"
        style={{
          left: "calc(var(--mx) * 100%)",
          top: "calc(var(--my) * 100%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {fragments.map((item, index) => (
        <span
          key={index}
          className={index % 2 === 0 ? "animate-drift absolute" : "animate-drift-slow absolute"}
          style={{
            top: item.top,
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDelay: item.delay,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          <span
            className="block h-full w-full rounded-[4px] border border-sage/40 bg-sage/10"
            style={{
              transform: `translate3d(calc((var(--mx) - 0.5) * ${12 + index * 6}px), calc((var(--my) - 0.5) * ${8 + index * 4}px), 0) rotate(${item.rotate}deg)`,
            }}
          />
        </span>
      ))}

      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>\")",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0c110f_78%)]" />
    </div>
  );
}
