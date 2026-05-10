import { Phone, ShieldCheck, Wrench, Star, Mouse } from "lucide-react";
import { hasContent } from "@/hooks/use-site-params";

export function Hero({
  name,
  city,
  phone,
  photo1,
}: {
  name: string;
  city: string;
  phone: string;
  photo1: string;
}) {
  const hasPhoto = hasContent(photo1);
  const hasPhone = hasContent(phone);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {hasPhoto ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={photo1}
              alt={name}
              className="h-full w-full object-cover"
              style={{ animation: "ken-burns 18s ease-out forwards" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 18% 12%, rgba(99,102,241,0.28) 0%, rgba(0,0,0,0) 65%), radial-gradient(ellipse 50% 40% at 85% 90%, rgba(79,70,229,0.18) 0%, rgba(0,0,0,0) 60%), #05060f",
          }}
        />
      )}

      {/* Drifting indigo aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 15% 10%, rgba(99,102,241,0.28), transparent 65%)",
          animation: "drift 14s ease-in-out infinite",
        }}
      />

      {/* Sweep highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -inset-y-20 -left-1/3 w-1/3 skew-x-[-20deg]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
            animation: "sweep 9s ease-in-out infinite 2s",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-24 sm:px-10 lg:px-20">
        <div className="max-w-5xl">
          <h1
            className="text-4xl font-bold uppercase leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              opacity: 0,
              animation: "fade-in 900ms ease-out 200ms forwards",
              background:
                "linear-gradient(180deg, #ffffff 0%, #c8c8c8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name}
          </h1>

          {/* Progress dashes */}
          <div
            className="mt-6 flex items-center gap-2"
            style={{
              opacity: 0,
              animation: "fade-in 700ms ease-out 500ms forwards",
            }}
          >
            <span className="h-[3px] w-16 bg-primary" />
            <span className="h-[3px] w-6 bg-primary/55" />
            <span className="h-[3px] w-3 bg-primary/30" />
          </div>

          <p
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/65 sm:text-lg"
            style={{
              opacity: 0,
              animation: "fade-in 800ms ease-out 700ms forwards",
            }}
          >
            Service auto profesional în <span className="font-semibold text-white">{city}</span>. Mecanici autorizați, piese
            originale, lucrări garantate.
          </p>

          <a
            href={hasPhone ? `tel:${phone}` : undefined}
            aria-disabled={!hasPhone}
            onClick={(e) => !hasPhone && e.preventDefault()}
            style={{
              opacity: 0,
              animation:
                "fade-in 800ms ease-out 900ms forwards, pulse-glow 2.4s ease-in-out 1700ms infinite",
            }}
            className={`group mt-10 inline-flex items-center gap-3 rounded-full px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-0.5 sm:text-[15px] ${
              hasPhone
                ? "bg-primary hover:brightness-110"
                : "cursor-not-allowed bg-primary/40"
            }`}
          >
            <Phone className="h-4 w-4" strokeWidth={2.25} />
            <span>Sunați acum</span>
            {hasPhone && (
              <>
                <span className="h-4 w-px bg-black/30" />
                <span className="text-[15px] font-semibold tracking-normal tabular-nums">
                  {phone}
                </span>
              </>
            )}
          </a>

          {/* Trust strip */}
          <div
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 sm:text-xs"
            style={{
              opacity: 0,
              animation: "fade-in 800ms ease-out 1100ms forwards",
            }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" strokeWidth={1.75} />
              Lucrări Garantate
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:inline-block" />
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" strokeWidth={1.75} />
              Mecanici Autorizați
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:inline-block" />
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-primary text-primary"
                    strokeWidth={0}
                  />
                ))}
              </span>
              Recomandat de clienți
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicii"
        aria-label="Scroll în jos"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/55 transition-colors hover:text-white"
      >
        <span className="text-[10px] font-light uppercase tracking-[0.4em]">
          Scroll
        </span>
        <Mouse className="h-4 w-4" strokeWidth={1.5} />
      </a>
    </section>
  );
}
