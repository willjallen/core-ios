import {Dimensions, Platform} from "react-native";

const deviceHeight = Dimensions.get("window").height;
    const deviceWidth = Dimensions.get("window").width;
    const platform = Platform.OS;
    const platformStyle = "material";
    const isIphoneX =
      platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
"platformStyle":"material",
"platform":"ios",
"inputFontSize":17,
"inputBorderColor":"rgba(255,255,255,1)",
"inputSuccessBorderColor":"#2b8339",
"inputErrorBorderColor":"#ed2f2f",
"inputHeightBase":50,
"inputColor":"rgba(255,255,255,0.5)",
"inputColorPlaceholder":"rgba(0,0,0,1)",
"btnLineHeight":19,
"defaultProgressColor":"#E4202D",
"inverseProgressColor":"#1A191B",
"defaultSpinnerColor":"#45D56E",
"inverseSpinnerColor":"#1A191B",
"textColor":"#000",
"inverseTextColor":"#fff",
"noteFontSize":14,
"defaultTextColor":"#000",
"borderRadiusBase":2,
"borderWidth":0.5,
"contentPadding":10,
}
