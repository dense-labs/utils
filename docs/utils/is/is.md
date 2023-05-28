# 类型判断相关函数

## isUndefined

检查是否为 `undefined`。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |


## isNull

检查是否为 `null`。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isString

检查是否为字符串。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isNumber

检查是否为数字。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isBoolean

检查否为布尔值。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isSymbol

检查是否为symbol。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isBigInt

检查是否为 `BigInt` 类型。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isObject

检查是否为对象。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isPlainObject

检查是否为普通对象。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |
## isArray

检查是否为数组。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |
## isFunction

检查是否为函数对象。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |
## isRegExp

检查是否为正则表达式。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |
## isJSON

检查一个字符串是否可以被解析为 JSON 对象。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `unknown` |

## isElement

检查是否为Element对象。

返回值 `(arg: unknown) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **unknown**| `Element` |

## isUrl

检查是否是一个合法的 URL 地址。

返回值 `(arg: string) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |

## isEmail

检查是否是一个合法的 email 地址。

返回值 `(arg: string) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |

## isValidIdNumber

检查是否是合法的身份证号码。

返回值 `(arg: string) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | 字符串 | `string` |


## isEqual

判断两个值是否相等。

返回值 `(arg: any, arg1: any) => {boolean}`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        |  | `any` |
| `arg1`        |  | `any` |

	
<details>
<summary>查看代码</summary>

<<< @/utils/is/types.ts
</details>