/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/rfid',
        destination: '/zt411-rfid',
        permanent: true,
      },
      {
        source: '/zeroliner',
        destination: '/zt411-linerless',
        permanent: true,
      },
      {
        source: '/tasmy',
        destination: '/tasmy-termotransferowe',
        permanent: true,
      },
      {
        source: '/tasmy/lista',
        destination: '/tasmy-termotransferowe/lista',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
