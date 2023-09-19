import { StyleSheet, type ColorValue } from 'react-native';
import AppTheme from './AppTheme';
import type { StylesProp, InlineStylesProp } from '../index.d';

const { device, Colors, borders, font } = AppTheme;

export const Styles = (settings: StylesProp) => {
  const { headerWrapperStyle, headerTextStyle, colorPalet } = settings;

  return StyleSheet.create({
    mainContainerStyle: {
      width: device.width * (settings.tableWidthMultiplier || 1),
      // backgroundColor: 'black',
      borderRadius: borders.radius.square,
      elevation: 5,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: Colors.darkGray,
    },
    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      // prettier-ignore
      backgroundColor: headerWrapperStyle?.backgroundColor ? headerWrapperStyle.backgroundColor: colorPalet  ? colorPalet[0]  : Colors.primary,
      flex: 1,
      ...headerWrapperStyle,
    },
    headerText: {
      paddingLeft: headerTextStyle?.paddingLeft,
      paddingRight: headerTextStyle?.paddingRight,
      paddingTop: headerTextStyle?.paddingTop,
      paddingBottom: headerTextStyle?.paddingBottom,
      padding: headerTextStyle?.padding || 5,
      color: headerTextStyle?.color || Colors.text,
      textAlign: headerTextStyle?.textAlign || 'center',
      fontSize: headerTextStyle?.fontSize || font.normalText,
      fontWeight: headerTextStyle?.fontWeight || font.weight.bold,
      borderWidth: settings.inlineItemStyle?.borderWidth,
      borderColor: settings.inlineItemStyle?.borderColor || Colors.darkGray,
    },
    inlineItemView: {
      flexDirection: 'row',
      flex: 1,
    },
  });
};

export const InlineItemsStyles = (settings: InlineStylesProp) => {
  const {
    colorPalet = [Colors.primary, Colors.secondary],
    idx = 0,
    inlineItemStyle,
    widths,
    inlineIdx,
  } = settings;

  let color1 = colorPalet[0];
  let color2: ColorValue | undefined = 'gray';

  if (colorPalet.length > 1) {
    color2 = colorPalet[1];
  }
  if (colorPalet.length === 1) {
    color2 = colorPalet[0];
  }

  return StyleSheet.create({
    inlineItemText: {
      flex: widths[inlineIdx],
      paddingLeft: inlineItemStyle?.paddingLeft,
      paddingRight: inlineItemStyle?.paddingRight,
      paddingTop: inlineItemStyle?.paddingTop,
      paddingBottom: inlineItemStyle?.paddingBottom,
      padding: inlineItemStyle?.padding || 5,
      textAlign: inlineItemStyle?.textAlign || 'center',
      fontSize: inlineItemStyle?.fontSize || font.listItems,
      backgroundColor: idx % 2 === 0 ? color2 : color1,
      color: inlineItemStyle?.color || Colors.text,
      fontWeight: inlineItemStyle?.fontWeight || font.weight.regular,
      borderColor: inlineItemStyle?.borderColor || Colors.darkGray,
      borderWidth: inlineItemStyle?.borderWidth,
    },
  });
};
