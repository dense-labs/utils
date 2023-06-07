# base64相关函数

## imageUrlToBase64

将图片 URL 转换为 Base64 编码

返回值 `(url: string): Promise<string>`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `url`        | 图片 URL      | `string` |

```js
import {imageUrlToBase64} from '@dense-labs/utils'

```

## base64ToBlob

将 Base64 编码的字符串转换为 Blob 对象

返回值 `(base64Data: string, contentType?: BlobType): Blob`

```ts
type BlobType = 
'text/plain' | 
'text/html' | 
'text/css' | 
'text/javascript' | 
'application/json' | 
'application/xml' | 
'image/png' | 
'image/jpeg' | 
'image/gif' | 
'audio/mpeg' | 
'video/mp4'

```

### 参数

| **参数属性**  | **说明**     | **类型**  | **默认值**  |
| ------------ | ------------ | --------- |--------- |
| `base64Data`| Base64 编码的字符串| `string` |`-` |
| `contentType`|Blob 对象的 MIME 类型| `string` |`text/plain`|

```js
import {base64ToBlob} from '@dense-labs/utils'

```

## fileToBase64

将文件转为 base64 编码

返回值 `(file: File): Promise<string>`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `file`| 要编码的文件 | `File` |

```js
import {fileToBase64} from '@dense-labs/utils'

```

## base64ToFile

将 base64 编码转为文件

返回值 `(base64: string, filename: string): Promise<void>`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `base64`| 要解码的 base64 字符串 | `string` |
| `filename`| 下载文件的名称 | `string` |

```js
import {base64ToFile} from '@dense-labs/utils'

```