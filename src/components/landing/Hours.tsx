import { MapPin, ExternalLink, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { HoursEntry } from "@/hooks/use-site-params";

export function Hours({
  city,
  name,
  address,
  hours,
}: {
  city: string;
  name: string;
  address: string;
  hours: HoursEntry[];
}) {
  const query = (address && address.trim()) || `${name} ${city}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  const hasHours = hours.length > 0;
  const singleColumn = !hasHours;

  return (
    <section className="relative bg-background px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          eyebrow="Vizitați-ne"
          title={hasHours ? "Program & Locație" : "Locație"}
          watermark="05"
        />

        <div
          className={`mt-20 grid gap-6 ${singleColumn ? "" : "lg:grid-cols-2"}`}
        >
          {hasHours && (
            <Reveal direction="right">
              <div
                className="relative h-full overflow-hidden rounded-lg p-8 sm:p-10"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    Program de lucru
                  </h3>
                </div>

                <ul className="mt-8 divide-y divide-white/[0.06]">
                  {hours.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center justify-between gap-4 py-3 text-sm text-white/75"
                    >
                      <span className="font-light">{s.label}</span>
                      <span className="text-right font-medium tabular-nums text-white">
                        {s.time || "Închis"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <Reveal direction={hasHours ? "left" : "up"} delay={120}>
            <div
              className="relative overflow-hidden rounded-lg"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <iframe
                src={embedSrc}
                title={`Hartă - ${name}`}
                width="100%"
                height="400"
                style={{ border: 0, display: "block", filter: "grayscale(0.2)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="border-t border-white/[0.08] bg-black/70 p-6 backdrop-blur-md">
                <p className="text-[11px] font-light uppercase tracking-[0.3em] text-primary">
                  Locație
                </p>
                <h4 className="mt-2 flex items-center gap-2 text-lg font-medium tracking-tight text-white">
                  <MapPin className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  {query}
                </h4>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-light text-white/70 transition-colors hover:text-primary"
                >
                  Deschideți în Google Maps
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
