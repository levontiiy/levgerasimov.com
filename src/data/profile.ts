/**
 * Site-wide profile data that is not a content collection.
 * Projects and work experience live in src/content/ as Markdown.
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
    label: 'Currently',
    status: 'Third-year Chemical Engineering & Biotechnology student',
    detail:
      'Enrolled in a four-year programme at the University of Cambridge.',
  },
  {
    label: 'Research',
    status: 'Molecular Neuroscience Group — FLIMPA Post-Release Modifications',
    detail:
      'Integrating a wavelet filter into FLIMPA’s fluorescence lifetime imaging (FLIM) phasor-analysis workflow.',
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
      'Year 1: Class 2.1; First Class in Mathematics (80.1%; top 2%).',
      'Year 2: Class 2.1; First Class Paper 3 (Solids, Engineering Mathematics, Separations).',
      'Coursework: Process Engineering, Fluid Mechanics, Heat & Mass Transfer, Reaction Engineering, Biotechnology, Process Thermodynamics, and Separators.',
    ],
  },
  {
    connectorBefore: 'Subsequently entered the University of Cambridge as a first-year student',
    years: '2023 – 2024',
    school: 'ITMO University',
    degree: 'Bioengineering',
    details: [
      'GPA: 5.0/5.0. Coursework: Linear Algebra, Analysis, Cell Biology, Process Simulation, and Environmental Research.',
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
  linkedin: { url: 'https://www.linkedin.com/in/levikgerasimov', label: 'LinkedIn' },
};
