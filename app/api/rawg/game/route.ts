import {
  HALF_HOUR,
  RAWG_API_ENDPOINT,
  RAWG_API_KEY_WITH_ANCHORE,
} from '@/lib/constants'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = HALF_HOUR

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug') || ''
  const response = await fetch(
    `${RAWG_API_ENDPOINT}games/${slug}${RAWG_API_KEY_WITH_ANCHORE}`
  )
  const data = await response.json()
  return NextResponse.json(data)
}
