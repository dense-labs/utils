# @dense-labs/utils![@dense-labs](https://img.shields.io/npm/v/@dense-labs/utils.svg) 

常用的工具函数, 帮助简化代码，并开发应用程序更高效
## 📦 Install
```bash
# with npm
npm install @dense-labs/utils
# or with yarn
yarn add @dense-labs/utils
# or with pnpm
pnpm add @dense-labs/utils
```
## 🌏 CDN
```bash
# with unpkg
<script src="https://unpkg.com/@dense-labs/utils/dist/index.umd.js"></script>
# with jsdelivr
<script src="https://cdn.jsdelivr.net/npm/@dense-labs/utils/dist/index.umd.js"></script>
```

> 当使用`CDN` 引用时，可以使用平台提供的一个全局变量 `denseLabs` 包含所有方法

## 📚 docs
[查看文档](https://dense-labs.github.io/utils/)

## ✒️Usage

``` js
import {isEqual} from '@dense-labs/utils'

console.log(isEqual(1, 1)) // true
console.log(isEqual('hello', 'hello')) // true
console.log(isEqual(true, true)) // true

console.log(isEqual(1, 2)) // false
console.log(isEqual('hello', 'world')) // false
console.log(isEqual(true, false)) // false

const obj1 = {a: 1, b: 2}
const obj2 = {a: 1, b: 2}

console.log(isEqual(obj1, obj2)) // true

const obj3 = {a: 1, b: 2}
const obj4 = {a: 1, b: 3}

```
