import { GAMES_DASHBOARD_TITLE } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgGame } from 'rawg'

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
      {data.slice(0, 7).map((game: RawgGame) => (
        <div key={game.id}>{game.name} - {game.rating}</div>
      ))}
    </div>
  )
}
