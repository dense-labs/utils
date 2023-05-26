# 颜色相关函数

## genRandomColor
### 参数
- 接收一个参数 [**`hsl`** **`hsla`** **`rgb`** **`rgba`** **`16`**]，返回值类型为 `string`

| **参数属性** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| `arg`        | **`hsl`** **`hsla`** **`rgb`** **`rgba`** **`16`** | `string` |
 <n-button @click="color = randomColor()"> 随机生成rgb颜色 </n-button>
### 基础用法

<<< @/utils/color/genRandomColor.vue