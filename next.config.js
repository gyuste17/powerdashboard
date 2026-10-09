/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*).(png|jpg|jpeg|webp|avif|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/dashboards',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/dashboards/',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/por-que-contratar-freelancers-en-2023-es-rentable',
        destination: '/blog/por-que-contratar-freelancers-en-2023-es-rentable',
        permanent: true,
      },
      {
        source: '/por-que-contratar-freelancers-en-2023-es-rentable/',
        destination: '/blog/por-que-contratar-freelancers-en-2023-es-rentable',
        permanent: true,
      },
      {
        source: '/top-5-herramientas-bi',
        destination: '/blog/top-5-herramientas-bi',
        permanent: true,
      },
      {
        source: '/top-5-herramientas-bi/',
        destination: '/blog/top-5-herramientas-bi',
        permanent: true,
      },
      {
        source: '/futuro-bi-ia',
        destination: '/blog/futuro-bi-ia',
        permanent: true,
      },
      {
        source: '/futuro-bi-ia/',
        destination: '/blog/futuro-bi-ia',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
