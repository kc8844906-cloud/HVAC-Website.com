import { Award, CheckCircle2, ShieldCheck, Sparkles, Star, ThumbsUp, Wrench } from "lucide-react";

export function TrustBar() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "REFCOM F-Gas Certified",
      subtitle: "Legally compliant UK installers",
    },
    {
      icon: Award,
      title: "Daikin Approved Partner",
      subtitle: "Premium Japanese engineering",
    },
    {
      icon: Star,
      title: "4.7★ Google Rating",
      subtitle: "Verified Birmingham homeowners",
    },
    {
      icon: CheckCircle2,
      title: "10-Year Warranty Available",
      subtitle: "Long-term peace of mind",
    },
    {
      icon: Sparkles,
      title: "Clean Home Guarantee",
      subtitle: "Zero mess left behind",
    },
  ];

  return (
    <div className="border-y border-border/80 bg-card py-6 shadow-sm">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-secondary/40"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-xs font-bold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
