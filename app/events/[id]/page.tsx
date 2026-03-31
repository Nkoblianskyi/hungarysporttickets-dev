import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Tag, ArrowLeft, AlertTriangle, Info } from "lucide-react";
import DisclaimerBanner from "@/components/disclaimer-banner";
import SiteHeader from "@/components/site-header";
import PriceTable from "@/components/price-table";
import SiteFooter from "@/components/site-footer";
import { EVENTS, getEventBySlug, formatPrice, formatDate } from "@/lib/data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getEventBySlug(id);
  if (!event) return {};
  return {
    title: `${event.title} – Jegyár-összehasonlítás | HungarySportTickets`,
    description: `Hasonlítsa össze a(z) ${event.title} esemény jegyárait ${event.suppliers.length} szolgáltatónál. Ár tól: ${formatPrice(event.minPrice)} – ig: ${formatPrice(event.maxPrice)}. Másodlagos piaci ár-összehasonlítás, nem értékesítés.`,
  };
}

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = getEventBySlug(id);

  if (!event) {
    notFound();
  }

  const availableSuppliers = event.suppliers.filter((s) => s.available);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Disclaimer banner — must be at top */}
      <DisclaimerBanner />

      {/* 2. Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* 3. Hero image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={event.image}
            alt={`${event.title} eseménykép`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/75" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-8">
            {/* Breadcrumb */}
            <nav aria-label="Navigációs útvonal" className="mb-3">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Főoldal
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={`/category/${event.category}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {event.categoryLabel}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground truncate max-w-48">{event.title}</li>
              </ol>
            </nav>

            {/* Category + comparison badge */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-primary text-primary-foreground">
                {event.categoryLabel}
              </span>
              <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-disclaimer-bg text-disclaimer-fg">
                Ár-összehasonlítás — Nem értékesítés
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">
              {event.title}
            </h1>
            <p className="text-base text-muted-foreground mt-1">{event.subtitle}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 4. TOP disclaimer on event page — PROMINENT, within top 20% */}
          <div className="mb-8 rounded-xl overflow-hidden border-2 border-disclaimer-bg">
            {/* Header strip */}
            <div className="bg-disclaimer-bg text-disclaimer-fg px-5 py-3 flex items-center gap-3">
              <AlertTriangle size={20} className="shrink-0" aria-hidden="true" />
              <h2 className="font-black text-lg md:text-xl uppercase tracking-wide leading-tight">
                Fontos: Másodlagos piaci ár-összehasonlítás — NEM értékesítünk jegyeket
              </h2>
            </div>
            {/* Body */}
            <div className="bg-disclaimer-bg/10 px-5 py-4">
              <ul className="space-y-2 text-base leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-black text-disclaimer-bg mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">!</span>
                  <span className="text-foreground">
                    Ez az oldal <strong>NEM értékesít jegyeket</strong>.
                    A HungarySportTickets (hungarysporttickets.com) kizárólag ár-összehasonlítási szolgáltatást nyújt.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-black text-disclaimer-bg mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">!</span>
                  <span className="text-foreground">
                    Az alábbi árak külső viszonteladó platformoktól származnak és{" "}
                    <strong>eltérhetnek a névleges jegyártól — jellemzően magasabbak lehetnek.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-black text-disclaimer-bg mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">!</span>
                  <span className="text-foreground">
                    A HungarySportTickets (hungarysporttickets.com){" "}
                    <strong>NEM gyűjt és NEM tárol fizetési adatokat.</strong>{" "}
                    Vásárlás kizárólag a kiválasztott szolgáltató platformján lehetséges.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-black text-disclaimer-bg mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">!</span>
                  <span className="text-foreground">
                    Vásárlás előtt mindig ellenőrizze a végső árat és feltételeket
                    közvetlenül a kiválasztott szolgáltatónál.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 5. Left column: event info + price summary */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              {/* Event details card */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 className="font-bold text-foreground text-sm uppercase tracking-wide mb-4">
                  Esemény adatai
                </h2>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Calendar
                      size={15}
                      className="text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-muted-foreground block">Dátum</span>
                      <span className="text-foreground font-medium">
                        {formatDate(event.date)}, {event.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      size={15}
                      className="text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-muted-foreground block">Helyszín</span>
                      <span className="text-foreground font-medium">
                        {event.venue}
                      </span>
                      <span className="text-muted-foreground block">
                        {event.city}
                        {event.country !== "HU" ? `, ${event.country}` : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Tag
                      size={15}
                      className="text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="text-muted-foreground block">Kategória</span>
                      <span className="text-foreground font-medium">
                        {event.categoryLabel}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed border-t border-border pt-4">
                  {event.description}
                </p>
              </div>

              {/* Price summary — prominent */}
              <div className="rounded-xl border-2 border-accent/50 bg-accent/5 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Info size={16} className="text-accent shrink-0" aria-hidden="true" />
                  <h2 className="font-bold text-foreground text-sm uppercase tracking-wide">
                    Ár-összehasonlítás összesítő
                  </h2>
                </div>

                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Legalacsonyabb talált ár
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xs text-muted-foreground">tól:</span>
                      <span className="text-2xl font-bold text-accent">
                        {formatPrice(event.minPrice)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Legmagasabb talált ár
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xs text-muted-foreground">ig:</span>
                      <span className="text-xl font-semibold text-foreground">
                        {formatPrice(event.maxPrice)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">
                      {availableSuppliers.length} aktív ajánlat ·{" "}
                      {event.suppliers.length} összehasonlított szolgáltató
                    </span>
                  </div>
                </div>

                <div className="rounded-md bg-secondary border border-border p-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Figyelem:</strong> Az árak
                    eltérhetnek a névértéktől és valós időben változhatnak. Ez az
                    összehasonlítás tájékoztató jellegű.
                  </p>
                </div>
              </div>

              {/* Company info */}
              <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground mb-1 uppercase tracking-wide text-xs">
                  Üzemeltető
                </p>
                <address className="not-italic leading-relaxed">
                  <strong className="text-foreground">
                    FISCUS NOSTRUM FUND SERVICES LIMITED
                  </strong>
                  <br />
                  Myrianthous Anna
                  <br />
                  Panagioti Kaspi 5Α
                  <br />
                  Nicosia 1095, Cyprus
                </address>
              </div>
            </div>

            {/* 6. Right column: price comparison table */}
            <div className="lg:col-span-2">
              <PriceTable suppliers={event.suppliers} />
            </div>
          </div>

          {/* 7. Back link */}
          <div className="mt-10 pt-6 border-t border-border">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
