const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  reactStrictMode: false,
  i18n: {
    locales: ["en-US", "en", "ko"],
    defaultLocale: "en-US",
  },
  images: {
    domains: [
      "placehold.it",
      "source.unsplash.com",
      "campingagains3.s3.ap-northeast-2.amazonaws.com",
      "camping101.s3.ap-northeast-2.amazonaws.com",
      "cdn.dribbble.com",
    ],
  },
  rewrites() {
    return [
      {
        source: process.env.NEXT_PUBLIC_SOURCE_PATH,
        destination: process.env.NEXT_PUBLIC_DESTINATION_URL,
      },
    ];
  },
};
module.exports = nextConfig;
