'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/globe.svg'
import { Button, cn } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { links } from '@/lib/nav-path-list'

function isActiveRoute(path: string, route: string): boolean {
  if (route === '/dashboard') {
    return path === '/dashboard'
  } else {
    return path.includes(route)
  }
}

export default function Sidebar() {
  const activeClass = 'bg-primary hover:bg-primary'
  const path = usePathname()

  return (
    <aside className="w-[200px] min-w-[200px] max-w-[200px] h-full border-r border-default-50">
      <div className="w-full h-full px-3 relative">
        <div className="mb-12">
          <figure className="w-[80px] pt-4">
            <Image src={Logo} alt="pardy" />
          </figure>
        </div>
        <div>
          {links.map((link) => (
            <div className="w-full" key={link.route}>
              <Link href={link.route}>
                <div
                  className={cn(
                    `w-full h-full py-2 px-2 hover:bg-content1 rounded-lg `,
                    isActiveRoute(path, link.route) && activeClass
                  )}
                >
                  {link.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full left-0 px-4 mb-4">
          <Button fullWidth variant="ghost">
            Sign Out
          </Button>
        </div>
      </div>
    </aside>
  )
}
