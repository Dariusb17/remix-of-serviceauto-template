import { Clock, Search, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function WhyUs({ city }: { city: string }) {
  const items = [
    {
      icon: Clock,
      title: "Timp de așteptare redus",
      desc: "Programare rapidă, fără cozi. Lucrările sunt finalizate în termenul promis.",
    },
    {
      icon: Search,
      title: "Transparență totală",
      desc: "Estimare de preț înainte de orice intervenție. Fără costuri ascunse.",
    },
    {
      icon: Trophy,
      title: "Experiență dovedită",
      desc: `Peste 10 ani de activitate și mii de clienți mulțumiți în ${city}.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(227,48,48,0.18), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="De ce noi"
          title="De ce să ne alegeți?"
          watermark="03"
        />

        <div className="mt-20 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 100} direction="up">
              <div className="group relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-primary/60 via-primary/15 to-transparent" />
                <Icon
                  className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm font-light leading-[1.7] text-white/60">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
