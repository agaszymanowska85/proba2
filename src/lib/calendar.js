// Zamienia "2026-09-26T11:00:00" na format wymagany przez Google Calendar (20260926T110000)
function toGoogleDateFormat(isoLike) {
  return isoLike.replace(/[-:]/g, "").replace(".000", "");
}

export function buildGoogleCalendarUrl(calendar) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: calendar.title,
    dates: `${toGoogleDateFormat(calendar.startDateTime)}/${toGoogleDateFormat(calendar.endDateTime)}`,
    details: calendar.details,
    location: calendar.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
