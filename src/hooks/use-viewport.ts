import { useState, useEffect } from 'react'

type Width = {
  width: number
}

export const useViewport = (): Width => {
  const [width, setWidth] = useState(window?.innerWidth || null)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window?.innerWidth || null)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}
