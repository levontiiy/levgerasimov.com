/**
 * Site-wide profile data that is not a content collection.
 * Projects and work experience live in src/content/ as Markdown.
 *
 * Text here is copied verbatim from the original index.html — edit freely,
 * the components render whatever is in these objects.
 */

export const profile = {
  name: 'Lev Gerasimov',
  tagline: 'Chemical Engineering & Biotechnology · University of Cambridge',
};

export const navLinks = [
  { href: '#now', label: 'Now' },
  { href: '#education', label: 'Education' },
  { href: '#additional-education', label: 'Additional education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export const now = [
  {
    label: 'Research',
    status: 'Molecular Neuroscience Group, FLIMPA modification project',
    detail:
      'Working on modifications to a FLIM phasor-analysis workflow, a fluorescence lifetime imaging method used to read biochemical changes from microscopy data faster and with less model-heavy fitting.',
  },
  {
    label: 'Job',
    status: 'Teaching Assistant, Downing College International Undergraduate Summer Programme',
    detail: "Supporting students during Downing College's summer academic programme in Cambridge.",
  },
];

/**
 * Education timeline, newest first. `connectorBefore` renders the small italic
 * note on the timeline line above an entry.
 */
export const education: Array<{
  years: string;
  school: string;
  degree: string;
  details: string[];
  connectorBefore?: string;
}> = [
  {
    years: '2024 – 2028 (expected)',
    school: 'University of Cambridge',
    degree: 'Chemical Engineering & Biotechnology',
    details: [
      'Year 1: Class 2.1, top 30 in cohort, with First Class in Mathematics (80.1%, top 2%).',
      'Year 2: predicted Class 1.',
      'Coursework spans Process Engineering, Fluid Mechanics, Heat & Mass Transfer, Reaction Engineering, Biotechnology, Process Thermodynamics, and Separators.',
    ],
  },
  {
    connectorBefore: 'Transferred to the University of Cambridge',
    years: '2023 – 2024',
    school: 'ITMO University',
    degree: 'Bioengineering',
    details: [
      'GPA 5.0/5.0. Coursework in Linear Algebra, Analysis, Cell Biology, Process Simulation, and Environmental Research.',
    ],
  },
];

export const additionalEducation = [
  { title: 'MIT OpenCourseWare', detail: '"Introduction to Computer Science and Programming in Python".' },
  { title: 'HarvardX', detail: '"Science & Cooking: From Haute Cuisine to Soft Matter Science".' },
];

export const achievements = [
  { title: 'Cambridge Trust Foundation Award', detail: 'Annual award for "a promising academic prodigy".' },
  { title: 'Best Researcher Under 18', detail: 'Awarded at the ITMO University Conference of Young Scientists.' },
];

export const contact = {
  email: 'contact@levgerasimov.com',
  telegram: { url: 'https://t.me/lev_ontiy', label: 'Telegram' },
};
