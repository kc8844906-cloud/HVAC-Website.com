import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPinned, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CallBand, PageIntro } from "@/components/site-shell";
import { Process } from "@/components/content-sections";

export const Route = createFileRoute("/services")({ head: () => ({ meta: [{ title: "Air Conditioning Installation Services | Birmingham" }, { name: "description", content: "Residential air-conditioning system installation and unit-location advice from Airpro Air Conditioning in Birmingham." }, { property: "og:title", content: "Air Conditioning Installation in Birmingham" }, { property: "og:description", content: "Explore Airpro’s confirmed residential air-conditioning installation services." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/services" }], links: [{ rel: "canonical", href: "/services" }] }), component: ServicesPage });

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Residential & Commercial Air Conditioning, Carefully Installed">
        A focused service built around premium equipment selection, thoughtful indoor/outdoor positioning, and tidy, clean workmanship.
      </PageIntro>

      <section className="py-20">
        <div className="site-container grid gap-8 lg:grid-cols-2">
          <Service
            icon={Wind}
            title="Air-conditioning system installation"
            image="/images/designer-wall-unit.jpg"
            imageAlt="Daikin matte black designer split system indoor installation"
            tag="Indoor Split & Concealed Systems"
          >
            Professional installation of modern split, multi-split, and ducted air conditioning systems. We pay meticulous attention to interior aesthetics, flush ceiling alignments, and whisper-quiet airflow.
          </Service>

          <Service
            icon={MapPinned}
            title="Indoor and outdoor unit location advice"
            image="/images/outdoor-condenser.jpg"
            imageAlt="Outdoor Daikin condenser unit with neat black trunking on residential patio"
            tag="External Pipework & Condensers"
          >
            Expert guidance to determine optimal positions for both indoor units and outdoor condensers. We plan external trunking routes carefully around brickwork, ensuring no unsightly dangling cables.
          </Service>
        </div>
      </section>

      {/* Commercial & Retail Spotlight */}
      <section className="border-t border-border bg-card py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Commercial & Retail Climate</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Ceiling Cassettes for Cafes, Offices & Retail</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                We also deliver tailored commercial air conditioning for local shops, cafes, and hospitality businesses across Birmingham. Our suspended 4-way ceiling cassette installations blend seamlessly with modern industrial beams and bespoke decor.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-semibold">
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="size-4 text-primary" />
                  <span>360° omnidirectional airflow coverage</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="size-4 text-primary" />
                  <span>Discreet integration with exposed ductwork & beams</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Check className="size-4 text-primary" />
                  <span>Year-round high efficiency heating & cooling</span>
                </li>
              </ul>
              <Button asChild className="mt-8">
                <Link to="/contact">Request Commercial Survey <ArrowRight /></Link>
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/images/commercial-cassette.jpg"
                alt="Commercial ceiling cassette installation in Wholly Gelato cafe"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-highlight">Completed Project</span>
                <p className="font-display text-lg font-bold">Wholly Gelato — 4-Way Ceiling Cassette</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">Additional Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Available Services</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Whatever your air conditioning requirement, Airpro is equipped to advise, install, and maintain your climate system.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Air conditioning servicing", "Air conditioning repairs", "Commercial air conditioning", "Maintenance plans"].map((item) => (
              <div key={item} className="rounded-md border border-border bg-background p-5 shadow-sm">
                <p className="text-xs font-bold uppercase text-primary">Service Focus</p>
                <h3 className="mt-4 font-display text-lg font-bold">{item}</h3>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link to="/contact">Ask about your requirements <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <Process />
      <CallBand />
    </>
  );
}

function Service({
  icon: Icon,
  title,
  image,
  imageAlt,
  tag,
  children,
}: {
  icon: typeof Wind;
  title: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm flex flex-col justify-between">
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
          <img
            src={image}
            alt={imageAlt || title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {tag && (
            <div className="absolute top-3 left-3">
              <span className="rounded-md bg-slate-950/80 px-2.5 py-1 text-xs font-bold text-highlight border border-white/10 backdrop-blur-md">
                {tag}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-8">
        <Icon className="size-8 text-primary" />
        <h2 className="mt-6 font-display text-2xl font-bold">{title}</h2>
        <p className="mt-4 leading-7 text-muted-foreground">{children}</p>
        <p className="mt-6 flex items-center gap-2 text-sm font-semibold">
          <Check className="size-5 text-primary" /> Confirmed service focus
        </p>
      </div>
    </article>
  );
}