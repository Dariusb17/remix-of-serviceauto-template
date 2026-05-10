import { useEffect, useState } from "react";

export function ScrollGlow() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = (y * 0.15) % 1200;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(ellipse 50% 35% at 50% ${20 + top * 0.05}%, rgba(227,48,48,0.10), transparent 70%)`,
        transition: "background 200ms linear",
      }}
    />
  );
}
