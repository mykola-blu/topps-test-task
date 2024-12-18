import { RawgCreator } from 'rawg'
import { headers } from 'next/headers'

export default async function Leaders() {
  const headersList = await headers()
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/leaders`, {
      headers: {
        cookie: headersList.get('cookie') || '',
      },
    })
  ).json()

  return (
    <div>
      {data.map(({ name, games_count, id }: RawgCreator) => (
        <div key={id}>
          {name} - {games_count}
        </div>
      ))}
    </div>
  )
}
