import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClockIcon(props) {
  return (
    <Svg width={37} height={38} viewBox="0 0 37 38" fill="none" {...props}>
      <Path
        d="M36.25 19c0 10.098-7.966 18.25-17.75 18.25C8.716 37.25.75 29.098.75 19S8.716.75 18.5.75C28.284.75 36.25 8.902 36.25 19z"
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default ClockIcon