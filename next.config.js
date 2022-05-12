/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.GITHUB_PAGES ? '/mynote-front-end' : '',
}

module.exports = nextConfig
