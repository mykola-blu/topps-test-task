export default function DashboardLayout({
  children,
  games,
  stores,
  leaderboard,
}: {
  children: React.ReactNode
  games: React.ReactNode
  stores: React.ReactNode
  leaderboard: React.ReactNode
}) {
  return (
    <div className="w-full h-full">
      <section className="border-b border-default-50 w-full h-[10%]">
        {children}
      </section>
      <div className="flex w-full h-[90%]">
        <section className="w-1/2 border-r border-default-50">
          {leaderboard}
        </section>
        <div className=" w-1/2 flex flex-col">
          <section className=" border-b border-default-50 w-full h-1/2">
            {games}
          </section>
          <section className="w-full h-1/2">{stores}</section>
        </div>
      </div>
    </div>
  )
}
