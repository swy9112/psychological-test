const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/psychological-test/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};