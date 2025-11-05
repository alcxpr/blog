/**
 * Blog Configuration
 *
 * This file contains all the configurable settings for your blog.
 * Modify these values to customize your blog without touching the code.
 */

export const SITE = {
  // Site metadata
  title: 'Compiler Log',
  description: 'Blog & Notes',
  author: 'alcxpr',

  // Site URL (used for RSS and canonical URLs)
  url: 'https://alcxpr.dev',

  // Social links
  social: {
    github: 'https://github.com/alcxpr',
  },
} as const;

export const THEME = {
  // Enable view transitions (smooth page transitions)
  viewTransitions: true,

  // Theme colors (extensible for future dark mode toggle)
  colors: {
    base: {
      100: '#1a1a1a',
      200: '#2a2a2a',
      400: '#9ca3af',
      600: '#d1d5db',
      800: '#f5f5f5',
    },
    background: '#0d0d0d',
  },
} as const;

export const BLOG = {
  // Post sorting
  sortBy: 'date' as const,
  sortOrder: 'desc' as const,

  // Date formatting
  dateFormat: {
    locale: 'en-US',
    options: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions,
  },
} as const;
