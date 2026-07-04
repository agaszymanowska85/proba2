import siteConfig from "@/siteConfig";
import { nbsp } from "@/lib/widows";

export default function FinalCta() {
  const { finalCta } = siteConfig;

  return (
    <section className="px-5 pb-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="rounded-[28px] border p-12 text-center backdrop-blur-xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,95,94,0.22), rgba(108,93,211,0.18))",
            borderColor: "rgba(255,95,94,0.35)",
          }}
        >
          <h2 className="font-display text-3xl text-[var(--color-text)]">{nbsp(finalCta.title)}</h2>
          <p className="mx-auto mt-3 max-w-md text-[var(--color-text-muted)]">
            {nbsp(finalCta.description)}
          </p>
          <a
            href={finalCta.button.href}
            className="mt-6 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent-soft)]"
          >
            {finalCta.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}
