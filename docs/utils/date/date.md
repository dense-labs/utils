# 时间相关函数

## dateFormat

格式化时间

返回值 `(date: Date | string, format: string): string`


### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `date`       | 要格式化的日期 | `Date，string` |
| `format`     | 格式化字符串 | `string` |


format 格式化字符串，可以包含以下占位符：
  - YYYY：四位数的年份
  - MM：两位数的月份（01-12）
  - dd：两位数的日期（01-31）
  - HH：两位数的小时（00-23）
  - mm：两位数的分钟（00-59）
  - ss：两位数的秒数（00-59）

### 用法
```js
import {dateFormat} from '@dense-labs/utils'

console.log(dateFormat('2023-05-09 20:24:21', 'yyyy')) // 2023
console.log(dateFormat(new Date(), 'yyyy')) // 2023
console.log(dateFormat(new Date(), 'yyyy-MM')) // 2023-05

const date = new Date('2023-05-15 12:00:00')
console.log(dateFormat(date, 'yyyy-MM-dd HH:mm:ss')) // 2023-05-15 12:00:00

console.log(dateFormat('2023-05-15 12:00:00', 'dd/MM/yyyy')) // 15/05/2023
```

## isTimeInRange

判断给定的时间是否在指定的时间范围内

返回值 `(startTime: Date | string, endTime: Date | string, targetTime: Date | string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `startTime`  | 开始时间，可以是 Date 对象或日期字符串 | `Date，string` |
| `endTime`    | 结束时间，可以是 Date 对象或日期字符串 | `Date，string` |
| `targetTime` | 目标时间，可以是 Date 对象或日期字符串 | `Date，string` |

### 用法
```js
import {isTimeInRange} from '@dense-labs/utils'

console.log(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22')) // true
console.log(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2022-03-22')) // false
console.log(isTimeInRange(new Date('2023-01-09'), new Date('2023-05-09'), '2022-03-22')) // false
console.log(isTimeInRange('2023-01-09 20:24:21', '2023-05-09 20:24:21', '2023-03-22 23:54:22')) // true
```

## getLatelyDay

获取最近 n 天的日期

返回值 (n: number | 0): Date

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `n`       |  要获取的天数，负数则往后推| `number` | *0* |

### 用法
```js
import {getLatelyDay, dateFormat} from '@dense-labs/utils'

const today = new Date()
console.log(getLatelyDay(0)) // 2023-05-29
const oneWeekAgo = dateFormat(new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd HH:mm:ss')
console.log(dateFormat(getLatelyDay(7), 'yyyy-MM-dd HH:mm:ss')) // 2023-05-22
```


## getNextDay

获取当前 n天数后的日期

返回值 (n: number | 0): string

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `n`       |  要获取的天数，负数则往后推| `number` | *0* |

### 用法
```js
import {getNextDay, dateFormat} from '@dense-labs/utils'

const today = new Date() // 比如今天是 2023-05-29
console.log(getNextDay(1)) // 2023-05-30

console.log(getNextDay(7)) // 2023-06-05
```

## getWeekByDay

根据日期字符串获取星期几

返回值 (dateString: string): string

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `dateString` | 日期字符串 | `number` |

### 用法
```js
import {getWeekByDay} from '@dense-labs/utils'

const today = new Date() // 比如今天是 2023-05-29
console.log(getWeekByDay('2023-05-10')) // 星期三

console.log(getWeekByDay('2023-06-10')) // 星期六
```

## getMonth

获取最近 n 个月的日期

返回值 (n: number | 0): string

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- | --------- |
| `n`       | 日期字符串，负数则往后推| `number` | *0* |

### 用法
```js
import {getLatelyMonth} from '@dense-labs/utils'

const today = new Date() // 比如今天是 2023-05-29
console.log(getLatelyMonth(1)) // 2023-04-29

console.log(getLatelyMonth(-2)) // 2023-07-29
```

## formatTimestamp

把时间戳格式化成日期

返回值 (timestamp: number, format = 'yyyy-MM-dd HH:mm:ss'): string

### 参数

| **参数属性** | **说明**     | **类型**  |**默认值**  |
| ------------ | ------------ | --------- |--------- |
| `timestamp` | 时间戳  | `number` |`-`|
| `format`    | 格式   | `string` |`yyyy-MM-dd HH:mm:ss`|


### 用法
```js
import {formatTimestamp} from '@dense-labs/utils'

const timestamp = +new Date('2023-04-31 10:00:00')
console.log(formatTimestamp(timestamp)) // 2023-04-31 10:00:00

console.log(formatTimestamp(1685339811793, 'yyyy/MM/dd HH:mm:ss')) // 2023/05/29 13:56:51
```

## isLeapYear

判断是否是闰年

返回值 (year: number): boolean

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `str`       | 年份  | `number` |

### 用法
```js
import {isLeapYear} from '@dense-labs/utils'

console.log(isLeapYear(2000)) // true
console.log(isLeapYear(2001)) // false
console.log(isLeapYear(1700)) // false
console.log(isLeapYear(2008)) // true
```

## isDate

判断一个字符串是否为有效的日期格式

返回值 (str: string | Date): boolean

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `str`       | 日期字符串  | `string`, `Date` |

### 用法
```js
import {isDate} from '@dense-labs/utils'

console.log(isDate('2022-01-01')) // true
console.log(isDate('Sat Jan 01 2022')) // true

console.log(isDate(new Date())) // true
console.log(isDate(new Date('2022-01-01'))) // true

console.log(isDate('')) // false
console.log(isDate('foo')) // false
```

## formatTimeFromSeconds

将给定的秒数转换成格式为 "X天X小时X分X秒" 的时间字符串

返回值 (seconds: number, isCustom: boolean): FormattedTime | undefined | string

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `seconds`   | 要转换的秒数  | `number` |
| `isCustom`  | 是否自定义格式，默认为false，如果为*true*时返回一个对象**FormattedTime** | `boolean` |

```ts
interface FormattedTime {
    days: number
    hours: number
    minutes: number
    seconds: number
}
```

### 用法
```js
import {formatTimeFromSeconds} from '@dense-labs/utils'

const result = formatTimeFromSeconds(123456)
console.log(result) // 1天10小时17分36秒

const result1 = formatTimeFromSeconds(123456, true)
console.log(result) // {days: 1, hours: 10, minutes: 17, seconds: 36}

console.log(formatTimeFromSeconds(100000)) // 1天3小时46分40秒
```