import { useState, useMemo } from "react";
import { FadeIn } from "./FadeIn";
import { hasContent } from "@/hooks/use-site-params";

const STOCK_PHOTOS = [
  "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=75",
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=75",
];

export function Gallery({ photos }: { photos: string[] }) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const candidates = useMemo(
    () => [...photos.filter(hasContent), ...STOCK_PHOTOS],
    [photos],
  );

  const visible = candidates
    .map((src, i) => ({ src, i }))
    .filter(({ i }) => !failed[i]);

  if (visible.length === 0) return null;

  const colsClass =
    visible.length === 1
      ? "grid-cols-1"
      : visible.length === 2
        ? "grid-cols-2"
        : visible.length === 3
          ? "grid-cols-2 md:grid-cols-3"
          : "grid-cols-2 md:grid-cols-4";

  return (
    <section className="bg-background px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="text-[11px] font-light uppercase tracking-[0.3em] text-primary">
              Galerie
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Service-ul nostru
            </h2>
          </div>
        </FadeIn>

        <div className={`grid gap-3 md:gap-4 ${colsClass}`}>
          {visible.map(({ src, i }, idx) => (
            <FadeIn key={src + i} delay={idx * 80}>
              <div className="group relative overflow-hidden rounded-md aspect-square">
                <img
                  src={src}
                  alt={`Galerie ${idx + 1}`}
                  loading="lazy"
                  onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
