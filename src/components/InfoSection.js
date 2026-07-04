import siteConfig from "@/siteConfig";
import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { nbsp } from "@/lib/widows";
import { icons, IconExternal } from "./Icons";

export default function InfoSection() {
  const { info } = siteConfig;
  const calendarHref = buildGoogleCalendarUrl(info.calendar);

  return (
    <section id={info.id} className="px-5 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-[var(--color-accent-soft)]">
            {info.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl text-[var(--color-text)] md:text-4xl">{info.title}</h2>
          <p className="mt-4 text-[var(--color-text-muted)]">{nbsp(info.description)}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {info.actions.map((action) => {
            const Icon = icons[action.icon] ?? icons.arrow;
            const href = action.useCalendarLink ? calendarHref : action.href;
            const isExternal = href?.startsWith("http");

            return (
              <div
                key={action.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[var(--color-accent-soft)]/60"
              >
                <div>
                  <Icon className="h-7 w-7 text-[var(--color-accent-soft)]" />
                  <h3 className="font-display mt-4 text-xl text-[var(--color-text)]">{action.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {nbsp(action.description)}
                  </p>
                </div>

                <a
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-soft)] transition hover:text-[var(--color-accent)]"
                >
                  {action.buttonLabel}
                  <IconExternal className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
