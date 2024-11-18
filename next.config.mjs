const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/mohammadkerdasi-portfolio/' : '',
  basePath: isProd ? '/mohammadkerdasi-portfolio' : '',
  output: 'export'
};

export default nextConfig;