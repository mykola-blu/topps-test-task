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
    <div className="w-full h-screen">
      <section className="border-b border-default-100 w-full h-[10%]">
        {children}
      </section>
      <div className="md:flex w-full h-[90%]  overflow-y-auto">
        <section className="md:w-1/2 border-r border-b md:border-b-0 border-default-100">
          {leaderboard}
        </section>
        <div className=" md:w-1/2 flex flex-col">
          <section className=" border-b border-default-100 w-full md:h-1/2">
            {games}
          </section>
          <section className="w-full md:h-1/2">{stores}</section>
        </div>
      </div>
    </div>
  )
}
