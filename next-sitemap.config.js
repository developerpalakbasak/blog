/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000", // Set this in .env
    generateRobotsTxt: true, // Generate robots.txt
    sitemapSize: 5000, // Optional: Limits URLs per sitemap file
    generateIndexSitemap: false, // Set to true if using multiple sitemaps
    exclude: ["/admin", "/dashboard"], // Optional: Exclude specific routes
  };
  
  export default config;
  