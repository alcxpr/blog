import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";
import { getPublishedPostsSorted } from "../utils/posts";

export async function GET(context) {
  const allPosts = await getCollection("blog");
  const posts = getPublishedPostsSorted(allPosts);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
