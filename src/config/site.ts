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
  appStoreUrl: "https://apps.apple.com/us/app/mr-tabs/id6801542683",
  supportUrl: "https://uonick.com/#contact",
  author: "uonick",
  authorUrl: "https://uonick.com",
  copyrightYear: 2026,
  paths: {
    privacy: "/privacy/",
    documentation: "/documentation/",
  },
} as const;
