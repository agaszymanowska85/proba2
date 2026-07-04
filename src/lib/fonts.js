// Buduje link do Google Fonts na podstawie nazw fontów wpisanych w siteConfig.js.
// Jeśli dwie role (np. display i body) używają tej samej nazwy fonta,
// ich wagi są łączone w jedno zapytanie.
export function buildGoogleFontsUrl(fonts) {
  const merged = new Map();

  Object.values(fonts).forEach((font) => {
    const existing = merged.get(font.name) || [];
    merged.set(font.name, [...new Set([...existing, ...font.weights])]);
  });

  const families = [...merged.entries()]
    .map(([name, weights]) => {
      const urlName = name.trim().replace(/\s+/g, "+");
      const sortedWeights = weights.sort((a, b) => a - b).join(";");
      return `family=${urlName}:wght@${sortedWeights}`;
    })
    .join("&");

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
