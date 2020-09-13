import { useRef } from 'react'

const scrollToRef = (ref: React.MutableRefObject<HTMLElement>) =>
  window.scrollTo(0, ref.current.offsetTop)

export const useScroll = () => {
  const ref = useRef<HTMLElement>(null)
  const executeScroll = () => scrollToRef(ref)

  return { ref, executeScroll }
}
