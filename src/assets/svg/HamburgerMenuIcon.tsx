import Svg, { Rect } from "react-native-svg";
import React from "react";

const HamburgerMenuIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 12 12" fill="none">
    <Rect x="0.5" y="2.5" width="11" height="1" fill="#1D1D1B" />
    <Rect x="0.5" y="5.5" width="11" height="1" fill="#1D1D1B" />
    <Rect x="0.5" y="8.5" width="11" height="1" fill="#1D1D1B" />
  </Svg>
);

export default HamburgerMenuIcon;
