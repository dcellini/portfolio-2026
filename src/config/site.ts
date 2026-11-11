export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'David Cellini',
  title: 'David Cellini - Senior full-stack engineer',
  description:
    'David Cellini is a senior full-stack engineer in Newcastle upon Tyne, building accessible, well-tested products with React, TypeScript, GraphQL, Node.js and MongoDB.',
  siteUrl: 'https://davidcellini.co.uk',
  language: 'en-GB',
  locale: 'en_GB',
  dateLocale: 'en-GB',
  /** The default share image, in `public/`. Empty until the share image is built. */
  socialImage: '',

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
  resumePdf: '',

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidcellini/' },
    { label: 'GitHub', href: 'https://github.com/dcellini' },
  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [{ label: 'Work', href: '/#work' }];

export const legalLinks: NavLink[] = [{ label: 'Privacy', href: '/privacy/' }];
