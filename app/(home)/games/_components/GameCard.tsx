'use client'

import { RATING_TITLE } from '@/lib/constants'
import { Card, CardFooter, cn, Image } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { RawgGame } from 'rawg'

export default function GameDetailsCard({ game }: { game: RawgGame }) {
  const router = useRouter()
  const { name, background_image, rating, released, slug } = game
  return (
    <Card
      onPress={() => router.push(`/games/${slug}`)}
      isPressable
      shadow="sm"
      isFooterBlurred
      className="min-h-[24vh] border-1 border-gray-50 hover:border-gray-100 hover:scale-105 transition-all duration-200"
    >
      <Image
        src={background_image}
        alt={name}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
      />
      <CardFooter className="absolute h-1/3 bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-4">
        <div className="flex flex-col gap-2 w-full">
          <p
            className={cn(
              name.length > 25 ? 'md:text-xs' : 'md:text-base',
              name.length > 33 ? 'lg:text-xs' : 'lg:text-base',
              name.length > 30 ? 'xl:text-xs' : 'xl:text-base',
              'font-bold text-left'
            )}
          >
            {name}
          </p>
          <div className="flex flex-row justify-between items-center w-full">
            <p className="text-sm text-gray-800">{released}</p>
            <div className="flex gap-2 items-center">
              <p className="text-xs text-gray-600">{RATING_TITLE}</p>
              <p className="text-sm text-gray-700 font-bold">{rating}</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
