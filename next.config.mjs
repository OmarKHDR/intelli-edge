/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // <CHANGE> Add basePath conditionally based on GitHub Pages environment variable
  basePath: process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/intelli-edge' : '',
}

export default nextConfig
