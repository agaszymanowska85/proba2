import siteConfig from "@/siteConfig";
import { socialIcons } from "./Icons";

export default function SocialLinks({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {siteConfig.social.map((item) => {
        const Icon = socialIcons[item.icon];
        if (!Icon) return null;
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-white/5 text-[var(--color-text)] transition hover:border-[var(--color-accent-soft)] hover:text-[var(--color-accent-soft)]"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
