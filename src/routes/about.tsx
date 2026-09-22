import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallBand, PageIntro } from "@/components/site-shell";
import { Strengths } from "@/components/content-sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Airpro Air Conditioning | Birmingham" },
      { name: "description", content: "Learn about Airpro Air Conditioning’s professional, careful approach to residential air-conditioning installation in Birmingham." },
      { property: "og:title", content: "About Airpro Air Conditioning" },
      { property: "og:description", content: "Professional residential air-conditioning installation with clear advice and careful workmanship." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const photoGallery = [
    {
      src: "/images/designer-wall-unit.jpg",
      title: "Designer Indoor Unit",
      location: "Solihull, West Midlands",
      desc: "Matte black Daikin split unit fitted flush near ceiling.",
    },
    {
      src: "/images/outdoor-condenser.jpg",
      title: "External Pipework & Condenser",
      location: "Harborne, Birmingham",
      desc: "Clean vertical trunking with anti-vibration rubber base.",
    },
    {
      src: "/images/ducted-diffuser.jpg",
      title: "Concealed Linear Diffuser",
      location: "Edgbaston, Birmingham",
      desc: "Discreet architectural ceiling slot for silent airflow.",
    },
    {
      src: "/images/commercial-cassette.jpg",
      title: "Retail Ceiling Cassette",
      location: "Wholly Gelato, Hospitality",
      desc: "Suspended 360° cassette unit amongst industrial beams.",
    },
  ];

  return (
    <>
      <PageIntro eyebrow="About Airpro" title="Professional advice. Careful installation. A clean finish.">
        Airpro Air Conditioning is an established air-conditioning contractor serving homeowners and businesses in Birmingham and surrounding areas.
      </PageIntro>

      <section className="py-20">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">A practical, homeowner-focused approach</h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Choosing an air-conditioning system involves more than selecting a unit. Airpro helps customers consider a suitable system and practical indoor and outdoor locations before completing the installation with care.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              Customer feedback consistently highlights professional service, honest advice, clean workmanship, and neat external pipework that protects your home’s kerb appeal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground">
                <Check className="size-4 text-primary" /> Daikin Certified Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground">
                <Check className="size-4 text-primary" /> F-Gas Compliant & Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground">
                <Check className="size-4 text-primary" /> 24/7 Rapid Assistance
              </span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Info icon={MapPin} label="Based in" value="Birmingham, United Kingdom" />
            <Info icon={Clock3} label="Opening hours" value="Open 24 hours" />
          </div>
        </div>
      </section>

      {/* Real Work Gallery on About page */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">Genuine Workmanship</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Real Installations by Our Team</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              We take pride in every detail — from spotless living rooms to neatly trunked outdoor walls. Here is a selection of our recent installations in Birmingham.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {photoGallery.map((photo) => (
              <div
                key={photo.title}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-highlight">
                      {photo.location}
                    </p>
                    <p className="font-display text-sm font-bold">{photo.title}</p>
                  </div>
                </div>
                <div className="p-3.5">
                  <p className="text-xs text-muted-foreground">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild>
              <Link to="/contact">Discuss Your Project with Us <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Strengths />
      <CallBand />
    </>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-6 shadow-sm">
      <Icon className="size-6 text-primary" />
      <p className="mt-8 text-xs font-bold uppercase text-muted-foreground">{label}</p>
      <p className="mt-2 font-display text-lg font-bold">{value}</p>
    </div>
  );
}