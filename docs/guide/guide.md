# @dense-labs/utils
## 📦 安装
```bash
# with npm
npm install @dense-labs/utils
# or with yarn
yarn add @dense-labs/utils
# or with pnpm
pnpm add @dense-labs/utils
```
## 🌏 CDN 引用
```bash
# with unpkg
<script src="https://unpkg.com/@dense-labs/utils/dist/index.umd.js"></script>
# with jsdelivr
<script src="https://cdn.jsdelivr.net/npm/@dense-labs/utils/dist/index.umd.js"></script>
```
::: tip
当使用`CDN` 引用时，可以使用提供的一个全局变量 `denseLabs` 包含所有方法
:::


## 😀Emojis 
[点我查看](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

在markdown使用 :tada: :100:
<pre>
  :tada: :100:
</pre>

<script setup>
import { ref } from 'vue'
import emo from '../shared/full-emoji'
const emojiData = () => {
  const list = []
  for (let key in emo) {
    list.push({name: key, value: emo[key]})
  }
  return list
}
const emojis = ref(emojiData())
</script>

<ClientOnly>
  <div class="emoji-wrap">
    <div class="em" v-for="(item, index) in emojis" :title="item.name">
      {{item.value}}
    </div>
  </div>
</ClientOnly>

<style scoped>
.emoji-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  height: 450px;
  overflow: auto;
}
.em {
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(60, 60, 67, 0.04);
  border-radius: 4px;
  transition: all .2s;
}
.em:hover {
  background: rgba(60, 60, 67, 0.15);
  transform: scale(2);
}
</style>