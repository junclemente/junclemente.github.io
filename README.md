# Jun Clemente – Personal Website

This repository contains the source code for my personal website, built with
[Astro](https://astro.build) and deployed to GitHub Pages using GitHub Actions.

🌐 **Live site:** https://junclemente.com

---

## 🛠 Tech Stack

- **Framework:** Astro
- **Styling:** CSS / modern layout utilities
- **Deployment:** GitHub Pages (via GitHub Actions)
- **Node version:** 18+ (20 recommended)

---

## 📁 Project Structure

```text
/
├── public/          # Static assets (favicon, CNAME, .nojekyll)
├── src/
│   ├── components/  # Reusable UI components
│   ├── layouts/     # Page layouts
│   └── pages/       # Route-based pages
├── astro.config.mjs
├── package.json
└── README.md

## 🚀 Local Development
```bash
npm install
npm run dev
```
This site will be available ate: 
```
http://localhost:4321
```

## 🏗 Production Build (local)
```bash
npm run build
npm run preview
```

## 🔀 Branch & Deployment Workflow
* develop
    Active development branch (work in progress)

* main
    Production branch
    Pushing to main triggers a GitHub Actions workflow that:

1. Installs dependencies

2. Builds the site with Astro

3. Deploys the output to GitHub Pages

Build artifacts (dist/, node_modules/, .astro/) are not committed.

## 🧾 Notes
* GitHub Pages is configured to deploy via GitHub Actions

* Jekyll is explicitly disabled using .nojekyll

* The site uses a custom domain configured via public/CNAME

