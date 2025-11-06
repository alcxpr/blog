import type { CollectionEntry } from "astro:content";

/// Calculates reading time in minutes based on word count.
/// Assumes average reading speed of 200 words per minute.
export function calculateReadingTime(content: string | undefined | null): number {
  const wordsPerMinute = 200;
  if (!content) return 1;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

/// Filters out draft posts (posts with "draft" tag).
export function filterDrafts(posts: CollectionEntry<"blog">[]): CollectionEntry<"blog">[] {
  return posts.filter((post) => {
    return !post.data.tags.some((tag) => tag.toLowerCase() === "draft");
  });
}

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

/// Returns published posts (excluding drafts) sorted by date.
export function getPublishedPostsSorted(
  posts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  return sortPostsByDate(getPublishedPosts(filterDrafts(posts)));
}
