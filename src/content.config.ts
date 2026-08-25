import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const intensity = z.enum(['quiet', 'expressive', 'immersive']);

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intensity: intensity,
    dataHonesty: z.enum(['sourced', 'sample', 'none']).default('none'),
  }),
});

const copy = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/copy' }),
  schema: z.object({
    title: z.string(),
    surface: z.enum(['brand', 'ui', 'error', 'legal']),
  }),
});

export const collections = { pages, copy };
