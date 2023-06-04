# 本地存储相关函数

## storageLocal 对象

支持失效时间的本地存储

### 方法

| **方法** | **说明**     | **类型**  |
| ------------ | ------------ | --------- |
| setItem     | 保存对应键名的存储 | k （键名）, v （键值），第三个参数为过期时间**毫秒**, 选填 |
| getItem     | 获取对应键名的存储 | k （键名） |
| removeItem  | 删除对应键名的存储 | k （键名） |
| clear       | 删除此域下的所有存储 | - |

### 使用

<script setup>
    
import storageLocal from './storageLocal.vue'
</script>

<ClientOnly>
  <div class="wrap">
    <storageLocal></storageLocal>
    打开控制台，查看localStorage 变化
  </div>
</ClientOnly>

<<< @/utils/storage/storageLocal.vue
