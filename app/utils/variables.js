import { Dimensions } from "react-native";
const sizeDenominator = 850;

export const UIColors = {
  blue: '#329CA1',
  grey: 'grey',
  red: 'red',
  white: 'white',
  black: 'black',
  orange: 'orange',
};

export const spacing = {
    border: responsiveSize(1),
  borderDouble: responsiveSize(2),
  extraExtraSmall: responsiveSize(3),
  extraExtraSmall4: responsiveSize(3),
  extraSmall: responsiveSize(5),
    small: responsiveSize(8),
  largest: responsiveSize(10),
  semiMedium: responsiveSize(10),
  medium: responsiveSize(12),
  spaceMargin: responsiveSize(15),
  mediumLarge: responsiveSize(16),
  large: responsiveSize(20),
};

export const itemSizes = {
  border: responsiveSize(1),
borderDouble: responsiveSize(2),
extraExtraSmall: responsiveSize(3),
extraExtraSmall4: responsiveSize(3),
extraSmall: responsiveSize(5),
  small: responsiveSize(8),
largest: responsiveSize(10),
semiMedium: responsiveSize(10),
medium: responsiveSize(12),
spaceMargin: responsiveSize(15),
mediumLarge: responsiveSize(16),
large: responsiveSize(20),
ExtraLarge: responsiveSize(40),
imageLogo: responsiveSize(80),
buttonWidth: responsiveSize(120),
};
export const fontSizes = {
    border: 1,
  borderDouble: 2,
  extraExtraSmall: 3,
  extraExtraSmall4: 4,
  extraSmall: 5,
    small: 8,
  largest: 10,
  semiMedium: 10,
  medium: 12,
  spaceMargin: 15,
  mediumLarge: 16,
  mediumLarge18: 18,
  large: 20,
  ExtraLarge: 40,
  imageLogo: 80,
};


export function responsiveSize(fontSize) {
    const { width, height } = windowSize();
    return (Math.sqrt((height * height) + (width * width)) * (fontSize / sizeDenominator));
  }
  
  
export function windowSize() {
    return Dimensions.get('window');
  }