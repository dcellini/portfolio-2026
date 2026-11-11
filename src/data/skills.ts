export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Redux Toolkit', 'Apollo Client', 'Storybook', 'Design systems', 'CSS/Sass'],
  },
  {
    title: 'Backend and data',
    items: ['Node.js', 'GraphQL', 'Express', 'Zod', 'MongoDB', 'Atlas Search', 'Elasticsearch'],
  },
  {
    title: 'Practices',
    items: ['WCAG 2.2', 'i18n and right-to-left', 'Feature flags', 'Testing', 'Claude Code'],
  },
  {
    title: 'Also familiar with',
    items: ['AWS', 'Docker', 'CI/CD', 'Sentry', 'Git/GitHub'],
  },
];
