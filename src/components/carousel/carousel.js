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
    else if (scrollPos > 20 && scrollPos < 60) setCurrentItem(1)
    else if (scrollPos <= 100) setCurrentItem(2)
  }

  const scrollToItem = e => {
    const scrollContainer = scrollRef.current
    const scrollDistance =
      scrollContainer.scrollWidth - scrollContainer.clientWidth

    console.log(e.currentTarget.id)
    if (e.currentTarget.id == 0) {
      scrollContainer.scrollLeft = 0
    }
    if (e.currentTarget.id == 1) {
      scrollRef.current.scrollLeft = 0.4 * scrollDistance
    }
    if (e.currentTarget.id == 2) {
      scrollRef.current.scrollLeft = 0.65 * scrollDistance
    }
  }

  return (
    <div className="wrapper" onScroll={scrollListener} ref={scrollRef}>
      <div className="body">
        <div
          className="mainContainer"
          style={{ width: `${count * 100 - 40}%` }}
        >
          <div className="carouselContainer">
            {content.map((elem, i) => {
              if (i !== currentItem) {
                return (
                  <div
                    id={i}
                    key={i}
                    className="projectWrapper outOfFocus"
                    onClick={scrollToItem}
                  >
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
  )
}

export default Carousel
