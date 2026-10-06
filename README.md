# levgerasimov.com

Personal portfolio website for Lev Gerasimov, built with [Astro](https://astro.build/).

## Features

- **Component-Driven Architecture**: Modular Astro components (`Hero`, `Navigation`, `ProjectCard`, `ExperienceCard`, `Contact`, `Footer`).
- **Content Collections**: Projects and work experiences managed via typed Markdown files in `src/content/` with strict TypeScript validation.
- **Pixel-Identical Visual Identity**: Preserves original bespoke dark/light theme, typography, hero background slideshow, and responsive layouts.
- **Open Graph & SEO**: Custom LinkedIn/Twitter/Facebook social cards and metadata with canonical URL support.
- **Serverless Contact Form**: Semantic HTML form powered by Web3Forms with direct email and Telegram alternatives.
- **Automated CI/CD**: Automatic build and deployment to GitHub Pages via GitHub Actions.

## Project Structure

```text
├── public/                 # Static assets (images, downloadable reports & CAD files, CNAME, favicon)
│   ├── files/              # Downloadable PDFs and CAD ZIP archives
│   ├── images/             # Hero photos
│   ├── CNAME               # Custom domain config (levgerasimov.com)
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/         # Modular UI components
│   │   ├── AchievementCard.astro
│   │   ├── Contact.astro
│   │   ├── EducationCard.astro
│   │   ├── ExperienceCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── NowCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── Section.astro
│   │   └── SEO.astro
│   ├── content/            # Markdown content collections
│   │   ├── experience/     # Work experience (.md files)
│   │   └── projects/       # Projects (.md files)
│   ├── data/
│   │   └── profile.ts      # Site profile data, timeline, education, achievements
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML document with SEO and theme script
│   ├── pages/
│   │   └── index.astro     # Main homepage
│   ├── scripts/
│   │   └── site.js         # Theme toggle, navigation scroll state & hero parallax
│   ├── styles/
│   │   └── global.css      # Extracted CSS design system
│   └── content.config.ts   # Astro Content Layer collection definitions
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages CI/CD workflow
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

### Production Build

Build the static site to the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Adding Content

### Projects
Create a new `.md` file inside `src/content/projects/`:

```markdown
---
order: 6
title: "Project Title"
tags:
  - "Tag 1"
  - "Tag 2"
description: "Brief summary of the project."
points:
  - "Key metric or calculation."
  - "Key outcome or finding."
link:
  href: "files/your-file.pdf"
  label: "View report"
  kind: "report" # "report" | "download" | "external"
---
```

### Experience
Create a new `.md` file inside `src/content/experience/`:

```markdown
---
order: 4
dates: "Jun 2025 – Sep 2025"
location: "Cambridge"
role: "Research Intern"
company: "University of Cambridge"
points:
  - "Key responsibility or result."
---
```

## Contact Form Setup (Web3Forms)

1. Obtain a free access key at [web3forms.com](https://web3forms.com/).
2. For local development, copy `.env.example` to `.env` and set:
   ```env
   PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```
3. In GitHub, add the secret to your repository:
   - Navigate to **Settings** > **Secrets and variables** > **Actions** > **Repository secrets**
   - Click **New repository secret**
   - Name: `PUBLIC_WEB3FORMS_KEY`
   - Value: `your_access_key_here`

## GitHub Pages Deployment

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push to `main` (or trigger the workflow manually in the **Actions** tab).
