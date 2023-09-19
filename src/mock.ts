import type { columnsData } from './Helper';

export const singleLabel = ['Numbers'];
export const singleLabelData = ['1', '2', '3'];

export const multiLabel = ['Numbers', 'Words'];
export const multiLabelData = [
  { Numbers: 1, Words: '11' },
  { Numbers: 2, Words: '22' },
  { Numbers: 2, Words: '22' },
];

export const customizedMultiLabel: columnsData = [
  { header: 'Numbers', width: 2, valueColor: 'red' },
  { header: 'Words', width: 3, valueColor: 'blue' },
  { header: 'Test', width: 2.5 },
  { header: 'Test2', width: 2.5, valueColor: 'green' },
];

export const customizedMultiLabelItem = [
  { Numbers: 10, Words: '10', Test: '21', Test2: '8' },
  { Numbers: 20, Words: '20', Test: '22', Test2: '9' },
  { Numbers: 30, Words: '20', Test: '23', Test2: '10' },
  { Numbers: 40, Words: '20', Test: '24', Test2: '11' },
  { Numbers: 50, Words: '50', Test: '25', Test2: '12' },
];
