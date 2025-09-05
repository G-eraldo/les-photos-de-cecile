module.exports = {
  siteUrl: "https://les-photos-de-cecile-l7f5.vercel.app/",
  generateRobotsTxt: true, // (optional)
  changeFreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/tirages-photo/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        disallow: "/tirages-photo/*",
      },
    ],
  },
};
