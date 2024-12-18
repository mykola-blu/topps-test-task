import BoardSlot from '@/components/BoardSlot'
import { STORES_DASHBOARD_TITLE } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgStore } from 'rawg'  

export default async function Stores() {
  const headers = await getHeadersForApiCall()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/stores`, {
      headers,
    })
  ).json()

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{STORES_DASHBOARD_TITLE}</h2>
      {data.slice(0, 6).map((store: RawgStore) => (
        <BoardSlot key={store.id}>{store.name} - {store.games_count}</BoardSlot>
      ))}
    </div>
  )
}
