'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const Heading = pathname === '/' ? 'h1' : 'p'

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Heading className="font-medium">
          <Link href="/">Simanga Hendry Khoza</Link>
        </Heading>
        <TextEffect as="p" preset="fade" per="char" className="" delay={0.5}>
          Full-stack software developer
        </TextEffect>
      </div>
    </header>
  )
}
