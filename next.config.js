/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['tecdn.b-cdn.net','ems-files.softbd.xyz','www.ox.ac.uk'], // Adjust the domain as needed
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true},
};
