import { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  Flame, 
  Minus, 
  Plus, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Wind, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

export function ClimateVisualizer() {
  const [mode, setMode] = useState<"cool" | "heat" | "purify">("cool");
  const [temp, setTemp] = useState(19);
  const [selectedRoom, setSelectedRoom] = useState<"bedroom" | "lounge" | "office">("bedroom");

  const roomPresets = {
    bedroom: {
      name: "Master Bedroom",
      idealTemp: 19,
      icon: "🛏️",
      noiseLevel: "19 dB(A)",
      soundComparison: "Quieter than a whisper (20dB)",
      recommendedUnit: "Daikin Emura / Stylish Matte Black",
      benefit: "Engineered for deep sleep without cold drafts blowing on the bed.",
    },
    lounge: {
      name: "Open-Plan Lounge & Kitchen",
      idealTemp: 21,
      icon: "🛋️",
      noiseLevel: "23 dB(A)",
      soundComparison: "Library silence (30dB)",
      recommendedUnit: "Multi-Split 3D Airflow / Concealed Diffuser",
      benefit: "Even climate distribution across large open spaces and south-facing glazing.",
    },
    office: {
      name: "Home Office & Conservatory",
      idealTemp: 20,
      icon: "💻",
      noiseLevel: "21 dB(A)",
      soundComparison: "Rustling leaves (22dB)",
      recommendedUnit: "Rapid-Inverter Split System",
      benefit: "Instant temperature control in hot summer glass rooms and cold winter mornings.",
    },
  };

  const currentRoom = roomPresets[selectedRoom];

  const handleRoomChange = (roomKey: "bedroom" | "lounge" | "office") => {
    setSelectedRoom(roomKey);
    setTemp(roomPresets[roomKey].idealTemp);
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-secondary/40 via-background to-secondary/30 border-y border-border">
      {/* Subtle Background Glows */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-[650px] rounded-full blur-3xl opacity-20 transition-all duration-700 ${
          mode === "cool"
            ? "bg-cyan-400"
            : mode === "heat"
            ? "bg-amber-500"
            : "bg-emerald-400"
        }`}
      />

      <div className="site-container relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary shadow-sm border border-primary/20">
            <Sliders className="size-3.5 text-primary" />
            <span>Interactive Climate Simulator</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl text-foreground tracking-tight">
            Experience Daikin Climate Technology
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Click below to simulate how modern air conditioning transforms individual rooms in your Birmingham property — whisper quiet, energy efficient, and custom controlled.
          </p>
        </div>

        {/* Simulator Interactive Panel */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/40 bg-card/90 backdrop-blur-xl p-6 sm:p-10 shadow-2xl transition-all">
          {/* Top Mode Selector Tabs */}
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-secondary/80 border border-border/80">
            <button
              type="button"
              onClick={() => {
                setMode("cool");
                if (temp > 21) setTemp(19);
              }}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer click-effect ${
                mode === "cool"
                  ? "bg-primary text-primary-foreground shadow-md glow-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Wind className="size-4" />
              <span>Cooling Mode</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("heat");
                if (temp < 21) setTemp(22);
              }}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer click-effect ${
                mode === "heat"
                  ? "bg-amber-500 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Flame className="size-4" />
              <span>Heat Pump Mode</span>
            </button>

            <button
              type="button"
              onClick={() => setMode("purify")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer click-effect ${
                mode === "purify"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Sparkles className="size-4" />
              <span>Pure Air (Streamer)</span>
            </button>
          </div>

          {/* Main Visualizer Stage */}
          <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
            {/* Left: Interactive Room Selection & Features */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  1. Select a Room in Your Home
                </span>
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  {(["bedroom", "lounge", "office"] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleRoomChange(key)}
                      className={`p-3 text-left rounded-xl border transition-all cursor-pointer click-effect ${
                        selectedRoom === key
                          ? "border-primary bg-primary/10 ring-2 ring-primary/20 shadow-sm text-foreground font-bold"
                          : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <span className="text-xl">{roomPresets[key].icon}</span>
                      <p className="mt-1 text-xs font-bold leading-snug line-clamp-1">
                        {roomPresets[key].name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Room Specifications & Benefits */}
              <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span className="text-muted-foreground font-medium">Recommended System:</span>
                  <span className="font-bold text-foreground">{currentRoom.recommendedUnit}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                    <Volume2 className="size-3.5 text-primary" />
                    Operating Sound Level:
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    {currentRoom.noiseLevel} ({currentRoom.soundComparison})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium flex items-center gap-1.5">
                    <Zap className="size-3.5 text-amber-500" />
                    Energy Efficiency:
                  </span>
                  <span className="font-bold text-primary">A+++ Inverter Rated</span>
                </div>

                <p className="pt-2 text-muted-foreground leading-relaxed">
                  💡 {currentRoom.benefit}
                </p>
              </div>
            </div>

            {/* Right: Interactive Temperature Dial & Live Display */}
            <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 text-white shadow-2xl border transition-all duration-500 ${
              mode === "cool"
                ? "bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 border-cyan-500/30"
                : mode === "heat"
                ? "bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 border-amber-500/30"
                : "bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 border-emerald-500/30"
            }`}>
              {/* Dynamic Status Tag */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Room Climate
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold backdrop-blur-md">
                  {currentRoom.name}
                </span>
              </div>

              {/* Temperature Display */}
              <div className="mt-8 text-center">
                <div className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-white">
                  {temp}°<span className="text-3xl text-white/70">C</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-white/80">
                  {mode === "cool"
                    ? "Rapid Cooling & Humidity Extraction"
                    : mode === "heat"
                    ? "Eco Air-Source Heat Pump Active"
                    : "Streamer 99.9% Allergen Filtration"}
                </p>
              </div>

              {/* Temperature Stepper Buttons */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setTemp((t) => Math.max(16, t - 1))}
                  aria-label="Decrease target temperature"
                  className="grid size-11 place-items-center rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-white cursor-pointer shadow-md"
                >
                  <Minus className="size-5" />
                </button>
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Adjust Temp
                </span>
                <button
                  type="button"
                  onClick={() => setTemp((t) => Math.min(30, t + 1))}
                  aria-label="Increase target temperature"
                  className="grid size-11 place-items-center rounded-full bg-white/15 hover:bg-white/25 active:scale-95 transition-all text-white cursor-pointer shadow-md"
                >
                  <Plus className="size-5" />
                </button>
              </div>

              {/* Action Button inside simulator */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={openQuoteModal}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 py-3 text-xs sm:text-sm font-bold shadow-lg hover:bg-slate-100 transition-all cursor-pointer click-effect"
                >
                  <span>Book Free Survey for {currentRoom.name}</span>
                  <ArrowRight className="size-4 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
