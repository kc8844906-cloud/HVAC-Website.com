import { useEffect, useRef, useState } from "react";
import { Check, Maximize2, Pause, Play, Sparkles, Volume2, VolumeX, Wind } from "lucide-react";

const VIDEO_CLIPS = [
  {
    id: "technician",
    title: "Expert Installation",
    subtitle: "Certified HVAC Technician at Work",
    src: "/videos/hvac-hero.mp4",
  },
  {
    id: "unit",
    title: "Modern Units",
    subtitle: "Sleek Indoor & Outdoor Split Systems",
    src: "/videos/hvac-unit.mp4",
  },
  {
    id: "airflow",
    title: "Airflow & Cooling",
    subtitle: "Whisper-quiet Efficiency",
    src: "/videos/hvac-airflow.mp4",
  },
];

export function HeroVideo() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeClip = VIDEO_CLIPS[activeClipIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay interruption fallback
            setIsPlaying(false);
          });
        }
      }
    }
  }, [activeClipIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      containerRef.current.requestFullscreen?.();
    }
  };

  return (
    <div className="relative group/video">
      {/* Subtle ambient colored glow behind video frame */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-primary/30 via-highlight/20 to-transparent blur-xl opacity-75 group-hover/video:opacity-100 transition-opacity duration-500 pointer-events-none" 
      />

      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl border border-technical-border bg-slate-950 text-foreground shadow-2xl min-h-[380px] sm:min-h-[460px] flex flex-col justify-between"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={activeClip.src}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          aria-label="Air conditioning installation and servicing video"
          className="absolute inset-0 size-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Ambient Dark Gradient Overlays for High Legibility */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-slate-950/70" 
        />

        {/* Top Floating Bar: Live Tag & Clip Selector */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 p-4 sm:p-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold tracking-wide text-highlight backdrop-blur-md border border-white/10 shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-highlight" />
            </span>
            <span>HVAC SHOWCASE</span>
          </div>

          {/* Quick Clip Selector Tabs */}
          <div className="flex items-center gap-1 rounded-lg bg-slate-900/75 p-1 backdrop-blur-md border border-white/10">
            {VIDEO_CLIPS.map((clip, index) => (
              <button
                key={clip.id}
                type="button"
                onClick={() => setActiveClipIndex(index)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${
                  activeClipIndex === index
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                title={clip.subtitle}
              >
                {clip.title}
              </button>
            ))}
          </div>
        </div>

        {/* Middle Play Button Overlay when Paused */}
        {!isPlaying && (
          <div className="relative z-10 my-auto flex justify-center">
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play video"
              className="grid size-16 place-items-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl backdrop-blur transition-transform hover:scale-110 cursor-pointer"
            >
              <Play className="size-8 fill-current translate-x-0.5" />
            </button>
          </div>
        )}

        {/* Bottom Section: Active Clip Info, Controls & Trust Badge */}
        <div className="relative z-10 p-4 sm:p-5 space-y-3">
          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-900/80 p-2.5 backdrop-blur-md border border-white/10 text-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="grid size-8 place-items-center rounded-md bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white"
              >
                {isPlaying ? <Pause className="size-4" /> : <Play className="size-4 fill-current" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="grid size-8 place-items-center rounded-md bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="size-4 text-slate-400" /> : <Volume2 className="size-4 text-highlight" />}
              </button>
              <div className="hidden sm:block text-xs font-semibold tracking-wide text-slate-200 pl-1">
                {activeClip.subtitle}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden xs:inline-flex items-center gap-1 text-[11px] font-medium text-slate-300">
                <Sparkles className="size-3 text-highlight" /> 1080p HD
              </span>
              <button
                type="button"
                onClick={handleFullscreen}
                aria-label="Toggle Fullscreen"
                className="grid size-8 place-items-center rounded-md bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-white"
                title="Fullscreen"
              >
                <Maximize2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Trust Badge at Base */}
          <div className="flex items-center justify-between gap-3 rounded-lg bg-technical/90 p-3 text-xs sm:text-sm font-semibold text-technical-foreground border border-technical-border/80 backdrop-blur-sm shadow-md">
            <span className="inline-flex items-center gap-2">
              <Check className="size-4 text-highlight shrink-0" />
              <span>Clean, residential air-conditioning installation</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-technical-muted">
              <Wind className="size-3.5 text-primary shrink-0" />
              Birmingham & West Midlands
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
