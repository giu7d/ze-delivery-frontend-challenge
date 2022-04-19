import { useEffect } from 'react'
import { useDebounce } from './useDebounce'

export function useScrollListener(callback = () => {}) {
  const debouncedCallback = useDebounce(callback)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 250
    ) {
      debouncedCallback()
    }
  }
}
