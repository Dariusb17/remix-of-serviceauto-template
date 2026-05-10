import carSketch from "@/assets/car-sketch.png";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black px-6 py-12">
      <div className="mx-auto flex max-w-md flex-col items-center gap-5">
        <img
          src={carSketch}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          className="h-12 w-auto opacity-25 sm:h-14"
          style={{ filter: "invert(1) brightness(1.1)" }}
        />
        <p className="text-center text-[11px] font-light uppercase tracking-[0.3em] text-white/40">
          Website creat profesional · 2026
        </p>
      </div>
    </footer>
  );
}
