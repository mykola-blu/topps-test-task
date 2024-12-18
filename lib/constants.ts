// RAWG API endpoints
const RAWG_API_ENDPOINT = 'https://api.rawg.io/api/'
const RAWG_API_KEY_WITH_ANCHORE = `?token&key=${process.env.RAWG_API_KEY}`
export const RAWG_GAMES_ENDPOINT = `${RAWG_API_ENDPOINT}games${RAWG_API_KEY_WITH_ANCHORE}`
export const RAWG_STORES_ENDPOINT = `${RAWG_API_ENDPOINT}stores${RAWG_API_KEY_WITH_ANCHORE}`
export const RAWG_CREATORS_ENDPOINT = `${RAWG_API_ENDPOINT}creators${RAWG_API_KEY_WITH_ANCHORE}`

// RAWG API required fields
export const RAWG_GAME_REQUIRED_FIELDS = ['released', 'background_image', 'rating']
export const RAWG_STORE_REQUIRED_FIELDS = ['domain', 'games_count', 'image_background']
export const RAWG_CREATOR_REQUIRED_FIELDS = ['games_count', 'image']

// Time intervals for data revalidation
export const FIFTEEN_MINUTES = 900
export const HALF_HOUR = 1800
export const ONE_HOUR = 3600

// Titles
export const DASHBOARD_TITLE = 'Your Diamonds'
export const LEADERBOARD_TITLE = 'Leaderboard'
export const STORES_DASHBOARD_TITLE = 'Top Stores'
export const GAMES_DASHBOARD_TITLE = 'Top Games'
export const SIGN_IN_TITLE = 'Sign in'
export const SIGN_IN_SUBTITLE = 'or create new account'
export const SIGN_IN_WITH_PROVIDER = 'Continue with'
export const SIGN_IN_BACK_TO_MAIN_PAGE = 'Back to the main page'
export const STORES_TITLE = 'Stores'
export const GAMES_TITLE = 'Games'
