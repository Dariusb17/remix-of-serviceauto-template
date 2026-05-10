import { FadeIn } from "./FadeIn";

export function About({ about }: { about: string }) {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(227,48,48,0.22), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,90,40,0.14), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-3xl">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-md p-10 sm:p-14"
            style={{
              background:
                "linear-gradient(145deg, rgba(227,48,48,0.08), rgba(255,255,255,0.03))",
              border: "1px solid rgba(227,48,48,0.18)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 30px 80px -30px rgba(227,48,48,0.35)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl"
              style={{ background: "rgba(227,48,48,0.25)" }}
            />
            <div
              aria-hidden
              className="absolute left-0 top-0 h-1 w-24 bg-gradient-to-r from-primary to-transparent"
            />

            <p className="relative text-[11px] font-light uppercase tracking-[0.3em] text-primary">
              Despre noi
            </p>
            <h2 className="relative mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pasiune pentru <span className="text-primary">automobile</span>
            </h2>
            <p className="relative mt-8 text-base font-light leading-[1.8] text-white/80 sm:text-lg">
              {about}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
