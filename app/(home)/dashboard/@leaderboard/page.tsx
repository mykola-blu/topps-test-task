import { RawgCreator } from 'rawg'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { LEADERBOARD_TITLE } from '@/lib/constants'

export default async function Leaders() {
  const headers = await getHeadersForApiCall()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/leaders`, {
      headers,
    })
  ).json()

  return (
    <div className='p-4'>
      <h2 className="text-2xl font-bold mb-2">{LEADERBOARD_TITLE}</h2>
      {data.map(({ name, games_count, id }: RawgCreator) => (
        <div key={id}>
          {name} - {games_count}
        </div>
      ))}
    </div>
  )
}
