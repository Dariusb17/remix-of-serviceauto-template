import tireTrail from "@/assets/tire-trail.png";

export function TireTrailDivider() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative overflow-hidden bg-background py-4 sm:py-6"
    >
      <img
        src={tireTrail}
        alt=""
        width={1920}
        height={512}
        loading="lazy"
        className="block h-12 w-full max-w-none object-cover sm:h-16 md:h-20"
        style={{ filter: "invert(1) brightness(1.1)", opacity: 0.45 }}
      />
    </div>
  );
}
