import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    try {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } catch {
      console.warn(`Section "${sectionId}" not found`)
    }
  }, [])

  return { scrollToSection }
}