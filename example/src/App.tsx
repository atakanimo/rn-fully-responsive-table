import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import { ResponsiveTable, customizedMultiHeaderItem, customizedMultiHeader, multiHeader, multiHeaderData, singleHeader, singleHeaderData } from 'rn-fully-responsive-table';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 30 }}>
        <ResponsiveTable tableHeight={120} columnsCustomization={customizedMultiHeader} dataSource={customizedMultiHeaderItem} />
        <View style={{ marginTop: 20 }}>
          <ResponsiveTable columnsCustomization={customizedMultiHeader} dataSource={customizedMultiHeaderItem} />
        </View>
        <ResponsiveTable colorPalet={['#9BA5BA', '#D4DADF']} containerStyle={{ marginTop: 20, width: '99%' }} columnsCustomization={singleHeader} dataSource={singleHeaderData} />
        <ResponsiveTable colorPalet={['#1F568A', '#FAFAFA']} containerStyle={{ marginTop: 20, width: '99%' }} columnsCustomization={multiHeader} dataSource={multiHeaderData} />
        <View style={{ marginTop: 20 }}>
          <ResponsiveTable
            headerWrapperStyle={{ backgroundColor: 'white' }}
            inlineItemStyle={{ color: 'white' }}
            headerTextStyle={{ color: 'black' }}
            colorPalet={['gray', 'green']}
            columnsCustomization={multiHeader}
            dataSource={multiHeaderData}
          />
        </View>
      </ScrollView>
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
