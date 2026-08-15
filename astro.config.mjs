// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const rootDirectory = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  site: 'https://mrtabs.ru',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDirectory, 'src'),
      },
    },
  },
})
