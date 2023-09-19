import { ColorValue, ViewStyle } from 'react-native';
import { columnsData } from './Helper';

type BorderStyle = {
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;
};

type HeaderTextStyle = {
  fontSize?: number;
  fontWeight?: 'bold' | '100' | '200' | '400' | '800';
  color?: ColorValue;
  textAlign?: 'center' | 'left' | 'right';
  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingRight?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: ColorValue;
};

type InlineItemStyle = HeaderTextStyle & BorderStyle;

export type TableTypes = {
  tableHeight?: number;
  columnsCustomization?: columnsData;
  dataSource?: any[];
  containerStyle?: ViewStyle;
  renderOnlyItems?: boolean;
  tableWidthMultiplier?: number;
  colorPalet?: [ColorValue, ColorValue?];
  headerWrapperStyle?: ViewStyle;
  headerTextStyle?: HeaderTextStyle;
  inlineItemStyle?: InlineItemStyle;

  // mTop?: number;
  // heightMultiplier?: number;

  // loading?: boolean;
  // handleRemove?: (...args: any[]) => any;
};

export type StylesProp = {
  tableWidthMultiplier?: number;
  headerWrapperStyle?: ViewStyle;
  headerTextStyle?: HeaderTextStyle;
  borderStyle?: ViewStyle;
  inlineItemStyle?: InlineItemStyle;
  colorPalet?: [ColorValue, ColorValue?];
};

export type InlineStylesProp = {
  widths: number[];
  idx?: number;
  inlineIdx: number;
  inlineMargin?: number;
  colorPalet?: [ColorValue, ColorValue?];
  inlineItemStyle?: InlineItemStyle;
};
