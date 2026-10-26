# Hi, I'm Brian 👑

**Software Engineer** — Windows Programming · Full-Stack Development · AI Engineering

> "Every conversation starts with a simple hello." — Don't hesitate to reach out.

## Deployment

This repository contains the Next.js source and GitHub Pages deployment for [https://br413.github.io/](https://br413.github.io/).

Pushes to `main` automatically redeploy the site through [.github/workflows/pages.yml](.github/workflows/pages.yml). The workflow installs dependencies, lints, builds with Node.js 24, copies the retained `articles/` and `assets/` directories into `out/`, and deploys that artifact. Both deployment and local development use the root path; no `NEXT_PUBLIC_BASE_PATH` override is needed.

To run locally:

```bash
npm ci
npm run dev
```

The active pages and metadata live in `app/`, with shared site settings in `lib/constants.ts`. The earlier root `index.html`, `styles.css`, `robots.txt`, and `sitemap.xml` remain in this repository for reference. The workflow publishes the generated Next.js homepage, robots file, and sitemap instead of those legacy files.

Article sources, cover assets, documentation, and publishing scripts are preserved. The scripts that edit `index.html` affect the retained legacy homepage; they do not update the Next.js site. See [SEO setup](docs/SEO-SETUP.md) and [Search Console indexing](docs/GSC-INDEXING.md) for the current workflow.

[portfolio_br](https://github.com/br413/portfolio_br) remains the earlier, independently deployed [project-site copy](https://br413.github.io/portfolio_br/). Changes in this repository do not automatically update that copy.

## Contact form

The Contact page submits name, email, and message to FormSubmit for delivery to `SITE_CONFIG.email` (`br198064@gmail.com`). It uses a normal HTTPS POST, so it works with the static GitHub Pages export and does not need a server or client-side API key. FormSubmit uses the visitor's `email` field for replies; its default CAPTCHA remains enabled, with an additional honeypot field.

On the first submission, FormSubmit emails the recipient an activation link. Open that email and activate the form before relying on delivery; check Spam if needed. After activation, send a test from the live Contact page and confirm it arrives in the inbox. FormSubmit handles the CAPTCHA, submission errors, and confirmation page. The existing direct email link remains available as an alternative.

## License

MIT
