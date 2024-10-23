/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: "/psychological-test",
  assetPrefix: isProd ? '/psychological-test/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
