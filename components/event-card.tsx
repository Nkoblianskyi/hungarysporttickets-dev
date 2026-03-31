import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, AlertTriangle } from "lucide-react";
import { type Event, formatPrice, formatDate } from "@/lib/data";
// v2 — removed Info import, uses AlertTriangle only

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={event.image}
          alt={`${event.title} – eseménykép`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded bg-primary text-primary-foreground">
            {event.categoryLabel}
          </span>
        </div>
      </div>

      {/* Warning strip — full width, very prominent */}
      <div className="flex items-center gap-2 bg-disclaimer-bg text-disclaimer-fg px-3 py-2.5">
        <AlertTriangle size={18} className="shrink-0" aria-hidden="true" />
        <p className="text-sm md:text-base font-black uppercase tracking-wide leading-snug">
          Ár-összehasonlítás — NEM értékesítés — Árak eltérhetnek a névértéktől
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Title */}
        <div>
          <h3 className="font-bold text-base text-foreground leading-snug text-balance line-clamp-2">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
            {event.subtitle}
          </p>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="shrink-0 text-primary" aria-hidden="true" />
            <span>{formatDate(event.date)} — {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="shrink-0 text-primary" aria-hidden="true" />
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>

        {/* Price range — prominent */}
        <div className="mt-auto">
          <div className="rounded-md border-2 border-accent/40 bg-accent/10 p-3">
            <div className="flex items-center gap-1.5 mb-1.5">
              <AlertTriangle size={12} className="text-accent shrink-0" aria-hidden="true" />
              <span className="text-sm font-bold text-accent uppercase tracking-wide">
                Összehasonlított árak · {event.suppliers.filter((s) => s.available).length} ajánlat
              </span>
            </div>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xs text-muted-foreground font-medium">tól:</span>
              <span className="text-xl font-black text-accent">
                {formatPrice(event.minPrice)}
              </span>
              <span className="text-xs text-muted-foreground">—</span>
              <span className="text-base font-bold text-foreground">
                {formatPrice(event.maxPrice)}
              </span>
              <span className="text-xs text-muted-foreground">-ig</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed font-semibold">
              * Árak eltérhetnek a névértéktől. Ellenőrizze a szolgáltatónál!
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/events/${event.slug}`}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          aria-label={`Árak összehasonlítása: ${event.title}`}
        >
          Árak összehasonlítása
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
