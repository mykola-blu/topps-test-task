import { HALF_HOUR, RAWG_GAME_REQUIRED_FIELDS, RAWG_GAMES_ENDPOINT } from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { RawgGame } from 'rawg'

export async function GET() {
  try {
    const response = await fetch(`${RAWG_GAMES_ENDPOINT}&page_size=32`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const normalizedData = normalizeRawgData(data, RAWG_GAME_REQUIRED_FIELDS) as RawgGame[]
    
    return new Response(JSON.stringify(normalizedData.sort((a, b) => b.rating - a.rating)), {
      headers: {
        'Cache-Control': `public, s-maxage=${HALF_HOUR}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return handleApiError(error)
  }
}
