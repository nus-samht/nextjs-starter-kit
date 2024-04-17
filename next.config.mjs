/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Add credential here then call with process.env
    apiKey: 'your-api-key'
  },
  images: {
    // Allow next/image to use external image URL
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: ''
      }
    ]
  }
}

export default nextConfig
