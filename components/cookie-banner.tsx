"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, Settings } from "lucide-react";

type ConsentState = "pending" | "accepted" | "declined";

export default function CookieBanner() {
  const [state, setState] = useState<ConsentState>("pending");
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("cookie_consent");
    if (saved === "accepted" || saved === "declined") {
      setState(saved as ConsentState);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setState("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setState("declined");
  };

  // Don't render until mounted (avoids SSR mismatch) or already decided
  if (!mounted || state !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie hozzájárulás"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-secondary">
          <div className="flex items-center gap-2">
            <Cookie size={16} className="text-primary" aria-hidden="true" />
            <span className="text-sm font-bold text-foreground">
              Süti (Cookie) beállítások
            </span>
          </div>
          <button
            onClick={handleDecline}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
            aria-label="Elutasítás és bezárás"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            A weboldal működéséhez szükséges sütiket használunk, és — az Ön hozzájárulásával — analitikai
            sütiket a látogatottsági statisztikák méréséhez.{" "}
            <strong className="text-foreground">
              Fizetési adatokat nem gyűjtünk és nem tárolunk.
            </strong>
          </p>

          {showDetails && (
            <div className="mb-4 bg-secondary rounded-lg border border-border p-4 text-xs text-muted-foreground space-y-2">
              <div className="flex items-start gap-2">
                <Check size={13} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Szükséges sütik</strong> — mindig aktívak, az oldal
                  alapvető működéséhez kellenek.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Settings size={13} className="text-muted-foreground mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Analitikai sütik</strong> — Google Analytics,
                  anonimizált látogatási adatok. Az "Elfogadás" gombbal hozzájárul ezekhez is.
                </span>
              </div>
              <p className="pt-1">
                Részletek:{" "}
                <Link href="/cookies" className="text-primary hover:underline">
                  Cookie-tájékoztató
                </Link>{" "}
                |{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Adatvédelmi tájékoztató
                </Link>
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                {showDetails ? "Részletek elrejtése" : "Részletek megtekintése"}
              </button>
              <span className="text-border text-xs">|</span>
              <Link
                href="/cookies"
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Cookie-szabályzat
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                Csak szükséges
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Elfogadás
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
