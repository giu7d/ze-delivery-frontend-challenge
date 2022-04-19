import { useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'

export function useScrollListener(callback = () => {}) {
  const debounceCallback = useMemo(() => debounce(callback, 250), [])

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
      debounceCallback()
    }
  }
}
