import { AlertTriangle, ShieldOff, CreditCard } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <div
      className="w-full bg-disclaimer-bg text-disclaimer-fg"
      role="alert"
      aria-label="Fontos jogi nyilatkozat"
    >
      {/* Top strip — very bold single-line statement */}
      <div className="bg-primary text-primary-foreground py-2">
        <p className="max-w-7xl mx-auto px-4 text-center text-base md:text-lg font-black tracking-widest uppercase leading-snug">
          Figyelem: Ez egy másodlagos piaci ár-összehasonlító oldal — NEM értékesítünk jegyeket — NEM gyűjtünk fizetési adatokat
        </p>
      </div>

      {/* Main disclaimer block */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon + main text */}
          <div className="flex items-start gap-3 flex-1">
            <AlertTriangle
              className="shrink-0 mt-0.5"
              size={26}
              aria-hidden="true"
            />
            <p className="text-base font-bold leading-relaxed">
              <span className="text-lg font-black uppercase tracking-wide block mb-1">
                Másodlagos piaci platform — kizárólag ár-összehasonlítás
              </span>
              Ez az oldal{" "}
              <strong className="underline">NEM értékesít jegyeket</strong> és{" "}
              <strong className="underline">NEM gyűjt, NEM tárol fizetési adatokat</strong>.
              Az árak eltérhetnek a névértéktől — kérjük, ellenőrizze az
              aktuális árakat közvetlenül a kiválasztott szolgáltatónál.
              Az összes ajánlat külső viszonteladó platformoktól (Viagogo,
              StubHub, Ticketmaster, Eventim, LiveTicket) származik.
            </p>
          </div>

          {/* Key facts — right side */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-black/10 rounded-lg px-3 py-2">
              <ShieldOff size={16} aria-hidden="true" />
              <span className="text-sm font-black uppercase tracking-wide whitespace-nowrap">
                Nem értékesítés
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 rounded-lg px-3 py-2">
              <CreditCard size={16} aria-hidden="true" />
              <span className="text-sm font-black uppercase tracking-wide whitespace-nowrap">
                Nincs fizetési adat
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
