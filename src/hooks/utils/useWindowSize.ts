import { useLayoutEffect, useState } from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useLayoutEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerWidth)
    }

    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  return { width, height }
}
