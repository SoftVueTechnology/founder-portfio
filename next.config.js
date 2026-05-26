/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ── FIX: Change this from "export" to "standalone" ──
  output: "standalone",

  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },

  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
