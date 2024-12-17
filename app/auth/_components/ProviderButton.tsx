'use client'

import { signIn, ClientSafeProvider } from 'next-auth/react'

export default function ProviderButton({
  provider,
}: {
  provider: ClientSafeProvider
}) {
  return (
    <button onClick={() => signIn(provider.id, { callbackUrl: '/dashboard' })}>
      Sign in with {provider.name}
    </button>
  )
}
