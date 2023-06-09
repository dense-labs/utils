# Cookie相关函数

> 注意Cookie 中的 HttpOnly 属性，可以防止 JavaScript 访问 Cookie 的值。这是为了防止恶意脚本通过窃取 Cookie 来进行 CSRF（跨站请求伪造）攻击。如果设置了 HttpOnly 属性，通过JavaScript 将无法读取或修改 Cookie 的值，只能在服务端修改。


## getCookie

获取指定名称的 cookie 值

返回值 `(name: string): string | null`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `name`       | cookie 的名称 | `string` |

```js
import {getCookie} from '@dense-labs/utils'

document.cookie = 'testCookie=; expires=Thu, 01 Jan 2023 00:00:00 UTC;'
const cookieValue = getCookie('testCookie')

console.log(cookie) // testCookie=; expires=Thu, 01 Jan 2023 00:00:00 UTC;
```


## setCookie

设置一个新的 cookie

返回值 `(name: string, value: string, expires?: Date): void`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `name`       | cookie 的名称 | `string` |
| `value`     | cookie 的值 | `string` |
| `expires`   | 要设置的 cookie 的过期时间，可选的 | `Date` |


```js
import {setCookie} from '@dense-labs/utils'

const expires = new Date('2023-11-01')
setCookie('name', 'value', expires)

```

## deleteCookie

删除指定名称的 cookie

返回值 `(name: string): void`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `name`       | cookie 的名称 | `string` |


```js

import {deleteCookie} from '@dense-labs/utils'
deleteCookie('test')

```

## hasCookie

检查指定名称的 cookie 是否存在

返回值 `(name: string): void`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `name`       | 要检查的 cookie 的名称 | `string` |


```js

import {hasCookie} from '@dense-labs/utils'
document.cookie = 'test=bar; path=/'
hasCookie('test')  // true

```