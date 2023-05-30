# 身份证相关函数

## isValidIdNumber

判断给定的身份证号码是否合法

返回值 `(idCard: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `idCard`  | 身份证号码| `string` |

```js
import {isValidIdNumber} from '@dense-labs/utils'

console.log(isValidIdNumber(4300001291)) // false

console.log(isValidIdNumber('240398198307073144')) // true
```

## getBirthDate

根据身份证号获取出生日期

返回值 `(idCard: string): string`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `idCard`  | 身份证号码| `string` |

```js
import {getBirthDate} from '@dense-labs/utils'
console.log(getBirthDate('240398198307073144')) // 1983-07-07
```


## getGender

根据身份证号获取性别

返回值 `(idCard: string): string`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `idCard`  | 身份证号码| `string` |

```js
import {getGender} from '@dense-labs/utils'
console.log(getGender('654840197808216447')) // 女

console.log(getGender('422553200104090554')) // 男
```


## getAge

根据身份证号获取年龄

返回值 `(idCard: string): number`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `idCard`  | 身份证号码| `string` |

```js
import {getAge} from '@dense-labs/utils'
console.log(getAge('800205200308218662')) // 19

console.log(getAge('766822194112202013')) // 81
```