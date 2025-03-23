import { View, StyleProp, ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

const getLogoXml = (
  bgColor1: string,
  bgColor2: string,
  chatColor: string,
  spotColor: string
) => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Background Circle -->
    <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
    
    <!-- Chat Bubble -->
    <path d="M60 80c0-15 15-30 40-30s40 15 40 30-15 30-40 30c-5 0-10-1-15-2l-20 10 5-15c-5-5-10-10-10-20z" fill="${chatColor}"/>
    
    <!-- Notification Spot -->
    <circle cx="140" cy="60" r="10" fill="${spotColor}"/>
    
    <!-- Gradient Definition -->
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="${bgColor1}" />
        <stop offset="1" stop-color="${bgColor2}" />
      </linearGradient>
    </defs>
  </svg>
`;

const Logo = ({
  style,
  width = 100,
  height = 100,
  bgColor1 = "#FF5733",
  bgColor2 = "#FFC300",
  chatColor = "white",
  spotColor = "white",
}: {
  style?: StyleProp<ViewStyle>;
  width?: number | string;
  height?: number | string;
  bgColor1?: string;
  bgColor2?: string;
  chatColor?: string;
  spotColor?: string;
}) => (
  <View style={style}>
    <SvgXml
      xml={getLogoXml(bgColor1, bgColor2, chatColor, spotColor)}
      width={width}
      height={height}
    />
  </View>
);

export default Logo;
