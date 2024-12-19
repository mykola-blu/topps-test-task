import { HALF_HOUR, RAWG_GAME_REQUIRED_FIELDS, RAWG_GAMES_ENDPOINT } from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'
import { RawgGame } from 'rawg'

export const revalidate = HALF_HOUR

export async function GET() {
  try {
    const response = await fetch(`${RAWG_GAMES_ENDPOINT}&page_size=32`)
    
    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const normalizedData = normalizeRawgData(data, RAWG_GAME_REQUIRED_FIELDS) as RawgGame[]
    return NextResponse.json(normalizedData.sort((a, b) => b.rating - a.rating))
  } catch (error) {
    return handleApiError(error)
  }
}
