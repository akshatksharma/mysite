import React, { useState, createRef } from "react"
import "./_carousel.scss"

const Carousel = ({ count, content }) => {
  const [currentItem, setCurrentItem] = useState(0)

  const scrollRef = createRef()

  const scrollListener = e => {
    if (!e.target) {
      return
    }

    const element = e.target
    const windowScroll = element.scrollLeft // Distance of the scrollbar from the leftmost point
    const totalWidth = element.scrollWidth - element.clientWidth // Total width the scrollbar can traverse

    const scrollPos = (windowScroll / totalWidth) * 100

    console.log(scrollPos)

    if (scrollPos < 20) setCurrentItem(0)
    else if (scrollPos > 20 && scrollPos < 55) setCurrentItem(1)
    else if (scrollPos <= 100) setCurrentItem(2)
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
                  <div key={i} className="projectWrapper outOfFocus">
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
