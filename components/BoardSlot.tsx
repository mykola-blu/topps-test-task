'use client'

import { Card, CardBody, cn } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function BoardSlot({
  children,
  imageUrl,
  link
}: {
  children: React.ReactNode
  imageUrl?: string
  link?: string
}) {
  const router = useRouter()
  return (
    <Card
      shadow="none"
      radius="sm"
      className={cn(
        'w-full mb-2 border-1 border-gray-200 transition-all duration-200',
        link && 'hover:scale-[1.02] hover:shadow-md hover:border-gray-300'
      )}
      isPressable={!!link}
      onPress={() => {
        if (link) {
          router.push(link)
        }
      }}
    >
      {imageUrl && <Image fill src={imageUrl} alt="." className="object-cover" />}
      <CardBody className="p-2">{children}</CardBody>
    </Card>
  )
}
