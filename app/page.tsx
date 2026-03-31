import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ShieldOff,
  CreditCard,
  AlertTriangle,
  BarChart2,
  Globe,
  RefreshCw,
  Eye,
  ChevronDown,
} from "lucide-react";
import DisclaimerBanner from "@/components/disclaimer-banner";
import SiteHeader from "@/components/site-header";
import EventCard from "@/components/event-card";
import SiteFooter from "@/components/site-footer";
import { EVENTS, CATEGORIES, getFeaturedEvents } from "@/lib/data";

const FAQ_ITEMS = [
  {
    q: "Mi az a HungarySportTickets?",
    a: "A HungarySportTickets (hungarysporttickets.com) egy ár-összehasonlító platform, amely összegyűjti és megjeleníti a magyarországi és európai sportesemény jegyek árait különböző viszonteladó platformokról. Nem adunk el jegyeket — csupán összehasonlítjuk az árakat.",
  },
  {
    q: "Lehet-e itt jegyet vásárolni?",
    a: "Nem. A HungarySportTickets kizárólag ár-összehasonlítást végez. A jegyvásárlás a kiválasztott külső szolgáltató platformján történik, az ő feltételeik szerint.",
  },
  {
    q: "Miért térhetnek el az árak a névértéktől?",
    a: "Az oldalon megjelenített árak másodlagos piaci viszonteladóktól (pl. Viagogo, StubHub, Ticketmaster Resale, LiveTicket) származnak. Ezek az árak jellemzően magasabbak lehetnek, mint az eredeti névleges jegyár.",
  },
  {
    q: "Gyűjtik-e a fizetési adataimat?",
    a: "Nem. A HungarySportTickets semmilyen fizetési, bankkártya- vagy személyes adatot nem gyűjt és nem tárol. Fizetési adat megadása kizárólag a választott külső szolgáltató biztonságos felületén történik.",
  },
  {
    q: "Honnan származnak az árak?",
    a: "Az árakat vezető magyarországi, európai uniós és egyesült államokbeli jegyeladó platformokról gyűjtjük össze. Ezek valós idejű piaci ajánlatok, amelyek a kereslet és kínálat alapján változhatnak.",
  },
  {
    q: "Ki üzemelteti az oldalt?",
    a: "Az oldalt a FISCUS NOSTRUM FUND SERVICES LIMITED üzemelteti (Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus).",
  },
];

export default function HomePage() {
  const featured = getFeaturedEvents();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Disclaimer banner — must be in top 20% of page */}
      <DisclaimerBanner />

      {/* 2. Navigation */}
      <SiteHeader />

      <main>
        {/* 3. Hero */}
        <section
          className="relative h-[560px] md:h-[640px] flex items-center overflow-hidden"
          aria-label="Főoldal hero szekció"
        >
          <Image
            src="/images/hero-stadium.jpg"
            alt="Sportpálya telt ház előtt Magyarországon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            {/* Hero disclaimer — PROMINENT, top position in hero */}
            <div className="mb-6 inline-flex items-center gap-2 bg-disclaimer-bg text-disclaimer-fg px-4 py-3 rounded-md text-base md:text-lg font-bold">
              <AlertTriangle size={20} aria-hidden="true" />
              <span>
                MÁSODLAGOS PIAC · CSAK ÁR-ÖSSZEHASONLÍTÁS · NEM ÉRTÉKESÍTÜNK JEGYEKET
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance max-w-2xl mb-4">
              Hasonlítsa össze a
              <span className="text-primary"> sportjegyek</span> árait
              Magyarországon
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-2 leading-relaxed">
              Valódi idejű ár-összehasonlítás labdarúgás, Forma-1, tenisz és más
              sportesemények jegyeire — több magyarországi és európai szolgáltatótól.
            </p>
            <p className="text-base text-muted-foreground mb-8 font-semibold leading-relaxed">
              Ez az oldal NEM értékesít jegyeket. NEM gyűjt fizetési adatokat.
              Az árak eltérhetnek a névértéktől.
            </p>

            {/* Search bar */}
            <div className="flex gap-2 max-w-xl">
              <div className="flex-1 flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                <Search size={18} className="text-muted-foreground shrink-0" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Keresés esemény, csapat vagy helyszín alapján..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none"
                  aria-label="Esemény keresése"
                />
              </div>
              <button className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors shrink-0">
                Keresés
              </button>
            </div>
          </div>
        </section>

        {/* 4. How it works */}
        <section className="bg-secondary border-y border-border py-10" aria-label="Hogyan működik">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart2,
                  title: "Ár-összehasonlítás",
                  desc: "Összegyűjtjük az aktuális árajánlatokat több szolgáltatótól egy helyen.",
                },
                {
                  icon: ShieldOff,
                  title: "Nem értékesítünk jegyeket",
                  desc: "Ez az oldal kizárólag ár-összehasonlítást végez. A vásárlás a szolgáltatónál történik.",
                },
                {
                  icon: CreditCard,
                  title: "Nincs fizetési adat",
                  desc: "Nem gyűjtünk és nem tárolunk semmilyen fizetési vagy bankkártya adatot.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Categories */}
        <section className="max-w-7xl mx-auto px-4 py-12" aria-label="Sportkategóriák">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-balance">
            Sportkategóriák
          </h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-sm font-semibold text-foreground"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Featured events */}
        <section className="max-w-7xl mx-auto px-4 pb-12" aria-label="Kiemelt sportesemények">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground text-balance">
                Kiemelt sportesemények
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Ár-összehasonlítás — nem értékesítés
              </p>
            </div>
            <Link
              href="/events"
              className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Összes esemény
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* 7. About the service */}
        <section className="bg-secondary border-y border-border py-16" aria-label="A szolgáltatásról">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
                  A platformról
                </span>
                <h2 className="text-3xl font-bold text-foreground text-balance mb-5 leading-tight">
                  Egyetlen helyen, <br />minden szolgáltatótól
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A HungarySportTickets összegyűjti és naprakészen tartja a magyarországi
                  sportesemény jegyek árait vezető hazai és nemzetközi platformokról —
                  így Ön egyetlen felületen összehasonlíthatja az aktuális ajánlatokat,
                  és az Önnek megfelelő szolgáltatóhoz navigálhat.
                </p>
                <div className="inline-flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-sm text-foreground">
                  <AlertTriangle size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Fontos:</strong> Ez az oldal kizárólag ár-összehasonlítást
                    végez. Jegyek vásárlása és fizetési adatok megadása itt nem lehetséges.
                  </span>
                </div>
              </div>

              {/* Right: feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Globe,
                    title: "Több forrásból",
                    desc: "Magyar, EU-s és USA-beli viszonteladó platformokról gyűjtjük az árajánlatokat valós időben.",
                  },
                  {
                    icon: BarChart2,
                    title: "Ár-összehasonlítás",
                    desc: "Megmutatjuk az adott eseményre elérhető legalacsonyabb és legmagasabb árakat.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Naprakész adatok",
                    desc: "Az árak folyamatosan frissülnek a piaci kereslet és kínálat alapján.",
                  },
                  {
                    icon: Eye,
                    title: "Átlátható tájékoztatás",
                    desc: "Minden oldalon feltüntetjük, hogy másodlagos piaci platformokról származnak az árak.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-16" aria-label="Gyakran ismételt kérdések">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              GYIK
            </span>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Gyakran ismételt kérdések
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Minden, amit a HungarySportTickets működéséről tudni érdemes.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none hover:bg-secondary/60 transition-colors">
                  <span className="font-semibold text-foreground text-sm leading-relaxed">
                    {q}
                  </span>
                  <ChevronDown
                    size={16}
                    className="text-muted-foreground shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* FAQ disclaimer */}
          <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Jogi nyilatkozat: </strong>
            A HungarySportTickets (hungarysporttickets.com) egy másodlagos piaci ár-összehasonlító platform. Nem vagyunk
            elsődleges jegyeladó. Az árak eltérhetnek a névértéktől.
            Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED, Myrianthous Anna,
            Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
          </div>
        </section>

        {/* 8. Bottom full disclaimer */}
        <section
          className="max-w-7xl mx-auto px-4 pb-12"
          aria-label="Teljes jogi nyilatkozat"
        >
          <div className="rounded-xl border border-border bg-secondary p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle
                className="shrink-0 mt-0.5 text-accent"
                size={22}
                aria-hidden="true"
              />
              <h2 className="font-bold text-foreground text-lg">
                Jogi nyilatkozat — Fontos tudnivalók
              </h2>
            </div>
            <div className="space-y-3 text-base text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Ez az oldal egy másodlagos piaci ár-összehasonlító platform.</strong>{" "}
                  A HungarySportTickets (hungarysporttickets.com) NEM elsődleges jegyeladó, és NEM rendelkezik közvetlen
                kapcsolattal az esemény szervezőivel.
              </p>
              <p>
                A feltüntetett árak külső, harmadik fél viszonteladó platformoktól
                (pl. Viagogo, StubHub, Ticketmaster, Eventim, LiveTicket stb.) származnak,
                és{" "}
                <strong className="text-foreground">
                  eltérhetnek a névleges jegyártól — jellemzően magasabbak lehetnek.
                </strong>
              </p>
              <p>
                Az oldalon{" "}
                <strong className="text-foreground">
                  NEM lehet jegyet vásárolni
                </strong>
                . A HungarySportTickets (hungarysporttickets.com){" "}
                <strong className="text-foreground">
                  NEM gyűjt és NEM tárol semmilyen fizetési adatot.
                </strong>{" "}
                A vásárlás kizárólag a kiválasztott külső szolgáltató platformján
                és annak feltételei szerint lehetséges.
              </p>
              <p>
                Kérjük, a vásárlás előtt mindig ellenőrizze a végső árat,
                a szállítási és visszaváltási feltételeket közvetlenül a
                kiválasztott szolgáltatónál.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
              <strong className="text-foreground">Üzemeltető:</strong>{" "}
              FISCUS NOSTRUM FUND SERVICES LIMITED · Myrianthous Anna, Panagioti Kaspi 5Α,
              Nicosia 1095, Cyprus
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
