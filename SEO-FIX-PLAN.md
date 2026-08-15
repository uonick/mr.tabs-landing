# SEO Fix Plan

## Quick wins (1–2 часа)
- [x] `public/robots.txt` + Sitemap
- [x] `public/sitemap.xml` для `/` и `/privacy/`
- [x] Полный OG/Twitter + `meta robots`
- [x] JSON-LD `@graph` (WebSite, Organization, SoftwareApplication)
- [x] Canonical через `Astro.site`
- [x] Уникальные title/description для privacy (RU)
- [x] Alt и width/height у скриншотов
- [x] `content-visibility: auto` на секциях ниже фолда
- [x] `trailingSlash: 'always'`
- [x] `public/llms.txt`
- [x] Переписать оффер: акцент на сетке при том же ⌘Tab (humanizer-ru)

## Medium scope (0.5–1 день)
- [ ] Заменить placeholder App Store URL на реальный
- [ ] Добавить `og-image.jpg` 1200×630 после готовых скринов
- [ ] Preload `/images/hero.png` когда файл появится

## Larger refactor (1–3 дня)
- [ ] Генерация sitemap на билде, если страниц станет больше
- [ ] Search Console + проверка URL Inspection после деплоя

## Нужны входные данные
- [ ] Реальный App Store ID / URL
- [ ] sameAs (соцсети), если нужны
- [ ] Финальные PNG скриншоты в `public/images/`
