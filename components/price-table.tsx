"use client";

import { useState } from "react";
import { ExternalLink, Star, Globe, ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { type Supplier, formatPrice } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PriceTableProps {
  suppliers: Supplier[];
}

function CountryFlag({ code }: { code: "HU" | "EU" | "US" }) {
  const flags: Record<string, string> = {
    HU: "🇭🇺",
    EU: "🇪🇺",
    US: "🇺🇸",
  };
  return <span aria-label={`${code} zászló`}>{flags[code]}</span>;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Értékelés: ${rating} / 5`}>
      <Star size={12} className="fill-accent text-accent" aria-hidden="true" />
      <span className="text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function PriceTable({ suppliers }: PriceTableProps) {
  const [sortBy, setSortBy] = useState<"price" | "rating">("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const available = suppliers.filter((s) => s.available);
  const unavailable = suppliers.filter((s) => !s.available);

  const sorted = [...available].sort((a, b) => {
    const valA = sortBy === "price" ? a.minPrice : a.rating;
    const valB = sortBy === "price" ? b.minPrice : b.rating;
    return sortDir === "asc" ? valA - valB : valB - valA;
  });

  const toggle = (col: "price" | "rating") => {
    if (sortBy === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(col);
      setSortDir("asc");
    }
  };

  const SortIcon = ({ col }: { col: "price" | "rating" }) => {
    if (sortBy !== col)
      return (
        <ChevronDown
          size={14}
          className="text-muted-foreground/40"
          aria-hidden="true"
        />
      );
    return sortDir === "asc" ? (
      <ChevronUp size={14} aria-hidden="true" />
    ) : (
      <ChevronDown size={14} aria-hidden="true" />
    );
  };

  const cheapest = sorted[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Table header with disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-bold text-foreground text-lg">
            Ár-összehasonlítás
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {available.length} aktív ajánlat · Kattintson a szolgáltatóra a részletek megtekintéséhez
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => toggle("price")}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors",
              sortBy === "price"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-muted-foreground border-border hover:border-primary/40"
            )}
          >
            Ár <SortIcon col="price" />
          </button>
          <button
            onClick={() => toggle("rating")}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors",
              sortBy === "rating"
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary text-muted-foreground border-border hover:border-primary/40"
            )}
          >
            Értékelés <SortIcon col="rating" />
          </button>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2" role="list" aria-label="Jegyárak összehasonlítása">
        {sorted.map((supplier, idx) => {
          const isCheapest = idx === 0 && sortBy === "price" && sortDir === "asc";
          return (
            <article
              key={supplier.id}
              role="listitem"
              className={cn(
                "relative flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border transition-all",
                isCheapest
                  ? "border-accent/60 bg-accent/5"
                  : "border-border bg-card hover:border-border/80"
              )}
            >
              {isCheapest && (
                <div className="absolute -top-2.5 left-4">
                  <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-accent text-accent-foreground">
                    Legolcsóbb ajánlat
                  </span>
                </div>
              )}

              {/* Supplier name + meta */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-md bg-secondary border border-border flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-foreground text-sm">
                      {supplier.name}
                    </span>
                    <CountryFlag code={supplier.countryCode} />
                    <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                      {supplier.countryLabel}
                    </span>
                    {supplier.isOfficial && (
                      <span className="flex items-center gap-1 text-xs font-medium text-success bg-success/10 border border-success/20 px-1.5 py-0.5 rounded">
                        <ShieldCheck size={10} aria-hidden="true" />
                        Hivatalos
                      </span>
                    )}
                  </div>
                  <StarRating rating={supplier.rating} />
                  <span className="text-xs text-muted-foreground">
                    {supplier.reviewCount.toLocaleString("hu-HU")} értékelés
                  </span>
                </div>
              </div>

              {/* Price range */}
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">tól:</span>
                  <span className="text-xl font-bold text-accent">
                    {formatPrice(supplier.minPrice)}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="text-xs text-muted-foreground">ig:</span>
                  <span className="text-sm font-semibold text-foreground">
                    {formatPrice(supplier.maxPrice)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-48 text-right font-medium">
                  Az ár eltérhet a névértéktől
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href={supplier.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  aria-label={`Árak megtekintése: ${supplier.name} (új lapon nyílik meg)`}
                >
                  Árak megtekintése
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Unavailable */}
      {unavailable.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-2">
            Jelenleg nem elérhető ({unavailable.length})
          </p>
          <div className="flex flex-col gap-2">
            {unavailable.map((supplier) => (
              <div
                key={supplier.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/30 opacity-60"
              >
                <div className="w-8 h-8 rounded bg-secondary border border-border flex items-center justify-center shrink-0">
                  <Globe size={14} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {supplier.name}
                </span>
                <CountryFlag code={supplier.countryCode} />
                <span className="ml-auto text-xs text-muted-foreground">
                  Jelenleg nem elérhető
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table disclaimer */}
      <div className="mt-2 p-4 rounded-lg bg-secondary border border-border">
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Fontos:</strong> Ez az összehasonlítás tájékoztató
          jellegű. Az árak valós időben változhatnak. A HungarySportTickets (hungarysporttickets.com) NEM értékesít jegyeket és
          NEM gyűjt fizetési adatokat. A vásárlás a kiválasztott szolgáltató saját
          platformján és felelősségére történik. Kérjük, ellenőrizze a végső árat és a
          feltételeket a szolgáltatónál, mielőtt megvásárolja a jegyet.
        </p>
      </div>
    </div>
  );
}
