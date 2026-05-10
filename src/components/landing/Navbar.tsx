import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { hasContent } from "@/hooks/use-site-params";

export function Navbar({ name, phone }: { name: string; phone: string }) {
  const hasPhone = hasContent(phone);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-primary/20 bg-black/80 shadow-[0_8px_30px_-10px_rgba(227,48,48,0.25)] backdrop-blur-xl"
          : "border-b border-white/5 bg-black/40 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <a
          href="#top"
          className="text-sm font-bold uppercase tracking-[0.22em] text-white sm:text-base"
        >
          {name}
        </a>
        <a
          href={hasPhone ? `tel:${phone}` : undefined}
          aria-disabled={!hasPhone}
          onClick={(e) => !hasPhone && e.preventDefault()}
          style={{
            boxShadow:
              "0 6px 24px -6px rgba(255,130,50,0.55), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-all hover:-translate-y-0.5 sm:text-sm ${
            hasPhone
              ? "bg-primary hover:brightness-110"
              : "cursor-not-allowed bg-primary/40"
          }`}
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="hidden text-sm font-semibold tracking-normal tabular-nums sm:inline">
            {hasPhone ? phone : "Sunați acum"}
          </span>
          <span className="sm:hidden">Sună</span>
        </a>
      </div>
    </header>
  );
}
