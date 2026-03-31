"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, TicketCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/events", label: "Minden esemény" },
  { href: "/category/labdarugas", label: "Labdarúgás" },
  { href: "/category/motorsport", label: "Motorsport" },
  { href: "/category/tenisz", label: "Tenisz" },
  { href: "/partners", label: "Partnerek" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="HungarySportTickets – főoldal"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary">
            <TicketCheck size={18} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-lg text-foreground leading-none tracking-tight">
            Hungary<span className="text-primary">Sport</span>Tickets
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Főnavigáció">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Comparison badge */}
        <div className="hidden md:flex items-center">
          <span className="text-sm font-semibold px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border">
            ÁR-ÖSSZEHASONLÍTÁS — NEM ÉRTÉKESÍTÉS
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav
          className="md:hidden bg-card border-t border-border px-4 pb-4 pt-2"
          aria-label="Mobilnavigáció"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground px-3">
                Ez az oldal kizárólag ár-összehasonlítást végez. Jegyeket nem
                értékesítünk.
              </p>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
