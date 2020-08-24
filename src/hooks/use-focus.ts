import { useState, useRef, useEffect } from "react"

export const useFocus = () => {
  const [focus, setFocus] = useState(false)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [focus])

  function toggleFocus() {
    setFocus(focus => !focus)
  }

  return { ref, toggleFocus }
}
