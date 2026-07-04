import siteConfig from "@/siteConfig";
import { nbsp } from "@/lib/widows";

export default function RankingBadge() {
  const { ranking } = siteConfig;

  return (
    <section className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div
          className="flex flex-wrap items-center gap-6 rounded-3xl border p-8 backdrop-blur-xl"
          style={{
            background: "linear-gradient(120deg, rgba(255,95,94,0.14), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,95,94,0.35)",
          }}
        >
          <div className="shrink-0 rounded-xl bg-[#EEF0FA] p-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ranking.ftBadgeImage} alt={ranking.ftBadgeAlt} className="h-10 w-auto" />
          </div>

          <div className="min-w-[220px] flex-1">
            <p className="text-base text-[var(--color-text)]">
              <span className="font-bold" style={{ color: "var(--color-accent-soft)" }}>
                {nbsp(ranking.title)}
              </span>{" "}
              {nbsp(ranking.titleRest)}
            </p>
            <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">{nbsp(ranking.description)}</p>
          </div>

          <div className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ranking.accreditationImage} alt={ranking.accreditationAlt} className="h-9 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
