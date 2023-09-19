# `rn-fully-responsive-table`

Fully responsive and customizable react native table-grid components

## Getting started
Install the library using either Yarn:

```
yarn add rn-fully-responsive-table
```

or npm:

```
npm install rn-fully-responsive-table
```

## Usage

```js
import { ResponsiveTable } from 'rn-fully-responsive-table';
// ...

const multiLabel = ['Numbers', 'Words'];
const multiLabelData = [
  { Numbers: 1, Words: '11' },
  { Numbers: 2, Words: '22' },
  { Numbers: 2, Words: '22' },
];
// ...


```js
<ResponsiveTable columnsCustomization={multiLabel} dataSource={multiLabelData} />
```js

ScreenShots: (https://drive.google.com/file/d/1NxppBvU9vgjIULvEw6IDIJoo8uzfEYj8/view?usp=sharing)

### Types

#### `NetInfoState`
Describes the current state of the network. It is an object with these properties:

| Property              | Type                                    | Description                                                                                        |
| --------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                | [`NetInfoStateType`](#netinfostatetype) | The type of the current connection.                                                                |
| `isConnected`         | `boolean`, `null`                               | If there is an active network connection. Defaults to `null` on most platforms for `unknown` networks. Note: Web browsers report network type `unknown` for many otherwise valid networks (https://caniuse.com/netinfo), so `isConnected` may be `true` or `false` and represent a real connection status even for unknown network types in certain cases.|
| `isInternetReachable` | `boolean`, `null`                             | If the internet is reachable with the currently active network connection. If unknown defaults to `null`                         |
| `isWifiEnabled`       | `boolean`                               | *(Android only)* Whether the device's WiFi is ON or OFF.                                           |
| `details`             |                                         | The value depends on the `type` value. See below. 

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
