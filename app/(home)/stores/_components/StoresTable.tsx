'use client'

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import { RawgStore } from 'rawg'
import { SquareArrowOutUpRight } from 'lucide-react'
import { useCallback } from 'react'
import Link from 'next/link'
import ImageModal from '@/components/ImageModal'

const columns: { key: keyof RawgStore; label: string }[] = [
  { key: 'name', label: 'Name' },
  { key: 'games_count', label: 'Games count' },
  { key: 'image_background', label: 'Image' },
]

export default function StoresTable({ stores }: { stores: RawgStore[] }) {
  const renderCell = useCallback(
    (store: RawgStore, columnKey: keyof RawgStore) => {
      const cellValue = store[columnKey]
      switch (columnKey) {
        case 'name':
          return (
            <Link
              className="hover:underline hover:text-primary font-bold font-xl flex"
              target="_blank"
              href={`https://${store.domain}`}
            >
              <span className="mr-1">{cellValue}</span>
              <SquareArrowOutUpRight size={10} />
            </Link>
          )
        case 'games_count':
          return (
            <span className="font-bold font-xs text-gray-500">{cellValue}</span>
          )
        case 'image_background':
          return <ImageModal image={cellValue as string} alt={store.name} />
      }
    },
    []
  )
  return (
    <Table isStriped aria-label="Stores table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={stores}>
        {(store) => (
          <TableRow key={store.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(store, columnKey as keyof RawgStore)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
