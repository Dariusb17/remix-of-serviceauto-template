import { ShieldCheck, Wrench, BadgeCheck } from "lucide-react";

const items = [
  { icon: Wrench, label: "Mecanici Autorizați", desc: "Personal certificat RAR" },
  { icon: BadgeCheck, label: "Piese Originale", desc: "Furnizori omologați" },
  { icon: ShieldCheck, label: "Garanție Lucrări", desc: "12 luni sau 20.000 km" },
];

export function TrustBar() {
  return (
    <section
      className="border-t border-white/[0.08]"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 py-8 text-center sm:flex-row sm:items-start sm:gap-4"
          >
            <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <div className="text-xs font-light uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                {label}
              </div>
              <div className="mt-1 text-[12px] font-light text-white/45">
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
