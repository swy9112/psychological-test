/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  assetPrefix: isProd ? '/psychological-test/' : '',
  output: 'export',
  basePath: "/psychological-test",
};

export default nextConfig;
