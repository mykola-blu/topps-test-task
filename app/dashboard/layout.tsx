import { FIFTEEN_MINUTES } from '@/lib/constants'

export const revalidate = FIFTEEN_MINUTES

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {children}
    </main>
  )
}
