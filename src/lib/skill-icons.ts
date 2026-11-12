import {
  siAnthropic,
  siApollographql,
  siBuildkite,
  siClaude,
  siCss,
  siDocker,
  siElasticsearch,
  siExpress,
  siGit,
  siGithubactions,
  siGithubcopilot,
  siGraphql,
  siHandlebarsdotjs,
  siHtml5,
  siJavascript,
  siJest,
  siMongodb,
  siMongoose,
  siNodedotjs,
  siOpenapiinitiative,
  siPnpm,
  siPython,
  siReact,
  siReactivex,
  siR,
  siRedux,
  siSass,
  siSentry,
  siStorybook,
  siTypescript,
  siVitest,
  siZod,
  type SimpleIcon,
} from 'simple-icons';

/** Brand logos from Simple Icons (CC0). Skills not listed show a generic icon or none. */
const brand: Record<string, SimpleIcon> = {
  React: siReact,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  'CSS/Sass': siSass,
  'Redux Toolkit': siRedux,
  'Apollo Client': siApollographql,
  Storybook: siStorybook,
  'Node.js': siNodedotjs,
  'GraphQL (Apollo)': siGraphql,
  'REST / OpenAPI': siOpenapiinitiative,
  Express: siExpress,
  RxJS: siReactivex,
  Zod: siZod,
  MongoDB: siMongodb,
  'Atlas Search': siMongodb,
  Elasticsearch: siElasticsearch,
  Sentry: siSentry,
  Docker: siDocker,
  'GitHub Actions': siGithubactions,
  Buildkite: siBuildkite,
  pnpm: siPnpm,
  Git: siGit,
  Vitest: siVitest,
  Jest: siJest,
  Mongoose: siMongoose,
  Handlebars: siHandlebarsdotjs,
  'Claude Code': siClaude,
  'Anthropic API': siAnthropic,
  'GitHub Copilot': siGithubcopilot,
  // Names used in case study stacks.
  Redux: siRedux,
  CSS: siCss,
  'MongoDB Atlas Search': siMongodb,
  'MongoDB Atlas': siMongodb,
  GraphQL: siGraphql,
  Python: siPython,
  R: siR,
};

/** Generic Lucide icons for skills without a usable brand logo (AWS logos aren't in Simple Icons). */
const generic: Record<string, string> = {
  'AWS Lambda': 'cloud',
  'Amazon EventBridge': 'cloud',
  'Amazon S3': 'cloud',
  'Amazon SNS': 'cloud',
  'Amazon SQS': 'cloud',
  'Route 53': 'cloud',
  CloudWatch: 'cloud',
  'Amazon Bedrock': 'cloud',
  'AWS Batch': 'cloud',
  REST: 'workflow',
  'WCAG 2.2': 'accessibility',
  'Design systems': 'layers',
  i18n: 'languages',
  'react-intl': 'languages',
};

const luminance = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: number, b: number) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

// Chip backgrounds: --canvas in each theme.
const LIGHT_SURFACE = luminance('fafaf7');
const DARK_SURFACE = luminance('0d0d0c');

export type SkillIcon =
  { kind: 'brand'; path: string; hex: string; onLight: boolean; onDark: boolean } | { kind: 'generic'; name: string };

/**
 * The icon for a skill. Brand colours are only used where they reach 3:1 against the
 * chip in that theme; otherwise the icon falls back to the text colour.
 */
export function skillIcon(skill: string): SkillIcon | undefined {
  const icon = brand[skill];
  if (icon) {
    const l = luminance(icon.hex);
    return {
      kind: 'brand',
      path: icon.path,
      hex: `#${icon.hex}`,
      onLight: contrast(l, LIGHT_SURFACE) >= 3,
      onDark: contrast(l, DARK_SURFACE) >= 3,
    };
  }
  return generic[skill] ? { kind: 'generic', name: generic[skill] } : undefined;
}
