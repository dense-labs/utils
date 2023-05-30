# 其他相关函数

## maskString

将字符串脱敏处理

返回值 `(str: string, start = 0, end: number = str.length, mask = '*'): string`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `str`   | 要脱敏的字符串| `string` | `*` |
| `start` | 脱敏开始的位置，默认为 0 | `string` | `0` |
| `end`   | 脱敏结束的位置，默认为字符串的末尾 | `string` | `-` |
| `mask`  | 脱敏使用的掩码字符，默认为* | `string` | `*` |

```js
import {maskString} from '@dense-labs/utils'

const result = maskString('1234567890', 2, 6, '*')
console.log(result) // '12****7890'

const result = maskString('1234567890', undefined, undefined, '*')
console.log(result) // **********
```

## shuffleArray

打乱数组

返回值 `(arr: any[], allowSame = false): any[]`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `arr`   | 要打乱的数组| `any[]` | `*` |
| `allowSame` | 打乱后的书数组是否能和原数组一致 | `boolean` | `false` |

```js
import {shuffleArray} from '@dense-labs/utils'

const arr = [1, 2, 3, 4, 5]
const shuffled = shuffleArray(arr)
console.log(shuffled) // [3, 2, 1, 5, 4]
```

## shuffleObject

打乱一个对象

返回值 `<T extends Record<string, any>>(obj: T, allowSame = true): T`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arr`   | 需要打乱的对象| `Record<string, any>` |
| `allowSame` | 是否允许与原对象相同 | `boolean` |

```js
import {shuffleObject} from '@dense-labs/utils'

let obj = {name: 'Alice', age: 30, email: 'alice@example.com'}
let shuffledObj = shuffleObject(obj, false) // 不能和原来的对象一致
console.log(shuffledObj) // {age: 30, name: 'Alice', email: 'alice@example.com'} 

```

## formatCurrency

将数字转换成千位分隔符格式的字符串

返回值 `(num: number, symbol = ','): string`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `num`   | 需要格式化的数字| `number` | `-` |
| `symbol` | 分隔符，默认使用逗号 | `string` |`,`|

```js
import {formatCurrency} from '@dense-labs/utils'

const formatted = formatCurrency(1234567.89)
console.log(formatted) // 1,234,567.89
const formatted = formatCurrency(-1234567.89)
console.log(formatted) // -1,234,567.89
const formatted = formatCurrency(1234567.891)
console.log(formatted) // 1,234,567.891
const formatted = formatCurrency(1234567)
console.log(formatted) // 1,234,567
const formatted = formatCurrency(0)
console.log(formatted) // 0

```