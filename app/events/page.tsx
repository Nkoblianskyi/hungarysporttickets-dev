import DisclaimerBanner from "@/components/disclaimer-banner";
import SiteHeader from "@/components/site-header";
import EventCard from "@/components/event-card";
import SiteFooter from "@/components/site-footer";
import { EVENTS } from "@/lib/data";
import { AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Összes sportesemény – Ár-összehasonlítás | HungarySportTickets",
  description:
    "Böngésszen az összes sporteseményen és hasonlítsa össze a jegyárakat! Labdarúgás, Forma-1, tenisz, kosárlabda és más sportok Magyarországon.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerBanner />
      <SiteHeader />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {/* Page disclaimer */}
        <div className="mb-8 rounded-xl border border-border bg-secondary p-4 flex items-start gap-3">
          <AlertTriangle size={22} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Másodlagos piaci ár-összehasonlítás.</strong>{" "}
            Az alábbi árak viszonteladó platformoktól származnak és eltérhetnek a névértéktől.
            A HungarySportTickets NEM értékesít jegyeket és NEM gyűjt fizetési adatokat.
            Kérjük, ellenőrizze az árakat közvetlenül a kiválasztott szolgáltatónál.
            <br />
            <span className="text-xs mt-1 block">
              Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED · Panagioti Kaspi 5Α, Nicosia 1095, Cyprus
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground text-balance">
              Összes sportesemény
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {EVENTS.length} esemény · Ár-összehasonlítás — nem értékesítés
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
