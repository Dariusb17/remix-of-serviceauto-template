import { useEffect, useState } from "react";

export type Review = {
  author: string;
  stars: number;
  text: string;
};

export type HoursEntry = { label: string; time: string };

export type SiteParams = {
  name: string;
  phone: string;
  city: string;
  address: string;
  rating: string;
  reviews: string;
  about: string;
  hours: HoursEntry[];
  photos: string[]; // photo1..photo5, only non-empty
  photo1: string;
  galleryPhotos: string[]; // photo2..photo5, only non-empty
  reviewList: Review[];
};

export const hasContent = (s: string | null | undefined): boolean =>
  !!s && s.trim().length > 0;

const get = (sp: URLSearchParams, key: string, fallback = "") =>
  (sp.get(key) ?? fallback).trim();

function parse(search: string): SiteParams {
  const sp = new URLSearchParams(search);
  const photo1 = get(sp, "photo1");
  const photo2 = get(sp, "photo2");
  const photo3 = get(sp, "photo3");
  const photo4 = get(sp, "photo4");
  const photo5 = get(sp, "photo5");

  const galleryPhotos = [photo1, photo2, photo3, photo4, photo5].filter(hasContent);
  const photos = galleryPhotos;

  const buildReview = (i: number): Review => ({
    author: get(sp, `r${i}_author`),
    stars: Math.max(0, Math.min(5, Number(get(sp, `r${i}_stars`, "0")) || 0)),
    text: get(sp, `r${i}_text`),
  });

  const reviewList = [1, 2, 3]
    .map(buildReview)
    .filter((r) => hasContent(r.author) || hasContent(r.text));

  const hoursRaw = get(sp, "hours");
  const hours: HoursEntry[] = hoursRaw
    ? hoursRaw
        .split(";")
        .map((part) => {
          const [label, ...rest] = part.split("|");
          return { label: (label || "").trim(), time: rest.join("|").trim() };
        })
        .filter((e) => e.label.length > 0)
    : [];

  return {
    name: get(sp, "name") || "Service Auto",
    phone: get(sp, "phone"),
    city: get(sp, "city") || "Timișoara",
    address: get(sp, "address"),
    rating: get(sp, "rating"),
    reviews: get(sp, "reviews"),
    about: get(sp, "about"),
    hours,
    photo1,
    photos,
    galleryPhotos,
    reviewList,
  };
}

export function useSiteParams(): SiteParams {
  const [params, setParams] = useState<SiteParams>(() =>
    parse(typeof window === "undefined" ? "" : window.location.search),
  );

  useEffect(() => {
    setParams(parse(window.location.search));
  }, []);

  return params;
}
