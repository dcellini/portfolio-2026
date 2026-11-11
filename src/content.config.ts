import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Quotes from colleagues and customers. Attribution is by role only until a
 * person agrees to be named: add `name` to show it.
 */
const quotes = defineCollection({
  loader: file('./src/data/quotes.json'),
  schema: z.object({
    text: z.string(),
    /** Only set once the person has agreed to be named. */
    name: z.string().optional(),
    role: z.string(),
    /** e.g. "Hive", "Bloom", "UK university". */
    org: z.string(),
    /** e.g. "April 2024" or "2023". Omit when unknown. */
    date: z.string().optional(),
    /** Theme label for the "What colleagues say" cards. */
    theme: z.string().optional(),
    /** The large pull quote at the top of "What colleagues say". */
    pull: z.boolean().default(false),
  }),
});

/** Fields shared by full case studies and short "More work" pages. */
const common = {
  /** Outcome-led title used as the page heading. */
  title: z.string(),
  /** Short label for lists, cards and "Next:" links, e.g. "Heatmaps v2". */
  name: z.string(),
  /** Display dates, e.g. "Jan – Apr 2024". */
  dates: z.string(),
  /** One or two plain sentences for cards and the meta description. */
  summary: z.string(),
  role: z.string().optional(),
  stack: z.array(z.string()).default([]),
  quotes: z.array(reference('quotes')).default([]),
  /** Lower numbers come first. */
  order: z.number().int(),
  /** Drafts are left out of every page and list. */
  draft: z.boolean().default(false),
};

const work = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/work' }),
  schema: z.discriminatedUnion('kind', [
    z.object({
      kind: z.literal('full'),
      ...common,
      role: z.string(),
      /** e.g. "About 15 pull requests". */
      scope: z.string().optional(),
      /** The one headline figure in the viewer panel. */
      headline: z.object({ value: z.string(), label: z.string() }),
      /** Steps for the "How it works" diagram, in order. */
      diagram: z.array(z.string()).min(3),
      /** 3-5 "In practice" bullets for the viewer panel. */
      inPractice: z.array(z.string()).min(3).max(5),
      /** "The result" section, one paragraph or bullet per item. */
      result: z.array(z.string()).min(1),
    }),
    z.object({
      kind: z.literal('short'),
      ...common,
    }),
  ]),
});

export const collections = { work, quotes };
