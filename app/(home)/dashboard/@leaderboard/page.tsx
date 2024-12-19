import { RawgCreator } from 'rawg'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { FIFTEEN_MINUTES, LEADERBOARD_TITLE } from '@/lib/constants'
import LeaderboardSlot from './_components/LeaderboardSlot'

export default async function Leaders() {
  const headers = await getHeadersForApiCall()
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/leaders`,
    {
      headers,
      next: { revalidate: FIFTEEN_MINUTES },
    }
  ).then((res) => res.json())

  return (
    <div className="h-full py-2 px-4 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-1">{LEADERBOARD_TITLE}</h2>
      {data.map((creator: RawgCreator, index: number) => (
        <LeaderboardSlot key={creator.id} creator={creator} rank={index + 1} />
      ))}
    </div>
  )
}
