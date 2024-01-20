export const env = {
  BE_BASE_URL: process.env.NEXT_PUBLIC_BE_BASE_URL || "http://localhost:3030",
} as const;
