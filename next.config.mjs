/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/explain/how-to-use-borebee",
        destination: "/explain/how-to-use-boredbee",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
