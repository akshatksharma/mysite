import React, { useState, createRef } from "react"
import "./_carousel.scss"

const Carousel = ({ count, content }) => {
  const [currentItem, setCurrentItem] = useState(0)

  const scrollRef = createRef()

  /**
   *
   * {TODO}
   * need to generalize the scrolling functions to adapt to any amount of items
   */

  const scrollListener = e => {
    if (!e.target) {
      return
    }

    const element = e.target
    const windowScroll = element.scrollLeft // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth // Total width the scrollbar can traverse

    const scrollPos = (windowScroll / totalWidth) * 100

    if (scrollPos < 20) setCurrentItem(0)
    else setCurrentItem(1)
  }

  const incrementScroll = e => {
    const scrollContainer = scrollRef.current
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth

    scrollContainer.scrollLeft += 0.75 * totalWidth
  }

  const decrementScroll = e => {
    const scrollContainer = scrollRef.current
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth

    scrollContainer.scrollLeft -= 0.75 * totalWidth
  }

  return (
    <div className="mainContainer">
      <button
        onClick={decrementScroll}
        className="carouselButton carouselButton--left"
      >
        {"<"}
      </button>
      <div
        id="scrollWrapper"
        className="wrapper"
        onScroll={scrollListener}
        ref={scrollRef}
      >
        <div className="body">
          <div className="carouselContainer">
            <div className="carousel">
              {content.map((elem, i) => {
                if (i !== currentItem) {
                  return (
                    <div id={i} key={i} className="projectWrapper outOfFocus">
                      {elem}
                    </div>
                  )
                }
                return (
                  <div key={i} className="projectWrapper">
                    {elem}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={incrementScroll}
        className="carouselButton carouselButton--right"
      >
        {">"}
      </button>
    </div>
  )
}

export default Carousel
