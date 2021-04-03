import React, { useState, useContext } from "react"
import { useSpring, animated } from "react-spring"
import { ThemeContext } from "./themeContext"
import ClientOnly from "./clientOnly"

const ColorToggle = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { colorTheme, setColorTheme } = useContext(ThemeContext)

  const handleColorChange = () => {
    if (isChecked) {
      setColorTheme("light")
      setIsChecked(false)
    } else {
      setColorTheme("dark")
      setIsChecked(true)
    }
  }

  const properties = {
    dark: {
      r: 16,
      transform: "rotate(40deg)",
      cx: 28,
      cy: 14,
      opacity: 0,
      color: "white",
      fill: "white",
      stroke: "white",
    },
    light: {
      r: 10,
      transform: "rotate(90deg)",
      cx: 60,
      cy: 0,
      opacity: 1,
      color: "black",
      fill: "black",
      stroke: "black",
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  }

  const getProperties = () => {
    if (colorTheme === "light") return properties.light
    if (colorTheme === "dark") return properties.dark
    else return properties.light
  }

  const { r, transform, cx, cy, opacity, color, fill, stroke } = getProperties()

  const svgContainerProps = useSpring({
    transform,
    stroke,
    config: properties.springConfig,
  })
  const centerCircleProps = useSpring({
    r,
    color,
    fill,
    config: properties.springConfig,
  })
  const maskedCircleProps = useSpring({
    cx,
    cy,
    color,
    config: properties.springConfig,
  })
  const linesProps = useSpring({
    opacity,
    color,
    stroke,
    config: properties.springConfig,
  })

  return (
    <ClientOnly>
      <animated.svg
        className="colorToggle"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={handleColorChange}
        style={{
          ...svgContainerProps,
        }}
      >
        <mask id="myMask2">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle style={maskedCircleProps} r="16" fill="black" />
        </mask>

        <animated.circle
          cx="24"
          cy="24"
          style={centerCircleProps}
          mask="url(#myMask2)"
        />
        <animated.g stroke="currentcolor" style={linesProps}>
          <line x1="24" y1="2" x2="24" y2="6" />
          <line x1="24" y1="42" x2="24" y2="46" />
          <line x1="8.44" y1="8.44" x2="11.28" y2="11.28" />
          <line x1="36.72" y1="36.72" x2="39.56" y2="39.56" />
          <line x1="2" y1="24" x2="6" y2="24" />
          <line x1="42" y1="24" x2="46" y2="24" />
          <line x1="8.44" y1="39.56" x2="11.28" y2="36.72" />
          <line x1="36.72" y1="11.28" x2="39.56" y2="8.44" />
        </animated.g>
      </animated.svg>
    </ClientOnly>
  )
}

export default ColorToggle
