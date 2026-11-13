/** Peer recognitions per year, for the "What colleagues say" chart. */
export const recognitions = [
  { year: 2017, count: 3 },
  { year: 2018, count: 15 },
  { year: 2019, count: 19 },
  { year: 2020, count: 2 },
  { year: 2021, count: 2 },
  { year: 2022, count: 14 },
  { year: 2023, count: 23 },
  { year: 2024, count: 15 },
  { year: 2025, count: 7 },
  { year: 2026, count: 6 },
] as const;

export const recognitionTotal = recognitions.reduce((sum, r) => sum + r.count, 0);

export interface RecognitionTheme {
  label: string;
  /** A file name from `src/icons/lucide`. */
  icon: string;
  /** What the recognitions say about it, in a few words. */
  detail: string;
}

/** Themes that come up most in the recognitions, shown under the quote cards. */
export const recognitionThemes: RecognitionTheme[] = [
  { label: 'Delivering big projects', icon: 'rocket', detail: 'Question Bank, Heatmaps v2, Scheduled Surveys' },
  { label: 'Mentoring', icon: 'graduation-cap', detail: 'Unblocking and teaching teammates' },
  { label: 'Customer focus', icon: 'heart-handshake', detail: 'Turning work round at short notice' },
  { label: 'Quality', icon: 'badge-check', detail: 'Small, easy-to-review pull requests' },
  { label: 'Learning', icon: 'book-open', detail: 'TypeScript, Zod, testing, aggregations' },
  { label: 'Hard problems', icon: 'puzzle', detail: 'Legacy code, performance, access rules' },
  { label: 'Presenting', icon: 'presentation', detail: 'Clear, confident sprint demos' },
  { label: 'Calm under pressure', icon: 'anchor', detail: 'Steady when things go wrong' },
];
