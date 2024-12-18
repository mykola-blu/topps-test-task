import BoardSlot from '@/components/BoardSlot'
import { RawgStore } from 'rawg'

export default function StoreSlot({ store }: { store: RawgStore }) {
  return (
    <BoardSlot imageUrl={store.image_background} link={`https://${store.domain}`}>
      <div className="px-4 flex justify-between items-center">
        <p className="text-sm text-gray-800 font-bold bg-white bg-opacity-60 rounded-md py-1 px-2">
          {store.name}
        </p>
        <p className="text-sm text-gray-600 bg-white bg-opacity-60 rounded-md py-1 px-2">
          Games:{' '}
          <span className="font-bold text-gray-800">{store.games_count}</span>
        </p>
      </div>
    </BoardSlot>
  )
}
