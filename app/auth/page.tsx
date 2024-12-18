import { getProviders } from 'next-auth/react'
import ProviderButton from './_components/ProviderButton'
import { ONE_HOUR, SIGN_IN_BACK_TO_MAIN_PAGE, SIGN_IN_SUBTITLE, SIGN_IN_TITLE } from '@/lib/constants'
import Link from 'next/link'

export const revalidate = ONE_HOUR

export default async function Auth() {
  const providers = await getProviders()

  if (!providers) {
    console.error('No providers found')
    return <div>No authentication providers found</div>
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="border border-default-200 shadow-md rounded-md py-12 px-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{SIGN_IN_TITLE}</h1>
        <p className="text-sm text-gray-400 mb-1">{SIGN_IN_SUBTITLE}</p>
        <div className="flex flex-col items-center justify-center my-4">
          {Object.values(providers).map((provider) => (
            <ProviderButton key={provider.name} provider={provider} />
          ))}
        </div>
        <Link className="hover:underline hover:text-secondary text-xs text-gray-400" href="/">{SIGN_IN_BACK_TO_MAIN_PAGE}</Link>

      </div>
    </section>
  )
}
