/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
        },
        {
          source: '/images/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
        },
      ],
    }
  },
}

export default nextConfig
