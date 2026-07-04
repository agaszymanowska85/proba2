import siteConfig from "@/siteConfig";

export default function Gallery() {
  const { gallery } = siteConfig;
  // Duplikujemy listę, żeby pętla przewijania w CSS (translateX -50%) była płynna.
  const slides = [...gallery.images, ...gallery.images];

  return (
    <section id={gallery.id} className="pb-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest2 text-[var(--color-accent-soft)]">
          {gallery.eyebrow}
        </p>
        <h2 className="font-display mt-3 mb-7 text-3xl text-[var(--color-text)] md:text-4xl">
          {gallery.title}
        </h2>
      </div>

      <div className="gallery-slider">
        <div className="gallery-track">
          {slides.map((image, index) => (
            <div
              key={image.src + index}
              className="relative aspect-[4/3] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-[440px] md:w-[560px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/15 bg-[var(--color-background)]/45 px-3.5 py-2 text-sm text-[var(--color-text)] backdrop-blur">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
