import { useLayoutEffect } from "react"

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    const heroSelector = document.querySelectorAll("section")[0]
    const featuresSelector = document.querySelectorAll("section")[1]
    const footerSelector = document.querySelector("footer")

    heroSelector.style.opacity = "0"
    featuresSelector.style.opacity = "0"
    footerSelector.style.opacity = "0"

    const originalStyle = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalStyle

      heroSelector.style.opacity = "1"
      featuresSelector.style.opacity = "1"
      footerSelector.style.opacity = "1"
    }
  }, [])
}
