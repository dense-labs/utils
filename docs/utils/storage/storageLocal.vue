<script setup lang="ts">
import { ref } from 'vue'
import {storageLocal} from '@dense-labs/utils'
const input = ref(JSON.stringify({'a': 1243, name: '数据'}))
const storageValue = ref('')
const setItem = () => {
    let num = 5000
    storageLocal().setItem('key', input.value, num)
    storageValue.value = `存储的对象${num}毫秒后失效`
}

const getItem = () => {
    storageValue.value = storageLocal().getItem('key')
}

const removeItem = () => {
    storageLocal().removeItem('key')
}

const clear = () => {
    storageLocal().clear()
}
</script>

<template>
    <el-row class="mb-4" style="margin-bottom: 20px;">
        <el-input v-model="input">
            <template #prepend> 存储的值</template>
        </el-input>
    </el-row>
    <el-row class="mb-12">
        <el-button type="primary" @click="setItem">储存对象</el-button>
        <el-button type="primary" @click="getItem">获取对象</el-button>
        <el-button type="primary" @click="removeItem">删除对象</el-button>
        <el-button type="primary" @click="clear">清空储存对象</el-button>
    </el-row>
    <el-row class="text mb-4">{{storageValue}}</el-row>
</template>
<style>
    .text {
        padding: 20px;
    }
</style>