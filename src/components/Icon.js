import React from "react"

const Icon = ({ fill = "#27495A", width = "50", height = "50", children }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export default Icon
