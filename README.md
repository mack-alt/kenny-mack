# Kenny Mack · Blades of Grass

Digital handshake for Kenny Mack, founder of Blades of Grass (B-O-G).

Live site (production `main` only): [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/)

This branch is a preview. `/` is a chooser between two short looks built from the same words. It does not change the live Pages site until a look is chosen and merged.

- Look A, card: `/preview-a/`
- Look B, poster: `/preview-b/`

The shared wording is in `lib/card-copy.ts`. Language chips and other interface labels (call, email, directory) are in `lib/content.ts`. The story and offers stay in English on every language.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000/kenny-mack/](http://localhost:3000/kenny-mack/). The `/kenny-mack` base path matches the GitHub Pages project site.

## Static preview

`npm run build` writes a static export to `out/`. Asset URLs include `/kenny-mack`, so serve a parent folder:

```bash
npm run build
rm -rf .pages-preview && mkdir -p .pages-preview
cp -R out .pages-preview/kenny-mack
npx serve .pages-preview
```

Open `http://localhost:3000/kenny-mack/`, then Look A and Look B.

```bash
npm run lint
```

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`, which builds the static export and deploys it to GitHub Pages. A pull request does not publish.

The repository Pages source needs to be GitHub Actions. That setting is at [https://github.com/mack-alt/kenny-mack/settings/pages](https://github.com/mack-alt/kenny-mack/settings/pages). The site is published at [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/).
