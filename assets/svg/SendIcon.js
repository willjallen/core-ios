import * as React from "react"
import Svg, {
  Ellipse,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

function SendIcon(props) {
  return (
    <Svg width={30} height={29} viewBox="0 0 30 29" fill="none" {...props}>
      <Ellipse
        cx={14.931}
        cy={14.5}
        rx={14.234}
        ry={14.5}
        fill="url(#grad)"
      />
      <Path
        d="M16.129 5.293a1 1 0 00-1.415 0L8.35 11.657a1 1 0 101.415 1.414l5.656-5.657 5.657 5.657a1 1 0 001.415-1.414l-6.364-6.364zM16.422 23V6h-2v17h2z"
        fill="#fff"
      />
      <Defs>
    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
      <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
      <Stop offset="1" stopColor="red" stopOpacity="1" />
    </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SendIcon
