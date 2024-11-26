/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = {
//   images: {
//     domains: ['via.placeholder.com'],
//   },
// };
// module.exports = nextConfig
module.exports = {
  images: {
    distDir: 'dist', // Set the output directory to 'dist'
    domains: ['via.placeholder.com'],
  },
};

