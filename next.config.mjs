/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/rfid',
        destination: '/zt411-rfid',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
