# URL相关函数

## isUrl

判断给定的字符串是否是一个合法的 URL 地址

返回值 `(t: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `t`  | 要判断的字符串| `string` |

```js
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

## serialize

将对象序列化为 URL 编码字符串

返回值 `(data: {[key: string]: any}): string`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `data`  | 对象| `{key, value}` |

```js
import {serialize} from '@dense-labs/utils'

console.log(serialize({a: 123, b: 'hello world'})) // 'a=123&b=hello world'
console.log(serialize({c: true, d: null})) // 'c=true&d=null'
```

## openLink

在新窗口中打开指定的 URL 地址

返回值 `(url: string, target  = '_blank'): void`

### 参数

| **参数属性** | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- |---------  |
| `url`  | 要打开的 URL 地址| `string` |
| `target `  | 要打开的 URL 地址| `string` | **_blank** |

```ts
export type Target = "_blank" | "_self" | "_parent" | "_top" | "framename"; 

```

| **参数属性** | **说明**     |
| ------------ | ------------ | 
| `_blank`  |在新窗口中打开被链接文档（默认）|
| `_self `  | 在相同的框架中打开被链接文档|
| `_parent `  | 在父框架集中打开被链接文档|
| `_top `  | 在整个窗口中打开被链接文档|
| `framename `  | 在指定的框架中打开被链接文档 |

```js
import {openLink} from '@dense-labs/utils'

console.log(openLink('https://www.example.com'))
```

## getUrlParameter

根据参数名称从 URL 中获取参数值

返回值 `(url: string, name: string): string | null`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `url`  | 要打开的 URL 地址| `string` |
| `name `  | 要打开的 URL 地址| `string` |


```js
import {getUrlParameter} from '@dense-labs/utils'

const result = getUrlParameter('https://www.example.com/test?foo=bar', 'foo') // bar

const result = getUrlParameter('https://www.example.com/test#foo=bar', 'foo') // bar
expect(result).toBe('bar')

const result = getUrlParameter('https://www.example.com/test', 'foo') // null

```

