export default function DashboardLayout({
  children, games, stores, leaderboard
}: {
  children: React.ReactNode
  games: React.ReactNode
  stores: React.ReactNode
  leaderboard: React.ReactNode
}) {
  return <div>
    {children}
    {games}
    {stores}
    {leaderboard}
  </div>
}
