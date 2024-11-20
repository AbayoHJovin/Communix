import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const English = () => {
  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
      <G clipPath="url(#clip0_111_74)">
        <Path
          d="M27.1667 4.91667H3.83333C2.94928 4.91667 2.10143 5.26786 1.47631 5.89298C0.85119 6.5181 0.5 7.36594 0.5 8.25L0.5 23.25C0.5 24.1341 0.85119 24.9819 1.47631 25.607C2.10143 26.2321 2.94928 26.5833 3.83333 26.5833H27.1667C28.0507 26.5833 28.8986 26.2321 29.5237 25.607C30.1488 24.9819 30.5 24.1341 30.5 23.25V8.25C30.5 7.36594 30.1488 6.5181 29.5237 5.89298C28.8986 5.26786 28.0507 4.91667 27.1667 4.91667Z"
          fill="#EEEEEE"
        />
        <Path
          d="M18 4.91667H13V13.25H0.5V18.25H13V26.5833H18V18.25H30.5V13.25H18V4.91667Z"
          fill="#CE1124"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_111_74">
          <Rect width="30" height="30" fill="white" transform="translate(0.5 0.75)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default English;
