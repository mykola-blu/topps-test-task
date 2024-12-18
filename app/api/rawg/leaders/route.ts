import { FIFTEEN_MINUTES, RAWG_CREATOR_REQUIRED_FIELDS, RAWG_CREATORS_ENDPOINT } from '@/lib/constants'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'

// Imagine that a leaderboard is more dynamic and needs to be updated more frequently
export const revalidate = FIFTEEN_MINUTES

export async function GET() {
  const response = await fetch(RAWG_CREATORS_ENDPOINT)
  const data = await response.json()
  const normalizedData = normalizeRawgData(data, RAWG_CREATOR_REQUIRED_FIELDS)
  return NextResponse.json(normalizedData)
}
