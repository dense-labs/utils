# base64相关函数

## copyToClipboard

复制文本到剪贴板

返回值 `(text: string): Promise<boolean>`

### 参数

| **参数属性**  | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `text`       | 要复制到剪贴板的文本 | `string` |

```js
import {copyToClipboard} from '@dense-labs/utils'

const text = 'hello word'
const copy = copyToClipboard(text)
console.log(copy) // true
```


## pasteFromClipboard

复制文本到剪贴板

返回值 `(): Promise<string>`

```js
import {pasteFromClipboard} from '@dense-labs/utils'

const text = await copyToClipboard(text)
console.log(text) // hello word
```

<script setup>
import { ref } from 'vue'
import clip from './clip.vue'
 
</script>

<ClientOnly>
  <div class="emoji-wrap">
    <clip />
  </div>
</ClientOnly>

<details>
<summary>查看代码</summary>

<<< @/utils/clipboard/clip.vue
</details>
