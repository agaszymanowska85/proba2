import siteConfig from "@/siteConfig";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { footer, nav } = siteConfig;
  const copyright = footer.copyright.replace("{rok}", String(new Date().getFullYear()));

  return (
    <footer className="border-t border-white/10 px-5 py-14 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={footer.logo} alt={nav.logoAlt} className="h-14 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              {footer.address}
              <br />
              {footer.phone} · {footer.email}
              <br />
              {footer.website}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex flex-wrap gap-3">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-[var(--color-surface-border)] px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-5 text-xs text-[var(--color-text-muted)]">
          <span>{copyright}</span>
          <span>{siteConfig.meta.siteUrl.replace("https://", "")}</span>
        </div>
      </div>
    </footer>
  );
}
