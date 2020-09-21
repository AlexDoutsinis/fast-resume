import { useState, useEffect } from 'react'

type Width = {
  width: number
}

export const useViewport = (): Width => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : null,
  )

  useEffect(() => {
    const handleWindowResize = () =>
      setWidth(typeof window !== 'undefined' ? window.innerWidth : null)

    if (typeof window !== 'undefined')
      window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}
