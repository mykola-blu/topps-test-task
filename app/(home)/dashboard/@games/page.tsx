import { GAMES_DASHBOARD_TITLE, HALF_HOUR } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgGame } from 'rawg'
import GameSlot from './_components/GameSlot'

export default async function Games() {
  const headers = await getHeadersForApiCall()
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/games`,
    {
      headers,
      next: { revalidate: HALF_HOUR },
    }
  ).then((res) => res.json())

  return (
    <div className="py-2 px-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-1">{GAMES_DASHBOARD_TITLE}</h2>
      {data.slice(0, 6).map((game: RawgGame) => (
        <GameSlot key={game.id} game={game} />
      ))}
    </div>
  )
}
