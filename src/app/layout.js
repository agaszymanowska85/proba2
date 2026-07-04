import "./globals.css";
import siteConfig from "@/siteConfig";
import { buildGoogleFontsUrl } from "@/lib/fonts";

export const metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.meta.siteUrl),
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [siteConfig.hero.bannerImage],
  },
};

export default function RootLayout({ children }) {
  const { colors, fonts } = siteConfig;
  const fontsUrl = buildGoogleFontsUrl(fonts);

  // Zmienne CSS budowane na podstawie siteConfig.js — to jedyne miejsce,
  // które "tłumaczy" konfigurację na realny wygląd strony.
  const cssVariables = {
    "--color-background": colors.background,
    "--color-background-soft": colors.backgroundSoft,
    "--color-surface": colors.surface,
    "--color-surface-border": colors.surfaceBorder,
    "--color-text": colors.text,
    "--color-text-muted": colors.textMuted,
    "--color-accent": colors.accent,
    "--color-accent-soft": colors.accentSoft,
    "--color-accent-contrast": colors.accentContrast,
    "--color-purple-accent": colors.purpleAccent,
    "--font-display": `"${fonts.display.name}"`,
    "--font-display-fallback": fonts.display.fallback,
    "--font-body": `"${fonts.body.name}"`,
    "--font-body-fallback": fonts.body.fallback,
    "--font-mono": `"${fonts.mono.name}"`,
    "--font-mono-fallback": fonts.mono.fallback,
    "--font-display-weight": String(siteConfig.displayWeight || 800),
  };

  return (
    <html lang="pl" style={cssVariables}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsUrl} />
      </head>
      <body>{children}</body>
    </html>
  );
}
