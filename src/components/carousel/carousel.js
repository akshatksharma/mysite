import React, { createRef } from "react"
import "./_carousel.scss"

const Carousel = ({ count, children }) => {
  const target = createRef()

  return (
    <div className="mainContainer">
      <div className="carouselContainer" ref={target}>
        {children}
      </div>
    </div>
  )
}

export default Carousel
