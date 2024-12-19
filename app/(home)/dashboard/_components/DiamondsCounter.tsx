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

  // Hacky way to provide smooth ui with loading state
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }, [])

  return (
    <div className="flex items-center">
      {isLoading ? (
        <Spinner className="mx-5" size="sm" />
      ) : (
        <div className="text-primary text-3xl mx-5 bg-gray-200/30 rounded-md px-3">{diamonds}</div>
      )}
      <Button
        startContent={<Diamond />}
        endContent={<Diamond />}
        onPress={incrementDiamonds}
        className=" text-secondary"
        variant="ghost"
      >
        {BUY_DIAMONDS}
      </Button>
    </div>
  )
}
