export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
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
    items: ['Claude Code', 'Anthropic API', 'Amazon Bedrock', 'GitHub Copilot', 'Superset'],
  },
];
