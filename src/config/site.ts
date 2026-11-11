export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'David Cellini',
  title: 'David Cellini – Senior full-stack engineer',
  description:
    'David Cellini is a senior full-stack engineer in Newcastle upon Tyne, building accessible, well-tested products with React, TypeScript, GraphQL, Node.js and MongoDB.',
  siteUrl: 'https://davidcellini.co.uk',
  language: 'en-GB',
  locale: 'en_GB',
  dateLocale: 'en-GB',
  /** The default share image, in `public/`. Regenerate with scripts/og-image.mjs. */
  socialImage: '/og-image.png',

  /**
   * Cloudflare Web Analytics site token. Public by design (it ships to every
   * browser). The beacon only loads on `analyticsHost`, so previews stay out.
   */
  analyticsToken: '',
  analyticsHost: 'davidcellini.co.uk',

  author: {
    name: 'David Cellini',
    role: 'Senior full-stack engineer',
    location: 'Newcastle upon Tyne, UK',
    email: 'hello@davidcellini.co.uk',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Open to new roles',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Resume', href: '/resume/' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '/david-cellini-cv.pdf',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidcellini/' },
    { label: 'GitHub', href: 'https://github.com/dcellini' },
  ] satisfies NavLink[],
};

/** Homepage sections, in page order. Root-relative so they work from every page. */
export const navigation: NavLink[] = [
  { label: 'Timeline', href: '/#timeline' },
  { label: 'Work', href: '/#work' },
  { label: 'Feedback', href: '/#feedback' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

export const legalLinks: NavLink[] = [{ label: 'Privacy', href: '/privacy/' }];
