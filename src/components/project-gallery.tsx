import { useState } from "react";
import { Check, Eye, Maximize2, Sparkles, X, ZoomIn } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Outdoor" | "Concealed" | "Commercial";
  image: string;
  location: string;
  description: string;
  highlights: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "designer-wall-unit",
    title: "Designer Matte Black Split System",
    category: "Residential",
    image: "/images/designer-wall-unit.jpg",
    location: "Solihull, Birmingham",
    description:
      "High-spec Daikin indoor unit installed flush with ceiling line, perfectly complementing contemporary architectural lighting and neutral palette.",
    highlights: ["Whisper-quiet operation", "A+++ energy efficiency", "Smart WiFi app control"],
  },
  {
    id: "outdoor-condenser",
    title: "Tidy External Pipework & Condenser",
    category: "Outdoor",
    image: "/images/outdoor-condenser.jpg",
    location: "Harborne, Birmingham",
    description:
      "Daikin outdoor condenser mounted on anti-vibration rubber feet with bespoke color-matched black trunking routed neatly around brickwork and patio doors.",
    highlights: ["Zero messy external cables", "Anti-vibration base", "Weatherproof aesthetic trunking"],
  },
  {
    id: "ducted-diffuser",
    title: "Concealed Ducted Linear Diffuser",
    category: "Concealed",
    image: "/images/ducted-diffuser.jpg",
    location: "Edgbaston, Birmingham",
    description:
      "Architectural flush-mounted linear slot diffuser integrated into ceiling for total invisible cooling with optimal whole-room air distribution.",
    highlights: ["Completely hidden AC system", "Draft-free cooling", "Bespoke ceiling integration"],
  },
  {
    id: "commercial-cassette",
    title: "Commercial Ceiling Cassette Installation",
    category: "Commercial",
    image: "/images/commercial-cassette.jpg",
    location: "Wholly Gelato, Retail Unit",
    description:
      "Suspended 4-way ceiling cassette unit integrated into exposed industrial black beams and greenery decor for balanced year-round climate control.",
    highlights: ["360° airflow distribution", "Commercial-grade durability", "Blends with cafe interior"],
  },
];

export function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Residential", "Outdoor", "Concealed", "Commercial"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Real Installations</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-foreground">
              Recent Work in Birmingham & West Midlands
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Every home and business is unique. Explore actual on-site photos of our clean indoor units, tidy outdoor pipework, and commercial installations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-secondary/70 text-muted-foreground border-border hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-highlight backdrop-blur-md border border-white/10">
                    <Sparkles className="size-3" />
                    {project.category}
                  </span>
                </div>

                {/* Enlarge Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  aria-label={`View larger image of ${project.title}`}
                  className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-slate-950/70 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-md"
                  title="View full details"
                >
                  <Eye className="size-4" />
                </button>

                {/* Overlay details at image bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                    {project.location}
                  </p>
                  <h3 className="mt-0.5 font-display text-base font-bold leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="flex flex-1 flex-col justify-between p-4 bg-card">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 pt-3 border-t border-border/60">
                  <ul className="space-y-1.5">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="size-3.5 text-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary/50 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    <ZoomIn className="size-3.5" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-20 grid size-9 place-items-center rounded-full bg-slate-950/80 text-white hover:bg-destructive hover:text-white transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Modal Image */}
            <div className="relative md:w-1/2 bg-black min-h-[300px]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="size-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-md bg-slate-950/90 px-2.5 py-1 text-xs font-bold text-highlight border border-white/15">
                  {activeModalProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between overflow-y-auto">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  {activeModalProject.location}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {activeModalProject.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {activeModalProject.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Installation Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {activeModalProject.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Check className="size-4 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Need a similar installation for your home or business?
                </p>
                <a
                  href="tel:+447932794629"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2.5 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  Call +44 7932 794629 for a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
