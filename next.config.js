/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
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
