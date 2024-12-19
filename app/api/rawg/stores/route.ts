import { HALF_HOUR, RAWG_STORE_REQUIRED_FIELDS, RAWG_STORES_ENDPOINT } from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'
import { RawgStore } from 'rawg'

export const revalidate = HALF_HOUR

export async function GET() {
  try {
    const response = await fetch(RAWG_STORES_ENDPOINT)
    
    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    const normalizedData = normalizeRawgData(data, RAWG_STORE_REQUIRED_FIELDS) as RawgStore[]
    return NextResponse.json(normalizedData.sort((a, b) => b.games_count - a.games_count))
  } catch (error) {
    return handleApiError(error)
  }
}
