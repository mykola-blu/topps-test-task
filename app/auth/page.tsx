import { getProviders } from 'next-auth/react'
import ProviderButton from './_components/ProviderButton'
import { ONE_HOUR } from '@/lib/constants'

export const revalidate = ONE_HOUR

export default async function Auth() {
  const providers = await getProviders()

  if (!providers) {
    console.error('No providers found')
    return <div>No authentication providers found</div>
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <div className="flex flex-col items-center justify-center">
          {Object.values(providers).map((provider) => (
            <ProviderButton key={provider.name} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  )
}
