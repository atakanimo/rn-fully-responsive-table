import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  type ColorValue,
} from 'react-native';
import ControlData from './Helper';
import AppTheme from './Styles/AppTheme';
const { device, Colors, borders, font } = AppTheme;
import type { StylesProp, InlineStylesProp, TableTypes } from './index.d';

const ResponsiveTable = (props: TableTypes) => {
  const {
    columnsCustomization,
    dataSource,
    containerStyle,
    renderOnlyItems,
    tableWidthMultiplier,
    tableHeight,
  } = props;
  const {
    headerWrapperStyle,
    colorPalet,
    headerTextStyle,
    inlineItemStyle = { borderWidth: 1 },
  } = props;

  const result = new ControlData(
    columnsCustomization || [],
    dataSource || []
  ).findElementType();
  const { columns, headerLength, typeOfData, widths, columnColor } = result;

  const { mainContainerStyle, headerText, headerWrapper, inlineItemView } =
    Styles({
      colorPalet,
      headerTextStyle,
      headerWrapperStyle,
      tableWidthMultiplier,
      inlineItemStyle,
    });

  return (
    <View style={containerStyle || mainContainerStyle}>
      {!renderOnlyItems && (
        <View style={headerWrapper}>
          {columns &&
            columns.map((item, idx) => {
              return (
                <Text
                  numberOfLines={1}
                  key={item}
                  style={{ ...headerText, flex: widths[idx] }}
                >
                  {item}
                </Text>
              );
            })}
        </View>
      )}
      <ScrollView
        style={{ height: tableHeight || 'auto' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <>
          {/* // singleLabel */}
          {typeOfData &&
            typeOfData === 'string' &&
            dataSource &&
            headerLength === 1 &&
            dataSource.map((item, idx) => {
              return (
                <Text
                  key={idx}
                  style={
                    InlineItemsStyles({
                      colorPalet,
                      idx,
                      inlineIdx: idx,
                      inlineItemStyle,
                      widths,
                    }).inlineItemText
                  }
                >
                  {item.toString()}
                </Text>
              );
            })}
          {/* // multiLabel */}
          {typeOfData && typeOfData === 'object' && (
            <View>
              {dataSource &&
                dataSource.map((item, viewIdx) => (
                  <View key={viewIdx} style={inlineItemView}>
                    {columns.map((objectProperty, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          {columnColor.hasOwnProperty(objectProperty) ? (
                            <Text
                              key={idx + 100}
                              style={
                                InlineItemsStyles({
                                  colorPalet,
                                  idx: viewIdx,
                                  inlineIdx: idx,
                                  inlineItemStyle: {
                                    ...inlineItemStyle,
                                    color: columnColor[objectProperty],
                                  },
                                  widths,
                                }).inlineItemText
                              }
                            >
                              {
                                item[
                                  objectProperty.replace(
                                    / /g,
                                    ''
                                  ) as keyof typeof dataSource
                                ]
                              }
                            </Text>
                          ) : (
                            <Text
                              key={idx + 1000}
                              style={
                                InlineItemsStyles({
                                  colorPalet,
                                  idx: viewIdx,
                                  inlineIdx: idx,
                                  inlineItemStyle,
                                  widths,
                                }).inlineItemText
                              }
                            >
                              {
                                item[
                                  objectProperty.replace(
                                    / /g,
                                    ''
                                  ) as keyof typeof dataSource
                                ]
                              }
                            </Text>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </View>
                ))}
            </View>
          )}
          {/* // multiLabelHeader>1 */}
          {typeOfData && typeOfData === 'string' && headerLength > 1 && (
            <View>
              {dataSource &&
                dataSource.map((item, viewIdx) => (
                  <View key={viewIdx} style={inlineItemView}>
                    {columns.map((objectProperty, idx) => {
                      return (
                        <Text
                          numberOfLines={1}
                          key={idx}
                          style={
                            InlineItemsStyles({
                              colorPalet,
                              idx: viewIdx,
                              inlineItemStyle,
                              inlineIdx: idx,
                              widths,
                            }).inlineItemText
                          }
                        >
                          {
                            item[
                              objectProperty.replace(
                                / /g,
                                ''
                              ) as keyof typeof dataSource
                            ]
                          }
                        </Text>
                      );
                    })}
                  </View>
                ))}
            </View>
          )}
        </>
      </ScrollView>
    </View>
  );
};

export default ResponsiveTable;

export const Styles = (settings: StylesProp) => {
  const { headerWrapperStyle, headerTextStyle, colorPalet } = settings;

  return StyleSheet.create({
    mainContainerStyle: {
      width: device.width * (settings.tableWidthMultiplier || 0.99),
      backgroundColor: '#333333',
      borderRadius: borders.radius.square,
      elevation: 5,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: Colors.darkGray,
    },
    headerWrapper: {
      ...headerWrapperStyle,
      flexDirection: 'row',
    },
    headerText: {
      borderColor: headerTextStyle?.borderColor || Colors.darkGray,
      borderWidth: headerTextStyle?.borderWidth === 0 ? 0 : 1,
      paddingLeft: headerTextStyle?.paddingLeft,
      paddingRight: headerTextStyle?.paddingRight,
      paddingTop: headerTextStyle?.paddingTop,
      paddingBottom: headerTextStyle?.paddingBottom,
      padding: headerTextStyle?.padding || 6,
      color: headerTextStyle?.color || Colors.text,
      textAlign: headerTextStyle?.textAlign || 'center',
      fontSize: headerTextStyle?.fontSize || font.normalText,
      fontWeight: headerTextStyle?.fontWeight || font.weight.bold,
      backgroundColor: headerWrapperStyle?.backgroundColor
        ? headerWrapperStyle?.backgroundColor
        : colorPalet
        ? colorPalet[0]
        : Colors.primary,
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
      borderWidth: inlineItemStyle?.borderWidth === 0 ? 0 : 1,
    },
  });
};

// const handlePresSN = async (item: string = '', isAPIReq: boolean = false) => {
//   if (isAPIReq) {
//     const result = await Les3Alert(`SN:${item} Do you want reprint or unpack ?`, 'Unpack', 'Reprint', 'Cancel');
//     if (result === Les3AlertEnum.First) Shipment.UnpackSoldItem(item);
//     else if (result === Les3AlertEnum.Second) Shipment.ReprintSoldItems(item);
//   } else {
//     setText(item);
//     setOpen(true);
//   }
// };

// const [open, setOpen] = React.useState(false);
// const [desiredText, setText] = React.useState<string>('');
