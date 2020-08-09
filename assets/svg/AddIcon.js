import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export default function AddIcon(props) {
  return (
    <Svg width={29} height={28} viewBox="0 0 29 28" fill="none" {...props}>
      <Path
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={2.5}
        d="M.45 13.487h28.469"
      />
      <Path
        d="M15.434 0v28"
        stroke="url(#prefix__paint1_linear)"
        strokeWidth={2.5}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={20.484}
          y1={14.737}
          x2={20.467}
          y2={15.903}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="red" />
          <Stop offset={1} stopColor="#FFA800" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={15.434}
          y1={19.704}
          x2={14.268}
          y2={19.687}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="red" />
          <Stop offset={1} stopColor="#FFA800" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}