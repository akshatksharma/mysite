import React, { createRef } from "react"
import "./carousel.css"

const Carousel = ({ count, children }) => {
  const target = createRef()

  return (
    <div className="">
      <div ref={target}>{children}</div>
    </div>
  )
}
