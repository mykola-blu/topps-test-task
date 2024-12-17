import { HALF_HOUR, RAWG_GAMES_ENDPOINT } from '@/lib/constants'
import { NextResponse } from 'next/server'
export const revalidate = HALF_HOUR

export async function GET() {
  const response = await fetch(RAWG_GAMES_ENDPOINT)
  const data = await response.json()
  return NextResponse.json(data)
}
