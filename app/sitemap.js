// app/sitemap.js
import axios from "axios";

export default async function sitemap() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  

    // Production build
    try {
      // Fetch blogs from the API route
      const response = await axios.get(`${SITE_URL}/api/blog`);
      const { blogs } = response.data;

      // Generate sitemap entries for blogs
      const blogSitemap = blogs.map((blog) => ({
        url: `${SITE_URL}/${blog.slug}`, // Construct full URL for each blog
        lastModified: new Date(blog.date).toISOString(), // Convert date to ISO string
        changeFrequency: "weekly",
        priority: 1,
      }));

      // Return the full sitemap
      return [
        {
          url: `${SITE_URL}/`, // Homepage
          lastModified: new Date().toISOString(),
          changeFrequency: "yearly",
          priority: 1,
        },
        ...blogSitemap, // Include all blog entries
      ];
    } catch (error) {
      console.error("Error fetching blogs for sitemap:", error);
      // Fallback sitemap if the API fails
      return [
        {
          url: `${SITE_URL}/`,
          lastModified: new Date().toISOString(),
          changeFrequency: "yearly",
          priority: 1,
        },
      ];
    }
  
}