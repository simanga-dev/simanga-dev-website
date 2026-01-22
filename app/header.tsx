'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium ">
          Simanga H. Khoza
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className=""
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
