'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="font-medium">
          <Link href="/">Simanga Hendry Khoza</Link>
        </h1>
        <TextEffect as="p" preset="fade" per="char" className="" delay={0.5}>
          Full-stack software developer
        </TextEffect>
      </div>
    </header>
  )
}
