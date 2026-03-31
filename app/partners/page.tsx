import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Globe, AlertTriangle } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import DisclaimerBanner from "@/components/disclaimer-banner";
import { SUPPLIERS_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Jegypartnerek – HungarySportTickets",
  description:
    "A HungarySportTickets által összehasonlított jegyeladó partnerek listája. Ticketmaster, Viagogo, Eventim, LiveTicket, StubHub és más szolgáltatók.",
};

const FLAG_MAP: Record<string, string> = {
  EU: "EU",
  HU: "HU",
  US: "USA",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DisclaimerBanner />
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Partnerek
          </span>
          <h1 className="text-3xl font-bold text-foreground text-balance mb-3">
            Jegyeladó partnerek
          </h1>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
            Az alábbi listában szerepelnek azok a jegyeladó platformok, amelyek
            árait a HungarySportTickets összehasonlítja. Az árak valós időben
            változhatnak — a vásárlás minden esetben az adott partnernél
            közvetlenül történik.
          </p>
        </div>

        {/* Prominent disclaimer */}
        <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 px-5 py-4 mb-8">
          <AlertTriangle size={22} className="text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-base text-foreground leading-relaxed">
            <strong>Fontos:</strong> A HungarySportTickets egy{" "}
            <strong>másodlagos piaci ár-összehasonlító oldal</strong>. Nem
            vagyunk jegyeladó és nem árusítunk jegyeket. A partneroldalakra
            mutató linkek kizárólag tájékoztató céllal szerepelnek. Az árak
            eltérhetnek a névértéktől.
          </p>
        </div>

        {/* Partners list */}
        <div className="flex flex-col gap-4" role="list" aria-label="Jegyeladó partnerek">
          {SUPPLIERS_INFO.map((supplier) => (
            <article
              key={supplier.id}
              role="listitem"
              className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-xl border border-border bg-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0">
                <Globe size={22} className="text-muted-foreground" aria-hidden="true" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h2 className="font-bold text-foreground text-base">
                    {supplier.name}
                  </h2>
                  <span className="text-xs bg-secondary border border-border text-muted-foreground px-2 py-0.5 rounded">
                    {FLAG_MAP[supplier.countryCode] ?? supplier.countryCode} · {supplier.countryLabel}
                  </span>
                  {supplier.isOfficial ? (
                    <span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded">
                      <ShieldCheck size={11} aria-hidden="true" />
                      Elsődleges platform
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded">
                      Másodlagos piac
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {supplier.description}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="font-medium text-foreground">Webcím:</span>{" "}
                  <span className="font-mono">{supplier.url.replace("https://", "")}</span>
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <a
                  href={supplier.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                  aria-label={`${supplier.name} weboldalának megnyitása (új lapon)`}
                >
                  Megnyitás
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-10 rounded-xl border border-border bg-secondary px-5 py-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Jogi nyilatkozat: </strong>
          A HungarySportTickets nem vállal felelősséget a partneroldalak
          tartalmáért, árazásáért, a jegyek érvényességéért vagy a vásárlás
          bármely körülményéért. A vásárlás kizárólag a kiválasztott partner saját
          platformján és feltételei szerint történik. Üzemeltető: FISCUS NOSTRUM
          FUND SERVICES LIMITED, Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia
          1095, Cyprus.
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
