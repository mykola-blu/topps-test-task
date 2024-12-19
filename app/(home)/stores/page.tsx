import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import { HALF_HOUR, STORES_TITLE } from '@/lib/constants'
import StoresTable from './_components/StoresTable'

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
    <section className="w-full h-full p-6">
      <h1 className="text-2xl font-bold mb-5 text-center md:text-left">
        {STORES_TITLE}
      </h1>
      <StoresTable stores={data} />
    </section>
  )
}
