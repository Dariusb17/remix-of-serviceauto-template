import carSketch from "@/assets/car-sketch.png";

export function CarDivider() {
  return (
    <div
      aria-hidden
      className="relative -my-16 bg-background px-4 sm:-my-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 sm:gap-6">
        <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/10 sm:block" />
        <img
          src={carSketch}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="h-auto w-full max-w-[420px] sm:w-auto sm:max-w-none sm:h-44 md:h-56 lg:h-64"
          style={{ filter: "invert(1) brightness(1.15)", opacity: 0.5 }}
        />
        <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/10 sm:block" />
      </div>
    </div>
  );
}
