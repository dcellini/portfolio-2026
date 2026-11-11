import { getCollection, getEntries, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'work'>;
export type FullProject = Project & { data: Extract<Project['data'], { kind: 'full' }> };
export type Quote = CollectionEntry<'quotes'>;

export const projectHref = (project: Project) => `/work/${project.id}/`;

/** Every published case study and short page, in `order`. */
export async function getProjects() {
  const projects = await getCollection('work', ({ data }) => !data.draft);
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Full case studies, in viewer order. */
export async function getCaseStudies() {
  return (await getProjects()).filter((project): project is FullProject => project.data.kind === 'full');
}

/** Short "More work" pages, in order. */
export async function getShortWork() {
  return (await getProjects()).filter((project) => project.data.kind === 'short');
}

export const getQuotes = (project: Project) => getEntries(project.data.quotes);

/** "Role, Org · Date", led by the person's name once they've agreed to it. */
export const attribution = ({ data }: Quote) =>
  [[data.name, data.role, data.org].filter(Boolean).join(', '), data.date].filter(Boolean).join(' · ');
