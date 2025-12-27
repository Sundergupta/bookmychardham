/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
    // Alternatively use remotePatterns for more granular control:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' }
    // ]
  },
};

export default nextConfig;
