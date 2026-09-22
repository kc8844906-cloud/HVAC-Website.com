import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPinned, MessageSquareText, ShieldCheck, Sparkles, Star, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

export const strengths = [
  { icon: ShieldCheck, title: "Professional service", text: "A courteous, considered approach from the first conversation through to the finished installation." },
  { icon: MessageSquareText, title: "Helpful guidance", text: "Clear advice when choosing a suitable system and considering the needs of your home." },
  { icon: MapPinned, title: "Neat installation", text: "Careful positioning of indoor and outdoor units, with attention given to tidy external pipework." },
  { icon: Sparkles, title: "Clean workmanship", text: "A thorough installation approach with care taken to leave the working area clean and tidy." },
];

export const reviewThemes = [
  "Careful advice when selecting a suitable system",
  "Professional and thorough installation",
  "A clean finish and tidy working area",
  "A service customers recommend to others",
];

export function Strengths() {
  return (
    <section className="py-20 sm:py-24">
      <div className="site-container">
        <div className="max-w-2xl"><p className="eyebrow">Why Airpro</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A considered approach to every installation</h2></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-background p-7">
              <Icon className="size-7 text-primary" strokeWidth={1.7} />
              <h3 className="mt-8 font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 text-sm font-semibold"><span className="grid size-7 place-items-center rounded-full bg-accent text-primary"><Wind className="size-4" /></span> Available 24 hours for enquiries</div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = ["Get in touch", "Discuss your needs and property", "Receive a tailored quote", "Professional installation and clean handover"];
  return (
    <section className="bg-technical py-20 text-technical-foreground sm:py-24">
      <div className="site-container">
        <p className="eyebrow text-highlight">How it works</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold sm:text-4xl">A straightforward route to a comfortable home</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => <li key={step} className="border-t border-technical-border pt-5"><span className="font-display text-sm font-bold text-highlight">0{index + 1}</span><h3 className="mt-5 font-display text-lg font-bold">{step}</h3></li>)}
        </ol>
      </div>
    </section>
  );
}

export function ReviewsPreview() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow">Customer feedback</p>
          <div className="mt-4 flex items-end gap-4"><strong className="font-display text-6xl">4.7</strong><div className="pb-1"><div className="flex text-primary" aria-label="4.7 out of 5 stars">{[1,2,3,4,5].map((n) => <Star key={n} className="size-5 fill-current" />)}</div><p className="mt-1 text-sm text-muted-foreground">out of 5 from 12 Google reviews</p></div></div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {reviewThemes.map((theme) => <div key={theme} className="flex gap-3 rounded-md border border-border bg-background p-5 text-sm font-semibold leading-6"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{theme}</div>)}
        </div>
        <div className="lg:col-start-2"><Button asChild variant="outline"><Link to="/reviews">Explore customer feedback <ArrowRight /></Link></Button></div>
      </div>
    </section>
  );
}