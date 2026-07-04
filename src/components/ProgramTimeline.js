import siteConfig from "@/siteConfig";
import { nbsp } from "@/lib/widows";

export default function ProgramTimeline() {
  const { program } = siteConfig;

  return (
    <section id={program.id} className="px-5 pb-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-[var(--color-accent-soft)]">
          {program.eyebrow}
        </p>
        <h2 className="font-display mt-3 mb-7 text-3xl text-[var(--color-text)] md:text-4xl">
          {program.title}
        </h2>

        <div className="rounded-3xl border border-white/10 bg-[var(--color-surface)]/40 p-9 backdrop-blur-xl md:p-10">
          {program.items.map((item, index) => (
            <div
              key={`${item.time}-${index}`}
              className={`flex gap-6 ${
                index !== program.items.length - 1 ? "border-b border-white/8 pb-6 mb-6" : ""
              }`}
            >
              <div className="font-mono w-24 shrink-0 pt-0.5 text-base font-semibold text-[var(--color-accent-soft)]">
                {item.time}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">{nbsp(item.title)}</h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {nbsp(item.description)}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <p className="max-w-md text-sm text-[var(--color-text-muted)]">{nbsp(program.note)}</p>
            <a
              href={program.noteButton.href}
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent-soft)]"
            >
              {program.noteButton.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
