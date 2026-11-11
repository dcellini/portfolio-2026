export interface TimelineEntry {
  dates: string;
  role: string;
  org: string;
  /** Extra context after the organisation, e.g. "running support single-handedly". */
  note?: string;
  text: string;
}

/** Homepage timeline, newest first. */
export const timeline: TimelineEntry[] = [
  {
    dates: '2024 – now',
    role: 'Senior Software Engineer',
    org: 'Hive',
    text: 'Own large features end to end: Onboarding and Exit Surveys, the Question Bank, survey automation, AI-generated reports and accessibility work. Mentor other engineers and share the on-call rota.',
  },
  {
    dates: '2019 – 2024',
    role: 'Software Engineer',
    org: 'Hive',
    text: 'Built much of the drag-and-drop survey builder, then grew across the stack: Self-Select Demographics, right-to-left support, Heatmaps v2 and Scheduled Surveys.',
  },
  {
    dates: '2016 – 2019',
    role: 'Software Engineer',
    org: 'Hive',
    note: 'running support single-handedly',
    text: 'Ran customer support on my own before there was a support team: survey set-ups, launches, translations and the move off the V1 platform. Trained the first support hires, then moved full-time into development.',
  },
  {
    dates: '2014 – 2016',
    role: 'Web Developer',
    org: 'Leighton',
    text: 'Front-end lead on the new ATG Tickets website, mentoring a junior developer. Sites and components for British Airways and Home Group.',
  },
  {
    dates: '2008 – 2014',
    role: 'Digital Content Editor',
    org: 'GMG Radio (Real and Smooth Radio)',
    text: 'Ran seven radio station websites: content, video, podcasts, social and performance reporting.',
  },
  {
    dates: '2004 – 2008',
    role: 'Music Information Assistant',
    org: 'ExploreMusic (Gateshead Council)',
    text: 'Website updates and digital archives for a music library at The Sage Gateshead.',
  },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  /** Exact dates for the Resume page. */
  period: string;
  text: string;
}

/** Resume page experience, newest first, with exact dates. */
export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    org: 'Hive',
    period: 'Jul 2024 – Present',
    text: timeline[0].text,
  },
  {
    role: 'Software Engineer',
    org: 'Hive',
    period: 'Sep 2016 – Jul 2024',
    // [TODO: confirm] Combines the 2016-2019 and 2019-2024 timeline rows.
    text: 'Ran customer support on my own before there was a support team, then moved full-time into development. Built much of the drag-and-drop survey builder, then grew across the stack: Self-Select Demographics, right-to-left support, Heatmaps v2 and Scheduled Surveys.',
  },
  { role: 'Web Developer', org: 'Leighton', period: 'Jun 2014 – Sep 2016', text: timeline[3].text },
  {
    role: 'Digital Content Editor',
    org: 'GMG Radio (Real and Smooth Radio)',
    period: 'Feb 2008 – Apr 2014',
    text: timeline[4].text,
  },
  {
    role: 'Music Information Assistant',
    org: 'ExploreMusic (Gateshead Council)',
    period: 'Nov 2004 – Feb 2008',
    text: timeline[5].text,
  },
];
