import { HALF_HOUR, STORES_DASHBOARD_TITLE } from '@/lib/constants'
import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { RawgStore } from 'rawg'
import StoreSlot from './_components/StoreSlot'

export default async function Stores() {
  const headers = await getHeadersForApiCall()
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/stores`,
    {
      headers,
      next: { revalidate: HALF_HOUR },
    }
  ).then((res) => res.json())

  return (
    <div className="py-2 px-4 overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-1">{STORES_DASHBOARD_TITLE}</h2>
      {data.slice(0, 6).map((store: RawgStore) => (
        <StoreSlot key={store.id} store={store} />
      ))}
    </div>
  )
}
