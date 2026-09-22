import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Sparkles, Star, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneDisplay, phoneHref, CallBand } from "@/components/site-shell";
import { Process, ReviewsPreview, Strengths } from "@/components/content-sections";
import { HeroVideo } from "@/components/hero-video";
import { ProjectGallery } from "@/components/project-gallery";
import { TrustBar } from "@/components/trust-bar";
import { FaqSection } from "@/components/faq-section";
import { ClimateVisualizer } from "@/components/climate-visualizer";
import { openQuoteModal } from "@/components/quote-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Air Conditioning Installation Birmingham | Airpro" },
      { name: "description", content: "Professional residential air conditioning installation in Birmingham. Call Airpro Air Conditioning 24 hours a day on +44 7932 794629." },
      { property: "og:title", content: "Airpro Air Conditioning | Birmingham Installer" },
      { property: "og:description", content: "Careful residential air-conditioning installation, clear advice and a clean finish in Birmingham." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "HVACBusiness", name: "Airpro Air Conditioning", url: "https://airproac.co.uk", telephone: "+44 7932 794629", address: { "@type": "PostalAddress", streetAddress: "16 Doversley Rd", addressLocality: "Birmingham", postalCode: "B14 6NW", addressCountry: "GB" }, areaServed: "Birmingham and surrounding areas", openingHours: "Mo-Su 00:00-23:59", aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "12" } }) }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    {/* HERO SECTION WITH LIVE VIDEO SHOWCASE (KEPT INTACT) */}
    <section className="relative overflow-hidden bg-technical py-16 text-technical-foreground sm:py-20 lg:py-24">
      {/* Subtle ambient lighting glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -right-40 size-[500px] rounded-full bg-primary/10 blur-3xl" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-highlight/10 blur-3xl" 
      />

      <div className="site-container relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 border-l-2 border-highlight pl-3 text-sm font-semibold text-highlight">
            <MapPin className="size-4" /> Birmingham and surrounding areas
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-bold leading-[1.08] sm:text-6xl">
            Professional Air Conditioning Installation in Birmingham
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-technical-muted sm:text-lg">
            Airpro Air Conditioning helps homeowners choose and install quiet, energy-efficient climate systems with clear advice, careful workmanship, and a clean finish. Available 24 hours a day.
          </p>

          {/* Action CTAs: Call & Free Quote */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-12 shadow-lg click-effect font-bold glow-primary">
              <a href={phoneHref}><Phone className="size-4" /> Call Now</a>
            </Button>

            <Button
              type="button"
              size="lg"
              onClick={openQuoteModal}
              className="h-12 shadow-lg font-bold bg-white text-slate-950 hover:bg-slate-100 click-effect cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="size-4 ml-1 text-primary" />
            </Button>
          </div>

          {/* Direct Contact Numbers & Status */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-technical-border/60 pt-4">
            <a href={phoneHref} className="inline-flex items-center gap-2 font-display text-lg font-bold hover:text-highlight">
              <Phone className="size-4 text-primary" />
              <span>{phoneDisplay}</span>
            </a>

            <span className="text-technical-muted">·</span>

            <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available 24/7 Across Birmingham</span>
            </span>
          </div>

          <div className="mt-5 flex items-center gap-3 text-sm">
            <div className="flex text-highlight">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="size-4 fill-current" />
              ))}
            </div>
            <span>Rated 4.7/5 on Google from 12 reviews</span>
          </div>
        </div>

        <div className="w-full">
          {/* Live Hero Video Showcase with interactive controls (Kept Intact) */}
          <HeroVideo />
        </div>
      </div>
    </section>

    {/* ACCREDITATIONS & TRUST STRIP */}
    <TrustBar />

    <Strengths />

    {/* RESIDENTIAL SHOWCASE WITH REAL ON-SITE PHOTOS */}
    <section className="border-y border-border bg-secondary/30 py-20 sm:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="eyebrow">Residential Installation</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Cooling designed around your home</h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
            Airpro focuses on precision air-conditioning installation and practical advice about suitable indoor and outdoor unit locations. We ensure discreet indoor styling with neat, weatherproof external pipework.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm font-semibold shadow-sm">
              <Check className="size-4 text-primary shrink-0" />
              <span>Daikin split system installation</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm font-semibold shadow-sm">
              <Check className="size-4 text-primary shrink-0" />
              <span>Concealed & architectural diffusers</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm font-semibold shadow-sm">
              <Check className="size-4 text-primary shrink-0" />
              <span>Bespoke color-matched trunking</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm font-semibold shadow-sm">
              <Check className="size-4 text-primary shrink-0" />
              <span>Clean handover & tidy finish</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="outline" className="click-effect">
              <Link to="/services">View All Services <ArrowRight className="size-4" /></Link>
            </Button>
            <Button
              type="button"
              onClick={openQuoteModal}
              className="click-effect font-bold shadow-md glow-primary cursor-pointer"
            >
              Request a Home Survey
            </Button>
          </div>
        </div>

        {/* Real Installation Dual Photo Spotlight */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <img
                src="/images/designer-wall-unit.jpg"
                alt="Matte black Daikin indoor air conditioner unit installed in Birmingham home"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-highlight">Indoor Unit</span>
                <p className="font-display text-xs sm:text-sm font-bold leading-tight">Matte Black Daikin Finish</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-3.5 text-xs text-muted-foreground shadow-sm">
              <p className="font-semibold text-foreground">Discreet Interior Finish</p>
              <p className="mt-1">Mounted flush with ceiling lines, blending with luxury fixtures.</p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <div className="rounded-lg border border-border bg-card p-3.5 text-xs text-muted-foreground shadow-sm">
              <p className="font-semibold text-foreground">Neat External Pipework</p>
              <p className="mt-1">Tidy vertical trunking with zero loose cables or mess.</p>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md">
              <img
                src="/images/outdoor-condenser.jpg"
                alt="Daikin outdoor condenser unit with tidy vertical trunking on residential patio"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-highlight">Outdoor Condenser</span>
                <p className="font-display text-xs sm:text-sm font-bold leading-tight">Anti-Vibration Patio Mount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* INTERACTIVE CLIMATE SIMULATOR (MODERN CLICK EXPERIENCE) */}
    <ClimateVisualizer />

    {/* COMPLETE REAL WORK PHOTO GALLERY */}
    <ProjectGallery />

    <Process />

    {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
    <FaqSection />

    <ReviewsPreview />
    <CallBand />
  </>;
}

