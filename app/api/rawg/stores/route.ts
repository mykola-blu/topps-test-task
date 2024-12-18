import { HALF_HOUR, RAWG_STORE_REQUIRED_FIELDS, RAWG_STORES_ENDPOINT } from '@/lib/constants'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'
import { RawgStore } from 'rawg'

export const revalidate = HALF_HOUR

export async function GET() {
  const response = await fetch(RAWG_STORES_ENDPOINT)
  const data = await response.json()
  const normalizedData = normalizeRawgData(data, RAWG_STORE_REQUIRED_FIELDS) as RawgStore[]
  return NextResponse.json(normalizedData.sort((a, b) => b.games_count - a.games_count))
}
