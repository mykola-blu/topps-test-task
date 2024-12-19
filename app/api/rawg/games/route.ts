import { HALF_HOUR, RAWG_GAME_REQUIRED_FIELDS, RAWG_GAMES_ENDPOINT } from '@/lib/constants'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { RawgGame } from 'rawg'
import { NextResponse } from 'next/server'

export const revalidate = HALF_HOUR

export async function GET() {
  const response = await fetch(`${RAWG_GAMES_ENDPOINT}&page_size=32`)
  const data = await response.json()
  const normalizedData = normalizeRawgData(data, RAWG_GAME_REQUIRED_FIELDS) as RawgGame[]
  return NextResponse.json(normalizedData.sort((a, b) => b.rating - a.rating))
}
