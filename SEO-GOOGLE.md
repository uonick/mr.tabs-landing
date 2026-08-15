# SEO (Google Starter Guide)

Дата: 2026-08-15  
Сайт: https://mrtabs.ru/  
Цель: посадочная macOS-приложения mr.tabs

## Сводка

Техническая база для обнаружения и понимания страниц закрыта: robots, sitemap, canonical, уникальные title/description, JSON-LD SoftwareApplication. Главный контентный акцент сдвинут на сетку при привычном ⌘Tab (без ложного «не листай»). Дальше упирается в реальный App Store URL, OG 1200×630 и Search Console после деплоя.

## Находки (после фикса)

### Critical / High
- **[High, входные данные]** Placeholder App Store URL в `siteConfig` и Offer schema - подменить ID после публикации
- **[Medium]** OG image = app-icon 512×512 - для сниппетов лучше 1200×630

### Medium / Low
- **[Low]** Нет внешних ссылок на обзоры/доку - нормально для MVP лендинга
- **[Low]** keywords meta не используем (Google игнорирует)

## Соответствие чеклисту Google

| Блок | Статус |
| --- | --- |
| Обнаружение / индексация | robots + sitemap + внутренние ссылки Header/Footer |
| Структура | `/`, `/privacy/`; canonical self-ref; trailing slash единый |
| Контент | Уникальный RU-текст, один h1, полезное описание продукта |
| SERP | Уникальные title/description на главной и privacy |
| Медиа | Informative alt; размеры на img; hero eager + fetchpriority |
| Ссылки | Privacy/Support с понятным anchor; App Store CTA |

## Мифы (если релевантно)

- Не гоняемся за «оптимальной длиной» текста и плотностью ключей
- E-E-A-T не как отдельный рычаг: локальность и Accessibility описаны прямо в privacy

## Следующие шаги

1. Вписать реальный App Store URL
2. Залить PNG в `public/images/` и сделать `og-image.jpg`
3. После деплоя: Search Console, URL Inspection, `site:mrtabs.ru`
