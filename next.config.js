/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Configure any Turbopack rules here
      },
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@providers': './src/providers',
      '@components': './src/components',
      '@styles': './src/styles',
      '@lib': './src/lib',
      '@types': './src/types',
    };
    return config;
  },
};

module.exports = nextConfig; 