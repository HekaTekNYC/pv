function setupCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>(".carousel__viewport");
  const track = root.querySelector<HTMLElement>(".carousel__track");
  if (!viewport || !track) return;

  const slides = Array.from(track.querySelectorAll<HTMLLIElement>(".carousel__slide"));

  const getGap = () => {
    const cs = getComputedStyle(track);
    return parseFloat(cs.gap || "0");
  };

  const stepSize = () => {
    const first = slides[0];
    if (!first) return 0;
    return first.getBoundingClientRect().width + getGap();
  };

  const scrollBySlides = (dir: number) => {
    const step = stepSize();
    if (!step) return;
    viewport.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Simple event binding - no cloning needed
  root.querySelectorAll<HTMLButtonElement>(".carousel__nav").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const dir = parseInt(btn.dataset.dir ?? "1", 10);
      scrollBySlides(dir);
    });
  });

  // Keyboard navigation
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollBySlides(-1);
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollBySlides(1);
    }
  });

  root.setAttribute("data-carousel-init", "1");
}

export function initAllCarousels() {
  document.querySelectorAll<HTMLElement>('.carousel:not([data-carousel-init="1"])').forEach(setupCarousel);
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initAllCarousels);
}