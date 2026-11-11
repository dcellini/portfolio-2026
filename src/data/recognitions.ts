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

/** Theme chips shown with the quote cards. */
export const recognitionThemes = [
  'Delivering big projects',
  'Mentoring',
  'Customer focus',
  'Quality',
  'Learning',
  'Hard problems',
  'Presenting',
  'Calm under pressure',
];
