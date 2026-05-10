import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const offset = (() => {
    if (visible || direction === "none") return "translate3d(0,0,0)";
    switch (direction) {
      case "up":
        return `translate3d(0,${distance}px,0)`;
      case "down":
        return `translate3d(0,-${distance}px,0)`;
      case "left":
        return `translate3d(${distance}px,0,0)`;
      case "right":
        return `translate3d(-${distance}px,0,0)`;
    }
  })();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: offset,
        opacity: visible ? 1 : 0,
      }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    >
      {children}
    </div>
  );
}
