import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/resume", "/projects", "/blog", "/contact"];
  return routes.map((route) => ({
    url: `https://jaidevbangar.info${route}`,
    lastModified: new Date(),
  }));
}
