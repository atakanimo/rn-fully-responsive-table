import type { ColorValue } from 'react-native';

type typeOfData = 'object' | 'string' | 'typeError';
type ValidationReturnType = {
  typeOfData: typeOfData;
  headerLength: number;
  widths: number[];
  columns: string[];
  columnColor: Record<any, any>;
};

type columnProperties = {
  header: string;
  width: number;
  valueColor?: ColorValue;
};
export type columnsData = string[] | columnProperties[];

class ControlData {
  columnsData: columnsData = [];
  inlineData: any[] = [];
  objectLength = 0;

  constructor(columnsData: columnsData, inlineData: any[]) {
    this.columnsData = columnsData;
    this.inlineData = inlineData;
  }

  findElementType = (): ValidationReturnType => {
    let headerLength = 0;
    let typeOfData: typeOfData = 'string';
    let widths: number[] = [];
    let columns: string[] = [];
    let columnColor: any = {};

    if (!Array.isArray(this.columnsData)) {
      return {
        typeOfData: 'typeError',
        headerLength: 0,
        widths: [],
        columns: [],
        columnColor: {},
      };
    }

    this.columnsData.forEach((item) => {
      if (typeof item === 'object') {
        typeOfData = 'object';
        columns.push(item.header);
        widths.push(item.width);
        if (item.valueColor) columnColor[item.header] = item.valueColor;
      } else if (typeof item === 'string') {
        typeOfData = 'string';
        columns.push(item);
        headerLength = this.controlStringLength();
        if (headerLength === 0) {
          return;
        }
        if (headerLength > 0) {
          widths.push(10 / headerLength);
        }
      } else {
        typeOfData = 'typeError';
      }
    });

    return { typeOfData, headerLength, widths, columns, columnColor };
  };

  controlStringLength = () => {
    return this.columnsData.length;
  };
}

export default ControlData;
