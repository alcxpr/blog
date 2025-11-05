import type { CollectionEntry } from "astro:content";

/// Filters posts with future dates (scheduled posts).
export function getPublishedPosts(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  const now = new Date();
  return posts.filter((post) => {
    const postDate = new Date(post.data.date);
    return postDate <= now;
  });
}

/// Sorts posts by date descending (newest first).
export function sortPostsByDate(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/// Returns published posts sorted by date.
export function getPublishedPostsSorted(
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  return sortPostsByDate(getPublishedPosts(posts));
}
