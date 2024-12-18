import { FIFTEEN_MINUTES } from '@/lib/constants'
import Sidebar from '@/components/Sidebar'

export const revalidate = FIFTEEN_MINUTES

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="w-full md:w-[80vw]">{children}</main>
    </div>
  )
}
