import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://muhammadanique.com/projects",
    },
    {
      url: "https://muhammadanique.com/skills",
    },
    {
      url: "https://muhammadanique.com/blogs",
    },
  ];
}
