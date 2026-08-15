# mr.tabs landing

Лендинг для [mr.tabs](https://mrtabs.ru) — переключатель приложений для macOS.

## Dev

```sh
npm install
npm run dev
```

Фон-сервер: `astro dev --background` · `astro dev stop` · `astro dev status`

## Скриншоты

PNG в `public/images/` (пары light/dark, выбор по `prefers-color-scheme`):

| Пара | Куда |
| --- | --- |
| `settings-*.png` | Hero, focus |
| `grid-*.png` | Фича «Сетка» |
| `hotkeys-*.png` | Фича «Хоткеи» |

## Страницы приложения

Совпадают с `AppConfig.plist` в mr.tabs:

| Путь | Страница |
| --- | --- |
| `/` | Лендинг |
| `/documentation/` | Документация |
| `/privacy/` | Конфиденциальность |

Поддержка ведёт на `supportUrl` (сейчас uonick.com).

## SEO

Артефакты: `SEO-AUDIT.md`, `SEO-FIX-PLAN.md`, `SEO-VERIFY.md`, `SEO-GOOGLE.md`.
