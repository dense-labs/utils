# 防抖、节流、延迟、相关函数

## debounce

防抖函数，该函数在一段时间内只会执行一次

返回值 `(func: any, wait: number, options: {leading: boolean} = {leading: false}) `

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `func`        | 要防抖的函数| `function` |
| `wait`        | 防抖的时间间隔，单位为毫秒| `number` |
| `options`        | 可选的参数options 配置项，可选参数 leading 表示是否在第一次触发时立即执行函数| `object` |

返回一个防抖后的函数，可通过该函数的 cancel 方法取消防抖

<script setup>
import debounceFun from './debounce-fun.vue'
</script>
<ClientOnly>
  <div class="emoji-wrap">
       打开控制台查看
      <debounceFun></debounceFun>
  </div>
</ClientOnly>

<<< @/utils/debounce/debounce-fun.vue

## throttle

节流函数，该函数在一段时间内只会执行一次

返回值 `(func: any, wait: number, options: {leading: boolean; trailing: boolean} = {leading: false, trailing: false})`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `func`        | 要节流的函数| `function` |
| `wait`        | 节流的时间间隔，单位为毫秒。| `number` |
| `options`        | 可选的参数对象，包含 leading 和 trailing 两个属性，分别表示是否在开始和结束时执行一次| `object` |

返回一个节流函, 可通过该函数的 cancel 方法取消节流

<<< @/utils/debounce/debounce-fun.vue

## sleep

返回一个在指定毫秒数后解决的 Promise。

返回值 `(ms: number): Promise<void>`

### 参数

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `ms`        | 延迟时间，单位为毫秒| `number` |

```vue

<script setup lang="ts">
import {sleep} from '@dense-labs/utils'

const sleepTest = async () => {
    console.log(11)
    await sleep(2000)
    console.log(222)
}
sleepTest()
</script>

<template>
    <el-row class="text mb-4"></el-row>
</template>
```


**防抖：指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。**

使用场景：
- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 窗口大小 resize。只需窗口调整完成后，计算窗口大小，防止重复渲染
- 搜索框搜索输入。只需用户最后一次输入完，再发送请求

**节流：连续触发事件但是在 n 秒中只执行一次函数，节流会稀释函数的执行频率。**

使用场景：
- 搜索框，搜索联想功能
- 滚动加载，加载更多或滚到底部监听