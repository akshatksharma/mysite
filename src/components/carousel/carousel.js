import React, { useState, useEffect } from "react"
import "./_carousel.scss"

const Carousel = ({ count, children }) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollListener = e => {
    if (!e.target) {
      return
    }

    console.log(e.target)
    const element = e.target
    const windowScroll = element.scrollLeft // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth // Total width the scrollbar can traverse

    console.log(windowScroll)
    console.log(totalWidth)

    if (windowScroll === 0) {
      return setScrollProgress(0)
    }

    if (windowScroll > totalWidth) {
      return setScrollProgress(100)
    }

    console.log((windowScroll / totalWidth) * 100)

    setScrollProgress((windowScroll / totalWidth) * 100)
  }

  return (
    <div className="mainContainer">
      <div className="carouselContainer" onClick={scrollListener}>
        {children}
      </div>
    </div>
  )
}

export default Carousel
