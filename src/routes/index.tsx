import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useSiteParams, hasContent } from "@/hooks/use-site-params";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";

import { Stats } from "@/components/landing/Stats";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Gallery } from "@/components/landing/Gallery";
import { About } from "@/components/landing/About";
import { Reviews } from "@/components/landing/Reviews";
import { RatingBadge } from "@/components/landing/RatingBadge";
import { Hours } from "@/components/landing/Hours";
import { ContactCTA } from "@/components/landing/ContactCTA";
import { Footer } from "@/components/landing/Footer";
import { CarDivider } from "@/components/landing/CarDivider";
import { TireTrailDivider } from "@/components/landing/TireTrailDivider";
import { ScrollGlow } from "@/components/landing/ScrollGlow";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const p = useSiteParams();

  useEffect(() => {
    document.title = `${p.name} — Service Auto ${p.city}`;
  }, [p.name, p.city]);

  return (
    <main className="relative min-h-screen bg-background font-sans text-white antialiased">
      <ScrollGlow />
      <div className="relative z-10">
        <Navbar name={p.name} phone={p.phone} />
        <Hero name={p.name} city={p.city} phone={p.phone} photo1={p.photo1} />
        <Stats />

        <Gallery photos={p.galleryPhotos} />

        <About
          about={
            hasContent(p.about)
              ? p.about
              : `Suntem un service auto cu tradiție în ${p.city}, dedicat oferiri de servicii de calitate la prețuri corecte. Echipa noastră de mecanici autorizați folosește echipamente moderne și piese originale pentru fiecare intervenție.`
          }
        />

        <CarDivider />

        <Services />
        <Process />
        <TireTrailDivider />
        <WhyUs city={p.city} />

        <Reviews />

        {hasContent(p.rating) && (
          <RatingBadge rating={p.rating} reviews={p.reviews} />
        )}

        <Hours city={p.city} name={p.name} address={p.address} hours={p.hours} />

        <ContactCTA />
        <Footer />
      </div>
    </main>
  );
}
