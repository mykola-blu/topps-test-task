'use client'

import { Avatar } from '@nextui-org/react'
import BoardSlot from '@/components/BoardSlot'
import { RawgCreator } from 'rawg'

export default function LeaderboardSlot({
  creator,
  rank,
}: {
  creator: RawgCreator
  rank: number
}) {
  // Use created games count as scored points to make it more leaderboardish
  const { id, name, games_count, image } = creator
  return (
    <BoardSlot key={id}>
      <div className="px-4 grid grid-cols-[1fr_3fr_5fr_1fr] items-center">
        <p className="text-sm text-gray-500">{rank}</p>
        <Avatar src={image} size="sm" name={name} />
        <p className="text-sm text-gray-800 font-bold">{name}</p>
        <p className="text-xs font-bold text-gray-700">{games_count} pts</p>
      </div>
    </BoardSlot>
  )
}
