import React from 'react'
import { Svg, Path } from 'react-native-svg'
interface Dimensions{
    height:number;
    width:number
}
const CheckMark = ({height,width}:Dimensions) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 0C5.61553 0 4.26216 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303298 5.6003 -0.13559 7.00777 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM6 9.795L3.5 7.295L4.295 6.5L6 8.205L9.705 4.5L10.503 5.293L6 9.795Z"
        fill="#34C759"
      />
      <Path
        d="M6 9.7955L3.5 7.2955L4.2955 6.5L6 8.2045L9.705 4.5L10.5025 5.2925L6 9.7955Z"
        fill="#D9D9D9"
      />
    </Svg>
  )
}

export default CheckMark
