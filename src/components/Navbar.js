import siteConfig from "@/siteConfig";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const { nav } = siteConfig;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-surface-border)] bg-[var(--color-background)]/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={nav.logo} alt={nav.logoAlt} className="h-16 w-auto md:h-20" />
        </a>

        <nav className="flex items-center gap-2 md:gap-3">
          <a
            href={nav.officialSiteButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[var(--color-surface-border)] px-4 py-2 text-sm text-[var(--color-text)] backdrop-blur transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)] sm:inline-block"
          >
            {nav.officialSiteButton.label}
          </a>
          <a
            href={nav.signUpButton.href}
            className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent-soft)] md:px-5"
          >
            {nav.signUpButton.label}
          </a>
          <SocialLinks className="ml-1 hidden md:flex" />
        </nav>
      </div>
    </header>
  );
}
