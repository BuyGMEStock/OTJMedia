'use client'

import { useEffect } from 'react'

export default function ScrollLock({ 
  isLocked, 
  containerRef 
}: { 
  isLocked: boolean
  containerRef: React.RefObject<HTMLElement>
}) {
  useEffect(() => {
    if (!isLocked || !containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    const containerTop = window.scrollY + containerRect.top
    const containerBottom = containerTop + containerRect.height

    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY
      
      // Allow scrolling within the container bounds
      if (currentScroll < containerTop && e.deltaY > 0) {
        // Scrolling down into container
        return
      } else if (currentScroll > containerBottom && e.deltaY < 0) {
        // Scrolling up into container
        return
      } else if (currentScroll >= containerTop && currentScroll <= containerBottom) {
        // Inside container - allow scrolling
        return
      }
      
      // Prevent scrolling outside container
      e.preventDefault()
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isLocked, containerRef])

  return null
} 