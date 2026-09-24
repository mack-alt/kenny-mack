# Kenny Mack · Blades of Grass

Digital business card for Kenny Mack, founder of Blades of Grass (BoG).

Live site: [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/)

The page is a mobile-first calling card: a family photo, Kenny’s own words, what Blades of Grass is for, three outcomes, and ways to text him or book a conversation.

Interface labels are available in English, Tiếng Việt, and Español. The language choice is saved in this browser. Kenny’s story stays in his English on every language.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000/kenny-mack/](http://localhost:3000/kenny-mack/). The `/kenny-mack` base path matches the GitHub Pages project site.

```bash
npm run build
npm run lint
```

`npm run build` writes a static export to `out/`.

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`, which builds the static export and deploys it to GitHub Pages.

The repository Pages source needs to be GitHub Actions. That setting is at [https://github.com/mack-alt/kenny-mack/settings/pages](https://github.com/mack-alt/kenny-mack/settings/pages). After it is selected, re-run the Deploy to GitHub Pages workflow. The site is published at [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/).
