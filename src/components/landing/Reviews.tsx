import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { StarRow } from "./StarRow";
import { SectionHeader } from "./SectionHeader";
import andreiAvatar from "@/assets/review-andrei.jpg";
import voichitaAvatar from "@/assets/review-voichita.jpg";
import cristianAvatar from "@/assets/review-cristian.jpg";
import mihaiAvatar from "@/assets/review-mihai.jpg";
import elenaAvatar from "@/assets/review-elena.jpg";

const REVIEWS = [
  {
    author: "Andrei M.",
    avatar: andreiAvatar,
    stars: 5,
    text: "Servicii rapide și la prețuri corecte. Mi-au rezolvat problema în aceeași zi, fără să aștept. Recomand cu toată încrederea!",
  },
  {
    author: "Voichița R.",
    avatar: voichitaAvatar,
    stars: 5,
    text: "Mecanici serioși și profesioniști. Au diagnosticat corect de prima dată și au lucrat cu atenție la fiecare detaliu. Foarte mulțumită!",
  },
  {
    author: "Cristian P.",
    avatar: cristianAvatar,
    stars: 5,
    text: "Am găsit în sfârșit un service de încredere. Prețuri transparente, lucrare garantată. Nu voi merge în altă parte.",
  },
  {
    author: "Mihai D.",
    avatar: mihaiAvatar,
    stars: 5,
    text: "Comunicare excelentă, totul explicat pas cu pas. Am plecat cu mașina ca nouă și fără surprize la plată. Mulțumesc echipei!",
  },
  {
    author: "Elena T.",
    avatar: elenaAvatar,
    stars: 5,
    text: "Am fost tratată cu respect și profesionalism. Mi-au explicat clar ce trebuie făcut și au respectat termenul promis. Recomand!",
  },
];

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-background px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(227,48,48,0.12), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            index="04"
            eyebrow="Recenzii"
            title="Ce spun clienții noștri"
            watermark="04"
          />
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              aria-label="Recenzia anterioară"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Recenzia următoare"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {REVIEWS.map((r) => (
              <div
                key={r.author}
                className="min-w-0 shrink-0 grow-0 basis-full pl-0 pr-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className="group relative h-full overflow-hidden rounded-lg p-6 sm:p-8"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-3xl"
                    style={{ background: "rgba(227,48,48,0.20)" }}
                  />
                  <Quote className="mb-5 text-primary/70" size={26} strokeWidth={1.5} />
                  <p className="relative text-sm font-light leading-[1.8] text-white/80 sm:text-base">
                    {r.text}
                  </p>
                  <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={r.avatar}
                        alt={r.author}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">{r.author}</p>
                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                          Client verificat
                        </p>
                      </div>
                    </div>
                    <StarRow stars={r.stars} size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Mergi la grupul ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-8 bg-primary" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
