import { Link } from "@tanstack/react-router";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppLogo, WHATSAPP_URL } from "@/components/whatsapp-widget";
import { QuoteModal, openQuoteModal } from "@/components/quote-modal";

const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/services" as const, label: "Services" },
  { to: "/reviews" as const, label: "Reviews" },
  { to: "/contact" as const, label: "Contact" },
];

export const phoneDisplay = "+44 7932 794629";
export const phoneHref = "tel:+447932794629";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Airpro Air Conditioning home">
      <span className="grid size-10 place-items-center rounded-md bg-primary text-lg font-bold text-primary-foreground">A</span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold ${inverse ? "text-technical-foreground" : "text-foreground"}`}>AIRPRO</span>
        <span className={`mt-1 block text-[0.65rem] font-semibold uppercase ${inverse ? "text-technical-muted" : "text-muted-foreground"}`}>Air Conditioning</span>
      </span>
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Top Announcement & Quick Contact Bar (ONLY WhatsApp location alongside mobile number) */}
      <div className="bg-technical text-technical-foreground border-b border-technical-border/50">
        <div className="site-container flex min-h-10 items-center justify-between gap-4 py-2 text-xs font-medium sm:text-sm">
          <span className="flex items-center gap-2">
            <Clock3 className="size-4 text-highlight" />
            <span>Open 24 hours</span>
          </span>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={phoneHref}
              className="flex items-center gap-2 font-semibold transition-colors hover:text-highlight"
            >
              <Phone className="size-3.5 text-primary" />
              <span>{phoneDisplay}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-2.5 py-1 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all hover:scale-105"
              title="Chat with us on WhatsApp: +44 7932 794629"
            >
              <WhatsAppLogo className="size-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <span className="hidden items-center gap-2 lg:flex text-technical-muted">
            <MapPin className="size-4 text-highlight" /> Birmingham & Surrounding Areas
          </span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Direct Call & Free Quote Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="default" className="shadow-sm click-effect">
              <a href={phoneHref} className="flex items-center gap-2 font-bold">
                <Phone className="size-4" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={openQuoteModal}
              className="click-effect font-bold border-primary/40 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden click-effect"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Dropdown Nav */}
        {open && (
          <nav className="border-t border-border bg-background px-5 pb-6 pt-3 lg:hidden shadow-lg animate-in slide-in-from-top-2 duration-200" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/50 py-3 text-base font-semibold"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 grid grid-cols-2 gap-3 pt-2">
                <a
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-xs font-bold text-primary-foreground shadow click-effect"
                >
                  <Phone className="size-4" />
                  <span>Call Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openQuoteModal();
                  }}
                  className="flex items-center justify-center gap-2 rounded-md border border-border bg-secondary py-3 text-xs font-bold text-foreground shadow click-effect cursor-pointer"
                >
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-technical-border bg-technical pb-24 pt-14 text-technical-foreground lg:pb-8">
        <div className="site-container grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-technical-muted">
              Professional residential and commercial air-conditioning installation for homeowners and businesses in Birmingham and surrounding areas.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-highlight">Contact & Location</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-technical-muted">
              <a
                className="flex items-center gap-2 hover:text-technical-foreground text-foreground font-semibold"
                href={phoneHref}
              >
                <Phone className="size-4 text-primary" /> {phoneDisplay}
              </a>

              <p>16 Doversley Rd<br />Birmingham B14 6NW</p>
              <p>Open 24 hours · 7 days a week</p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase text-highlight">Explore</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-technical-muted">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-technical-foreground">
                  {item.label}
                </Link>
              ))}
              <Link to="/privacy-policy" className="hover:text-technical-foreground">Privacy</Link>
              <Link to="/cookie-policy" className="hover:text-technical-foreground">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="site-container mt-12 border-t border-technical-border pt-6 text-xs text-technical-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Airpro Air Conditioning. All rights reserved.</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            Certified F-Gas · Daikin Specialist · Birmingham UK
          </span>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Quick-Action Bar */}
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2.5 rounded-xl bg-slate-950/90 p-1.5 backdrop-blur-lg border border-white/10 shadow-2xl lg:hidden">
        <a
          href={phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary font-bold text-xs text-primary-foreground shadow click-effect"
        >
          <Phone className="size-4" />
          <span>Call Now</span>
        </a>

        <button
          type="button"
          onClick={openQuoteModal}
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary font-bold text-xs text-foreground shadow border border-border click-effect cursor-pointer"
        >
          <span>Get Free Quote</span>
        </button>
      </div>

      {/* Global Interactive Quote & Survey Modal */}
      <QuoteModal />
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary py-16 sm:py-20">
      <div className="site-container max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

export function CallBand() {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <div className="site-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider opacity-85">Available 24 Hours · Birmingham</p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Ready to upgrade your home climate?</h2>
          <p className="mt-1 text-sm text-primary-foreground/80">Get free expert advice on indoor and outdoor unit locations.</p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="shadow click-effect">
            <a href={phoneHref} className="flex items-center gap-2 font-bold">
              <Phone className="size-4" />
              <span>{phoneDisplay}</span>
            </a>
          </Button>

          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={openQuoteModal}
            className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary click-effect font-bold cursor-pointer"
          >
            <span>Request a Quote</span>
          </Button>
        </div>
      </div>
    </section>
  );
}