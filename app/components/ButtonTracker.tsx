'use client'
import { useEffect } from 'react'

export default function ButtonTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-track]')
      if (!el) return
      const name = (el as HTMLElement).dataset.track
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'cta_click', { button: name })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
