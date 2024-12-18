'use client'

import { SIGN_IN_WITH_PROVIDER } from '@/lib/constants'
import { Button } from '@nextui-org/react'
import { signIn, ClientSafeProvider } from 'next-auth/react'
import Image from 'next/image'

const providerIcons: Record<string, string> = {
  google: '/google-icon.png',
}

export default function ProviderButton({
  provider,
}: {
  provider: ClientSafeProvider
}) {
  return (
    <Button
      startContent={
        <Image
          src={providerIcons[provider.id]}
          alt={provider.name}
          width={20}
          height={20}
        />
      }
      variant="ghost"
      onPress={() => signIn(provider.id, { callbackUrl: '/dashboard' })}
    >
      {SIGN_IN_WITH_PROVIDER} {provider.name}
    </Button>
  )
}
