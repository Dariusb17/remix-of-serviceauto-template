import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Programare", desc: "Telefonic sau pe loc, în câteva minute." },
  { n: "02", title: "Diagnoză", desc: "Identificăm exact problema înainte de cost." },
  { n: "03", title: "Reparație", desc: "Lucrare executată cu piese verificate." },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(227,48,48,0.10), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          eyebrow="Proces"
          title="Cum lucrăm"
          watermark="02"
        />

        <div className="relative mt-20">
          <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          <div className="grid gap-12 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 140}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-medium text-primary">
                    {s.n}
                  </div>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[260px] text-sm font-light leading-[1.7] text-white/55">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
