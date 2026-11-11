/** "How I work": six short principles. */
export const principles = [
  {
    title: 'Small, reviewable changes',
    text: 'Large features ship as stacked PRs, each with its own guide for reviewers.',
  },
  {
    title: 'Write it down first',
    text: 'RFCs before big builds, and notes on what went wrong after incidents.',
  },
  {
    title: 'Safe data changes',
    text: 'Old and new formats run side by side, and scripts check the numbers match before cut-over.',
  },
  {
    title: 'Flags in, flags out',
    text: 'New work goes behind a feature flag, and the flag comes out again afterwards.',
  },
  {
    title: 'Root cause over symptom',
    text: 'Fix why it failed and why it took so long to notice.',
  },
  {
    title: 'Tools for the team',
    text: 'Claude Code skills and scripts that make diagnosing and setting up faster for everyone.',
  },
];
