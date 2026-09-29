import release from "./release.json";

export const siteConfig = {
  name: "mr.tabs",
  tagline: "Замена ⌘Tab на macOS",
  headline: [
    "Замена стандартного ⌘Tab в macOS",
    "Переключатель, который работает",
  ] as const,
  lead: "Подменяет штатный переключатель приложений. При нажатии сочетания, получишь настраиваемую сетку с приложениями",
  description:
    "Замена стандартного ⌘Tab на macOS. Сетка всех запущенных приложений вместо системной полоски. Бесплатно, без аккаунта.",
  siteUrl: "https://mrtabs.ru",
  version: release.version,
  downloadUrl: `https://github.com/uonick/mr.tabs-landing/releases/download/${release.version}/${release.file}`,
  supportUrl: "https://uonick.com/#contact",
  author: "uonick",
  authorUrl: "https://uonick.com",
  copyrightYear: 2026,
  paths: {
    privacy: "/privacy/",
    documentation: "/documentation/",
  },
} as const;
