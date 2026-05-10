import { FadeIn } from "./FadeIn";

// Hardcoded — this is the website creator's contact, NOT the business's number.
const CREATOR_PHONE = "0743222537";

export function ContactCTA() {
  return (
    <section className="px-6 py-32" style={{ background: "#0f0f0f" }}>
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-px w-16 bg-primary" />
          <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
            Vrei un site ca acesta pentru afacerea ta?
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-white/70 sm:text-lg">
            Contactează-ne și îți facem unul în 24 de ore.
          </p>
          <a
            href={`tel:${CREATOR_PHONE}`}
            className="btn-pulse-glow mt-12 inline-block bg-primary px-14 py-5 text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:text-base"
            style={{ borderRadius: "2px" }}
          >
            Contactează-ne
          </a>

          <div className="mt-12">
            <p className="text-[11px] font-light uppercase tracking-[0.3em] text-white/40">
              Sau sunați direct
            </p>
            <a
              href={`tel:${CREATOR_PHONE}`}
              className="mt-3 inline-block text-xl font-light text-white underline-offset-4 hover:underline sm:text-2xl"
            >
              {CREATOR_PHONE}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
