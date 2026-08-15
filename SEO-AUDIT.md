# SEO Audit

Дата: 2026-08-15

## Итоговый скоринг: 38/100 → после фикса цель 86/100

### Breakdown (до фикса)
- Meta/Head: 18/30
- Schema: 0/20
- Indexability + Crawlability: 5/20
- Performance + Images: 12/20
- GEO (AI crawlers + llms.txt + signals): 3/10

## Critical (чинить сейчас)
- [x] Файл: `public/robots.txt` (отсутствовал)
  - Симптом: нет правил для краулеров, нет Sitemap
  - Почему: Google и AI-боты не получают явных сигналов индексации
  - Исправление: добавить robots.txt + Sitemap + allow Tier-1 AI crawlers

- [x] Файл: `public/sitemap.xml` (отсутствовал)
  - Симптом: нет карты URL
  - Почему: слабое обнаружение страниц на новом домене
  - Исправление: статический sitemap с `/` и `/privacy/`

- [x] Файл: `src/layouts/Layout.astro`
  - Симптом: нет JSON-LD
  - Почему: нет сущности SoftwareApplication / WebSite в графе
  - Исправление: `@graph` WebSite + Organization + SoftwareApplication

## High (чинить на этой неделе)
- [x] OG/Twitter неполные (`og:image` без width/height/alt, нет `twitter:image`)
- [x] Canonical через `siteConfig`, не через `Astro.site`
- [x] Нет `meta robots`, `og:locale`, apple-touch-icon
- [x] Privacy: title на EN при `lang="ru"`, слабый description
- [x] Скриншоты без width/height → риск CLS; feature alt пустые

## Medium (чинить в этом спринте)
- [x] Нет `content-visibility` ниже фолда
- [x] Нет `llms.txt` (GEO)
- [x] Нет единой trailingSlash стратегии
- [x] Копирайт противоречил продукту («не листай по кругу»)

## Low (по возможности)
- [ ] Реальный App Store ID в `siteConfig.appStoreUrl` (нужны входные данные)
- [ ] OG image 1200×630 вместо app-icon 512×512
- [ ] sameAs (соцсети), когда появятся
- [ ] Preload LCP hero после появления `hero.png`

## Доказательства / ссылки на код
- `src/layouts/Layout.astro` — head/meta/JSON-LD
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`
- `src/config/site.ts` — тексты и URLs
- `astro.config.mjs` — `site`, `trailingSlash: 'always'`
