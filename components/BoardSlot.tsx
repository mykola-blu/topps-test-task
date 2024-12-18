'use client'

import { Card, CardBody } from '@nextui-org/react'

export default function BoardSlot({ children }: { children: React.ReactNode }) {
  return (
    <Card shadow="none" radius="sm" className="w-full mb-1 border-1 border-gray-200">
      <CardBody className="p-2">{children}</CardBody>
    </Card>
  )
}
