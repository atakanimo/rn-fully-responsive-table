import { Dimensions, Appearance } from 'react-native';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

export type ColorTheme = {
  primary: string;
  secondary: string;
  text: string;
  lightGray: string;
  bg?: string;
  darkGray?: string;
};

const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const colorPalette = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const Colors: ColorPalettes = {
    dark: {
      primary: '#121212',
      secondary: '#1F1F1F',
      lightGray: '#E2E2E2',
      darkGray: '#b9b9c8',
      text: '#E1E1E1',
      ...sharedColors,
    },
    light: {
      primary: '#fafafa',
      secondary: '#ebebeb',
      lightGray: '#dcdcdc',
      darkGray: '#aaaab9',
      text: '#000000',
      ...sharedColors,
    },
  };
  return isDarkMode ? Colors.dark : Colors.light;
};

const AppTheme = {
  device: {
    width,
    height,
  },
  defaultOpacity: 0.9,
  font: {
    normalText: 18,
    listItems: 16,
    weight: {
      bold: '800' as '800',
      regular: '400' as '400',
      light: '200' as '200',
    },
  },
  Colors: colorPalette(),
  borders: {
    width: {
      thin: 1,
      regular: 1.5,
      thick: 2,
    },
    radius: {
      normal: 20,
      smooth: 10,
      square: 5,
    },
  },
};

export default AppTheme;
