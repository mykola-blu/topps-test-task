import BoardSlot from '@/components/BoardSlot'
import { RATING_TITLE } from '@/lib/constants'
import { RawgGame } from 'rawg'

export default function GameSlot({ game }: { game: RawgGame }) {
  return (
    <BoardSlot imageUrl={game.background_image} link={`/games/${game.slug}`}>
      <div className="px-4 flex justify-between items-center">
        <p className="text-sm text-gray-900 font-bold bg-white bg-opacity-60 rounded-md py-1 px-2">
          {game.name}
        </p>
        <p className="text-sm text-gray-600 bg-white bg-opacity-60 rounded-md py-1 px-2">
          {RATING_TITLE}{' '}
          <span className="font-bold text-gray-800">{game.rating}</span>
        </p>
      </div>
    </BoardSlot>
  )
}
