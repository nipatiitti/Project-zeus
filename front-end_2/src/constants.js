/**
 * Define some frequent-use constants
 * for easier import inside components
 */

import info from './info.json'

const INFO = info ? info : null

if (!info) console.error('src/info.js missing')

export default INFO

// Path to images directory
export const IMAGE_PATH = `${process.cwd()}src/assets/images`
// Path to icons directory
export const ICON_PATH = `${process.cwd()}src/assets/icons`
// Key redux persist
export const PERSIST_KEY = 'root'
