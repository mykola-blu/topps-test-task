import BoardSlot from '@/components/BoardSlot'
import { GAMES_DASHBOARD_TITLE } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgGame } from 'rawg'
import GameSlot from './_components/GameSlot'

export default async function Games() {
  const headers = await getHeadersForApiCall()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/games`, {
      headers,
    })
  ).json()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{GAMES_DASHBOARD_TITLE}</h2>
      {data.slice(0, 6).map((game: RawgGame) => (
        <GameSlot key={game.id} game={game} />
      ))}
    </div>
  )
}
