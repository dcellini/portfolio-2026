export interface SkillGroup {
  title: string;
  /** A Lucide icon name from `src/icons/lucide` for the group heading. */
  icon: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'monitor-smartphone',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS/Sass',
      'Emotion',
      'Redux Toolkit',
      'Apollo Client',
      'Storybook',
      'Design systems',
      'WCAG 2.2',
    ],
  },
  {
    title: 'Backend and data',
    icon: 'database',
    items: [
      'Node.js',
      'GraphQL (Apollo)',
      'REST / OpenAPI',
      'Express',
      'RxJS',
      'Zod',
      'MongoDB',
      'Mongoose',
      'Atlas Search',
      'Elasticsearch',
      'Handlebars',
    ],
  },
  {
    title: 'Cloud, delivery and testing',
    icon: 'cloud',
    items: [
      'AWS Lambda',
      'AWS Batch',
      'Amazon EventBridge',
      'Amazon S3',
      'Amazon SNS',
      'Amazon SQS',
      'Route 53',
      'CloudWatch',
      'Sentry',
      'Docker',
      'GitHub Actions',
      'Buildkite',
      'pnpm',
      'Git',
      'Vitest',
      'Jest',
    ],
  },
  {
    title: 'AI tools',
    icon: 'sparkles',
    items: ['Claude Code', 'Anthropic API', 'Amazon Bedrock', 'GitHub Copilot', 'Superset'],
  },
];
