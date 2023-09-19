import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  ResponsiveTable,
  customizedMultiLabelItem,
  customizedMultiLabel,
  multiLabel,
  multiLabelData,
  singleLabel,
  singleLabelData,
} from 'rn-fully-responsive-table';

export default function App() {
  return (
    <View style={styles.container}>
      <ResponsiveTable
        tableHeight={120}
        columnsCustomization={customizedMultiLabel}
        dataSource={customizedMultiLabelItem}
      />
      <ResponsiveTable
        colorPalet={['#9BA5BA', '#D4DADF']}
        containerStyle={{ marginTop: 20, width: '99%' }}
        columnsCustomization={singleLabel}
        dataSource={singleLabelData}
      />
      <ResponsiveTable
        colorPalet={['#1F568A', '#FAFAFA']}
        containerStyle={{ marginTop: 20, width: '99%' }}
        columnsCustomization={multiLabel}
        dataSource={multiLabelData}
      />
      <View style={{ marginTop: 20 }}>
        <ResponsiveTable
          headerWrapperStyle={{ backgroundColor: 'gray' }}
          headerTextStyle={{ color: 'white' }}
          colorPalet={['#9BA5BA', '#FAFAFA']}
          columnsCustomization={multiLabel}
          dataSource={multiLabelData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
