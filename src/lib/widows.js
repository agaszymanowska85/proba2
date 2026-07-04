// Automatycznie doklej niełamliwą spację po jednoliterowych spójnikach
// (i, a, o, u, w, z), żeby nigdy nie "wisiały" samotnie na końcu linii.
// Działa w czasie renderowania (po stronie serwera), więc nie ma
// żadnego "mignięcia" tekstu w przeglądarce.
export function nbsp(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/(^|[\s(])([iaouwzIAOUWZ]) /g, "$1$2\u00A0")
    .replace(/ ([iaouwzIAOUWZ])$/g, " $1");
}
