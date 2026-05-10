import {
  Droplet,
  Stethoscope,
  CircleDot,
  Wrench,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Droplet,
    title: "Revizie & Schimb Ulei",
    desc: "Revizii complete conform cărții tehnice. Ulei, filtre, lichide — totul verificat și înlocuit la timp.",
  },
  {
    icon: Stethoscope,
    title: "Diagnosticare Auto",
    desc: "Tester multimarcă pentru identificarea rapidă a oricărei defecțiuni electronice sau mecanice.",
  },
  {
    icon: CircleDot,
    title: "Geometrie & Echilibrare",
    desc: "Aliniere precisă pe stand 3D. Echilibrare roți cu echipament de ultimă generație.",
  },
  {
    icon: Wrench,
    title: "Mecanică Generală",
    desc: "Reparații motor, transmisie, suspensie și sistem de frânare. Lucrăm la orice marcă.",
  },
  {
    icon: Zap,
    title: "Electrică Auto",
    desc: "Diagnoză electrică, alternatore, electromotoare, instalații și sisteme de iluminat.",
  },
  {
    icon: ClipboardCheck,
    title: "ITP & Pregătire ITP",
    desc: "Verificare completă înainte de inspecție și asigurăm trecerea fără probleme.",
  },
];

export function Services() {
  return (
    <section id="servicii" className="relative overflow-hidden bg-background px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(227,48,48,0.18), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,90,40,0.12), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          eyebrow="Ce oferim"
          title="Serviciile noastre"
          watermark="01"
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-6 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80}>
              <TiltCard
                className="group relative h-full overflow-hidden rounded-md p-4 sm:p-8"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {/* Diagonal hash pattern background */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 9px)",
                  }}
                />
                {/* Corner accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "rgba(227,48,48,0.25)" }}
                />
                {/* Hover glow following cursor */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle 200px at var(--mx,50%) var(--my,50%), rgba(227,48,48,0.18), transparent 60%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(227,48,48,0.35)",
                  }}
                />

                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/5 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-sm font-medium tracking-tight text-white sm:mt-6 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 hidden text-sm font-light leading-relaxed text-white/60 sm:mt-3 sm:block">
                    {desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
