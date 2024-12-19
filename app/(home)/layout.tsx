import Sidebar from '@/components/Sidebar'

export const revalidate = 900

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
