import { FIFTEEN_MINUTES } from '@/lib/constants'
import Sidebar from '@/components/Sidebar'

export const revalidate = FIFTEEN_MINUTES

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="w-[calc(100vw-200px)] ">{children}</main>
    </div>
  )
}
