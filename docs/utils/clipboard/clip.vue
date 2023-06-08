<script setup lang="ts">
import { ref } from 'vue'
import { ElNotification } from 'element-plus'
import {copyToClipboard, pasteFromClipboard} from '@dense-labs/utils'

let input = ref('@dense-labs/utils')
let text = ref('')
const copy = () => {
   const bool = copyToClipboard(input.value)
   if (bool) {
    ElNotification({
        title: 'Success',
        message: '复制成功',
        type: 'success',
    })
   } else {
    ElNotification({
        title: 'Error',
        message: '复制失败',
        type: 'error',
    })
   }
}
const paste = async () => {
    console.log(await navigator.clipboard.readText())
    text.value = await pasteFromClipboard()
}
</script>

<template>
    <el-row class="mb-4" style="margin-bottom: 20px;">
        <el-input v-model="input">
            <template #prepend> 复制的值</template>
        </el-input>
    </el-row>
    <el-row class="mb-4">
        <el-button type="primary" @click="copy">复制</el-button>

        <el-button type="primary" @click="paste">粘贴</el-button>
    </el-row>
    <el-row class="text mb-4" :style="{'background': text}">{{text}}</el-row>
</template>
<style>
    .text {
        padding: 20px;
    }
</style>