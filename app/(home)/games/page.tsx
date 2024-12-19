import { GAMES_TITLE } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgGame } from 'rawg'
import GameCard from './_components/GameCard'

export default async function Games() {
  const headers = await getHeadersForApiCall()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/games`, {
      headers,
    })
  ).json()
  return (
    <section className="w-full h-full py-6 flex flex-col">
      <h1 className="text-2xl font-bold ml-6 text-center md:text-left">
        {GAMES_TITLE}
      </h1>
      <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto flex-1">
        {data.map((game: RawgGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  )
}
