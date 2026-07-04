/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Wyłączone, żeby nie trzeba było konfigurować zewnętrznych domen obrazków.
    unoptimized: true,
  },
};

module.exports = nextConfig;
