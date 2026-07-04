// Proste, autorskie ikony liniowe (SVG) — bez zewnętrznych bibliotek i licencji do pilnowania.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconUsers({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 14.2c2.4.3 4 2.6 4 5.8" />
    </svg>
  );
}

export function IconCalendar({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="M7.5 13h2M7.5 16.3h2M11.5 13h2M11.5 16.3h2M15.5 13h2" />
    </svg>
  );
}

export function IconTicket({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 9.5a2 2 0 0 1 0-4h17a2 2 0 0 1 0 4 1.7 1.7 0 0 0 0 3.4 2 2 0 0 1 0 4h-17a2 2 0 0 1 0-4 1.7 1.7 0 0 0 0-3.4Z" />
      <path d="M14 6v1.6M14 11v1.6M14 16.4V18" strokeDasharray="1.6 2.2" />
    </svg>
  );
}

export function IconArrow({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h13.5" />
      <path d="M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

export function IconMapPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconClock({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconExternal({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 6H6a1.5 1.5 0 0 0-1.5 1.5v10A1.5 1.5 0 0 0 6 19h10a1.5 1.5 0 0 0 1.5-1.5V15" />
      <path d="M13 4h6.5V10.5" />
      <path d="M20 4 11 13" />
    </svg>
  );
}

export function IconInstagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43A4.9 4.9 0 0 1 3.82 3a4.9 4.9 0 0 1 1.77-1.15c.46-.16 1.26-.35 2.43-.4C9.27 1.38 9.67 1.38 12 1.38m0 1.8c-3.15 0-3.52 0-4.76.07-1.03.05-1.6.22-1.97.36-.49.19-.85.42-1.22.79-.37.37-.6.73-.79 1.22-.14.37-.31.94-.36 1.97-.06 1.24-.07 1.61-.07 4.76s0 3.52.07 4.76c.05 1.03.22 1.6.36 1.97.19.49.42.85.79 1.22.37.37.73.6 1.22.79.37.14.94.31 1.97.36 1.24.06 1.61.07 4.76.07s3.52 0 4.76-.07c1.03-.05 1.6-.22 1.97-.36.49-.19.85-.42 1.22-.79.37-.37.6-.73.79-1.22.14-.37.31-.94.36-1.97.06-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-1.03-.22-1.6-.36-1.97a3.1 3.1 0 0 0-.79-1.22 3.1 3.1 0 0 0-1.22-.79c-.37-.14-.94-.31-1.97-.36-1.24-.06-1.61-.07-4.76-.07m0 4.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8m0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2m5.6-1.99a1.26 1.26 0 1 1-2.52 0 1.26 1.26 0 0 1 2.52 0" />
    </svg>
  );
}

export function IconLinkedIn({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.53 4.78 5.83V21h-4v-5.9c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.5-2.28 3.1V21h-4z" />
    </svg>
  );
}

export function IconFacebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.53-1.46h1.63V4.35c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.4-3.96 3.98v2.2H7.7v3h2.63V21z" />
    </svg>
  );
}

export const socialIcons = {
  instagram: IconInstagram,
  linkedin: IconLinkedIn,
  facebook: IconFacebook,
};

export const icons = {
  users: IconUsers,
  calendar: IconCalendar,
  ticket: IconTicket,
  arrow: IconArrow,
};
