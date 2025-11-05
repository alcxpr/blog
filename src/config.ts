export const SITE = {
  title: "Compiler Log",
  description: "Blog & Notes",
  author: "alcxpr",
  url: "https://alcxpr.dev",
  social: {
    github: "https://github.com/alcxpr",
  },
} as const;

export const THEME = {
  viewTransitions: true,
  colors: {
    base: {
      100: "#1a1a1a",
      200: "#2a2a2a",
      400: "#9ca3af",
      600: "#d1d5db",
      800: "#f5f5f5",
    },
    background: "#0d0d0d",
  },
} as const;

export const BLOG = {
  sortBy: "date" as const,
  sortOrder: "desc" as const,
  dateFormat: {
    locale: "en-US",
    options: {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions,
  },
} as const;
