# Dom操作相关函数


## hasClass

判断给定的元素是否包含指定的 class

返回值 `(obj: Element, cls: string): boolean`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `obj`        | **dom元素**| `Element` |
| `cls`        | **class名称**| `string` |

```js
// hasClass
import {hasClass} from '@dense-labs/utils'

const element = document.createElement('div')
element.classList.add('foo')
console.log(hasClass(element, 'foo')) // true

element.classList.add('bar')
console.log(hasClass(element, 'barxxx'))  // false
```

## addClass

给指定的元素添加指定的 class

返回值 `(obj: Element, cls: string): void`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `obj`        | **dom元素**| `Element` |
| `cls`        | **class名称**| `string` |

```js
// addClass
import {addClass} from '@dense-labs/utils'

const element = document.createElement('div')
addClass(element, 'foo')
console.log(element.classList.contains('foo')) // true
```

## removeClass

从指定的元素中移除指定的 class

返回值 `(obj: Element, cls: string): void`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `obj`        | **dom元素**| `Element` |
| `cls`        | **class名称**| `string` |

```js
import {removeClass} from '@dense-labs/utils'

const element = document.createElement('div')
element.classList.add('bar')
removeClass(element, 'bar')
console.log(element.classList.contains('bar')) // false

element.classList.add('remove-class')
removeClass(element, 'bar')
console.log(element.classList.contains('remove-class')) // true
```


## getClass

获取指定元素的所有类名

返回值 `(element: HTMLElement): string[]`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `element`        | **dom元素**| `Element` |

```js
import {getClass} from '@dense-labs/utils'

const element = document.createElement('div')
element.className = 'class1 class2'
const result = getClass(element) //  ['class1', 'class2']
```

## getFirstFrame

获取视频第一帧封面图

返回值 `{url: string; currentTime?: number}: string`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `url`        | **视频url**| `string` |
| `currentTime`| **第几帧（s）**| `number` |

```js
import {getFirstFrame} from '@dense-labs/utils'

const imgbase64 = await getFirstFrame({url: 'https://xxx.me/1.pm4'})

```
