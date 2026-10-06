import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
    description: z.string(),
    points: z.array(z.string()),
    link: z.object({
      href: z.string(),
      label: z.string(),
      kind: z.enum(['report', 'download', 'external']),
    }).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    order: z.number(),
    dates: z.string(),
    location: z.string().optional(),
    role: z.string(),
    company: z.string(),
    points: z.array(z.string()),
  }),
});

export const collections = { projects, experience };
