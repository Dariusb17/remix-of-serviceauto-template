import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  align = "center",
  watermark,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  align?: "center" | "left";
  watermark?: string;
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`relative flex flex-col ${alignCls}`}>
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 select-none text-[140px] font-bold leading-none text-white/[0.025] sm:text-[180px]"
          style={{ letterSpacing: "-0.05em" }}
        >
          {watermark}
        </span>
      )}
      <Reveal direction="up">
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          {index && (
            <span className="text-[11px] font-light tracking-[0.3em] text-primary/80">
              {index}
            </span>
          )}
          <span
            className="h-px w-10 origin-left animate-[draw_900ms_ease-out_forwards] bg-primary/60"
            style={{ transform: "scaleX(1)" }}
          />
          <span className="text-[11px] font-light uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal direction="up" delay={120}>
        <h2 className="relative mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
