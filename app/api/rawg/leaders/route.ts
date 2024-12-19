import { FIFTEEN_MINUTES, RAWG_CREATOR_REQUIRED_FIELDS, RAWG_CREATORS_ENDPOINT } from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { RawgCreator } from 'rawg'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export async function GET() {
  try {
    const response = await fetch(`${RAWG_CREATORS_ENDPOINT}&page_size=20`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const normalizedData = normalizeRawgData(data, RAWG_CREATOR_REQUIRED_FIELDS) as RawgCreator[]
    
    return new Response(JSON.stringify(normalizedData.sort((a, b) => b.games_count - a.games_count)), {
      headers: {
        'Cache-Control': `public, s-maxage=${FIFTEEN_MINUTES}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return handleApiError(error)
  }
}
