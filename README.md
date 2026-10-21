# Kenny Mack · Blades of Grass

Digital handshake for Kenny Mack, founder of Blades of Grass (B-O-G).

Live site: [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/)

The homepage opens on Kenny’s name and a 15-second Blades of Grass demo — from a missed call to a booked time — with Save contact beside it, then the customer, then FIND ME™, FRONT DESK, and BRING ME MORE™, then language, a look at the business, a save-contact card, Meet Kenny with the family photo, The B-O-G Way, and trust.

The founder card wording for English, Vietnamese, and Spanish is in `lib/salon-copy.ts`. Language chips and other interface labels (call, save contact, video controls) are in `lib/content.ts`. Choosing Tiếng Việt or Español switches the whole card: every section, the questions, the calculator, and the footer. Trust is at `/trust/`, Terms are at `/terms/`, the Front Desk service agreement is at `/service-agreement/`, Privacy is at `/privacy/`, and the text message terms alone are at `/sms-terms/`. Those pages follow the same language chips. Their business contact lives in `lib/legal.ts` and must match the A2P 10DLC registration; the home address may appear only on those pages.

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

Open `http://localhost:3000/kenny-mack/`.

```bash
npm run lint
```

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`, which builds the static export and deploys it to GitHub Pages. A pull request does not publish until it is merged.

The repository Pages source needs to be GitHub Actions. That setting is at [https://github.com/mack-alt/kenny-mack/settings/pages](https://github.com/mack-alt/kenny-mack/settings/pages). The site is published at [https://mack-alt.github.io/kenny-mack/](https://mack-alt.github.io/kenny-mack/).
