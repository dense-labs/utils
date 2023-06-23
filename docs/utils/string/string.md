# 字符串相关函数

## trim

去除开头结尾空格

返回值 `(value: string): string`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `value`     | 字符串 | `string` |

```js
import {trim} from '@dense-labs/utils'

console.log(trim('  hello world  ')) // 'hello world'
console.log(trim('   ')) // ''
console.log(trim('hello world')) // 'hello world'
console.log(trim('')) // ''
console.log(trim(123)) // '123'

```

## maskLeft

从字符串左侧开始对指定数量的字符进行脱敏处理

返回值 `(str: string, numChars: number, symbol = '*'): string`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `str`     | 目标字符串 | `string` ||
| `numChars` | 需要脱敏的字符数量 | `number` ||
| `symbol`     | 替换的字符串，默认为 * | `string` |`*`|

```js
import {maskLeft} from '@dense-labs/utils'
console.log(maskLeft('1234567890', 4, '*')) // ****567890
console.log(maskLeft('1234567890', 0, '*')) // Invalid number of characters
console.log(maskLeft('1234567890', 12, '*')) // **********

```

## maskRight

从字符串右侧开始对指定数量的字符进行脱敏处理

返回值 `(str: string, numChars: number, symbol = '*'): string`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `str`     | 目标字符串 | `string` ||
| `numChars` | 需要脱敏的字符数量 | `number` ||
| `symbol`     | 替换的字符串，默认为 * | `string` |`*`|

```js
import {maskRight} from '@dense-labs/utils'

console.log(maskRight('1234567890', 4, '*')) // 123456****
console.log(maskRight('1234567890', 0, '*')) // Invalid number of characters
console.log(maskRight('1234567890', 20, '*')) // **********

```