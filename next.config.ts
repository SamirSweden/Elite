import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
      remotePatterns:[
          {
              protocol:'https',
              hostname:'ethereum.org',
              port:'',
              pathname:'/**'
          }
      ]
  }
};

export default nextConfig;
