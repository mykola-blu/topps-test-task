import {
  HALF_HOUR,
  RAWG_API_ENDPOINT,
  RAWG_API_KEY_WITH_ANCHORE,
} from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = HALF_HOUR

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 })
    }

    const response = await fetch(
      `${RAWG_API_ENDPOINT}games/${slug}${RAWG_API_KEY_WITH_ANCHORE}`
    )

    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return handleApiError(error)
  }
}
