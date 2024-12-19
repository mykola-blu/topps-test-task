'use client'

import { BUY_DIAMONDS } from '@/lib/constants'
import { useDiamonds } from '@/lib/hooks/use-diamonds'
import { Button, Spinner } from '@nextui-org/react'
import { useEffect } from 'react'
import { useState } from 'react'

function Diamond() {
  return <span className="text-2xl">💎</span>
}

export function DiamondsCounter() {
  const [diamonds, incrementDiamonds] = useDiamonds()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [])

  return (
    <div className="flex items-center">
      {isLoading ? <Spinner className="mx-5" size="sm" /> : <div className="text-primary text-3xl mx-5">{diamonds}</div>}
        <Button
          startContent={<Diamond />}
          endContent={<Diamond />}
          onPress={incrementDiamonds}
          className=" text-secondary"
          variant='ghost'
        >
          {BUY_DIAMONDS}
        </Button>
    </div>
  )
}
