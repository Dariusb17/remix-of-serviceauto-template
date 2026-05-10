import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 100, suffix: "%", label: "Lucrări garantate" },
  { value: 8500, suffix: "+", label: "Mașini reparate" },
  { value: 98, suffix: "%", label: "Clienți mulțumiți" },
  { value: 24, suffix: "h", label: "Timp mediu de răspuns" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] px-6 py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(227,48,48,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <div
              className={`relative flex flex-col items-center text-center md:px-6 ${
                i > 0 ? "md:border-l md:border-white/[0.08]" : ""
              }`}
            >
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-[4rem]">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 h-px w-8 bg-primary/70" />
              <p className="mt-3 text-[11px] font-light uppercase tracking-[0.3em] text-white/55">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
