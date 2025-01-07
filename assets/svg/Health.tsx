import React from "react";
import {
  Svg,
  G,
  Circle,
  Path,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";

const HealthLogo = () => {
  return (
    <Svg
      width="107"
      height="107"
      viewBox="0 0 107 107"
      fill="none"
    >
      <Defs>
        <Filter
          id="filter0_d_157_171"
          x="0"
          y="0"
          width="107"
          height="107"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="9" />
          <FeGaussianBlur stdDeviation="6" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_157_171"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_157_171"
            result="shape"
          />
        </Filter>
      </Defs>
      <G filter="url(#filter0_d_157_171)">
        <Circle cx="53.6474" cy="44.6474" r="31.6474" fill="#25B14C" />
        <Path
          d="M53.5 44.1979C53.7404 44.1979 53.9709 44.2934 54.1408 44.4634C54.3108 44.6333 54.4062 44.8638 54.4062 45.1042V46.0104H55.3125C55.5529 46.0104 55.7834 46.1059 55.9533 46.2759C56.1233 46.4458 56.2188 46.6763 56.2188 46.9167C56.2188 47.157 56.1233 47.3875 55.9533 47.5575C55.7834 47.7274 55.5529 47.8229 55.3125 47.8229H54.4062V48.7292C54.4062 48.9695 54.3108 49.2 54.1408 49.37C53.9709 49.5399 53.7404 49.6354 53.5 49.6354C53.2596 49.6354 53.0291 49.5399 52.8592 49.37C52.6892 49.2 52.5938 48.9695 52.5938 48.7292V47.8229H51.6875C51.4471 47.8229 51.2166 47.7274 51.0467 47.5575C50.8767 47.3875 50.7812 47.157 50.7812 46.9167C50.7812 46.6763 50.8767 46.4458 51.0467 46.2759C51.2166 46.1059 51.4471 46.0104 51.6875 46.0104H52.5938V45.1042C52.5938 44.8638 52.6892 44.6333 52.8592 44.4634C53.0291 44.2934 53.2596 44.1979 53.5 44.1979Z"
          fill="white"
        />
        <Path
          d="M44.1344 44.8708C44.5776 44.523 45.2203 44.6054 45.5681 45.0487L49.1281 50.0192C49.3064 50.2617 49.5694 50.4107 49.8608 50.4327C50.1521 50.4547 50.4354 50.3472 50.6373 50.1419L61.513 39.2151C61.8795 38.8515 62.4696 38.8515 62.8361 39.2151C63.2026 39.5787 63.2026 40.1635 62.8361 40.5271L51.9604 51.4539C51.2318 52.1674 50.2045 52.4594 49.2275 52.2374C48.2505 52.0153 47.4335 51.307 46.9924 50.3565L43.4324 45.3859C43.0847 44.9426 43.1912 44.3186 43.6344 43.9708Z"
          fill="white"
        />
      </G>
    </Svg>
  );
};

export default HealthLogo;
