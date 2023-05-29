# 类型判断相关函数

## isUndefined

检查是否为 `undefined`。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isUndefined
import {isUndefined} from '@dense-labs/utils'

console.log(isUndefined(undefined) === true) // true
console.log(isUndefined(null) === false) // true
console.log(isUndefined(0) === false) // true
```

## isNull

检查是否为 `null`。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isNull
import {isNull} from '@dense-labs/utils'

console.log(isNull(null) === true) // true
console.log(isNull(undefined) === false) // true
console.log(isNull(false) === false) // true
```

## isString

检查是否为字符串。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isString
import {isString} from '@dense-labs/utils'

console.log(isString('') === true) // true
console.log(isString('hello') === true) // true
console.log(isString(123) === false) // true
```

## isNumber

检查是否为数字。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isNumber
import {isNumber} from '@dense-labs/utils'

console.log(isNumber(0) === true) // true
console.log(isNumber(1.23) === true) // true
console.log(isNumber('123') === false) // true
```

## isBoolean

检查否为布尔值。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isBoolean
import {isBoolean} from '@dense-labs/utils'

console.log(isBoolean(true) === true) // true
console.log(isBoolean(false) === true) // true
console.log(isBoolean(null) === false) // true
```

## isSymbol

检查是否为symbol。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isSymbol
import {isSymbol} from '@dense-labs/utils'

const sym1 = Symbol('foo')
const sym2 = Symbol('bar')
console.log(isSymbol(sym1) === true) // true
console.log(isSymbol(sym2) === true) // true
console.log(isSymbol('baz') === false) // true
```

## isBigInt

检查是否为 `BigInt` 类型。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |
```js
// isBigInt
import {isBigInt} from '@dense-labs/utils'

console.log(isBigInt(BigInt(123)) === true) // true
console.log(isBigInt(123) === false) // true
console.log(isBigInt('123') === false) // true
```

## isObject

检查是否为对象。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isObject
import {isObject} from '@dense-labs/utils'

console.log(isObject(null) === false) // true
console.log(isObject(undefined) === false) // true
console.log(isObject({}) === true) // true
```

## isPlainObject

检查是否为普通对象。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isPlainObject
import {isPlainObject} from '@dense-labs/utils'

console.log(isPlainObject(null) === false) // true
console.log(isPlainObject(undefined) === false) // true
console.log(isPlainObject({}) === true) // true
console.log(isPlainObject(new Date()) === false) // true
```
## isArray

检查是否为数组。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isArray
import {isArray} from '@dense-labs/utils'

console.log(isArray([]) === true) // true
console.log(isArray('123'.split('')) === true) // true
console.log(isArray('') === false) // true
```
## isFunction

检查是否为函数对象。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isFunction
import {isFunction} from '@dense-labs/utils'

console.log(isFunction(function () {}) === true) // true
console.log(isFunction(() => {}) === true) // true
console.log(isFunction(Function) === true) // true
console.log(isFunction({}) === false) // true
```
## isRegExp

检查是否为正则表达式。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isRegExp
import {isRegExp} from '@dense-labs/utils'

console.log(isRegExp(/[a-z]/)) // true
console.log(isRegExp(new RegExp('a*b', 'g'))) // true
console.log(isRegExp(null)) // false
console.log(isRegExp(undefined)) // false
console.log(isRegExp('')) // false
console.log(isRegExp(42)) // false
console.log(isRegExp({})) // false
console.log(isRegExp([])) // false
```
## isJSON

检查一个字符串是否可以被解析为 JSON 对象。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

```js
// isJSON
import {isJSON} from '@dense-labs/utils'

const jsonString = '{"name": "John", "age": 30}'
const isJson = isJSON(jsonString)
console.log(isJson) // true
const jsonString1 = '{name: "John", age: 30}'
const isJson1 = isJSON(jsonString1)
console.log(isJson1) // false
```

## isElement

检查是否为Element对象。

返回值 `(arg: unknown): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `Element` |

```js
// isElement
import {isElement} from '@dense-labs/utils'

const el = document.createElement('div')
console.log(isElement(el)) // true
console.log(isElement('not an element')) // false
console.log(isElement(undefined)) // false
```

## isUrl

检查是否是一个合法的 URL 地址。

返回值 `(arg: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |

```js
// isUrl
import {isUrl} from '@dense-labs/utils'

console.log(isUrl('https://www.example.com')) // true
console.log(isUrl('http://www.example.com')) // true
console.log(isUrl('ftp://ftp.example.com')) // true
console.log(isUrl('http://localhost')) // true
console.log(isUrl('https://localhost:3000')) // true
console.log(isUrl('https://www.google.com/search?q=url&oq=url')) // true

console.log(isUrl('')) // false
console.log(isUrl('htp://www.example.com')) // false
console.log(isUrl('http:/www.example.com')) // false
console.log(isUrl('http://localhost:')) // false
```

## isEmail

检查是否是一个合法的 email 地址。

返回值 `(arg: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |

```js
// isEmail
import {isEmail} from '@dense-labs/utils'

console.log(isEmail('user@example.com')) // true
console.log(isEmail('user123@example.com')) // true
console.log(isEmail('user+123@example.com')) // true

console.log(isEmail('')) // false
console.log(isEmail('userexample.com')) // false
console.log(isEmail('user@examplecom')) // false
console.log(isEmail('user@example.')) // false
```

## isValidIdNumber

检查是否是合法的身份证号码。

返回值 `(arg: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |

```js
// isValidIdNumber
import {isValidIdNumber} from '@dense-labs/utils'

const validIdNumber = '32551919310425054X'
console.log(isValidIdNumber(validIdNumber)) // true

const invalidIdNumber = '42026920180923922X'
console.log(isValidIdNumber(invalidIdNumber)) // false
```


## isEqual

判断两个值是否相等。

返回值 `(arg: any, arg1: any): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        |  | `any` |
| `arg1`        |  | `any` |

```js
// isEqual
import {isEqual} from '@dense-labs/utils'

console.log(isEqual(1, 1)) // true
console.log(isEqual('hello', 'hello')) // true
console.log(isEqual(true, true)) // true

console.log(isEqual(1, 2)) // false
console.log(isEqual('hello', 'world')) // false
console.log(isEqual(true, false)) // false

const obj1 = {a: 1, b: 2}
const obj2 = {a: 1, b: 2}

console.log(isEqual(obj1, obj2)) // true

const obj3 = {a: 1, b: 2}
const obj4 = {a: 1, b: 3}

console.log(isEqual(obj3, obj4)) // false

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(isEqual(arr1, arr2)) // true

const arr3 = [1, 2, 3]
const arr4 = [1, 2, 4]

console.log(isEqual(arr3, arr4)) // false

const obj5 = {a: [1, 2], b: {c: 3}}
const obj6 = {a: [1, 2], b: {c: 3}}

console.log(isEqual(obj5, obj6)) // true
```