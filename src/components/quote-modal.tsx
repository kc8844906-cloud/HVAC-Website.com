import { useState, useEffect } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronRight, Home, Phone, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneDisplay, phoneHref } from "@/components/site-shell";

export function openQuoteModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  }
}

export function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState("Semi-Detached");
  const [rooms, setRooms] = useState("1 Room (Master Bedroom)");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setSubmitted(false);
      setStep(1);
    };
    window.addEventListener("open-quote-modal", handler);
    return () => window.removeEventListener("open-quote-modal", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-card shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Top Ambient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-highlight to-emerald-400" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close quote modal"
          className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-secondary/80 text-muted-foreground hover:bg-destructive hover:text-white transition-colors cursor-pointer"
        >
          <X className="size-4" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="pr-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                  <Sparkles className="size-3" />
                  <span>Free On-Site Survey · Birmingham</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  Request a Free Climate Survey
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Step {step} of 3 · Zero obligation · Certified F-Gas Engineers
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step >= s ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Step 1: Property Type */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      1. Select Your Property Type
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {[
                        "Semi-Detached",
                        "Detached",
                        "Terraced",
                        "Bungalow",
                        "Apartment / Flat",
                        "Commercial / Retail",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setPropertyType(type)}
                          className={`p-3 text-left rounded-xl border transition-all cursor-pointer click-effect ${
                            propertyType === type
                              ? "border-primary bg-primary/10 text-primary font-bold shadow-sm"
                              : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          <p className="text-xs font-semibold">{type}</p>
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        className="click-effect font-bold shadow-md"
                      >
                        Next Step <ArrowRight className="size-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Room Requirements */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      2. Which Rooms Need Climate Control?
                    </label>
                    <div className="space-y-2.5">
                      {[
                        {
                          title: "1 Room (Master Bedroom or Lounge)",
                          desc: "Single ultra-quiet Daikin split system (19dB)",
                        },
                        {
                          title: "2 Rooms (Dual-Split Climate)",
                          desc: "Two indoor units powered by one outdoor condenser",
                        },
                        {
                          title: "3+ Rooms (Multi-Zone Home System)",
                          desc: "Complete multi-split heating & cooling for bedrooms & living",
                        },
                        {
                          title: "Commercial / Office / Retail",
                          desc: "4-way ceiling cassettes or ducted diffusers",
                        },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setRooms(item.title)}
                          className={`w-full p-3.5 text-left rounded-xl border transition-all cursor-pointer click-effect flex items-center justify-between ${
                            rooms === item.title
                              ? "border-primary bg-primary/10 ring-1 ring-primary text-foreground shadow-sm"
                              : "border-border bg-secondary/40 hover:border-primary/50"
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-foreground">{item.title}</p>
                            <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                          </div>
                          {rooms === item.title && (
                            <Check className="size-4 text-primary shrink-0 ml-2" />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setStep(3)}
                        className="click-effect font-bold shadow-md"
                      >
                        Next Step <ArrowRight className="size-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      3. Where Should We Send the Free Survey Confirmation?
                    </label>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. David Smith"
                          className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Contact Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7932 794629"
                          className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="rounded-lg bg-secondary/60 p-3 text-[11px] text-muted-foreground flex items-center gap-2">
                      <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                      <span>Zero spam. Direct contact with certified Birmingham engineers only.</span>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="click-effect bg-primary font-bold shadow-lg glow-primary"
                      >
                        Confirm Free Survey Booking
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            /* Submission Success Screen */
            <div className="py-6 text-center animate-in zoom-in-95 duration-200">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                Survey Request Received!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
                Thank you, <span className="font-bold text-foreground">{fullName || "valued client"}</span>. Our Birmingham engineering team will review your {propertyType} configuration and call you on <span className="font-bold text-foreground">{phone || "your number"}</span> shortly.
              </p>

              <div className="mt-6 rounded-xl bg-secondary/60 p-4 text-xs text-muted-foreground max-w-sm mx-auto">
                <p className="font-semibold text-foreground">Need an instant answer right now?</p>
                <a
                  href={phoneHref}
                  className="mt-2 inline-flex items-center gap-2 font-bold text-primary hover:underline text-sm"
                >
                  <Phone className="size-3.5" /> Call {phoneDisplay} (24/7 Direct)
                </a>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="click-effect w-full max-w-xs"
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
