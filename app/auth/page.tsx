import { getProviders } from 'next-auth/react'
import ProviderButton from './_components/ProviderButton'

export const revalidate = 3600

export default async function Auth() {
  const providers = await getProviders()

  if (!providers) {
    return <div>No providers found</div>
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
