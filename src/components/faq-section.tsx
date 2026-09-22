import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQS = [
  {
    q: "Do I need planning permission for air conditioning in Birmingham?",
    a: "In most UK residential properties, standard domestic split air conditioning falls under 'Permitted Development' and does not require planning permission, provided the outdoor condenser adheres to standard noise and placement guidelines. If your property is a listed building or in a conservation area, we will gladly advise you during the free survey.",
  },
  {
    q: "Can these systems also heat my home efficiently in winter?",
    a: "Yes, absolutely! All our modern Daikin split air conditioning systems are high-efficiency air-to-air heat pumps. They deliver rapid, controllable heating in winter at up to 400% efficiency (COP 4.0), significantly cheaper to run than traditional electric heaters or gas radiators in individual rooms.",
  },
  {
    q: "How loud are the indoor and outdoor units?",
    a: "Modern units are exceptionally quiet. Daikin indoor designer units operate as low as 19dB(A) — quieter than a whisper in a library, making them ideal for bedrooms. The outdoor condensers run on anti-vibration rubber feet with whisper-quiet inverter compressors that won't disturb your household or neighbours.",
  },
  {
    q: "How long does a typical installation take?",
    a: "A single-room split system is typically installed, fully vacuum-tested, commissioned, and cleaned up in a single day (usually 6–8 hours). A multi-room system takes approximately 2 days. We leave zero dust or mess behind.",
  },
  {
    q: "Can I control the temperature from my smartphone?",
    a: "Yes. Every system we install comes with built-in or optional WiFi connectivity via the Daikin Onecta smartphone app. You can pre-cool or heat your home on your way back from work, set weekly schedules, and monitor energy consumption.",
  },
  {
    q: "What warranty is provided with the installation?",
    a: "As an approved installer, we provide up to 10 years manufacturer warranty on Daikin equipment, combined with our comprehensive workmanship guarantee on all pipework and fittings.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-secondary/30">
      <div className="site-container max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <HelpCircle className="size-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-foreground">
            Everything You Need to Know About Air Conditioning
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
            Clear, honest answers to the questions homeowners and businesses ask us most often in Birmingham.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/60 px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">
              Have a specific question about your property?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Give our local Birmingham engineers a call or send an enquiry for friendly, expert guidance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button asChild size="default" className="shadow w-full sm:w-auto">
              <a href="tel:+447932794629" className="flex items-center justify-center gap-2">
                <Phone className="size-4" />
                <span>Call +44 7932 794629</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="default" className="w-full sm:w-auto">
              <Link to="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
