const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  distDir: 'dist',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Analyze bundles
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 24400000, // Just under 25 MiB
    };
    return config;
  },
};
