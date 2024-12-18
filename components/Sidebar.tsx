'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/topps.svg'
import { Button, cn } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { links } from '@/lib/nav-path-list'
import { AlignJustify, X } from 'lucide-react'
import { useState } from 'react'

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
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative">
      <div
        className={cn(
          'absolute top-8 left-5 z-[101]',
          isOpen ? 'hidden' : 'block',
          'md:hidden'
        )}
      >
        <AlignJustify onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        className={cn(
          'absolute top-8 left-[80vw] z-[101]',
          isOpen ? 'block' : 'hidden',
          'md:hidden'
        )}
      >
        <X onClick={() => setIsOpen(!isOpen)} />
      </div>
      <aside
        className={cn(
          'absolute md:static w-[90vw] md:w-[20vw] h-full border-r border-default-100 bg-background z-[100]',
          isOpen ? 'block' : 'hidden',
          'md:block',
          'transition-all duration-500 ease-in-out'
        )}
      >
        <div className="w-full h-full px-3 relative">
          <div className="mb-12">
            <figure className="w-[80px] pt-4">
              <Image src={Logo} alt="Topps" />
            </figure>
          </div>
          <div>
            {links.map((link) => (
              <div className="w-full" key={link.route}>
                <Link href={link.route}>
                  <div
                    className={cn(
                      `w-full h-full py-2 px-2 hover:bg-secondary rounded-lg `,
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
    </div>
  )
}
