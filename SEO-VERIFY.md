# SEO Verify

## Что изменили
- `src/layouts/Layout.astro` - full head, OG/Twitter, JSON-LD `@graph`
- `src/config/site.ts` - оффер и description под сетку ⌘Tab
- `src/components/Hero.astro`, `Features.astro`, `Focus.astro`, `FooterCta.astro` - копирайт
- `src/components/Screenshot.astro` - width/height, fetchpriority, alt
- `src/pages/privacy.astro` - RU title/h1/description
- `src/components/Footer.astro` - RU anchors, trailing slash
- `src/styles/global.css` - `.cv-auto`
- `astro.config.mjs` - `trailingSlash: 'always'`
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`
- `SEO-AUDIT.md`, `SEO-FIX-PLAN.md`, `SEO-GOOGLE.md`

## Проверки
- [x] В `<head>` есть title/description/canonical
- [x] OG/Twitter заполнены и используют абсолютные URL
- [x] JSON-LD валиден и присутствует в SSR HTML
- [x] robots.txt существует и содержит Sitemap
- [x] sitemap доступен (`public/sitemap.xml`)
- [x] Изображения: width/height в разметке; hero eager + fetchpriority; ниже фолда lazy
- [x] Нет глобального noindex (`index, follow`)
- [x] Нет em-dash в UI-текстах (title privacy через ·)
- [x] Build проходит (`npm run build`)

## Оценка после фикса (оценка)
- Meta/Head: 28/30
- Schema: 18/20 (price в Offer ещё placeholder)
- Indexability: 19/20
- Performance + Images: 15/20 (нет реальных PNG / OG 1200×630)
- GEO: 9/10
- **Итого ~89/100** (минус входные данные App Store + ассеты)
