/** @type {import('next').NextConfig} */
module.exports = {
  // Define the custom output directory for the build
  distDir: 'dist',

  // Configure image optimization with allowed domains
  images: {
    domains: ['example.com', 'sidhantsharma.com'], // Add your domain if images are hosted here
  },

  // Enable React's Strict Mode for better development experience
  reactStrictMode: true,

  // Use SWC for faster minification and better performance
  swcMinify: true,

  // Environment variables (add if needed for your application)
  env: {
    BASE_URL: 'https://sidhantsharma.com', // Example variable for your domain
  },

  // Custom Webpack configuration (only if needed for your use case)
  webpack: (config, { isServer }) => {
    // Handle fallbacks for modules that might not be available in a browser environment
    if (!isServer) {
      config.resolve.fallback = { fs: false, path: false };
    }
    return config;
  },
};
