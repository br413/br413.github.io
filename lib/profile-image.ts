import fs from 'fs'
import path from 'path'

const CANDIDATES = ['profile.jpg', 'profile.jpeg', 'profile.png', 'profile.webp']

/**
 * Build-time check for a portrait photo in public/.
 * Drop a file named profile.jpg (or .png/.webp) there and rebuild —
 * the portrait appears on the home hero, resume header, and contact page.
 */
export function getProfileImage(): string | null {
  for (const name of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), 'public', name))) {
      return `/${name}`
    }
  }
  return null
}
