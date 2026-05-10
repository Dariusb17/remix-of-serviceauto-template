import { FadeIn } from "./FadeIn";
import { StarRow } from "./StarRow";
import { hasContent } from "@/hooks/use-site-params";

export function RatingBadge({ rating, reviews }: { rating: string; reviews: string }) {
  const numeric = Number(rating) || 0;
  return (
    <section className="bg-background px-6 py-32">
      <FadeIn>
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="text-7xl font-light tracking-tight text-primary sm:text-8xl">
            {rating}
          </div>
          <div className="mt-6">
            <StarRow stars={numeric} size={26} />
          </div>
          {hasContent(reviews) && (
            <p className="mt-6 text-[11px] font-light uppercase tracking-[0.3em] text-white/50">
              bazat pe {reviews} recenzii Google
            </p>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
