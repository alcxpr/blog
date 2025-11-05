import type { CollectionEntry } from "astro:content";

/// Extract all unique tags from posts, sorted alphabetically.
export function getAllTags(posts: CollectionEntry<"blog">[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/// Filter posts by specific tag.
export function getPostsByTag(
  posts: CollectionEntry<"blog">[],
  tag: string
): CollectionEntry<"blog">[] {
  return posts.filter((post) => post.data.tags?.includes(tag));
}

/// Count posts per tag, returns object with tag as key and count as value.
export function getTagCounts(posts: CollectionEntry<"blog">[]): Record<string, number> {
  const tagCounts: Record<string, number> = {};
  posts.forEach((post) => {
    post.data.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  return tagCounts;
}

/// Convert tag to URL-safe slug.
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

/// Get tag counts as sorted array of [tag, count] tuples,
export function getTagCountsArray(posts: CollectionEntry<"blog">[]): [string, number][] {
  const counts = getTagCounts(posts);
  return Object.entries(counts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}
