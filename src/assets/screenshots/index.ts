import type { ImageMetadata } from 'astro'

import gridDark from './grid/dark.png'
import gridLight from './grid/light.png'
import hotkeysDark from './hotkeys/dark.png'
import hotkeysLight from './hotkeys/light.png'
import settingsDark from './settings/dark.png'
import settingsLight from './settings/light.png'

type ScreenshotPair = {
  light: ImageMetadata
  dark: ImageMetadata
}

export const screenshots = {
  grid: { light: gridLight, dark: gridDark },
  hotkeys: { light: hotkeysLight, dark: hotkeysDark },
  settings: { light: settingsLight, dark: settingsDark },
} as const satisfies Record<string, ScreenshotPair>

export type ScreenshotName = keyof typeof screenshots
