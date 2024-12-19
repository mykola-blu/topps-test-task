import {
  HALF_HOUR,
  RAWG_API_ENDPOINT,
  RAWG_API_KEY_WITH_ANCHORE,
} from '@/lib/constants'
import { handleApiError } from '@/lib/utils/handle-api-error'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug parameter is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const response = await fetch(
      `${RAWG_API_ENDPOINT}games/${slug}${RAWG_API_KEY_WITH_ANCHORE}`,
      { cache: 'no-store' }
    )

    if (!response.ok) {
      throw new Error(`RAWG API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: {
        'Cache-Control': `public, s-maxage=${HALF_HOUR}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return handleApiError(error)
  }
}
