import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session;

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          aria-label="Hero background gaming image"
          style={{ backgroundImage: "url('/hero-games.jpg')" }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <article className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Topps Games
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Step into a world where gaming meets collecting. Earn diamonds, unlock exclusive content, and compete with players worldwide. With Topps Games, every match brings you closer to the top of the leaderboard. Experience gaming with a competitive edge - collect, play, and climb the ranks.
            </p>
            <nav className="flex flex-wrap gap-4">
              {isAuthenticated ? (
                <>
                  <a 
                    href="/dashboard" 
                    className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors duration-200"
                    role="button"
                  >
                    Go to Dashboard
                  </a>
                  <a 
                    href="/games" 
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-200"
                    role="button"
                  >
                    Browse Games
                  </a>
                </>
              ) : (
                <>
                  <a 
                    href="/auth" 
                    className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors duration-200"
                    role="button"
                  >
                    Sign In
                  </a>
                  <a 
                    href="/games" 
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-colors duration-200"
                    role="button"
                  >
                    Browse Games
                  </a>
                </>
              )}
            </nav>
          </article>
        </div>
      </header>

      {/* Features Section */}
      <section aria-labelledby="features-heading" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="sr-only">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="💎"
              title="Earn Diamonds"
              description="Collect Topps diamonds as you play and unlock exclusive content"
            />
            <FeatureCard
              icon="🏆"
              title="Compete & Win"
              description="Join leaderboards and compete with players worldwide"
            />
            <FeatureCard
              icon="🎮"
              title="Game Library"
              description="Access a vast collection of carefully curated Topps games"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section aria-labelledby="stats-heading" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="1000+" label="Games Available" />
            <StatCard number="50K+" label="Active Players" />
            <StatCard number="100K+" label="Daily Matches" />
          </div>
        </div>
      </section>

      <footer className="bg-background py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 Topps Games. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className="text-center p-6">
      <span className="text-4xl mb-4 block" role="img" aria-label={title}>{icon}</span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </article>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <article className="p-6">
      <strong className="text-3xl font-bold text-primary mb-2 block">{number}</strong>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </article>
  );
}
