import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Shield } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató – HungarySportTickets",
  description:
    "A HungarySportTickets adatvédelmi tájékoztatója. Hogyan kezeljük az Ön adatait, mit gyűjtünk és mit nem.",
};

const SECTIONS = [
  {
    title: "1. Az adatkezelő",
    content: [
      "Adatkezelő: FISCUS NOSTRUM FUND SERVICES LIMITED",
      "Cím: Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus",
      "Honlap: hungarysporttickets.com",
    ],
  },
  {
    title: "2. Milyen adatokat gyűjtünk?",
    content: [
      "A HungarySportTickets egy ár-összehasonlító platform. NEM gyűjtünk személyes azonosításra alkalmas adatokat (név, e-mail, telefonszám) regisztráció vagy vásárlás keretében, mivel ilyen funkciókat nem kínálunk.",
      "Automatikusan gyűjtött adatok: IP-cím (anonimizálva), böngészőtípus, eszköztípus, látogatott oldalak, látogatás időpontja és időtartama. Ezeket kizárólag statisztikai célokra és a weboldal működésének javítására használjuk.",
      "Sütik (cookie-k): Részletes tájékoztatást a sütikről a Cookie-tájékoztatóban talál.",
    ],
  },
  {
    title: "3. Amit NEM gyűjtünk",
    content: [
      "Fizetési adatok (bankkártya, számlaszám, PayPal-adatok stb.): A HungarySportTickets semmilyen fizetési adatot nem gyűjt, nem tárol és nem dolgoz fel. Vásárlás kizárólag a kiválasztott külső viszonteladó saját, biztonságos platformján lehetséges.",
      "Személyes regisztrációs adatok: Az oldalon nincs felhasználói fiók, regisztrációs rendszer.",
      "Egészségügyi, politikai, vallási vagy egyéb különleges kategóriájú adatok.",
    ],
  },
  {
    title: "4. Az adatkezelés jogalapja",
    content: [
      "Jogos érdek (GDPR 6. cikk (1) bek. f) pont): A weboldal biztonságos üzemeltetése, statisztikai elemzés és a visszaélések megakadályozása érdekében.",
      "Hozzájárulás (GDPR 6. cikk (1) bek. a) pont): Nem kötelező sütik esetében.",
    ],
  },
  {
    title: "5. Adattovábbítás",
    content: [
      "Az adatokat harmadik félnek nem adjuk el. Tárhelyszolgáltatónk és analitikai partnereink (pl. Vercel, Google Analytics) korlátozott hozzáféréssel rendelkezhetnek anonimizált látogatási adatokhoz.",
      "Az EU/EGT területén kívüli adattovábbítás csak megfelelő garanciák (pl. standard szerződéses záradékok) megléte esetén történik.",
    ],
  },
  {
    title: "6. Adatmegőrzési idő",
    content: [
      "Anonimizált látogatási statisztikák: legfeljebb 26 hónap.",
      "Süti-adatok: a sütikre vonatkozó szabályok szerint (lásd Cookie-tájékoztató).",
    ],
  },
  {
    title: "7. Az Ön jogai (GDPR)",
    content: [
      "Hozzáférés joga: tájékoztatást kérhet az Önre vonatkozó adatokról.",
      "Helyesbítés joga: kérheti a pontatlan adatok javítását.",
      "Törlés joga: kérheti az adatok törlését ('az elfelejtéshez való jog').",
      "Adathordozhatóság joga: kérheti az adatok gép által olvasható formátumban történő átadását.",
      "Tiltakozás joga: tiltakozhat az adatkezelés ellen.",
      "Jogorvoslat: panaszt tehet a felügyeleti hatóságnál (Magyarországon: NAIH, naih.hu).",
    ],
  },
  {
    title: "8. Kapcsolat",
    content: [
      "Adatvédelmi kérdéseivel forduljon hozzánk: a weboldalon feltüntetett üzemeltetői elérhetőségen.",
      "FISCUS NOSTRUM FUND SERVICES LIMITED, Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      {/* Top disclaimer */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <AlertTriangle size={16} className="text-primary shrink-0" aria-hidden="true" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Másodlagos piaci platform.</strong>{" "}
            A HungarySportTickets NEM értékesít jegyeket és NEM gyűjt fizetési adatokat.
            Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED, Nicosia 1095, Cyprus.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Shield size={18} className="text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary">
                Jogi dokumentum
              </p>
              <h1 className="text-2xl font-bold text-foreground text-balance">
                Adatvédelmi tájékoztató
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hatályos: 2026. január 1-jétől. Az adatkezelő: FISCUS NOSTRUM FUND SERVICES LIMITED,
            Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
          </p>
        </div>

        {/* Key notice box */}
        <div className="rounded-xl border border-primary/30 bg-primary/5 px-5 py-4 mb-10 flex items-start gap-3">
          <AlertTriangle size={16} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm leading-relaxed text-foreground">
            <strong>Fontos:</strong> A HungarySportTickets egy ár-összehasonlító oldal.{" "}
            <strong>NEM gyűjtünk fizetési adatokat, bankkártyaszámot vagy egyéb pénzügyi adatot.</strong>{" "}
            Nem rendelkezünk felhasználói fiók rendszerrel és nem értékesítünk jegyeket közvetlenül.
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {SECTIONS.map((section) => (
            <section key={section.title} className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-base font-bold text-foreground mb-4 pb-3 border-b border-border">
                {section.title}
              </h2>
              <ul className="space-y-2.5">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link href="/cookies" className="text-primary hover:underline">
            Cookie-tájékoztató
          </Link>
          <span className="text-border">|</span>
          <Link href="/disclaimer" className="text-primary hover:underline">
            Jogi nyilatkozat
          </Link>
          <span className="text-border">|</span>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Vissza a főoldalra
          </Link>
        </div>

        {/* Company address */}
        <div className="mt-6 text-xs text-muted-foreground border-t border-border pt-6">
          Üzemeltető:{" "}
          <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong>,
          Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
