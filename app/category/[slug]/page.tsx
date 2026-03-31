import { notFound } from "next/navigation";
import DisclaimerBanner from "@/components/disclaimer-banner";
import SiteHeader from "@/components/site-header";
import EventCard from "@/components/event-card";
import SiteFooter from "@/components/site-footer";
import { CATEGORIES, getEventsByCategory, type EventCategory } from "@/lib/data";
import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} jegyárak – Ár-összehasonlítás | HungarySportTickets`,
    description: `Hasonlítsa össze a(z) ${cat.label} sportesemények jegyárait több szolgáltatónál. Másodlagos piaci ár-összehasonlítás, nem értékesítés.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);

  if (!cat) {
    notFound();
  }

  const events = getEventsByCategory(slug as EventCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerBanner />
      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Page disclaimer — required on all target pages */}
        <div className="mb-8 rounded-xl border border-border bg-secondary p-4 flex items-start gap-3">
          <AlertTriangle size={22} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Másodlagos piaci ár-összehasonlítás.</strong>{" "}
            Az alábbi árak viszonteladó platformoktól származnak és eltérhetnek a névértéktől.
            A HungarySportTickets NEM értékesít jegyeket és NEM gyűjt fizetési adatokat.
            Kérjük, ellenőrizze az árakat közvetlenül a kiválasztott szolgáltatónál.{" "}
            <br />
            <span className="text-xs mt-1 block">
              Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED · Panagioti Kaspi 5Α, Nicosia 1095, Cyprus
            </span>
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-2xl font-bold text-foreground text-balance">
                {cat.label}
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                {events.length} esemény · Ár-összehasonlítás — nem értékesítés
              </p>
            </div>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Jelenleg nincsenek elérhető események ebben a kategóriában.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
