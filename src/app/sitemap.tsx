import { MetadataRoute } from "next";
import { PATH_NAME } from "@/configs/pathName";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_CLIENT_URL || "https://floravnu.com";

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl + PATH_NAME.HOME,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: baseUrl + PATH_NAME.PRODUCTS,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: baseUrl + PATH_NAME.ABOUTUS,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + PATH_NAME.BLOGS,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: baseUrl + PATH_NAME.OURCOMMIT,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: baseUrl + PATH_NAME.PRIVACYPOLICY,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: baseUrl + PATH_NAME.ORDERINSTRUCTIONS,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: baseUrl + PATH_NAME.CONTACTINSTRUCTIONS,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: baseUrl + PATH_NAME.OPERATINGPOLICY,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  return staticPages;
}
