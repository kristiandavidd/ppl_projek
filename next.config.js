/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACKEND_API: "http://localhost:4000",
    SECRET_KEY: "ppl-be-secret-key",
    //SECRET_KEY: "skillup-secret-key",
  },
};

module.exports = nextConfig;