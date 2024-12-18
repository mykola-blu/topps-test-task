'use client'

import { Button } from '@nextui-org/react'

export default function HomeError({ reset }: { reset: () => void }) {
  return (
    <div className="h-full flex justify-center items-center">
      <div className='flex flex-col justify-center'>
        <h2 className='mb-2'>Something wrong is happend :(</h2>
        <Button onPress={() => reset()}>Try again</Button>
      </div>
    </div>
  )
}
