/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/psychological-test/"
      : "",
};

export default nextConfig;
