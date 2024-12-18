import { HALF_HOUR, RAWG_STORE_REQUIRED_FIELDS, RAWG_STORES_ENDPOINT } from '@/lib/constants'
import { normalizeRawgData } from '@/lib/utils/rawg-data-normalizer'
import { NextResponse } from 'next/server'

export const revalidate = HALF_HOUR

export async function GET() {
  const response = await fetch(RAWG_STORES_ENDPOINT)
  const data = await response.json()
  const normalizedData = normalizeRawgData(data, RAWG_STORE_REQUIRED_FIELDS)
  return NextResponse.json(normalizedData)
}
