import { useLayoutEffect } from "react"

export function useLockBodyScroll() {
  useLayoutEffect(() => {
    const headerSelector = document.querySelector("header")
    const heroSelector = document.querySelectorAll("section")[0]
    const featuresSelector = document.querySelectorAll("section")[1]
    const templatesSelector = document.querySelectorAll("section")[2]
    const footerSelector = document.querySelector("footer")

    headerSelector.style.opacity = "0"
    heroSelector.style.opacity = "0"
    featuresSelector.style.opacity = "0"
    templatesSelector.style.opacity = "0"
    footerSelector.style.opacity = "0"

    const originalStyle = window.getComputedStyle(document.body).overflow

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalStyle

      headerSelector.style.opacity = "1"
      heroSelector.style.opacity = "1"
      featuresSelector.style.opacity = "1"
      templatesSelector.style.opacity = "1"
      footerSelector.style.opacity = "1"
    }
  }, [])
}
