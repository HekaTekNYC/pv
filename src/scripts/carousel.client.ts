// src/scripts/carousel.client.ts
function setupCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>(".viewport");
  const track = root.querySelector<HTMLElement>(".track");
  if (!viewport || !track) return;

  const slides = Array.from(track.querySelectorAll<HTMLLIElement>(".slide"));

  const stepSize = () => {
    const first = slides[0];
    if (!first) return 0;
    const rect = first.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    return rect.width + gap;
  };

  const scrollBySlides = (dir: number) => {
    const step = stepSize();
    if (step === 0) return;
    viewport.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  root.querySelectorAll<HTMLButtonElement>(".nav").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      const t = ev.currentTarget;
      if (!(t instanceof HTMLButtonElement)) return;
      const parsed = parseInt(t.dataset.dir ?? "1", 10);
      scrollBySlides(Number.isNaN(parsed) ? 1 : parsed);
    });
  });

  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollBySlides(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollBySlides(1);
    }
  });

  // mark as initialized so re-inclusion is harmless
  root.dataset.carouselInit = "1";
  new ResizeObserver(() => {}).observe(viewport);
}

export function initAllCarousels() {
  document
    .querySelectorAll<HTMLElement>(
      '.carousel[data-carousel-id]:not([data-carousel-init="1"])',
    )
    .forEach(setupCarousel);
}
