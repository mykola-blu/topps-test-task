// RAWG API endpoints
const RAWG_API_ENDPOINT = 'https://api.rawg.io/api/'
const RAWG_API_KEY_WITH_ANCHORE = `?token&key=${process.env.RAWG_API_KEY}`
export const RAWG_GAMES_ENDPOINT = `${RAWG_API_ENDPOINT}games${RAWG_API_KEY_WITH_ANCHORE}`
export const RAWG_STORES_ENDPOINT = `${RAWG_API_ENDPOINT}stores${RAWG_API_KEY_WITH_ANCHORE}`
export const RAWG_CREATORS_ENDPOINT = `${RAWG_API_ENDPOINT}creators${RAWG_API_KEY_WITH_ANCHORE}`

// RAWG API required fields
export const RAWG_GAME_REQUIRED_FIELDS = ['released', 'background_image', 'rating']

// Time intervals for data revalidation
export const FIFTEEN_MINUTES = 900
export const HALF_HOUR = 1800
export const ONE_HOUR = 3600