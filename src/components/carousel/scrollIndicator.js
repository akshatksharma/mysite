import React, { useState, useEffect } from "react"

const ScrollIndicator = (target, count) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollListener = () => {
    if (!target.current) {
      return
    }

    console.log("meep")
    const element = target.current
    const windowScroll = element.scrollLeft // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth // Total width the scrollbar can traverse
    if (windowScroll === 0) {
      return setScrollProgress(0)
    }

    if (windowScroll > totalWidth) {
      return setScrollProgress(100)
    }

    console.log((windowScroll / totalWidth) * 100)

    setScrollProgress((windowScroll / totalWidth) * 100)
  }

  useEffect(() => {
    if (typeof window === `undefined`) {
      console.log("meep")
      return
    }

    console.log("meep3")


    target.current && target.current.addEventListener("scroll", scrollListener)
    return () =>
      target.current &&
      target.current.removeEventListener("scroll", scrollListener)
  }, [target])

  return <div></div>
}

export default ScrollIndicator
