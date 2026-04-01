import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Cookie } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Cookie-tájékoztató – HungarySportTickets",
  description:
    "A HungarySportTickets cookie (süti) tájékoztatója. Milyen sütiket használunk és hogyan kezelheti azokat.",
};

const COOKIE_TYPES = [
  {
    name: "Feltétlenül szükséges sütik",
    required: true,
    description:
      "Ezek a sütik szükségesek a weboldal alapvető működéséhez. Nélkülük egyes funkciók nem működnének megfelelően.",
    examples: [
      { name: "cookie_consent", purpose: "A cookie-hozzájárulás állapotának tárolása", duration: "1 év" },
      { name: "session", purpose: "Munkamenet-kezelés", duration: "Böngésző bezárásáig" },
    ],
  },
  {
    name: "Analitikai sütik",
    required: false,
    description:
      "Ezek a sütik segítenek megérteni, hogyan használják a látogatók a weboldalt. Az adatok aggregáltak és anonimizáltak.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — egyedi látogatók megkülönböztetése", duration: "2 év" },
      { name: "_ga_*", purpose: "Google Analytics — munkamenet-állapot", duration: "1 év" },
    ],
  },
  {
    name: "Funkcionális sütik",
    required: false,
    description:
      "Ezek a sütik lehetővé teszik a weboldal számára, hogy megjegyezze az Ön preferenciáit (pl. szűrőbeállítások).",
    examples: [
      { name: "filter_prefs", purpose: "Kategóriaszűrő beállításainak mentése", duration: "30 nap" },
    ],
  },
];

export default function CookiesPage() {
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
            Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED, Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary">
                Jogi dokumentum
              </p>
              <h1 className="text-2xl font-bold text-foreground text-balance">
                Cookie-tájékoztató (Süti-szabályzat)
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hatályos: 2026. Üzemeltető: FISCUS NOSTRUM FUND SERVICES LIMITED,
            Myrianthous Anna, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
          </p>
        </div>

        {/* Intro */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-base font-bold text-foreground mb-3">Mi az a süti (cookie)?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A sütik kis szöveges fájlok, amelyeket a weboldal az Ön böngészőjébe ment, amikor meglátogatja
            az oldalt. A sütik segítenek a weboldal megfelelő működésében, a felhasználói élmény javításában
            és statisztikai adatok gyűjtésében. A HungarySportTickets{" "}
            <strong className="text-foreground">NEM használ sütit fizetési adatok tárolására</strong> —
            ilyen adatokat egyáltalán nem kezelünk.
          </p>
        </div>

        {/* Cookie types */}
        <div className="space-y-6 mb-10">
          {COOKIE_TYPES.map((type) => (
            <section key={type.name} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <h2 className="text-sm font-bold text-foreground">{type.name}</h2>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    type.required
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`}
                >
                  {type.required ? "Kötelező" : "Opcionális"}
                </span>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Süti neve</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cél</th>
                        <th className="text-left py-2 font-semibold text-foreground">Lejárat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.examples.map((cookie) => (
                        <tr key={cookie.name} className="border-b border-border last:border-0">
                          <td className="py-2 pr-4 text-muted-foreground font-mono">{cookie.name}</td>
                          <td className="py-2 pr-4 text-muted-foreground">{cookie.purpose}</td>
                          <td className="py-2 text-muted-foreground">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* How to manage */}
        <section className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-base font-bold text-foreground mb-4 pb-3 border-b border-border">
            Hogyan kezelheti a sütiket?
          </h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Böngésző beállítások:</strong> A legtöbb böngésző
              lehetővé teszi a sütik kezelését a beállítások menüben. Törölheti a meglévő sütiket és
              letilthatja az újak elmentését.
            </p>
            <p>
              <strong className="text-foreground">Kötelező sütik:</strong> A feltétlenül szükséges
              sütik letiltása esetén az oldal egyes részei nem fognak megfelelően működni.
            </p>
            <p>
              <strong className="text-foreground">Google Analytics letiltása:</strong> A Google
              Analytics letiltásához használja a{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out böngészőbővítményt
              </a>
              .
            </p>
          </div>
        </section>

        {/* Bottom links */}
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/privacy" className="text-primary hover:underline">
            Adatvédelmi tájékoztató
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
