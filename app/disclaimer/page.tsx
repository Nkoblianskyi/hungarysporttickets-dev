import { AlertTriangle, ShieldOff, CreditCard, ExternalLink } from "lucide-react";
import DisclaimerBanner from "@/components/disclaimer-banner";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jogi nyilatkozat – HungarySportTickets",
  description:
    "A HungarySportTickets jogi nyilatkozata. Másodlagos piaci ár-összehasonlító platform — nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat.",
};

const SECTIONS = [
  {
    icon: AlertTriangle,
    title: "A platform jellege — Másodlagos piac",
    content: [
      "A HungarySportTickets egy másodlagos piaci ár-összehasonlító platform. Ez az oldal NEM elsődleges jegyeladó, és NEM rendelkezik közvetlen kapcsolattal az esemény szervezőivel.",
      "A feltüntetett jegyajánlatok kizárólag külső, harmadik fél viszonteladó platformoktól (továbbiakban: Szolgáltatók) származnak, mint például Viagogo, StubHub, Ticketmaster Resale, Eventim, LiveTicket, SeatGeek és hasonló platformok.",
      "A HungarySportTickets a jegyek értékesítésében NEM vesz részt, és azért semmilyen felelősséget nem vállal.",
    ],
  },
  {
    icon: ShieldOff,
    title: "Nem értékesítünk jegyeket",
    content: [
      "Ez az oldal kizárólag ár-összehasonlítási szolgáltatást nyújt. Jegyek megvásárlása a HungarySportTickets platformján keresztül NEM lehetséges.",
      "Minden jegyvásárlás kizárólag a kiválasztott külső Szolgáltató saját platformján és annak saját általános szerződési feltételei, adatvédelmi szabályzata és visszaváltási politikája szerint lehetséges.",
      "A HungarySportTickets nem vállal felelősséget a külső Szolgáltatók által nyújtott jegyek érvényességéért, minőségéért, leszállításáért vagy bármely más, a vásárlással összefüggő körülményért.",
    ],
  },
  {
    icon: CreditCard,
    title: "Fizetési adatok — Nem gyűjtünk adatokat",
    content: [
      "A HungarySportTickets NEM gyűjt, NEM tárol és NEM dolgoz fel semmilyen fizetési adatot, bankkártyaadatot, számlaszámot vagy egyéb pénzügyi információt.",
      "A HungarySportTickets NEM kér fizetési adatokat a felhasználóitól. Amennyiben bármely platformon fizetési adat megadására kérik, az kizárólag a kiválasztott külső Szolgáltató felületén történik.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerBanner />
      <SiteHeader />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-12 w-full">
        {/* Page header */}
        <div className="mb-10">
          <nav aria-label="Navigációs útvonal" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Főoldal
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">Jogi nyilatkozat</li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-foreground text-balance mb-3">
            Jogi nyilatkozat
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Kérjük, figyelmesen olvassa el az alábbi tájékoztatást, mielőtt az
            oldalon található ajánlatokat felhasználja. Az oldal használatával
            Ön elfogadja az alábbi feltételeket.
          </p>
        </div>

        {/* Critical top disclaimer — must be prominent */}
        <div className="mb-10 rounded-xl border-2 border-accent/60 bg-accent/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle
              size={24}
              className="text-accent shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h2 className="font-bold text-foreground text-lg mb-3">
                Fontos figyelmeztetés
              </h2>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">▸</span>
                  <span>
                    <strong className="text-foreground">Ez az oldal egy másodlagos piaci ár-összehasonlító platform</strong>{" "}
                    (és NEM elsődleges jegyeladó).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">▸</span>
                  <span>
                    A feltüntetett jegyárak{" "}
                    <strong className="text-foreground">
                      magasabbak lehetnek a névleges jegyárnál.
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">▸</span>
                  <span>
                    A HungarySportTickets <strong className="text-foreground">NEM értékesít jegyeket</strong>{" "}
                    és <strong className="text-foreground">NEM gyűjt fizetési adatokat.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent shrink-0 mt-0.5" aria-hidden="true">▸</span>
                  <span>
                    Vásárlás előtt mindig ellenőrizze a végső árat és a feltételeket
                    közvetlenül a kiválasztott Szolgáltatónál.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detail sections */}
        <div className="flex flex-col gap-8">
          {SECTIONS.map(({ icon: Icon, title, content }) => (
            <section key={title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-foreground text-base leading-tight pt-1">
                  {title}
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {content.map((para, i) => (
                  <li key={i} className="text-base text-muted-foreground leading-relaxed">
                    {para}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Price accuracy */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-bold text-foreground text-base mb-4">
              Árinformációk pontossága
            </h2>
            <div className="flex flex-col gap-3 text-base text-muted-foreground leading-relaxed">
              <p>
                Az oldalon megjelenített árak tájékoztató jellegűek és valós időben
                változhatnak a kereslet, a kínálat és a külső Szolgáltatók árazási
                politikájának megfelelően.
              </p>
              <p>
                A HungarySportTickets nem garantálja az árpontosságát, elérhetőségét vagy a
                jegyek tényleges megvásárolhatóságát. Az oldalon feltüntetett „tól–ig"
                árak az adott pillanatban talált ajánlatok legalacsonyabb és
                legmagasabb értékét jelzik.
              </p>
              <p>
                A végső ár — beleértve az esetleges szolgáltatási díjakat, szállítási
                költségeket és adókat — kizárólag a kiválasztott Szolgáltató platformján
                derül ki. A HungarySportTickets ezekért nem vállal felelősséget.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-bold text-foreground text-base mb-4">
              Felelősség kizárása
            </h2>
            <div className="flex flex-col gap-3 text-base text-muted-foreground leading-relaxed">
              <p>
                A HungarySportTickets kizárja felelősségét minden olyan kárért, veszteségért
                vagy kellemetlenségért, amely a külső Szolgáltatóktól vásárolt jegyekkel
                kapcsolatban merülhet fel, beleértve, de nem kizárólagosan:
              </p>
              <ul className="ml-4 flex flex-col gap-1.5 list-disc">
                <li>érvénytelen vagy hamisított jegyeket,</li>
                <li>a jegyek késedelmes vagy elmaradó kézbesítését,</li>
                <li>az esemény törlését vagy elhalasztását,</li>
                <li>a névértéknél magasabb végső árat,</li>
                <li>a Szolgáltató általános szerződési feltételeivel kapcsolatos jogvitákat.</li>
              </ul>
            </div>
          </section>

          {/* Useful links */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-bold text-foreground text-base mb-4">
              Hasznos hivatkozások
            </h2>
            <ul className="flex flex-col gap-2">
              {[
                {
                  label: "Fogyasztóvédelmi tájékoztató – NFH (Magyar)",
                  href: "https://www.fogyasztovédelem.hu",
                },
                {
                  label: "EU fogyasztóvédelmi jogok",
                  href: "https://europa.eu/youreurope/citizens/consumers/index_hu.htm",
                },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    {label}
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Company address — required on all pages */}
        <div className="mt-10 rounded-xl border border-border bg-secondary p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-foreground mb-2">
            Üzemeltető
          </p>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              FISCUS NOSTRUM FUND SERVICES LIMITED
            </strong>
            <br />
            Myrianthous Anna
            <br />
            Panagioti Kaspi 5Α
            <br />
            Nicosia 1095
            <br />
            Cyprus
          </address>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
