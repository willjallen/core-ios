import * as React from "react"
import {Svg, Path} from 'react-native-svg';


function ClockIcon(props) {
  return (
    <Svg width={37} height={38} viewBox="0 0 37 38" fill="none" {...props}>
      <Path
        d="M36.25 19c0 10.098-7.966 18.25-17.75 18.25C8.716 37.25.75 29.098.75 19S8.716.75 18.5.75C28.284.75 36.25 8.902 36.25 19z"
        fill="#fff"
        stroke="#000"
        strokeWidth={1.5}
      />
      <Path stroke="#000" d="M18.561 17.813V3.563" />
      <Path
        transform="matrix(.63691 .77094 -.73347 .67973 17.94 17.813)"
        stroke="#000"
        d="M0-.5h12.323"
      />
    </Svg>
    )
}

export default ClockIcon