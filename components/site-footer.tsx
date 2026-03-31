import Link from "next/link";
import { TicketCheck, AlertCircle } from "lucide-react";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-16">
      {/* Full disclaimer section */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-start gap-3">
            <AlertCircle
              className="shrink-0 mt-0.5 text-accent"
              size={20}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-bold text-foreground text-base uppercase tracking-wide mb-2">
                Jogi nyilatkozat — Másodlagos piaci platform
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong className="text-foreground">
                  HungarySportTickets (hungarysporttickets.com) kizárólag ár-összehasonlítási szolgáltatást nyújt.
                </strong>{" "}
                Ez az oldal egy <strong className="text-foreground">másodlagos piaci platform</strong>,
                amely összegyűjti és összehasonlítja különböző jegyviszonteladó
                szolgáltatók árait sportesemények jegyeire vonatkozóan. Az oldalon{" "}
                <strong className="text-foreground">NEM folytatunk jegyeladást</strong>,{" "}
                <strong className="text-foreground">
                  NEM gyűjtünk és NEM tárolunk semmilyen fizetési adatot
                </strong>
                . A vásárlás kizárólag a kiválasztott külső szolgáltató saját
                platformján történhet. Az árak eltérhetnek a névértéktől —
                kérjük, mindig ellenőrizze az aktuális árakat és a fizetési
                feltételeket közvetlenül a szolgáltatónál, mielőtt vásárol.
                A feltüntetett árak tájékoztató jellegűek és változhatnak.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + company info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit" aria-label="HungarySportTickets – hungarysporttickets.com főoldal">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary">
                <TicketCheck size={15} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-base text-foreground tracking-tight">
                Hungary<span className="text-primary">Sport</span>Tickets
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sportjegy ár-összehasonlítás Magyarországon. Labdarúgás, Forma-1,
              tenisz és további sporteseményekre.
            </p>

            {/* Company address */}
            <div className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
              <p className="font-semibold text-foreground mb-1 uppercase tracking-wide text-xs">
                Üzemeltető
              </p>
              <address className="not-italic">
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
          </div>

          {/* Sport categories */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Sportkategóriák
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/category/labdarugas", label: "Labdarúgás" },
                { href: "/category/motorsport", label: "Motorsport / F1" },
                { href: "/category/tenisz", label: "Tenisz" },
                { href: "/category/kosarlabda", label: "Kosárlabda" },
                { href: "/category/kezilabda", label: "Kézilabda" },
                { href: "/events", label: "Összes esemény" },
                { href: "/partners", label: "Partnerek" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
              Jogi információk
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/disclaimer", label: "Jogi nyilatkozat" },
                { href: "/privacy", label: "Adatvédelmi tájékoztató" },
                { href: "/cookies", label: "Cookie-tájékoztató" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} HungarySportTickets · hungarysporttickets.com — FISCUS NOSTRUM FUND SERVICES LIMITED,
            Nicosia, Cyprus. Minden jog fenntartva.
          </p>
          <p className="text-center md:text-right">
            <strong className="text-foreground">Másodlagos piac · Csak ár-összehasonlítás · Nem értékesítés</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
