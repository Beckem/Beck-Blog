/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['static.vecteezy.com','cdn.sanity.io'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
}
