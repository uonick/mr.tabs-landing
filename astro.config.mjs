// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  site: 'https://mrtabs.ru',
  trailingSlash: 'always',
  fonts: [
    {
      name: 'Figtree',
      cssVariable: '--font-figtree',
      provider: fontProviders.fontsource(),
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      formats: ['woff2'],
    },
    {
      name: 'Syne',
      cssVariable: '--font-syne',
      provider: fontProviders.fontsource(),
      weights: ['500 700'],
      styles: ['normal'],
      subsets: ['latin'],
      formats: ['woff2'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDirectory, 'src'),
      },
    },
  },
})
