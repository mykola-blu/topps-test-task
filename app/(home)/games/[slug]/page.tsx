import { getHeadersForApiCall } from '@/lib/utils/get-headers-for-api-call'
import createDOMPurify from 'isomorphic-dompurify'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { HALF_HOUR } from '@/lib/constants'

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const headers = await getHeadersForApiCall()
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/rawg/game?slug=${slug}`,
    {
      headers,
      next: { revalidate: HALF_HOUR }
    }
  ).then(res => res.json())
  const { name, background_image, rating, released, description, website, playtime } =
    data
  const sanitizedDescription = createDOMPurify.sanitize(description)
  return (
    <section className="w-full min-h-screen flex flex-col gap-3 overflow-x-hidden">
      <div 
        className="relative w-full h-[40vh] mb-4 md:mb-6"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-10">
          <h1 className="flex items-center text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            {name}
            {website && (
              <Link className='ml-2 md:ml-3 hover:opacity-75 transition-opacity' href={website} target="_blank">
                <SquareArrowOutUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            )}
          </h1>
          <div className="flex flex-wrap gap-3 md:gap-7 items-center text-white/90">
            <p className="text-xs md:text-sm">
              {'Released: '}
              <span className="font-bold">{released}</span>
            </p>
            <p className="text-xs md:text-sm">
              {'Rating: '}
              <span className="font-bold">{rating}</span>
            </p>
            <p className="text-xs md:text-sm">
              {'Playtime: '}
              <span className="font-bold">{`${playtime}h`}</span>
            </p>
          </div>
        </div>
      </div>

      <article
        className="prose prose-invert max-w-none text-justify px-4 md:px-6 pb-6"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />
    </section>
  )
}
