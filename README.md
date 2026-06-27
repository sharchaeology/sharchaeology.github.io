# Devesh Chetan Shah — CV Landing Page

A single-page, vintage-minimalist personal website with an Indian aesthetic, built from
Devesh Chetan Shah's curriculum vitae. Pure HTML/CSS/JS — no build step, no dependencies.

## Run it

Just open `index.html` in a browser. (Google Fonts load over the network.)
Or serve it locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Files

```
index.html               The page (all content + SEO meta + JSON-LD structured data)
assets/css/styles.css    Vintage Indian theme + Pietra Dura (parchin kari) accents
assets/js/main.js        Mobile nav, scroll-reveal, active-link, email-reveal
assets/img/favicon.svg   Site icon (Devanagari "द" mark)
assets/img/og-image.svg  Social-share card (1200×630)
assets/img/portrait.jpeg Hero photo (lecture); portrait1.jpeg = fieldwork shot
assets/img/pietra-*.svg  Pietra dura inlay border + floret ornament
assets/fonts/            Gandhari Unicode (Roman/IAST) + Sanskrit 2003 (Devanagari)
robots.txt               Crawler directives
sitemap.xml              Sitemap for search engines
site.webmanifest         PWA / install metadata
```

## Typography

- **Roman / Latin text** → **Gandhari Unicode** (bundled locally). Chosen for its complete
  IAST diacritics, so transliterated terms (Brāhmī, Kharoṣṭhī, Saṭṭaka, Puṇyākhyāna…) render
  uniformly. Large display titles use Marcellus, falling back to Gandhari.
- **Devanagari** → **Sanskrit 2003** (bundled locally) for the देवनागरी lines and section kickers.
- Both font families are self-hosted in `assets/fonts/` — no external font dependency for these.

## Design notes — Pietra Dura / Parchin Kari

The decorative language is drawn from Mughal marble inlay (as on the Taj Mahal dado):
a tileable floral **inlay band** (`pietra-border.svg`) separates the hero and footer,
a **carnelian-lotus / jade-leaf / gold-vine floret** (`pietra-floret.svg`) marks every section
heading, alternate sections carry faint **marble veining**, and photos sit in gold double-rule
**inlay frames**.

## Privacy / contact

- **Phone number removed** entirely (per request).
- **E-mail is hidden** — it is not in the page source at all. It's assembled from parts in JS
  and shown only when the visitor clicks "Tap to reveal e-mail" / "Reveal e-mail to write"
  (also keeps it away from scrapers). It is likewise omitted from the JSON-LD.

## ✅ Things to customise

1. **Your real domain** — the SEO tags use `https://deveshchetanshah.com/` as a placeholder.
   Find-and-replace it with the real domain in: `index.html`, `robots.txt`, `sitemap.xml`.

2. **(Optional) Swap hero photo** — the hero uses `portrait.jpeg`; the About section uses
   `portrait1.jpeg`. Replace either file (keep the names) to change them. `object-position`
   on the hero `<img>` controls the crop.

3. **(Optional) Social image** — `og-image.svg` works, but for the widest social-media
   compatibility export a **1200×630 JPG/PNG** and update the `og:image` / `twitter:image` URLs.

## SEO included

- Descriptive `<title>`, meta description & keywords, canonical URL
- Open Graph + Twitter Card tags for rich link previews
- **JSON-LD `Person` structured data** (job title, affiliation, education, languages, expertise)
- Semantic HTML5 landmarks, alt text, skip link, `robots.txt` + `sitemap.xml`
- Mobile-first responsive layout, reduced-motion support
