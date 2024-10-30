// next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: "/psychological-test",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/psychological-test/"
      : "",
  trailingSlash: true,  // 경로가 슬래시로 끝나도록 설정
};

export default nextConfig;
