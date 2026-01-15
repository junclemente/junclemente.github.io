# Jun Clemente – Personal Website

This repository contains the source code for my personal website, built with
[Astro](https://astro.build) and deployed to GitHub Pages using GitHub Actions.

🌐 **Live site:** https://junclemente.com

---

## 🛠 Tech Stack

- **Framework:** Astro
- **Language:** JavaScript (ES modules)
- **Styling:** CSS (modern layout utilities)
- **Client-side Interactivity:** Vanilla JavaScript (Astro islands)
- **Deployment:** GitHub Pages (via GitHub Actions)
- **CI/CD:** GitHub Actions
- **Node version:** 18+ (20 recommended)

---

## 🔄 Framework Migration

This site was originally built using Gatsby. As the site evolved, I chose to migrate to Astro to reduce complexity, improve build performance, and simplify ongoing maintenance.

Astro’s content-first architecture and minimal client-side JavaScript better matched the goals of this site, making it easier to iterate, organize content, and deploy updates efficiently.

---

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, CNAME, .nojekyll)
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route-based pages
│   ├── data/            # Site content & configuration (projects, resources)
│   ├── styles/          # Global styles and variables (if applicable)
│   └── scripts/         # Client-side JavaScript (filters, enhancements)
├── astro.config.mjs
├── package.json
└── README.md

```

## 🚀 Local Development

```bash
npm install
npm run dev
```

This site will be available at:

```bash
http://localhost:4321
```

## 🏗 Production Build (local)

```bash
npm run build
npm run preview
```

## 🔀 Branch & Deployment Workflow

- develop
  Active development branch (work in progress)

- main
  - Production branch
  - Pushing to main triggers a GitHub Actions workflow that:

1. Installs dependencies

2. Builds the site with Astro

3. Deploys the output to GitHub Pages

Build artifacts (dist/, node_modules/, .astro/) are not committed.

## 🧾 Notes

- GitHub Pages is configured to deploy via GitHub Actions

- Jekyll is explicitly disabled using .nojekyll

- The site uses a custom domain configured via public/CNAME

## 🤖 Use of Generative AI

This site was built using a combination of my own design decisions, implementation work, and iterative refinement with the assistance of generative AI tools.

Generative AI was used as a **collaborative aid** to:

- explore architectural and organizational options
- refine component structure and data organization
- improve clarity, consistency, and maintainability of code and documentation
- accelerate iteration while maintaining full authorship and decision-making responsibility

All final design choices, code integration, and content curation reflect my own judgment and intent. Generative AI was used as a productivity and reasoning aid, not as a replacement for understanding or ownership.
