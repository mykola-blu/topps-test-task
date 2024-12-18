import { FIFTEEN_MINUTES, RAWG_CREATOR_REQUIRED_FIELDS, RAWG_CREATORS_ENDPOINT } from '@/lib/constants'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'
import { RawgCreator } from 'rawg'

// Imagine that a leaderboard is more dynamic and needs to be updated more frequently
export const revalidate = FIFTEEN_MINUTES

export async function GET() {
  const response = await fetch(`${RAWG_CREATORS_ENDPOINT}&page_size=20`)
  const data = await response.json()
  const normalizedData = normalizeRawgData(data, RAWG_CREATOR_REQUIRED_FIELDS) as RawgCreator[]
  return NextResponse.json(normalizedData.sort((a, b) => b.games_count - a.games_count))
}
