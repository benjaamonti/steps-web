import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseScrollRevealOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = '0px',
}: UseScrollRevealOptions = {}) {
  const [isRevealed, setIsRevealed] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView) {
      setIsRevealed(true)
    }
  }, [inView])

  return { ref, isRevealed }
}
