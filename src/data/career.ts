export interface TimelineEntry {
  dates: string;
  role: string;
  org: string;
  /** Optional extra context shown under the role. */
  note?: string;
  text: string;
}

/** Descriptions shared by the homepage timeline and the Resume page. */
const text = {
  senior:
    'Own large features end to end: Onboarding and Exit Surveys, the Question Bank, survey automation, AI-generated reports and accessibility work. Mentor other engineers and share the on-call rota.',
  engineer:
    'Built much of the drag-and-drop survey builder, then grew across the stack: Self-Select Demographics, right-to-left support, Heatmaps v2 and Scheduled Surveys. From 2016 to 2019 I also ran customer support single-handedly alongside engineering, covering survey set-ups, launches, translations and the move off the V1 platform, then trained the first support hires.',
  leighton:
    'Front-end lead on the new ATG Tickets website, mentoring a junior developer. Sites and components for British Airways and Home Group.',
  gmg: 'Ran seven radio station websites: content, video, podcasts, social and performance reporting.',
  exploreMusic: 'Website updates and digital archives for a music library at The Sage Gateshead.',
};

/** Homepage timeline, newest first. */
export const timeline: TimelineEntry[] = [
  { dates: '2024 – now', role: 'Senior Software Engineer', org: 'Hive', text: text.senior },
  { dates: '2016 – 2024', role: 'Software Engineer', org: 'Hive', text: text.engineer },
  { dates: '2014 – 2016', role: 'Web Developer', org: 'Leighton', text: text.leighton },
  { dates: '2008 – 2014', role: 'Digital Content Editor', org: 'GMG Radio (Real and Smooth Radio)', text: text.gmg },
  {
    dates: '2004 – 2008',
    role: 'Music Information Assistant',
    org: 'ExploreMusic (Gateshead Council)',
    text: text.exploreMusic,
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
  { role: 'Senior Software Engineer', org: 'Hive', period: 'Jul 2024 – Present', text: text.senior },
  { role: 'Software Engineer', org: 'Hive', period: 'Sep 2016 – Jul 2024', text: text.engineer },
  { role: 'Web Developer', org: 'Leighton', period: 'Jun 2014 – Sep 2016', text: text.leighton },
  {
    role: 'Digital Content Editor',
    org: 'GMG Radio (Real and Smooth Radio)',
    period: 'Feb 2008 – Apr 2014',
    text: text.gmg,
  },
  {
    role: 'Music Information Assistant',
    org: 'ExploreMusic (Gateshead Council)',
    period: 'Nov 2004 – Feb 2008',
    text: text.exploreMusic,
  },
];
