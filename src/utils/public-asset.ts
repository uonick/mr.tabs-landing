import { existsSync } from 'node:fs'
import { join } from 'node:path'

export const publicAssetExists = (path: string | undefined): path is string => {
  if (!path) {
    return false
  }

  return existsSync(join(process.cwd(), 'public', path.replace(/^\//, '')))
}
