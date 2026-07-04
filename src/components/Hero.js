import siteConfig from "@/siteConfig";
import { nbsp } from "@/lib/widows";
import { IconClock, IconMapPin } from "./Icons";

const SPARKLES = [
  { size: 38, top: "12%", left: "5%", delay: "0s", dur: "3.2s", drift: true },
  { size: 18, top: "32%", left: "45%", delay: "0.5s", dur: "2.4s" },
  { size: 28, top: "6%", left: "58%", delay: "1s", dur: "3.6s", drift: true },
  { size: 16, top: "58%", left: "22%", delay: "0.3s", dur: "2.8s" },
  { size: 22, top: "70%", left: "50%", delay: "0.8s", dur: "3s", drift: true },
  { size: 12, top: "20%", left: "80%", delay: "1.2s", dur: "2.6s" },
  { size: 30, top: "78%", left: "8%", delay: "0.6s", dur: "3.8s", drift: true },
];

function Sparkle({ size, top, left, delay, dur, drift }) {
  return (
    <div
      className="sparkle"
      style={{
        width: size,
        height: size,
        top,
        left,
        animation: `twinkle ${dur} ease-in-out infinite ${delay}${drift ? `, drift ${(parseFloat(dur) + 2)}s ease-in-out infinite` : ""}`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-10">
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.bannerImage}
          alt={hero.bannerImageAlt}
          className="h-full w-full object-cover opacity-60"
          style={{ objectPosition: "center 55%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,9,40,0.5) 0%, rgba(3,9,40,0.35) 45%, var(--color-background) 100%)",
          }}
        />
        <div
          className="absolute -top-24 -right-16 h-80 w-80 rounded-full opacity-50"
          style={{ background: "var(--color-accent)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-20 left-[10%] h-64 w-64 rounded-full opacity-30"
          style={{ background: "var(--color-purple-accent)", filter: "blur(60px)" }}
        />
      </div>

      {SPARKLES.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pt-20 md:grid-cols-2 md:gap-12 md:px-8 md:pt-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-[var(--color-accent-soft)]">
            {hero.eyebrow}
          </p>

          <h1 className="font-display mt-4 text-[2.6rem] leading-[1.04] tracking-tight text-[var(--color-text)] sm:text-6xl md:text-[3.6rem]">
            <span style={{ color: "var(--color-accent)" }}>{hero.headlineHighlight}</span>{" "}
            {nbsp(hero.headlineRest)}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
            {nbsp(hero.subheadline)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.ctaPrimary.href}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent-soft)]"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-full border border-[var(--color-surface-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] backdrop-blur transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Bilet wydarzenia — duża, typograficzna data */}
        <div className="flex md:items-center md:justify-end">
          <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-[var(--color-surface)]/45 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center">
              <span
                className="font-display text-7xl leading-[0.85] tracking-tight"
                style={{ color: "var(--color-accent)" }}
              >
                {hero.day}
              </span>
              <span className="font-display mx-1 text-6xl leading-[0.85] opacity-55" style={{ color: "var(--color-accent)" }}>
                .
              </span>
              <span
                className="font-display text-7xl leading-[0.85] tracking-tight"
                style={{ color: "var(--color-accent)" }}
              >
                {hero.month}
              </span>
            </div>
            <p className="font-mono mt-2.5 text-sm uppercase tracking-widest2 text-[var(--color-text-muted)]">
              {hero.dayOfWeekLabel} · {hero.yearLabel}
            </p>

            <div className="mt-6 space-y-3.5">
              <div className="flex items-center gap-3">
                <IconClock className="h-5 w-5 shrink-0 text-[var(--color-accent-soft)]" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-[var(--color-text-muted)]">Godzina</p>
                  <p className="text-base font-semibold text-[var(--color-text)]">{hero.timeLabel}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IconMapPin className="h-5 w-5 shrink-0 text-[var(--color-accent-soft)]" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-[var(--color-text-muted)]">Miejsce</p>
                  <p className="text-base font-semibold text-[var(--color-text)]">{hero.locationLabel}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{hero.locationDetail}</p>
                </div>
              </div>
            </div>

            <div className="ticket-perforation -mx-8 my-5 h-4" />

            <p className="text-sm font-bold" style={{ color: "var(--color-accent)" }}>
              {hero.ticketFootNote}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[0.65rem] uppercase tracking-widest2 text-[var(--color-text-muted)]">
        <span>{hero.scrollHintLabel}</span>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" style={{ animation: "bob 1.6s ease-in-out infinite" }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 opacity-55" style={{ animation: "bob 1.6s ease-in-out infinite 0.2s" }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
